import React from 'react';
import HeroSlider from '@/components/front/home/HeroSlider';
import CategorySection from '@/components/front/home/CategorySection';
import FeaturedProducts from '@/components/front/home/FeaturedProducts';
import PulverizadorasSection from '@/components/front/home/PulverizadorasSection';
import EquipmentCategories from '@/components/front/home/EquipmentCategories';
import SoilManagementPlan from '@/components/front/home/SoilManagementPlan';
import AgrochemicalsSection from '@/components/front/home/AgrochemicalsSection';
import FavoriteProducts from '@/components/front/home/FavoriteProducts';
import ShindaiwaBrand from '@/components/front/home/ShindaiwaBrand';

const Home: React.FC = () => {

return(
        <div>
      <HeroSlider />
      <CategorySection />
      <FeaturedProducts />
      <PulverizadorasSection />
      <EquipmentCategories />
      <SoilManagementPlan />
      <AgrochemicalsSection />
      <FavoriteProducts />
      <ShindaiwaBrand />
    </div>
)};

export default Home; 