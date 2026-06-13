import { Check } from "lucide-react";

export const metadata = {
  title: "Careers | De KITCHEN MASTER",
  description:
    "Join the De KITCHEN MASTER talent network. Explore culinary and hospitality career opportunities across Nigeria and beyond.",
};

const benefits = [
  "Access to Employment Opportunities",
  "Professional Networking",
  "Private Residence Placements",
  "Career Growth Support",
  "Restaurant & Hotel Opportunities",
  "Industry Exposure",
  "Contract & Temporary Assignments",
  "Continuous Professional Development",
  "Corporate Hospitality Opportunities",
  "Access to Future DKM Programs & Initiatives",
];

const culinaryRoles = [
  "Executive Chefs",
  "Head Chefs",
  "Sous Chefs",
  "Chef de Partie",
  "Fine Dining Chefs",
  "Grill Chefs",
  "Pastry Chefs",
  "Bakers",
  "Private Chefs",
  "Family Chefs",
  "Residential / Live-In Chefs",
  "Contract Chefs",
  "Event Chefs",
  "Cooks",
];

const kitchenSupportRoles = [
  "Kitchen Assistants",
  "Stewards",
  "Store Keepers",
  "Food Production Assistants",
];

const hospitalityRoles = [
  "Restaurant Supervisors",
  "Service Personnel",
  "Hospitality Coordinators",
  "Other Hospitality Support Staff",
];

const selectionSteps = [
  "Free Registration",
  "CV Review",
  "Experience Assessment",
  "Professional Screening",
  "Skills Evaluation",
  "Interview Process",
  "Opportunity Matching",
];

export default function CareersPage() {
  return (
    <div className="pt-20 bg-white">
      {/* ───── SECTION 1: HERO & CORE VALUE THESIS ───── */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
              CAREERS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight">
              Build Your Culinary &amp; Hospitality Career With De KITCHEN MASTER
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                At De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, we are passionate about creating opportunities for talented culinary and hospitality professionals.
              </p>
            </div>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium space-y-4">
              <p>
                We work closely with private residences, restaurants, hotels, lounges, catering companies, corporate organizations, and hospitality businesses that require skilled and dependable professionals.
              </p>
              <p>
                As our network continues to grow, we are constantly seeking dedicated individuals who are committed to excellence, professionalism, and continuous development.
              </p>
              <p>
                Whether you are an experienced Executive Chef, a Private Chef, a Pastry Chef, a Cook, a Kitchen Assistant, or a hospitality professional looking for your next opportunity, we invite you to become part of our growing talent network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 2: THE BENEFITS LAYER ───── */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left column — text */}
            <div className="space-y-6">
              <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs">
                WHY JOIN OUR NETWORK?
              </span>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                The hospitality industry is built on people, and we believe that great professionals deserve access to meaningful opportunities.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                By joining the De KITCHEN MASTER network, you gain access to opportunities across various sectors of the hospitality industry.
              </p>
            </div>

            {/* Right column — benefits card */}
            <div className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.03]">
              <h3 className="text-2xl font-black text-white mb-6">
                Benefits of Joining Us
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-gray-300 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 3: APPLICANT DIRECTORY CATALOG ───── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-4">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Who We Hire
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              WHO CAN APPLY?
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              We welcome applications from qualified culinary and hospitality professionals including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 — Culinary Professionals */}
            <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-6">
                Culinary Professionals
              </h3>
              <ul className="space-y-3">
                {culinaryRoles.map((role) => (
                  <li key={role} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm leading-snug">
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 — Kitchen Support Professionals */}
            <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-6">
                Kitchen Support Professionals
              </h3>
              <ul className="space-y-3">
                {kitchenSupportRoles.map((role) => (
                  <li key={role} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm leading-snug">
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 — Hospitality Professionals */}
            <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-6">
                Hospitality Professionals
              </h3>
              <ul className="space-y-3">
                {hospitalityRoles.map((role) => (
                  <li key={role} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm leading-snug">
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 4: THE SELECTION JOURNEY ───── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-6">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              OUR SELECTION PROCESS
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-10">
            <p>
              Every candidate who joins our network undergoes a professional assessment process.
            </p>
            <p>
              This helps us maintain the standards expected by our clients and ensures that opportunities are matched with suitable professionals.
            </p>
          </div>

          <h3 className="text-2xl font-black text-gray-900 text-center mb-10">
            Our Process Includes:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {selectionSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-500"
              >
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-bold text-gray-900 leading-snug">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 5: PROFESSIONAL DEVELOPMENT ROW ───── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Grow With Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-8">
              PROFESSIONAL DEVELOPMENT
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                We believe that learning never stops.
              </p>
              <p>
                Through our DKM Professional Chef Training and Mentorship Program, hospitality professionals have access to opportunities for personal growth, skill improvement, industry exposure, and professional development.
              </p>
              <p>
                Our goal is not only to connect professionals with opportunities but also to help them build sustainable and rewarding careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 6: CONVERSATIONAL RECRUITMENT ENGINE ───── */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
            Take The Leap
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-4">
            JOIN OUR TALENT NETWORK
          </h2>
          <p className="text-lg md:text-xl font-bold text-gray-800 mb-4">
            Ready to take the next step in your hospitality career?
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium max-w-4xl mx-auto mb-10">
            Submit your details and become part of a growing community of culinary and hospitality professionals trusted by clients across Nigeria and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 max-w-xl mx-auto">
            <a
              href="#"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              APPLY NOW
            </a>
            <a
              href="#"
              className="inline-block border-2 border-gray-300 hover:border-primary text-gray-800 hover:text-primary font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:-translate-y-1"
            >
              SUBMIT YOUR CV
            </a>
            <a
              href="#"
              className="inline-block text-primary hover:text-primary-dark font-bold px-8 py-4 transition-all duration-300 hover:-translate-y-1 underline underline-offset-4 decoration-primary/30"
            >
              JOIN OUR NETWORK
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
