<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FlightResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

     public static $wrap = 'flight';
    public function toArray($request)
    {
        return [
            'id'=>$this->resource->id,
            'aircraft'=>$this->resource->aircraft,
            'city_from'=>$this->resource->cityfrom,
            'city_to'=>$this->resource->cityto,
            'datetime_departure'=>$this->resource->datetime_departure,
            'datetime_arrival'=>$this->resource->datetime_arrival
        ];
    }
}
