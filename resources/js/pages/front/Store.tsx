import React from 'react';
import HeroBanner from '@/components/front/Store/HeroBanner';
import ProductSection from '@/components/front/Store/ProductSection';
import { usePage } from '@inertiajs/react';
import { Product, Category } from '@/types';

const Store: React.FC = () => {
  const { products, categories } = usePage().props;
console.log(categories)
  const productos: Product[] = products;

  return (
    <div className='min-h-screen bg-white'>
      <HeroBanner title="Tienda" />
      <ProductSection products={productos} categories={categories} />
    </div>
  );
};

export default Store; 