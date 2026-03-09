import React from 'react';

interface CategoryTabsProps {
  categories: Array<{ id: string; category: string }>;
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  maxVisibleTabs?: number;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  maxVisibleTabs = 6,
}) => {
  // Determine which tabs to show and which go into the dropdown
  const visibleTabs = categories.slice(0, maxVisibleTabs);
  const hiddenTabs = categories.slice(maxVisibleTabs);

  return (
    <div className="bg-gray-900 border-b border-gray-700 sticky top-0 z-40 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-2 justify-center">
          {/* Tabs Container with wrapping */}
          <div
            className="flex flex-wrap gap-2 justify-center w-full"
          >
            {visibleTabs.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-brand-yellow text-gray-800 shadow-lg scale-105'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* More Categories Dropdown - Only show if there are hidden tabs */}
          {hiddenTabs.length > 0 && (
            <div className="relative group flex-shrink-0">
              <button className="px-3 py-2 bg-brand-yellow hover:bg-yellow-500 text-gray-800 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-1 whitespace-nowrap">
                <span>More</span>
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-0 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                  {hiddenTabs.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => onCategoryChange(category.id)}
                      className={`w-full text-left px-4 py-3 transition-all duration-200 flex items-center gap-2 ${
                        activeCategory === category.id
                          ? 'bg-brand-yellow text-gray-800 font-semibold'
                          : 'text-gray-200 hover:bg-gray-700'
                      }`}
                    >
                      {activeCategory === category.id && (
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span>{category.category}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CategoryTabs;
