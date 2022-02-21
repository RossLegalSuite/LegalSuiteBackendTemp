<?php

namespace App\Http\Controllers\Auth;

use App\Custom\AccountingSeeder;
use App\Custom\Utils;
use App\Http\Controllers\App\Controller;
use App\Models\Employee;
use App\Models\User;
use DB;
use Illuminate\Auth\Events\Registered;
use Illuminate\Database\QueryException;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    use RegistersUsers;

    protected $redirectTo = '/';

    public function __construct()
    {
        $this->middleware('guest');
    }

    // See: https://laraveldaily.com/9-things-you-can-customize-in-laravel-registration/

    public function register(Request $request)
    {

        // Need to define STDIN if in production otherwise it throws error: "Use of undefined constant STDIN - assumed 'STDIN'
        //https://stackoverflow.com/questions/49746440/laravel-artisan-use-of-undefined-constant-stdin-assumed-stdin-infinite-loop

        if (! defined('STDIN')) {
            define('STDIN', fopen('php://stdin', 'r'));
        }

        $returnData = new \stdClass();

        $rules = [
            'company_code' => ['required', 'string', 'min:4', 'max:20', 'unique:users'],
            'company_name' => ['required', 'string', 'min:6'],
            'company_trading_name' => ['required'],
            'company_country' => ['required'],
            'name' => ['required', 'string', 'max:50'],
            'email' => ['required', 'string', 'email', 'max:50', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            $returnData->errors = $validator->errors();

            return json_encode($returnData);
        }

        if (is_numeric($request->company_code)) {
            $validator->errors()->add('company_code', '<p>The Company Code may not consist solely of numbers, i.e. it must have at least one alphabetic character.</p>');

            $returnData->errors = $validator->errors();

            return json_encode($returnData);
        } elseif (preg_match('/[^a-zA-Z0-9_$]/', $request->company_code) !== 0) {
            $validator->errors()->add('company_code', '<p>The Company Code may only contain the characters A-Z,0-9,$ or the underscore character.</p>');

            $returnData->errors = $validator->errors();

            return json_encode($returnData);
        }

        // Need this to create Triggers!!
        DB::statement('SET GLOBAL log_bin_trust_function_creators = 1;');

        // Remove any no compliant characters (to create a valid schema name)
        $companyCode = strtolower(preg_replace('/[^a-zA-Z0-9_]/', '', $request->company_code));

        //CREATE THE MYSQL DATABASE
        try {
            DB::statement('CREATE SCHEMA '.$companyCode.' DEFAULT CHARACTER SET utf8mb4;');
        } catch (QueryException $e) {
            $validator->errors()->add('database', Utils::MySqlError($e));
            $returnData->errors = $validator->errors();

            return json_encode($returnData);
        }

        //CREATE THE MYSQL ADMIN USER
        try {
            DB::statement('CREATE USER '.$companyCode.'_admin@localhost'." IDENTIFIED BY 'Bacon1024!!';");
        } catch (QueryException $e) {
            $validator->errors()->add('database', Utils::MySqlError($e));
            $returnData->errors = $validator->errors();

            return json_encode($returnData);
        }

        //CREATE THE MYSQL APP USER
        try {
            DB::statement('CREATE USER '.$companyCode.'_user@localhost'.' IDENTIFIED BY \''.$companyCode.'_1024\';');
        } catch (QueryException $e) {
            $validator->errors()->add('database', Utils::MySqlError($e));
            $returnData->errors = $validator->errors();

            return json_encode($returnData);
        }

        //GRANT THE USERS DATABASE PRIVILEGES
        try {

            //Admin User
            DB::statement('GRANT ALL PRIVILEGES ON '.$companyCode.'.* TO '.$companyCode.'_admin@localhost'.';');

            //Front End User
            DB::statement('GRANT SELECT, CREATE, CREATE VIEW, ALTER, INDEX, REFERENCES, INSERT, UPDATE, DELETE, EXECUTE, TRIGGER ON '.$companyCode.'.* TO '.$companyCode.'_user@localhost'.';');

            DB::statement('flush privileges');
        } catch (QueryException $e) {
            $validator->errors()->add('database', Utils::MySqlError($e));
            $returnData->errors = $validator->errors();

            return json_encode($returnData);
        }

        // SET THE CONNECTION TO THE APP USER & NEW DATABASE
        Utils::SetConnection($companyCode);

        // RUN COMPANY MIGRATIONS TO CREATE TABLES ON NEW DATABASE
        try {
            Artisan::call('migrate', ['--database' => 'admin', '--path' => 'database/migrations_register', '--force' => true]);
        } catch (QueryException $e) {
            $validator->errors()->add('database', Utils::MySqlError($e));
            $returnData->errors = $validator->errors();

            return json_encode($returnData);
        }

        //Run the EmployeeGroupSeeder

        // In production, you need to have '--force' => true
        // Otherwise it throws error: "Use of undefined constant STDIN - assumed 'STDIN'
        //https://stackoverflow.com/questions/49746440/laravel-artisan-use-of-undefined-constant-stdin-assumed-stdin-infinite-loop

        Artisan::call('db:seed', ['--database' => 'admin', '--class' => 'EmployeeGroupSeeder', '--force' => true]);

        Employee::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'employeeGroupId' => 1,
            'allocateToId' => 1,
        ]);

        //To Do: Create Seeders per country

        $accountingSeeder = new AccountingSeeder;

        if ($request->company_country === 'ZA') {
            $accountingSeeder->createSouthAfricanTaxRates();
            $accountingSeeder->createAccounts($request);
            $accountingSeeder->createCompany($request);
        } else {
            $accountingSeeder->createAccounts($request);
            $accountingSeeder->createCompany($request);
        }

        // RUN SEEDING TO CREATE DEFAULT DATA
        try {

            // In production, you need to have '--force' => true
            // Otherwise it throws error: "Use of undefined constant STDIN - assumed 'STDIN'
            //https://stackoverflow.com/questions/49746440/laravel-artisan-use-of-undefined-constant-stdin-assumed-stdin-infinite-loop

            Artisan::call('db:seed', ['--database' => 'admin', '--force' => true]);
        } catch (QueryException $e) {
            $validator->errors()->add('database', $e->getMessage());
            $returnData->errors = $validator->errors();

            return json_encode($returnData);
        }

        event(new Registered($user = $this->create($request->all())));

        return json_encode($returnData);
    }

    protected function create(array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'company_code' => $data['company_code'],
            'company_name' => $data['company_name'],
            'country_code' => $data['company_country'],
            'password' => Hash::make($data['password']),
        ]);

        $user->adminFlag = true;

        return $user;
    }

    public function generateCompanyCode(Request $request)
    {
        if (! $request->name) {
            return '?';
        }

        $name = preg_replace('/[^a-zA-Z0-9_$]/', '', $request->name);

        while (strlen($name) < 4) {
            $name = $name.'$';
        }

        $code = strtoupper(substr($name, 0, 4));

        // MySql schema name cannot be numbers only. See: https://dev.mysql.com/doc/refman/8.0/en/identifiers.html)
        if (is_numeric($code)) {
            $code = '$'.$code;
        }

        $counter = User::where('company_code', 'like', $code.'%')->count();

        if ($counter) {

            //$counter++;

            while ($counter <= 5000) {
                $existingCompany = User::where('company_code', $code.$counter)->first();

                if (! $existingCompany) {
                    break;
                }

                $counter++;
            }

            return $code.$counter;
        } else {
            return $code;
        }
    }
}
