import Link from "next/link";
import { Award, ShieldCheck, Briefcase, Lightbulb, Users, ThumbsUp, Check, Compass, ChefHat, GraduationCap, UserPlus, Settings } from "lucide-react";
import DistinctivesAccordion, { type Distinctive } from "@/components/About/DistinctivesAccordion";
import TeamGrid from "@/components/TeamGrid";

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

const leadershipRoles = [
  { title: "Hospitality Consultants", label: "Strategic Advisory", Icon: Compass },
  { title: "Professional Chefs", label: "Culinary Masters", Icon: ChefHat },
  { title: "Elite Trainers", label: "Standard Bearers", Icon: GraduationCap },
  { title: "Talent Recruiters", label: "People Finders", Icon: UserPlus },
  { title: "Operational Specialists", label: "Systems Driven", Icon: Settings },
  { title: "Industry Experts", label: "Expertise Driven", Icon: Lightbulb },
];

const distinctives: Distinctive[] = [
  {
    title: "Complete Hospitality Partner",
    description:
      "We provide solutions across the hospitality value chain, from recruitment and consulting to catering, training, operations, and business support.",
    image: "/others/5.jpeg",
  },
  {
    title: "Proven Industry Experience",
    description:
      "Our recommendations are based on real-world hospitality experience, not theory.",
    image: "/others/5.jpeg",
  },
  {
    title: "Strong Professional Network",
    description:
      "We maintain access to qualified chefs, kitchen professionals, hospitality specialists, consultants, and trainers.",
    image: "/others/5.jpeg",
  },
  {
    title: "Customized Solutions",
    description:
      "Every client is unique. We tailor our services to meet specific business goals and operational requirements.",
    image: "/others/5.jpeg",
  },
  {
    title: "Results-Driven & Long-Term",
    description:
      "We focus on building partnerships, delivering measurable value, and driving sustainable growth.",
    image: "/others/5.jpeg",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 bg-white">
      {/* 1. HERO — Split Layout */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs">
                Who We Are
              </span>
              <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                <p>
                  De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd is a full-fledged hospitality and culinary solutions company, renowned for delivering world-class service across the food, beverage, and hospitality industry. We specialize in a full spectrum of services, including professional chef recruitment, hospitality staffing, private chef services, corporate dining solutions, indoor and outdoor catering, restaurant and hotel setup, culinary training, menu development, operational consulting, and business development support.
                </p>
                <p>
                  Founded on the principles of professionalism, innovation, integrity, and service excellence, DE KITCHEN MASTER has grown into a respected partner for restaurants, hotels, lounges, resorts, event companies, corporate organizations, financial institutions, and private clients seeking bespoke hospitality solutions.
                </p>
                <p>
                  Our brand is built on the ability to handle diverse hospitality needs. From luxury hotel staffing and corporate meal plans to private dining events, weddings, and large-scale food operations, we deliver tailored solutions that meet the highest standards. Whether it’s a festive corporate lunch, a luxury hotel launch, or a high-profile private event, we bring unmatched expertise, creativity, and a commitment to excellence.
                </p>
                <p>
                  Proudly registered with the Corporate Affairs Commission (CAC) in Nigeria, we operate with full legal accreditation, ensuring every service we provide is backed by professionalism, accountability, and a passion for excellence. With a strong foundation, an expansive network, and a reputation for reliability, DE KITCHEN MASTER is your trusted partner for every culinary and hospitality need, anywhere in Nigeria and across Africa.
                </p>
              </div>
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
            <div className="lg:col-span-5 h-full">
              <div className="relative h-[420px] lg:h-full lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                <img
                  src="/others/4.jpeg"
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

      {/* 2. OUR STORY */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="mb-12 lg:mb-16">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              The Foundation
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Our Story
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            <div className="md:col-span-2 space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                Every great company begins with a vision. De KITCHEN MASTER was born from a deep passion for hospitality and a desire to raise professional standards within the culinary industry. Founded by Chef Bishop, a visionary hospitality professional with over a decade of experience, the company emerged from firsthand industry challenges.
              </p>
              <p>
                Chef Bishop observed that many restaurants, hotels, and hospitality ventures struggled due to staffing shortages, operational inefficiencies, and limited professional development. Rather than accept these challenges, Chef Bishop chose to be the solution.
              </p>
              <p>
                What began as a vision to uplift chefs and hospitality businesses has grown into a full-service hospitality powerhouse. Over seven years, De KITCHEN MASTER has not only provided staffing solutions but has been instrumental in turning around struggling restaurants, launching new hotels, and providing bespoke culinary services for private clients and corporate organizations.
              </p>
              <p>
                Today, De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd stands as a trusted hospitality partner serving clients across multiple sectors. Our journey continues to be driven by a commitment to raising standards, creating opportunities, developing talent, and helping hospitality businesses achieve sustainable success.
              </p>
            </div>

            <aside className="md:col-span-1">
              <div className="md:sticky md:top-28 relative rounded-2xl overflow-hidden shadow-xl border-l-4 border-primary min-h-[420px]">
                <video
                  src="/others/1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </aside>
          </div>

          <p className="mt-16 lg:mt-20 text-2xl md:text-3xl lg:text-4xl font-medium italic text-gray-900 leading-snug text-center max-w-4xl mx-auto">
            From a single vision to a growing hospitality brand, our story is one of passion, resilience, growth, and an unwavering dedication to excellence.
          </p>
        </div>
      </section>

      {/* 3. FOUNDER STORY + 7-YEAR TIMELINE */}
      <section id="chef-bishop" className="relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 sticky top-28 self-start">
              <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/team/chef_bishop.jpeg"
                  alt="Chef Bishop, Founder & CEO"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10">
              <div>
                <h3 className="text-2xl font-black text-white mb-2">MEET CHEF BISHOP</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-8">Founder &amp; Chief Executive Officer (CEO)</p>
                <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                  <p>
                    EZEKIEL E. OTON, Popularly known as Chef Bishop is a respected Culinary &amp; Hospitality consultant, professional chef, recruiter, trainer, mentor, and entrepreneur with over 10 years of hands-on experience in the hospitality industry.
                  </p>
                  <p>
                    Over the course of his career, he has built a reputation for excellence by supporting restaurants, hotels, lounges, catering businesses, event companies, corporate organizations, and private clients with practical solutions that improve operations, service delivery, staffing, profitability, and overall business performance.
                  </p>
                  <p>
                    His expertise spans restaurant operations, kitchen management, hospitality consulting, menu engineering, food production, recruitment, staff training, catering management, business development, and culinary education.
                  </p>
                  <p>
                    Beyond providing services, Chef Bishop has dedicated a significant part of his career to supporting the growth and development of hospitality professionals. Through recruitment, mentorship, training, networking opportunities, and career guidance, he has helped hundreds of chefs and culinary professionals secure meaningful employment opportunities and advance their careers within the hospitality industry.
                  </p>
                  <p>
                    His influence extends beyond kitchens and restaurants. He has consulted on hospitality projects, supported business startups, contributed to workforce development, and helped organizations build stronger hospitality teams.
                  </p>
                  <p>
                    As the founder of De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, Chef Bishop continues to lead with a vision of transforming hospitality standards while creating opportunities for professionals and delivering exceptional value to clients.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white mb-8">Our Journey</h3>
                <ol className="relative border-l-2 border-primary/30 ml-2 space-y-10">
                  {timeline.map((item, i) => (
                    <li key={item.title} className="pl-8 relative">
                      <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-primary border-4 border-white shadow" />
                      <p className="text-primary font-black uppercase tracking-wider text-sm mb-1">
                        Milestone {i + 1}
                      </p>
                      <h4 className="text-xl font-black text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300 font-medium leading-relaxed">{item.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP TEAM */}
      <section id="team" className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              OUR PEOPLE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-8">
              Leadership Team
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                Behind every successful hospitality project is a team of experienced professionals committed to excellence.
              </p>
              <p>
                The leadership team at De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd consists of hospitality consultants, professional chefs, trainers, recruiters, operational specialists, and industry experts who work together to deliver exceptional results for our clients. Our combined experience allows us to understand hospitality challenges from multiple perspectives and develop practical solutions that create measurable value.
              </p>
            </div>
          </div>

          <TeamGrid />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
            {leadershipRoles.map((role) => {
              const Icon = role.Icon;
              return (
                <div
                  key={role.title}
                  className="group relative bg-slate-50 border border-slate-100 rounded-xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-primary/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-4 transition-colors duration-300 ease-in-out group-hover:bg-primary group-hover:text-white">
                    <Icon className="w-6 h-6" strokeWidth={2.25} />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-2">
                    {role.label}
                  </p>
                  <h3 className="text-lg md:text-xl font-black text-gray-900 leading-tight">
                    {role.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. VISION & MISSION */}
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

      {/* 6. CORE VALUES SCROLLER */}
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

      {/* 7. WHY WE ARE DIFFERENT */}
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

      {/* 8. PARTNERSHIP TRANSITION */}
      <div className="w-full border-t border-slate-100 bg-slate-50/50 py-16 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
            COLLABORATION
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Build Strategic Hospitality Partnerships with De KITCHEN MASTER
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
            We partner with individuals, businesses, and organizations across the hospitality ecosystem to deliver world-class culinary and staffing solutions. Whether you are a hospitality business, corporate organization, food service brand, or international client, we provide structured partnership opportunities designed for growth, efficiency, and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 max-w-md mx-auto">
            <Link
              href="/partner"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              EXPLORE PARTNERSHIP OPPORTUNITIES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
