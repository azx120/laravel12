import React from 'react';

const Breadcrumb: React.FC = () => {
  return (
    <div className="text-sm text-gray-500 mb-6">
      <span>Home</span>
      <span className="mx-2">/</span>
      <span className="text-gray-700">Tienda</span>
    </div>
  );
};

export default Breadcrumb;