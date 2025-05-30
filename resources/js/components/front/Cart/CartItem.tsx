import React from 'react';
import { X } from 'lucide-react';

interface CartItemProps {
  item: {
    product: {
      name: string;
      price: number;
      image: string;
    };
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img 
        src={item.product.image} 
        alt={item.product.name}
        className="w-16 h-16 object-contain"
      />
      <div className="flex-1">
        <h3 className="text-sm font-medium">{item.product.name}</h3>
        <div className="flex items-center mt-1">
          <span className="text-sm text-gray-500">{item.quantity} ×</span>
          <span className="ml-1 text-orange-500">${item.product.price.toFixed(2)}</span>
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <X size={18} />
      </button>
    </div>
  );
};

export default CartItem;