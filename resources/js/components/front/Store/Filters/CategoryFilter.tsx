import React from 'react';
import { Category } from '@/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategories: string[];
  onToggleCategory: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onToggleCategory
}) => {
  return (
    <div className="space-y-2">
      {categories.map(category => (
        <div key={category.id} className="flex items-center">
          <input
            type="checkbox"
            id={`category-${category.id}`}
            checked={selectedCategories.includes(category.id)}
            onChange={() => onToggleCategory(category.id)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label 
            htmlFor={`category-${category.id}`}
            className="ml-3 text-sm text-gray-700"
          >
            {category.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;