<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\AircraftController;
use App\Http\Controllers\ReservationController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);
Route::get('/users',[UserController::class,'index']);
Route::get('/users/{id}',[UserController::class,'show']);
Route::get('/counttest',[TestController::class,'testcount']);
Route::group(['middleware' => ['auth:sanctum']], function () {

    //Route::get('/aircraft',[AircraftController::class,'index']);
    //Route::get('/aircraft/{id}',[AircraftController::class,'show']);
    Route::get('/test',[TestController::class,'test']);
    Route::post('/reserve',[ReservationController::class,'store']);
    Route::post('/myreservations',[ReservationController::class,'myreservations']);
    Route::post('/logoff', [AuthController::class, 'logoff']);
});