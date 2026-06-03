import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Projects | De Kitchen Master",
  description: "Explore our portfolio of curated culinary events and kitchen setups.",
};

export default function ProjectsPage() {
  const projects = [
    {
      id: "estate-gala",
      title: "Exclusive Estate Gala Let's Dine",
      category: "Private Catering",
      description: "A meticulously planned 50-person black-tie dinner featuring a 7-course modern Nigerian fusion menu. Our team handled full kitchen prep, plating, and sophisticated service in a private Ikoyi residence.",
      image: "https://images.unsplash.com/photo-1549488344-c28893116d7a?q=80&w=2574&auto=format&fit=crop",
    },
    {
      id: "bistro-setup",
      title: "Lagos Mainland Bistro Setup",
      category: "Kitchen Design & Training",
      description: "Completely overhauled an underperforming restaurant kitchen layout to improve ticket times. Conducted a comprehensive two-week intensive culinary training for the new line staff.",
      image: "https://images.unsplash.com/photo-1583394283838-89745a30ed34?q=80&w=2674&auto=format&fit=crop",
    },
    {
      id: "wedding-reception",
      title: "Premium Wedding Reception",
      category: "Event Catering",
      description: "Delivered an unforgettable culinary experience for a 300-guest outdoor wedding. Designed multiple live-action stations alongside a plated main course, managing a brigade of 15 chefs.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2670&auto=format&fit=crop",
    },
  ];

  return (
    <div className="pt-20 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Work</h2>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-wider">
            Featured <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Take a look at some of our most memorable culinary experiences, restaurant setups, and high-end events across the country.
          </p>
        </div>

        {/* Portfolio Case Studies */}
        <div className="space-y-24 mb-24">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:[&>*:first-child]:order-last' : ''}`}
            >
              <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-orange-50 text-primary rounded-xl text-sm font-bold tracking-wide uppercase">
                  {project.category}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </h3>
                <div className="w-20 h-1 bg-primary rounded-full my-6" />
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                  {project.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors text-lg group"
                >
                  Discuss a similar project <ArrowUpRight className="ml-2 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center py-16 border-t border-gray-100 mt-12 bg-gray-50 rounded-3xl">
          <h3 className="text-2xl text-gray-900 font-bold mb-4">Want to see more of our daily culinary creations?</h3>
          <p className="text-gray-600 mb-8 font-medium">Follow us on Instagram for behind-the-scenes content and fresh plating inspiration.</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex py-4 px-10 text-white font-bold uppercase tracking-widest bg-primary hover:bg-primary-dark rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Follow our Instagram
          </a>
        </div>

      </div>
    </div>
  );
}
