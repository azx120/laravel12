import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import ProductControls from './ProductControls';



const ProductSection: React.FC = ({products}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />
      
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <aside className="md:w-1/4">
          <div className="sticky top-[120px] pt-4">
            <FilterSidebar />
          </div>
        </aside>
        
        <div className="md:w-3/4">
          <ProductControls 
            viewMode={viewMode} 
            setViewMode={setViewMode}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
          />
          <ProductGrid viewMode={viewMode} products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;