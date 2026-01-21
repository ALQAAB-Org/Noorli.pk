import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ShoppingBag, CreditCard, Truck, CheckCircle2, Phone, MapPin, User, Mail } from 'lucide-react';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [orderDetails, setOrderDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');

  const shippingFee = totalPrice >= 3000 ? 0 : 250;
  const grandTotal = totalPrice + shippingFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOrderDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmitOrder = async () => {
    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Prepare WhatsApp message with order details
    const orderItemsText = items.map(item => 
      `- ${item.name} x${item.quantity} = Rs. ${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');

    const message = `*New Order from Noorli.pk*\n\n` +
      `*Customer Details:*\n` +
      `Name: ${orderDetails.fullName}\n` +
      `Email: ${orderDetails.email || 'Not provided'}\n` +
      `Phone: ${orderDetails.phone}\n` +
      `Address: ${orderDetails.address}, ${orderDetails.city}${orderDetails.postalCode ? ', ' + orderDetails.postalCode : ''}\n` +
      `Notes: ${orderDetails.notes || 'None'}\n\n` +
      `*Payment Method:* ${paymentMethod}\n\n` +
      `*Order Items:*\n${orderItemsText}\n\n` +
      `*Subtotal:* Rs. ${totalPrice.toLocaleString()}\n` +
      `*Shipping:* Rs. ${shippingFee}\n` +
      `*Total:* Rs. ${grandTotal.toLocaleString()}`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/923261182021?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Order Placed Successfully! 🎉",
      description: "Thank you for your order. You will receive a confirmation shortly.",
    });
    
    clearCart();
    setIsProcessing(false);
    setStep(3);
  };

  const isStep1Valid = orderDetails.fullName && orderDetails.phone && orderDetails.address && orderDetails.city;
  const isStep2Valid = paymentMethod;

  if (items.length === 0 && step !== 3) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="h-20 w-20 text-muted-foreground/30 mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Add some products to checkout</p>
            <Link to="/shop">
              <Button className="gradient-button rounded-full px-8">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Continue Shopping</span>
        </Link>

        <h1 className="text-3xl font-bold mb-8">
          <span className="gradient-text">Checkout</span>
        </h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {[
            { num: 1, label: 'Shipping', icon: Truck },
            { num: 2, label: 'Payment', icon: CreditCard },
            { num: 3, label: 'Complete', icon: CheckCircle2 },
          ].map((s, idx) => (
            <div key={s.num} className="flex items-center">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                step >= s.num 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-muted-foreground'
              }`}>
                <s.icon className="h-4 w-4" />
                <span className="hidden sm:inline font-medium">{s.label}</span>
              </div>
              {idx < 2 && (
                <div className={`w-8 md:w-16 h-1 mx-2 rounded ${
                  step > s.num ? 'bg-primary' : 'bg-secondary'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping Details */}
            {step === 1 && (
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border animate-fade-in">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  Shipping Information
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={orderDetails.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email (Optional)
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={orderDetails.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={orderDetails.phone}
                      onChange={handleInputChange}
                      placeholder="+92 3XX XXXXXXX"
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      City *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={orderDetails.city}
                      onChange={handleInputChange}
                      placeholder="e.g., Karachi"
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="address">Complete Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={orderDetails.address}
                      onChange={handleInputChange}
                      placeholder="House/Flat No, Street, Area, Landmark"
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code (Optional)</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={orderDetails.postalCode}
                      onChange={handleInputChange}
                      placeholder="e.g., 75500"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={orderDetails.notes}
                      onChange={handleInputChange}
                      placeholder="Any special instructions for delivery..."
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
                
                <Button
                  onClick={() => setStep(2)}
                  disabled={!isStep1Valid}
                  className="w-full gradient-button rounded-full h-12 mt-6"
                >
                  Continue to Payment
                </Button>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border animate-fade-in">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Method
                </h2>
                
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <div className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Cash on Delivery (COD)</div>
                      <div className="text-sm text-muted-foreground">Pay when you receive your order</div>
                    </Label>
                    <span className="text-2xl">💵</span>
                  </div>
                  
                  <div className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'jazzcash' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="jazzcash" id="jazzcash" />
                    <Label htmlFor="jazzcash" className="flex-1 cursor-pointer">
                      <div className="font-semibold">JazzCash</div>
                      <div className="text-sm text-muted-foreground">Pay via JazzCash mobile wallet</div>
                    </Label>
                    <span className="text-2xl">📱</span>
                  </div>
                  
                  <div className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'easypaisa' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="easypaisa" id="easypaisa" />
                    <Label htmlFor="easypaisa" className="flex-1 cursor-pointer">
                      <div className="font-semibold">EasyPaisa</div>
                      <div className="text-sm text-muted-foreground">Pay via EasyPaisa mobile wallet</div>
                    </Label>
                    <span className="text-2xl">💳</span>
                  </div>
                  
                  <div className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'nayapay' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="nayapay" id="nayapay" />
                    <Label htmlFor="nayapay" className="flex-1 cursor-pointer">
                      <div className="font-semibold">NayaPay</div>
                      <div className="text-sm text-muted-foreground">Pay via NayaPay mobile wallet</div>
                    </Label>
                    <span className="text-2xl">📱</span>
                  </div>
                  
                  <div className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'sadapay' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="sadapay" id="sadapay" />
                    <Label htmlFor="sadapay" className="flex-1 cursor-pointer">
                      <div className="font-semibold">SadaPay</div>
                      <div className="text-sm text-muted-foreground">Pay via SadaPay mobile wallet</div>
                    </Label>
                    <span className="text-2xl">💰</span>
                  </div>
                  
                  <div className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'bank' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Bank Transfer</div>
                      <div className="text-sm text-muted-foreground">Direct bank account transfer</div>
                    </Label>
                    <span className="text-2xl">🏦</span>
                  </div>
                </RadioGroup>

                {/* Payment Instructions for non-COD */}
                {paymentMethod !== 'cod' && (
                  <div className="mt-6 p-4 rounded-xl bg-secondary">
                    <h3 className="font-semibold mb-2">Payment Instructions</h3>
                    {paymentMethod === 'jazzcash' && (
                      <p className="text-sm text-muted-foreground">
                        Send payment to JazzCash: <span className="font-mono font-bold text-foreground">0326-1182021</span>
                        <br />After payment, share screenshot on WhatsApp for order confirmation.
                      </p>
                    )}
                    {paymentMethod === 'easypaisa' && (
                      <p className="text-sm text-muted-foreground">
                        Send payment to EasyPaisa: <span className="font-mono font-bold text-foreground">0326-1182021</span>
                        <br />After payment, share screenshot on WhatsApp for order confirmation.
                      </p>
                    )}
                    {paymentMethod === 'nayapay' && (
                      <p className="text-sm text-muted-foreground">
                        Send payment to NayaPay: <span className="font-mono font-bold text-foreground">0326-1182021</span>
                        <br />After payment, share screenshot on WhatsApp for order confirmation.
                      </p>
                    )}
                    {paymentMethod === 'sadapay' && (
                      <p className="text-sm text-muted-foreground">
                        Send payment to SadaPay: <span className="font-mono font-bold text-foreground">0326-1182021</span>
                        <br />After payment, share screenshot on WhatsApp for order confirmation.
                      </p>
                    )}
                    {paymentMethod === 'bank' && (
                      <p className="text-sm text-muted-foreground">
                        Bank details will be shared on WhatsApp after order placement.
                      </p>
                    )}
                  </div>
                )}
                
                <div className="flex gap-4 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1 h-12 rounded-full"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmitOrder}
                    disabled={!isStep2Valid || isProcessing}
                    className="flex-1 gradient-button rounded-full h-12"
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Order Complete */}
            {step === 3 && (
              <div className="bg-card rounded-2xl p-8 md:p-12 border border-border animate-fade-in text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Order Placed Successfully! 🎉</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Thank you for shopping with Noorli.pk! We will contact you shortly to confirm your order.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/shop">
                    <Button variant="outline" className="rounded-full px-8">
                      Continue Shopping
                    </Button>
                  </Link>
                  <a href="https://wa.me/923261182021" target="_blank" rel="noopener noreferrer">
                    <Button className="gradient-button rounded-full px-8">
                      Contact on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          {step !== 3 && (
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 border border-border sticky top-4">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                {/* Items */}
                <div className="space-y-4 max-h-60 overflow-auto mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm line-clamp-2">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold text-primary">
                          Rs. {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>Rs. {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={shippingFee === 0 ? 'text-green-600 font-medium' : ''}>
                      {shippingFee === 0 ? 'FREE' : `Rs. ${shippingFee}`}
                    </span>
                  </div>
                  {shippingFee > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Free shipping on orders over Rs. 3,000
                    </p>
                  )}
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">Rs. {grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>🔒</span>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>🚚</span>
                    <span>Fast Delivery Across Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>↩️</span>
                    <span>Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;