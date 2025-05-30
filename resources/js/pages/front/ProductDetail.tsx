import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import { Product } from '@/types';
import RelatedProducts from '@/components/front/Store/RelatedProducts';
import { Head, Link, useForm, usePage } from '@inertiajs/react';


const ProductDetail: React.FC = () => {
  
  const { id } = useParams();
  const { products } = usePage().props;
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const productId = parseInt(id || '0');
    const foundProduct = products.find(p => p.id === productId);
    
    if (!foundProduct) {
      navigate('/');
      return;
    }
    
    setProduct(foundProduct);
    setCurrentImageIndex(0);
  }, [id, navigate]);

  if (!product) {
    return null;
  }

  const images = product.images || [product.image];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8 text-gray-500">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Agroquímicos</span>
          <span className="mx-2">/</span>
          <span>Línea nutricional</span>
          <span className="mx-2">/</span>
          <span>Corrector foliar</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="lg:w-3/5">
            <div className="relative bg-white p-12 rounded-lg shadow-sm">
              {hasMultipleImages && (
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-400 hover:text-orange-500"
                >
                  <ChevronLeft size={24} />
                </button>
              )}
              <img
                src={images[currentImageIndex]}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="max-h-[600px] w-full object-contain mx-auto"
              />
              {hasMultipleImages && (
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-400 hover:text-orange-500"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
            
            {hasMultipleImages && (
              <div className="flex justify-center gap-4 mt-6">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-24 h-24 border-2 rounded-lg overflow-hidden ${
                      currentImageIndex === index ? 'border-orange-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:w-2/5">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>
            <div className="text-3xl text-orange-500 font-bold mb-8">
              ${product.price.toFixed(2)}
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
              {product.composition && (
                <p className="font-medium text-gray-800">{product.composition}</p>
              )}
            </div>

            {product.sizes && (
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cantidad:
                </label>
                <select className="w-full border rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border rounded-md">
                <button 
                  className="px-4 py-3 text-gray-600 hover:text-orange-500 text-lg"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-20 text-center border-x py-3 text-lg"
                />
                <button 
                  className="px-4 py-3 text-gray-600 hover:text-orange-500 text-lg"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors text-lg font-medium">
                ADD TO CART
              </button>
            </div>

            <div className="border-t pt-8">
              <div className="flex items-center gap-6 text-gray-600">
                <span className="text-sm font-medium">Share:</span>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    <Share2 size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b">
            <div className="max-w-5xl mx-auto">
              <button className="px-8 py-4 text-orange-500 border-b-2 border-orange-500 font-medium">
                DESCRIPTION
              </button>
              <button className="px-8 py-4 text-gray-500 hover:text-orange-500">
                ADDITIONAL INFORMATION
              </button>
            </div>
          </div>
          <div className="max-w-5xl mx-auto py-8">
            {product.details ? (
              <ul className="space-y-3 text-gray-600">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">{product.description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts currentProduct={product} products={products} />
    </div>
  );
};

export default ProductDetail;