<?php

use App\Http\Controllers\AnimalController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group( function () {
    Route::get("students", [StudentController::class,"index"]);

    //Route untuk menambahkan data siswa
    Route::post("/students", [StudentController::class, "store"]);
    
    
    //Route untuk mengupdate data siswa
    Route::put("/students/{id}", [StudentController::class,"update"]);
    
    
    //Route untuk menghapus data siswa
    Route::delete("/students/{id}", [StudentController::class, "destroy"]);
    
    Route::get("/students/{id}", [StudentController::class,"show"]);   
});



Route::post("register", [AuthController::class,"register"]);
Route::post("login", [AuthController::class,"login"]);