<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;
    protected $fillable = [
        'name','country_id','ICAO','IATA'
    ];

    public function country()
    {
        $this->belongsTo(Country::class);
    }

    public function flights_from()
    {
        return $this->hasMany(Flight::class,'city_from');
    }
    public function flights_to()
    {
        return $this->hasMany(Flight::class,'city_to');
    }
}
