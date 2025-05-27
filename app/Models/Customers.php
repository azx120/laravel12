<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Customers extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'user_id',
        'phone',
        'address',
        'city',
        'state',
        'zip_code',
        'country'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
