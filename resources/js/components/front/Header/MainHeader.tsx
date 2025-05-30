import React, { useState } from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import Logo from './Logo';
import CartDrawer from '../Cart/CartDrawer';


interface MainHeaderProps {
  className?: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ className = '', products }) => {
  
  const [isCartOpen, setIsCartOpen] = useState(false);
   
  // Temporary cart items for demonstration
  const cartItems = [
    { product: products[0], quantity: 1 },
    { product: products[3], quantity: 1 }
  ];

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <>
      <div className={`bg-orange-500 shadow-md ${className}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Logo />
          
          <nav className="hidden md:flex space-x-6">
            {['Inicio', 'Agroquímicos', 'Agroforestal', 'Tienda', 'Nosotros', 'Contactos'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-green-100 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products"
                className="py-2 px-4 pr-10 rounded-sm border-0 focus:ring-1 focus:ring-green-600 w-full md:w-64"
              />
              <button className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-green-600">
                <Search size={20} />
              </button>
            </div>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center text-white"
            >
              <div className="relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </div>
              <span className="ml-2">${totalAmount.toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
      />
    </>
  );
};

export default MainHeader;