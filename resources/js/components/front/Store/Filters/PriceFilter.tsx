import React from 'react';

interface PriceFilterProps {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  maxPrice: number;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ 
  priceRange, 
  setPriceRange,
  maxPrice
}) => {
  const progressPercentage = (priceRange[1] / maxPrice) * 100;

  return (
    <div className="w-full">
      {/* Contenedor de la barra de rango personalizada */}
      <div className="relative h-2 bg-gray-200 rounded-full mb-6">
        {/* Barra de progreso naranja */}
        <div 
          className="absolute h-full bg-orange-500 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
        
        {/* Thumb (bolita) personalizada */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-md cursor-pointer"
          style={{ left: `calc(${progressPercentage}% - 8px)` }}
        ></div>
        
        {/* Input range transparente sobre toda el área */}
        <input
          type="range"
          min={0}
          max={maxPrice}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      
      {/* Etiquetas de precio */}
      <div className="flex justify-between mt-2 text-black">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
  );
};

export default PriceFilter;