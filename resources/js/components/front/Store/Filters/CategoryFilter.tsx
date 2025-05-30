import React from 'react';

const categories = [
  'Agroquímicos',
  'Cortasetos',
  'Desmalezadora',
  'Enmienda',
  'Fumigadora',
  'Motosierras',
  'Podadora de altura',
  'Sin categorizar'
];

const CategoryFilter: React.FC = () => {
  return (
    <div className="space-y-3">
      {categories.map((category) => (
        <div key={category} className="flex items-center">
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
            {category}
          </a>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;