import Link from "next/link";
import {
  Check,
  ArrowRight,
  ChefHat,
  Utensils,
  Cookie,
  Wheat,
  Sparkles,
  Flame,
  Home,
  Calendar,
  Quote,
  Users,
  Phone,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Hire a Chef | De KITCHEN MASTER Culinary & Hospitality Services Ltd",
  description:
    "Recruit vetted Executive Chefs, Head Chefs, Sous Chefs, Pastry Chefs, Fine Dining Chefs, and live-in residential chefs for private homes, restaurants, hotels, and corporate organizations across Nigeria and beyond.",
};

const vettingItems = [
  "Identity Verification",
  "Background Evaluation",
  "Professional Screening",
  "Interview Assessment",
  "Skills Assessment",
  "Client Matching Process",
  "Experience Verification",
  "Post-Placement Support",
  "Reference Checks",
];

const chefTypes = [
  {
    title: "Executive Chef",
    description:
      "Senior culinary professionals responsible for kitchen leadership, menu development, food quality control, and operational management.",
    Icon: ChefHat,
  },
  {
    title: "Head Chef",
    description:
      "Experienced kitchen leaders responsible for overseeing daily food production and kitchen performance.",
    Icon: ChefHat,
  },
  {
    title: "Sous Chef",
    description:
      "Highly skilled professionals who support kitchen leadership and ensure operational efficiency.",
    Icon: ChefHat,
  },
  {
    title: "Chef de Partie",
    description:
      "Specialized station chefs with expertise in specific areas of food production.",
    Icon: Utensils,
  },
  {
    title: "Pastry Chef",
    description:
      "Experts in pastries, desserts, baked goods, and confectionery production.",
    Icon: Cookie,
  },
  {
    title: "Baker",
    description:
      "Professional bakers experienced in artisan breads, pastries, cakes, and bakery operations.",
    Icon: Wheat,
  },
  {
    title: "Fine Dining Chef",
    description:
      "Experienced culinary professionals specializing in luxury dining experiences, multi-course menus, private events, and high-end food presentation. They deliver refined cooking techniques and premium dining standards.",
    Icon: Sparkles,
  },
  {
    title: "Grill Chef",
    description:
      "Skilled chefs specializing in grilling, barbecue operations, live grill stations, and outdoor cooking services for events, restaurants, and hospitality setups.",
    Icon: Flame,
  },
  {
    title: "Residential / Live-In Chef",
    description:
      "Professional chefs who live within a client\u2019s residence and provide daily meal preparation and kitchen support tailored to household needs, dietary preferences, and lifestyle requirements.",
    Icon: Home,
  },
  {
    title: "Contract Chef",
    description:
      "Temporary culinary professionals available for short-term, project-based, or seasonal assignments.",
    Icon: Calendar,
  },
  {
    title: "Event Chef",
    description:
      "Experienced chefs available for weddings, celebrations, private functions, and corporate events.",
    Icon: Quote,
  },
  {
    title: "Kitchen Assistants & Support Staff",
    description:
      "Reliable kitchen support professionals who help maintain smooth and efficient kitchen operations.",
    Icon: Users,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by understanding your specific staffing requirements, operational needs, and expectations.",
  },
  {
    number: "02",
    title: "Candidate Selection",
    description:
      "Our recruitment team identifies suitable candidates from our growing network of hospitality professionals.",
  },
  {
    number: "03",
    title: "Screening & Verification",
    description:
      "Each candidate undergoes professional evaluation, verification, and assessment.",
  },
  {
    number: "04",
    title: "Client Review",
    description:
      "Qualified candidates are presented for review, interview, and final approval.",
  },
  {
    number: "05",
    title: "Placement & Deployment",
    description:
      "Selected candidates are deployed and integrated into your home or business.",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description:
      "We remain available to provide guidance, follow-up support, and assistance where required.",
  },
];

const whyChooseItems = [
  "Over 7 Years of Industry Experience",
  "500+ Chefs & Hospitality Professionals Deployed",
  "Trusted by Families, Restaurants, Hotels & Businesses",
  "Professional Recruitment & Screening Process",
  "Nationwide Coverage",
  "Private Residence & Corporate Staffing Expertise",
  "Reliable Post-Placement Support",
  "Commitment to Quality & Excellence",
];

