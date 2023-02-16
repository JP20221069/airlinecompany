<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReservationCollection;
use App\Http\Resources\ReservationResource;
use App\Models\Flight;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ReservationController extends Controller
{

    public function myreservations()
    {
        return new ReservationCollection(Auth::user()->reservations);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return new ReservationCollection(Reservation::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'flight_id' => 'required|int',
            'number_of_children'=>'required|int',
            'number_of_adults'=>'required|int'
        ]);

        if ($validator->fails())
            return response()->json($validator->errors());
        //
        $peopleonsameflight=DB::select('CALL PEOPLEONFLIGHT('.$request->flight_id.');');
        $flight = Flight::find($request->flight_id);
        $numberofchildren = $request->number_of_children;
        $numberofadults = $request->number_of_adults;
        if(intval($flight->aircraft->number_of_seats)<(intval($peopleonsameflight)+intval($numberofadults)+intval($numberofchildren)))
        {
            return response()->json('Not enough free seats on current flight.');
        }
        else
        {
            Reservation::insert(['user_id'=>Auth::user()->id,'flight_id'=>$flight->id,'number_of_adults'=>$numberofadults,'number_of_children'=>$numberofchildren]);
            return response()->json('Flight reserved successfully.');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return new ReservationResource(Reservation::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reservation $reservation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reservation $reservation)
    {
        //
    }
}
