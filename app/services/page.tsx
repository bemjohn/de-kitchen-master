import {
  Check,
  ChefHat,
  Briefcase,
  BookOpen,
  FileText,
  GraduationCap,
  Calendar,
  Truck,
  ClipboardList,
  DollarSign,
  Package,
  ShoppingCart,
  Compass,
  Utensils,
  Apple,
  Heart,
  ArrowRight,
  Users,
  Wine,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services | De KITCHEN MASTER Culinary & Hospitality Services Ltd",
  description:
    "Comprehensive culinary and hospitality solutions chef recruitment, restaurant consultancy, private chef services, catering, training, menu engineering, and business transformation across Africa.",
};

const recruitmentPositions = [
  "Executive Chefs",
  "Cooks",
  "Head Chefs",
  "Kitchen Assistants",
  "Sous Chefs",
  "Stewards",
  "Chef de Partie",
  "Front-of-House Personnel",
  "Pastry Chefs",
  "Hospitality Supervisors",
  "Bakers",
];

const trainingAreas = [
  "Culinary Skills Development",
  "Restaurant Service Standards",
  "Kitchen Operations",
  "Teamwork & Communication",
  "Food Safety & Hygiene",
  "Professional Conduct",
  "Customer Service Excellence",
  "Hospitality Operations Management",
];

const nutritionPrograms = [
  "Weight Management Meal Plans",
  "Healthy Lifestyle Meal Plans",
  "Fitness & Wellness Nutrition Plans",
  "Family Meal Planning",
  "Customized Dietary Programs",
  "Corporate Wellness Meal Solutions",
];

