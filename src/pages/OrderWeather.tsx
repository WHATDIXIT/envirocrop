import React, { useState } from 'react';
import Navbar from '@/components/layouts/navbar';
import { FuturisticButton } from '@/components/ui/futuristic-button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  CloudRain, 
  Sun, 
  Snowflake, 
  Wind, 
  Cloud, 
  MapPin, 
  Upload,
  CreditCard,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Wheat
} from 'lucide-react';

const weatherOptions = [
  { id: 'rain', icon: CloudRain, title: 'Rain', description: 'Gentle to heavy rainfall', color: 'text-primary', bg: 'bg-primary/10' },
  { id: 'sun', icon: Sun, title: 'Sunshine', description: 'Clear skies and warmth', color: 'text-warning', bg: 'bg-warning/10' },
  { id: 'snow', icon: Snowflake, title: 'Snow', description: 'Light snowfall to blizzard', color: 'text-secondary', bg: 'bg-secondary/10' },
  { id: 'wind', icon: Wind, title: 'Wind', description: 'Gentle breeze to strong winds', color: 'text-accent', bg: 'bg-accent/10' },
  { id: 'fog', icon: Cloud, title: 'Fog', description: 'Misty atmospheric conditions', color: 'text-muted-foreground', bg: 'bg-muted/20' }
];

const OrderWeather = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedWeather, setSelectedWeather] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [duration, setDuration] = useState('');
  const [isFarmer, setIsFarmer] = useState(false);
  const [cropName, setCropName] = useState('');

  const steps = [
    'Choose Weather',
    'Set Location', 
    'Upload Records',
    'Duration & Plan',
    'Payment',
    'Confirmation'
  ];

  const nextStep = () => setCurrentStep(Math.min(currentStep + 1, 6));
  const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 1));

  return (
    <div className="min-h-screen bg-hero">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-glow mb-4">Order Weather</h1>
            <p className="text-muted-foreground text-lg">
              Choose your mood… let the weather follow your heart.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8 overflow-x-auto">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  index + 1 <= currentStep 
                    ? 'bg-primary text-primary-foreground glow' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {index + 1 <= currentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
                </div>
                <span className={`ml-2 text-sm ${
                  index + 1 <= currentStep ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {step}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-4 ${
                    index + 1 < currentStep ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <Card className="glass p-8">
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-semibold text-glow mb-6">Step 1: Choose Your Weather</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {weatherOptions.map((weather) => (
                    <div
                      key={weather.id}
                      className={`glass p-6 rounded-xl cursor-pointer hover-glow transition-all border-2 ${
                        selectedWeather === weather.id 
                          ? 'border-primary glow' 
                          : 'border-transparent'
                      }`}
                      onClick={() => setSelectedWeather(weather.id)}
                    >
                      <div className={`w-12 h-12 rounded-lg ${weather.bg} flex items-center justify-center mb-4`}>
                        <weather.icon className={`w-6 h-6 ${weather.color}`} />
                      </div>
                      <h3 className="font-semibold mb-2">{weather.title}</h3>
                      <p className="text-sm text-muted-foreground">{weather.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-semibold text-glow mb-6">Step 2: Set GPS Location</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="coordinates">GPS Coordinates or Address</Label>
                    <Input
                      id="coordinates"
                      placeholder="Enter coordinates (lat, lng) or full address"
                      value={coordinates}
                      onChange={(e) => setCoordinates(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Your land, your sky — mapped with love.</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      We ensure precise targeting within a 100-meter radius for optimal weather deployment.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-semibold text-glow mb-6">Step 3: Upload Land Records</h2>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/60 transition-colors">
                    <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Upload Land Verification Documents</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your climate, your rules — guarded with care.
                    </p>
                    <FuturisticButton variant="primary">
                      Choose Files
                    </FuturisticButton>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      Accepted formats: PDF, JPG, PNG. Maximum file size: 10MB. 
                      Documents are encrypted and stored securely.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-semibold text-glow mb-6">Step 4: Duration & Special Plans</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="duration">Duration</Label>
                    <select 
                      id="duration"
                      className="mt-2 w-full bg-input border border-border rounded-md px-3 py-2 text-sm"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    >
                      <option value="">Select duration</option>
                      <option value="1hour">1 Hour - $50</option>
                      <option value="6hours">6 Hours - $250</option>
                      <option value="1day">1 Day - $400</option>
                      <option value="1week">1 Week - $2,500</option>
                      <option value="1month">1 Month - $8,000</option>
                    </select>
                  </div>

                  <div className="glass p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Wheat className="w-5 h-5 text-accent" />
                      <span className="font-medium">Farmer Special Plan</span>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={isFarmer}
                        onChange={(e) => setIsFarmer(e.target.checked)}
                        className="rounded border-border"
                      />
                      <span className="text-sm">I'm a farmer (Get AI-optimized weather cycles)</span>
                    </label>
                    
                    {isFarmer && (
                      <div className="mt-3">
                        <Label htmlFor="crop">Crop Name</Label>
                        <Input
                          id="crop"
                          placeholder="e.g., Wheat, Corn, Tomatoes..."
                          value={cropName}
                          onChange={(e) => setCropName(e.target.value)}
                          className="mt-2"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Our AI will suggest the perfect weather cycle for your crop.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <h2 className="text-2xl font-semibold text-glow mb-6">Step 5: Payment & Subscription</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass p-6 rounded-xl">
                    <h3 className="font-semibold mb-4">One-Time Payment</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Weather Type:</span>
                        <span className="capitalize">{selectedWeather}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{duration}</span>
                      </div>
                      <div className="border-t border-border pt-3">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span className="text-primary">$400</span>
                        </div>
                      </div>
                    </div>
                    <FuturisticButton variant="primary" className="w-full mt-4">
                      <CreditCard className="w-4 h-4" />
                      Pay Now
                    </FuturisticButton>
                  </div>

                  <div className="glass p-6 rounded-xl">
                    <h3 className="font-semibold mb-4">Subscribe & Save</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-muted-foreground">
                        Keep the skies you love, for as long as you want.
                      </p>
                      <div className="text-2xl font-bold text-primary">$299/month</div>
                      <p className="text-xs text-muted-foreground">Unlimited weather orders</p>
                    </div>
                    <FuturisticButton variant="secondary" className="w-full">
                      Subscribe Now
                    </FuturisticButton>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                <h2 className="text-2xl font-semibold text-glow mb-4">Order Confirmed!</h2>
                <div className="glass p-6 rounded-xl max-w-md mx-auto mb-6">
                  <h3 className="font-semibold mb-3">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Order ID:</span>
                      <span className="text-primary">#WX-2024-001</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weather:</span>
                      <span className="capitalize">{selectedWeather}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ETA:</span>
                      <span className="text-accent">2.4 hours</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Your weather system is being deployed. You'll receive real-time updates via our mobile app.
                </p>
                <FuturisticButton variant="primary" size="lg">
                  Track Order Status
                </FuturisticButton>
              </div>
            )}

            {/* Navigation */}
            {currentStep < 6 && (
              <div className="flex justify-between mt-8">
                <FuturisticButton 
                  variant="ghost" 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </FuturisticButton>
                
                <FuturisticButton 
                  variant="primary" 
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !selectedWeather) ||
                    (currentStep === 2 && !coordinates) ||
                    (currentStep === 4 && !duration)
                  }
                >
                  Next Step
                  <ArrowRight className="w-4 h-4" />
                </FuturisticButton>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderWeather;