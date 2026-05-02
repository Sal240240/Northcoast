import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import sidingDirtyImg from "@assets/Snapchat-1619335989_(1)_1777705290147.jpg";
import gutterclogImg from "@assets/Snapchat-391329889_1777705290146.jpg";

export default function Services() {
  const services = [
    {
      id: "lawn",
      title: "Lawn Care & Landscaping",
      desc: "Keep your green spaces pristine year-round with our comprehensive lawn care programs.",
      img: "/images/service-lawn.png",
      features: ["Weekly mowing & edging", "Seasonal yard cleanups", "Fertilization & weed control", "Shrub & hedge trimming"]
    },
    {
      id: "snow",
      title: "Snow Removal & Ice Control",
      desc: "Don't let winter weather stop you. We provide rapid response snow clearing for safety and accessibility.",
      img: "/images/service-snow.png",
      features: ["Driveway & walkway clearing", "Commercial lot plowing", "De-icing & salting", "24/7 storm response"]
    },
    {
      id: "washing",
      title: "Pressure Washing",
      desc: "Eradicate years of West Coast grime, moss, and algae from your property's hard surfaces.",
      img: sidingDirtyImg,
      features: ["Driveway & concrete cleaning", "Siding & exterior washing", "Cedar deck restoration", "Fence cleaning"]
    },
    {
      id: "gutter",
      title: "Gutter Cleaning & Repair",
      desc: "Protect your property from water damage with professional gutter cleaning and maintenance.",
      img: gutterclogImg,
      features: ["Complete debris removal", "Downspout flushing", "Minor leak repairs", "Condition reporting"]
    }
  ];

  return (
    <div className="py-20 bg-background text-foreground">
      <SEOHead 
        title="Property Maintenance Services Vancouver | North Coast" 
        description="Expert property maintenance services in Vancouver BC: pressure washing, gutter cleaning, snow removal, lawn care. Licensed & insured. Free quotes." 
      />
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Professional, rugged property maintenance built for the Pacific Northwest. We handle the heavy lifting so you don't have to.
          </p>
        </div>

        <div className="space-y-24 mb-32">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                <img src={service.img} alt={`North Coast Property Maintenance ${service.title.toLowerCase()} service - Vancouver BC`} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8">{service.desc}</p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/quote">
                  <Button size="lg" className="font-bold">Request Quote</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">How often should I get my gutters cleaned in Vancouver?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Vancouver's heavy rainfall and leaf drop mean most homes need gutter cleaning at least twice a year — spring and fall. Homes under trees may need more frequent service.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">What is included in a standard pressure washing service?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We clean driveways, sidewalks, patios, siding, fences, and decks. We assess the surface type and use appropriate pressure settings to avoid damage while removing moss, algae, and grime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">Do you offer maintenance programs?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes! Our recurring maintenance programs are designed for homeowners and property managers who want consistent, hassle-free upkeep. We offer monthly, bi-weekly, and weekly schedules.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">Are you licensed and insured?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Absolutely. North Coast Property Maintenance is fully licensed and insured in British Columbia, and all workers are WCB covered.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">Do you serve commercial properties?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. We work with strata corporations, property management companies, and commercial property owners across Greater Vancouver.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold">How do I get a quote?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Fill out our online form, use our Instant Quote Calculator, or call us directly at (604) 555-0192. We will respond within 24 hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}