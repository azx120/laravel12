import React, { useState, useEffect } from 'react';
import Breadcrumb from './Breadcrumb';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import ProductControls from './ProductControls';
import { Product, Category } from '@/types';

interface ProductSectionProps {
  products: Product[];
  categories: Category[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ 
  products: initialProducts, 
  categories 
}) => {
  // Estados de visualización
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  
  // Estados de filtrado
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>('default');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);

  // Efecto para aplicar filtros
  useEffect(() => {
    let result = [...initialProducts];
    
    // Filtro por precio
    result = result.filter(product => {
      const price = parseFloat(product.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Filtro por categoría (si hay seleccionadas)
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category_id)
      );
    }
    
    // Ordenación
    result.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      
      switch (sortOption) {
        case 'price-low-high': return priceA - priceB;
        case 'price-high-low': return priceB - priceA;
        case 'name-asc': return a.name.localeCompare(b.name);
        case 'name-desc': return b.name.localeCompare(a.name);
        default: return 0;
      }
    });
    
    setFilteredProducts(result);
  }, [initialProducts, priceRange, selectedCategories, sortOption]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb categories={categories} />
      
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <aside className="md:w-1/4">
          <div className="sticky top-[120px] pt-4">
            <FilterSidebar 
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              categories={categories} // Pasamos el array completo de categorías
            />
          </div>
        </aside>
        
        <div className="md:w-3/4">
          <ProductControls 
            viewMode={viewMode} 
            setViewMode={setViewMode}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          <ProductGrid 
            viewMode={viewMode} 
            products={filteredProducts}
            categories={categories}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;