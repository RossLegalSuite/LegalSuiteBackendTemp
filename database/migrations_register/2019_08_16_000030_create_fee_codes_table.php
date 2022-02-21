<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFeeCodesTable extends Migration
{
    public function up()
    {
        Schema::create('fee_codes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code');
            $table->string('description');
            $table->unsignedInteger('feeSheetId');

            $table->unique(['code', 'feeSheetId']);

            $table->foreign('feeSheetId')->references('id')->on('fee_sheets')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('fee_codes');
    }
}
