<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use App\Models\Categories; 
use App\Models\Product;
use App\Models\AttributeProducts;
use App\Models\VarietyProducts;

class HomeController extends Controller
{
    /**
     * Show the profile for a given user.
     */
    public function index()
    {

        $categories = Categories::all();

        $products = Product::all();
        if(!empty($products)){
            foreach($products as $product){
                $attributes = AttributeProducts::where('id_product', $product->id)->get();
                if(!empty($attributes)){
                    foreach($attributes as $attribute){
                        $varierty = VarietyProducts::where('id', $attribute->id_variety)->first();
                        if(!empty($varierty)){
                            $attribute->name_variety = $varierty->name;
                        }
                        $attribute->array_attributes = json_decode($attribute->array_attributes);
                    }
                    

                    $product->attributes = $attributes;
                }
            }
        }

        return Inertia::render('front/Store', compact('products', 'categories'));
    }
}
