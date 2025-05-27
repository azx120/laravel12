<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\OrderController;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

/*Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');*/

// Rutas públicas
Route::get('/tienda', [ProductsController::class, 'index'])->name('home');
Route::get('/productos', [ProductsController::class, 'index'])->name('products.index');
Route::get('/productos/{slug}', [ProductsController::class, 'show'])->name('products.show');

// Rutas del carrito
Route::prefix('carrito')->group(function () {
    Route::get('/', [CartController::class, 'index'])->name('cart.index');
    Route::post('/agregar/{product}', [CartController::class, 'add'])->name('cart.add');
    Route::put('/actualizar/{product}', [CartController::class, 'update'])->name('cart.update');
    Route::delete('/eliminar/{product}', [CartController::class, 'remove'])->name('cart.remove');
});

// Rutas de checkout
Route::middleware(['auth'])->group(function () {
    Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout.index');
    Route::post('/checkout', [CheckoutController::class, 'store'])->name('checkout.store');
    Route::get('/checkout/exito/{orderNumber}', [CheckoutController::class, 'success'])->name('checkout.success');
    Route::post('/ordenes/{order}/comprobante', [CheckoutController::class, 'uploadPaymentProof'])->name('orders.upload-proof');
    
    // Rutas de pedidos del cliente
    Route::get('/mis-pedidos', [OrderController::class, 'index'])->name('orders.index');
    Route::get('/mis-pedidos/{order}', [OrderController::class, 'show'])->name('orders.show');
});

// Rutas de administración
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    // Rutas de productos
    Route::resource('products', ProductsController::class)->except(['show']);
    
    // Rutas de pedidos
    Route::get('/orders', [OrderController::class, 'adminIndex'])->name('admin.orders.index');
    Route::get('/orders/{order}', [OrderController::class, 'adminShow'])->name('admin.orders.show');
    Route::put('/orders/{order}/status', [OrderController::class, 'updateStatus'])->name('admin.orders.update-status');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
