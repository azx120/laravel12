<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\VarietyProductsController;
use App\Http\Controllers\AttributeProductsController;

use Inertia\Inertia;
use Illuminate\Http\Request;

Route::get('/', [HomeController::class, 'index'])->name('home');

/*Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');*/

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/token', function (Request $request) {
    $token = $request->session()->token();
 
    $token = csrf_token();
 
    // ...
});

// Rutas públicas
Route::get('/tienda', [FrontController::class, 'store'])->name('store');
Route::get('/home', [FrontController::class, 'home'])->name('store');
Route::get('/nosotros', [FrontController::class, 'nosotros'])->name('store');
Route::get('/contactenos', [FrontController::class, 'contactenos'])->name('store');
Route::get('/agroquimicos', [FrontController::class, 'agroquimicos'])->name('store');
Route::get('/agroforestal', [FrontController::class, 'agroforestal'])->name('store');

Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout.index');
    Route::post('/checkout', [CheckoutController::class, 'store'])->name('checkout.store');
    Route::get('/checkout/exito/{orderNumber}', [CheckoutController::class, 'success'])->name('checkout.success');
    Route::post('/ordenes/{order}/comprobante', [CheckoutController::class, 'uploadPaymentProof'])->name('orders.upload-proof');
//Route::get('/productos-tienda', [FrontController::class, 'index'])->name('productos-tienda.index');
Route::get('/productos-tienda/{id}', [FrontController::class, 'show'])->name('producto-tienda.show');

// Rutas del carrito
Route::prefix('carrito')->group(function () {
    Route::get('/', [CartController::class, 'index'])->name('cart.index');
    Route::post('/agregar/{product}', [CartController::class, 'add'])->name('cart.add');
    Route::put('/actualizar/{product}', [CartController::class, 'update'])->name('cart.update');
    Route::delete('/eliminar/{product}', [CartController::class, 'remove'])->name('cart.remove');
});

// Rutas de checkout
Route::middleware(['auth'])->group(function () {
    
    
    // Rutas de pedidos del cliente
    Route::get('/mis-pedidos', [OrderController::class, 'index'])->name('orders.index');
    Route::get('/mis-pedidos/{order}', [OrderController::class, 'show'])->name('orders.show');
});

// Rutas de administración
Route::middleware(['auth'])->group(function () {
    // Rutas de productos
    //Route::resource('products', ProductsController::class)->except(['show']);
    Route::get('products', [ProductsController::class, 'index'])->name('products');
    Route::get('products/new', [ProductsController::class, 'create'])->name('products.new');
    Route::post('products/create', [ProductsController::class, 'store'])->name('products.store');
    Route::get('products/{id}/edit', [ProductsController::class, 'edit'])->name('products.edit');
    Route::post('products/{id}/update', [ProductsController::class, 'update'])->name('products.update');

    Route::get('categories', [CategoriesController::class, 'index'])->name('categories');
    Route::get('categories/new', [CategoriesController::class, 'create'])->name('categories.new');
    Route::post('categories/create', [CategoriesController::class, 'store'])->name('categories.store');
    Route::get('categories/{id}/edit', [CategoriesController::class, 'edit'])->name('categories.edit');
    Route::post('categories/{id}/update', [CategoriesController::class, 'update'])->name('categories.update');
    
    // Rutas de pedidos
    Route::get('/orders', [OrderController::class, 'adminIndex'])->name('admin.orders.index');
    Route::get('/orders/{order}', [OrderController::class, 'adminShow'])->name('admin.orders.show');
    Route::put('/orders/{order}/status', [OrderController::class, 'updateStatus'])->name('admin.orders.update-status');


    Route::post('/varietys/create_post', [VarietyProductsController::class, 'create_post'])->name('products.varietys-create_post');
    Route::post('/attributes/create_post', [AttributeProductsController::class, 'create_post'])->name('products.attributes-create_post');

});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
