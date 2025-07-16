import React, { useContext } from 'react';
import HeroBanner from '@/components/front/Store/HeroBanner';
import ProductSection from '@/components/front/Store/ProductSection';
import { usePage } from '@inertiajs/react';
import { Product, Category } from '@/types';
import { FrontContex } from '@/context/FrontContext';

const Store: React.FC = () => {
  const { products, categories } = usePage().props;
  const productos: Product[] = products;
  const { cart } = useContext(FrontContex);
console.log(products)
  return (
    <div className='min-h-screen bg-white'>
      <HeroBanner title="Tienda" />
      <ProductSection products={productos} categories={categories} />
    </div>
  );
};

export default Store; 