import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, Users, Target, Star, CheckCircle } from "lucide-react";

interface ServicesProps {
  onBookingClick: (serviceId: string) => void;
}

export function Services({ onBookingClick }: ServicesProps) {
  const services = [
    {
      id: "intro",
      title: "Introduction to Fly Fishing",
      subtitle: "Perfect for Beginners",
      duration: "Half Day (4 hours)",
      capacity: "1-2 people",
      price: "$450",
      description: "Learn the fundamentals of fly fishing with comprehensive instruction on casting, reading water, and fly selection.",
      features: [
        "Basic casting instruction",
        "Equipment introduction",
        "Water reading fundamentals", 
        "Fly selection guidance",
        "All equipment provided",
        "Refreshments included"
      ],
      popular: false,
      highlight: "beginner"
    },
    {
      id: "advanced",
      title: "Advanced Technique Refinement",
      subtitle: "For Experienced Anglers",
      duration: "Full Day (8 hours)",
      capacity: "1-3 people",
      price: "$750",
      description: "Elevate your skills with advanced casting techniques, presentation refinement, and tactical approaches to challenging waters.",
      features: [
        "Advanced casting techniques",
        "Presentation refinement",
        "Tactical water approaches",
        "Entomology education",
        "Equipment optimization",
        "Lunch & refreshments",
        "Photo documentation"
      ],
      popular: true,
      highlight: "advanced"
    },
    {
      id: "flow-state",
      title: "Flow State Immersion",
      subtitle: "The Complete Experience",
      duration: "Multi-Day (2-3 days)",
      capacity: "1-2 people",
      price: "$1,200/day",
      description: "A transformative multi-day journey focusing on finding your flow state through mindful fishing practices and deep water connection.",
      features: [
        "Multi-river exploration",
        "Mindfulness integration",
        "Photography workshop",
        "Campfire discussions",
        "All meals included",
        "Premium accommodation",
        "Personal development focus"
      ],
      popular: false,
      highlight: "premium"
    },
  ];

  const getHighlightColor = (highlight: string) => {
    switch(highlight) {
      case 'beginner': return 'bg-sage-green text-white border-sage-green';
      case 'advanced': return 'bg-dark-teal text-white border-dark-teal';
      case 'premium': return 'bg-burnt-orange text-white border-burnt-orange';
      default: return 'bg-light-brown text-white border-light-brown';
    }
  };

  return (
    <section id="services" className="services-section py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-6 text-xs font-medium px-4 py-2 border-dark-teal text-dark-teal bg-white">
            Guided Experiences
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-forest-green">
            Fly Casting
            <span className="block italic text-dark-teal">Lessons</span>
          </h2>
          <p className="text-xl md:text-2xl text-olive-brown max-w-3xl mx-auto leading-relaxed font-serif">
            Tailored experiences for every skill level. From your first cast to mastering 
            advanced presentations, each session is designed to deepen your connection with the water.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {services.map((service, index) => (
            <Card key={index} className={`relative group hover:shadow-xl transition-all duration-300 bg-white border-2 ${service.popular ? 'border-burnt-orange shadow-lg scale-105' : 'border-light-brown hover:scale-105'}`}>
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-burnt-orange text-white px-4 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className={`text-xs font-medium px-3 py-1 ${getHighlightColor(service.highlight)}`}>
                    {service.subtitle}
                  </Badge>
                  <div className="text-right">
                    <div className="font-display text-2xl font-semibold text-dark-teal">{service.price}</div>
                  </div>
                </div>
                <CardTitle className="font-display text-xl font-semibold leading-tight text-forest-green">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-serif text-base leading-relaxed pt-2 text-olive-brown">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm text-olive-brown">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-sage-green" />
                      {service.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-sage-green" />
                      {service.capacity}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-forest-green uppercase tracking-wide">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-olive-brown">
                          <CheckCircle className="w-4 h-4 mr-2 text-sage-green flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button 
                  className="w-full font-medium bg-dark-teal hover:bg-forest-green text-white" 
                  size="lg"
                  onClick={() => onBookingClick(service.id)}
                >
                  Book This Experience
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg font-serif text-olive-brown leading-relaxed mb-8">
              All experiences are customized to your skill level and interests. 
              Whether you're seeking adventure, meditation, or mastery, we'll find your perfect flow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Target className="w-8 h-8 text-burnt-orange mb-3" />
                <h4 className="font-medium mb-2 text-forest-green">Personalized Approach</h4>
                <p className="text-sm text-olive-brown">Every lesson adapted to your goals and experience level</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-burnt-orange mb-3" />
                <h4 className="font-medium mb-2 text-forest-green">Small Groups</h4>
                <p className="text-sm text-olive-brown">Intimate sessions ensure personal attention and faster learning</p>
              </div>
              <div className="flex flex-col items-center">
                <Star className="w-8 h-8 text-burnt-orange mb-3" />
                <h4 className="font-medium mb-2 text-forest-green">Premium Equipment</h4>
                <p className="text-sm text-olive-brown">High-quality rods, reels, and flies provided for optimal experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}