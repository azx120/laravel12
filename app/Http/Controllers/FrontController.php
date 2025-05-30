<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Categories; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class FrontController extends Controller
{
    public function index()
    {
        //$products = Product::with('Categories')->where('is_active', true)->paginate(12);
        $products = Product::all();
        return Inertia::render('front/Store', compact('products'));

    }

    public function store()
    {
        //$products = Product::with('Categories')->where('is_active', true)->paginate(12);
        $products = Product::all();
        return Inertia::render('front/Store', compact('products'));

    }

    public function show($slug)
    {
        $product = Product::where('slug', $slug)->where('is_active', true)->firstOrFail();
        return view('products.show', compact('product'));
    }

    // Métodos para el panel de administración
    public function adminIndex()
    {
        $products = Product::with('categories')->paginate(15);
        return view('admin.products.index', compact('products'));
    }

    public function create()
    {
        $categories = Categories::all();
        return Inertia::render('products/create', compact('categories'));
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $datas = Product::where('id', '=', $id)->first();

        return Inertia::render('products/edit', compact('datas'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required',
            'stock' => 'required',
            'category_id' => 'required',
        ],[
            'name.required' => 'El valor del campo Nombre es obligatorio.',
            'price.required' => 'El valor del campo pricio es obligatorio.',
            'stock.required' => 'El valor del campo Cantidad es obligatorio.',
            'category_id.required' => 'El valor del campo categoria es obligatorio.',
        ]);

        $product = Product::where('id', '=', $id)->first();
        if(!empty($product)){
            $product->name = $request->name;
            $product->price = $request->price;
            $product->stock = $request->stock;
            $product->category_id = $request->category_id;
            $product->slug = $request->slug;
            $product->sku = $request->sku;
            if ($request->hasFile('image')) {
                $product->addMediaFromRequest('image')->toMediaCollection('products');
            }
            $product->save();
            return redirect('products/'.$product->id.'/edit')->with('success', 'Producto creado correctamente');
        }else{
            return redirect()->route('products')->with('error', 'Producto no encontrado');
        }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
