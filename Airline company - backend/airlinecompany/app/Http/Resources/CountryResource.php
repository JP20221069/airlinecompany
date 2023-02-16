<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CountryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'country';
    public function toArray($request)
    {
        return [
            'id'=>$this->resource->id,
            'name'=>$this->resource->name,
            'ISOname'=>$this->resource->ISOname
        ];
    }
}
