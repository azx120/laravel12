<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Orders extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'customer_id',
        'order_number',
        'status',
        'total',
        'subtotal',
        'tax',
        'shipping_cost',
        'payment_method',
        'bank_transfer_details',
        'shipping_address',
        'billing_address',
        'notes'
    ];

    const STATUS_PENDING = 'pending';
    const STATUS_PROCESSING = 'processing';
    const STATUS_ON_HOLD = 'on_hold';
    const STATUS_COMPLETED = 'completed';
    const STATUS_CANCELLED = 'cancelled';
    const STATUS_REFUNDED = 'refunded';
    const STATUS_FAILED = 'failed';

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('quantity', 'price');
    }

    public function payment()
    {
        return $this->hasOne(Payment::class);
    }
}
