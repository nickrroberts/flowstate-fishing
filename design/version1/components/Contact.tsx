import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call or Text",
      content: "(555) 123-FISH",
      description: "Available 8am - 6pm",
      action: "tel:+15551234347"
    },
    {
      icon: Mail,
      title: "Email",
      content: "tanner@flowstatefishing.com",
      description: "Response within 24 hours",
      action: "mailto:tanner@flowstatefishing.com"
    },
    {
      icon: MapPin,
      title: "Based in",
      content: "Santa Fe, New Mexico",
      description: "Multiple river systems"
    },
    {
      icon: Clock,
      title: "Season",
      content: "April - October",
      description: "Peak season May - September"
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-6 text-xs font-medium px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Let's Plan Your
            <span className="block italic text-primary">Perfect Day</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-serif">
            Have questions about techniques, locations, or what to expect? 
            I'm here to help you prepare for an unforgettable experience on the water.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <info.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg font-display">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.action ? (
                  <a 
                    href={info.action}
                    className="block font-medium text-foreground hover:text-primary transition-colors mb-2"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="font-medium mb-2">{info.content}</p>
                )}
                <CardDescription className="font-serif">{info.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social & Communication */}
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl md:text-3xl mb-6">Stay Connected</h3>
          <p className="text-lg font-serif text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow along for daily water reports, technique tips, and glimpses into 
            the fly fishing lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="font-medium">
              <Instagram className="w-5 h-5 mr-2" />
              @flowstatefishingllc
            </Button>
            <Button variant="outline" size="lg" className="font-medium">
              <MessageCircle className="w-5 h-5 mr-2" />
              Text for Quick Response
            </Button>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12">
          <h3 className="font-display text-2xl mb-8 text-center">Essential Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium mb-3">Weather Policy</h4>
              <p className="text-sm text-muted-foreground font-serif leading-relaxed">
                Safety first, always. Trips may be rescheduled for unsafe conditions. 
                Full refunds available for weather cancellations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium mb-3">What's Included</h4>
              <p className="text-sm text-muted-foreground font-serif leading-relaxed">
                Premium equipment, flies, instruction, and refreshments. 
                You'll need a valid fishing license and appropriate clothing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium mb-3">Booking Policy</h4>
              <p className="text-sm text-muted-foreground font-serif leading-relaxed">
                48-hour notice preferred for changes. Emergency situations 
                handled individually. Deposit required to secure dates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}