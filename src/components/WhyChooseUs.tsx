import { Truck, Shield, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Free delivery on orders over Rs. 3,000. Fast shipping across Pakistan.',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Your payment information is safe with our encrypted checkout.',
  },
  {
    icon: Award,
    title: 'Quality Products',
    description: 'We source only the best products from trusted suppliers.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer support team is always here to help you.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] opacity-10">
          <div
            className="w-full h-full rounded-full blur-3xl"
            style={{
              background: 'var(--gradient-rainbow)',
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">Noorli.pk</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience in Pakistan.
          </p>
          <div className="wave-divider w-24 mx-auto mt-6" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-button mb-4">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
