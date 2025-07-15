import React from 'react';
import { Link } from '@inertiajs/react';
import { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
  categoryName?: string; // Nueva prop opcional para el nombre de la categoría
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode, categoryName }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:shadow-md hover:translate-y-[-2px]">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 p-4 flex items-center justify-center">
            <Link href={`/product/${product.id}`}>
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-48 object-contain"
              />
            </Link>
          </div>
          <div className="sm:w-2/3 p-4">
            <h3 className="text-lg font-semibold text-gray-800 hover:text-orange-500 transition-colors">
              <Link href={`/product/${product.id}`}>{product.name}</Link>
            </h3>
            {/* Mostrar nombre de categoría si está disponible */}
            {categoryName && (
              <p className="text-sm text-gray-500 mb-2">{categoryName}</p>
            )}
            <div className="text-orange-500 font-bold text-lg mb-3">${product.price.toFixed(2)}</div>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center text-sm transition-colors">
              <ShoppingCart size={16} className="mr-2" />
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:shadow-md hover:translate-y-[-2px]">
      <div className="p-4 flex items-center justify-center">
        <Link href={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-48 object-contain"
          />
        </Link>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 hover:text-orange-500 transition-colors">
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        {/* Mostrar nombre de categoría si está disponible */}
        {categoryName && (
          <p className="text-sm text-gray-500 mb-2">{categoryName}</p>
        )}
        <div className="text-orange-500 font-bold text-lg">${parseFloat(product.price).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;