import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import HeroSlider from '@/components/front/home/HeroSlider';
import CategorySection from '@/components/front/home/CategorySection';
import FeaturedProducts from '@/components/front/home/FeaturedProducts';
import PulverizadorasSection from '@/components/front/home/PulverizadorasSection';
import EquipmentCategories from '@/components/front/home/EquipmentCategories';
import SoilManagementPlan from '@/components/front/home/SoilManagementPlan';
import AgrochemicalsSection from '@/components/front/home/AgrochemicalsSection';
import FavoriteProducts from '@/components/front/home/FavoriteProducts';
import ShindaiwaBrand from '@/components/front/home/ShindaiwaBrand';
import { Product } from '@/types';

const Home: React.FC = () => {
  const { products: initialProducts } = usePage<{ products: Product[] }>().props;
  
  // Estado para almacenar los primeros 8 productos
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (initialProducts && initialProducts.length > 0) {
      const primerosOcho = initialProducts.slice(0, 8);
      setProducts(primerosOcho);
    }
  }, [initialProducts]); 

  return (
    <div>
      <HeroSlider />
      <CategorySection />
      <FeaturedProducts products={products} />
      <PulverizadorasSection />
      <EquipmentCategories />
      <SoilManagementPlan />
      <AgrochemicalsSection />
      <FavoriteProducts />
      <ShindaiwaBrand />
    </div>
  );
};

export default Home;