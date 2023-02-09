<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'DOB' => 'required|date',
            'email' => 'required|string|max:255|email|unique:users',
            'password' => 'required|string|min:3'
        ]);


        if ($validator->fails())
            return response()->json($validator->errors());

        $user = User::create([
            'name' => $request->name,
            'lastname'=>$request->lastname,
            'DOB'=>$request->DOB,
            'username'=>$request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id'=>1
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer']);
    }



    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()
                ->json(['MSG' => 'ERR:UNAUTHORIZED ACCESS.'], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json(['MSG' => 'USER\'' . $user->username . '\' LOGGED ON.', 'access_token' => $token, 'token_type' => 'Bearer',]);
    }


    public function logoff()
    {
        auth()->user()->tokens()->delete();
        return [
            'MSG' => 'USER LOGGED OFF.'
        ];
    }
}
