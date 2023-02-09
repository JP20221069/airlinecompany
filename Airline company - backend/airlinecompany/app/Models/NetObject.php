<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NetObject extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'URL'
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class,'roles_netobjects','roles_id','netobject_id')->withPivot(['R','W','E','D']);
    }

}


