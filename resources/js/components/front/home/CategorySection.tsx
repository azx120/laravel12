import React from 'react';
import { Sprout, Wheat, Scissors } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'AGROFORESTAL',
    description: 'Para tala, poda, producción y mantenimiento de áreas verdades',
    icon: Sprout,
    image: 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
  },
  {
    id: 2,
    title: 'AGRICULTURA',
    description: 'Para el mantenimiento de propiedades agropecuarias y producción de cultivos',
    icon: Wheat,
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
  },
  {
    id: 3,
    title: 'JARDINERÍA',
    description: 'Mantenimiento de áreas verdes, jardines y superficies más pequeñas',
    icon: Scissors,
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
  }
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-2">Un Mundo de Posibilidades</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            <span className="text-orange-500">Categorías</span> de uso
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <IconComponent size={40} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;