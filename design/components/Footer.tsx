import image_8ca3ee75d4f380c20f2d6877b07bde1835c4709f from 'figma:asset/8ca3ee75d4f380c20f2d6877b07bde1835c4709f.png';
import logoImage from 'figma:asset/803819826c8fb3cec8410cfa0bed079eca6e7cef.png';

interface FooterProps {
  onNavigate: (page: 'home' | 'blog' | 'blog-post') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="footer-section py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={image_8ca3ee75d4f380c20f2d6877b07bde1835c4709f} 
                  alt="Flow State Fishing Logo" 
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-warm-beige">Flow State Fishing</h3>
                <p className="text-xs font-medium text-light-brown uppercase tracking-wider">
                  Guided Experiences
                </p>
              </div>
            </div>
            <p className="text-light-brown mb-6 max-w-md font-serif leading-relaxed">
              Dedicated to helping you discover the intersection of skill and serenity. 
              Where every cast becomes a meditation, and every moment on the water 
              brings you closer to your flow state.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-sage-green">
                Licensed & Insured Professional Guide
              </p>
              <p className="text-sage-green">
                CPR & First Aid Certified
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-sm text-warm-beige">Navigate</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="text-light-brown hover:text-warm-beige transition-colors font-medium">
                  Home
                </button>
              </li>
              <li>
                <a href="#about" onClick={() => onNavigate('home')} className="text-light-brown hover:text-warm-beige transition-colors font-medium">
                  About Flow State
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => onNavigate('home')} className="text-light-brown hover:text-warm-beige transition-colors font-medium">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => onNavigate('home')} className="text-light-brown hover:text-warm-beige transition-colors font-medium">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="text-light-brown hover:text-warm-beige transition-colors font-medium">
                  Book Trip
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-light-brown hover:text-warm-beige transition-colors font-medium">
                  Blog
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-sm text-warm-beige">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+15551234347" className="text-light-brown hover:text-warm-beige transition-colors font-medium">
                  (555) 123-FISH
                </a>
              </li>
              <li>
                <a href="mailto:info@flowstatefishing.com" className="text-light-brown hover:text-warm-beige transition-colors font-medium">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="text-light-brown hover:text-warm-beige transition-colors font-medium">
                  @flowstatefishingllc
                </a>
              </li>
              <li>
                <span className="text-light-brown font-medium">
                  Santa Fe, New Mexico
                </span>
              </li>
              <li className="pt-3 border-t border-sage-green">
                <a href="#" className="text-sage-green hover:text-light-brown transition-colors text-xs">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sage-green hover:text-light-brown transition-colors text-xs">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-sage-green mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-sage-green font-serif">
            &copy; 2025 Flow State Fishing. All rights reserved.
          </p>
          <p className="text-xs text-light-brown mt-4 md:mt-0 font-serif italic">
            "Find your flow, one cast at a time."
          </p>
        </div>
      </div>
    </footer>
  );
}