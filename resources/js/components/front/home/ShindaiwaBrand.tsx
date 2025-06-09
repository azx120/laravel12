import React from 'react';
import { Target, Zap, Weight } from 'lucide-react';

const ShindaiwaBrand: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Banner */}
        <div className="relative mb-16 rounded-lg overflow-hidden">
          <div 
            className="h-64 bg-cover bg-center relative"
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-white">
                  <h2 className="text-4xl font-bold mb-2">
                    <span className="text-red-500">IDEAL</span><br />
                    PARA EL<br />
                    TRABAJO DURO<br />
                    <span className="text-red-500">Y EXIGENTE</span>
                  </h2>
                </div>
                <div className="text-white text-right">
                  <h3 className="text-6xl font-bold">
                    shind<span className="text-red-500">ai</span>wa
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Left Image */}
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 opacity-20 rounded-lg"></div>
              <img
                src="https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1"
                alt="Trabajador con equipo Shindaiwa"
                className="w-full h-96 object-cover rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:w-1/3 text-center">
            <p className="text-gray-500 mb-4">Ofreciendo soluciones innovadoras</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Maquinaria <span className="text-orange-500">de alta<br />calidad</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Estamos comprometidos con la sostenibilidad del medio ambiente y con 
                el bienestar de las comunidades en las que trabajamos.
              </p>
              <p>
                Mantienen una Protección de desechos de alta resistencia por lo que 
                son ideales para trabajos de alto calibre.
              </p>
            </div>

            {/* Features Icons */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target size={32} className="text-orange-500" />
                </div>
                <p className="text-sm text-gray-600">Cilindrada (CC)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap size={32} className="text-orange-500" />
                </div>
                <p className="text-sm text-gray-600">Potencia (HP)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Weight size={32} className="text-orange-500" />
                </div>
                <p className="text-sm text-gray-600">Peso (KG)</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 opacity-20 rounded-lg"></div>
              <img
                src="https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1"
                alt="Equipo agrícola en acción"
                className="w-full h-96 object-cover rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShindaiwaBrand;