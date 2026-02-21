import { useState } from 'react';
import { SlidersHorizontal, Grid, List, Package, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductCard from '@/components/ProductCard';
import CategorySidebar from '@/components/CategorySidebar';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Shop = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter products by category
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="w-full h-full opacity-10"
              style={{
                background: 'var(--gradient-rainbow)',
              }}
            />
          </div>
          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 blur-2xl animate-float" />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl animate-float animation-delay-200" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Collection</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
              Shop <span className="gradient-text">All Products</span>
            </h1>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover our complete collection of trending products at unbeatable prices.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar - Categories */}
              <aside className="lg:w-64 flex-shrink-0">
                <CategorySidebar 
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />

                {/* Quick Stats */}
                <div className="mt-6 p-5 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Quick Stats</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Products</span>
                      <span className="font-medium text-foreground">{products.length}+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Categories</span>
                      <span className="font-medium text-foreground">4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Avg Rating</span>
                      <span className="font-medium text-foreground">4.6★</span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Products Area */}
              <div className="flex-1">
                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-4 bg-card rounded-2xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {sortedProducts.length} Products
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {selectedCategory ? `in ${selectedCategory}` : 'All Categories'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* View Toggle */}
                    <div className="flex items-center gap-1 p-1 bg-muted rounded-xl">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          viewMode === 'grid' 
                            ? 'bg-background shadow-sm text-primary' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <Grid className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          viewMode === 'list' 
                            ? 'bg-background shadow-sm text-primary' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <List className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Sort */}
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[180px] rounded-xl">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Best Rating</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Filter Button */}
                    <Button variant="outline" className="gap-2 rounded-xl">
                      <SlidersHorizontal className="h-4 w-4" />
                      Filters
                    </Button>
                  </div>
                </div>

                {/* Products Grid */}
                <div className={`grid gap-4 md:gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1 md:grid-cols-2'
                }`}>
                  {sortedProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>

                {/* Empty State */}
                {sortedProducts.length === 0 && (
                  <div className="text-center py-20">
                    <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
                    <p className="text-muted-foreground">Try selecting a different category</p>
                  </div>
                )}

                {/* Load More */}
                {sortedProducts.length > 0 && (
                  <div className="text-center mt-12">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="rounded-full px-8 border-2 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                    >
                      Load More Products
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;
