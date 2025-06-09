import React from 'react';
import { ShoppingCart } from 'lucide-react';

const favoriteProducts = [
  {
    id: 1,
    name: 'Producto Agroquímico 1',
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
    price: 45.99
  },
  {
    id: 2,
    name: 'AGROTHANE',
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
    price: 32.50
  },
  {
    id: 3,
    name: 'AGROTHANE Plus',
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
    price: 38.75
  },
  {
    id: 4,
    name: 'ANIQUILADOR',
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
    price: 28.90
  }
];

const FavoriteProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-orange-500">Productos</span> favoritos de los agricultores
          </h2>
          <p className="text-gray-600">Alta calidad para el agricultor moderno.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteProducts.map((product) => (
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
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors duration-300">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="text-xl font-bold text-orange-500">
                  ${product.price.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteProducts;