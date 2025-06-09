import React, { useState } from 'react';
import { ShoppingCart, Leaf, Shield, Bug, Droplets, ChevronDown, ChevronRight } from 'lucide-react';

const agroquimicosProducts = [
  {
    id: 1,
    name: 'Taravert Amifol',
    category: 'Bioestimulante antiestrés',
    price: { min: 8.50, max: 13.50 },
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 2,
    name: 'Citogmax',
    category: 'Bioestimulante',
    price: { min: 3.48, max: 25.20 },
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 3,
    name: 'Krystafeed NPK',
    category: 'Macroelementos y microelementos foliares y fertirriego',
    price: { min: 7.50, max: 7.50 },
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 4,
    name: 'Bucaner',
    category: 'Fungicida',
    price: { min: 9.00, max: 9.00 },
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 5,
    name: 'Paraguas/Botryazole',
    category: 'Fungicida',
    price: { min: 4.80, max: 43.20 },
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 6,
    name: 'Agrothane',
    category: 'Fungicida',
    price: { min: 14.90, max: 14.90 },
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 7,
    name: 'Raiz forte G',
    category: 'Enraizador',
    price: { min: 5.88, max: 10.68 },
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 8,
    name: 'Aniquilador',
    category: 'Insecticida',
    price: { min: 2.90, max: 22.90 },
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 9,
    name: 'Taravert Evo',
    category: 'Enraizador',
    price: { min: 9.90, max: 17.90 },
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 10,
    name: 'Redentor',
    category: 'Fungicida',
    price: { min: 10.50, max: 18.90 },
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 11,
    name: 'Rotapack',
    category: 'Corrector foliar',
    price: { min: 2.88, max: 8.50 },
    image: 'https://images.pexels.com/photos/5604250/pexels-photo-5604250.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 12,
    name: 'Strensil',
    category: 'Resistencia y defensa del cultivo',
    price: { min: 7.40, max: 22.90 },
    image: 'https://images.pexels.com/photos/7469108/pexels-photo-7469108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  }
];

const componentsData = [
  {
    id: 'acido-lignosulfonico',
    name: 'ÁCIDO LIGNOSULFÓNICO',
    description: 'Ácido carboxílico derivado de la lignina, formado por radicales -COOH (como todos los ácidos orgánicos grupo carbonilo + hidroxilo), pero también radicales sulfito-SO4-que le confieren mayor poder complejante.'
  },
  {
    id: 'acido-gluconico',
    name: 'ÁCIDO GLUCÓNICO',
    description: 'Ácido orgánico suave, producto de la fermentación de glucosa. Sus grupos funcionales carboxílicos le confieren capacidad para complejar cationes en su estructura a pH alcalinos.'
  },
  {
    id: 'etanolamina',
    name: 'ETANOLAMINA',
    description: 'Amina primaria combinada con un alcohol, de alto poder quelante y estable en pH alcalino en productos a base de Boro.'
  },
  {
    id: 'aminoacidos',
    name: 'AMINOÁCIDOS',
    description: 'Compuestos orgánicos a base de grupos amino y carboxílico, precursores de rutas metabólicas y proteínas, con función complejante, ahorrante energético y anti estrés.'
  },
  {
    id: 'betainas',
    name: 'BETAINAS',
    description: 'La glicina – betaína es una amina cuaternaria, compuesto no iónico que sintetizan las plantas como respuesta adaptativa a situaciones de déficit hídrico, produciendo un fuerte efecto osmoprotector.'
  },
  {
    id: 'glucosamina',
    name: 'GLUCOSAMINA',
    description: 'Es un polisacárido + amino procedente de exoesqueleto de artrópodos; un PAMP (elicitor) purificado que, al aplicarse sobre las plantas, activan una respuesta natural de defensa haciéndolas más resistentes frente determinados patógenos.'
  }
];

const Agroquimicos: React.FC = () => {
  const [expandedComponent, setExpandedComponent] = useState<string>('acido-lignosulfonico');

  const toggleComponent = (componentId: string) => {
    setExpandedComponent(expandedComponent === componentId ? '' : componentId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agroquímicos</h1>
          <div className="flex items-center gap-2 text-sm">
            <span>HOME</span>
            <span>/</span>
            <span>AGROQUÍMICOS</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-4">Despierte el Máximo Potencial de sus Tierras</p>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Fortalezca sus Cultivos contra el Estrés y las Enfermedades
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Con una amplia gama de <span className="font-semibold">agroquímicos innovadores</span> cuidadosamente formulados a base de <span className="font-semibold">biomoléculas excepcionales</span>, le ofrecemos las herramientas necesarias para <span className="font-semibold">despertar el máximo potencial</span> de sus tierras.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {agroquimicosProducts.map((product) => (
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
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                <div className="text-orange-500 font-bold">
                  {product.price.min === product.price.max 
                    ? `$${product.price.min.toFixed(2)}`
                    : `$${product.price.min.toFixed(2)} – $${product.price.max.toFixed(2)}`
                  }
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="relative mb-16 rounded-lg overflow-hidden">
          <div 
            className="h-32 bg-cover bg-center relative"
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=400&dpr=1')" 
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  ¡Juntos, cultivaremos un futuro más próspero y sostenible!
                </h3>
                <p className="text-lg">¡Contáctenos hoy mismo para más información!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fitosanitarios Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <p className="text-gray-500 mb-4">Protección Integral para sus Cultivos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              Fitosanitarios de Alta Eficacia
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Nuestros fitosanitarios le ofrecen una amplia gama de soluciones para el control efectivo de plagas y enfermedades, asegurando la salud y el rendimiento óptimo de sus cultivos.
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <Leaf size={40} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                HERBICIDA
              </h3>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <Shield size={40} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                FUNGICIDAS
              </h3>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <Bug size={40} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                INSECTICIDAS
              </h3>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <Droplets size={40} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                ACARICIDAS
              </h3>
            </div>
          </div>
        </div>

        {/* Components Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <p className="text-gray-500 mb-4">Soluciones innovadoras</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-orange-500">Con componentes que</span><br />
              <span className="text-orange-500">marcan la diferencia</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Presentamos nuestra gama de productos, cuidadosamente formulados con{' '}
              <span className="font-semibold">biomoléculas excepcionales</span> que trabajan en sinergia para ofrecerle{' '}
              <span className="font-semibold">resultados extraordinarios</span>:
            </p>
          </div>

          {/* Right Content - Functional Components Tabs */}
          <div>
            <div className="space-y-2">
              {componentsData.map((component) => (
                <div key={component.id} className="border border-orange-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleComponent(component.id)}
                    className="w-full p-4 bg-orange-50 border-b border-orange-200 hover:bg-orange-100 transition-colors duration-200 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <h3 className="font-semibold text-gray-800">{component.name}</h3>
                      </div>
                      {expandedComponent === component.id ? (
                        <ChevronDown size={20} className="text-orange-500" />
                      ) : (
                        <ChevronRight size={20} className="text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {expandedComponent === component.id && (
                    <div className="p-4 bg-white animate-in slide-in-from-top-2 duration-200">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {component.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
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

export default Agroquimicos;