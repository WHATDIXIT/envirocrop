import React from 'react';
import Navbar from '@/components/layouts/navbar';
import { FuturisticButton } from '@/components/ui/futuristic-button';
import { Card } from '@/components/ui/card';
import { 
  Gift, 
  RefreshCw, 
  ShoppingCart, 
  Star,
  MapPin,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Award,
  Heart
} from 'lucide-react';

const marketplaceItems = [
  {
    id: 1,
    type: 'rain',
    title: '6-Hour Gentle Rain',
    location: 'Northern California',
    seller: 'FarmCo Valley',
    rating: 4.9,
    originalPrice: 400,
    price: 280,
    timeRemaining: '2 days',
    description: 'Perfect for crop irrigation, unused due to natural rainfall',
    badges: ['Verified Seller', 'Premium Quality']
  },
  {
    id: 2,
    type: 'sunshine',
    title: 'Perfect Beach Day Package',
    location: 'Miami Beach, FL',
    seller: 'SunnyDays Resort',
    rating: 5.0,
    originalPrice: 600,
    price: 420,
    timeRemaining: '5 hours',
    description: '8 hours of clear skies, gentle breeze - event cancelled',
    badges: ['Instant Transfer', 'Weather Guaranteed']
  },
  {
    id: 3,
    type: 'snow',
    title: 'Christmas Snow Experience',
    location: 'Colorado Mountains',
    seller: 'Alpine Adventures',
    rating: 4.8,
    originalPrice: 800,
    price: 560,
    timeRemaining: '1 week',
    description: 'Light snowfall for 12 hours, creating magical winter atmosphere',
    badges: ['Holiday Special', 'Gift-Ready']
  }
];

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-hero">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-glow mb-4">Climate Marketplace</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Because happiness grows when shared — even the sky can be gifted. 
              Trade, gift, or resell unused weather credits with the community.
            </p>
          </div>

          {/* Stats & Actions */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="glass p-6 text-center hover-glow">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary text-glow">1,247</div>
              <p className="text-sm text-muted-foreground">Active Listings</p>
            </Card>

            <Card className="glass p-6 text-center hover-glow">
              <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary text-glow-purple">98.5%</div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </Card>

            <Card className="glass p-6 text-center hover-glow">
              <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-accent text-glow-green">$2.4M</div>
              <p className="text-sm text-muted-foreground">Value Traded</p>
            </Card>

            <Card className="glass p-6 text-center hover-glow">
              <User className="w-8 h-8 text-warning mx-auto mb-3" />
              <div className="text-2xl font-bold text-warning">15,600</div>
              <p className="text-sm text-muted-foreground">Traders</p>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <FuturisticButton variant="hero" size="lg">
              <ShoppingCart className="w-5 h-5" />
              Buy Weather Credits
            </FuturisticButton>
            <FuturisticButton variant="secondary" size="lg">
              <RefreshCw className="w-5 h-5" />
              Trade Credits
            </FuturisticButton>
            <FuturisticButton variant="accent" size="lg">
              <Gift className="w-5 h-5" />
              Gift Weather
            </FuturisticButton>
          </div>

          {/* Marketplace Listings */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-glow">Featured Listings</h2>
              <FuturisticButton variant="ghost">
                View All Listings
                <ArrowRight className="w-4 h-4" />
              </FuturisticButton>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {marketplaceItems.map((item) => (
                <Card key={item.id} className="glass p-6 hover-glow transition-all">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">${item.price}</div>
                      <div className="text-xs text-muted-foreground line-through">
                        ${item.originalPrice}
                      </div>
                    </div>
                  </div>

                  {/* Seller Info */}
                  <div className="flex items-center gap-3 mb-4 p-3 bg-background/30 rounded-lg">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.seller}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-warning fill-current" />
                        <span className="text-xs text-muted-foreground">{item.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {item.timeRemaining}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.badges.map((badge, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <FuturisticButton variant="primary" className="flex-1">
                      Purchase
                    </FuturisticButton>
                    <FuturisticButton variant="ghost" size="icon">
                      <Heart className="w-4 h-4" />
                    </FuturisticButton>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Trading Features */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-glow mb-8 text-center">
              How Trading Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">List & Browse</h3>
                <p className="text-sm text-muted-foreground">
                  List your unused weather credits or browse available offerings from verified sellers worldwide.
                </p>
              </Card>

              <Card className="glass p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <RefreshCw className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-3">Safe Trading</h3>
                <p className="text-sm text-muted-foreground">
                  All trades are secured with smart contracts and our guarantee system protects every transaction.
                </p>
              </Card>

              <Card className="glass p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-3">Gift & Share</h3>
                <p className="text-sm text-muted-foreground">
                  Send weather as gifts to loved ones or share credits with your community for special events.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;