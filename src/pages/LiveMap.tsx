import React, { useState } from 'react';
import Navbar from '@/components/layouts/navbar';
import { FuturisticButton } from '@/components/ui/futuristic-button';
import { Card } from '@/components/ui/card';
import AnimatedGlobe from '@/components/ui/animated-globe';
import { 
  Globe, 
  Zap, 
  CloudRain, 
  Sun, 
  Wind, 
  Snowflake,
  MapPin,
  Eye,
  Activity,
  Users,
  Clock,
  TrendingUp,
  Filter,
  Maximize
} from 'lucide-react';

const activeWeatherSystems = [
  {
    id: 1,
    type: 'rain',
    location: 'California Central Valley',
    coordinates: '36.7783°N, 119.4179°W',
    duration: '6 hours remaining',
    intensity: 'Moderate',
    clients: 247,
    icon: CloudRain,
    color: 'text-primary'
  },
  {
    id: 2,
    type: 'sunshine',
    location: 'Santorini, Greece',
    coordinates: '36.3932°N, 25.4615°E',
    duration: '3 hours remaining',
    intensity: 'Perfect',
    clients: 89,
    icon: Sun,
    color: 'text-warning'
  },
  {
    id: 3,
    type: 'snow',
    location: 'Swiss Alps',
    coordinates: '46.5197°N, 9.9553°E',
    duration: '12 hours remaining',
    intensity: 'Heavy',
    clients: 156,
    icon: Snowflake,
    color: 'text-secondary'
  },
  {
    id: 4,
    type: 'wind',
    location: 'Netherlands Coast',
    coordinates: '52.3676°N, 4.9041°E',
    duration: '2 hours remaining',
    intensity: 'Strong',
    clients: 34,
    icon: Wind,
    color: 'text-accent'
  }
];

