import React, { useState } from 'react';
import Navbar from '@/components/layouts/navbar';
import { FuturisticButton } from '@/components/ui/futuristic-button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  AlertTriangle, 
  Flame, 
  Wind, 
  Sun, 
  CloudRain,
  Shield,
  Zap,
  CheckCircle,
  Clock,
  MapPin,
  Users,
  Phone
} from 'lucide-react';

const emergencyOptions = [
  {
    id: 'wildfire',
    icon: Flame,
    title: 'Wildfire Rain',
    description: 'Rapid deployment rain system for fire suppression',
    priority: 'CRITICAL',
    estimatedTime: '45 minutes',
    color: 'text-destructive'
  },
  {
    id: 'smog',
    icon: Wind,
    title: 'Anti-Smog Wind',
    description: 'Strong wind patterns to clear air pollution',
    priority: 'HIGH',
    estimatedTime: '1.2 hours',
    color: 'text-warning'
  },
  {
    id: 'frost',
    icon: Sun,
    title: 'Frost Protection',
    description: 'Emergency sunburst to prevent crop damage',
    priority: 'HIGH',
    estimatedTime: '30 minutes',
    color: 'text-accent'
  },
  {
    id: 'drought',
    icon: CloudRain,
    title: 'Drought Relief',
    description: 'Emergency precipitation for water shortage areas',
    priority: 'CRITICAL',
    estimatedTime: '2 hours',
    color: 'text-primary'
  }
];

