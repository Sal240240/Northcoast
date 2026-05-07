import { ArrowRight, Shield, Wrench, Clock, Star, Quote, CheckCircle2, Users, Award, ThumbsUp, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";

import sidingCleanImg from "@assets/Snapchat-1557599487_(1)_1777705290147.jpg";
import sidingDirtyImg from "@assets/Snapchat-1619335989_(1)_1777705290147.jpg";
import gutterclogImg from "@assets/Snapchat-391329889_1777705290146.jpg";
import roofImg from "@assets/homr_1777705290146.jpg";
import logoFull from "@assets/logo-text-transparent.png";
import logoBear from "@assets/logo-bear-transparent.png";
import heroimg from "/artifacts/north-coast/public/images/hero.png";

export default function Home() {
  const [quoteService, setQuoteService] = useState("");
  const [quoteName, setQuoteName] = useState("");
  const [quotePostal, setQuotePostal] = useState("");

  return (
    <div className="flex flex-col">
      <SEOHead
        title="North Coast Property Maintenance | Vancouver BC"
        description="Professional property maintenance in Vancouver BC. Pressure washing, gutter cleaning, roof moss treatment, window cleaning, snow removal, lawn care & more. Serving North Shore, Burnaby & Richmond. Get a free quote today."
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src={heroimg}
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
              <p className="text-xl text-muted-foreground">Eight specialized services for residential and commercial properties.</p>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="hidden md:flex">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Pressure Washing",
                desc: "Driveways, siding, decks, and fences restored to like-new condition.",
                img: sidingDirtyImg,
              },
              {
                title: "Gutter Cleaning",
                desc: "Full debris removal, downspout flushing, and condition reporting.",
                img: gutterclogImg,
              },
              {
                title: "Roof Moss Treatment",
                desc: "Kill moss at the root and protect your shingles long-term.",
                img: roofImg,
              },
              {
                title: "Window Cleaning",
                desc: "Streak-free interior and exterior window cleaning for any property.",
                img: "/images/service-wash.png",
              },
              {
                title: "Soft Washing",
                desc: "Low-pressure cleaning safe for painted wood, stucco, and vinyl.",
                img: sidingCleanImg,
              },
              {
                title: "Lawn & Landscaping",
                desc: "Mowing, edging, fertilization, and seasonal cleanups.",
                img: "/images/service-lawn.png",
              },
              {
                title: "Snow & Ice Control",
                desc: "Rapid response clearing and de-icing when the temperature drops.",
                img: "/images/service-snow.png",
              },
              {
                title: "Concrete Cleaning",
                desc: "Oil stains, tire marks, and embedded grime removed from driveways.",
                img: "/images/portfolio-1.png",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-background"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.img}
                    alt={`North Coast Property Maintenance ${service.title.toLowerCase()} service - Vancouver BC`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center text-primary text-sm font-medium group-hover:underline">
                    Learn more <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
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
                desc: "Fill out our form or call us. We respond within 24 hours with a no-obligation estimate."
              },
              {
                step: 2,
                title: "We Assess Your Property",
                desc: "We visit to understand exactly what your property needs and tailor a plan around it."
              },
              {
                step: 3,
                title: "Sit Back & Relax",
                desc: "Our crew handles everything. We update you along the way and clean up when finished."
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

      {/* Why Us / Trust Section — stats grid replaces image */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Vancouver. <br /><span className="text-muted-foreground">Driven by reliability.</span></h2>
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

            {/* Stats grid — replaces old roof photo */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, stat: "500+", label: "Properties Served", desc: "Homeowners and strata managers across Greater Vancouver trust us every year." },
                { icon: Award, stat: "10+", label: "Years Experience", desc: "Over a decade of rugged, reliable property care in the Pacific Northwest." },
                { icon: Star, stat: "4.9★", label: "Google Rating", desc: "Consistently rated 5 stars by homeowners from North Van to Richmond." },
                { icon: ThumbsUp, stat: "100%", label: "Licensed & Insured", desc: "WCB coverage, full liability insurance, and BC business licensing on every job." },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-3"
                >
                  <div className="bg-primary/10 p-3 rounded-lg w-fit">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-extrabold text-primary">{card.stat}</div>
                  <div className="font-bold text-foreground">{card.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
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
            <div className="relative rounded-2xl overflow-hidden">
              <img src={sidingDirtyImg} alt="Before siding cleaning — moldy algae-covered siding" className="w-full h-96 object-cover" />
              <div className="absolute top-4 left-4 bg-black/70 text-white text-sm font-bold px-4 py-1.5 rounded-full backdrop-blur-sm">
                Before
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img src={sidingCleanImg} alt="After siding cleaning — bright clean restored siding" className="w-full h-96 object-cover" />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                After
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm font-medium">Siding restoration — North Vancouver residential property</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card border-y border-border" data-testid="section-about">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Full logo featured */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-background border border-border rounded-3xl p-12 gap-8"
            >
              <img
                src={logoBear}
                alt="North Coast Property Maintenance polar bear logo"
                className="w-40 h-40 object-contain"
              />
              <img
                src={logoFull}
                alt="North Coast Property Maintenance full logo"
                className="w-full max-w-xs object-contain dark:invert-0 invert"
              />
              <div className="flex items-center gap-6 pt-4 border-t border-border w-full justify-center">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-primary">10+</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Years</div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Properties</div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-primary">4.9★</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Google</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Locally owned.<br /><span className="text-primary">Pacific Northwest tough.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                North Coast Property Maintenance was built on a simple promise: show up, do the job right, and leave your property better than we found it. We've been serving Greater Vancouver homeowners and strata managers for over a decade — owner-operated from day one.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We understand what the Pacific Northwest climate demands of a property. Our crews are trained, equipped, and ready for every job from a quick gutter flush to a full exterior restoration.
              </p>
              <ul className="space-y-3 mb-8">
                {["Owner-operated, never subcontracted", "Fully licensed, insured & WCB covered", "Eco-friendly products where possible", "Transparent pricing, no hidden fees"].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button size="lg" variant="outline" className="font-bold border-2">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section className="py-24 bg-background" data-testid="section-testimonials">
        <div className="container px-4 md:px-6">
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
            <div className="flex items-center gap-4 bg-card border border-border rounded-2xl px-6 py-4 shrink-0">
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
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-[10px] text-muted-foreground mt-1 font-medium">Google</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", location: "North Vancouver", date: "March 2025", rating: 5, service: "Pressure Washing", text: "Had my driveway and siding done before listing our house. The transformation was unbelievable — looked brand new. The team was on time, professional, and cleaned up everything after. Highly recommend to anyone in North Van." },
              { name: "Jason T.", location: "Burnaby", date: "January 2025", rating: 5, service: "Snow Removal", text: "Called them during that bad snowstorm in January and they were out within two hours. Cleared my whole driveway and walkways, salted everything. Super reliable and reasonably priced. Will be using them every winter." },
              { name: "Linda K.", location: "West Vancouver", date: "October 2024", rating: 5, service: "Gutter Cleaning", text: "Our gutters were completely blocked with leaves after the fall. North Coast came out, cleaned everything out, and found a small repair issue I didn't know about. Honest, thorough crew. Already booked them for spring." },
              { name: "Mike R.", location: "Vancouver", date: "September 2024", rating: 5, service: "Lawn Care", text: "Been using them for monthly lawn care since the summer. The yard has never looked better. They always show up on the scheduled day, which I really appreciate. No hassle, no excuses — just solid work every time." },
              { name: "Priya S.", location: "Richmond", date: "August 2024", rating: 5, service: "Property Maintenance", text: "Hired North Coast for our rental property maintenance program. It's taken so much off my plate. They keep everything tidy and flag any issues early before they become expensive problems. Great communication too." },
              { name: "David L.", location: "Coquitlam", date: "July 2024", rating: 4, service: "Pressure Washing", text: "Really great job on the cedar deck — it looked completely rejuvenated. Took a bit longer than quoted but the quality of work was excellent. Would use again for sure." }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-testid={`card-review-${i}`}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
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
                      <Star key={s} className={`h-4 w-4 ${s < review.rating ? "fill-yellow-400 text-yellow-400" : "text-border"}`} />
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

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              See all reviews on{" "}
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline" data-testid="link-google-reviews">
                Google Maps
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Quick Quote Section */}
      <section className="py-24 bg-primary relative overflow-hidden" data-testid="section-quick-quote">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/service-wash.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">Get Your Free Quote</h2>
            <p className="text-xl text-primary-foreground/80">Tell us about your property and we'll get back to you within 24 hours with a no-obligation estimate.</p>
          </div>
          <div className="max-w-2xl mx-auto bg-background rounded-2xl p-8 shadow-2xl border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Your Name</label>
                <input
                  data-testid="input-quick-name"
                  type="text"
                  value={quoteName}
                  onChange={(e) => setQuoteName(e.target.value)}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Postal Code</label>
                <input
                  data-testid="input-quick-postal"
                  type="text"
                  value={quotePostal}
                  onChange={(e) => setQuotePostal(e.target.value)}
                  placeholder="V7M 0A1"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-foreground">Service Needed</label>
              <select
                data-testid="select-quick-service"
                value={quoteService}
                onChange={(e) => setQuoteService(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="">Select a service...</option>
                <option value="pressure">Pressure Washing</option>
                <option value="soft">Soft Washing</option>
                <option value="gutter">Gutter Cleaning</option>
                <option value="roof">Roof Moss Treatment</option>
                <option value="window">Window Cleaning</option>
                <option value="lawn">Lawn Care & Landscaping</option>
                <option value="snow">Snow Removal</option>
                <option value="concrete">Concrete & Driveway Cleaning</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/quote" className="flex-1" data-testid="link-quick-quote-full">
                <Button size="lg" className="w-full font-bold h-12">
                  Get Full Instant Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+16045550192" data-testid="link-quick-call">
                <Button size="lg" variant="outline" className="w-full font-bold h-12 border-2">
                  Call Us Directly
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">No obligation. We respond within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-24 bg-background" data-testid="section-map">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <MapPin className="h-4 w-4" /> Service Area
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Proudly serving Greater Vancouver</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Based in North Vancouver, we cover the entire Metro Vancouver region. Whether you're in West Van, Burnaby, Richmond, or Coquitlam — we've got you covered.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["North Vancouver", "West Vancouver", "Vancouver", "Burnaby", "Richmond", "Coquitlam", "Port Moody", "New Westminster", "Langley", "Surrey", "Delta"].map(area => (
                  <span key={area} className="px-3 py-1.5 bg-card border border-border rounded-full text-sm font-medium text-foreground">
                    {area}
                  </span>
                ))}
              </div>
              <Link href="/contact">
                <Button size="lg" className="font-bold">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-[420px]">
              <iframe
                title="North Coast Property Maintenance Service Area — Greater Vancouver BC"
                src="https://maps.google.com/maps?q=North+Vancouver%2C+BC+Canada&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="iframe-google-map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-card border-t border-border">
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
              <span key={area} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
