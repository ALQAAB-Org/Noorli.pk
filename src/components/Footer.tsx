import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Heart, CreditCard, Wallet, Smartphone, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientDivider from './GradientDivider';

// Custom icons for platforms not in lucide
const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.85-.704 2.043-1.135 3.59-1.295.937-.097 1.78-.088 2.558-.049-.146-.78-.494-1.355-.95-1.727-.588-.48-1.453-.726-2.572-.734h-.015c-.94.007-1.7.238-2.263.685-.502.399-.833.96-.984 1.666l-2.004-.477c.245-1.154.79-2.088 1.62-2.778.96-.796 2.2-1.2 3.688-1.213h.02c1.64.016 2.958.436 3.916 1.247.926.784 1.503 1.9 1.715 3.32.776.098 1.5.26 2.168.498 1.418.505 2.515 1.33 3.17 2.388.727 1.176.856 2.57.538 3.945-.34 1.47-1.144 2.807-2.392 3.977-1.908 1.79-4.373 2.678-7.538 2.713zm1.995-9.018c-.69-.042-1.357-.046-2.055.003-1.035.073-1.82.346-2.337.813-.472.426-.694.988-.661 1.669.038.712.388 1.266.984 1.556.571.279 1.257.378 1.89.345 1.048-.054 1.89-.47 2.506-1.24.475-.591.81-1.4.973-2.405-.435-.168-.86-.331-1.3-.74z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Products', href: '/shop' },
      { name: 'New Arrivals', href: '/shop' },
      { name: 'Best Sellers', href: '/shop' },
      { name: 'Sale', href: '/shop' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQs', href: '/support' },
      { name: 'Support Center', href: '/support' },
      { name: 'Returns', href: '/support' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/about' },
      { name: 'Careers', href: '/about' },
      { name: 'Blog', href: '/about' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/support' },
      { name: 'Terms of Service', href: '/support' },
      { name: 'Refund Policy', href: '/support' },
      { name: 'Shipping Policy', href: '/support' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/NOORLIpk/61584970576695/', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/noorli.pk', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/noorli_pk', label: 'Twitter/X' },
    { icon: Youtube, href: 'https://www.youtube.com/@noorli_pk', label: 'YouTube' },
    { icon: ThreadsIcon, href: 'https://www.threads.com/@noorli.pk', label: 'Threads', isCustom: true },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@noorli.pk', label: 'TikTok', isCustom: true },
    { icon: WhatsAppIcon, href: 'https://wa.me/923261182021', label: 'WhatsApp', isCustom: true },
  ];

  const paymentMethods = [
    { name: 'Cash on Delivery', icon: DollarSign, color: 'from-orange-500 to-orange-600' },
    { name: 'JazzCash', icon: Wallet, color: 'from-red-500 to-red-600' },
    { name: 'EasyPaisa', icon: Smartphone, color: 'from-green-500 to-green-600' },
    { name: 'NayaPay', icon: CreditCard, color: 'from-purple-500 to-purple-600' },
    { name: 'SadaPay', icon: CreditCard, color: 'from-blue-500 to-blue-600' },
  ];

  return (
    <>
      {/* Gradient Divider before Footer */}
      <GradientDivider />
      
      <footer className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-muted dark:from-card dark:via-card dark:to-background">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-accent/5 to-primary/5 blur-3xl" />
        </div>

        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12 md:py-16 relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <span className="text-3xl font-bold">
                  <span className="gradient-text">Noorli</span>
                  <span className="text-foreground">.pk</span>
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-xs leading-relaxed">
                Your trusted e-commerce partner in Pakistan. Shop smarter, live better with quality products at unbeatable prices.
              </p>
              
              {/* Contact Info with Icons */}
              <div className="space-y-3">
                <a href="tel:+923261182021" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span>+92 326 1182021</span>
                </a>
                <a href="https://wa.me/923261182021" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <div className="text-green-500"><WhatsAppIcon /></div>
                  </div>
                  <span>WhatsApp</span>
                </a>
                <a href="mailto:support@noorli.pk" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-4 w-4 text-accent" />
                  </div>
                  <span>support@noorli.pk</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-orange-500" />
                  </div>
                  <span>Karachi, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                <div className="w-1 h-4 rounded-full bg-gradient-to-b from-primary to-accent" />
                Shop
              </h3>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                <div className="w-1 h-4 rounded-full bg-gradient-to-b from-accent to-primary" />
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                <div className="w-1 h-4 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500" />
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                <div className="w-1 h-4 rounded-full bg-gradient-to-b from-green-500 to-emerald-500" />
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="border-t border-border/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                <span>We Accept:</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className={`w-6 h-6 rounded bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                      <method.icon className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-medium text-sm text-foreground">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm text-center md:text-left flex items-center gap-1">
                © {currentYear} Noorli.pk. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Pakistan
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    {social.isCustom ? <social.icon /> : <social.icon className="h-4 w-4" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
