import Frame15 from '../imports/Frame15';

interface FooterProps {
  onNavigate: (page: 'home' | 'blog' | 'blog-post') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="footer-section py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center sticker-shadow bg-acid-green p-3 animate-retro-bounce">
                <Frame15 />
              </div>
              <div>
                <h3 className="font-chunky text-2xl font-black text-cream uppercase">Desert Fishing</h3>
                <p className="text-sm font-bold text-lime-shock uppercase tracking-wider font-sans">
                  🎣 Comedy School 🏜️
                </p>
              </div>
            </div>
            <p className="text-cream mb-6 max-w-md font-sans leading-relaxed font-medium">
              We're the most ridiculously fun fishing school in the desert! 
              Come for the fish, stay for the laughs, leave with questionable life decisions and epic memories. 
              <span className="text-lime-shock font-bold">Desert vibes only! 🌵</span>
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center bg-cream/10 rounded-lg p-3 sticker-shadow">
                <span className="text-2xl mr-3">🏆</span>
                <p className="text-lime-shock font-bold">
                  Licensed & Certified (Surprisingly!)
                </p>
              </div>
              <div className="flex items-center bg-cream/10 rounded-lg p-3 sticker-shadow">
                <span className="text-2xl mr-3">🚑</span>
                <p className="text-lime-shock font-bold">
                  First Aid Certified (For Fishing Fails)
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-chunky font-black mb-6 uppercase tracking-wider text-lg text-cream">Navigate 🧭</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="text-lime-shock hover:text-cream transition-colors font-bold bg-cream/10 px-3 py-2 rounded-lg sticker-shadow w-full text-left uppercase">
                  🏠 Home Base
                </button>
              </li>
              <li>
                <a href="#about" onClick={() => onNavigate('home')} className="text-lime-shock hover:text-cream transition-colors font-bold bg-cream/10 px-3 py-2 rounded-lg sticker-shadow block uppercase">
                  🤪 About the Chaos
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => onNavigate('home')} className="text-lime-shock hover:text-cream transition-colors font-bold bg-cream/10 px-3 py-2 rounded-lg sticker-shadow block uppercase">
                  🎣 Epic Classes
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => onNavigate('home')} className="text-lime-shock hover:text-cream transition-colors font-bold bg-cream/10 px-3 py-2 rounded-lg sticker-shadow block uppercase">
                  📸 Hall of Fame
                </a>
              </li>
              <li>
                <a href="#booking" className="text-lime-shock hover:text-cream transition-colors font-bold bg-cream/10 px-3 py-2 rounded-lg sticker-shadow block uppercase">
                  📅 Book Now!
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-lime-shock hover:text-cream transition-colors font-bold bg-cream/10 px-3 py-2 rounded-lg sticker-shadow w-full text-left uppercase">
                  📝 Fish Tales
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h4 className="font-chunky font-black mb-6 uppercase tracking-wider text-lg text-cream">Hit Us Up! 📞</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+15551234347" className="text-lime-shock hover:text-cream transition-colors font-bold bg-cream/10 px-3 py-2 rounded-lg sticker-shadow block">
                  📱 (555) 123-FISH
                </a>
              </li>
              <li>
                <a href="mailto:chaos@desertfishing.lol" className="text-lime-shock hover:text-cream transition-colors font-bold bg-cream/10 px-3 py-2 rounded-lg sticker-shadow block">
                  ✉️ chaos@desertfishing.lol
                </a>
              </li>
              <li>
                <a href="#" className="text-lime-shock hover:text-cream transition-colors font-bold bg-cream/10 px-3 py-2 rounded-lg sticker-shadow block">
                  📸 @desertfishingchaos
                </a>
              </li>
              <li>
                <span className="text-lime-shock font-bold bg-cream/10 px-3 py-2 rounded-lg sticker-shadow block">
                  🏜️ Somewhere in the Desert, AZ
                </span>
              </li>
              <li className="pt-3 border-t-2 border-dashed border-lime-shock">
                <a href="#" className="text-cream/80 hover:text-lime-shock transition-colors text-xs uppercase font-bold">
                  Privacy Policy (It's Boring)
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/80 hover:text-lime-shock transition-colors text-xs uppercase font-bold">
                  Terms (Also Boring)
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-4 border-dashed border-lime-shock mt-12 pt-8 flex flex-col md:flex-row justify-between items-center bg-cream/10 rounded-2xl p-6 sticker-shadow">
          <p className="text-sm text-cream font-bold font-sans">
            &copy; 2025 Desert Fishing Comedy School. All chaos reserved. 🤘
          </p>
          <p className="text-xs text-lime-shock mt-4 md:mt-0 font-sans font-bold uppercase animate-neon-flicker">
            "Catch Fish, Not Feelings!" 🎣🏜️✨
          </p>
        </div>
      </div>
    </footer>
  );
}