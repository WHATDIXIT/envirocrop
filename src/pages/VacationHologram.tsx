import React, { useState } from 'react';
import Navbar from '@/components/layouts/navbar';
import { FuturisticButton } from '@/components/ui/futuristic-button';
import { Card } from '@/components/ui/card';
import { 
  Palmtree, 
  Mountain, 
  TreePine, 
  Waves, 
  Building,
  Sparkles,
  Play,
  Settings,
  Volume2,
  Maximize,
  Sun,
  CloudRain,
  Wind
} from 'lucide-react';

const destinations = [
  {
    id: 'maldives',
    name: 'Maldives Paradise',
    description: 'Crystal clear waters and white sandy beaches',
    icon: Palmtree,
    weather: 'Tropical breeze, 28°C',
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    id: 'alps',
    name: 'Swiss Alps',
    description: 'Snow-capped mountains and fresh alpine air',
    icon: Mountain,
    weather: 'Fresh snow, -2°C',
    color: 'text-secondary',
    bg: 'bg-secondary/10'
  },
  {
    id: 'amazon',
    name: 'Amazon Rainforest',
    description: 'Lush greenery and exotic wildlife sounds',
    icon: TreePine,
    weather: 'Humid, light rain, 26°C',
    color: 'text-accent',
    bg: 'bg-accent/10'
  },
  {
    id: 'santorini',
    name: 'Santorini Sunset',
    description: 'Mediterranean charm with stunning sunsets',
    icon: Waves,
    weather: 'Golden hour, gentle breeze',
    color: 'text-warning',
    bg: 'bg-warning/10'
  },
  {
    id: 'tokyo',
    name: 'Tokyo Neon Nights',
    description: 'Cyberpunk cityscape with neon lights',
    icon: Building,
    weather: 'Clear skies, urban atmosphere',
    color: 'text-secondary',
    bg: 'bg-secondary/10'
  }
];

