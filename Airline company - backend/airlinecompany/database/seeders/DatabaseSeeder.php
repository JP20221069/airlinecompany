<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Aircraft;
use App\Models\City;
use App\Models\Country;
use App\Models\Flight;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        User::truncate();
        Role::truncate();
        Flight::truncate();
        Aircraft::truncate();
        Country::truncate();
        City::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        Role::insert([['name'=>'user'],['name'=>'admin'],['name'=>'moderator']]);
        Aircraft::insert([['name'=>'Fokker 50','type'=>'TURBOPROP','tail_number'=>'YU-D5AG','number_of_seats'=>'56'],
        ['name'=>'Boeing 737-700','type'=>'JET','tail_number'=>'YU-22380','number_of_seats'=>'126'], ['name'=>'Boeing 747','type'=>'JET','tail_number'=>'YU-5289','number_of_seats'=>'524']]);
        Country::insert([['name'=>'Serbia','ISOname'=>'SRB'],['name'=>'Germany','ISOname'=>'GER'],
        ['name'=>'United States of America','ISOname'=>'USA'],['name'=>'Russia','ISOname'=>'RUS'],['name'=>'Japan','ISOname'=>'JAP']]);
        City::insert([['name'=>'Belgrade','IATA'=>'BEG','ICAO'=>'LYBE','country_id'=>'1'],
        ['name'=>'Berlin','IATA'=>'BER','ICAO'=>'EDDB','country_id'=>'2'],
        ['name'=>'New York','IATA'=>'JFK','ICAO'=>'KJFK','country_id'=>'3'],
        ['name'=>'Moscow','IATA'=>'SVO','ICAO'=>'UUEE','country_id'=>'4'],
        ['name'=>'Tokyo','IATA'=>'HND','ICAO'=>'RJTT','country_id'=>'5']]);
        Flight::insert([['city_from'=>'1','city_to'=>'2','datetime_arrival'=>'2023-02-17','datetime_departure'=>'2023-02-17','aircraft_id'=>'1']]);
        Flight::insert([['city_from'=>'2','city_to'=>'1','datetime_arrival'=>'2023-02-17','datetime_departure'=>'2023-02-17','aircraft_id'=>'1']]);
        Flight::insert([['city_from'=>'1','city_to'=>'3','datetime_arrival'=>'2023-02-17','datetime_departure'=>'2023-02-17','aircraft_id'=>'2']]);
        Flight::insert([['city_from'=>'1','city_to'=>'4','datetime_arrival'=>'2023-02-17','datetime_departure'=>'2023-02-17','aircraft_id'=>'2']]);
        Flight::insert([['city_from'=>'1','city_to'=>'5','datetime_arrival'=>'2023-02-17','datetime_departure'=>'2023-02-17','aircraft_id'=>'3']]);
        Flight::insert([['city_from'=>'1','city_to'=>'5','datetime_arrival'=>'2023-02-19','datetime_departure'=>'2023-02-20','aircraft_id'=>'3']]);
        Flight::insert([['city_from'=>'1','city_to'=>'3','datetime_arrival'=>'2023-02-19','datetime_departure'=>'2023-02-20','aircraft_id'=>'3']]);
        Flight::insert([['city_from'=>'1','city_to'=>'4','datetime_arrival'=>'2023-02-19','datetime_departure'=>'2023-02-20','aircraft_id'=>'3']]);
        Flight::insert([['city_from'=>'4','city_to'=>'2','datetime_arrival'=>'2023-02-19','datetime_departure'=>'2023-02-20','aircraft_id'=>'3']]);
        Flight::insert([['city_from'=>'5','city_to'=>'2','datetime_arrival'=>'2023-02-19','datetime_departure'=>'2023-02-20','aircraft_id'=>'3']]);
        Flight::insert([['city_from'=>'3','city_to'=>'5','datetime_arrival'=>'2023-02-19','datetime_departure'=>'2023-02-20','aircraft_id'=>'3']]);
        Flight::insert([['city_from'=>'4','city_to'=>'5','datetime_arrival'=>'2023-02-19','datetime_departure'=>'2023-02-20','aircraft_id'=>'3']]);
        Flight::insert([['city_from'=>'2','city_to'=>'3','datetime_arrival'=>'2023-02-19','datetime_departure'=>'2023-02-20','aircraft_id'=>'3']]);
        Flight::insert([['city_from'=>'3','city_to'=>'2','datetime_arrival'=>'2023-02-19','datetime_departure'=>'2023-02-20','aircraft_id'=>'3']]);
        User::factory(20)->create();
    }
}
