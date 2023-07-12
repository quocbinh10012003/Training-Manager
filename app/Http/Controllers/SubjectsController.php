<?php

namespace App\Http\Controllers;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function search() {
        // $search = Course::where('name','LIKE','%'.$request->key.'%')->get();
        // return response()->json([
        //     'search'=> $search
        // ]);

        $subjects = Subject::all();
        return response()->json([
            'data'=>$subjects
        ]);

    }
    public function index()
    {
        //
        $subjects = Subject::all();
        //
        return view('subject')->with('subjects',$subjects);
     
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('hello');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(),[
            'name'=> 'required|max:191',
            'description'=>'required|max:191',
        ]);
        if ($validate->failed()) {
            return response()->json([
                'validate'=>$validate->errors()->messages(),
            'success'=>false
            ]);
        }else{
            $subjects = new Subject($request->all());
            $subjects->save();
            return response()->json([
            'result'=>true
            ]); 
        }
        //C2:
        // $sub = new Subject();
        // $sub->name = $request->Name;
        // $sub->description = $request->Des;
        // $sub->save();
        // return redirect('subject');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $subject = Subject::find($id);
        return response()->json([
            'subject'=> $subject
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $validate = Validator::make($request->all(),[
            'name'=> 'required:max:191',
            'description'=>'required:max:191',
        ]);
        if ($validate->failed()) {
            return response()->json([
            'validate'=>$validate->errors()->messages(),
            'success'=>false

            ]);
        }
        $subject = Subject::find($id);
        $subject->name = $request->name;
        $subject->description = $request->description;
        $subject->save();

        $subjects = Subject::all();
        return response()->json([
            'subjects'=> $subjects,
            'success'=>true
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            Subject::find($id)->delete();
            $subjects = Subject::all();
            return response()->json([
                'subjects'=> $subjects,
                'success'=>true
            ]);
            
        } catch (\Throwable $th) {
        $subjects = Subject::all();
            return response()->json([
                'subjects'=> $subjects,
                'success'=>false
            ]);
        }     
    }
    public function delete($id)
    {
      
        // $data = Subject::find($id);
        // $data->delete();
        // return redirect('subject');
        
        // try {
        //     Subject::whereIN('id',$arr)->delete();
        //     $subjects = Subject::all();
        //     return response()->json([
        //         'subjects'=> $subjects,
        //         'success'=>true
        //     ]);
            
        // } catch (\Throwable $th) {
        // $subjects = Subject::all();
            
        //     return response()->json([
        //         'subjects'=> $subjects, 
        //         'success'=>false
        //     ]);
        // }  
          
        
    }
    public function searchby(Request $request)
    {
        $search = Course::where('name','LIKE','%'.$request->key.'%');
        return response()->json([
            'search'=> $search
        ]);
    }

}
