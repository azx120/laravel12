import React, { useState } from 'react';
import PriceFilter from './Filters/PriceFilter';
import CategoryFilter from './Filters/CategoryFilter';

const FilterSidebar: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 860]);

  return (
    <div className="relative">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-gray-700 mb-4 uppercase text-sm">Filtrar por precio</h3>
        <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
        
        <div className="border-t my-6"></div>
        
        <h3 className="font-bold text-gray-700 mb-4 uppercase text-sm">Categorías del producto</h3>
        <CategoryFilter />
      </div>
    </div>
  );
};

export default FilterSidebar;