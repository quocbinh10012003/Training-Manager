<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Subject;

class ApiController extends Controller
{
    //
    public function create(Request $request){
        $sub = new Subject();
        $sub->name = $request->input('name');
        $sub->description = $request->input('description');

        $sub-save(); 
        return response()->json($sub);
    }
}
