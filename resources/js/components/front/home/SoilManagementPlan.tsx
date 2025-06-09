import React from 'react';

const soilProducts = [
  {
    id: 1,
    name: 'Producto Suelo 1',
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1'
  },
  {
    id: 2,
    name: 'Producto Suelo 2',
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1'
  },
  {
    id: 3,
    name: 'Producto Suelo 3',
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1'
  }
];

const SoilManagementPlan: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Plan para <span className="text-orange-500">manejo de suelos</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Fórmula ganadora para renovar tus suelos, mejorar el sistema radicular y aumentar la asimilación de nutrientes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {soilProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
            VER PLAN COMPLETO
          </button>
        </div>
      </div>
    </section>
  );
};

export default SoilManagementPlan;