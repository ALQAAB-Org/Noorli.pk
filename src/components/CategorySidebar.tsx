import { useState } from 'react';
import { ChevronDown, ChevronRight, Package } from 'lucide-react';
import { products } from '@/data/products';

interface CategorySidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategorySidebar = ({ selectedCategory, onSelectCategory }: CategorySidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Get unique categories with counts
  const categories = products.reduce((acc, product) => {
    const existing = acc.find(c => c.name === product.category);
    if (existing) {
      existing.count++;
    } else {
      acc.push({ name: product.category, count: 1 });
    }
    return acc;
  }, [] as { name: string; count: number }[]);

  const totalProducts = products.length;

  return (
    <div className="bg-card rounded-2xl border border-border p-5 sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Package className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-semibold text-foreground">Categories</h3>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 hover:bg-muted rounded transition-colors"
        >
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-1">
          {/* All Products */}
          <button
            onClick={() => onSelectCategory(null)}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary'
                : 'hover:bg-muted text-foreground'
            }`}
          >
            <span className="font-medium">All Products</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              selectedCategory === null 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground'
            }`}>
              {totalProducts}
            </span>
          </button>

          {/* Category List */}
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onSelectCategory(category.name)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary'
                  : 'hover:bg-muted text-foreground'
              }`}
            >
              <span className="font-medium">{category.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                selectedCategory === category.name 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Total Products Info */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Total Items</span>
          <span className="font-semibold gradient-text">{totalProducts}</span>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
