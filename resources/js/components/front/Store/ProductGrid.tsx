import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  viewMode: 'grid' | 'list';
}

const ProductGrid: React.FC<ProductGridProps> = ({ viewMode, products }) => {

  return (
    <div className={`
      ${viewMode === 'grid' 
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
        : 'space-y-6'
      }
    `}>
      {products.map((product:any) => (
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