<?php

namespace App\Http\Controllers\App;

use App\Custom\Utils;
use Illuminate\Http\Request;

class UtilsController extends Controller
{
    // Generic Utils caller
    // To Do: Change others below to use this
    public function call(Request $request, $method)
    {
        $returnData = new \stdClass();

        try {
            $apiUrl = '/utils/'.strtolower($method);

            $postFields = http_build_query($request->all());

            //logger('$postFields',[$postFields]);

            $response = Utils::SetCurlParams($apiUrl, 'POST', $postFields);

            return json_encode($response);

        } catch (\Exception $e) {
            
            $returnData->errors = $e->getMessage();

            return json_encode($returnData);
        }
    }


    public function testConnection(Request $request)
    {
        try {
            $apiUrl = '/auth/testconnection';

            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl, 'POST', $postFields);

            return json_encode($response);

        } catch (\Exception $e) {

            $returnData['errors'] = $e->getMessage();

            return json_encode($returnData);
        }
    }



    public function initializeData(Request $request)
    {
        $returnData = new \stdClass();

        try {
            $returnData->companyCode = strtolower(session('companyCode'));
            $returnData->companyName = session('companyName');

            if (null !== session('partyId')) {
                $returnData->loggedInPartyId = session('partyId');
                $returnData->loggedInPartyName = session('partyName');
                $returnData->loggedInPartyMatterPrefix = session('partyMatterPrefix');
                $returnData->supervisorFlag = false;
            } else {
                $returnData->loggedInEmployeeId = session('employeeId');
                $returnData->loggedInEmployeeName = session('employeeName');
                $returnData->loggedInEmployeeEmail = session('employeeEmail');
                $returnData->loggedInEmployeeGroupCode = session('employeeGroupCode');
                $returnData->loggedInEmployeeSecGroupId = session('employeeSecGroupId');
                $returnData->loggedInEmployeeUseMatterCostCentreFlag = session('employeeUseMatterCostCentreFlag');
                $returnData->loggedInEmployeeAllocateToId = session('employeeAllocateToId');
                $returnData->loggedInEmployeeAllocateToName = session('employeeAllocateToName');
                $returnData->supervisorFlag = session('employeeGroupCode') === 'supervisor' ? true : false;

                $returnData->secGroupBusinessOption = session('secGroupBusinessOption');
                $returnData->secGroupMatterOption = session('secGroupMatterOption');
                $returnData->secGroupCreditorOption = session('secGroupCreditorOption');
                $returnData->secGroupCostCentreOption = session('secGroupCostCentreOption');
                $returnData->secGroupEmployeeOption = session('secGroupEmployeeOption');
                $returnData->secGroupClientOption = session('secGroupClientOption');
                $returnData->secGroupSpreadSheetOption = session('secGroupSpreadSheetOption');
                $returnData->secGroupReportOption = session('secGroupReportOption');
                $returnData->secGroupMatterFileRefFlag = session('secGroupMatterFileRefFlag');
                $returnData->secGroupMatterArchivedFlag = session('secGroupMatterArchivedFlag');
                $returnData->secGroupFinancialAlertsFlag = session('secGroupFinancialAlertsFlag');
            }

            return json_encode($returnData);
        } catch (\Exception $e) {
            $returnData->errors = $e->getMessage();

            return json_encode($returnData);
        }
    }

    public function deleteEmployeeTags(Request $request)
    {
        $returnData = new \stdClass();

        try {
            $apiUrl = '/utils/deleteemployeetags';

            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl, 'POST', $postFields);

            return json_encode($response);
        } catch (\Exception $e) {
            $returnData->errors = $e->getMessage();

            return json_encode($returnData);
        }
    }

    public function deleteTagged(Request $request)
    {
        $returnData = new \stdClass();

        try {
            $apiUrl = '/utils/deletetagged';

            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl, 'POST', $postFields);

            return json_encode($response);
        } catch (\Exception $e) {
            $returnData->errors = $e->getMessage();

            return json_encode($returnData);
        }
    }

    public function clearTagged(Request $request)
    {
        $returnData = new \stdClass();

        try {
            $apiUrl = '/utils/cleartagged';

            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl, 'POST', $postFields);

            return json_encode($response);
        } catch (\Exception $e) {
            $returnData->errors = $e->getMessage();

            return json_encode($returnData);
        }
    }

    public function getCollCommPercentAndLimit(Request $request)
    {
        $returnData = new \stdClass();

        try {
            $apiUrl = '/utils/getcollcommpercentandlimit?date=70000';
            //$apiUrl = "/utils/getcollcommpercentandlimit?date=" . $request->date;

            $response = Utils::SetCurlParams($apiUrl);

            return json_encode($response);
        } catch (\Exception $e) {
            $returnData->errors = $e->getMessage();

            return json_encode($returnData);
        }
    }


    public function getIncomeAccount(Request $request)
    {
        $returnData = new \stdClass();

        try {
            $apiUrl = '/utils/getincomeaccount';

            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl, 'POST', $postFields);

            return json_encode($response);
        } catch (\Exception $e) {
            $returnData->errors = $e->getMessage();

            return json_encode($returnData);
        }
    }

    // public function getBasicData(Request $request)
    // {

    //     $returnData = new \stdClass();

    //     try {

    //         $apiUrl = "/utils/getbasicdata";

    //         $postFields = http_build_query($request->all());

    //         $response = Utils::SetCurlParams($apiUrl,'POST', $postFields);

    //         return json_encode($response);

    //     } catch(\Exception $e)  {

    //         $returnData->errors = $e->getMessage();
    //         return json_encode($returnData);

    //     }

    // }

    public function getFileType(Request $request)
    {
        $returnData = new \stdClass();

        try {
            $apiUrl = '/utils/getfiletype';

            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl, 'POST', $postFields);

            return json_encode($response);
        } catch (\Exception $e) {
            $returnData->errors = $e->getMessage();

            return json_encode($returnData);
        }
    }

    public function getMimeType(Request $request)
    {
        $returnData = new \stdClass();

        try {
            $apiUrl = '/utils/getmimetype';

            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl, 'POST', $postFields);

            return json_encode($response);
        } catch (\Exception $e) {
            $returnData->errors = $e->getMessage();

            return json_encode($returnData);
        }
    }

    public function setServerURL(Request $request)
    {

        // logger('$response->all()',[$request->all()]);
        // logger('1 Utils Controller - setServerURL - Current:',[session('serverUrl')]);

        //logger('Utils Controller - setServerURL: $request->serverUrl',[$request->serverUrl]);
        $returnData = new \stdClass();
        
        try {
            
            session(['serverUrl' => $request->serverUrl]);

            // logger('2 Utils Controller - setServerURL - Now:',[session('serverUrl')]);


        } catch (\Exception $e) {
            $returnData->errors = $e->getMessage();

            return json_encode($returnData);
        }
    }

}
