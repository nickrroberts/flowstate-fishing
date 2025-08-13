import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { CalendarDays, Clock, Users, MapPin, CheckCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function BookingModal({ isOpen, onClose, preselectedService }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>(preselectedService || "");
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
      capacity: "1-2 people",
      description: "Perfect for beginners wanting to learn the fundamentals"
    },
    { 
      value: "advanced", 
      label: "Advanced Technique Refinement", 
      duration: "8 hours", 
      price: "$750",
      capacity: "1-3 people",
      description: "Refine your skills and master advanced techniques"
    },
    { 
      value: "flow-state", 
      label: "Flow State Immersion", 
      duration: "2-3 days", 
      price: "$1,200/day",
      capacity: "1-2 people",
      description: "Deep immersion experience for ultimate mastery"
    },
  ];

  const timeSlots = [
    { value: "6:00", label: "6:00 AM - Early Morning" },
    { value: "8:00", label: "8:00 AM - Morning" },
    { value: "12:00", label: "12:00 PM - Midday" },
    { value: "2:00", label: "2:00 PM - Afternoon" },
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

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBooking = () => {
    console.log("Booking submitted:", {
      date: selectedDate,
      time: selectedTime,
      service: selectedService,
      ...formData
    });
    setCurrentStep(4); // Show confirmation
  };

  const resetModal = () => {
    setCurrentStep(1);
    setSelectedDate(undefined);
    setSelectedTime("");
    setSelectedService(preselectedService || "");
    setFormData({
      name: "",
      email: "",
      phone: "",
      experienceLevel: "",
      groupSize: "",
      specialRequests: "",
    });
    onClose();
  };

  const selectedServiceDetails = services.find(s => s.value === selectedService);

  // Update selected service when preselected service changes
  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  const isStep1Valid = selectedDate && selectedService && selectedTime;
  const isStep2Valid = formData.name && formData.email && formData.phone && formData.experienceLevel;

  return (
    <Dialog open={isOpen} onOpenChange={resetModal}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {currentStep === 4 ? "Booking Confirmed!" : "Book Your Flow State Experience"}
          </DialogTitle>
          <DialogDescription className="font-serif">
            {currentStep === 4 
              ? "We'll be in touch within 24 hours to finalize the details." 
              : "Let's get you on the water for an unforgettable experience."
            }
          </DialogDescription>
        </DialogHeader>

        {/* Progress Steps */}
        {currentStep < 4 && (
          <div className="flex items-center justify-between mb-6 px-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${currentStep >= step 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                  }
                `}>
                  {step}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step === 1 && 'Date & Service'}
                  {step === 2 && 'Your Details'}
                  {step === 3 && 'Review & Book'}
                </span>
                {step < 3 && <div className="w-12 h-px bg-border mx-4" />}
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Date, Time & Service Selection */}
        {currentStep === 1 && (
          <div className="space-y-6">
            {/* Date Selection */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CalendarDays className="w-5 h-5 mr-2 text-primary" />
                  <h3 className="font-display text-lg font-semibold">Select Date</h3>
                </div>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today || date.getDay() === 0; // Disable past dates and Sundays
                    }}
                    className="rounded-md border"
                  />
                </div>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Location confirmed based on conditions</span>
                  </div>
                  <p className="text-xs">
                    * Sundays unavailable. Weather-dependent with full rescheduling available.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Selection */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Choose Experience</h3>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a fly fishing experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        <div className="flex flex-col text-left">
                          <span className="font-medium">{service.label}</span>
                          <span className="text-xs text-muted-foreground">
                            {service.duration} • {service.price} • {service.capacity}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                {selectedServiceDetails && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{selectedServiceDetails.label}</h4>
                      <span className="font-display text-lg font-semibold text-primary">
                        {selectedServiceDetails.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {selectedServiceDetails.description}
                    </p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {selectedServiceDetails.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {selectedServiceDetails.capacity}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Time Selection */}
            {selectedService && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <h3 className="font-display text-lg font-semibold">Preferred Time</h3>
                  </div>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select start time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot.value} value={slot.value}>
                          {slot.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            )}

            <div className="flex justify-end">
              <Button 
                onClick={handleNext} 
                disabled={!isStep1Valid}
                className="px-8"
              >
                Next: Your Details
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Personal Information */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="groupSize">Group Size</Label>
                <Select
                  value={formData.groupSize}
                  onValueChange={(value) => handleInputChange("groupSize", value)}
                >
                  <SelectTrigger className="mt-2">
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
              <Label htmlFor="experience">Your Experience Level *</Label>
              <Select
                value={formData.experienceLevel}
                onValueChange={(value) => handleInputChange("experienceLevel", value)}
              >
                <SelectTrigger className="mt-2">
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
              <Label htmlFor="specialRequests">Goals & Special Requests</Label>
              <Textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                placeholder="What are you hoping to achieve? Any specific techniques you'd like to work on?"
                className="min-h-[120px] mt-2"
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button 
                onClick={handleNext} 
                disabled={!isStep2Valid}
                className="px-8"
              >
                Review Booking
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Confirm */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Booking Summary</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-muted-foreground">Experience</Label>
                      <p className="font-medium">{selectedServiceDetails?.label}</p>
                      <p className="text-sm text-muted-foreground">{selectedServiceDetails?.description}</p>
                    </div>
                    
                    <div>
                      <Label className="text-muted-foreground">Date & Time</Label>
                      <p className="font-medium">
                        {selectedDate?.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Starting at {timeSlots.find(slot => slot.value === selectedTime)?.label}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-muted-foreground">Contact Information</Label>
                      <p className="font-medium">{formData.name}</p>
                      <p className="text-sm text-muted-foreground">{formData.email}</p>
                      <p className="text-sm text-muted-foreground">{formData.phone}</p>
                    </div>
                    
                    <div>
                      <Label className="text-muted-foreground">Experience Level</Label>
                      <p className="font-medium">
                        {experienceLevels.find(level => level.value === formData.experienceLevel)?.label}
                      </p>
                      {formData.groupSize && (
                        <p className="text-sm text-muted-foreground">
                          Group size: {formData.groupSize} {formData.groupSize === "1" ? "person" : "people"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {formData.specialRequests && (
                  <div className="mt-4 pt-4 border-t">
                    <Label className="text-muted-foreground">Special Requests</Label>
                    <p className="text-sm mt-1">{formData.specialRequests}</p>
                  </div>
                )}

                <div className="mt-6 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-display text-lg font-semibold">Total Investment</span>
                    <span className="font-display text-2xl font-bold text-primary">
                      {selectedServiceDetails?.price}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Final pricing confirmed upon booking. Weather guarantee included.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button onClick={handleBooking} className="px-8">
                Confirm Booking Request
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 4 && (
          <div className="text-center space-y-6 py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <div>
              <h3 className="font-display text-xl font-semibold mb-2">Booking Request Submitted!</h3>
              <p className="text-muted-foreground font-serif">
                Thank you for choosing Flow State Fishing. Tanner will contact you within 24 hours 
                to confirm availability and discuss any final details for your experience.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 text-left max-w-md mx-auto">
              <h4 className="font-medium mb-2">What happens next?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Personal consultation call to discuss your goals</li>
                <li>• Location selection based on current conditions</li>
                <li>• Equipment recommendations and preparation tips</li>
                <li>• Weather monitoring and backup date coordination</li>
              </ul>
            </div>

            <Button onClick={resetModal} variant="outline" className="px-8">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}