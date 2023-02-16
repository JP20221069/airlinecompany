<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReservationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'reservation';
    public function toArray($request)
    {
        return [
          'id'=>$this->resource->id,
          'flight'=>$this->resource->flight,
          'user'=>$this->resource->user,
          'number_of_adults'=>$this->resource->number_of_adults,
          'number_of_children'=>$this->resource->number_of_children
        ];
    }
}
