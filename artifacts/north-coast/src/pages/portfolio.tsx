export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Commercial Property Maintenance",
      category: "Landscaping",
      img: "/images/portfolio-1.png",
    },
    {
      id: 2,
      title: "Residential Exterior Clean",
      category: "Pressure Washing",
      img: "/images/portfolio-2.png",
    },
    {
      id: 3,
      title: "Winter Lot Clearing",
      category: "Snow Removal",
      img: "/images/service-snow.png",
    },
    {
      id: 4,
      title: "Concrete Restoration",
      category: "Pressure Washing",
      img: "/images/service-wash.png",
    },
    {
      id: 5,
      title: "Estate Lawn Care",
      category: "Landscaping",
      img: "/images/service-lawn.png",
    },
    {
      id: 6,
      title: "North Shore Driveway",
      category: "Pressure Washing",
      img: "/images/hero.png",
    }
  ];

  return (
    <div className="py-20">
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
                  alt={project.title}
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