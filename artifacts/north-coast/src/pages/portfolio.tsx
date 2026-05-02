import SEOHead from "@/components/SEOHead";

import pressureWashingImg from "@assets/Snapchat-1561732439_1777705290147.jpg";
import gutterclogImg from "@assets/Snapchat-391329889_1777705290146.jpg";
import sidingDirtyImg from "@assets/Snapchat-1619335989_(1)_1777705290147.jpg";
import sidingCleanImg from "@assets/Snapchat-1557599487_(1)_1777705290147.jpg";
import roofImg from "@assets/homr_1777705290146.jpg";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Gutter Cleaning - North Vancouver",
      category: "Gutter Maintenance",
      img: gutterclogImg,
    },
    {
      id: 2,
      title: "Siding Restoration Before",
      category: "Pressure Washing",
      img: sidingDirtyImg,
    },
    {
      id: 3,
      title: "Siding Restoration After",
      category: "Pressure Washing",
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
      title: "Pressure Washing Service",
      category: "Exterior Cleaning",
      img: pressureWashingImg,
    },
    {
      id: 6,
      title: "Commercial Property Upkeep",
      category: "Landscaping & Snow",
      img: "/images/service-lawn.png", // kept 6th to fill grid
    }
  ];

  return (
    <div className="py-20">
      <SEOHead 
        title="Our Work | North Coast Property Maintenance Vancouver" 
        description="See our property maintenance projects across Greater Vancouver. Before & after photos of pressure washing, gutter cleaning and exterior restoration work." 
      />
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Our Work</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See the results of our rugged, reliable approach to property maintenance across Greater Vancouver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border mb-4 relative">
                <img 
                  src={project.img} 
                  alt={`North Coast Property Maintenance - ${project.title} in Vancouver BC`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="font-bold text-lg tracking-wide">View Project</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-primary font-medium text-sm uppercase tracking-wider">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}