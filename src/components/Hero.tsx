import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30">
          <div
            className="w-full h-full rounded-full blur-3xl animate-pulse-soft"
            style={{
              background: 'linear-gradient(135deg, hsl(270, 70%, 50%) 0%, hsl(320, 80%, 55%) 50%, hsl(210, 90%, 55%) 100%)',
            }}
          />
        </div>
        {/* Secondary blob */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20">
          <div
            className="w-full h-full rounded-full blur-3xl animate-float"
            style={{
              background: 'linear-gradient(135deg, hsl(180, 85%, 45%) 0%, hsl(145, 70%, 45%) 50%, hsl(45, 95%, 55%) 100%)',
            }}
          />
        </div>
        {/* Wave pattern */}
        <svg
          className="absolute bottom-0 left-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(270, 70%, 50%)" stopOpacity="0.1" />
              <stop offset="25%" stopColor="hsl(320, 80%, 55%)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(210, 90%, 55%)" stopOpacity="0.1" />
              <stop offset="75%" stopColor="hsl(145, 70%, 45%)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(45, 95%, 55%)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6 animate-slide-up">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Pakistan's Trusted E-commerce Partner
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up animation-delay-100">
              Shop Smarter,
              <br />
              <span className="gradient-text">Live Better</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-slide-up animation-delay-200">
              Discover trending products at unbeatable prices. Quality you can trust, delivered to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-300">
              <Link to="/shop">
                <Button size="lg" className="gradient-button px-8 py-6 text-lg rounded-full">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-full border-2 hover:bg-secondary hover:text-secondary-foreground"
                >
                  Browse Categories
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border animate-slide-up animation-delay-400">
              <div>
                <p className="text-2xl md:text-3xl font-bold gradient-text">10K+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold gradient-text">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold gradient-text">99%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                alt="Shopping Experience"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-background rounded-2xl p-4 shadow-xl animate-pulse-soft">
                <p className="text-sm font-medium text-muted-foreground">Free Delivery</p>
                <p className="text-xl font-bold gradient-text">Rs. 3000+</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background rounded-2xl p-4 shadow-xl">
                <p className="text-sm font-medium text-muted-foreground">Up to</p>
                <p className="text-xl font-bold gradient-text">70% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
