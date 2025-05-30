import React from 'react';
import { MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface TopBarProps {
  className?: string;
}

const TopBar: React.FC<TopBarProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gray-100 ${className}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm">
            <MapPin size={16} className="text-orange-500 mr-1" />
            <span>Milagro/ Parroquia Roberto Astudillo</span>
          </div>
          <div className="flex items-center text-sm">
            <Phone size={16} className="text-orange-500 mr-1" />
            <span>96 932 2989</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <a href="#" className="text-gray-600 hover:text-orange-500">
            <Facebook size={16} />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500">
            <Twitter size={16} />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500">
            <Linkedin size={16} />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500">
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;