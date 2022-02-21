<?php

namespace App\Http\Controllers\App;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;
use Barryvdh\Snappy\Facades\SnappyPdf;
use mikehaertl\pdftk\Pdf;

// Using php-pdftk (https://github.com/mikehaertl/php-pdftk)
// Note: Pdftk binary must be installed and in the web server path
// See: https://www.pdflabs.com/docs/install-pdftk-on-redhat-or-centos/

class PdfController extends Controller {

    

    private function generateHtml($html)


    {

        // Fix bug in SnappyPdf::loadHTML - an <hr> in the Html causes images to not render correctly (for some strange reason)
        $html = str_replace('<hr>', '<div style="border: 1px solid darkgrey; margin: 5px 0px"></div>', $html);        

        $url = config('cloud.cdnUrl');
        
        return <<<EOT
        <!DOCTYPE html>
        <html lang="en" class="no-js">
        <head>
            <meta charset="utf-8">
            <link href="$url/program.css" rel="stylesheet">
        </head>
        <body style="background-color: white">
        $html
        </body>
        </html>        
EOT;

    }

    public function htmlToPdf(Request $request)
    {

        try {

            $returnData = new \stdClass();

            $relativePath = strtolower( session('companyCode')) . '/' . session('employeeId') . '/' . $request->folder;
            $realPath =  storage_path('app/public') . '/' . $relativePath;

            $cloudStorage = Storage::disk(session('region'));
            $localStorage = Storage::disk('public');

            $saveAs = $realPath . '/' . $request->fileName;

            /*Need these php.ini settings
            upload_max_filesize = 64M
            post_max_size = 64M
            max_execution_time = 300*/        

            SnappyPdf::setTimeOut(300);

            $pdf = SnappyPdf::loadHTML( $this->generateHtml($request->bodyHtml) );

            $pdf->setPaper($request->paperSize, $request->orientation);

            if ( isset($request->headerHtml) ) $pdf->setOption('header-html', $this->generateHtml($request->headerHtml) );
            if ( isset($request->footerHtml) ) $pdf->setOption('footer-html', $this->generateHtml($request->footerHtml) );

            if ( isset($request->topmargin) ) $pdf->setOption('margin-top', $request->topmargin);
            if ( isset($request->bottommargin) ) $pdf->setOption('margin-bottom', $request->bottommargin);
            if ( isset($request->leftmargin) ) $pdf->setOption('margin-left', $request->leftmargin);
            if ( isset($request->rightmargin) ) $pdf->setOption('margin-right', $request->rightmargin);
            
            $pdf->save($saveAs, true);

            if ( isset($request->password) && isset($request->allow) ) {

                $pdfToolkit = new Pdf($saveAs);

                $pdfToolkit->setPassword($request->password);

                $pdfToolkit->allow($request->allow);

                if ( !$pdfToolkit->saveAs($saveAs) ) {

                    $returnData->error = $pdfToolkit->getError();

                }
            }

            if ( !isset($returnData->error) ) {

                $cloudStorage->put($relativePath . '/' . $request->fileName, $localStorage->get($relativePath. '/' . $request->fileName), 'public');
                    
                $returnData->path = $relativePath;

                $returnData->url = $cloudStorage->url($relativePath . '/' . $request->fileName);

                $localStorage->delete($relativePath . '/' . $request->fileName);

            }

            return json_encode($returnData);

        } catch (\Exception $e) {

            $returnData->error = $e->getMessage();

            return json_encode($returnData);
        }

    }


    public function combine(Request $request)
    {

        $returnData = new \stdClass();

        $returnData->error = null;

        $files = [];
        
        $relativePath = strtolower( session('companyCode')) . '/' . session('employeeId') . '/' . $request->folder;
        $realPath =  storage_path('app/public') . '/' . $relativePath;

        $cloudStorage = Storage::disk(session('region'));
        $localStorage = Storage::disk('public');

        $counter = -1;

        foreach(json_decode($request->pdfFiles) as $file) {

            $counter++;

            $handle = $this->getHandle($counter);

            // Download a copy of the file to the local public storage directory (so pdftk can comine them)
            $localStorage->put($relativePath . '/' . $file->fileName, $cloudStorage->get($file->path . '/' . $file->fileName));

            // Add to the array of files to br combined
            $files[$handle] = storage_path('app/public') . '/' .  $relativePath . '/' . $file->fileName;

        }

        $pdfToolkit = new Pdf($files);

        // Cat (Concatenate) the PDF's
        foreach($files as $letter => $fileName) {

            if ( !$pdfToolkit->cat($letter) ) $returnData->error = $pdfToolkit->getError();
        
        }

        if ( !isset($returnData->error) ) {

            if ( !$pdfToolkit->saveAs($realPath . '/' . $request->saveAs) ) {

                $returnData->error = $pdfToolkit->getError();

            } else {
                
                $cloudStorage->put($relativePath . '/' . $request->saveAs, $localStorage->get($relativePath. '/' . $request->saveAs), 'public');
                
                $returnData->path = $relativePath;

                $returnData->url = $cloudStorage->url($relativePath . '/' . $request->saveAs);

                // Delete the local files 
                foreach(json_decode($request->pdfFiles) as $file) {

                    $localStorage->delete($relativePath . '/' . $file->fileName);

                }

                $localStorage->delete($relativePath . '/' . $request->saveAs);

            }

        }
        
        return json_encode($returnData);
    }

    private function getHandle($counter)
    {

        $letters = range('A', 'Z'); //['A','B' ... 'Z']
        $returnData = '';
        $chunks = 0;
        
        if ($counter <= 25 ) {
        
            $returnData = $letters[$counter];
        
        } else {
        
            $chunks = intdiv($counter,25) + 1;
            
            $letter =  ($counter % 25) - 1;
        
            for ($i=0; $i < $chunks; $i++) { 
                
                $returnData .= $letters[$letter];
        
            }
        
        }

        return $returnData;

    }

    // public function setPassword(Request $request)
    // {

    //     $returnData = new \stdClass();
    //     $returnData->error = null;

    //     $pdfToolkit = new Pdf($request->fileName);

    //     $pdfToolkit->setPassword($request->password);
    //     $pdfToolkit->allow($request->allow);

    //     if ( !$pdfToolkit->saveAs($request->fileName) ) {

    //         $returnData->error = $pdfToolkit->getError();

    //     }

    // }

        /****** Allow options *******************
        Printing – Top Quality Printing
        DegradedPrinting – Lower Quality Printing
        ModifyContents – Also allows Assembly
        Assembly
        CopyContents – Also allows ScreenReaders
        ScreenReaders
        ModifyAnnotations – Also allows FillIn
        FillIn
        AllFeatures – Allows the user to perform all of the above, and top quality printing.
       ******************************************/


}
