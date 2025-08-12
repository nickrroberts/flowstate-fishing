import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Play } from "lucide-react";
import heroImage from 'figma:asset/de4a33c5ca6c62507942a345baf502d1d4dbaee9.png';

interface HeroProps {
  onBookingClick: () => void;
}

export function Hero({ onBookingClick }: HeroProps) {
  return (
    <section id="home" className="hero-section pt-32 md:pt-40 pb-12 lg:pb-16 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] overflow-visible">
          {/* Content */}
          <div className="order-1 lg:order-1 overflow-visible">
            <Badge 
              variant="outline" 
              className="mb-6 text-xs font-medium px-4 py-2 border-dark-teal text-dark-teal bg-white"
            >
              Professional Fly Fishing Guide
            </Badge>
            
            <div className="mb-6 overflow-visible">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] font-bold text-forest-green overflow-visible">
                Find Your
              </h1>
              <div className="overflow-visible pb-12">
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] font-bold text-dark-teal italic overflow-visible">
                  <span className="relative inline-block">
                    Flow
                    <svg 
                      className="absolute left-0 w-32 h-8 opacity-60 text-burnt-orange" 
                      style={{ bottom: '-4px', transform: 'translateY(100%)' }}
                      viewBox="0 0 128 32" 
                      fill="none"
                    >
                      <path 
                        d="M4 20c12-6 24-8 36-4s24 8 36 4 24-8 36-4c8 2 12 4 12 4" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  State
                </h1>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl leading-relaxed font-serif text-olive-brown">
                Experience the intersection of skill and serenity on pristine waters. 
                Where challenge meets absolute control, and every cast becomes meditation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 h-auto font-medium group bg-dark-teal hover:bg-forest-green text-white" 
                onClick={onBookingClick}
              >
                Book Your Experience
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto font-medium group border-2 border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-white"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t-2 border-sage-green">
              <div>
                <div className="font-display text-3xl font-semibold text-dark-teal mb-2">12+</div>
                <div className="text-sm text-olive-brown font-medium uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-dark-teal mb-2">500+</div>
                <div className="text-sm text-olive-brown font-medium uppercase tracking-wider">Guided Trips</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-dark-teal mb-2">25+</div>
                <div className="text-sm text-olive-brown font-medium uppercase tracking-wider">River Systems</div>
              </div>
            </div>
          </div>

          {/* Single Hero Image */}
          <div className="order-2 lg:order-2 relative">
            <div className="relative">
              {/* Main hero image - removed shadow-2xl and border */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="w-full h-[600px] relative">
                  <img 
                    src={heroImage} 
                    alt="Watercolor circular composition of fly fisherman casting line by serene river with organic flowing elements"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-burnt-orange opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-dark-teal opacity-5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}