export default function HireAChefPage() {
  return (
    <div className="bg-white">
      {/* ============================================================ */}
      {/* PHASE 1 — HERO BANNER & INTRO                                    */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1765448808635-6ca2613d7273?q=80&w=2000&auto=format&fit=crop"
            alt="Professional chef service"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="bg-black/20 absolute inset-0" />
        </div>

        <div className="w-full px-6 py-12 text-center">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs">
            HIRE A CHEF &amp; CULINARY PROFESSIONALS
          </span>
          <h1 className="font-extrabold text-slate-950 text-3xl md:text-5xl leading-tight mt-3 mb-10 mx-auto">
            Professional Chef Recruitment &amp; Deployment Services
          </h1>
          <div className="w-full max-w-7xl mx-auto space-y-6 text-slate-600 text-lg leading-relaxed text-center">
            <p>
              Finding the right chef can transform your kitchen, improve service delivery, elevate food quality, and create exceptional dining experiences.
            </p>
            <p>
              At De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, we specialize in recruiting, screening, and deploying highly skilled chefs and culinary professionals for private residences, restaurants, hotels, lounges, corporate organizations, catering companies, and hospitality businesses across Nigeria and beyond. Whether you need a live-in family chef, an Executive Chef for a hotel, a Sous Chef for your restaurant, or an entire kitchen team for a new hospitality project, we provide qualified professionals carefully matched. With over 7 years of industry experience and hundreds of successful placements, we have built a reputation for connecting clients with dependable, experienced, and professionally vetted culinary talent.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 2 — VETTING & TRUST (DARK)                                */}
      {/* ============================================================ */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
                WHY CLIENTS TRUST DE KITCHEN MASTER
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6">
                A Vetting Process Built on Trust
              </h2>
              <div className="space-y-5 text-base md:text-lg text-slate-300 leading-relaxed font-medium">
                <p>
                  We understand that hiring a chef is more than filling a position—it&apos;s about trust, professionalism, reliability, and performance.
                </p>
                <p>
                  Our recruitment process is designed to ensure that every chef we recommend possesses the technical skills, work ethic, professionalism, and character required to succeed in their role.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-all duration-300 ease-in-out hover:border-primary/30">
                <h3 className="text-xl md:text-2xl font-black tracking-tight mb-6 text-white">
                  Every Candidate Undergoes:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {vettingItems.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" strokeWidth={3.5} />
                      </span>
                      <span className="text-sm text-gray-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-14 text-center text-base md:text-lg text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto">
            Our goal is to provide peace of mind while helping clients find chefs who fit seamlessly into their homes, kitchens, and organizations.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 3 — TYPES OF CHEFS AVAILABLE (BENTO GRID)                */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Our Talent Catalog
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Types of Chefs Available
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
            {chefTypes.map((chef) => {
              const Icon = chef.Icon;
              return (
                <article
                  key={chef.title}
                  className="group transition-all duration-300 ease-in-out hover:border-primary hover:shadow-md bg-slate-50/50 p-6 rounded-2xl border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-5 transition-colors duration-300 ease-in-out group-hover:bg-primary group-hover:text-white">
                    <Icon className="w-6 h-6" strokeWidth={2.25} />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight">{chef.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">{chef.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 4 — RECRUITMENT PROCESS (6-STEP TIMELINE, DARK)          */}
      {/* ============================================================ */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              Our Recruitment Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch mt-12 max-w-7xl mx-auto">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="relative mb-4">
                  <span className="text-4xl md:text-5xl font-black text-primary tracking-tighter leading-none">
                    {step.number}
                  </span>
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors" />
                </div>
                <h3 className="text-base md:text-lg font-black text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 5 — TRUST MANIFESTO + STATS                              */}
      {/* ============================================================ */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
                Our Commitment
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-8">
                Trust, Security &amp; Professionalism
              </h2>
              <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  At De KITCHEN MASTER, we understand the importance of trust when inviting a professional into your home or workplace.
                </p>
                <p>
                  That is why we maintain a structured recruitment process focused on professionalism, accountability, and responsible placement practices.
                </p>
                <p>
                  Our commitment to quality extends beyond recruitment. We strive to build long-term relationships by providing dependable professionals who represent our standards of excellence.
                </p>
                <p>
                  When you hire through De KITCHEN MASTER, you are partnering with a company that values integrity, professionalism, confidentiality, and client satisfaction.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl md:text-2xl font-black tracking-tight mb-6">
                  Why Choose De KITCHEN MASTER?
                </h3>
                <ul className="space-y-3.5">
                  {whyChooseItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3.5} />
                      </span>
                      <span className="text-sm md:text-base text-gray-200 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHASE 6 — CLOSING CTA (ORANGE BRAND BACKGROUND)                */}
      {/* ============================================================ */}
      <section className="bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-15 mix-blend-overlay" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <span className="inline-block text-white/80 font-bold tracking-[0.25em] uppercase text-xs mb-3">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8">
            Request a Chef Today
          </h2>
          <div className="space-y-5 text-base md:text-lg text-white/90 leading-relaxed font-medium max-w-3xl mx-auto mb-10">
            <p>
              Whether you require a chef for your home, restaurant, hotel, corporate organization, event, or hospitality business, our team is ready to help.
            </p>
            <p>
              Let us connect you with the right culinary professional for your needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-100 shadow-lg"
            >
              HIRE A CHEF
              <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white hover:text-primary shadow-lg"
            >
              REQUEST STAFF
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-4 text-white/90 font-bold rounded-xl transition-all duration-300 ease-in-out hover:text-white underline underline-offset-4 decoration-2"
            >
              <Phone className="w-4 h-4 mr-2" strokeWidth={2.5} />
              SPEAK WITH A CONSULTANT
            </Link>
          </div>

          <p className="mt-14 text-xl md:text-2xl lg:text-3xl font-medium italic text-white/95 leading-snug tracking-tight max-w-3xl mx-auto">
            Your Kitchen Deserves the Right Professional. Let De KITCHEN MASTER Help You Find Them.
          </p>
        </div>
      </section>
    </div>
  );
}
