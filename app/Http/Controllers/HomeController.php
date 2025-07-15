<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Categories; 
use App\Models\Product;


class HomeController extends Controller
{
    /**
     * Show the profile for a given user.
     */
    public function index()
    {
        $products = Product::all();
        $categories = Categories::all();

        return Inertia::render('front/Store', compact('products', 'categories'));
    }
}
