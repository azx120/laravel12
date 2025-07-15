import React from 'react';
import PriceFilter from './Filters/PriceFilter';
import CategoryFilter from './Filters/CategoryFilter';
import { Category } from '@/types';

interface FilterSidebarProps {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  categories: Category[]; // Ahora recibimos el array completo de categorías
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  categories
}) => {
  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="relative">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-gray-700 mb-4 uppercase text-sm">Filtrar por precio</h3>
        <PriceFilter 
          priceRange={priceRange} 
          setPriceRange={setPriceRange} 
          maxPrice={1000}
        />
        
        <div className="border-t my-6"></div>
        
        <h3 className="font-bold text-black mb-4 uppercase text-sm">Categorías</h3>
        <CategoryFilter 
          categories={categories}
          selectedCategories={selectedCategories}
          onToggleCategory={handleCategoryToggle}
        />
      </div>
    </div>
  );
};

export default FilterSidebar;