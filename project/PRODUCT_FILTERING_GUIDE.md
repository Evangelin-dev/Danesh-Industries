# Product Category Filtering System - Documentation

## Overview

The Product Category Filtering System is a single-page filtering interface that allows users to browse products by category without page navigation. All products are displayed on one page with category-based filtering managed through React state.

## Components

### 1. **CategoryTabs Component** (`CategoryTabs.tsx`)
A tab-like navigation component that displays category buttons and a "More Categories" dropdown menu.

**Features:**
- Displays up to 6 category buttons (configurable via `maxVisibleTabs` prop)
- Overflow categories appear in a "More Categories" dropdown
- Scroll buttons (left/right) for navigating through tabs on larger screens
- Active category is highlighted with yellow color and scale animation
- Smooth scrolling behavior with keyboard accessibility
- Responsive design for mobile, tablet, and desktop

**Props:**
```typescript
interface CategoryTabsProps {
  categories: Array<{ id: string; category: string }>;
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  maxVisibleTabs?: number;  // Default: 6
}
```

### 2. **CategoryTitle Component** (`CategoryTitle.tsx`)
Displays the currently selected category name and introduction text.

**Features:**
- Shows category name in bold heading
- Displays category introduction text
- Includes an icon for visual appeal
- Fade-in animation when category changes
- Decorative accent line

**Props:**
```typescript
interface CategoryTitleProps {
  categoryName: string;
  categoryIntro?: string;
}
```

### 3. **ProductsPage Component** (Refactored `ProductsPage.tsx`)
Main component that manages category filtering and product display.

**Key Changes:**
- Uses `useState` to manage `activeCategory` state
- Initializes with the first product category by default
- No URL navigation - filtering happens locally
- Supports product detail view (maintains old routing for individual product details)
- Products are filtered based on selected category in real-time

**State Management:**
```typescript
const [activeCategory, setActiveCategory] = useState<string>(productData[0]?.id || '');
const selectedCategory = productData.find(cat => cat.id === activeCategory) || productData[0];
const filteredProducts = selectedCategory?.items || [];
```

## How It Works

### Flow Diagram:

```
ProductsPage (initializes with first category)
    ↓
1. User clicks category button/dropdown option
    ↓
2. onCategoryChange handler is triggered
    ↓
3. activeCategory state updates
    ↓
4. selectedCategory is recalculated
    ↓
5. filteredProducts updates based on new category
    ↓
6. Component re-renders with:
   - Updated CategoryTitle
   - Updated product grid
   - Active button highlighted in CategoryTabs
    ↓
7. Smooth transitions and animations play
```

## Features

### ✅ Implemented Features

1. **Single Page Display**
   - All products displayed on one page
   - No page navigation when changing categories
   - URL remains `/products`

2. **Category Tabs Navigation**
   - Horizontal tab-like button layout
   - First 6 categories shown as buttons
   - Remaining categories in dropdown
   - Scroll buttons for many categories (on desktop)

3. **Dynamic Product Filtering**
   - Products update instantly when category changes
   - Filtered by `categoryId` matching

4. **Active Category Indicator**
   - Selected category button highlighted in yellow
   - Scale animation on active button
   - Checkmark in dropdown for selected category

5. **Responsive Design**
   - Mobile: Stacked buttons with scrollable container
   - Tablet: 2-3 buttons visible, scroll or dropdown
   - Desktop: All buttons visible with scroll arrows

6. **Smooth Animations**
   - Fade-in effect when products update
   - Hover scale animation on product cards
   - Transition effects on button states
   - Smooth scrolling in tab container

7. **Better UX**
   - Category introduction displayed above products
   - Visual hierarchy with colored headings
   - Loading state handling
   - Empty state message if no products exist

### 🎨 Visual Features

- **Color Scheme:**
  - Active category: Brand yellow (FFD700)
  - Inactive categories: Gray
  - Hover state: Lighter shade
  - Text: White/Dark depending on background

