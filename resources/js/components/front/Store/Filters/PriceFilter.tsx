import React from 'react';

interface PriceFilterProps {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ priceRange, setPriceRange }) => {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setPriceRange([0, value]);
  };

  const handleFilterClick = () => {
    console.log('Filtering with price range:', priceRange);
    // Implement actual filtering logic here
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="range"
          min="0"
          max="860"
          value={priceRange[1]}
          onChange={handleSliderChange}
          className="w-full h-2 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-sm text-gray-600">Price: </span>
          <span className="font-semibold">${priceRange[0]} — ${priceRange[1]}</span>
        </div>
        <button 
          onClick={handleFilterClick}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm uppercase font-medium transition-colors"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;