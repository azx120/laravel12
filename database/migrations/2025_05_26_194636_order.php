<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('customer_id');
            $table->string('order_number')->unique();
            $table->enum('status', [
                'pending',
                'processing',
                'on_hold',
                'completed',
                'cancelled',
                'refunded',
                'failed'
            ])->default('pending');
            $table->decimal('total', 10, 2);
            $table->decimal('subtotal', 10, 2);
            $table->decimal('tax', 10, 2)->default(0);
            $table->decimal('shipping_cost', 10, 2)->default(0);
            $table->string('payment_method')->default('bank_transfer');
            $table->text('bank_transfer_details')->nullable();
            $table->text('shipping_address');
            $table->text('billing_address');
            $table->text('notes')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
