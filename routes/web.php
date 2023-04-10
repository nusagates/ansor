<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\ManagementController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  return Inertia::render('PrayerTime', [
    'canLogin'       => Route::has('login'),
    'canRegister'    => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion'     => PHP_VERSION,
  ]);
});

Route::group(['prefix' => 'tool'], function () {
  Route::get('whatsapp-sender', function () {
    return Inertia::render('Tool/WhatsappSender');
  });
  Route::get('undangan-elektronik', function () {
    return Inertia::render('Tool/EInvitation');
  });
});
Route::get('waktu-sholat', function () {
  return Inertia::render('PrayerTime');
});

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::resource('management', ManagementController::class);
Route::resource('user', UserController::class);
Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
  Route::resources([
    'event' => EventController::class,
    'role' => RoleController::class
  ], ['except' => ['create', 'edit', 'show']]);
});

require __DIR__ . '/auth.php';