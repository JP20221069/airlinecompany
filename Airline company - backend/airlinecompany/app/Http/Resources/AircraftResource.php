<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AircraftResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'aircraft';
    public function toArray($request)
    {
        return [
            'id'=> $this->resource->id,
            'name'=>$this->resource->name,
            'tail_number'=>$this->resource->tail_number,
            'number_of_seats'=>$this->resource->number_of_seats

        ];
    }
}
