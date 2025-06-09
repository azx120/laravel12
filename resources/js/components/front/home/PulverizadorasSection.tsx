import React from 'react';

const PulverizadorasSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="lg:w-1/3">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1"
                alt="Pulverizadora en campo"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:w-1/3 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              <span className="text-orange-500">Pulverizadoras</span><br />
              ECHO
            </h2>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1"
                alt="Pulverizadora ECHO"
                className="w-full max-w-md mx-auto h-80 object-contain"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/3">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1"
                alt="Aplicación de productos"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulverizadorasSection;