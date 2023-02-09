<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Role;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Role::truncate();
        Role::insert([['name'=>'user'],['name'=>'admin'],['name'=>'moderator']]);
        \App\Models\User::factory(20)->create();
    }
}
