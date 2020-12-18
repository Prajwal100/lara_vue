<?php

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
Route::any('{slug}', function () {
    return view('welcome');
});

Route::post('app/create_tags','TagController@addTags');

Route::post('app/edit_tags','TagController@editTags');

Route::get('app/get_tags','TagController@getTags');

Route::post('app/delete_tags','TagController@deleteTags');
