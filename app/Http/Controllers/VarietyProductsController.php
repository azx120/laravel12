<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\VarietyProducts; 
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Str;

class VarietyProductsController extends Controller
{
       public function create()
    {

        return Inertia::render('variety_product/create', compact('categories'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ],[
            'name.required' => 'El valor del campo Nombre es obligatorio.',
        ]);

        $dato = new VarietyProducts;
        $dato->name = $request->name;
        $dato->slug = $request->slug;

        if ($request->hasFile('img')) {
            $uploadPath = public_path('/storage/variedad/');
            $file = $request->file('img');
            $fileName = $file->getClientOriginalName();
            $file->move($uploadPath, $fileName);
            $url = asset('/storage/variedad/'.$fileName);
            $product->image = $url;
        }else{
            $dato->image = '';
        }
        

        $dato->save();

        /*if ($request->hasFile('image')) {
            $product->addMediaFromRequest('image')->toMediaCollection('products');
        }*/
        //return Inertia::render('products/index', compact('products'))->with('success', 'Producto creado correctamente');
        return redirect()->route('variety_product')->with('success', 'variedad creada correctamente');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $datas = VarietyProducts::where('id', '=', $id)->first();

        return Inertia::render('variety_product/edit', compact('datas'));
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


        $product = VarietyProducts::where('id', '=', $id)->first();
        if(!empty($product)){
           $dato->name = $request->name;
            $dato->slug = $request->slug;

            if ($request->hasFile('img')) {
                $uploadPath = public_path('/storage/variedad/');
                $file = $request->file('img');
                $fileName = $file->getClientOriginalName();
                $file->move($uploadPath, $fileName);
                $url = asset('/storage/variedad/'.$fileName);
                $product->image = $url;
            }else{
                $dato->image = '';
            }
            
            $dato->save();

            return redirect('variety_product/'.$product->id.'/edit')->with('success', 'Variedad creada correctamente');
        }else{
            return redirect()->route('variety_product')->with('error', 'Variedad no encontrada');
        }
        
    }

     public function create_post(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ],[
            'name.required' => 'El valor del campo Nombre es obligatorio.',
            
        ]);

        $dato = new VarietyProducts;
        $dato->name = $request->name;
        $dato->slug = $request->name;

        $dato->save();

        return response()->json([
            'status' => 200,
            'data' => $dato,
         ], 200);

       
    }

}
