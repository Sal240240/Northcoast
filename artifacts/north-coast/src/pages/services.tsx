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
import sidingCleanImg from "@assets/Snapchat-1557599487_(1)_1777705290147.jpg";
import gutterclogImg from "@assets/Snapchat-391329889_1777705290146.jpg";
import roofImg from "@assets/homr_1777705290146.jpg";

export default function Services() {
  const services = [
    {
      id: "pressure",
      title: "Pressure Washing",
      desc: "Eradicate years of West Coast grime, moss, and algae from your property's hard surfaces. Our commercial-grade equipment restores driveways, siding, fences, and decks to like-new condition.",
      img: sidingDirtyImg,
      features: ["Driveway & concrete cleaning", "Siding & exterior washing", "Cedar deck restoration", "Fence & retaining wall cleaning", "Patio & walkway restoration"]
    },
    {
      id: "soft-wash",
      title: "Soft Washing & Exterior Cleaning",
      desc: "Low-pressure soft washing safely removes algae, mold, lichen, and organic staining from delicate surfaces like painted wood, stucco, and vinyl siding without causing damage.",
      img: sidingCleanImg,
      features: ["Painted wood & vinyl siding", "Stucco exterior cleaning", "Roof soft washing", "Eco-friendly biodegradable solutions", "Safe for plants & landscaping"]
    },
    {
      id: "gutter",
      title: "Gutter Cleaning & Repair",
      desc: "Protect your property from water damage with professional gutter cleaning and maintenance. We clear debris, flush downspouts, and flag any issues before they become costly repairs.",
      img: gutterclogImg,
      features: ["Complete debris removal", "Downspout flushing & clearing", "Minor leak repairs", "Condition reporting", "Gutter guard installation available"]
    },
    {
      id: "roof",
      title: "Roof Moss Treatment & Cleaning",
      desc: "Vancouver's wet climate accelerates moss and algae growth on roofs, which shortens shingle lifespan and voids warranties. Our treatments kill moss at the root and protect your roof long-term.",
      img: roofImg,
      features: ["Moss & algae treatment", "Soft wash roof cleaning", "Zinc strip installation", "Annual maintenance programs", "All roofing material types"]
    },
    {
      id: "window",
      title: "Window Cleaning",
      desc: "Crystal-clear windows make a dramatic difference to your home's appearance and natural light. We clean interior and exterior windows on residential and commercial properties.",
      img: "/images/service-wash.png",
      features: ["Interior & exterior windows", "Screen cleaning & reinstall", "Track & frame wiping", "Residential & commercial", "High-reach water-fed pole system"]
    },
    {
      id: "lawn",
      title: "Lawn Care & Landscaping",
      desc: "Keep your green spaces pristine year-round with our comprehensive lawn care programs tailored for the Pacific Northwest climate.",
      img: "/images/service-lawn.png",
      features: ["Weekly mowing & edging", "Seasonal yard cleanups", "Fertilization & weed control", "Shrub & hedge trimming", "Garden bed maintenance"]
    },
    {
      id: "snow",
      title: "Snow Removal & Ice Control",
      desc: "Don't let winter weather stop you. We provide rapid response snow clearing for safety and accessibility when the temperature drops.",
      img: "/images/service-snow.png",
      features: ["Driveway & walkway clearing", "Commercial lot plowing", "De-icing & sand/salt application", "24/7 storm response", "Seasonal contracts available"]
    },
    {
      id: "concrete",
      title: "Concrete & Driveway Cleaning",
      desc: "Oil stains, tire marks, algae, and years of embedded grime are no match for our surface cleaning equipment. We restore concrete driveways, parkades, and commercial lots.",
      img: "/images/portfolio-1.png",
      features: ["Driveway stain removal", "Parkade & parking lot cleaning", "Sidewalk & pathway restoration", "Oil & grease treatment", "Commercial surface cleaning"]
    },
  ];

  return (
    <div className="py-20 bg-background text-foreground">
      <SEOHead
        title="Property Maintenance Services Vancouver | North Coast"
        description="Expert property maintenance services in Vancouver BC: pressure washing, soft washing, gutter cleaning, roof moss treatment, window cleaning, snow removal, lawn care. Licensed & insured. Free quotes."
      />
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Professional, rugged property maintenance built for the Pacific Northwest. Eight specialized services to keep every inch of your property in peak condition.
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
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
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
              <AccordionTrigger className="text-left font-semibold">What is the difference between pressure washing and soft washing?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Pressure washing uses high water pressure to blast away dirt and grime from hard surfaces like concrete and stone. Soft washing uses low pressure combined with eco-friendly cleaning solutions to safely clean delicate surfaces like painted wood, stucco, vinyl siding, and roofing without causing damage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">How often does roof moss need to be treated in Vancouver?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Most Vancouver roofs benefit from a moss treatment every 1–2 years, depending on tree coverage and roof pitch. We recommend pairing treatments with zinc strip installation for long-term prevention. Ignoring moss growth can void roofing warranties and dramatically shorten shingle life.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">Do you offer maintenance programs?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes! Our recurring maintenance programs are designed for homeowners and property managers who want consistent, hassle-free upkeep. We offer monthly, bi-weekly, and weekly schedules for lawn care, and seasonal programs for gutter cleaning, window washing, and exterior maintenance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">Are you licensed and insured?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Absolutely. North Coast Property Maintenance is fully licensed and insured in British Columbia, and all workers are WCB covered. We carry full liability insurance for complete peace of mind on every project.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold">Do you serve commercial properties?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. We work with strata corporations, property management companies, retail plazas, and commercial property owners across Greater Vancouver. Commercial maintenance contracts are available for regular scheduled service.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-semibold">How do I get a quote?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Fill out our online form, use our Instant Quote Calculator, or call us directly at (604) 555-0192. We will respond within 24 hours with a free, no-obligation estimate.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
