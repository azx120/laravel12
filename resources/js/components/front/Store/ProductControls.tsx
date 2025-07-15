import React from 'react';
import { Grid, List } from 'lucide-react';

interface ProductControlsProps {
  viewMode: 'grid' | 'list';
  setViewMode: React.Dispatch<React.SetStateAction<'grid' | 'list'>>;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

const ProductControls: React.FC<ProductControlsProps> = ({ 
  viewMode, 
  setViewMode,
  itemsPerPage,
  setItemsPerPage,
  sortOption,
  setSortOption
}) => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-6">
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-600">Show:</span>
        {[9, 12, 18, 24].map(number => (
          <button
            key={number}
            onClick={() => setItemsPerPage(number)}
            className={`text-sm px-2 py-1 ${itemsPerPage === number ? 'text-orange-500 font-semibold' : 'text-gray-600'}`}
          >
            {number}
          </button>
        ))}
      </div>
      
      <div className="flex items-center mt-2 sm:mt-0">
        <div className="flex items-center mr-4">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1 ${viewMode === 'grid' ? 'text-orange-500' : 'text-gray-400'}`}
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-1 ${viewMode === 'list' ? 'text-orange-500' : 'text-gray-400'}`}
          >
            <List size={20} />
          </button>
        </div>
        
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="default">Default sorting</option>
          <option value="price-low-high">Sort by price: low to high</option>
          <option value="price-high-low">Sort by price: high to low</option>
          <option value="name-asc">Sort by name (A-Z)</option>
          <option value="name-desc">Sort by name (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default ProductControls;