import React from 'react';

const AgrochemicalsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Conoce nuestra <span className="text-orange-500">línea de agroquímicos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fitosanitarios */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <div 
              className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ 
                backgroundImage: "url('https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1')" 
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Fitosanitarios</h3>
                <button className="bg-white text-gray-800 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors duration-300">
                  VER MÁS
                </button>
              </div>
            </div>
          </div>

          {/* Nutricionales */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <div 
              className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ 
                backgroundImage: "url('https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1')" 
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Nutricionales</h3>
                <button className="bg-white text-gray-800 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors duration-300">
                  VER MÁS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgrochemicalsSection;