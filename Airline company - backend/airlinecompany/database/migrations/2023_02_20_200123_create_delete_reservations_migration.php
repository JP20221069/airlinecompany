<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('DROP TRIGGER IF EXISTS `DELETE_USER_RESERVATIONS`;');
        $proc='CREATE TRIGGER DELETE_USER_RESERVATIONS BEFORE DELETE ON users FOR EACH ROW BEGIN DELETE FROM reservations WHERE reservations.user_id=OLD.id; END;';
        DB::unprepared($proc);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('delete_reservations_migration');
    }
};
