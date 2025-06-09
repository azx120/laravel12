import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const equipmentCategories = [
  {
    id: 1,
    title: 'Fumigadoras',
    subtitle: 'Bombas de fumigación',
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: 2,
    title: 'Desmalezadoras',
    subtitle: 'calidad profesional',
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: 3,
    title: 'Motosierras',
    subtitle: 'Engrase automático',
    image: 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: 4,
    title: 'Podadora de altura',
    subtitle: 'Versatilidad de corte',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  }
];

const EquipmentCategories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= equipmentCategories.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, equipmentCategories.length - itemsPerView) : prev - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-2">Protege tus cultivos y aumenta tu cosecha con AgroTa.</p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
            {equipmentCategories.map((category, index) => (
              <div
                key={category.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                    <p className="text-sm mb-2 opacity-90">{category.subtitle}</p>
                    <h3 className="text-2xl font-bold text-center">{category.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentCategories;