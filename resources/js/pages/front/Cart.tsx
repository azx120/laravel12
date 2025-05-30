import React from 'react';
import { X } from 'lucide-react';


interface CartProps {
  cartItems: Array<{
    product: {
      name: string;
      price: number;
      image: string;
    };
    quantity: number;
  }>;
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative text-white">
          <div className="flex items-center gap-4 text-lg">
            <span className="font-semibold">SHOPPING CART</span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="opacity-70">CHECKOUT</span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="opacity-70">ORDER COMPLETE</span>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4">PRODUCT</th>
                    <th className="text-left py-4">PRICE</th>
                    <th className="text-left py-4">QUANTITY</th>
                    <th className="text-right py-4">SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4">
                        <div className="flex items-center gap-4">
                          <button className="text-gray-400 hover:text-gray-600">
                            <X size={18} />
                          </button>
                          <img 
                            src={item.product.image} 
                            alt={item.product.name}
                            className="w-16 h-16 object-contain"
                          />
                          <span className="font-medium">{item.product.name}</span>
                        </div>
                      </td>
                      <td className="py-4">${item.product.price.toFixed(2)}</td>
                      <td className="py-4">
                        <div className="flex items-center border rounded w-32">
                          <button className="px-3 py-1 text-gray-600 hover:text-orange-500">-</button>
                          <input
                            type="number"
                            value={item.quantity}
                            className="w-12 text-center border-x py-1"
                            readOnly
                          />
                          <button className="px-3 py-1 text-gray-600 hover:text-orange-500">+</button>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-6">
                <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
                  UPDATE CART
                </button>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 border rounded">
                <h2 className="text-xl font-bold mb-6">CART TOTALS</h2>
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b">
                    <span className="font-bold">Total</span>
                    <span className="text-2xl font-bold text-orange-500">${subtotal.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() =>'/checkout'}
                    className="w-full bg-orange-500 text-white text-center py-3 rounded hover:bg-orange-600 transition-colors"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;