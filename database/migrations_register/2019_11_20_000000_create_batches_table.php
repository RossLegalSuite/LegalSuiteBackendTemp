<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBatchesTable extends Migration
{
    public function up()
    {
        Schema::create('batches', function (Blueprint $table) {
            $table->increments('id');
            $table->dateTime('date');
            $table->string('type');
            $table->string('reference')->nullable();
            $table->unsignedInteger('employeeId');

            $table->index(['date']);
            $table->index(['type']);

            $table->foreign('employeeId')
            ->references('id')->on('employees')
            ->onDelete('restrict');
        });
    }

    public function down()
    {
        Schema::dropIfExists('batches');
    }
}