const LiveMap = () => {
  const [selectedSystem, setSelectedSystem] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'global' | 'detail'>('global');
  const [filterType, setFilterType] = useState('all');

  const filteredSystems = activeWeatherSystems.filter(system => 
    filterType === 'all' || system.type === filterType
  );

  return (
    <div className="min-h-screen bg-hero">
      <Navbar />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-glow mb-2">Live Climate Map</h1>
              <p className="text-muted-foreground">
                Watch the world dance with weather, live and glowing.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <FuturisticButton 
                variant={viewMode === 'global' ? 'primary' : 'ghost'} 
                onClick={() => setViewMode('global')}
              >
                <Globe className="w-4 h-4" />
                Global View
              </FuturisticButton>
              
              <FuturisticButton 
                variant={viewMode === 'detail' ? 'primary' : 'ghost'} 
                onClick={() => setViewMode('detail')}
              >
                <Eye className="w-4 h-4" />
                Detail View
              </FuturisticButton>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Map/Globe */}
            <div className="lg:col-span-2">
              <Card className="glass p-6 h-[600px]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-glow">Real-Time Weather Operations</h2>
                  <div className="flex items-center gap-2">
                    <select 
                      className="bg-input border border-border rounded-md px-3 py-1 text-sm"
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                    >
                      <option value="all">All Weather</option>
                      <option value="rain">Rain Systems</option>
                      <option value="sunshine">Sunshine</option>
                      <option value="snow">Snow Systems</option>
                      <option value="wind">Wind Patterns</option>
                    </select>
                    <FuturisticButton variant="ghost" size="icon">
                      <Filter className="w-4 h-4" />
                    </FuturisticButton>
                  </div>
                </div>
                
                <div className="relative h-full rounded-lg overflow-hidden glow-strong">
                  {viewMode === 'global' ? (
                    <div className="relative h-full">
                      <AnimatedGlobe />
                      
                      {/* Overlay Weather Markers */}
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Weather system indicators positioned over globe */}
                        <div className="absolute top-1/4 left-1/4 animate-pulse-glow">
                          <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center cursor-pointer pointer-events-auto"
                               onClick={() => setSelectedSystem(1)}>
                            <CloudRain className="w-3 h-3 text-primary-foreground" />
                          </div>
                        </div>
                        
                        <div className="absolute top-1/3 right-1/4 animate-pulse-glow" style={{ animationDelay: '1s' }}>
                          <div className="w-4 h-4 bg-warning rounded-full flex items-center justify-center cursor-pointer pointer-events-auto"
                               onClick={() => setSelectedSystem(2)}>
                            <Sun className="w-3 h-3 text-primary-foreground" />
                          </div>
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 animate-pulse-glow" style={{ animationDelay: '2s' }}>
                          <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center cursor-pointer pointer-events-auto"
                               onClick={() => setSelectedSystem(3)}>
                            <Snowflake className="w-3 h-3 text-primary-foreground" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Detail View - Table/List */
                    <div className="space-y-3 h-full overflow-y-auto">
                      {filteredSystems.map((system) => (
                        <div 
                          key={system.id}
                          className={`p-4 rounded-lg cursor-pointer transition-all hover-glow ${
                            selectedSystem === system.id 
                              ? 'bg-primary/20 border border-primary' 
                              : 'bg-background/30 border border-border'
                          }`}
                          onClick={() => setSelectedSystem(system.id)}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-background/50 rounded-lg flex items-center justify-center">
                              <system.icon className={`w-5 h-5 ${system.color}`} />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="font-medium">{system.location}</h3>
                              <p className="text-sm text-muted-foreground">{system.coordinates}</p>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-sm font-medium">{system.intensity}</p>
                              <p className="text-xs text-muted-foreground">{system.clients} clients</p>
                            </div>
                            
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Global Stats */}
              <Card className="glass p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Global Statistics
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Active Systems</span>
                    <span className="font-bold text-primary text-glow">{activeWeatherSystems.length}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Total Clients</span>
                    <span className="font-bold text-secondary text-glow-purple">
                      {activeWeatherSystems.reduce((sum, system) => sum + system.clients, 0)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Coverage Areas</span>
                    <span className="font-bold text-accent text-glow-green">195</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Uptime</span>
                    <span className="font-bold text-warning">99.9%</span>
                  </div>
                </div>
              </Card>

              {/* Selected System Details */}
              {selectedSystem && (
                <Card className="glass p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    System Details
                  </h3>
                  
                  {(() => {
                    const system = activeWeatherSystems.find(s => s.id === selectedSystem);
                    if (!system) return null;
                    
                    return (
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-background/30 rounded-lg">
                          <system.icon className={`w-6 h-6 ${system.color}`} />
                          <div>
                            <p className="font-medium">{system.location}</p>
                            <p className="text-xs text-muted-foreground">{system.coordinates}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="font-medium">{system.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Intensity:</span>
                            <span className="font-medium">{system.intensity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Active Clients:</span>
                            <span className="font-medium">{system.clients}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Status:</span>
                            <span className="text-accent font-medium">ACTIVE</span>
                          </div>
                        </div>
                        
                        <FuturisticButton variant="primary" size="sm" className="w-full">
                          View Full Report
                        </FuturisticButton>
                      </div>
                    );
                  })()}
                </Card>
              )}

              {/* Quick Actions */}
              <Card className="glass p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <FuturisticButton variant="primary" size="sm" className="w-full">
                    <Zap className="w-4 h-4" />
                    Deploy Weather
                  </FuturisticButton>
                  
                  <FuturisticButton variant="secondary" size="sm" className="w-full">
                    <TrendingUp className="w-4 h-4" />
                    View Analytics
                  </FuturisticButton>
                  
                  <FuturisticButton variant="ghost" size="sm" className="w-full">
                    <Maximize className="w-4 h-4" />
                    Fullscreen Map
                  </FuturisticButton>
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="glass p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Activity
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 p-2 bg-background/20 rounded">
                    <CloudRain className="w-4 h-4 text-primary" />
                    <span>Rain deployed - Australia</span>
                    <span className="text-xs text-muted-foreground ml-auto">2m ago</span>
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-background/20 rounded">
                    <Sun className="w-4 h-4 text-warning" />
                    <span>Sunshine ended - Miami</span>
                    <span className="text-xs text-muted-foreground ml-auto">5m ago</span>
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-background/20 rounded">
                    <Wind className="w-4 h-4 text-accent" />
                    <span>Wind system - Netherlands</span>
                    <span className="text-xs text-muted-foreground ml-auto">8m ago</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMap;