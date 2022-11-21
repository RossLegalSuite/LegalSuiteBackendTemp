<?php

namespace App\Http\Controllers\Auth;

use App\Custom\Utils;
use App\Http\Controllers\App\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

//use Illuminate\Database\QueryException;
//use Illuminate\Support\Facades\Hash;
//use Illuminate\Support\Facades\Artisan;
//use Illuminate\Validation\Rule;

class LoginController extends Controller
{
    public function getApiKey(Request $request)
    {
        $returnData = new \stdClass();

        try {
            $postFields = http_build_query($request->all());

            $curl = curl_init();

            curl_setopt_array($curl, [
                CURLOPT_URL => config('api.url').'/getapikey',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_SSL_VERIFYPEER => false,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => $postFields,
                CURLOPT_HTTPHEADER => [
                    'authorization: '.config('api.devKey'),
                ],
            ]);

            //logger('Url',[config('api.url') . "/auth?company={$request->company}&login={$request->login}&password={$request->password}&source=lol",]);

            $response = json_decode(curl_exec($curl));

            if (curl_errno($curl)) {
                $returnData->errors = '<p>Could not connect to '.config('api.url').'</p><p>Curl Error No: '.curl_errno($curl).'</p><p>'.Utils::getCurlError(curl_errno($curl)).'</p>';
                curl_close($curl);

                return json_encode($returnData);
            } elseif (isset($response->error)) {
                $returnData->errors = $response->error;

                curl_close($curl);

                return json_encode($returnData);
            }

            curl_close($curl);

            session()->flush();

            session([
                'api_token' => $response->apikey,
                'region' => 'af-south-1',
                'companyCode' => $response->company->firmcode,
                'companyName' => $response->company->companyname,
            ]);



            return json_encode($response);
        } catch (\Exception $e) {
            $returnData->errors = $e->getMessage();

            return json_encode($returnData);
        }
    }

    public function clientLogin(Request $request)
    {
        $returnData = new \stdClass();

        try {
            $rules = [
                'login' => 'required',
                'password' => 'required',
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $returnData->validationErrors = $validator->errors();

                return json_encode($returnData);
            }

            $apiUrl = '/client/login';

            $postFields = http_build_query($request->all());

            $response = Utils::SetCurlParams($apiUrl, 'POST', $postFields);

            //logger('$response',[$response]);

            if (! isset($response->errors)) {
                session([
                    'partyLoggedInFlag' => true,
                    'partyId' => $response->partyid,
                    'partyName' => $response->partyname,
                    'partyMatterPrefix' => $response->partymatterprefix,
                    'firmCode' => strtoupper($request->firmCode),
                ]);
            } else {
                session([
                    'partyLoggedInFlag' => false,
                    'partyId' => null,
                    'partyName' => null,
                    'firmCode' => null,
                ]);
            }

            return json_encode($response);
        } catch (\Exception $e) {
            $returnData->errors = $e->getMessage();

            return json_encode($returnData);
        }
    }

    public function login(Request $request)
    {
        $returnData = new \stdClass();

        $rules = [
            'login' => 'required',
            'password' => 'required',
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $returnData->errors = $validator->errors();

            return json_encode($returnData);
        }

        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => config('api.url')."/backend/auth?login={$request->login}&password={$request->password}&source=backend",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => [
                'authorization: '.config('api.devKey'),
            ],
        ]);

        //logger('Url',[config('api.url') . "/auth?company={$request->company}&login={$request->login}&password={$request->password}&source=lol",]);

        $response = json_decode(curl_exec($curl));

        //logger('$response',[$response]);

        if (curl_errno($curl)) {
            $returnData->errors = '<p>Could not connect to '.config('api.url').'</p><p>Curl Error No: '.curl_errno($curl).'</p><p>'.Utils::getCurlError(curl_errno($curl)).'</p>';
            curl_close($curl);

            return json_encode($returnData);
        } elseif (isset($response->error)) {
            $returnData->errors = $response->error;

            curl_close($curl);

            return json_encode($returnData);
        }

        curl_close($curl);

        if (isset($response->errors)) {
            $returnData->errors = $response->errors;

            return json_encode($returnData);
        } elseif (! isset($response->success)) {
            $returnData->errors = 'Login via the LegalSuite API was not successful';

            return json_encode($returnData);
        }

        if ($response->employee->supervisorflag) {
            $employeeGroupCode = 'supervisor';
        } else {
            $employeeGroupCode = 'user';
        }

        // Note: These are copied to the root object in app.js
        // using initializeData() in the UtilsController.php


        session()->flush();

        session([
            'serverUrl' => 'https://legalsuitestaging.co.za',
            'region' => 'af-south-1',
            'api_token' => $response->success,
            'employee' => $response->employee,
            'companyCode' => $response->company->firmcode,
            'employeeId' => $response->employee->recordid,
            'employeeName' => $response->employee->name,
            'employeeEmail' => $response->employee->email,
            
            
            //'companyName' => $response->company->companyname,
            // 'employeeGroupCode' => $employeeGroupCode,
            // 'employeeSecGroupId' => $response->employee->secgroupid,
            // 'employeeUseMatterCostCentreFlag' => $response->employee->usemattercostcentreflag,
            // 'employeeAllocateToId' => $response->employee->recordid,
            // 'employeeAllocateToName' => $response->employee->name,
            // 'secGroupBusinessOption' => $response->secgroup->businessoption,
            // 'secGroupMatterOption' => $response->secgroup->matteroption,
            // 'secGroupCreditorOption' => $response->secgroup->creditoroption,
            // 'secGroupCostCentreOption' => $response->secgroup->costcentreoption,
            // 'secGroupEmployeeOption' => $response->secgroup->employeeoption,
            // 'secGroupClientOption' => $response->secgroup->clientoption,
            // 'secGroupReportOption' => $response->secgroup->reportoption,
            // 'secGroupSpreadSheetOption' => $response->secgroup->spreadsheetoption,
            // 'secGroupMatterFileRefFlag' => $response->secgroup->matterfilerefflag,
            // 'secGroupMatterArchivedFlag' => $response->secgroup->matterarchivedflag,
            // 'secGroupFinancialAlertsFlag' => $response->secgroup->financialalertsflag,
        ]);
    }

    public function logout()
    {
        $clientLoggedIn = false;

        //logger('LoginController session(partyLoggedInFlag)',[session('partyLoggedInFlag')]);
        //logger('LoginController session(firmCode)',[session('firmCode')]);

        if ((null != session('partyLoggedInFlag'))) {
            $clientLoggedIn = session('partyLoggedInFlag');
            $firmCode = session('firmCode');
        }

        //logger('route(clientLogin)',[route('clientLogin')]);

        session()->flush(); //Remove all data from the session

        if ($clientLoggedIn) {

            //return redirect()->route('clientLogin', ['firmcode' => session('firmCode')]);

            //return route('clientLoggedOut');
            return '/login/'.$firmCode;
        //return view('clientLoggedOut');
            //return view('client');
        } else {
            return route('welcome');
        }
    }
}
