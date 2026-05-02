import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      img: "/images/service-wash.png",
      features: ["Driveway & concrete cleaning", "Siding & exterior washing", "Cedar deck restoration", "Fence cleaning"]
    }
  ];

  return (
    <div className="py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Professional, rugged property maintenance built for the Pacific Northwest. We handle the heavy lifting so you don't have to.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
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
                <Link href="/contact">
                  <Button size="lg" className="font-bold">Request Quote</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}