<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Nusagates\Helper\Responses;

class EventController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    if ($request->ajax()) {
      $events = Event::whereDate('activity_date', '>=', date('Y-m-d'))->paginate(10);
      return Responses::showSuccessMessage('ok', $events);
    }
    return Inertia::render('Administration/Event');
  }


  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $rules = [
      'name'          => 'required|string',
      'activity_date' => 'required|date_format:Y-m-d',
      'started_at'    => 'nullable|date_format:H:i',
      'finished_at'   => 'nullable|date_format:H:i',
      'venue'         => 'required|string',
      'organizer'     => 'required|string',
      'is_public'     => 'required|boolean',
    ];
    $validator = Validator::make($request->post(), $rules);
    if ($validator->fails()) {
      return Responses::showValidationError($validator);
    }
    $event = Event::create($request->only(['name', 'activity_date', 'started_at', 'finished_at', 'venue', 'organizer', 'is_public']));
    return Responses::showSuccessMessage('Kegiatan berhasil disimpan', $event);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Event $event)
  {
    $rules = [
      'name'          => 'required|string',
      'activity_date' => 'required|date_format:Y-m-d',
      'started_at'    => 'nullable|date_format:H:i,H:i:s',
      'finished_at'   => 'nullable|date_format:H:i,H:i:s',
      'venue'         => 'required|string',
      'organizer'     => 'required|string',
      'is_public'     => 'required|boolean',
    ];
    $validator = Validator::make($request->post(), $rules);
    if ($validator->fails()) {
      return Responses::showValidationError($validator);
    }
    $event->update($request->only(['name', 'activity_date', 'started_at', 'finished_at', 'venue', 'organizer', 'is_public']));
    return Responses::showSuccessMessage('Kegiatan berhasil diperbarui', $event);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Event $event)
  {
    $event->delete();
    return Responses::showSuccessMessage('Kegiatan berhasil dihapus');
  }
}
