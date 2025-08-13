import Frame15 from '../imports/Frame15';
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onBookingClick: () => void;
  onNavigate: (page: 'home' | 'blog' | 'blog-post') => void;
  currentPage: string;
}

export function Navigation({ onBookingClick, onNavigate, currentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", page: null },
    { name: "Classes", href: "#services", page: null },
    { name: "Gallery", href: "#gallery", page: null },
    { name: "Blog", href: null, page: "blog" as const },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b-4 transition-all duration-300 ${
      isScrolled ? 'bg-cream/95 border-neon-pink neon-glow' : 'bg-cream/90 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button onClick={() => onNavigate('home')} className="group flex items-center space-x-3">
              <div className="relative">
                <div className="w-16 h-auto flex items-center justify-center group-hover:scale-110 transition-transform animate-retro-bounce sticker-shadow rounded-full bg-acid-green p-2">
                  <Frame15 />
                </div>
              </div>
              <div>
                <h1 className="font-display text-xl font-black text-neon-pink group-hover:text-hot-magenta transition-colors uppercase tracking-wide">
                  Desert Fishing
                </h1>
                <p className="text-xs font-bold text-laser-orange uppercase tracking-wider font-sans">
                  🎣 Comedy School 🏜️
                </p>
              </div>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                item.page ? (
                  <button
                    key={item.name}
                    onClick={() => onNavigate(item.page)}
                    className={`relative transition-all duration-200 px-3 py-2 text-sm font-bold tracking-wide group font-sans uppercase rounded-lg ${
                      currentPage === item.page 
                        ? 'text-cream bg-hot-magenta sticker-shadow' 
                        : 'text-deep-purple hover:text-cream hover:bg-acid-green sticker-shadow'
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => onNavigate('home')}
                    className="relative transition-all duration-200 px-3 py-2 text-sm font-bold tracking-wide group font-sans uppercase rounded-lg text-deep-purple hover:text-cream hover:bg-acid-green sticker-shadow"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <Button 
                size="sm" 
                className="ml-4 bg-neon-pink hover:bg-hot-magenta text-cream font-bold retro-shadow uppercase tracking-wide animate-psychedelic-pulse" 
                onClick={onBookingClick}
              >
                Book Now! 🤘
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-deep-purple hover:text-cream hover:bg-laser-orange sticker-shadow rounded-lg"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-6 pt-4 pb-6 space-y-3 bg-cream border-t-4 border-neon-pink retro-shadow">
            {navItems.map((item) => (
              item.page ? (
                <button
                  key={item.name}
                  onClick={() => { setIsOpen(false); onNavigate(item.page); }}
                  className={`block transition-all px-4 py-3 text-base font-bold w-full text-left font-sans uppercase rounded-lg ${
                    currentPage === item.page 
                      ? 'text-cream bg-hot-magenta sticker-shadow' 
                      : 'text-deep-purple hover:text-cream hover:bg-acid-green sticker-shadow'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-deep-purple hover:text-cream hover:bg-acid-green transition-all px-4 py-3 text-base font-bold font-sans uppercase rounded-lg sticker-shadow"
                  onClick={() => { setIsOpen(false); onNavigate('home'); }}
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="pt-4">
              <Button 
                className="w-full bg-neon-pink hover:bg-hot-magenta text-cream font-bold retro-shadow uppercase tracking-wide" 
                onClick={() => { setIsOpen(false); onBookingClick(); }}
              >
                Book Now! 🤘
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}