import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, Truck, Shield, RotateCcw, Minus, Plus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const product = products.find(p => p.id === Number(id)) || products[0];
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setTimeout(() => setIsAdding(false), 500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const trustBadges = [
    { icon: Truck, text: 'Free Delivery over Rs. 3,000' },
    { icon: Shield, text: 'Secure Payment' },
    { icon: RotateCcw, text: '7-Day Easy Returns' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-4 py-2 text-sm font-semibold rounded-full gradient-button">
                      {product.badge}
                    </span>
                  )}
                  {discount > 0 && (
                    <span className="absolute top-4 right-4 px-4 py-2 text-sm font-semibold rounded-full bg-destructive text-destructive-foreground">
                      -{discount}%
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                    {product.category}
                  </p>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold gradient-text">
                    Rs. {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      Rs. {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  Experience premium quality with our {product.name.toLowerCase()}. Crafted with attention to detail and designed to exceed your expectations. Perfect for everyday use.
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center gap-2 p-1 bg-secondary rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 rounded-md hover:bg-background transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 rounded-md hover:bg-background transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="flex-1 gradient-button rounded-full h-14 text-lg"
                    onClick={handleAddToCart}
                    disabled={isAdding}
                  >
                    {isAdding ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                        Adding...
                      </span>
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 w-14 rounded-full"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        isWishlisted ? 'fill-destructive text-destructive' : ''
                      }`}
                    />
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 w-14 rounded-full">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {trustBadges.map((badge) => (
                    <div key={badge.text} className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary mb-2">
                        <badge.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">{badge.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="mt-16 pt-16 border-t border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  You May Also <span className="gradient-text">Like</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {relatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
