<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomController extends Controller
{
public function list(){
    $customer=[
        'prajwal',
        'pratik'
    ];
    return view('about',[
        'names'=>$customer
    ]);
}
}
