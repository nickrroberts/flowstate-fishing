import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Play, Zap, Star } from "lucide-react";
import heroImage from 'figma:asset/de4a33c5ca6c62507942a345baf502d1d4dbaee9.png';

interface HeroProps {
  onBookingClick: () => void;
}

export function Hero({ onBookingClick }: HeroProps) {
  return (
    <section id="home" className="hero-section pt-32 md:pt-40 pb-12 lg:pb-16 overflow-visible relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] overflow-visible">
          {/* Content */}
          <div className="order-1 lg:order-1 overflow-visible">
            <div className="flex gap-3 mb-6">
              <Badge 
                variant="outline" 
                className="text-xs font-bold px-4 py-2 border-4 border-laser-orange text-deep-purple bg-cream sticker-shadow font-sans uppercase animate-retro-bounce"
              >
                🏜️ Desert Legends
              </Badge>
              <Badge 
                variant="outline" 
                className="text-xs font-bold px-4 py-2 border-4 border-electric-blue text-deep-purple bg-cream sticker-shadow font-sans uppercase animate-retro-bounce"
                style={{ animationDelay: '0.5s' }}
              >
                <Star className="w-3 h-3 mr-1" />
                Comedy Gold
              </Badge>
            </div>
            
            <div className="mb-8 overflow-visible">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.8] font-black text-neon-pink overflow-visible uppercase animate-psychedelic-pulse">
                Catch Fish
              </h1>
              <div className="overflow-visible pb-8">
                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.8] font-black text-acid-green italic overflow-visible uppercase">
                  <span className="relative inline-block animate-neon-flicker">
                    & LAUGHS!
                    <div className="absolute -top-4 -right-4 text-2xl animate-retro-bounce">🎣</div>
                  </span>
                </h1>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl leading-relaxed font-sans font-medium text-deep-purple">
                Welcome to the most ridiculously fun fly fishing school in the desert! 
                We'll teach you to cast like a pro while laughing your fins off. 
                <span className="text-hot-magenta font-bold">No boring instructors allowed!</span> 🌵
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 h-auto font-bold group bg-neon-pink hover:bg-hot-magenta text-cream retro-shadow uppercase tracking-wide animate-psychedelic-pulse" 
                onClick={onBookingClick}
              >
                <Zap className="w-5 h-5 mr-2" />
                Let's Get Weird!
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto font-bold group border-4 border-laser-orange text-laser-orange hover:bg-laser-orange hover:text-cream sticker-shadow uppercase tracking-wide"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Chaos 📺
              </Button>
            </div>

            {/* Stats with fun twist */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t-4 border-dashed border-acid-green">
              <div className="text-center">
                <div className="font-display text-4xl font-black text-laser-orange mb-2 animate-retro-bounce">420+</div>
                <div className="text-sm text-deep-purple font-bold uppercase tracking-wider font-sans">Fish Caught (Maybe)</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-black text-laser-orange mb-2 animate-retro-bounce" style={{ animationDelay: '0.3s' }}>69</div>
                <div className="text-sm text-deep-purple font-bold uppercase tracking-wider font-sans">Bad Jokes Per Hour</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-black text-laser-orange mb-2 animate-retro-bounce" style={{ animationDelay: '0.6s' }}>∞</div>
                <div className="text-sm text-deep-purple font-bold uppercase tracking-wider font-sans">Laughs Guaranteed</div>
              </div>
            </div>
          </div>

          {/* Hero Image with psychedelic treatment */}
          <div className="order-2 lg:order-2 relative">
            <div className="relative animate-gentle-float">
              {/* Main hero image with sticker treatment */}
              <div className="relative rounded-2xl overflow-hidden sticker-shadow bg-gradient-to-br from-electric-blue via-lime-shock to-hot-magenta p-4">
                <div className="w-full h-[600px] relative rounded-xl overflow-hidden">
                  <img 
                    src={heroImage} 
                    alt="Psychedelic desert fishing adventure with rainbow trout and cactus vibes"
                    className="w-full h-full object-cover object-center animate-rainbow-shift"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neon-pink/30 via-transparent to-acid-green/20"></div>
                  
                  {/* Fun stickers overlay */}
                  <div className="absolute top-4 right-4 text-4xl animate-retro-bounce">🌵</div>
                  <div className="absolute bottom-4 left-4 text-3xl animate-retro-bounce" style={{ animationDelay: '1s' }}>🐟</div>
                  <div className="absolute top-1/2 left-4 text-2xl animate-retro-bounce" style={{ animationDelay: '0.5s' }}>⚡</div>
                </div>
              </div>
            </div>

            {/* Floating psychedelic elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-neon-pink/60 rounded-full blur-xl animate-psychedelic-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-acid-green/40 rounded-full blur-2xl animate-psychedelic-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-laser-orange/50 rounded-full blur-lg animate-psychedelic-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Desert elements */}
            <div className="absolute top-10 left-10 text-6xl animate-gentle-float opacity-60">🌵</div>
            <div className="absolute bottom-20 right-10 text-4xl animate-gentle-float opacity-60" style={{ animationDelay: '3s' }}>🦂</div>
          </div>
        </div>
      </div>
    </section>
  );
}