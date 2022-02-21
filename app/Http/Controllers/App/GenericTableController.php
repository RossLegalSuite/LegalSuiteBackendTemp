<?php

namespace App\Http\Controllers\App;

use App\Custom\DataTablesHelper;
use Illuminate\Http\Request;
use App\Custom\Utils;

class GenericTableController extends Controller {

    public function get(Request $request, $tableName, $id = null)
    {

        try {

            // If these are sent in the request
            if ( isset($request->tableName) ) $tableName = $request->tableName;
            if ( isset($request->recordid) ) $id = $request->recordid;

            $apiUrl = "/" . strtolower( $tableName) . "/get";

            if ( isset($id)) $apiUrl .= "/" . $id;

            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl,'POST', $postFields);

            return json_encode($response);
    
        } catch(\Exception $e)  {
    
            $returnData['errors'] = $e->getMessage();
            return json_encode($returnData);
    
        }

    }

    public function store(Request $request, $tableName) {

        $apiUrl = "/" . strtolower( $tableName) . "/";

        if ( isset($request->recordid)) {
            $apiUrl .= 'update';
        } else {
            $apiUrl .= 'store';
        }

        $postFields = http_build_query($request->all());

        $response = Utils::SetCurlParams($apiUrl,'POST', $postFields);

        return json_encode($response);

    }

    public function update(Request $request, $tableName) {

        $apiUrl = "/" . strtolower( $tableName) . "/update";

        $postFields = http_build_query($request->all());

        $response = Utils::SetCurlParams($apiUrl,'POST', $postFields);

        return json_encode($response);

    }

    public function getTemplateData(Request $request, $tableName, $id)
    {

        try {


            $apiUrl = '/' . strtolower( $tableName) . '/gettemplatedata/' . $id ;

            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl,'POST', $postFields);

            return json_encode($response);
    
        } catch(\Exception $e)  {
    
            $returnData['errors'] = $e->getMessage();
            return json_encode($returnData);
    
        }

    }

    public function first(Request $request, $tableName)
    {

        try {

            $apiUrl = '/' . strtolower( $tableName) . '/first' ;

            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl,'POST', $postFields);

            return json_encode($response);
    
        } catch(\Exception $e)  {
    
            $returnData['errors'] = $e->getMessage();
            return json_encode($returnData);
    
        }

    }




    public function destroy(Request $request) {

        $apiUrl = "/" . strtolower( $request->tableName) . "/";
        return DataTablesHelper::destroy($request->id, $apiUrl);

    }


    public function destroy_verbose(Request $request)
    {

        $returnData = new \stdClass();

        if (is_array($request->id)) {

            foreach ($request->id as $id) {

                try {

                    $apiUrl = "/{$request->tableName}/{$id}";
                    $customRequest = 'DELETE'; 
            
                    $response = Utils::SetCurlParams($apiUrl,$customRequest);

                } catch(\Exception $e)  {
            
                    $returnData->errors = $e->getMessage();
                    return json_encode($returnData);

                }       
    
            }

            return json_encode($returnData);            

        } else {  

            try {

                $apiUrl = "/{$request->tableName}/{$request->id}";
                $customRequest = 'DELETE'; 
        
                $response = Utils::SetCurlParams($apiUrl,$customRequest);
                
                return json_encode($response);
        
            } catch(\Exception $e)  {
        
                $returnData->errors = $e->getMessage();
                return json_encode($returnData);
        
            }  
            
        }
    }


}
