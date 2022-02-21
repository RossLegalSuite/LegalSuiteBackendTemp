<?php

// use App\Party;
// use App\Matter;
// use App\Custom\PartyHelper;
// use App\Custom\MatterHelper;
// use App\Custom\DataTablesHelper;
// use App\Custom\Utils;
//use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/logout', '\App\Http\Controllers\Auth\LoginController@logout')->name('logout');

Route::get('/checkSession', function () {  return session()->has('companyCode') ? 'true' : 'false'; });
Route::get('/killSession', function () {  session()->flush(); return 'Session killed'; });

Route::middleware(['loggedout'])->group(function () {

    Route::post('/login', '\App\Http\Controllers\Auth\LoginController@login')->name('login');
    Route::post('/register', '\App\Http\Controllers\Auth\RegisterController@register')->name('register');
    Route::post('/generateCompanyCode', '\App\Http\Controllers\Auth\RegisterController@generateCompanyCode');

});

Route::get('/', function () {  return view('welcome'); })->name('welcome');

Route::middleware(['loggedin'])->group(function () {

    
    Route::get('/home', function () {  return view('app'); })->name('home');
    
    //***************************************************************/
    // Shortcuts
    /***************************************************************
    if (App::environment('local')) {

        //30 Mar 2021 - Program gave errors if user clicks too early on UI that's not fully loaded
        // So this is just here in development to speed up reloading
        
        Route::get('/matters', function () {  return view('app'); });
        Route::get('/settings', function () {  return view('app'); });
        Route::get('/parties', function () {  return view('app'); });
        Route::get('/creditors', function () {  return view('app'); });
        Route::get('/employees', function () {  return view('app'); });
        Route::get('/invoices', function () {  return view('app'); });
        Route::get('/receipts', function () {  return view('app'); });
        Route::get('/bills', function () {  return view('app'); });
        Route::get('/payments', function () {  return view('app'); });
        Route::get('/statements', function () {  return view('app'); });
        Route::get('/reports', function () {  return view('app'); });
        Route::get('/assemble', function () {  return view('app'); });
        Route::get('/document_sets', function () {  return view('app'); });
        Route::get('/document_templates', function () {  return view('app'); });
        Route::get('/correspondence', function () {  return view('app'); });
        Route::get('/templates', function () {  return view('app'); });
        Route::get('/components', function () {  return view('app'); });
        Route::get('/accounts', function () {  return view('app'); });
        Route::get('/journals', function () {  return view('app'); });
        Route::get('/batches', function () {  return view('app'); });
        Route::get('/feenotes', function () {  return view('app'); });
        Route::get('/disbursements', function () {  return view('app'); });
        Route::get('/filenotes', function () {  return view('app'); });
        Route::get('/reminders', function () {  return view('app'); });
        Route::get('/extra_screens', function () {  return view('app'); });
        Route::get('/email', function () {  return view('app'); });

    } else {
        
        //30 Mar 2021 - Program gave errors if user clicks too early on UI that's not fully loaded
        // So forcing them to start at the Home screen
        Route::get('/{any}', function () { return redirect('/home'); });//->where('any','.*');
    }*/

    Route::get('/{any}', function () { return redirect('/home'); });//->where('any','.*');


    //***************************************************************/
    // Permissions
    //***************************************************************/
    Route::prefix('permissions')->group(function () {
        Route::post('get', 'PermissionController@get');
        Route::post('store', 'PermissionController@store');
    });

    //***************************************************************/
    // Extra Screens
    //***************************************************************/
    Route::prefix('extrascreens')->group(function () {
        Route::post('store', 'ExtraScreenController@store');
    });
    
    //***************************************************************/
    // Extra Screen Fields
    //***************************************************************/
    Route::prefix('extra_screen_fields')->group(function () {
        Route::post('get', 'ExtraScreenFieldController@get');
        Route::post('store', 'ExtraScreenFieldController@store');
        Route::post('delete', 'ExtraScreenFieldController@destroy');
    });
    

    //***************************************************************/
    // Matter Extra Screen Data
    //***************************************************************/
    Route::prefix('matter_extra_screens')->group(function () {
        Route::post('get', 'MatterExtraScreenController@get');
    });
    
    //***************************************************************/
    // Party Extra Screen Data
    //***************************************************************/
    Route::prefix('party_extra_screens')->group(function () {
        Route::post('get', 'PartyExtraScreenController@get');
    });
    
    //***************************************************************/
    // Matter Party Extra Screen Data
    //***************************************************************/
    Route::prefix('matter_party_extra_screens')->group(function () {
        Route::post('get', 'MatterPartyExtraScreenController@get');
    });
    

    //***************************************************************/
    // Contact Numbers
    //***************************************************************/
    Route::prefix('contact_numbers')->group(function () {
        Route::post('get', 'ContactNumberController@get');
    });

    
    //***************************************************************/
    // Utils Controller
    //***************************************************************/
    Route::prefix('utils')->group(function () {
        Route::post('getBasicData', 'UtilsController@getBasicData');
        Route::get('initializeData', 'UtilsController@initializeData');
        Route::get('getCollCommPercentAndLimit', 'UtilsController@getCollCommPercentAndLimit');
    });

    //***************************************************************/
    // Lookup Library
    //***************************************************************/
    Route::prefix('library')->group(function () {
        Route::post('store', 'LibraryController@store');
        Route::post('getTablePosition', 'LibraryController@getTablePosition');
    });

    //***************************************************************/
    // ColDebit
    //***************************************************************/
    Route::prefix('coldebits')->group(function () {
        Route::post('get', 'ColDebitController@get');
    });

    //***************************************************************/
    // Matter Parties
    //***************************************************************/
    Route::prefix('matter_parties')->group(function () {
        Route::post('store', 'MatterPartyController@store');
        Route::post('checkSorter', 'MatterPartyController@checkSorter');
        Route::post('getTablePosition', 'MatterPartyController@getTablePosition');
    });
    
    //***************************************************************/
    // Employees
    //***************************************************************/

    Route::prefix('employees')->group(function () {
        Route::post('saveSmtpDetails', 'EmployeeController@saveSmtpDetails');
        Route::get('get-current', 'EmployeeController@getCurrent');
    });

    //***************************************************************/
    // Emails
    //***************************************************************/
    Route::prefix('mail')->group(function () {
        Route::post('testIncomingServer', 'EmailController@testIncomingServer');
        Route::post('testOutgoingServer', 'EmailController@testOutgoingServer');
        Route::post('sendEmail', 'EmailController@sendEmail');
        Route::post('getMessages', 'EmailController@getMessages');
        Route::post('getMessageBody', 'EmailController@getMessageBody');
        Route::post('getFolders', 'EmailController@getFolders');
        Route::post('saveAttachments', 'EmailController@saveAttachments');
        Route::post('uploadEmailMessage', 'EmailController@uploadEmailMessage');
        Route::post('getCorrespondenceEmail', 'EmailController@getCorrespondenceEmail');
    });



    //***************************************************************/
    // Reports
    //***************************************************************/

    // Route::prefix('reports')->group(function () {
    //     Route::post('get', 'ReportController@get');
    //     Route::post('store', 'ReportController@store');
    //     Route::post('delete', 'ReportController@destroy');
    //     Route::post('getTablePosition', 'ReportController@getTablePosition');
    //     Route::post('trial-balance', 'ReportController@trialBalance');
    //     Route::post('income-statement', 'ReportController@incomeStatement');
    //     Route::post('balance-sheet', 'ReportController@balanceSheet');
    // });

    //***************************************************************/
    // LibreOffice
    //***************************************************************/
    // Route::prefix('libre')->group(function () {
    //     Route::post('testMacro', 'LibreController@testMacro');
    //     Route::post('replaceLetterHead', 'LibreController@replaceLetterHead');
    // });


    //***************************************************************/
    // Pdf
    //***************************************************************/
    
    Route::prefix('pdf')->group(function () {
        Route::get('combine', 'PdfController@combine');
        Route::post('combine', 'PdfController@combine');
        Route::post('htmlToPdf', 'PdfController@htmlToPdf');
    });


    //***************************************************************/
    // Files
    //***************************************************************/
    Route::prefix('file')->group(function () {
        Route::post('exists', 'FileController@exists');
        Route::post('selected', 'FileController@selected');
        Route::post('uploadFile', 'FileController@uploadFile');
        Route::post('upload', 'FileController@upload');
        Route::post('save', 'FileController@save');
        Route::post('delete', 'FileController@delete');
        Route::post('convertDocxToPdf', 'FileController@convertDocxToPdf');
    });

    //***************************************************************/
    // Help
    //***************************************************************/
    Route::prefix('help')->group(function () {
        Route::post('get', 'HelpController@get');
    });

    //***************************************************************/
    // All other tables
    //***************************************************************/
    Route::post('{tablename}/getTemplateData/{recordid?}', 'GenericTableController@getTemplateData');
    Route::post('{tablename}/get/{recordid?}', 'GenericTableController@get');
    Route::post('{tablename}/store', 'GenericTableController@store');
    Route::post('{tablename}/update', 'GenericTableController@update');
    Route::post('{tablename}/delete', 'GenericTableController@delete');
    Route::post('{tablename}/first', 'GenericTableController@first');

});
