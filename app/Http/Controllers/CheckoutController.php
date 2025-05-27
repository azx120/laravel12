<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Payment;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CheckoutController extends Controller
{
    public function index()
    {
        $cart = session()->get('cart', []);
        if (empty($cart)) {
            return redirect()->route('home')->with('error', 'Tu carrito está vacío');
        }

        return view('checkout.index');
    }

    public function store(Request $request)
    {
        $user = auth()->user();
        $cart = session()->get('cart', []);
        
        if (empty($cart)) {
            return redirect()->route('home')->with('error', 'Tu carrito está vacío');
        }

        // Calcular totales
        $subtotal = array_reduce($cart, function($carry, $item) {
            return $carry + ($item['price'] * $item['quantity']);
        }, 0);

        $tax = $subtotal * 0.16; // Ejemplo de IVA 16%
        $shipping = 50; // Costo de envío fijo
        $total = $subtotal + $tax + $shipping;

        // Crear el pedido
        $order = Order::create([
            'customer_id' => $user->customer->id,
            'order_number' => 'ORD-' . Str::upper(Str::random(8)),
            'status' => Order::STATUS_PENDING,
            'total' => $total,
            'subtotal' => $subtotal,
            'tax' => $tax,
            'shipping_cost' => $shipping,
            'payment_method' => 'bank_transfer',
            'shipping_address' => $request->shipping_address,
            'billing_address' => $request->billing_address ?? $request->shipping_address,
            'notes' => $request->notes
        ]);

        // Añadir productos al pedido
        foreach ($cart as $item) {
            $order->products()->attach($item['id'], [
                'quantity' => $item['quantity'],
                'price' => $item['price']
            ]);
        }

        // Crear registro de pago
        $payment = Payment::create([
            'order_id' => $order->id,
            'amount' => $total,
            'payment_method' => 'bank_transfer',
            'status' => Payment::STATUS_PENDING,
            'bank_name' => $request->bank_name,
            'account_number' => $request->account_number,
            'account_holder' => $request->account_holder
        ]);

        // Vaciar el carrito
        session()->forget('cart');

        return redirect()->route('checkout.success', $order->order_number);
    }

    public function success($orderNumber)
    {
        $order = Order::where('order_number', $orderNumber)->firstOrFail();
        return view('checkout.success', compact('order'));
    }

    public function uploadPaymentProof(Request $request, Order $order)
    {
        $request->validate([
            'payment_proof' => 'required'
        ],[
            'status.required' => 'El comprobante de pago es obligatorio.',
        ]);

        if ($request->hasFile('payment_proof')) {
            $path = $request->file('payment_proof')->store('payment_proofs', 'public');
            $order->payment->update([
                'payment_proof' => $path,
                'payment_date' => now()
            ]);
        }

        return redirect()->back()->with('success', 'Comprobante subido correctamente');
    }
}
