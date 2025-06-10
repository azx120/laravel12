import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types';

interface ProductGridProps {
  viewMode: 'grid' | 'list';
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ viewMode, products }) => {

  console.log(products)

  return (
    <div className={`
      ${viewMode === 'grid' 
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
        : 'space-y-6'
      }
    `}>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          viewMode={viewMode} 
        />
      ))}
    </div>
  );
};

export default ProductGrid;