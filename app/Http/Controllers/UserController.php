<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Nusagates\Helper\Responses;

class UserController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $rules = [
      'management_id'         => 'required|integer|exists:management,id',
      'nik'                   => 'required|string|unique:users,nik',
      'name'                  => 'required|string',
      'phone'                 => 'required|string',
      'email'                 => 'required|email',
      'password'              => 'required|string|min:8|confirmed',
      'password_confirmation' => 'required|string|min:8',
    ];
    $validator = Validator::make($request->post(), $rules);
    if ($validator->fails()) {
      return Responses::showValidationError($validator);
    }
    $user = User::create([
      'management_id' => $request->management_id,
      'nik'           => $request->nik,
      'name'          => $request->name,
      'phone'         => $request->phone,
      'email'         => $request->email,
      'password'      => bcrypt($request->password),
    ]);

    return Responses::showSuccessMessage('Data berhasil disimpan', $user);
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    //
  }
}
