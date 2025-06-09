import React from 'react';
import HeroBanner from '@/components/front/Store/HeroBanner';
import ProductSection from '@/components/front/Store/ProductSection';
import { usePage } from '@inertiajs/react';

const Store: React.FC = () => {
  const { products } = usePage().props;

  return (
    <div>
      <HeroBanner title="Tienda" />
      <ProductSection products={products} />
    </div>
  );
};

export default Store; 