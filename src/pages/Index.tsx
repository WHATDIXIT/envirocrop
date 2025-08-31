import React from 'react';
import { Link } from 'react-router-dom';
import { FuturisticButton } from '@/components/ui/futuristic-button';
import AnimatedGlobe from '@/components/ui/animated-globe';
import Navbar from '@/components/layouts/navbar';
import { 
  CloudRain, 
  Sun, 
  Navigation, 
  Zap, 
  Globe, 
  Sparkles,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-hero cyber-grid">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-glow leading-tight">
                  The Sky,
                  <br />
                  <span className="bg-cyber bg-clip-text text-transparent">
                    Made Yours
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Control weather patterns, create perfect climates, and reshape Earth's atmosphere 
                  with precision technology from the future.
                </p>
              </div>
              
              {/* Hero Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/order-weather">
                  <FuturisticButton variant="hero" size="xl" className="w-full sm:w-auto group">
                    Order Weather
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </FuturisticButton>
                </Link>
                <Link to="/vacation-hologram">
                  <FuturisticButton variant="glass" size="xl" className="w-full sm:w-auto">
                    Vacation Hologram
                    <Sparkles className="w-5 h-5" />
                  </FuturisticButton>
                </Link>
                <Link to="/live-map">
                  <FuturisticButton variant="accent" size="xl" className="w-full sm:w-auto">
                    Live Map
                    <Globe className="w-5 h-5" />
                  </FuturisticButton>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary text-glow">2.4M+</div>
                  <div className="text-sm text-muted-foreground">Weather Orders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary text-glow-purple">98.7%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent text-glow-green">195</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>

            {/* Right Globe */}
            <div className="relative h-[500px] animate-float">
              <div className="absolute inset-0 rounded-full glow-strong">
                <AnimatedGlobe />
              </div>
              {/* Floating Weather Icons */}
              <div className="absolute top-10 left-10 animate-pulse-glow">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                  <CloudRain className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="absolute top-20 right-8 animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-warning" />
                </div>
              </div>
              <div className="absolute bottom-16 left-16 animate-pulse-glow" style={{ animationDelay: '2s' }}>
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-glow mb-4">Command The Elements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From precision rain for crops to perfect vacation skies, control weather with surgical precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/order-weather" className="group">
              <div className="glass p-8 rounded-xl hover-glow transition-all h-full">
                <CloudRain className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Precision Weather</h3>
                <p className="text-muted-foreground mb-4">
                  Choose your mood… let the weather follow your heart.
                </p>
                <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                  Order Now <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link to="/vacation-hologram" className="group">
              <div className="glass p-8 rounded-xl hover-glow transition-all h-full">
                <Sparkles className="w-12 h-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Hologram Travel</h3>
                <p className="text-muted-foreground mb-4">
                  Travel with your heart — holograms bring the world to you.
                </p>
                <div className="flex items-center text-secondary group-hover:translate-x-2 transition-transform">
                  Experience <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link to="/marketplace" className="group">
              <div className="glass p-8 rounded-xl hover-glow transition-all h-full">
                <Globe className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Climate Exchange</h3>
                <p className="text-muted-foreground mb-4">
                  Because happiness grows when shared — even the sky can be gifted.
                </p>
                <div className="flex items-center text-accent group-hover:translate-x-2 transition-transform">
                  Trade Now <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link to="/dashboard">
              <FuturisticButton variant="primary" size="lg">
                Access Full Dashboard
                <Navigation className="w-5 h-5" />
              </FuturisticButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;