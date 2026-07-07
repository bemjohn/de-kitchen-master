import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Partner With Us | De KITCHEN MASTER",
  description:
    "Build strategic hospitality partnerships with De KITCHEN MASTER. Recruitment, hospitality collaboration, international placements, and more.",
};

const partnerGroups = [
  "Restaurants, lounges, hotels, and resorts",
  "Corporate organizations and private institutions",
  "Catering companies and food service operators",
  "Hospitality investors and business owners",
  "Food equipment manufacturers and suppliers",
  "International recruitment agencies and employers",
  "Private estates and high-end residential clients",
];

const opportunities = [
  {
    title: "Recruitment Partnerships",
    body: "We supply trained and verified chefs and kitchen professionals for long-term or contract-based staffing solutions.",
  },
  {
    title: "Hospitality Collaboration",
    body: "We work with hospitality businesses to improve operations, staffing structures, and service delivery.",
  },
  {
    title: "International Chef Placement",
    body: "We partner with overseas clients and agencies to provide skilled Nigerian chefs for global opportunities.",
  },
  {
    title: "Project-Based Collaboration",
    body: "We join forces on restaurant openings, kitchen setups, catering projects, and hospitality developments.",
  },
  {
    title: "Equipment & Industry Partnerships",
    body: "We collaborate with kitchen equipment suppliers and hospitality brands to support full-service kitchen solutions.",
  },
];

const valueItems = [
  "Strong network of professional chefs and hospitality talent",
  "Proven experience in recruitment and consultancy",
  "Structured and reliable service delivery system",
  "Ability to scale from small operations to large hospitality projects",
  "Trusted brand within Nigeria\u2019s hospitality industry",
];

export default function PartnerPage() {
  return (
    <div className="pt-20 bg-white">
      {/* ───── SECTION 1: HERO ───── */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
              PARTNER WITH US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Build Strategic Hospitality Partnerships with De KITCHEN MASTER
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                At De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, we believe in collaboration that creates long-term value. We partner with individuals, businesses, and organizations across the hospitality ecosystem to deliver world-class culinary and staffing solutions.
              </p>
            </div>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                Whether you are a hospitality business, corporate organization, food service brand, or international client, we provide structured partnership opportunities designed for growth, efficiency, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 2: PARTNERSHIP DEMOGRAPHICS ───── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-4">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Who We Work With
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              WHO CAN PARTNER WITH US
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600 font-medium">
              We welcome partnerships with:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto">
            {partnerGroups.map((group) => (
              <div
                key={group}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm leading-snug">
                  {group}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 3: OPPORTUNITIES MATRIX ───── */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              PARTNERSHIP OPPORTUNITIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((item) => (
              <div
                key={item.title}
                className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-primary/40"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-medium text-sm">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 4: VALUE PROP LEDGER ───── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              The Value We Bring
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-10">
              WHY PARTNER WITH US
            </h2>
            <ul className="space-y-4">
              {valueItems.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───── SECTION 5: COMPLIANCE MANIFESTO & CTA ───── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              OUR COMMITMENT
            </span>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-10">
              Every partnership is built on professionalism, transparency, and long-term value creation. We do not focus on one-time transactions, we build lasting hospitality relationships that benefit all parties involved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/become-a-partner"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                BECOME A PARTNER
              </Link>
              <a
                href="/strategic_partnership_proposal.pdf"
                download
                className="inline-block border-2 border-gray-300 hover:border-primary text-gray-800 hover:text-primary font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:-translate-y-1"
              >
                DOWNLOAD PARTNERSHIP PROPOSAL
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
