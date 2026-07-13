import Link from "next/link";
import {
  Users,
  ChefHat,
  Presentation,
  GraduationCap,
  MessageCircle,
  HeartHandshake,
  CalendarCheck,
  Network,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ArrowRight,
  Sparkles,
  Star,
  Trophy,
  Camera,
  Play,
  Send,
  Store,
  Building2,
  UtensilsCrossed,
  Briefcase,
  PartyPopper,
} from "lucide-react";

export const metadata = {
  title: "DKM Events & Community | De KITCHEN MASTER",
  description:
    "An initiative by De KITCHEN MASTER to bring together chefs, hospitality professionals, and industry leaders across Nigeria and beyond.",
};

const whatWeDoItems = [
  {
    title: "Chef Networking Meetups",
    description:
      "Regular gatherings where culinary professionals connect, share experiences, and build lasting industry relationships.",
    Icon: Users,
  },
  {
    title: "Culinary Training Workshops",
    description:
      "Hands-on sessions led by experienced chefs to sharpen technical skills and introduce new culinary techniques.",
    Icon: ChefHat,
  },
  {
    title: "Hospitality Seminars",
    description:
      "Industry-focused talks covering trends, best practices, and operational excellence in hospitality management.",
    Icon: Presentation,
  },
  {
    title: "Industry Discussions",
    description:
      "Open forums for professionals to debate challenges, share insights, and shape the future of the industry.",
    Icon: MessageCircle,
  },
  {
    title: "Mentorship Programs",
    description:
      "Structured guidance from seasoned professionals to support career growth and skill development.",
    Icon: GraduationCap,
  },
  {
    title: "Professional Gatherings",
    description:
      "Exclusive events designed to foster camaraderie, celebrate achievements, and strengthen the community bond.",
    Icon: HeartHandshake,
  },
  {
    title: "Annual DKM Chefs Get-Together",
    description:
      "The flagship event of the year bringing together chefs and hospitality leaders from across the nation.",
    Icon: CalendarCheck,
  },
];

const whoCanJoinItems = [
  { title: "Professional Chefs", description: "Experienced culinary professionals seeking community and growth.", Icon: ChefHat },
  { title: "Aspiring Chefs / Students", description: "Future culinary talents eager to learn and connect with industry mentors.", Icon: GraduationCap },
  { title: "Restaurant & Lounge Staff", description: "Hospitality teams looking to expand their professional network.", Icon: Store },
  { title: "Business Owners", description: "Entrepreneurs and restaurateurs building within the food ecosystem.", Icon: Building2 },
  { title: "Catering Professionals", description: "Event and catering experts seeking collaboration and exposure.", Icon: UtensilsCrossed },
  { title: "Food Entrepreneurs", description: "Innovators driving food businesses and culinary startups.", Icon: Briefcase },
  { title: "Industry Partners", description: "Organizations and brands aligned with hospitality excellence.", Icon: Globe },
];

const getTogetherHighlights = [
  { label: "Networking", icon: Network },
  { label: "Learning", icon: BookOpen },
  { label: "Collaboration", icon: HeartHandshake },
  { label: "Exposure", icon: Sparkles },
  { label: "Talent Discovery", icon: Star },
  { label: "Growth", icon: Trophy },
];

