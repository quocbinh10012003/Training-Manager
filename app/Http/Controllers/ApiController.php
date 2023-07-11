<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Subject;

class ApiController extends Controller
{
    //
    public function create(Request $request){
        $subjects = new Subjects($request->all());
        $subjects->save();
        $subjects = Subjects::all();
        return response()->json([
            'subjects'=> $subjects,
            'success'=>true
        ]);
    }
}
