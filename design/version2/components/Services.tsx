import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, Users, Target, Star, CheckCircle, Zap, Flame, Rainbow } from "lucide-react";

interface ServicesProps {
  onBookingClick: (serviceId: string) => void;
}

export function Services({ onBookingClick }: ServicesProps) {
  const services = [
    {
      id: "noob",
      title: "NOOB BOOTCAMP",
      subtitle: "For Total Beginners",
      duration: "Half Day (4 hours)",
      capacity: "1-3 people",
      price: "$420",
      emoji: "🐣",
      description: "Never touched a fishing rod? Perfect! We'll teach you the basics while making questionable life choices together. Warning: Contains bad fish puns.",
      features: [
        "How to hold a rod without looking ridiculous",
        "Casting 101: Don't hook yourself",
        "Reading water (it's not that deep, bro)", 
        "Fly selection for dummies",
        "All gear provided (we don't trust you yet)",
        "Snacks & energy drinks included"
      ],
      popular: false,
      highlight: "beginner",
      color: "bg-acid-green"
    },
    {
      id: "legend",
      title: "DESERT LEGEND",
      subtitle: "The Full Experience",
      duration: "Full Day (8 hours)",
      capacity: "1-4 people",
      price: "$750",  
      emoji: "🏆",
      description: "Ready to become a fishing legend? This epic all-day adventure includes advanced techniques, terrible jokes, and probably some sunburn. Desert vibes only!",
      features: [
        "Advanced casting wizardry",
        "Secret desert fishing spots",
        "Meme-worthy photo ops",
        "Fish psychology (yes, it's real)",
        "Pro gear testing",
        "Legendary lunch spread",
        "Official Desert Legend certificate"
      ],
      popular: true,
      highlight: "advanced",
      color: "bg-neon-pink"
    },
    {
      id: "psychedelic",
      title: "PSYCHEDELIC RETREAT",
      subtitle: "Multi-Day Madness",
      duration: "2-3 Days of Chaos",
      capacity: "1-2 brave souls",
      price: "$1,337/day",
      emoji: "🌈",
      description: "The ultimate desert fishing experience! Multiple days of fishing, camping under psychedelic sunsets, and achieving true enlightenment through terrible fishing jokes.",
      features: [
        "Secret desert oasis locations",
        "Sunrise & sunset fishing sessions",
        "Desert survival comedy hour",
        "Campfire fish tales & s'mores",
        "All meals (surprisingly good!)",
        "Epic desert camping setup",
        "Life-changing fishing philosophy"
      ],
      popular: false,
      highlight: "premium",
      color: "bg-laser-orange"
    },
  ];

  const getHighlightIcon = (highlight: string) => {
    switch(highlight) {
      case 'beginner': return <Zap className="w-4 h-4" />;
      case 'advanced': return <Flame className="w-4 h-4" />;
      case 'premium': return <Rainbow className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getHighlightColor = (highlight: string) => {
    switch(highlight) {
      case 'beginner': return 'bg-acid-green text-deep-purple border-acid-green sticker-shadow';
      case 'advanced': return 'bg-neon-pink text-cream border-neon-pink sticker-shadow';
      case 'premium': return 'bg-laser-orange text-cream border-laser-orange sticker-shadow';
      default: return 'bg-electric-blue text-cream border-electric-blue sticker-shadow';
    }
  };

  return (
    <section id="services" className="services-section py-16 lg:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-6 text-sm font-bold px-6 py-3 border-4 border-cream text-cream bg-deep-purple sticker-shadow font-sans uppercase animate-retro-bounce">
            🎣 Desert Classes 🏜️
          </Badge>
          <h2 className="font-chunky text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight text-cream uppercase">
            Choose Your
            <span className="block text-lime-shock animate-neon-flicker">ADVENTURE!</span>
          </h2>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto leading-relaxed font-sans font-medium">
            From complete noobs to fishing legends, we've got the perfect blend of education and chaos for everyone. 
            <span className="text-lime-shock font-bold">Warning: Side effects may include excessive laughter! 😂</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative z-10">
          {services.map((service, index) => (
            <Card key={index} className={`relative group hover:scale-105 transition-all duration-300 bg-cream border-4 border-deep-purple sticker-shadow overflow-hidden ${service.popular ? 'scale-105 animate-psychedelic-pulse' : ''}`}>
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-hot-magenta text-cream px-6 py-2 retro-shadow font-bold font-sans uppercase z-10">
                  <Star className="w-4 h-4 mr-2 animate-retro-bounce" />
                  🔥 Most Epic! 🔥
                </Badge>
              )}
              
              {/* Crazy gradient background */}
              <div className={`absolute inset-0 ${service.color} opacity-10`}></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className={`text-sm font-bold px-4 py-2 font-sans uppercase flex items-center gap-2 ${getHighlightColor(service.highlight)}`}>
                    {getHighlightIcon(service.highlight)}
                    {service.subtitle}
                  </Badge>
                  <div className="text-right">
                    <div className="font-display text-3xl font-black text-neon-pink">{service.price}</div>
                  </div>
                </div>
                <CardTitle className="font-chunky text-2xl font-black leading-tight text-deep-purple uppercase flex items-center gap-3">
                  <span className="text-3xl">{service.emoji}</span>
                  {service.title}
                </CardTitle>
                <CardDescription className="font-sans text-base leading-relaxed pt-3 text-cactus-green font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 relative z-10">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm text-deep-purple font-bold bg-sand-tan/50 rounded-lg p-3">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-neon-pink" />
                      {service.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-neon-pink" />
                      {service.capacity}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-black text-deep-purple uppercase tracking-wide font-sans">What You'll Get:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-deep-purple">
                          <CheckCircle className="w-4 h-4 mr-2 text-acid-green flex-shrink-0 mt-0.5" />
                          <span className="font-medium font-sans">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button 
                  className="w-full font-bold bg-neon-pink hover:bg-hot-magenta text-cream retro-shadow uppercase tracking-wide" 
                  size="lg"
                  onClick={() => onBookingClick(service.id)}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Book This Chaos! 🤘
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg font-sans text-cream/90 leading-relaxed mb-8 font-medium">
              All classes are 100% customized to your vibe and skill level. 
              Looking for laughs, epic catches, or just want to escape reality for a bit? 
              <span className="text-lime-shock font-bold">We got you covered, desert dweller! 🌵</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center bg-cream/10 rounded-2xl p-6 sticker-shadow">
                <Target className="w-12 h-12 text-lime-shock mb-4 animate-retro-bounce" />
                <h4 className="font-bold font-chunky mb-2 text-cream uppercase">Your Vibe, Your Way</h4>
                <p className="text-sm text-cream/80 font-sans">Every session is tailored to what gets you stoked</p>
              </div>
              <div className="flex flex-col items-center bg-cream/10 rounded-2xl p-6 sticker-shadow">
                <Users className="w-12 h-12 text-lime-shock mb-4 animate-retro-bounce" style={{ animationDelay: '0.5s' }} />
                <h4 className="font-bold font-chunky mb-2 text-cream uppercase">Small Groups Only</h4>
                <p className="text-sm text-cream/80 font-sans">Intimate vibes mean maximum chaos and learning</p>
              </div>
              <div className="flex flex-col items-center bg-cream/10 rounded-2xl p-6 sticker-shadow">
                <Star className="w-12 h-12 text-lime-shock mb-4 animate-retro-bounce" style={{ animationDelay: '1s' }} />
                <h4 className="font-bold font-chunky mb-2 text-cream uppercase">Premium Gear</h4>
                <p className="text-sm text-cream/80 font-sans">Top-shelf equipment for maximum fish-catching potential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}