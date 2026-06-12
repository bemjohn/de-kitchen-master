import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import GalleryFilter from "@/components/Portfolio/GalleryFilter";
import TestimonialCarousel from "@/components/Portfolio/TestimonialCarousel";

export const metadata = {
  title: "Portfolio | De KITCHEN MASTER Culinary & Hospitality Services Ltd",
  description:
    "Explore our portfolio of culinary projects, chef placements, catering events, restaurant setups, training programs, and hospitality solutions across Nigeria and Africa.",
};

const featuredProjects = [
  {
    title: "Restaurant & Lounge Development",
    description:
      "Supporting hospitality businesses with restaurant setup, operational planning, menu development, staffing solutions, and business improvement strategies.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Chef Recruitment & Professional Placement",
    description:
      "Successfully connecting skilled chefs and culinary professionals with private residences, restaurants, hotels, lounges, and corporate organizations.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Private Chef & Residential Services",
    description:
      "Providing trusted culinary professionals for homes, executives, expatriates, VIP clients, and private households.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Catering & Event Hospitality Services",
    description:
      "Delivering exceptional food experiences and hospitality support for weddings, private events, celebrations, corporate gatherings, and special occasions.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Staff Training & Culinary Development",
    description:
      "Empowering chefs, cooks, kitchen assistants, and hospitality professionals through practical training and professional development programs.",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Kitchen Setup & Hospitality Projects",
    description:
      "Supporting the development and organization of professional kitchens designed for efficiency, productivity, and operational excellence.",
    image: "https://images.unsplash.com/photo-1583394283838-89745a30ed34?q=80&w=600&auto=format&fit=crop",
  },
];

const industries = [
  "Private Residences",
  "Restaurants",
  "Hotels & Resorts",
  "Lounges & Entertainment Venues",
  "Catering Companies",
  "Corporate Organizations",
  "Hospitality Startups",
  "Event Companies",
  "Educational Institutions",
  "Food Service Operations",
];

export default function PortfolioPage() {
  return (
    <div className="pt-20 bg-white">
      {/* ============================================================ */}
      {/* SECTION 1 — HERO & INTRO                                      */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <span className="inline-block text-primary font-bold tracking-widest uppercase text-xs mb-3">
            PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-12 max-w-5xl">
            Showcasing Excellence Through Real Projects, Real Experiences, and
            Real Results
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                At De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd,
                every project represents our commitment to professionalism,
                quality, creativity, and exceptional service delivery.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                Over the years, we have had the privilege of supporting
                restaurants, hotels, lounges, corporate organizations, event
                companies, and private clients with a wide range of culinary and
                hospitality solutions. Our portfolio reflects the diversity of
                our experience and our ability to deliver tailored solutions
                across different sectors of the hospitality industry. Whether
                it&apos;s recruiting a private chef for a family residence,
                setting up a commercial kitchen, training hospitality teams,
                managing catering operations, or supporting a restaurant&apos;s
                growth, we approach every project with the same level of
                dedication and excellence.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[420px] lg:h-[520px]">
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
                    alt="Professional kitchen team at work"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
                    alt="Luxury fine dining plated dish"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600&auto=format&fit=crop"
                    alt="Corporate catering buffet setup"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop"
                    alt="Modern luxury restaurant dining room"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — FEATURED PROJECTS                                  */}
      {/* ============================================================ */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              FEATURED PROJECTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — CLIENTS & INDUSTRIES SERVED (DARK)                 */}
      {/* ============================================================ */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span className="text-[14rem] md:text-[22rem] font-black text-white/[0.04] tracking-tighter leading-none">
            CLIENTS
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              CLIENTS &amp; INDUSTRIES SERVED
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Our experience spans a diverse range of hospitality environments,
              including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto mb-16">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3.5} />
                </span>
                <span className="text-base md:text-lg text-gray-200 font-medium">
                  {industry}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium text-center">
              📸 Add logos of clients (where permission has been granted) and
              relevant project images.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — PROJECT GALLERY (FILTER ROW GRID)                  */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              PROJECT GALLERY
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              A visual showcase of our work across the culinary and hospitality
              industry.
            </p>
          </div>

          <GalleryFilter />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — TESTIMONIALS                                       */}
      {/* ============================================================ */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              TESTIMONIALS
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              What our clients say about working with De KITCHEN MASTER.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — CLOSING CALL TO ACTION BANNER                      */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-8">
              LET&apos;S CREATE YOUR NEXT SUCCESS STORY
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
              Whether you require professional chefs, hospitality consulting,
              restaurant development, catering services, culinary training, or
              operational support, our team is ready to help bring your vision
              to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/hire-a-chef"
                className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-widest rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm"
              >
                HIRE A CHEF
                <ArrowRight className="ml-2 w-4 h-4" strokeWidth={2.5} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-widest rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg text-sm"
              >
                REQUEST A CONSULTATION
                <ChevronRight className="ml-2 w-4 h-4" strokeWidth={2.5} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary hover:text-primary-dark font-bold tracking-wider transition-colors text-sm group"
              >
                CONTACT OUR TEAM
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
