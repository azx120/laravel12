<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Categories extends Model
{
    use HasFactory, HasUuids;
    
    protected $fillable = ['name', 'slug', 'description', 'is_active'];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
