<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        $proc='DROP PROCEDURE IF EXISTS `PEOPLEONFLIGHT`;
        DELIMITER $$
        CREATE PROCEDURE `PEOPLEONFLIGHT`(IN `FLIGHTID` INT)
        SELECT SUM(NUMBER_OF_ADULTS) + SUM(NUMBER_OF_CHILDREN) AS PEOPLEONFLIGHT FROM reservations WHERE FLIGHT_ID=FLIGHTID$$
        DELIMITER ;';
        DB::unprepared($proc);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('procedure_peopleonflight');
    }
};
