<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->where('is_active', true)->paginate(12);
        return view('products.index', compact('products'));
    }

    public function show($slug)
    {
        $product = Product::where('slug', $slug)->where('is_active', true)->firstOrFail();
        return view('products.show', compact('product'));
    }

    // Métodos para el panel de administración
    public function adminIndex()
    {
        $products = Product::with('category')->paginate(15);
        return view('admin.products.index', compact('products'));
    }

    public function create()
    {
        $categories = Category::all();
        return view('admin.products.create', compact('categories'));
    }

    public function store(Request $request)
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

        $product = Product::create($validated);

        if ($request->hasFile('image')) {
            $product->addMediaFromRequest('image')->toMediaCollection('products');
        }

        return redirect()->route('admin.products.index')->with('success', 'Producto creado correctamente');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
