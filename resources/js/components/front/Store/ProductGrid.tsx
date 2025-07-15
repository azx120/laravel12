import React from 'react';
import ProductCard from './ProductCard';
import { Product, Category } from '@/types';

interface ProductGridProps {
  viewMode: 'grid' | 'list';
  products: Product[];
  categories?: Category[]; // Hacemos categories opcional para mantener compatibilidad
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  viewMode, 
  products,
  categories = [] // Valor por defecto array vacío
}) => {
  // Función para obtener el nombre de la categoría
  const getCategoryName = (categoryId: string) => {
    if (!categories || categories.length === 0) return '';
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  };

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
          categoryName={getCategoryName(product.category_id)} // Pasamos el nombre de la categoría
        />
      ))}
    </div>
  );
};

export default ProductGrid;