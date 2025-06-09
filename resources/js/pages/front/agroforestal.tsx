import React from 'react';
import { ShoppingCart } from 'lucide-react';

const agroforestProducts = [
  {
    id: 1,
    name: 'Desmalezadora SRM-520ES/ULA',
    code: 'EC-SRM-520ES/ULA',
    category: 'Desmalezadora',
    price: 475.00,
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 2,
    name: 'Desmalezadora SRM-4510ULA',
    code: 'EC-SRM-4510ULA',
    category: 'Desmalezadora',
    price: 269.00,
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 3,
    name: 'Desmalezadora RM-4300',
    code: 'EC-RM-4300',
    category: 'Desmalezadora',
    price: 629.00,
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 4,
    name: 'Desmalezadora SRM-3020U',
    code: 'EC-SRM-3020U',
    category: 'Desmalezadora',
    price: 629.00,
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 5,
    name: 'Desmalezadora SRM-2620U',
    code: 'EC-SRM-2620U',
    category: 'Desmalezadora',
    price: 475.00,
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 6,
    name: 'Desmalezadora SRM-22GESU',
    code: 'EC-SRM-22GESU',
    category: 'Desmalezadora',
    price: 269.00,
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 7,
    name: 'Fumigadora ES-800',
    code: 'EC-ES-800',
    category: 'Fumigadora',
    price: 629.00,
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 8,
    name: 'Fumigadora SHP-800',
    code: 'EC-SHP-800',
    category: 'Fumigadora',
    price: 629.00,
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 9,
    name: 'Nebulizadora MB-580',
    code: 'EC-MB-580',
    category: 'Fumigadora',
    price: 565.00,
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 10,
    name: 'Podadora de altura PPT266',
    code: 'EC-PPT266',
    category: 'Podadora de altura',
    price: 656.00,
    image: 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 11,
    name: 'Nebulizadora DM 6120',
    code: 'EC-DM-6120',
    category: 'Fumigadora',
    price: 610.00,
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 12,
    name: 'Bomba de fumigación 494',
    code: 'EC-494',
    category: 'Fumigadora',
    price: 251.00,
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  }
];

const Agroforestal: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agroforestal</h1>
          <div className="flex items-center gap-2 text-sm">
            <span>HOME</span>
            <span>/</span>
            <span>AGROFORESTAL</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-4">Rendimiento, Sostenibilidad y Eficiencia</p>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Eleva tu productividad y sostenibilidad con herramientas de calidad
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            En Agrocultivar, entendemos las necesidades únicas de la agroforestería moderna. Por eso, te ofrecemos una amplia gama de equipos y herramientas especializadas, diseñadas para ayudarte a alcanzar el máximo rendimiento y sostenibilidad en tus cultivos.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {agroforestProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden rounded-t-lg p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors duration-300">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
              <div className="p-4 text-center border-t-2 border-orange-500">
                <p className="text-xs text-blue-600 font-medium mb-1">{product.code}</p>
                <h3 className="text-sm font-semibold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{product.category}</p>
                <div className="text-orange-500 font-bold">
                  ${product.price.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Desmalezadoras Banner */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <div 
              className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ 
                backgroundImage: "url('https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1')" 
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                <p className="text-sm mb-2 opacity-90">calidad profesional</p>
                <h3 className="text-3xl font-bold mb-4">Desmalezadoras</h3>
              </div>
            </div>
          </div>

          {/* Podadora de altura Banner */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <div 
              className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ 
                backgroundImage: "url('https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1')" 
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                <p className="text-sm mb-2 opacity-90">Versatilidad de corte</p>
                <h3 className="text-3xl font-bold mb-4">Podadora de altura</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Fumigation Tools Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <p className="text-gray-500 mb-4">Protege tu inversión, protege tu futuro</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-orange-500">Descubre las herramientas de fumigación</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Las plagas y enfermedades pueden poner en riesgo tus cultivos y tu negocio. Por eso, en AgroCultivar te ofrecemos una completa línea de herramientas de fumigación, diseñadas para brindarte un control preciso y efectivo sobre los agentes nocivos.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-colors duration-300 transform hover:scale-105">
              VER MÁS
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
              alt="Herramientas de fumigación ECHO"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">ECHO</span>
                </div>
                <span className="text-sm font-medium text-gray-800">Professional Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>Creado por AlucinaMKT 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Agroforestal;