const VacationHologram = () => {
  const [selectedDestination, setSelectedDestination] = useState('');
  const [isExperienceMode, setIsExperienceMode] = useState(false);
  const [volume, setVolume] = useState(75);
  const [weatherIntensity, setWeatherIntensity] = useState(50);

  const startExperience = () => {
    setIsExperienceMode(true);
  };

  const exitExperience = () => {
    setIsExperienceMode(false);
  };

  if (isExperienceMode) {
    return (
      <div className="fixed inset-0 bg-black z-50">
        {/* Holographic Experience Mode */}
        <div className="relative w-full h-full bg-gradient-to-b from-blue-900/20 via-purple-900/30 to-blue-900/20">
          {/* Simulated destination environment */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="w-24 h-24 text-primary mx-auto mb-8 animate-pulse-glow" />
              <h1 className="text-6xl font-bold text-glow mb-4">
                {destinations.find(d => d.id === selectedDestination)?.name}
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Holographic Experience Active
              </p>
              <div className="glass p-6 rounded-xl inline-block">
                <p className="text-lg">
                  Travel with your heart — holograms bring the world to you.
                </p>
              </div>
            </div>
          </div>

          {/* Floating weather elements */}
          <div className="absolute top-20 left-20 animate-float">
            <Sun className="w-16 h-16 text-warning opacity-60" />
          </div>
          <div className="absolute top-32 right-32 animate-float" style={{ animationDelay: '1s' }}>
            <CloudRain className="w-12 h-12 text-primary opacity-40" />
          </div>
          <div className="absolute bottom-24 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
            <Wind className="w-14 h-14 text-accent opacity-50" />
          </div>

          {/* Control Panel */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="glass-strong p-4 rounded-xl flex items-center gap-4">
              <FuturisticButton variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </FuturisticButton>
              
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4" />
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-20"
                />
              </div>

              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={weatherIntensity}
                  onChange={(e) => setWeatherIntensity(Number(e.target.value))}
                  className="w-20"
                />
              </div>

              <FuturisticButton variant="emergency" onClick={exitExperience}>
                Exit Experience
              </FuturisticButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hero">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-glow mb-4">Vacation Hologram</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Travel with your heart — holograms bring the world to you. 
              Experience any destination with matching weather conditions in stunning holographic reality.
            </p>
          </div>

          {/* Destination Selection */}
          {!selectedDestination ? (
            <div>
              <h2 className="text-2xl font-semibold text-glow mb-8 text-center">Choose Your Destination</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((destination) => (
                  <Card
                    key={destination.id}
                    className="glass p-6 hover-glow cursor-pointer transition-all border-2 border-transparent hover:border-primary/30"
                    onClick={() => setSelectedDestination(destination.id)}
                  >
                    <div className={`w-16 h-16 rounded-xl ${destination.bg} flex items-center justify-center mb-6 mx-auto`}>
                      <destination.icon className={`w-8 h-8 ${destination.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">{destination.name}</h3>
                    <p className="text-muted-foreground text-center mb-4">{destination.description}</p>
                    <div className="glass-strong p-3 rounded-lg text-center">
                      <p className="text-sm font-medium">{destination.weather}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            /* Preview & Launch */
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <FuturisticButton 
                  variant="ghost" 
                  onClick={() => setSelectedDestination('')}
                  className="mb-4"
                >
                  ← Back to Destinations
                </FuturisticButton>
                
                <h2 className="text-3xl font-bold text-glow mb-4">
                  {destinations.find(d => d.id === selectedDestination)?.name}
                </h2>
                <p className="text-muted-foreground">
                  {destinations.find(d => d.id === selectedDestination)?.description}
                </p>
              </div>

              {/* Hologram Preview */}
              <Card className="glass p-8 mb-8">
                <div className="aspect-video bg-gradient-to-b from-primary/20 via-secondary/10 to-accent/20 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                  {/* Preview content */}
                  <div className="text-center">
                    <Sparkles className="w-20 h-20 text-primary mx-auto mb-4 animate-pulse-glow" />
                    <h3 className="text-2xl font-bold text-glow mb-2">Holographic Preview</h3>
                    <p className="text-muted-foreground">
                      {destinations.find(d => d.id === selectedDestination)?.weather}
                    </p>
                  </div>

                  {/* Floating elements for preview */}
                  <div className="absolute top-4 left-4 animate-float">
                    <div className="w-8 h-8 glass rounded-full flex items-center justify-center">
                      <Sun className="w-4 h-4 text-warning" />
                    </div>
                  </div>
                  <div className="absolute top-8 right-8 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="w-8 h-8 glass rounded-full flex items-center justify-center">
                      <CloudRain className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="w-8 h-8 glass rounded-full flex items-center justify-center">
                      <Wind className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <FuturisticButton 
                    variant="hero" 
                    size="xl" 
                    onClick={startExperience}
                    className="group"
                  >
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    Start Hologram Experience
                    <Sparkles className="w-6 h-6" />
                  </FuturisticButton>
                </div>
              </Card>

              {/* Experience Features */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="glass p-6 text-center">
                  <Maximize className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Full Immersion</h3>
                  <p className="text-sm text-muted-foreground">
                    360° holographic environment with spatial audio
                  </p>
                </Card>

                <Card className="glass p-6 text-center">
                  <Settings className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Weather Sync</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time weather conditions matching your destination
                  </p>
                </Card>

                <Card className="glass p-6 text-center">
                  <Volume2 className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Ambient Audio</h3>
                  <p className="text-sm text-muted-foreground">
                    Authentic sounds from your chosen location
                  </p>
                </Card>
              </div>

              {/* Pricing */}
              <Card className="glass p-6 mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Premium Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      Moments of magic, skies made just for you.
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">$29</div>
                    <p className="text-xs text-muted-foreground">per session</p>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VacationHologram;