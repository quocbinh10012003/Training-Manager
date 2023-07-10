<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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
// Route::post('/add',[SubjectsController::class,'store']);
// Route::post('/add','ApiController@create');
// Route::post('/delete/selected',[SubjectsController::class,'delete']);
// Route::delete('/delete/{id}',[SubjectsController::class,'destroy']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('delete{/id}',[SubjectsController::class,'delete']);
// Route::post('/subject','ApiController@create');