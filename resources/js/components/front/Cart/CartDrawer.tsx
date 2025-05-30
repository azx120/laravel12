import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { Product } from '../../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{ product: Product; quantity: number }>;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items }) => {
  const navigate = useNavigate();
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <div className={`
      fixed right-0 top-0 h-full w-[400px] bg-white shadow-lg transform transition-transform duration-300 z-50
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">Shopping cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>

      <div className="flex flex-col h-[calc(100%-180px)] overflow-y-auto p-4">
        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Subtotal:</span>
          <span className="text-xl font-bold text-orange-500">${subtotal.toFixed(2)}</span>
        </div>
        <div className="space-y-2">
          <button 
            onClick={() => {
              onClose();
              navigate('/cart');
            }}
            className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition-colors"
          >
            VIEW CART
          </button>
          <button 
            onClick={handleCheckout}
            className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-900 transition-colors"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;