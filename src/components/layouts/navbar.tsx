import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FuturisticButton } from '@/components/ui/futuristic-button';
import { Cloud, User, Bell, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full z-50 glass-strong border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyber rounded-xl flex items-center justify-center glow">
              <Cloud className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-glow">SkyControl</h1>
              <p className="text-xs text-muted-foreground">Weather Command</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/' ? 'text-primary text-glow' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/dashboard' ? 'text-primary text-glow' : 'text-muted-foreground'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/marketplace" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/marketplace' ? 'text-primary text-glow' : 'text-muted-foreground'
              }`}
            >
              Marketplace
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <FuturisticButton variant="ghost" size="icon">
              <Bell className="w-4 h-4" />
            </FuturisticButton>
            <FuturisticButton variant="ghost" size="icon">
              <User className="w-4 h-4" />
            </FuturisticButton>
            <FuturisticButton variant="glass" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </FuturisticButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;