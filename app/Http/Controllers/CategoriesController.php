<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
          //$products = Product::with('Categories')->where('is_active', true)->paginate(12);
          $categories = Categories::all();
          return Inertia::render('categories/index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('categories/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ],[
            'name.required' => 'El valor del campo Nombre es obligatorio.',

        ]);

        $category = new Categories;
        $category->name = $request->name;
        $category->slug = $request->name;

        $category->save();

        //return Inertia::render('products/index', compact('products'))->with('success', 'Producto creado correctamente');
        return redirect()->route('categories')->with('success', 'Producto creado correctamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $datas = Categories::where('id', '=', $id)->first();
        return Inertia::render('categories/edit', compact('datas'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ],[
            'name.required' => 'El valor del campo Nombre es obligatorio.',
        ]);

        $category = Categories::where('id', '=', $id)->first();
        if(!empty($category)){
            $category->name = $request->name;

            $category->save();
            return redirect('categories/'.$category->id.'/edit')->with('success', 'categoria creado correctamente');
        }else{
            return redirect()->route('categories')->with('error', 'categoria no encontrado');
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