export default function EventsCommunityPage() {
  return (
    <div className="pt-20 bg-white">
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: HERO                                                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop"
            alt="Networking event background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4 text-white/80">
              DKM COMMUNITY INITIATIVE
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
              DKM Events &amp; Community
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-medium max-w-2xl">
              Connecting Chefs, Hospitality Professionals &amp; Industry Leaders.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#get-involved"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Get Involved
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.5} />
              </Link>
              <Link
                href="#what-we-do"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 hover:border-white text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: MISSION & PICTURE GALLERY                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
                About the Community
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
                Who We Are
              </h2>
              <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  An initiative by De KITCHEN MASTER&reg; to bring together chefs, hospitality professionals, food entrepreneurs, and industry stakeholders who are passionate about raising the standards of the culinary and hospitality industry across Nigeria and beyond.
                </p>
                <p>
                  It is more than an event space &mdash; it is a growing professional community built to educate, inspire, connect, and elevate the standards of the hospitality industry.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1463183547458-6a2c760d0912?q=80&w=600&auto=format&fit=crop"
                    alt="Long wooden table with plates of food"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-gray-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1577308856961-8e9ec50d0c67?q=80&w=600&auto=format&fit=crop"
                    alt="Assorted type foods"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-gray-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1723853310545-b657f3e36396?q=80&w=600&auto=format&fit=crop"
                    alt="Group of people sitting around a table full of food"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1543168256-8133cc8e3ee4?q=80&w=600&auto=format&fit=crop"
                    alt="Fruits on table"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: WHAT WE DO (ANIMATED TILE GRID)                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="what-we-do" className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Our Programs
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              What We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {whatWeDoItems.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/0 rounded-b-2xl transition-all duration-300 group-hover:bg-primary" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: PURPOSE (SPLIT SCREEN)                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
                Purpose of the Community
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Network className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">Connect Chefs with Leaders</h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                      Bridge the gap between culinary professionals and industry leaders to foster collaboration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">Learning &amp; Growth</h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                      Provide continuous access to workshops, seminars, and skill-building opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <HeartHandshake className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">Mentorship &amp; Support</h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                      Offer structured mentorship programs that guide professionals through their career journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">Talent Discovery</h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                      Identify and showcase emerging talent within the hospitality ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative overflow-hidden rounded-3xl bg-gray-100 aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1564638305579-5e395c9b62c7?q=80&w=800&auto=format&fit=crop"
                  alt="Cooked food on table"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white px-6 py-3 rounded-2xl shadow-xl hidden lg:block">
                <p className="text-sm font-bold">Building the Future of Hospitality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: WHO CAN JOIN (PEOPLE CARDS)                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-900 text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3 text-white/80">
              Membership
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Who Can Join
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {whoCanJoinItems.map((item) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="group bg-white/[0.04] border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-primary/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-black text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 6: DKM ANNUAL CHEFS GET-TOGETHER SPOTLIGHT             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="relative overflow-hidden rounded-3xl bg-gray-900">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop"
                alt="Annual Chefs Get-Together"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70" />
            </div>
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4 text-white/80">
                  <PartyPopper className="w-4 h-4" strokeWidth={2} />
                  FLAGSHIP EVENT
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
                  DKM Annual Chefs Get-Together: Connecting Nigeria and Beyond
                </h2>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium mb-8">
                  The most anticipated culinary gathering of the year &mdash; bringing together chefs, hospitality leaders, and industry stakeholders for a celebration of excellence, collaboration, and community.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {getTogetherHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="bg-white/[0.06] border border-white/10 rounded-xl p-4 text-center transition-all duration-300 hover:bg-white/[0.1] hover:border-primary/30"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <span className="text-sm font-bold text-white">{item.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8">
                <Link
                  href="#get-involved"
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  Join the Next Edition
                  <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 7: WHY THIS COMMUNITY EXISTS                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Our Why
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-8">
              A Connected Hospitality Ecosystem
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                The hospitality industry thrives when people are connected, trained, and supported. At De KITCHEN MASTER, we recognized a gap in the market &mdash; there was no central platform where chefs, hospitality professionals, and industry leaders could come together to share knowledge, collaborate on projects, and grow collectively.
              </p>
              <p>
                The DKM Events &amp; Community initiative was created to raise industry standards, bridge gaps, promote professional development, and strengthen hospitality networks across Africa.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-3xl font-black text-primary mb-1">7+</div>
                <div className="text-sm text-gray-600 font-medium">Years of Impact</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-3xl font-black text-primary mb-1">500+</div>
                <div className="text-sm text-gray-600 font-medium">Community Members</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-3xl font-black text-primary mb-1">50+</div>
                <div className="text-sm text-gray-600 font-medium">Events Hosted</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-3xl font-black text-primary mb-1">Nationwide</div>
                <div className="text-sm text-gray-600 font-medium">Network Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 8: GET INVOLVED (CTA)                                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="get-involved" className="bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <span className="inline-block text-white/80 font-bold tracking-[0.25em] uppercase text-xs mb-3">
            Take the Next Step
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-10">
            Get Involved
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center justify-between px-8 py-5 bg-white text-primary font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-lg">Attend an Event</span>
              <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center justify-between px-8 py-5 bg-white/10 border-2 border-white text-white font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary hover:shadow-xl"
            >
              <span className="text-lg">Join the Community</span>
              <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center justify-between px-8 py-5 bg-white/10 border-2 border-white text-white font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary hover:shadow-xl"
            >
              <span className="text-lg">Collaborate With Us</span>
              <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link
              href="/partner"
              className="group relative overflow-hidden inline-flex items-center justify-between px-8 py-5 bg-white text-primary font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-lg">Become a Partner</span>
              <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>
          <p className="mt-10 text-lg md:text-xl text-white/90 leading-relaxed font-medium max-w-2xl mx-auto">
            Whether you are a chef, a student, a business owner, or an industry partner &mdash; there is a place for you in the DKM community.
          </p>
        </div>
      </section>
    </div>
  );
}
