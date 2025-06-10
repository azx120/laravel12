import React from 'react';
import { Link } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-orange-500">Productos</span> Destacados
          </h2>
        </div>

        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 group relative transition-all duration-200 hover:shadow-md"
                >

                  {/* Botón Add to Cart (hover) */}
                  <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity font-bold bg-orange-500 text-white text-xs px-2 py-1 rounded flex ">
                    Agregar Carrito  <ShoppingCart size={16} className='ms-1 fotn-bold' />
                  </button>

                  {/* Imagen del producto */}
                  <div className="flex justify-center mb-3 h-40">
                    <img
                      src={product.image || 'https://via.placeholder.com/150'}
                      alt={product.name}
                      className="h-full object-contain"
                    />
                  </div>

                  {/* Información del producto */}
                  <div className="text-center">
                    <h3 className="text-sm font-medium mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{product.category_id}</p>
                    <p className="text-lg font-bold text-orange-500">
                      ${product.price}
                    </p>
                  </div>

                  {/* Borde hover */}
                  <div className="absolute inset-0 border-2 border-orange-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -m-0.5"></div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/tienda"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                VER TODOS LOS PRODUCTOS
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No hay productos destacados disponibles</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;