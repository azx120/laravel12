import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface RelatedProductsProps {
  currentProduct: Product;
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProduct, products }) => {
  const relatedProducts = products
    .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="bg-white border-t">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-xl font-bold text-gray-900 mb-2 uppercase">Productos Relacionados</h2>
        <div className="h-1 w-12 bg-orange-500 mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group">
              <Link 
                to={`/product/${product.id}`} 
                className="block bg-white rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-lg"
              >
                <div className="aspect-square flex items-center justify-center p-8 bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="text-gray-800 font-medium mb-2 group-hover:text-orange-500 transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-orange-500 font-bold">${product.price.toFixed(2)}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;