const Emergency = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [organizationType, setOrganizationType] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [location, setLocation] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);

  const handleAuthorize = () => {
    if (authCode && organizationType && location) {
      setIsAuthorized(true);
    }
  };

  const deployEmergencyWeather = () => {
    setIsDeployed(true);
  };

  if (isDeployed) {
    return (
      <div className="min-h-screen bg-hero">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
              <CheckCircle className="w-20 h-20 text-accent mx-auto mb-6 animate-pulse-glow" />
              <h1 className="text-4xl font-bold text-glow mb-4">Emergency Weather Deployed</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Protecting Earth first — priority climate with love.
              </p>

              <Card className="glass p-8 max-w-2xl mx-auto mb-8">
                <h3 className="text-xl font-semibold mb-6 text-glow">Live Deployment Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-background/30 rounded-lg">
                    <span>Operation Type:</span>
                    <span className="font-medium capitalize">{selectedOption.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background/30 rounded-lg">
                    <span>Target Area:</span>
                    <span className="font-medium">{location}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background/30 rounded-lg">
                    <span>Status:</span>
                    <span className="text-accent font-medium">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background/30 rounded-lg">
                    <span>ETA:</span>
                    <span className="text-primary font-medium">
                      {emergencyOptions.find(o => o.id === selectedOption)?.estimatedTime}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background/30 rounded-lg">
                    <span>Operation ID:</span>
                    <span className="font-mono text-sm">EMR-2024-{Math.floor(Math.random() * 9000) + 1000}</span>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="glass p-6">
                  <MapPin className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Real-Time Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor deployment progress on our live satellite feed and weather radar systems.
                  </p>
                  <FuturisticButton variant="primary" size="sm" className="mt-4 w-full">
                    View Live Map
                  </FuturisticButton>
                </Card>

                <Card className="glass p-6">
                  <Phone className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-semibold mb-2">Emergency Hotline</h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 support for emergency weather operations and real-time coordination.
                  </p>
                  <FuturisticButton variant="secondary" size="sm" className="mt-4 w-full">
                    Call Support
                  </FuturisticButton>
                </Card>
              </div>

              <FuturisticButton variant="glass" size="lg">
                Return to Emergency Center
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
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h1 className="text-4xl font-bold text-glow mb-4">Emergency Override</h1>
            <p className="text-muted-foreground text-lg">
              Protecting Earth first — priority climate with love.
            </p>
            <div className="inline-block glass p-3 rounded-lg mt-4">
              <p className="text-sm text-warning">
                🔒 Restricted Access - Government/NGO Authorization Required
              </p>
            </div>
          </div>

          {!isAuthorized ? (
            /* Authorization Form */
            <Card className="glass p-8">
              <h2 className="text-2xl font-semibold text-glow mb-6">Authorization Required</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="org-type">Organization Type</Label>
                  <select 
                    id="org-type"
                    className="mt-2 w-full bg-input border border-border rounded-md px-3 py-2 text-sm"
                    value={organizationType}
                    onChange={(e) => setOrganizationType(e.target.value)}
                  >
                    <option value="">Select Organization Type</option>
                    <option value="government">Government Agency</option>
                    <option value="emergency">Emergency Services</option>
                    <option value="ngo">NGO/Humanitarian</option>
                    <option value="research">Research Institution</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="auth-code">Authorization Code</Label>
                  <Input
                    id="auth-code"
                    type="password"
                    placeholder="Enter secure authorization code"
                    value={authCode}
                    onChange={(e) => setAuthCode(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="location">Emergency Location</Label>
                  <Input
                    id="location"
                    placeholder="Enter precise GPS coordinates or address"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div className="glass-strong p-4 rounded-lg border border-warning/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-warning" />
                    <span className="font-medium text-warning">Security Notice</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    All emergency weather deployments are logged, monitored, and require multi-level 
                    verification. Unauthorized access attempts are tracked and reported.
                  </p>
                </div>

                <FuturisticButton 
                  variant="warning" 
                  onClick={handleAuthorize}
                  disabled={!authCode || !organizationType || !location}
                  className="w-full"
                >
                  <Shield className="w-5 h-5" />
                  Authorize Emergency Access
                </FuturisticButton>
              </div>
            </Card>
          ) : (
            /* Emergency Options */
            <div>
              <Card className="glass p-8 mb-8">
                <h2 className="text-2xl font-semibold text-glow mb-6">Select Emergency Weather Type</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {emergencyOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`glass p-6 rounded-xl cursor-pointer hover-glow transition-all border-2 ${
                        selectedOption === option.id 
                          ? 'border-destructive glow' 
                          : 'border-transparent'
                      }`}
                      onClick={() => setSelectedOption(option.id)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                          <option.icon className={`w-6 h-6 ${option.color}`} />
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          option.priority === 'CRITICAL' 
                            ? 'bg-destructive/20 text-destructive' 
                            : 'bg-warning/20 text-warning'
                        }`}>
                          {option.priority}
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>ETA: {option.estimatedTime}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedOption && (
                  <div className="text-center">
                    <div className="glass-strong p-6 rounded-lg mb-6">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Zap className="w-6 h-6 text-destructive" />
                        <span className="font-semibold text-lg">IMMEDIATE DEPLOYMENT</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        This action will immediately deploy emergency weather systems. 
                        Operation cannot be canceled once initiated.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        Target: {location} | Type: {selectedOption.replace('-', ' ')} | 
                        Authority: {organizationType.toUpperCase()}
                      </div>
                    </div>

                    <FuturisticButton 
                      variant="emergency" 
                      size="xl"
                      onClick={deployEmergencyWeather}
                      className="group"
                    >
                      <AlertTriangle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      DEPLOY EMERGENCY WEATHER
                      <Zap className="w-6 h-6" />
                    </FuturisticButton>
                  </div>
                )}
              </Card>

              {/* Emergency Contacts */}
              <Card className="glass p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Emergency Coordination
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Global Command</p>
                    <p className="text-muted-foreground">+1-800-SKY-HELP</p>
                  </div>
                  <div>
                    <p className="font-medium">Regional Coordination</p>
                    <p className="text-muted-foreground">emergency@skycontrol.gov</p>
                  </div>
                  <div>
                    <p className="font-medium">Technical Support</p>
                    <p className="text-muted-foreground">24/7 Live Chat</p>
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

export default Emergency;