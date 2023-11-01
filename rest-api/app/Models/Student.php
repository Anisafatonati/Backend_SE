<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $guarded = [];

    // Mendeteksi kolom yang boleh di mass assignment
    protected $fillable = [
        'name',
        'nim',
        'email',
        'jurusan'
    ];
}
