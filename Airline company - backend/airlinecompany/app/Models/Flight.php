<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    use HasFactory;
    protected $fillable = [
        'id','city_from','city_to','datetime_departure','datetime_arrival','aircraft_id'
    ];

    public function cityfrom()
    {
        return $this->belongsTo(City::class,'city_id');
    }

    public function cityto()
    {
        return $this->belongsTo(City::class,'city_id');
    }

    public function aircraft()
    {
        return $this->belongsTo(Aircraft::class);
    }

}
