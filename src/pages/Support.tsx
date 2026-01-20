import { useState } from "react";
import { HelpCircle, Package, CreditCard, Truck, RefreshCcw, Shield, ChevronDown, Search, Phone, Mail, User, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const supportCategories = [
    {
      icon: Package,
      title: "Orders",
      description: "Track, cancel, or modify orders",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Truck,
      title: "Shipping",
      description: "Delivery times and tracking",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: RefreshCcw,
      title: "Returns",
      description: "Return policy and process",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: CreditCard,
      title: "Payments",
      description: "Payment methods and issues",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: User,
      title: "Account",
      description: "Profile and settings",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: HelpCircle,
      title: "General",
      description: "Other questions",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 3-5 business days for major cities (Lahore, Karachi, Islamabad) and 5-7 business days for other areas in Pakistan.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Cash on Delivery (COD), JazzCash, EasyPaisa, NayaPay, SadaPay, and Bank Transfer. All online payments are secure and encrypted.",
    },
    {
      question: "Is there a return policy?",
      answer: "We offer a 7-day return policy on all products. Items must be unused, in original packaging with tags attached. Contact our support team to initiate a return.",
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes! We offer FREE delivery on orders above Rs. 3,000. For orders below Rs. 3,000, a flat delivery fee of Rs. 200 applies across Pakistan.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via SMS and email. You can use this number to track your order on our website or contact our support team.",
    },
    {
      question: "Are the products genuine?",
      answer: "Absolutely! We guarantee 100% genuine and quality products. Every item is carefully inspected before shipping to ensure you receive only the best.",
    },
    {
      question: "Can I cancel my order?",
      answer: "You can cancel your order within 2 hours of placing it by contacting our support team via WhatsApp or phone. Once the order is dispatched, cancellation is not possible.",
    },
    {
      question: "Do you deliver nationwide?",
      answer: "Yes, we deliver to all cities and towns across Pakistan. Delivery times may vary based on location.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="w-full h-full opacity-10"
              style={{
                background: 'var(--gradient-rainbow)',
              }}
            />
          </div>
          <div className="container relative">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                How can we <span className="gradient-text">help</span>?
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Search our knowledge base or browse categories below
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-card border-border rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="container mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {supportCategories.map((category, index) => (
              <button
                key={index}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{category.title}</h3>
                <p className="text-xs text-muted-foreground">{category.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5">
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed pt-3">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 bg-card rounded-2xl border border-border">
                <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                <p className="text-sm text-muted-foreground mt-2">Try a different search term</p>
              </div>
            )}
          </div>
        </section>

        {/* Still Need Help */}
        <section className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">
              Still need <span className="gradient-text">help</span>?
            </h2>
            <p className="text-muted-foreground">Our support team is always here for you</p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="https://wa.me/923261182021"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-green-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <WhatsAppIcon />
              </div>
              <span className="font-semibold text-foreground mb-1">WhatsApp</span>
              <span className="text-sm text-muted-foreground">Chat with us</span>
            </a>
            
            <a
              href="tel:+923261182021"
              className="group flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-foreground mb-1">Call Us</span>
              <span className="text-sm text-muted-foreground">+92 326 1182021</span>
            </a>
            
            <a
              href="mailto:support@noorli.pk"
              className="group flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-foreground mb-1">Email</span>
              <span className="text-sm text-muted-foreground">support@noorli.pk</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Support;
