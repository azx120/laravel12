import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BASE_URL = import.meta.env.VITE_APP_URL || 'http://localhost:8000';

const slides = [
  {
    id: 1,
    title: 'MEJORA TUS PLANTACIONES CONFÍA EN NOSOTROS',
    subtitle: 'Somos una empresa dedicada a brindar productos para todas tus necesidades. Contáctanos',
    buttonText: 'CONTÁCTANOS',
    image: `${BASE_URL}/storage/img/slider-1.jpg`
  },
  {
    id: 2,
    title: 'PRODUCTOS DE CALIDAD PARA TU CULTIVO',
    subtitle: 'Encuentra todo lo que necesitas para el cuidado y mantenimiento de tus cultivos',
    buttonText: 'VER PRODUCTOS',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'TECNOLOGÍA AGRÍCOLA AVANZADA',
    subtitle: 'Equipos y herramientas modernas para optimizar tu producción agrícola',
    buttonText: 'EXPLORAR',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <img src="/storage/slider-1.jpg" className='w-20 h-20 absolute top-0 left-0 z-99' alt="" />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="container mx-auto px-4 h-full flex items-center relative">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                {slide.subtitle}
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 transform hover:scale-105">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;