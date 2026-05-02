import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building, Home, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const basePrices = {
  lawn: { min: 80, max: 150, label: "Lawn Care & Landscaping" },
  snow: { min: 100, max: 200, label: "Snow Removal & Ice Control" },
  pressure: { min: 200, max: 400, label: "Pressure Washing" },
  gutter: { min: 150, max: 250, label: "Gutter Cleaning & Repair" },
  handyman: { min: 120, max: 200, label: "Handyman Services" },
  inspection: { min: 200, max: 300, label: "Property Inspection Program" },
};

const sizeMultipliers = {
  small: { value: 1, label: "Small (under 1,000 sq ft)" },
  medium: { value: 1.4, label: "Medium (1,000–2,500 sq ft)" },
  large: { value: 2, label: "Large (2,500–5,000 sq ft)" },
  estate: { value: 3, label: "Estate (5,000+ sq ft)" },
};

const frequencyDiscounts = {
  onetime: { value: 1, label: "One-time visit" },
  monthly: { value: 0.9, label: "Monthly" },
  biweekly: { value: 0.85, label: "Bi-weekly" },
  weekly: { value: 0.8, label: "Weekly" },
};

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  message: z.string().optional(),
});

export default function Quote() {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState<"residential" | "commercial" | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [propertySize, setPropertySize] = useState<keyof typeof sizeMultipliers | null>(null);
  const [frequency, setFrequency] = useState<keyof typeof frequencyDiscounts | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const calculateEstimate = () => {
    if (!propertySize || !frequency || selectedServices.length === 0) return { min: 0, max: 0 };
    
    let totalMin = 0;
    let totalMax = 0;
    
    selectedServices.forEach(service => {
      const base = basePrices[service as keyof typeof basePrices];
      if (base) {
        totalMin += base.min;
        totalMax += base.max;
      }
    });

    const sizeMult = sizeMultipliers[propertySize].value;
    const freqMult = frequencyDiscounts[frequency].value;

    return {
      min: Math.round(totalMin * sizeMult * freqMult),
      max: Math.round(totalMax * sizeMult * freqMult),
    };
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitted(true);
  };

  const estimate = calculateEstimate();

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h2 className="text-3xl font-bold mb-6">What type of property?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                data-testid="btn-type-residential"
                onClick={() => setPropertyType("residential")}
                className={`p-8 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-4 ${
                  propertyType === "residential" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                }`}
              >
                <Home className={`h-12 w-12 ${propertyType === "residential" ? "text-primary" : "text-muted-foreground"}`} />
                <span className="text-xl font-bold">Residential</span>
              </button>
              <button
                data-testid="btn-type-commercial"
                onClick={() => setPropertyType("commercial")}
                className={`p-8 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-4 ${
                  propertyType === "commercial" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                }`}
              >
                <Building className={`h-12 w-12 ${propertyType === "commercial" ? "text-primary" : "text-muted-foreground"}`} />
                <span className="text-xl font-bold">Commercial</span>
              </button>
            </div>
            <div className="mt-8 flex justify-end">
              <Button size="lg" onClick={nextStep} disabled={!propertyType} data-testid="btn-next-1">
                Next Step <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h2 className="text-3xl font-bold mb-6">Select Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(basePrices).map(([key, { label }]) => (
                <button
                  key={key}
                  data-testid={`btn-service-${key}`}
                  onClick={() => handleServiceToggle(key)}
                  className={`p-6 rounded-xl border-2 transition-all text-left flex items-center justify-between ${
                    selectedServices.includes(key) ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="font-semibold">{label}</span>
                  {selectedServices.includes(key) && <CheckCircle2 className="h-5 w-5 text-primary" />}
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
              <Button size="lg" variant="outline" onClick={prevStep} data-testid="btn-prev-2">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back
              </Button>
              <Button size="lg" onClick={nextStep} disabled={selectedServices.length === 0} data-testid="btn-next-2">
                Next Step <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h2 className="text-3xl font-bold mb-6">Property Size</h2>
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(sizeMultipliers).map(([key, { label }]) => (
                <button
                  key={key}
                  data-testid={`btn-size-${key}`}
                  onClick={() => setPropertySize(key as keyof typeof sizeMultipliers)}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    propertySize === key ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="font-semibold text-lg">{label}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
              <Button size="lg" variant="outline" onClick={prevStep} data-testid="btn-prev-3">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back
              </Button>
              <Button size="lg" onClick={nextStep} disabled={!propertySize} data-testid="btn-next-3">
                Next Step <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h2 className="text-3xl font-bold mb-6">Service Frequency</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(frequencyDiscounts).map(([key, { label }]) => (
                <button
                  key={key}
                  data-testid={`btn-freq-${key}`}
                  onClick={() => setFrequency(key as keyof typeof frequencyDiscounts)}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    frequency === key ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="font-semibold text-lg">{label}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
              <Button size="lg" variant="outline" onClick={prevStep} data-testid="btn-prev-4">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back
              </Button>
              <Button size="lg" onClick={nextStep} disabled={!frequency} data-testid="btn-next-4">
                View Estimate <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <div className="bg-card border border-border rounded-2xl p-8 mb-8 text-center">
              <h2 className="text-2xl font-bold mb-6">Quote Summary</h2>
              
              <div className="bg-background/50 border border-border rounded-xl p-6 mb-8 text-left max-w-lg mx-auto">
                <h4 className="font-bold text-lg border-b border-border pb-2 mb-4">Selected Options</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Property Type:</span>
                    <span className="font-medium capitalize">{propertyType}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Property Size:</span>
                    <span className="font-medium">{sizeMultipliers[propertySize!].label}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Service Frequency:</span>
                    <span className="font-medium">{frequencyDiscounts[frequency!].label}</span>
                  </li>
                  <li className="flex justify-between pt-2 border-t border-border">
                    <span className="text-muted-foreground">Services:</span>
                    <span className="font-medium text-right">
                      {selectedServices.map(s => basePrices[s as keyof typeof basePrices].label).join(", ")}
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mb-2">Estimated Investment</h3>
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
                ${estimate.min} – ${estimate.max}
              </div>
              <p className="text-muted-foreground text-sm">
                *Final quote provided after on-site assessment. Based on {frequencyDiscounts[frequency!].label.toLowerCase()} frequency.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Get Your Official Quote</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(604) 555-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Details (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any specific issues or areas of focus..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-between items-center pt-4">
                    <Button type="button" variant="ghost" onClick={prevStep} data-testid="btn-prev-5">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button type="submit" size="lg" className="font-bold px-8" data-testid="btn-submit-quote">
                      Request Official Quote
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="py-20 min-h-screen bg-background">
      <SEOHead 
        title="Get an Instant Quote | North Coast Property Maintenance" 
        description="Get an instant price estimate for property maintenance in Vancouver BC. Lawn care, pressure washing, gutter cleaning, snow removal — online quote calculator." 
      />
      <div className="container max-w-3xl px-4 md:px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Instant Quote Calculator</h1>
          <p className="text-xl text-muted-foreground">Get an estimated price for your property maintenance needs in minutes.</p>
        </div>

        {!isSubmitted ? (
          <>
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`text-sm font-bold ${step >= i ? "text-primary" : "text-muted-foreground"}`}>
                    Step {i}
                  </div>
                ))}
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: "20%" }}
                  animate={{ width: `${(step / 5) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="bg-card border border-border rounded-2xl p-12 text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you! We'll be in touch within 24 hours to schedule your official on-site assessment.
            </p>
            <Button size="lg" onClick={() => window.location.href = '/'} className="font-bold">
              Return Home
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}