<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->foreignId('city_from');
            $table->foreign('city_from')->references('id')->on('cities');
            $table->foreignId('city_to');
            $table->foreign('city_to')->references('id')->on('cities');
            $table->foreignId('aircraft_id');
            $table->foreign('aircraft_id')->references('id')->on('aircraft');
            $table->dateTime('datetime_departure');
            $table->dateTime('datetime_arrival');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flights');
    }
};
