import image_8ca3ee75d4f380c20f2d6877b07bde1835c4709f from 'figma:asset/8ca3ee75d4f380c20f2d6877b07bde1835c4709f.png';
import image_6e2fda71df77c7ba09e5121187d3ef3ac1eea2d0 from 'figma:asset/6e2fda71df77c7ba09e5121187d3ef3ac1eea2d0.png';
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logoImage from 'figma:asset/803819826c8fb3cec8410cfa0bed079eca6e7cef.png';

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
    { name: "Services", href: "#services", page: null },
    { name: "Gallery", href: "#gallery", page: null },
    { name: "Blog", href: null, page: "blog" as const },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b-2 border-sage-green shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button onClick={() => onNavigate('home')} className="group flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                  <img 
                    src={image_8ca3ee75d4f380c20f2d6877b07bde1835c4709f} 
                    alt="Flow State Fishing Logo" 
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
              </div>
              <div>
                <h1 className="font-display text-xl font-semibold text-forest-green group-hover:text-dark-teal transition-colors">
                  Flow State Fishing
                </h1>
                <p className="text-xs font-medium text-olive-brown uppercase tracking-wider">
                  Guided Experiences
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
                    className={`relative transition-colors duration-200 px-1 py-2 text-sm font-medium tracking-wide group ${
                      currentPage === item.page ? 'text-dark-teal' : 'text-forest-green hover:text-dark-teal'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute inset-x-0 -bottom-px h-px bg-burnt-orange transition-transform duration-200 ${
                      currentPage === item.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => onNavigate('home')}
                    className={`relative transition-colors duration-200 px-1 py-2 text-sm font-medium tracking-wide group ${
                      currentPage === 'home' ? 'text-forest-green hover:text-dark-teal' : 'text-forest-green hover:text-dark-teal'
                    }`}
                  >
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-px h-px bg-burnt-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </a>
                )
              ))}
              <Button 
                size="sm" 
                className="ml-4 bg-dark-teal hover:bg-forest-green text-white" 
                onClick={onBookingClick}
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-forest-green hover:text-dark-teal hover:bg-sage-green/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-6 pt-4 pb-6 space-y-3 bg-white border-t-2 border-sage-green">
            {navItems.map((item) => (
              item.page ? (
                <button
                  key={item.name}
                  onClick={() => { setIsOpen(false); onNavigate(item.page); }}
                  className={`block transition-colors px-3 py-3 text-base font-medium w-full text-left ${
                    currentPage === item.page ? 'text-dark-teal' : 'text-forest-green hover:text-dark-teal'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-forest-green hover:text-dark-teal transition-colors px-3 py-3 text-base font-medium"
                  onClick={() => { setIsOpen(false); onNavigate('home'); }}
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="pt-4">
              <Button 
                className="w-full bg-dark-teal hover:bg-forest-green text-white" 
                onClick={() => { setIsOpen(false); onBookingClick(); }}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}