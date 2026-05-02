import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import roofImg from "@assets/homr_1777705290146.jpg";

export default function About() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <SEOHead 
        title="About North Coast Property Maintenance | Vancouver BC" 
        description="Learn about North Coast Property Maintenance. Locally owned, owner-operated, and proudly serving the Greater Vancouver Area." 
      />
      
      {/* Section 1 - Hero */}
      <section className="py-24 md:py-32 bg-card border-b border-border">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Locally owned.<br/><span className="text-primary">Pacific Northwest tough.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Based in Vancouver. Owner-operated. Committed to quality without shortcuts.
          </p>
        </div>
      </section>

      {/* Section 2 - Our Story */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  North Coast Property Maintenance was founded on a simple premise: finding reliable, high-quality property care in Vancouver shouldn't be difficult. After seeing too many property owners deal with no-shows, hidden fees, and cut corners, we decided to build a different kind of company.
                </p>
                <p>
                  We are proudly owner-operated, meaning the people you speak with are often the ones on-site ensuring the job is done right. We understand what the Pacific Northwest climate demands of a property, and we bring the equipment, expertise, and grit needed to keep your home or business looking its best.
                </p>
                <p>
                  Our promise is simple: we show up on time, we do exactly what we say we're going to do, and we don't leave until the job meets our strict standards.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3] lg:aspect-square">
              <img src={roofImg} alt="North Coast team working on roof in Vancouver" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Our Values */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide every project we take on.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Reliability", desc: "We show up when we say we will." },
              { title: "Quality", desc: "We don't cut corners — ever." },
              { title: "Honesty", desc: "Transparent pricing, no surprises." },
              { title: "Safety", desc: "Fully licensed, insured, WCB covered." },
              { title: "Community", desc: "Proudly serving Vancouver families." },
              { title: "Environment", desc: "Eco-conscious cleaning products." }
            ].map((value, i) => (
              <div key={i} className="bg-background border border-border p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Service Areas */}
      <section className="py-24">
        <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">Areas We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["North Vancouver", "West Vancouver", "Vancouver", "Burnaby", "Richmond", "Coquitlam", "Port Moody", "New Westminster", "Langley", "Surrey", "Delta"].map((area) => (
              <span key={area} className="px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-full text-lg font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Stats Row */}
      <section className="py-20 bg-foreground text-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-background/20">
            <div className="px-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">500+</div>
              <div className="text-sm md:text-base font-medium opacity-80 uppercase tracking-wider">Properties Served</div>
            </div>
            <div className="px-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">10+</div>
              <div className="text-sm md:text-base font-medium opacity-80 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="px-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">4.9</div>
              <div className="text-sm md:text-base font-medium opacity-80 uppercase tracking-wider">Google Rating</div>
            </div>
            <div className="px-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">100%</div>
              <div className="text-sm md:text-base font-medium opacity-80 uppercase tracking-wider">Insured & WCB</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - CTA */}
      <section className="py-32 bg-primary/5">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to work with us?</h2>
          <p className="text-xl text-muted-foreground mb-10">Get a free, no-obligation estimate for your property.</p>
          <Link href="/quote">
            <Button size="lg" className="h-14 px-10 text-lg font-bold">
              Request Your Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}