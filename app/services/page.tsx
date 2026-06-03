import { ChefHat, GlassWater, CookingPot, Users, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services | De Kitchen Master",
  description: "Explore our premium culinary and hospitality services.",
};

export default function ServicesPage() {
  const allServices = [
    {
      id: "private-chef",
      title: "Private Chef Services",
      description: "Enjoy restaurant-quality meals in the comfort of your own home. Our private chef services are completely customized to your dietary needs and preferences, offering breakfast, lunch, dinner, or special multi-course tasting menus for you and your guests.",
      icon: <ChefHat className="w-6 h-6" />
    },
    {
      id: "catering",
      title: "Event Catering",
      description: "From intimate birthday parties to large-scale corporate events and weddings, our catering service delivers flawlessly executed menus. We handle everything from food preparation to presentation, ensuring your guests are wowed.",
      icon: <GlassWater className="w-6 h-6" />
    },
    {
      id: "kitchen-setup",
      title: "Kitchen Setup & Design",
      description: "Opening a new restaurant or upgrading your home kitchen? We provide expert consultation on kitchen layout, equipment sourcing, and workflow optimization to maximize efficiency and safety.",
      icon: <CookingPot className="w-6 h-6" />
    },
    {
      id: "recruitment",
      title: "Staff Recruitment",
      description: "Finding the right culinary talent is difficult. We leverage our extensive network to recruit highly skilled chefs, line cooks, and hospitality staff tailored precisely to your restaurant's specific culture and requirements.",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: "consulting",
      title: "Restaurant Consulting",
      description: "Comprehensive advisory services for hospitality businesses. From menu engineering and cost analysis to brand development and operations management, we help your restaurant achieve its full potential.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: "training",
      title: "Culinary Training",
      description: "Professional development programs for aspiring chefs and existing kitchen teams. We offer hands-on training in culinary techniques, food safety, hygiene, and kitchen management to elevate your staff's capabilities.",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-20 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">What We Do</h2>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-wider">
            Premium <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            De Kitchen Master offers a comprehensive suite of culinary and hospitality solutions designed to meet the highest industry standards. 
          </p>
        </div>

        {/* Services Grid (Using the Card Component for consistency) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {allServices.map((service) => (
            <div key={service.id} id={service.id} className="scroll-mt-32">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`/services#${service.id}`}
              />
            </div>
          ))}
        </div>

        {/* Detailed Service Banner Section */}
        <div className="bg-primary border border-primary-light rounded-3xl p-8 md:p-16 mb-24 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" />
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Culinary Package?</h3>
            <p className="text-orange-50 text-lg leading-relaxed mb-8 font-medium">
              Every client is unique. If you require a bespoke combination of our services, such as event catering paired with a specialized private chef experience, our team is ready to curate a customized package tailored strictly to your event's demands.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-primary font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
