import React, { useState } from 'react';
import WhyChooseUs from './WhyChooseUs';
import FAQSection from './FAQSection';
import ContactPopup from './ContactPopup';

interface ProductItem {
  name: string;
  image?: string;
  specifications?: Record<string, string>;
  additionalInfo?: Record<string, string>;
  keyFeatures?: string[];
  description?: string;
}

interface ProductCategory {
  id: string;
  category: string;
  items: ProductItem[];
  whyChoose?: string[];
  advantages?: string[];
  faq?: Array<{ q: string; a: string }>;
  [key: string]: any;
}

interface InlineProductDetailsProps {
  product: ProductItem;
  category: ProductCategory;
  onBack: () => void;
}

const InlineProductDetails: React.FC<InlineProductDetailsProps> = ({
  product,
  category,
  onBack,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<string>(product.name);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const currentProduct = category.items.find(item => item.name === selectedVariant) || product;
  const categoryId = category.id;

  const isFlange = [
    'flanges',
    'valve-components',
    'ms-flanges',
    'ss-304-flanges',
    'gi-r-brand-fittings',
    'gi-fittings',
    'ss-fittings',
    'pull-studs',
    'plug-valves',
    'control-valves',
    'mild-steel-pins',
    'partition-plate-die',
    'ball-valve-seat-ring',
    'solenoid-valves',
    'cast-steel-screwed-fittings',
    'pipe-fittings',
    'gi-slip-on-flanges',
    'ss-316-flanges',
    'ms-spacer-flanges',
  ].includes(categoryId || '');

  const headingColor = isFlange ? 'text-orange-500' : 'text-brand-blue';
  const accentColor = isFlange ? 'text-orange-500' : 'text-brand-blue';

  return (
    <div className="animate-fade-in">
      {/* Product Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 bg-white rounded-lg shadow-xl p-8">
        {/* Product Image */}
        <div className="flex items-center justify-center">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="w-full h-auto max-h-96 object-cover rounded-lg"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1581092921462-63f1c1ae3b09?q=80&w=500&auto=format&fit=crop';
            }}
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className={`text-4xl font-bold mb-4 ${headingColor}`}>
            {currentProduct.name}
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {currentProduct.description || category.introduction}
          </p>

          {/* Product Types/Variants Selector */}
          {category.items.length > 1 && (
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                Select Variant:
              </label>
              <select
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue font-semibold text-gray-800"
              >
                {category.items.map((item, idx) => (
                  <option key={idx} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Key Features */}
          {currentProduct.keyFeatures && currentProduct.keyFeatures.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {currentProduct.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`text-xl font-bold flex-shrink-0 ${accentColor}`}>
                      ✓
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Button */}
          <button
            onClick={() => setShowContactPopup(true)}
            className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Get a Quote
          </button>
        </div>
      </div>

      {/* Specifications Section */}
      {currentProduct.specifications && Object.keys(currentProduct.specifications).length > 0 && (
        <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(currentProduct.specifications).map(([key, value], idx) => (
              <div key={idx} className="flex border-b border-gray-200 pb-3">
                <dt className="font-semibold text-gray-800 w-1/3">{key}:</dt>
                <dd className="text-gray-700 w-2/3">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Additional Info Section */}
      {currentProduct.additionalInfo && Object.keys(currentProduct.additionalInfo).length > 0 && (
        <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(currentProduct.additionalInfo).map(([key, value], idx) => (
              <div key={idx} className="flex border-b border-gray-200 pb-3">
                <dt className="font-semibold text-gray-800 w-1/3">{key}:</dt>
                <dd className="text-gray-700 w-2/3">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Why Choose Us Section */}
      {(category.whyChoose || category.advantages) && (
        <div className="mb-12">
          <WhyChooseUs
            items={category.whyChoose || category.advantages || []}
            categoryId={categoryId}
          />
        </div>
      )}

      {/* FAQ Section */}
      {category.faq && category.faq.length > 0 && (
        <div className="mb-12">
          <FAQSection items={category.faq} categoryId={categoryId} />
        </div>
      )}

      {/* Contact Popup */}
      <ContactPopup isOpen={showContactPopup} onClose={() => setShowContactPopup(false)} />
    </div>
  );
};

export default InlineProductDetails;
