import { ArrowRight, CheckCircle2, Shield, Wrench, Clock, Quote } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="North Coast Property Maintenance - Professional Vancouver Exteriors" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Serving Greater Vancouver & North Shore
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]"
            >
              Rugged upkeep for the <span className="text-primary">West Coast.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              From torrential rain to winter freeze, we keep your property pristine. Reliable, no-nonsense property maintenance you can trust.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" data-testid="link-hero-quote">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services" data-testid="link-hero-services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-2">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything your property needs to weather the storm.</h2>
              <p className="text-xl text-muted-foreground">Comprehensive care for residential and commercial properties.</p>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="hidden md:flex">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lawn & Landscaping",
                desc: "Mowing, edging, and seasonal cleanups to keep your green spaces looking sharp.",
                img: "/images/service-lawn.png"
              },
              {
                title: "Pressure Washing",
                desc: "Eradicate moss, algae, and grime from driveways, siding, and cedar decks.",
                img: "/images/service-wash.png"
              },
              {
                title: "Snow & Ice Control",
                desc: "Rapid response clearing for driveways and lots when the temperature drops.",
                img: "/images/service-snow.png"
              }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-background"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Trust Section */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Vancouver. <br/><span className="text-muted-foreground">Driven by reliability.</span></h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We know what Pacific Northwest weather does to a property. North Coast Property Maintenance was founded on a simple principle: show up on time, do the job right, and leave the property better than we found it. No excuses.
              </p>
              
              <ul className="space-y-6">
                {[
                  { icon: Shield, title: "Fully Licensed & Insured", desc: "Complete peace of mind for every project, big or small." },
                  { icon: Clock, title: "Reliable Scheduling", desc: "We show up when we say we will. Period." },
                  { icon: Wrench, title: "Professional Equipment", desc: "Industrial-grade gear for industrial-grade results." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-3 rounded-lg h-fit">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden border border-border">
                <img src="/images/portfolio-2.png" alt="North Coast team at work" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card border border-border p-6 rounded-xl shadow-2xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-extrabold text-primary">10+</div>
                  <div className="text-sm font-medium leading-tight">Years<br/>Experience</div>
                </div>
                <p className="text-sm text-muted-foreground">Trusted by over 500 homeowners and commercial properties across Greater Vancouver.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to get your property in shape?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Get a free, no-obligation quote for your property maintenance needs today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto">
                Request a Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold w-full sm:w-auto border-2">
              Call (604) 555-0192
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}