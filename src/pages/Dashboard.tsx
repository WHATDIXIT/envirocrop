import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layouts/navbar';
import { FuturisticButton } from '@/components/ui/futuristic-button';
import { 
  CloudRain, 
  Navigation, 
  Upload, 
  CreditCard, 
  Wheat, 
  Sparkles,
  ShoppingCart,
  AlertTriangle,
  Globe,
  Bot,
  Settings,
  BarChart3,
  Clock,
  MapPin
} from 'lucide-react';

const toolItems = [
  {
    title: 'Order Weather',
    description: 'Choose your mood… let the weather follow your heart.',
    icon: CloudRain,
    link: '/order-weather',
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    title: 'GPS Control',
    description: 'Your land, your sky — mapped with love.',
    icon: Navigation,
    link: '/gps-control',
    color: 'text-secondary',
    bg: 'bg-secondary/10'
  },
  {
    title: 'Land Upload',
    description: 'Your climate, your rules — guarded with care.',
    icon: Upload,
    link: '/land-upload',
    color: 'text-accent',
    bg: 'bg-accent/10'
  },
  {
    title: 'Subscriptions',
    description: 'Keep the skies you love, for as long as you want.',
    icon: CreditCard,
    link: '/subscriptions',
    color: 'text-warning',
    bg: 'bg-warning/10'
  },
  {
    title: 'Farmer Crop Plans',
    description: 'Sow your seeds, and we\'ll grow the perfect sky with you.',
    icon: Wheat,
    link: '/farmer-plans',
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    title: 'Vacation Hologram',
    description: 'Moments of magic, skies made just for you.',
    icon: Sparkles,
    link: '/vacation-hologram',
    color: 'text-secondary',
    bg: 'bg-secondary/10'
  },
  {
    title: 'Marketplace',
    description: 'Because happiness grows when shared — even the sky can be gifted.',
    icon: ShoppingCart,
    link: '/marketplace',
    color: 'text-accent',
    bg: 'bg-accent/10'
  },
  {
    title: 'Emergency Override',
    description: 'Protecting Earth first — priority climate with love.',
    icon: AlertTriangle,
    link: '/emergency',
    color: 'text-destructive',
    bg: 'bg-destructive/10'
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-hero">
      <Navbar />
      
      <div className="pt-20 flex">
        {/* Sidebar */}
        <aside className="w-80 fixed left-0 top-20 bottom-0 glass-strong border-r border-primary/20 overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-glow mb-2">Control Center</h2>
              <p className="text-muted-foreground">Access all weather command tools</p>
            </div>
            
            <nav className="space-y-3">
              {toolItems.map((tool, index) => (
                <Link
                  key={tool.title}
                  to={tool.link}
                  className="group block"
                >
                  <div className="glass p-4 rounded-lg hover-glow transition-all border border-border/30">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg ${tool.bg} flex items-center justify-center`}>
                        <tool.icon className={`w-5 h-5 ${tool.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-80 flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-glow mb-4">Weather Command Dashboard</h1>
              <p className="text-muted-foreground text-lg">
                Monitor global climate operations and manage your weather systems.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              <div className="glass p-6 rounded-xl hover-glow">
                <div className="flex items-center justify-between mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                  <span className="text-2xl font-bold text-primary text-glow">47</span>
                </div>
                <h3 className="font-semibold mb-1">Active Weather Systems</h3>
                <p className="text-xs text-muted-foreground">Currently operational</p>
              </div>

              <div className="glass p-6 rounded-xl hover-glow">
                <div className="flex items-center justify-between mb-4">
                  <BarChart3 className="w-8 h-8 text-secondary" />
                  <span className="text-2xl font-bold text-secondary text-glow-purple">98.7%</span>
                </div>
                <h3 className="font-semibold mb-1">Accuracy Rate</h3>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>

              <div className="glass p-6 rounded-xl hover-glow">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                  <span className="text-2xl font-bold text-accent text-glow-green">2.4h</span>
                </div>
                <h3 className="font-semibold mb-1">Avg Response Time</h3>
                <p className="text-xs text-muted-foreground">Weather deployment</p>
              </div>

              <div className="glass p-6 rounded-xl hover-glow">
                <div className="flex items-center justify-between mb-4">
                  <MapPin className="w-8 h-8 text-warning" />
                  <span className="text-2xl font-bold text-warning">195</span>
                </div>
                <h3 className="font-semibold mb-1">Coverage Areas</h3>
                <p className="text-xs text-muted-foreground">Countries served</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-glow mb-6">Recent Climate Operations</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                  <CloudRain className="w-6 h-6 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">Rain System Deployed - California Valley</p>
                    <p className="text-sm text-muted-foreground">Duration: 6 hours • Status: Active</p>
                  </div>
                  <span className="text-xs text-accent font-medium">ACTIVE</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                  <Sparkles className="w-6 h-6 text-secondary" />
                  <div className="flex-1">
                    <p className="font-medium">Hologram Experience - Maldives Sunset</p>
                    <p className="text-sm text-muted-foreground">User: Premium Vacation Package</p>
                  </div>
                  <span className="text-xs text-primary font-medium">COMPLETED</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-warning" />
                  <div className="flex-1">
                    <p className="font-medium">Emergency Override - Wildfire Suppression</p>
                    <p className="text-sm text-muted-foreground">Location: Australia • Priority: Critical</p>
                  </div>
                  <span className="text-xs text-warning font-medium">PRIORITY</span>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-8 h-8 text-accent" />
                <div>
                  <h3 className="text-xl font-semibold text-glow">AI Weather Guide</h3>
                  <p className="text-sm text-muted-foreground">A caring guide — smart, loving, and here for you.</p>
                </div>
              </div>
              
              <div className="bg-background/50 p-4 rounded-lg mb-4">
                <p className="text-sm mb-3">
                  <span className="font-medium text-accent">AI Suggestion:</span> Based on your location's crop cycle, 
                  I recommend scheduling gentle rain for tomorrow evening. This will optimize your wheat harvest timing.
                </p>
                <div className="flex gap-2">
                  <FuturisticButton variant="accent" size="sm">
                    Schedule Rain
                  </FuturisticButton>
                  <FuturisticButton variant="ghost" size="sm">
                    View Details
                  </FuturisticButton>
                </div>
              </div>

              <FuturisticButton variant="glass" className="w-full">
                <Bot className="w-4 h-4" />
                Chat with AI Guide
              </FuturisticButton>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;