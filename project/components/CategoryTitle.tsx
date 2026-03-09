import React from 'react';

interface CategoryTitleProps {
  categoryName: string;
  categoryIntro?: string;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({ categoryName, categoryIntro }) => {
  return (
    <div className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 animate-fade-in">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-yellow rounded-lg flex-shrink-0">
          <svg
            className="w-8 h-8 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {categoryName}
          </h2>
          {categoryIntro && (
            <p className="text-gray-100 text-base md:text-lg leading-relaxed">
              {categoryIntro}
            </p>
          )}
        </div>
      </div>

      {/* Decorative line */}
      <div className="mt-6 w-16 h-1 bg-brand-yellow rounded-full"></div>
    </div>
  );
};

export default CategoryTitle;
