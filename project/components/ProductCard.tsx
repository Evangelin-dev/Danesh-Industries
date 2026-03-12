import React from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  shortSpec: string;
  onViewDetails: (categoryId: string, productName: string) => void;
  categoryId: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  shortSpec,
  onViewDetails,
  categoryId,
}) => {
  return (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div
        className="relative h-48 bg-gray-200 overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(categoryId, name)}
        role="button"
        aria-label={`View details for ${name}`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1581092921462-63f1c1ae3b09?q=80&w=500&auto=format&fit=crop';
          }}
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
          {name}
        </h3>

        {/* Short Specification */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {shortSpec}
        </p>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(categoryId, name)}
          className="w-full bg-brand-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
