import React from 'react';
import { Users, Target, Eye, Heart, Shield, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Nosotros</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
              alt="Agricultor trabajando en el campo"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-orange-500 text-sm uppercase tracking-wide mb-2">
              Tu aliado para una producción más rentable y responsable
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Sobre nosotros
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                En <span className="font-semibold text-gray-800">AGROCULTIVAR</span>, nos apasiona el campo ecuatoriano. Estamos trabajando 
                incansablemente para brindar a nuestros distribuidores y agricultores las <span className="font-semibold text-gray-800">mejores 
                opciones para una producción más rentable y responsable.</span>
              </p>
              <p>
                Estamos convencidos de que el sector agrícola ecuatoriano tiene un enorme 
                potencial para seguir creciendo y desarrollándose. Por eso, miramos hacia el 
                <span className="font-semibold text-gray-800"> futuro con optimismo.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Comprometidos a brindar la mejor<br />
              calidad en cada producto
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">2010</div>
              <div className="text-lg">Fundación</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">800</div>
              <div className="text-lg">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">90</div>
              <div className="text-lg">Aliados comerciales</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">2</div>
              <div className="text-lg">Oficinas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
              alt="Tecnología agrícola moderna"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Nuestra Misión
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Brindar una asesoría técnica de calidad y un seguimiento constante en cada etapa 
              del cultivo.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nuestra Visión
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Ser una empresa reconocida por su capacidad de gestionar un 
                asesoramiento continuo, logrando que cada agricultor obtenga mejores 
                cosechas en cada ciclo del cultivo.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                alt="Agricultores en el campo"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white mb-12">
            <p className="text-lg mb-4">Juntos, construimos el futuro del campo</p>
            <h2 className="text-3xl md:text-4xl font-bold">Nuestros valores</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Compromiso */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-white">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Compromiso</h3>
              <p className="leading-relaxed">
                Mantenemos un compromiso permanente con los 
                agricultores y con toda la línea de distribución, 
                esforzándonos por mejorar continuamente y alcanzar la 
                excelencia.
              </p>
            </div>

            {/* Integridad */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-white">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Integridad</h3>
              <p className="leading-relaxed">
                Actuamos con honestidad, transparencia y ética 
                en todas nuestras relaciones.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;