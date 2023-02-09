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
        Schema::create('roles_netobjects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id');
            $table->foreignId('netobject_id');
            $table->boolean('R');
            $table->boolean('W');
            $table->boolean('E');
            $table->boolean('D');
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
        Schema::dropIfExists('roles_objects');
    }
};
