import React, { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SEO from './SEO';
import { useLanguage } from '../contexts/LanguageContext';
import WhyChooseUs from './WhyChooseUs';
import FAQSection from './FAQSection';
import ContactPopup from './ContactPopup';

const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

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
  introduction: string;
  items: ProductItem[];
  whyChoose?: string[];
  advantages?: string[];
  faq?: Array<{ q: string; a: string }>;
  [key: string]: any; // Allow other properties
}

interface ProductDetailsProps {
  productData: ProductCategory[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productData }) => {
  const { categoryId, productId } = useParams<{ categoryId: string; productId: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [showContactPopup, setShowContactPopup] = useState(false);

  // Find the category and product
  const currentCategory = useMemo(
    () => productData.find(cat => cat.id === categoryId),
    [categoryId, productData]
  );

  const currentProduct = useMemo(() => {
    if (!currentCategory || !productId) return null;
    return currentCategory.items.find(item => slugify(item.name) === productId);
  }, [currentCategory, productId]);

  // Set initial variant
  React.useEffect(() => {
    if (currentProduct) {
      setSelectedVariant(currentProduct.name);
    }
  }, [currentProduct]);

  // SEO
  const seoTitle = currentProduct && currentCategory 
    ? `${currentProduct.name} - ${currentCategory.category} | Danesh Industries`
    : 'Product Details - Danesh Industries';

  const seoDescription = currentProduct && currentCategory
    ? currentProduct.description || currentCategory.introduction
    : '';

  if (!currentCategory || !currentProduct) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-gray-300 mb-6">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-brand-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={`${currentProduct.name}, ${currentCategory.category}, Danesh Industries`}
        url={`/products/${categoryId}/${currentProduct ? slugify(currentProduct.name) : productId}`}
      />

      <div className="bg-brand-dark min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back Button */}
          <button
            onClick={() => navigate(`/products/${categoryId}`)}
            className="mb-8 flex items-center text-brand-yellow hover:text-yellow-300 transition-colors font-semibold"
          >
            <span className="mr-2">←</span> Back to {currentCategory.category}
          </button>

          {/* Product Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 bg-white rounded-lg shadow-xl p-8">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-full h-auto max-h-96 object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1581092921462-63f1c1ae3b09?q=80&w=500&auto=format&fit=crop';
                }}
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className={`text-4xl font-bold mb-4 ${
                ['flanges', 'valve-components', 'ms-flanges', 'ss-304-flanges', 'gi-r-brand-fittings', 'gi-fittings', 'ss-fittings', 'pull-studs', 'plug-valves', 'control-valves', 'mild-steel-pins', 'partition-plate-die', 'ball-valve-seat-ring', 'solenoid-valves', 'cast-steel-screwed-fittings', 'pipe-fittings', 'gi-slip-on-flanges', 'ss-316-flanges', 'ms-spacer-flanges'].includes(categoryId || '')
                  ? 'text-orange-500'
                  : 'text-brand-blue'
              }`}>
                {currentProduct.name}
              </h1>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {currentProduct.description || currentCategory.introduction}
              </p>

              {/* Product Types/Variants Selector */}
              {currentCategory.items.length > 1 && (
                <div className="mb-8">
                  <label className="block text-lg font-semibold text-gray-800 mb-3">
                    Select Variant:
                  </label>
                  <select
                    value={selectedVariant}
                    onChange={(e) => {
                      const newProduct = currentCategory.items.find(item => item.name === e.target.value);
                      if (newProduct) {
                        navigate(`/products/${categoryId}/${slugify(newProduct.name)}`);
                        setSelectedVariant(newProduct.name);
                      }
                    }}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue font-semibold text-gray-800"
                  >
                    {currentCategory.items.map((item, idx) => (
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
                        <span className={`text-xl font-bold flex-shrink-0 ${
                          ['flanges', 'valve-components', 'ms-flanges', 'ss-304-flanges', 'gi-r-brand-fittings', 'gi-fittings', 'ss-fittings', 'pull-studs', 'plug-valves', 'control-valves', 'mild-steel-pins', 'partition-plate-die', 'ball-valve-seat-ring', 'solenoid-valves', 'cast-steel-screwed-fittings', 'pipe-fittings', 'gi-slip-on-flanges', 'ss-316-flanges', 'ms-spacer-flanges'].includes(categoryId || '')
                            ? 'text-orange-500'
                            : 'text-brand-blue'
                        }`}>✓</span>
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
              <h2 className={`text-2xl font-bold mb-6 ${
                ['flanges', 'valve-components', 'ms-flanges', 'ss-304-flanges', 'gi-r-brand-fittings', 'gi-fittings', 'ss-fittings', 'pull-studs', 'plug-valves', 'control-valves', 'mild-steel-pins', 'partition-plate-die', 'ball-valve-seat-ring', 'solenoid-valves', 'cast-steel-screwed-fittings', 'pipe-fittings', 'gi-slip-on-flanges', 'ss-316-flanges', 'ms-spacer-flanges'].includes(categoryId || '')
                  ? 'text-orange-500'
                  : 'text-brand-blue'
              }`}>
                Specifications
              </h2>
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
              <h2 className={`text-2xl font-bold mb-6 ${
                ['flanges', 'valve-components', 'ms-flanges', 'ss-304-flanges', 'gi-r-brand-fittings', 'gi-fittings', 'ss-fittings', 'pull-studs', 'plug-valves', 'control-valves', 'mild-steel-pins', 'partition-plate-die', 'ball-valve-seat-ring', 'solenoid-valves', 'cast-steel-screwed-fittings', 'pipe-fittings', 'gi-slip-on-flanges', 'ss-316-flanges', 'ms-spacer-flanges'].includes(categoryId || '')
                  ? 'text-orange-500'
                  : 'text-brand-blue'
              }`}>
                Additional Information
              </h2>
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
          {(currentCategory.whyChoose || currentCategory.advantages) && (
            <div className="mb-12">
              <WhyChooseUs 
                items={currentCategory.whyChoose || currentCategory.advantages || []}
                categoryId={categoryId}
              />
            </div>
          )}

          {/* FAQ Section */}
          {currentCategory.faq && currentCategory.faq.length > 0 && (
            <div className="mb-12">
              <FAQSection 
                items={currentCategory.faq}
                categoryId={categoryId}
              />
            </div>
          )}
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={showContactPopup}
        onClose={() => setShowContactPopup(false)}
      />
    </>
  );
};

export default ProductDetails;
