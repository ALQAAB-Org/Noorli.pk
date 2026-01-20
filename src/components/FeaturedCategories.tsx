import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';
import { Link } from 'react-router-dom';

const FeaturedCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by <span className="gradient-text">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections. Find exactly what you're looking for.
          </p>
          <div className="wave-divider w-24 mx-auto mt-6" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/category/${category.name.toLowerCase()}`}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/5] card-hover animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm mb-3">
                  {category.count}+ Products
                </p>
                <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
