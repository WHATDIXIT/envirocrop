import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layouts/navbar";
import { FuturisticButton } from "@/components/ui/futuristic-button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-hero">
      <Navbar />
      
      <div className="pt-24 pb-16 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="glass p-12 rounded-2xl">
            <div className="text-8xl font-bold text-glow mb-6">404</div>
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              The weather system you're looking for seems to have drifted away. 
              Let's get you back to controlling the skies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton variant="hero" size="lg" asChild>
                <a href="/">
                  <Home className="w-5 h-5" />
                  Return Home
                </a>
              </FuturisticButton>
              
              <FuturisticButton variant="glass" size="lg" asChild>
                <a href="/dashboard">
                  <Search className="w-5 h-5" />
                  Go to Dashboard
                </a>
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <p>Error Code: WX-404-{Math.floor(Math.random() * 9000) + 1000}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
