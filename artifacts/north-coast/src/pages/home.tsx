import { ArrowRight, Shield, Wrench, Clock, Star, Quote } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

import sidingCleanImg from "@assets/Snapchat-1557599487_(1)_1777705290147.jpg";
import sidingDirtyImg from "@assets/Snapchat-1619335989_(1)_1777705290147.jpg";
import roofImg from "@assets/homr_1777705290146.jpg";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SEOHead 
        title="North Coast Property Maintenance | Vancouver BC" 
        description="Professional property maintenance in Vancouver BC. Pressure washing, gutter cleaning, snow removal, lawn care & more. Serving North Shore, Burnaby & Richmond. Get a free quote today." 
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img 
            src={sidingCleanImg} 
            alt="North Coast Property Maintenance siding restoration service - Vancouver BC" 
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
              <Link href="/quote" data-testid="link-hero-quote">
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
                img: sidingDirtyImg
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
                    alt={`North Coast Property Maintenance ${service.title.toLowerCase()} service - Vancouver BC`}
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

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple, hassle-free property maintenance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: 1,
                title: "Request a Free Quote",
                desc: "Fill out our form or call us. We respond within 24 hours."
              },
              {
                step: 2,
                title: "We Assess Your Property",
                desc: "We visit to understand exactly what your property needs."
              },
              {
                step: 3,
                title: "Sit Back & Relax",
                desc: "Our crew handles everything. You get updates along the way."
              }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-extrabold mb-6 border border-primary/20">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Trust Section */}
      <section className="py-24 bg-card border-y border-border">
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
                <img src={roofImg} alt="North Coast team performing roof maintenance in Vancouver BC" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background border border-border p-6 rounded-xl shadow-2xl max-w-xs hidden md:block">
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

      {/* Before / After */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">See the difference.</h2>
            <p className="text-xl text-muted-foreground">Real results from real properties across Greater Vancouver.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden group">
              <img src={sidingDirtyImg} alt="Before siding cleaning" className="w-full h-96 object-cover" />
              <div className="absolute top-4 left-4 bg-black/70 text-white text-sm font-bold px-4 py-1.5 rounded-full backdrop-blur-sm">
                Before
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img src={sidingCleanImg} alt="After siding cleaning" className="w-full h-96 object-cover" />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                After
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm font-medium">Siding restoration — North Vancouver residential property</p>
        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section className="py-24 bg-card border-y border-border" data-testid="section-testimonials">
        <div className="container px-4 md:px-6">
          {/* Header with Google rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What our customers say.</h2>
              <p className="text-xl text-muted-foreground">Trusted by homeowners and strata managers across Greater Vancouver.</p>
            </div>
            <div className="flex items-center gap-4 bg-background border border-border rounded-2xl px-6 py-4 shrink-0">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-2xl font-extrabold leading-none">4.9</p>
                <p className="text-xs text-muted-foreground mt-1">Based on 47 Google reviews</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex flex-col items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-8 w-8" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-[10px] text-muted-foreground mt-1 font-medium">Google</span>
              </div>
            </div>
          </motion.div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                location: "North Vancouver",
                date: "March 2025",
                rating: 5,
                service: "Pressure Washing",
                text: "Had my driveway and siding done before listing our house. The transformation was unbelievable — looked brand new. The team was on time, professional, and cleaned up everything after. Highly recommend to anyone in North Van."
              },
              {
                name: "Jason T.",
                location: "Burnaby",
                date: "January 2025",
                rating: 5,
                service: "Snow Removal",
                text: "Called them during that bad snowstorm in January and they were out within two hours. Cleared my whole driveway and walkways, salted everything. Super reliable and reasonably priced. Will be using them every winter."
              },
              {
                name: "Linda K.",
                location: "West Vancouver",
                date: "October 2024",
                rating: 5,
                service: "Gutter Cleaning",
                text: "Our gutters were completely blocked with leaves after the fall. North Coast came out, cleaned everything out, and found a small repair issue I didn't know about. Honest, thorough crew. Already booked them for spring."
              },
              {
                name: "Mike R.",
                location: "Vancouver",
                date: "September 2024",
                rating: 5,
                service: "Lawn Care",
                text: "Been using them for monthly lawn care since the summer. The yard has never looked better. They always show up on the scheduled day, which I really appreciate. No hassle, no excuses — just solid work every time."
              },
              {
                name: "Priya S.",
                location: "Richmond",
                date: "August 2024",
                rating: 5,
                service: "Property Maintenance",
                text: "Hired North Coast for our rental property maintenance program. It's taken so much off my plate. They keep everything tidy and flag any issues early before they become expensive problems. Great communication too."
              },
              {
                name: "David L.",
                location: "Coquitlam",
                date: "July 2024",
                rating: 4,
                service: "Pressure Washing",
                text: "Really great job on the cedar deck — it looked completely rejuvenated. Took a bit longer than quoted but the quality of work was excellent. Would use again for sure."
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-testid={`card-review-${i}`}
                className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-tight">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                  <Quote className="h-5 w-5 text-primary/30 shrink-0 mt-1" />
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        className={`h-4 w-4 ${s < review.rating ? "fill-yellow-400 text-yellow-400" : "text-border"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>

                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full w-fit">
                  {review.service}
                </span>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* Link to Google reviews */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              See all reviews on{" "}
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
                data-testid="link-google-reviews"
              >
                Google Maps
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to get your property in shape?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Get a free, no-obligation quote for your property maintenance needs today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote">
              <Button size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto">
                Request a Quote
              </Button>
            </Link>
            <a href="tel:+16045550192">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold w-full sm:w-auto border-2">
                Call (604) 555-0192
              </Button>
            </a>
          </div>
        </div>

        <div className="container px-4 md:px-6 text-center pt-8 border-t border-border/50">
          <h3 className="text-lg font-bold mb-6 text-foreground">Serving the Greater Vancouver Area</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["North Vancouver", "West Vancouver", "Vancouver", "Burnaby", "Richmond", "Coquitlam", "Port Moody", "New Westminster", "Langley", "Surrey", "Delta"].map(area => (
              <span key={area} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}