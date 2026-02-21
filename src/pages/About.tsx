import { Users, Award, Heart, Zap, Target, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const About = () => {
  const stats = [
    { value: "10,000+", label: "Happy Customers" },
    { value: "500+", label: "Products" },
    { value: "50+", label: "Cities Served" },
    { value: "99%", label: "Satisfaction Rate" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make starts with our customers in mind. Your satisfaction is our top priority.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "We carefully curate products to ensure you receive only the best quality items.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across Pakistan. Your orders reach you on time, every time.",
    },
    {
      icon: Target,
      title: "Best Prices",
      description: "Competitive pricing without compromising on quality. Shop smarter with Noorli.",
    },
  ];

  const team = [
    { name: "Founder & CEO", role: "Visionary Leader" },
    { name: "Operations Head", role: "Logistics Expert" },
    { name: "Customer Success", role: "Support Champion" },
    { name: "Marketing Lead", role: "Growth Strategist" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Shop Smarter, Live Better</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Noorli.pk is Pakistan's trusted online shopping destination, bringing you quality products at amazing prices with fast nationwide delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="container mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Noorli.pk was born from a simple idea: make quality products accessible to everyone in Pakistan. We started with a vision to bridge the gap between premium products and everyday shoppers.
                </p>
                <p>
                  Today, we've grown into a trusted platform serving thousands of customers across 50+ cities. Our commitment to quality, affordability, and exceptional service has made us a preferred choice for online shopping.
                </p>
                <p>
                  Every product on Noorli.pk is carefully selected to ensure you get the best value for your money. From trending gadgets to everyday essentials, we bring you products that enhance your lifestyle.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Since 2023</h3>
                  <p className="text-muted-foreground">Serving Pakistan with Pride</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at Noorli.pk
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="container mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Team Behind Noorli
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated team working to bring you the best shopping experience
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="container">
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              To become Pakistan's most trusted online shopping destination by providing quality products, exceptional service, and an unmatched shopping experience that helps people shop smarter and live better.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
