<?php

use App\Http\Controllers\SubjectsController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

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
    return view('welcome');
});

// Route::get('index',[OrderController::class,'index']);

// Route::get('/index', [SubjectsController::class,'index']);
// Route::get('/test-connection');
Route::resource("/subject", SubjectsController::class);
Route::get('/delete/{id}',[SubjectsController::class,'delete']);