export default function ServicesPage() {
  return (
    <div className="pt-20 bg-white">
      {/* ============================================================ */}
      {/* PHASE 1 — PAGE INTRO & STRATEGIC OVERVIEW                     */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight max-w-3xl mx-auto">
              Strategic Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-lg md:text-xl text-gray-900 leading-relaxed font-medium">
                At De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, we provide comprehensive culinary and hospitality solutions designed to support businesses, organizations, institutions, and private clients across every stage of the hospitality journey.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                With a combination of industry expertise, practical experience, and a commitment to excellence, we deliver professional services that help clients build stronger teams, improve operations, create exceptional dining experiences, and achieve sustainable business growth.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                Whether you are launching a new hospitality venture, strengthening an existing operation, recruiting skilled professionals, or seeking expert culinary support, our team is equipped to deliver tailored solutions that meet your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 2 — CHEF RECRUITMENT & STAFFING                          */}
      {/* ============================================================ */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
                <Users className="w-4 h-4" strokeWidth={2.5} />
                <span>Talent Acquisition</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
                Chef Recruitment &amp; Hospitality Staffing
              </h2>
              <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-8">
                <p>
                  We specialize in sourcing, screening, recruiting, and deploying qualified chefs and hospitality professionals for restaurants, hotels, lounges, resorts, catering companies, corporate organizations, and private clients.
                </p>
                <p>
                  Our recruitment process focuses on professionalism, experience, technical competence, work ethics, and operational efficiency to ensure every candidate meets the highest industry standards.
                </p>
              </div>

              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-5">Positions We Recruit:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {recruitmentPositions.map((position) => (
                  <div key={position} className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-50 flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3.5} />
                    </span>
                    <span className="text-sm md:text-base text-gray-800 font-medium">{position}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[420px] lg:h-full lg:min-h-[560px] rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/others/6.jpeg"
                  alt="Professional executive chef team in a commercial kitchen"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Our Network</p>
                  <p className="text-gray-900 font-black text-lg">Qualified Professionals, Ready to Deploy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 3 — BUSINESS & RESTAURANT CONSULTANCY (DARK)             */}
      {/* ============================================================ */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Consultancy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              Business &amp; Restaurant Consultancy
            </h2>
          </div>

          {/* Row A — Restaurant & Lounge Consultancy (text left, image right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
                <Briefcase className="w-4 h-4" strokeWidth={2.5} />
                <span>Row A</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-6">
                Restaurant &amp; Lounge Consultancy
              </h3>
              <div className="space-y-5 text-base md:text-lg text-gray-300 leading-relaxed font-medium">
                <p>
                  Our consultancy service helps hospitality businesses develop strong operational foundations and achieve long-term success.
                </p>
                <p>
                  We provide expert guidance on concept development, operational planning, staff structure, service delivery, profitability improvement, customer experience, and business growth strategies.
                </p>
                <p>
                  Whether you are opening a new establishment or improving an existing one, our consultants help position your business for sustainable success.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative h-[300px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
                  alt="Elegant high-end dining area layout"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Row B — Kitchen Setup & Restaurant Development (image left, text right) */}
          <div id="kitchen-setup" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20">
            <div className="lg:col-span-5">
              <div className="relative h-[300px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src="/others/7.jpeg"
                  alt="Modern professional industrial kitchen with stainless steel setup"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
                <ChefHat className="w-4 h-4" strokeWidth={2.5} />
                <span>Row B</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-6">
                Kitchen Setup &amp; Restaurant Development
              </h3>
              <div className="space-y-5 text-base md:text-lg text-gray-300 leading-relaxed font-medium">
                <p>
                  We assist entrepreneurs, investors, and hospitality businesses in planning, designing, and establishing fully functional professional kitchens and food service operations.
                </p>
                <p>
                  Our services cover kitchen workflow design, equipment planning, staffing structure, operational systems, production flow, and pre-opening support to ensure efficiency, safety, and profitability from day one.
                </p>
              </div>
            </div>
          </div>

          {/* Row C — Bar, Beverage & Mixology Consultancy (text left, image right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
                <Wine className="w-4 h-4" strokeWidth={2.5} />
                <span>Row C</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-6">
                Bar, Beverage &amp; Mixology Consultancy
              </h3>
              <div className="space-y-5 text-base md:text-lg text-gray-300 leading-relaxed font-medium mb-8">
                <p>
                  We provide end-to-end bar and beverage consultancy for restaurants, lounges, hotels, cafés, clubs, resorts, and hospitality businesses. From concept development to full operational setup, we help clients build profitable, efficient, and memorable beverage programs that enhance guest experiences and maximize revenue.
                </p>
              </div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-5">Our services include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Full Bar & Lounge Setup",
                  "Beverage Menu Development",
                  "Signature Cocktail & Mocktail Recipe Creation",
                  "Wine, Spirits & Beverage Selection",
                  "Bar Layout & Workflow Planning",
                  "Beverage Costing & Pricing",
                  "Inventory Control & Stock Management",
                  "Bartender Recruitment",
                  "Bartender Training & Skills Development",
                  "Bar Standard Operating Procedures (SOPs)",
                  "Bar Equipment Procurement & Setup",
                  "Pre-Opening & Operational Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3.5} />
                    </span>
                    <span className="text-sm md:text-base text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative h-[300px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1678724172078-3259ce6a6019?q=80&w=2000&auto=format&fit=crop"
                  alt="Bartender pouring a cocktail drink into a glass"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Row D — Kitchen Equipment Installation, Servicing & Repair (image left, text right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative h-[300px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1663790776711-9283bf614ac2?q=80&w=2000&auto=format&fit=crop"
                  alt="Modern commercial kitchen with stainless steel appliances"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
                <Wrench className="w-4 h-4" strokeWidth={2.5} />
                <span>Row D</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-6">
                Kitchen Equipment Installation, Servicing &amp; Repair
              </h3>
              <div className="space-y-5 text-base md:text-lg text-gray-300 leading-relaxed font-medium mb-8">
                <p>
                  We provide professional installation, preventive maintenance, servicing, troubleshooting, and repair of domestic and commercial kitchen equipment for restaurants, hotels, bakeries, cafés, cloud kitchens, corporate kitchens, and private residences. Our experienced technicians ensure your equipment operates safely, efficiently, and reliably, helping to minimize downtime and extend its lifespan.
                </p>
              </div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-5">Our services include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Commercial & domestic oven installation and repair",
                  "Gas cooker and burner installation & servicing",
                  "Microwave installation & repair",
                  "Grills, fryers & salamander servicing",
                  "Bakery equipment installation & maintenance",
                  "Kitchen equipment diagnostics & fault detection",
                  "Preventive maintenance",
                  "Equipment replacement & upgrades",
                  "Routine servicing contracts",
                  "Emergency repair support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3.5} />
                    </span>
                    <span className="text-sm md:text-base text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 4 — BESPOKE CULINARY & CONTRACT SERVICES (3 CARDS)      */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Bespoke Service
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Culinary &amp; Contract Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Private Chef Services */}
            <article id="private-chef" className="group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white border border-slate-100 p-8 rounded-2xl flex flex-col">
              <div className="relative h-40 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-2xl">
                <img
                  src="https://images.unsplash.com/photo-1694821144277-7d9d5e0b0522?q=80&w=800&auto=format&fit=crop&fm=jpg"
                  alt="Professional private chef in kitchen"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">
                  <ChefHat className="w-5 h-5" strokeWidth={2.25} />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 tracking-tight">Private Chef Services</h3>
              <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                <p>
                  We provide professional private chefs for individuals, families, executives, expatriates, VIP clients, residences, and private households.
                </p>
                <p>
                  Whether you require a full-time chef, live-in chef, personal chef, vacation chef, or chef for a special occasion, we carefully match clients with experienced culinary professionals who meet their specific requirements.
                </p>
                <p>
                  Our private chefs deliver personalized culinary services while maintaining the highest standards of professionalism, confidentiality, hygiene, and food quality.
                </p>
              </div>
            </article>

            {/* Card 2 — Chef Rentage */}
            <article className="group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white border border-slate-100 p-8 rounded-2xl flex flex-col">
              <div className="relative h-40 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop"
                  alt="Chef plating a dish in active service"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">
                  <Calendar className="w-5 h-5" strokeWidth={2.25} />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 tracking-tight">Chef Rentage (Contract Chef Services)</h3>
              <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                <p>
                  Our Chef Rentage Service provides businesses and private clients with access to skilled chefs on a temporary, contract, seasonal, or project basis.
                </p>
                <p>
                  This service is ideal for restaurants experiencing staffing shortages, hotels requiring additional support, corporate events, private functions, festive periods, and hospitality projects requiring short-term culinary expertise.
                </p>
              </div>
            </article>

            {/* Card 3 — Nutrition & Healthy Meal Planning */}
            <article className="group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white border border-slate-100 p-8 rounded-2xl flex flex-col">
              <div className="relative h-40 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-2xl">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2000&auto=format&fit=crop"
                  alt="Fresh healthy ingredients for meal planning"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">
                  <Apple className="w-5 h-5" strokeWidth={2.25} />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 tracking-tight">Nutrition &amp; Healthy Meal Planning</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium mb-5">
                We provide customized meal planning solutions designed to support healthy living, weight management, fitness goals, and overall wellness.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium mb-5">
                Our meal plans are tailored to individual dietary needs, lifestyle preferences, and health objectives, ensuring a balanced approach to nutrition without compromising taste and quality.
              </p>
              <ul className="space-y-2.5 mb-5">
                {nutritionPrograms.map((program) => (
                  <li key={program} className="flex items-start gap-2.5">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-50 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3.5} />
                    </span>
                    <span className="text-sm text-gray-800 font-medium">{program}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-5 border-t border-slate-100 text-sm italic text-gray-600 leading-relaxed font-medium">
                At De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, we help clients achieve their health and wellness goals through practical, enjoyable, and professionally planned nutrition solutions.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 5 — FINE DINING, CORPORATE, MENU, RECIPE (2x2 BENTO)    */}
      {/* ============================================================ */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Engineered Experiences
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Dining, Menus &amp; Recipe Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A — Fine Dining */}
            <article className="group relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white border border-slate-100 rounded-2xl">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop"
                  alt="Premium fine dining plating"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">
                    <Utensils className="w-5 h-5" strokeWidth={2.25} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">Fine Dining Services</h3>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                  We create premium fine dining experiences designed for luxury events, private dinners, executive gatherings, exclusive celebrations, and high-end hospitality engagements. From menu creation and food preparation to service coordination and presentation, our team delivers exceptional culinary experiences that combine elegance, creativity, and world-class service.
                </p>
              </div>
            </article>

            {/* Card B — Corporate Lunch */}
            <article className="group relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white border border-slate-100 rounded-2xl">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop"
                  alt="Corporate meeting lunch setup"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">
                    <Briefcase className="w-5 h-5" strokeWidth={2.25} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">Corporate Lunch Services</h3>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                  We provide structured meal solutions for corporate organizations, banks, offices, institutions, and workplace environments. Our services include executive lunches, staff meal programs, corporate catering, canteen support, and ongoing meal service management designed to ensure consistency, nutrition, quality, and professional service delivery.
                </p>
              </div>
            </article>

            {/* Card C — Menu Development */}
            <article className="group relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white border border-slate-100 rounded-2xl">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
                  alt="Menu and bar setup"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">
                    <BookOpen className="w-5 h-5" strokeWidth={2.25} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">Menu Development</h3>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                  We create professionally engineered menus designed to improve customer satisfaction, enhance brand identity, and maximize profitability. Our menu development process combines culinary creativity, market research, operational efficiency, and pricing strategy to deliver menus that are attractive, practical, and commercially successful.
                </p>
              </div>
            </article>

            {/* Card D — Recipe Development */}
            <article className="group relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white border border-slate-100 rounded-2xl">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2000&auto=format&fit=crop"
                  alt="Recipe development and food preparation"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">
                    <FileText className="w-5 h-5" strokeWidth={2.25} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">Recipe Development</h3>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                  We develop standardized recipes that promote consistency, quality control, efficiency, and profitability across food service operations. Each recipe is professionally documented with precise measurements, preparation procedures, plating guidelines, and production standards to ensure consistent results every time.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 6 — TRAINING, EVENTS, CATERING, SOPS (2x2 DARK)          */}
      {/* ============================================================ */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Operational Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              Training, Events, Catering &amp; SOPs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Panel 1 — Staff Training */}
            <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6" strokeWidth={2.25} />
                </div>
                <h3 className="text-xl md:text-2xl font-black tracking-tight">Staff Training (BOH &amp; FOH)</h3>
              </div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium mb-6">
                Our training programs are designed to improve the skills, professionalism, productivity, and service standards of hospitality teams.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {trainingAreas.map((area) => (
                  <div key={area} className="flex items-start gap-2.5">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3.5} />
                    </span>
                    <span className="text-sm text-gray-200 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Panel 2 — Event Planning & Hospitality Execution */}
            <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6" strokeWidth={2.25} />
                </div>
                <h3 className="text-xl md:text-2xl font-black tracking-tight">Event Planning &amp; Hospitality Execution</h3>
              </div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium">
                We provide hospitality-focused event planning and execution services for weddings, corporate events, private celebrations, product launches, conferences, and social gatherings. Our team coordinates food service operations, staffing, logistics, hospitality management, and guest experience delivery to ensure successful event execution.
              </p>
            </article>

            {/* Panel 3 — Outdoor Catering Services */}
            <article id="catering" className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6" strokeWidth={2.25} />
                </div>
                <h3 className="text-xl md:text-2xl font-black tracking-tight">Outdoor Catering Services</h3>
              </div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium">
                We offer professional outdoor catering services for events of all sizes. From intimate gatherings to large-scale celebrations, our catering solutions include menu planning, food production, event catering logistics, service staff deployment, and complete hospitality management. Our goal is to deliver exceptional food and memorable dining experiences for every event.
              </p>
            </article>

            {/* Panel 4 — SOP Development */}
            <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="w-6 h-6" strokeWidth={2.25} />
                </div>
                <h3 className="text-xl md:text-2xl font-black tracking-tight">SOP Development</h3>
              </div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium">
                We develop customized Standard Operating Procedures (SOPs) that help hospitality businesses establish consistency, accountability, efficiency, and quality control. Our SOP systems cover kitchen operations, food production, service standards, hygiene procedures, inventory control, staff responsibilities, and operational workflows. These systems help businesses improve performance while maintaining professional standards across all departments.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 7A — FOOD COSTING / INVENTORY / PROCUREMENT / CONSULT  */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Financial &amp; Operational Systems
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Costing, Inventory, Sourcing &amp; Consultation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card A — Food Costing */}
            <article className="group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white border border-slate-100 p-6 rounded-2xl flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-5 transition-colors duration-300 ease-in-out group-hover:bg-primary group-hover:text-white">
                <DollarSign className="w-6 h-6" strokeWidth={2.25} />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight">Food Costing &amp; Control Systems</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                We help hospitality businesses implement effective food costing and cost-control systems that improve profitability and reduce waste. Our services include recipe costing, menu pricing, portion control, purchasing analysis, profit margin evaluation, and cost monitoring systems designed to maximize financial performance.
              </p>
            </article>

            {/* Card B — Inventory */}
            <article className="group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white border border-slate-100 p-6 rounded-2xl flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-5 transition-colors duration-300 ease-in-out group-hover:bg-primary group-hover:text-white">
                <Package className="w-6 h-6" strokeWidth={2.25} />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight">Inventory Management</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                We design and implement inventory management systems that help businesses monitor stock levels, minimize losses, improve accountability, and maintain operational efficiency. Our structured inventory solutions support accurate stock tracking, usage control, supplier management, and waste reduction.
              </p>
            </article>

            {/* Card C — Procurement */}
            <article className="group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white border border-slate-100 p-6 rounded-2xl flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-5 transition-colors duration-300 ease-in-out group-hover:bg-primary group-hover:text-white">
                <ShoppingCart className="w-6 h-6" strokeWidth={2.25} />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight">Procurement Services</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                We assist businesses with the sourcing and procurement of quality ingredients, kitchen equipment, operational supplies, and hospitality resources. Our procurement services focus on quality assurance, supplier reliability, cost efficiency, and sustainable supply chain management.
              </p>
            </article>

            {/* Card D — Food Business Consultation */}
            <article id="consulting" className="group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white border border-slate-100 p-6 rounded-2xl flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-5 transition-colors duration-300 ease-in-out group-hover:bg-primary group-hover:text-white">
                <Compass className="w-6 h-6" strokeWidth={2.25} />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight">Food Business Consultation</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                We provide strategic consulting services for entrepreneurs, investors, startups, and existing food businesses. Our consultation services cover business planning, operational structure, kitchen design, staffing strategy, menu development, growth planning, profitability improvement, and market positioning. We help clients transform ideas into successful hospitality ventures.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 7B — RESTAURANT REVAMP & BUSINESS TRANSFORMATION         */}
      {/* ============================================================ */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
                Transformation
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
                Restaurant Revamp &amp; Business Transformation
              </h2>
              <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  We help underperforming restaurants, lounges, and hospitality businesses identify operational challenges and implement practical solutions for improvement.
                </p>
                <p>
                  Our Restaurant Revamp &amp; Business Transformation service evaluates every aspect of the business, including operations, staffing, menus, food quality, customer experience, cost management, and service delivery.
                </p>
                <p>
                  Through strategic restructuring and operational improvements, we help businesses increase efficiency, improve customer satisfaction, strengthen brand positioning, and achieve sustainable growth.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-[420px] lg:h-full lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2000&auto=format&fit=crop"
                  alt="Dramatic luxury restaurant renovation showcase"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Transformation</p>
                  <p className="text-gray-900 font-black text-lg">From Struggling to Thriving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 7C — ASYMMETRIC CLOSING BANNER                           */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <h2 className="lg:col-span-5 text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
              At De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, we don't simply provide services.
            </h2>
            <p className="lg:col-span-7 text-xl text-slate-600 leading-relaxed pl-0 lg:pl-8 lg:border-l lg:border-slate-200">
              We create solutions that help hospitality businesses thrive, professionals succeed, and clients experience excellence at every level.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BANNER — CUSTOM CULINARY PACKAGE CTA (PRESERVED)               */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="bg-primary border border-primary-light rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group shadow-2xl shadow-primary/20">
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
                <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
