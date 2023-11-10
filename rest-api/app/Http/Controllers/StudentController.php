<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        if($students->isEmpty()){
            $data = [
                'message'=> 'Resource is empty'
            ];
            return response()->json($data,204);
        }

        $data = [
            "message" => "Get all Student",
            "data" => $students
        ];

        //kirim data (json) dan response code 200
        return response()->json($data, 200);
    }
    public function show($id){
        $student = Student::find($id);
        if(!$student){
            $data = [
                "message"=> "Data not found"
            ] ;
            return response()->json($data,404);
        }
        $data = [
            "massage" => "Show detail resource",
            "data"=> $student
        ] ;
        //mengembalikan data dan status code 200
        return response()->json($data, 200);
        
    }

    //membuat method store
    public function store(Request $request){
        //validasi data request
        // $request->validate([
        //     "name"=> "required",
        //     "nim"=> "required",
        //     "email"=> "required",
        //     "jurusan"=> "required"
        // ]);

        // //menangkap data request
        // $input = [
        //     'name' => $request->name,
        //     'nim' => $request->nim,
        //     'email' => $request->email,
        //     'jurusan' => $request->jurusan
        // ];

        $validatedData = $request->validate([
            "name"=> "required",
            "nim"=> "numeric|required",
            "email"=> "email|required",
            "jurusan"=> "required" 
        ]);
        
        //menggunakan model student untuk insert data
        $student = Student::create($validatedData);

        $data = [
            'message' => "student is creates succesfully",
            'data' => $student,
        ];
        
        //mengembalikan data (json) dan kode 201
        return response()->json($data,201);
    }

    public function update($id, Request $request){
        // cari id student yang ingin diupdate 
        $student = Student::find($id);
        
        // Jika siswa tidak ditemukan, kembalikan respons error
        if($student) {
            #menangkap data request
            $input = [
                'name'=> $request->name ?? $student->name,
                'nim'=> $request->nim ?? $student->nim,
                'email'=> $request->email ?? $student->email,
                'jurusan'=> $request->jurusan ?? $student->jurusan
            ];
                #melakukan update data 
            $student->update($input);

            $data = [
                'message' => "Student is updated",
                'data' => $student
            ];
                #mengembalikan data (json) dan kode 200
            return response()->json($data, 200);
        }
        else {
            $data = [
                'message'=> 'Student not found'
            ];
            return response()->json($data,404);
        }
    }

    public function destroy($id)
    {
    // Temukan siswa berdasarkan ID
        $student = Student::find($id);
        
        // Jika siswa tidak ditemukan, kembalikan respons error
        if($student) {
            # hapus student tersebut
            $student->delete();
            $data = [
                'message' => "Student is delete",
            ];
            #mengembalikan data (json) dan kode 200
            return response()->json($data, 200);
        }

        else {
            $data = [
                "message"=> "Student not found"
            ] ;
            return response()->json($data,404);
        }
}


}
