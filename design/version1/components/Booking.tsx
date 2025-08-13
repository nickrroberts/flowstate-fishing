import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin, Clock, Users } from "lucide-react";

export function Booking() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experienceLevel: "",
    groupSize: "",
    specialRequests: "",
  });

  const services = [
    { 
      value: "intro", 
      label: "Introduction to Fly Fishing", 
      duration: "4 hours", 
      price: "$450",
      capacity: "1-2 people"
    },
    { 
      value: "advanced", 
      label: "Advanced Technique Refinement", 
      duration: "8 hours", 
      price: "$750",
      capacity: "1-3 people"
    },
    { 
      value: "flow-state", 
      label: "Flow State Immersion", 
      duration: "2-3 days", 
      price: "$1,200/day",
      capacity: "1-2 people"
    },
  ];

  const experienceLevels = [
    { value: "beginner", label: "Complete Beginner" },
    { value: "some-experience", label: "Some Experience" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = () => {
    console.log("Booking submitted:", {
      date: selectedDate,
      service: selectedService,
      ...formData
    });
  };

  const selectedServiceDetails = services.find(s => s.value === selectedService);

  return (
    <section id="booking" className="booking-section py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-6 text-xs font-medium px-4 py-2 border-warm-beige text-warm-beige bg-forest-green/20 texture-grain">
            Reserve Your Spot
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-white">
            Book Your
            <span className="block italic text-warm-beige">Adventure</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-serif">
            Ready to discover your flow state? Select your preferred experience and 
            let's create something extraordinary together on the water.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Calendar Section */}
          <Card className="xl:col-span-1 bg-white texture-linen border-2 border-light-brown">
            <CardHeader>
              <CardTitle className="flex items-center font-display text-xl text-forest-green">
                <CalendarDays className="w-5 h-5 mr-2 text-dark-teal" />
                Select Date
              </CardTitle>
              <CardDescription className="font-serif text-olive-brown">
                Choose your preferred date for the experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return date < today || date.getDay() === 0; // Disable past dates and Sundays
                }}
                className="rounded-md border-2 border-sage-green w-full"
              />
              <div className="mt-4 space-y-2 text-sm text-olive-brown">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-sage-green" />
                  <span>Location will be confirmed based on conditions</span>
                </div>
                <p className="text-xs">
                  * Sundays unavailable. All trips weather-dependent with full rescheduling available.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="xl:col-span-2 bg-white texture-paper border-2 border-light-brown">
            <CardHeader>
              <CardTitle className="font-display text-xl text-forest-green">Experience Details</CardTitle>
              <CardDescription className="font-serif text-olive-brown">
                Tell us about yourself and what you're looking for
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Service Selection */}
              <div>
                <Label htmlFor="service" className="text-sm font-medium text-forest-green">Choose Your Experience</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="mt-2 border-sage-green">
                    <SelectValue placeholder="Select a fly fishing experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        <div className="flex flex-col">
                          <span className="font-medium text-forest-green">{service.label}</span>
                          <span className="text-xs text-olive-brown">
                            {service.duration} • {service.price} • {service.capacity}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                {selectedServiceDetails && (
                  <div className="mt-3 p-4 bg-warm-beige/30 texture-grain rounded-lg border border-sage-green">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-forest-green">{selectedServiceDetails.label}</h4>
                      <span className="font-display text-lg font-semibold text-dark-teal">
                        {selectedServiceDetails.price}
                      </span>
                    </div>
                    <div className="flex gap-4 text-sm text-olive-brown">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-sage-green" />
                        {selectedServiceDetails.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 text-sage-green" />
                        {selectedServiceDetails.capacity}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-forest-green">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    className="mt-2 border-sage-green focus:border-dark-teal"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-forest-green">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="mt-2 border-sage-green focus:border-dark-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-forest-green">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className="mt-2 border-sage-green focus:border-dark-teal"
                  />
                </div>
                <div>
                  <Label htmlFor="groupSize" className="text-forest-green">Group Size</Label>
                  <Select
                    value={formData.groupSize}
                    onValueChange={(value) => handleInputChange("groupSize", value)}
                  >
                    <SelectTrigger className="mt-2 border-sage-green">
                      <SelectValue placeholder="How many people?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Just me</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3">3 people</SelectItem>
                      <SelectItem value="4">4 people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="experience" className="text-forest-green">Your Experience Level</Label>
                <Select
                  value={formData.experienceLevel}
                  onValueChange={(value) => handleInputChange("experienceLevel", value)}
                >
                  <SelectTrigger className="mt-2 border-sage-green">
                    <SelectValue placeholder="Select your fly fishing experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="specialRequests" className="text-forest-green">Goals & Special Requests</Label>
                <Textarea
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  placeholder="What are you hoping to achieve? Any specific techniques you'd like to work on? Physical considerations? Questions about the experience?"
                  className="min-h-[120px] mt-2 border-sage-green focus:border-dark-teal"
                />
              </div>

              <Button 
                onClick={handleBooking} 
                className="w-full font-medium bg-dark-teal hover:bg-forest-green text-white texture-linen" 
                size="lg"
              >
                Request Booking
              </Button>

              <p className="text-xs text-olive-brown text-center">
                This is a booking request. Tanner will contact you within 24 hours to confirm 
                availability and discuss any specific needs for your experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}