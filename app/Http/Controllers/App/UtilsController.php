<?php

namespace App\Http\Controllers\App;

use Illuminate\Http\Request;
use App\Custom\Utils;

class UtilsController extends Controller {

    public function initializeData(Request $request)
    {

        $returnData = new \stdClass();

        try {

            $returnData->companyCode = strtolower( session('companyCode') );
            $returnData->companyName = session('companyName');
            $returnData->loggedInEmployeeId = session('employeeId');
            $returnData->loggedInEmployeeName = session('employeeName');
            $returnData->loggedInEmployeeEmail = session('employeeEmail');
            $returnData->loggedInEmployeeGroupCode = session('employeeGroupCode');
            $returnData->loggedInEmployeeSecGroupId = session('employeeSecGroupId');
            $returnData->loggedInEmployeeAllocateToId = session('employeeAllocateToId');
            $returnData->loggedInEmployeeAllocateToName = session('employeeAllocateToName');
            $returnData->supervisorFlag = session('employeeGroupCode') === 'supervisor' ? true : false;
            
            $returnData->secGroupBusinessOption      = session('secGroupBusinessOption');
            $returnData->secGroupMatterOption        = session('secGroupMatterOption');
            $returnData->secGroupCreditorOption      = session('secGroupCreditorOption');
            $returnData->secGroupCostCentreOption    = session('secGroupCostCentreOption');
            $returnData->secGroupEmployeeOption      = session('secGroupEmployeeOption');
            $returnData->secGroupClientOption        = session('secGroupClientOption');
            $returnData->secGroupSpreadSheetOption   = session('secGroupSpreadSheetOption');
            $returnData->secGroupReportOption        = session('secGroupReportOption');
            $returnData->secGroupMatterFileRefFlag   = session('secGroupMatterFileRefFlag');
            $returnData->secGroupMatterArchivedFlag  = session('secGroupMatterArchivedFlag');
            $returnData->secGroupFinancialAlertsFlag = session('secGroupFinancialAlertsFlag');
    
            return json_encode($returnData);
    
        } catch(\Exception $e)  {
    
            $returnData->errors = $e->getMessage();
            return json_encode($returnData);
    
        }

    }
    
    public function getCollCommPercentAndLimit(Request $request)
    {

        $returnData = new \stdClass();

        try {

            $apiUrl = "/utils/getcollcommpercentandlimit?date=70000";
            //$apiUrl = "/utils/getcollcommpercentandlimit?date=" . $request->date;

            $response = Utils::SetCurlParams($apiUrl);

            return json_encode($response);
    
        } catch(\Exception $e)  {
    
            $returnData->errors = $e->getMessage();
            return json_encode($returnData);
    
        }

    }

    public function getBasicData(Request $request)
    {

        $returnData = new \stdClass();

        try {

            $apiUrl = "/utils/getbasicdata";

            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl,'POST', $postFields);

            return json_encode($response);
    
        } catch(\Exception $e)  {
    
            $returnData->errors = $e->getMessage();
            return json_encode($returnData);
    
        }

    }

    /*public function store(Request $request)
    {

        $returnData = new \stdClass();

        try {

            if ( isset($request->recordid) ) {
                $apiUrl = "/{$request->tableName}/{$request->recordid}";
                $customRequest = 'PUT';
            } else {
                $apiUrl = "/{$request->tableName}";
                $customRequest = 'POST';
            } 
            
            unset($request['recordid']);
            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl, $customRequest, $postFields);

            return json_encode($response);
    
        } catch(\Exception $e)  {
    
            $returnData->errors = $e->getMessage();
            return json_encode($returnData);
    
        }
    
    }

    public function getTablePosition(Request $request)
    {

        $returnData = new \stdClass();

        try {

            if ( isset($request->id) ){
                $apiUrl = "/{$request->tableName}/{$request->id}";
            } else {
                $apiUrl = "/{$request->tableName}?". urldecode("&where[]={$request->tableName}.description,<," . str_replace("'","''",$request->description) . "&orderby[]=Description&method=count");
            }    
            
            $response = Utils::SetCurlParams($apiUrl);

            return json_encode($response);
    
        } catch(\Exception $e)  {
    
            $returnData->errors = $e->getMessage();
            return json_encode($returnData);
    
        }

    }


    public function destroy(Request $request) {

        $apiUrl = "/{$request->tableName}/";
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
    }*/


}
