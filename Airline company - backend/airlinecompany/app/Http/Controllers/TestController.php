<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use SebastianBergmann\CodeCoverage\Driver\Selector;

class TestController extends Controller
{
    //
    public function test()
    {
        return Auth::user()->role;
        
    }

    public function testcount()
    {
        $cnt = DB::select('CALL TEST()');
        return $cnt;
    }
}
