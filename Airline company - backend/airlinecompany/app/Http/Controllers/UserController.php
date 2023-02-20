<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::user()->role->id=='2' || Auth::user()->role->id=='3')
        {
            return new UserCollection(User::all());
        }
        else
        {
            return response()->json('You do not have the required privileges to view this page.');
        }
       
    }

    public function selfupdate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'DOB' => 'required|date',
            'email' => 'required|string|max:255|email',
            'password' => 'required|string|min:3'
        ]);


        if ($validator->fails())
            return response()->json($validator->errors());

        $usr = Auth::user();
        $usr->name = $request->name;
        $usr->lastname = $request->lastname;
        $usr->username=$request->username;
        $usr->DOB=$request->DOB;
        $usr->email=$request->email;
        if($usr->password!=$request->password)
        {
            $usr->password=Hash::make($request->password);
        }
        $usr->save();
        return response()->json('User updated successfully.');
    }

    public function admindelete($userid)
    {
        if(Auth::user()->role->id=='2')
        {
            $usr = User::find($userid);
            $usr->delete();
            return response()->json('Successfully deleted user.');
        }
        else
        {
            return response()->json('You do not have the required privileges to view this page.');
        }
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
        if(Auth::user()->role->id=='2' || Auth::user()->role->id=='3')
        {
            return new UserResource(User::find($id));
        }
        else
        {
            return response()->json('You do not have the required privileges to view this page.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
