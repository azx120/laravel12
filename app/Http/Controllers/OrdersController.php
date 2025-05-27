<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrdersController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $orders = $user->customer->orders()->with('products')->latest()->paginate(10);
        return view('orders.index', compact('orders'));
    }

    public function show(Order $order)
    {
        $this->authorize('view', $order);
        $order->load('products', 'payment');
        return view('orders.show', compact('order'));
    }

    // Métodos para el panel de administración
    public function adminIndex()
    {
        $orders = Order::with('customer.user', 'products')->latest()->paginate(15);
        return view('admin.orders.index', compact('orders'));
    }

    public function adminShow(Order $order)
    {
        $order->load('customer.user', 'products', 'payment');
        return view('admin.orders.show', compact('order'));
    }

    public function updateStatus(Request $request, Order $order)
    {
        $validated = $request->validate([
            'status' => 'required'
        ],[
            'status.required' => 'El valor del campo estatado es obligatorio.',
        ]);

        $order->update(['status' => $validated['status']]);

        // Si el pedido se completa, marcar el pago como completado
        if ($validated['status'] === Order::STATUS_COMPLETED) {
            $order->payment->update(['status' => Payment::STATUS_COMPLETED]);
        }

        return redirect()->back()->with('success', 'Estado del pedido actualizado');
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
