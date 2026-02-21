import { Product } from '@/context/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Earbuds",
    price: 4999,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.8,
    reviews: 256,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 12999,
    originalPrice: 18999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.9,
    reviews: 189,
    badge: "New Arrival"
  },
  {
    id: 3,
    name: "Minimalist Backpack",
    price: 3499,
    originalPrice: 4999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Fashion",
    rating: 4.7,
    reviews: 324
  },
  {
    id: 4,
    name: "Premium Skincare Set",
    price: 2999,
    originalPrice: 4499,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    category: "Beauty",
    rating: 4.6,
    reviews: 412,
    badge: "Trending"
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    price: 2499,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 178
  },
  {
    id: 6,
    name: "Designer Sunglasses",
    price: 1999,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    category: "Fashion",
    rating: 4.4,
    reviews: 267
  },
  {
    id: 7,
    name: "Aromatherapy Diffuser",
    price: 1799,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 8,
    name: "Fitness Tracker Band",
    price: 3999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.6,
    reviews: 298,
    badge: "Hot Deal"
  }
];

export const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
    count: 150
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
    count: 320
  },
  {
    id: 3,
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
    count: 180
  },
  {
    id: 4,
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop",
    count: 210
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    location: "Karachi",
    rating: 5,
    comment: "Amazing shopping experience! Fast delivery and genuine products. Noorli.pk is now my go-to online store.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Fatima Zahra",
    location: "Lahore",
    rating: 5,
    comment: "The quality of products exceeded my expectations. Great customer service and secure payment options!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Muhammad Ali",
    location: "Islamabad",
    rating: 5,
    comment: "Best prices in Pakistan! I've ordered multiple times and never been disappointed. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];
