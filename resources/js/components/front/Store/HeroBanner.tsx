import React from 'react';

interface HeroBannerProps {
  title: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title }) => {
  return (
    <div className="relative h-48 md:h-64">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="container mx-auto relative h-full flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
};

export default HeroBanner;