import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
interface CheckoutProps {
  cartItems: Array<{
    product: {
      name: string;
      price: number;
      image: string;
    };
    quantity: number;
  }>;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Order placed');
  };

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
            <span className="opacity-70">SHOPPING CART</span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="font-semibold">CHECKOUT</span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="opacity-70">ORDER COMPLETE</span>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Billing Details */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-8">BILLING DETAILS</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company name (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country / Region <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Ecuador</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="House number and street name"
                    required
                    className="w-full border rounded-md px-4 py-2 mb-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Town / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Province <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Guayas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postcode / ZIP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">ADDITIONAL INFORMATION</h3>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order notes (optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-6 border rounded">
                <h2 className="text-xl font-bold mb-6">YOUR ORDER</h2>
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b">
                    <span className="font-medium">PRODUCT</span>
                    <span className="font-medium">SUBTOTAL</span>
                  </div>
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between pb-4 text-gray-600">
                      <span>{item.product.name} × {item.quantity}</span>
                      <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-4 border-y">
                    <span className="font-medium">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pb-4">
                    <span className="font-bold">Total</span>
                    <span className="text-2xl font-bold text-orange-500">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <input type="radio" id="quote" name="payment" />
                      <label htmlFor="quote">Solicitar cotización</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" id="payphone" name="payment" defaultChecked />
                      <label htmlFor="payphone">PayPhone Application Payments</label>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Pague de forma segura a través de PayPhone Secure Servers.
                    </p>
                  </div>

                  <p className="text-sm text-gray-600">
                    Sus datos personales se utilizarán para procesar su pedido, respaldar su experiencia en este sitio web y para otros fines descritos en nuestra{' '}
                    <a href="#" className="text-orange-500 hover:text-orange-600">
                      privacy policy
                    </a>
                    .
                  </p>

                  <button 
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition-colors"
                  >
                    PLACE ORDER
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

export default Checkout;