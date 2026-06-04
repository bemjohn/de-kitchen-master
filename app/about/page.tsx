import { Award, ShieldCheck, Briefcase, Lightbulb, Users, ThumbsUp, Check } from "lucide-react";
import DistinctivesAccordion, { type Distinctive } from "@/components/About/DistinctivesAccordion";

export const metadata = {
  title: "About Us | De KITCHEN MASTER Culinary & Hospitality Services Ltd",
  description:
    "A full-service culinary and hospitality powerhouse across Africa. Registered with the CAC, delivering world-class service across the food, beverage, and hospitality industry.",
};

const timeline = [
  {
    title: "10+ Years Expertise",
    description:
      "Mastery in kitchen management, menu engineering, hospitality consulting, and culinary education.",
  },
  {
    title: "7+ Years of Impact",
    description:
      "Transforming De KITCHEN MASTER from a single vision into a full-fledged corporate hospitality powerhouse.",
  },
  {
    title: "Hundreds Mentored",
    description:
      "Developing careers, raising industry standards, and matching elite chefs to premium global placement opportunities.",
  },
];

const values = [
  {
    name: "Excellence",
    icon: Award,
    gloss: "We believe excellence is a standard. Every project is delivered with a commitment to quality and outstanding results.",
  },
  {
    name: "Integrity",
    icon: ShieldCheck,
    gloss: "We operate with honesty, transparency, accountability, and respect in every aspect of our business.",
  },
  {
    name: "Professionalism",
    icon: Briefcase,
    gloss: "We maintain high industry standards, disciplined operations, and a commitment to continuous improvement.",
  },
  {
    name: "Innovation",
    icon: Lightbulb,
    gloss: "We embrace creativity, modern solutions, and forward-thinking strategies that help our clients remain competitive.",
  },
  {
    name: "People Development",
    icon: Users,
    gloss: "We are passionate about nurturing talent, developing careers, and creating opportunities for hospitality professionals.",
  },
  {
    name: "Customer Satisfaction",
    icon: ThumbsUp,
    gloss: "Our clients remain at the center of everything we do. Their success is our success.",
  },
];

const distinctives: Distinctive[] = [
  {
    title: "Complete Hospitality Partner",
    description:
      "We provide solutions across the hospitality value chain, from recruitment and consulting to catering, training, operations, and business support.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Proven Industry Experience",
    description:
      "Our recommendations are based on real-world hospitality experience, not theory.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Strong Professional Network",
    description:
      "We maintain access to qualified chefs, kitchen professionals, hospitality specialists, consultants, and trainers.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Customized Solutions",
    description:
      "Every client is unique. We tailor our services to meet specific business goals and operational requirements.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Results-Driven & Long-Term",
    description:
      "We focus on building partnerships, delivering measurable value, and driving sustainable growth.",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 bg-white">
      {/* 1. HERO — Split Layout */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs">
                Who We Are
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight">
                A Full-Service Culinary &amp; Hospitality Powerhouse Across Africa.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd is a full-fledged hospitality and culinary solutions company, renowned for delivering world-class service across the food, beverage, and hospitality industry. Proudly registered with the Corporate Affairs Commission (CAC) in Nigeria, we operate with full legal accreditation, ensuring every service we provide is backed by professionalism, accountability, and a passion for excellence. With a strong foundation, an expansive network, and a reputation for reliability, we are your trusted partner anywhere in Nigeria and across Africa.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-primary text-sm font-bold">
                  <Check className="w-4 h-4" strokeWidth={3} /> CAC Registered
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-primary text-sm font-bold">
                  <Check className="w-4 h-4" strokeWidth={3} /> 7+ Years of Impact
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-primary text-sm font-bold">
                  <Check className="w-4 h-4" strokeWidth={3} /> Lagos • Abuja • Africa
                </span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-[420px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop"
                  alt="Professional culinary team at work"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Established</p>
                  <p className="text-gray-900 font-black text-2xl">7+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER STORY + 7-YEAR TIMELINE */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              {/* TODO: Replace placeholder image with the official profile asset of Chef Bishop. */}
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2000&auto=format&fit=crop"
                  alt="Chef Bishop, Founder & CEO"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              </div>
              <div className="mt-6">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                  Meet Chef Bishop — Founder &amp; CEO
                </h2>
                <p className="mt-1 text-primary font-bold uppercase tracking-widest text-sm">De KITCHEN MASTER</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
                  The Founder's Story
                </span>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  Chef Bishop is a respected hospitality consultant, professional chef, recruiter, trainer, mentor, and entrepreneur with over 10 years of hands-on experience. De KITCHEN MASTER emerged from firsthand industry challenges he observed, where ventures struggled with staffing shortages and operational inefficiencies. Rather than accept these challenges, Chef Bishop chose to be the solution. Over seven years, he has mentored hundreds of chefs, revived struggling eateries, and connected top-tier talent across Nigeria, Ghana, South Africa, and beyond.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-8">Our Journey</h3>
                <ol className="relative border-l-2 border-primary/30 ml-2 space-y-10">
                  {timeline.map((item, i) => (
                    <li key={item.title} className="pl-8 relative">
                      <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-primary border-4 border-white shadow" />
                      <p className="text-primary font-black uppercase tracking-wider text-sm mb-1">
                        Milestone {i + 1}
                      </p>
                      <h4 className="text-xl font-black text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-700 font-medium leading-relaxed">{item.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span className="text-[14rem] md:text-[22rem] font-black text-white/[0.04] tracking-tighter leading-none">
            AFRICA
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Purpose &amp; Direction
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              Vision &amp; Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.03]">
              <span className="text-primary font-bold tracking-[0.25em] uppercase text-xs">
                Our Vision for Africa
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-black leading-tight">
                To become Africa's most trusted culinary and hospitality solutions company.
              </h3>
              <p className="mt-6 text-gray-300 leading-relaxed font-medium">
                Recognized for excellence, professionalism, innovation, and the ability to transform hospitality businesses while creating opportunities for hospitality professionals.
              </p>
            </div>

            <div className="relative p-8 md:p-10 rounded-3xl border-2 border-primary bg-primary/5">
              <span className="text-primary font-bold tracking-[0.25em] uppercase text-xs">
                Our Mission
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-black leading-tight">
                To provide comprehensive culinary and hospitality solutions.
              </h3>
              <p className="mt-6 text-gray-300 leading-relaxed font-medium">
                We help businesses operate efficiently, improve service delivery, develop strong teams, and achieve sustainable growth through professional recruitment, consulting, catering, and training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SCROLLER */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-12">
          <div className="text-center">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Our Core Values
            </h2>
          </div>
        </div>

        {/* Marquee (md+) */}
        <div className="hidden md:block overflow-hidden pb-20 group">
          <div className="flex w-max animate-infinite-scroll gap-12 px-6 group-hover:[animation-play-state:paused]">
            {[...values, ...values].map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={`${v.name}-${i}`} className="flex-shrink-0 w-72 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7" strokeWidth={2.25} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-1">{v.name}</h3>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">{v.gloss}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Static grid (mobile) */}
        <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.name} className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" strokeWidth={2.25} />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-gray-900 mb-1">{v.name}</h3>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">{v.gloss}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY WE ARE DIFFERENT */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              The DKM Edge
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Why We Are Different
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-medium">
              Five distinct commitments that define how we partner with hospitality businesses across Africa.
            </p>
          </div>

          <DistinctivesAccordion items={distinctives} />
        </div>
      </section>
    </div>
  );
}
