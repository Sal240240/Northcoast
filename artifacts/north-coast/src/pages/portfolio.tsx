import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import gutterclogImg from "@assets/Snapchat-391329889_1777705290146.jpg";
import sidingDirtyImg from "@assets/Snapchat-1619335989_(1)_1777705290147.jpg";
import sidingCleanImg from "@assets/Snapchat-1557599487_(1)_1777705290147.jpg";
import roofImg from "@assets/homr_1777705290146.jpg";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Pressure Washing", "Gutter Cleaning", "Roof Cleaning", "Siding"];

  const projects = [
    {
      id: 1,
      title: "Gutter Cleaning - North Vancouver",
      category: "Gutter Cleaning",
      img: gutterclogImg,
    },
    {
      id: 2,
      title: "Siding Restoration Before",
      category: "Siding",
      img: sidingDirtyImg,
    },
    {
      id: 3,
      title: "Siding Restoration After",
      category: "Siding",
      img: sidingCleanImg,
    },
    {
      id: 4,
      title: "Roof Maintenance",
      category: "Roof Cleaning",
      img: roofImg,
    },
    {
      id: 5,
      title: "Driveway Pressure Washing",
      category: "Pressure Washing",
      img: sidingCleanImg, // reusing as placeholder
    },
    {
      id: 6,
      title: "Commercial Property Upkeep",
      category: "Pressure Washing",
      img: sidingDirtyImg, // reusing as placeholder
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="py-20 bg-background text-foreground">
      <SEOHead 
        title="Our Work | North Coast Property Maintenance Vancouver" 
        description="See our property maintenance projects across Greater Vancouver. Before & after photos of pressure washing, gutter cleaning and exterior restoration work." 
      />
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Our Work</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See the results of our rugged, reliable approach to property maintenance across Greater Vancouver.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === filter 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border mb-4 relative">
                <img 
                  src={project.img} 
                  alt={`North Coast Property Maintenance - ${project.title} in Vancouver BC`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="font-bold text-lg tracking-wide text-foreground">View Project</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-primary font-medium text-sm uppercase tracking-wider">{project.category}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-foreground text-background py-20 px-4">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to see results like these?</h2>
          <p className="text-xl mb-10 opacity-90">Book your free assessment today.</p>
          <Link href="/quote">
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 border-none">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}