- **Animations:**
  - `animate-fade-in`: Smooth fade and slide-up (0.5s)
  - `animate-fade-in-scale`: Fade with scale (0.4s)
  - `animate-slide-down`: Slide down effect
  - `animate-slide-up`: Slide up effect

## Data Structure

The system expects products in the following format:

```typescript
const productData = [
  {
    id: 'flanges',
    category: 'Flanges',
    introduction: 'Description of flanges...',
    items: [
      {
        name: 'Slip-On Flanges',
        image: '/image.png',
        keyFeatures: ['Feature 1', 'Feature 2'],
        specifications?: { /* ... */ },
        // ... other properties
      },
      // ... more products
    ],
    // ... other category properties
  },
  // ... more categories
];
```

## Usage

### Basic Setup

```typescript
import ProductsPage from './components/ProductsPage';
import CategoryTabs from './components/CategoryTabs';
import CategoryTitle from './components/CategoryTitle';

// ProductsPage handles everything automatically
const App = () => {
  return <ProductsPage />;
};
```

### Customizing Max Visible Tabs

```typescript
// In ProductsPage component
<CategoryTabs
  categories={productData}
  activeCategory={activeCategory}
  onCategoryChange={handleCategoryChange}
  maxVisibleTabs={8}  // Show 8 tabs instead of 6
/>
```

## Browser Compatibility

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance Optimizations

1. **Memoization:** Consider using `useMemo` for large product lists
2. **Lazy Loading:** Images are lazy-loaded via browser defaults
3. **Smooth Scrolling:** CSS `scroll-behavior: smooth` for tabs
4. **Minimal Re-renders:** Only necessary components re-render on category change

## Accessibility Features

- Semantic HTML structure
- ARIA labels on buttons
- Keyboard navigation support
- Clear active state indicators
- High contrast colors

## Customization Options

### Modify Tab Count
```typescript
<CategoryTabs
  maxVisibleTabs={8}  // Change visible tab count
/>
```

### Change Animation Duration
Edit `styles/globals.css`:
```css
@keyframes fadeIn {
  animation: fadeIn 0.3s ease-out;  /* Change 0.5s to desired duration */
}
```

### Customize Colors
Update the className conditions in:
- `CategoryTabs.tsx` - Button styles
- `CategoryTitle.tsx` - Section colors
- `ProductsPage.tsx` - Grid styling

## Troubleshooting

### Categories not appearing
- Verify `productData` array is not empty
- Check that `maxVisibleTabs` is less than total categories

### Products not updating
- Confirm `activeCategory` matches a category `id`
- Check that selected category has `items` array
- Verify `ProductCard` component accepts filtered data

### Animations not showing
- Ensure `styles/globals.css` is imported in `App.tsx`
- Check browser DevTools for CSS errors
- Verify Tailwind CSS is properly configured

## Future Enhancements

- [ ] Add category search/filter functionality
- [ ] Persist selected category in localStorage
- [ ] Add URL hash (#category-id) for shareable links
- [ ] Product count badge on category buttons
- [ ] Category icons/emojis
- [ ] Keyboard shortcuts (arrow keys to navigate)
- [ ] Animation preference (reduced motion support)
- [ ] Category favorites/bookmarks

## Files Modified/Created

### Created:
1. `components/CategoryTabs.tsx` - Navigation component
2. `components/CategoryTitle.tsx` - Title display component
3. `styles/globals.css` - Global animations

### Modified:
1. `components/ProductsPage.tsx` - Added state-based filtering
2. `App.tsx` - Added CSS import

## API/Integration Notes

If connecting to a backend API:

```typescript
// Example API integration
useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch(`/api/products/${activeCategory}`);
    const data = await response.json();
    setFilteredProducts(data.items);
  };
  
  fetchProducts();
}, [activeCategory]);
```

---

**Version:** 1.0.0  
**Last Updated:** 2026-03-09  
**Maintained by:** Development Team
