import React from 'react';
import {  Link, } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'Bomba de fumigación SIRF-436',
    category: 'Fumigadora',
    price: 269.00,
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
  },
  {
    id: 2,
    name: 'Bomba de fumigación 494',
    category: 'Fumigadora',
    price: 251.00,
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
  },
  {
    id: 3,
    name: 'Desmalezadora RM-4300',
    category: 'Desmalezadora',
    price: 629.00,
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
  },
  {
    id: 4,
    name: 'Desmalezadora SRM-22GESU',
    category: 'Desmalezadora',
    price: 269.00,
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
  },
  {
    id: 5,
    name: 'Desmalezadora SRM-2620U',
    category: 'Desmalezadora',
    price: 475.00,
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
  },
  {
    id: 6,
    name: 'Desmalezadora SRM-3020U',
    category: 'Desmalezadora',
    price: 503.00,
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
  },
  {
    id: 7,
    name: 'Desmalezadora SRM-4510',
    category: 'Desmalezadora',
    price: 578.00,
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
  },
  {
    id: 8,
    name: 'Desmalezadora SRM-520ES',
    category: 'Desmalezadora',
    price: 853.00,
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-orange-500">Productos</span> Destacados
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-sm font-medium text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-500">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors duration-300 transform hover:scale-110">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/tienda"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
          >
            VER TODOS LOS PRODUCTOS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;