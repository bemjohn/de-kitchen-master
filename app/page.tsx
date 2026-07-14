import Link from "next/link";
import { ArrowRight, Award, Briefcase, UserPlus, ChefHat, MapPin, Globe2, ShieldCheck, ThumbsUp, Check, Compass, Sparkles } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialCard from "@/components/TestimonialCard";
import StatsCounter from "@/components/StatsCounter";

const servicesSummary = [
  {
    title: "Staffing & Recruitment",
    content:
      "Sourcing, screening, and deploying qualified chefs and hospitality professionals to ensure the highest industry standards.",
    highlights: ["Executive Chefs", "Head Chefs", "Sous Chefs", "Front-of-House Personnel"],
    Icon: UserPlus,
  },
  {
    title: "Hospitality Consultancy",
    content:
      "Strategic operational planning, kitchen workflow design, and equipment planning to build strong foundations for long-term business success.",
    highlights: ["Concept Development", "Kitchen Setup", "SOP Systems"],
    Icon: Compass,
  },
  {
    title: "Bespoke Culinary Services",
    content:
      "Personalized culinary experiences for individuals, families, corporate organizations, and exclusive luxury events.",
    highlights: ["Private Chef Services", "Contract Chef Rentage", "Fine Dining"],
    Icon: ChefHat,
  },
  {
    title: "Business Transformation",
    content:
      "Implementing food costing controls, inventory systems, staff training, and restructuring underperforming hospitality venues to achieve sustainable growth.",
    highlights: ["Staff Training", "Food Costing", "Restaurant Revamps"],
    Icon: Sparkles,
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroCarousel />

      {/* 2. About Us */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
              Africa's Culinary &amp; Hospitality Solutions Hub
            </h2>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-6">
              Welcome to De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, where culinary excellence meets hospitality innovation.
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-6">
              We are a leading culinary and hospitality solutions company dedicated to helping individuals, businesses, and hospitality brands build, operate, and grow successful culinary and hospitality ventures. From private residences and luxury apartments to restaurants, hotels, lounges, cafés, bakeries, resorts, and corporate organizations, we provide complete solutions tailored to the unique needs of every client.
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-6">
              With years of industry experience and a multidisciplinary team of culinary professionals, hospitality consultants, executive chefs, mixologists, procurement specialists, trainers, and technical experts, we deliver practical, innovative, and results driven solutions that improve operations, elevate guest experiences, and support long-term business growth.
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-6">
              Whether you're looking to hire a trusted live-in chef for your home, rent a professional chef for a special occasion, recruit experienced hospitality professionals, launch a new restaurant, revamp an existing food business, develop profitable menus, set up a commercial kitchen, install or service kitchen equipment, create a world class beverage program, or train your hospitality team, De KITCHEN MASTER is your trusted partner every step of the way.
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              Our commitment goes beyond providing services, we build lasting relationships through professionalism, integrity, prompt communication, attention to detail, and a genuine passion for excellence. Every project we undertake is approached with the same dedication, whether it involves supporting a private family, transforming a restaurant, or consulting for a large hospitality operation. Today, De KITCHEN MASTER proudly serves clients across Nigeria and beyond, delivering comprehensive culinary and hospitality solutions that create value, inspire confidence, and produce measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services Summary */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Complete Culinary &amp; Hospitality Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-bold mt-2 mb-4">
              Everything You Need Under One Trusted Brand
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              At De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, we provide complete culinary and hospitality solutions designed to meet the needs of private clients, restaurants, hotels, lounges, cafés, bakeries, corporate organisations, and hospitality investors.
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 mt-4 text-base md:text-lg leading-relaxed font-medium">
              From Chef Rental, Private Chef Services, and Chef Recruitment to Restaurant &amp; Hotel Consultancy, Menu Engineering, Bar &amp; Beverage Consultancy, Kitchen Equipment Services, and Hospitality Training, we bring together experienced professionals dedicated to delivering excellence, innovation, and results.
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 mt-4 mb-12 text-base md:text-lg leading-relaxed font-medium">
              Whether you're building a new hospitality business, improving an existing one, or simply looking for a trusted chef for your home, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            {servicesSummary.map((service) => {
              const Icon = service.Icon;
              return (
                <article
                  key={service.title}
                  className="group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white border border-slate-100 rounded-2xl p-6 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-5 transition-colors duration-300 ease-in-out group-hover:bg-primary group-hover:text-white">
                    <Icon className="w-6 h-6" strokeWidth={2.25} />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium mb-5">{service.content}</p>
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-2">Highlight</p>
                    <ul className="space-y-1.5">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" strokeWidth={3.5} />
                          <span className="text-xs text-gray-800 font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-lg"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Restaurant, Hotel & Hospitality Consultancy */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              CONSULTANCY
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
              Restaurant, Hotel &amp; Hospitality Consultancy
            </h2>
            <p className="max-w-3xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-4">
              Helping Hospitality Businesses Grow with Confidence
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-4">
              We partner with restaurants, hotels, lounges, cafés, bakeries, and hospitality investors to build, improve, and transform hospitality businesses through practical, innovative, and results-driven consultancy.
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-8">
              Our services include restaurant setup, operational improvement, menu engineering, recipe development, recruitment, kitchen setup, bar consultancy, procurement, and hospitality training.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-lg"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Trusted By Businesses, Hotels, Restaurants & Private Clients */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Trusted By Businesses, Hotels, Restaurants &amp; Private Clients</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                At De KITCHEN MASTER, we have built a strong reputation as a trusted name in the hospitality and culinary industry. Our clients include hotels, restaurants, corporate organizations, event planners, and private clients who rely on us for dependable, high-quality culinary solutions. Through consistent service delivery, professional standards, and a commitment to excellence, we have earned the confidence of businesses and individuals across the country. Whether supporting a new restaurant launch, recruiting top kitchen talent, or providing consulting and training, our focus remains on adding real value to every client we serve. As we continue to grow, De KITCHEN MASTER remains a trusted partner dedicated to delivering results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md group">
                <img src="/others/2.jpeg" alt="Commercial kitchen" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md group">
                <img src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop" alt="Catering buffet" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md group">
                <img src="/others/3.jpeg" alt="Chef plating" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md group">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop" alt="Culinary team" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Impact In Numbers */}
      <section className="py-24 bg-gray-900 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Impact In Numbers</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                <StatsCounter end={7} />
              </div>
              <div className="text-primary-light font-bold uppercase tracking-wider text-sm mb-3">Years</div>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">Of Excellence. Delivering professional hospitality solutions and supporting businesses across the food and beverage industry.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                <StatsCounter end={500} />
              </div>
              <div className="text-primary-light font-bold uppercase tracking-wider text-sm mb-3">Deployed</div>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">Chefs &amp; Hospitality Professionals Deployed. Successfully recruiting and deploying qualified culinary experts for restaurants, hotels, and private clients.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                <StatsCounter end={100} />
              </div>
              <div className="text-primary-light font-bold uppercase tracking-wider text-sm mb-3">Completed</div>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">Successful Projects Completed. Providing restaurant setup, kitchen development, consulting, menu engineering, and training.</p>
            </div>

            <div className="text-center min-w-0">
              <div className="text-3xl md:text-4xl font-black text-primary mb-2 leading-tight break-words">Nationwide</div>
              <div className="text-primary-light font-bold uppercase tracking-wider text-sm mb-3">Coverage</div>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">Serving clients across Lagos, Abuja, and major cities throughout Nigeria while maintaining capacity to support projects beyond national borders.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                <StatsCounter end={10} />
              </div>
              <div className="text-primary-light font-bold uppercase tracking-wider text-sm mb-3">Expertise</div>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">Of Industry Experience. Under the leadership of Chef Bishop, an experienced hospitality consultant with over a decade of practical industry expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Clients Trust Us */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Clients Trust Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="relative h-full min-h-[560px] rounded-3xl overflow-hidden shadow-md group">
              <img src="/others/1.jpeg" alt="Modern culinary experience" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
            </div>

            <div className="flex flex-col">
              <div className="space-y-5 flex-grow">
                {[
                  "Complete Culinary & Hospitality Solutions Under One Roof",
                  "Trusted Chef Rental & Private Chef Services",
                  "Restaurant, Hotel & Lounge Consultancy",
                  "Professional Chef & Hospitality Recruitment",
                  "Menu Engineering & Recipe Development",
                  "Kitchen Equipment Installation, Servicing & Repair",
                  "Bar, Beverage & Mixology Consultancy",
                  "Hospitality Training & Staff Development",
                  "Procurement & Operational Support",
                  "Reliable, Responsive & Client-Centred Service",
                ].map((pillar) => (
                  <div key={pillar} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5" strokeWidth={3} />
                    </div>
                    <p className="text-gray-900 font-bold text-base leading-relaxed">{pillar}</p>
                  </div>
                ))}
              </div>

              <div className="mt-2 space-y-4 text-gray-600 font-medium leading-relaxed">
                <p>
                  We understand that choosing the right culinary and hospitality partner is an important decision. That's why clients choose De KITCHEN MASTER for our professionalism, responsiveness, and commitment to delivering exceptional service.
                </p>
                <p>
                  From complete culinary and hospitality solutions under one roof to trusted chef rental and private chef services, we bring together experienced culinary and hospitality professionals dedicated to delivering excellence, innovation, and results. Whether you're a homeowner, restaurant, hotel, or corporate business, we provide tailored solutions that meet your unique needs with quality, integrity, and professionalism.
                </p>
              </div>
              <div className="mt-8">
                <Link
              href="/about#chef-bishop"
                  className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-lg"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Choose De KITCHEN MASTER</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 font-bold max-w-2xl mx-auto">
              Trusted. Professional. Results-Driven.
            </p>
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Culinary Solutions</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">Everything you need under one trusted brand, from chef rental and recruitment to consultancy and training.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ChefHat className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Chef Rental Response</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">Round-the-clock response for chef rental and private chef services across all booking types.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Experienced Professionals</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">A team of experienced culinary and hospitality professionals dedicated to exceptional service.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tailored Client Solutions</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">Client-centred solutions customized for homes, restaurants, hotels, and businesses of every size.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ThumbsUp className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality, Integrity &amp; Professionalism</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">Trusted by homes, restaurants, hotels, and businesses for reliable, prompt, and professional service.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-lg"
            >
              Why Work With Us
              <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Meet Chef Bishop */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              OUR FOUNDER
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
              Meet Chef Bishop
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-bold mb-6">
              The Visionary Building Africa's Next Generation Hospitality Brand
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-6">
              At the heart of De KITCHEN MASTER is Chef Bishop — a young hospitality entrepreneur, culinary expert, and visionary leader transforming the way culinary professionals and hospitality businesses connect, grow, and succeed.
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-6">
              Driven by a passion for excellence and impact, Chef Bishop founded De KITCHEN MASTER with a clear mission: to build a trusted hospitality institution that develops exceptional chefs, supports food businesses, and delivers world-class culinary solutions.
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-6">
              Through leadership, innovation, and mentorship, he continues to create opportunities for culinary talents while helping individuals, private clients, and organizations experience a higher standard of hospitality.
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-8">
              His vision goes beyond food, it is about building people, strengthening businesses, and shaping the future of Africa's culinary industry. The vision. The leadership. The passion behind De KITCHEN MASTER.
            </p>
            <Link
              href="/about#chef-bishop"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-lg"
            >
              Read More About Chef Bishop
              <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Meet Our Leadership Team */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              LEADERSHIP
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-4">
              Behind every successful project is a team of experienced culinary and hospitality professionals committed to excellence, innovation, and client satisfaction.
            </p>
            <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-4">
              Meet the leaders driving the vision, strategy, and growth of De KITCHEN MASTER.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/about#team"
                className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-lg"
              >
                Meet Our Leadership Team
                <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
              </Link>
              <Link
                href="/chefs"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-lg"
              >
                View Our Chefs
                <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Previous Projects */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Some of Our Previous Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <p className="max-w-4xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-10 text-center">
            Over the years, we've proudly partnered with restaurants, hotels, lounges, cafés, and hospitality businesses across Nigeria and beyond, delivering solutions that improve operations, elevate guest experiences, and drive business growth.
          </p>

          <div className="relative overflow-hidden" style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}>
            <div className="flex w-max gap-6 animate-infinite-scroll">
              {[
                { name: "Midnight City – Lagos & Abuja", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" },
                { name: "Solid Lounge – Lagos", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop" },
                { name: "TastyBox – Lagos", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop" },
                { name: "Flavour Junction, Lagos", image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop" },
                { name: "Hope Residence Hotel & Suites", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2677&auto=format&fit=crop" },
                { name: "Milton Hotel", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2670&auto=format&fit=crop" },
                { name: "ZEE Lounge – Ghana, SA", image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2670&auto=format&fit=crop" },
              ].map((client) => (
                <div key={client.name} className="relative h-48 w-72 flex-shrink-0 rounded-2xl overflow-hidden shadow-md group">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white font-bold text-lg drop-shadow-md">{client.name}</h3>
                  </div>
                </div>
              ))}
              {[
                { name: "Midnight City – Lagos & Abuja", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" },
                { name: "Solid Lounge – Lagos", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop" },
                { name: "TastyBox – Lagos", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop" },
                { name: "Flavour Junction, Lagos", image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop" },
                { name: "Hope Residence Hotel & Suites", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2677&auto=format&fit=crop" },
                { name: "Milton Hotel", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2670&auto=format&fit=crop" },
                { name: "ZEE Lounge – Ghana, SA", image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2670&auto=format&fit=crop" },
              ].map((client) => (
                <div key={`${client.name}-dup`} className="relative h-48 w-72 flex-shrink-0 rounded-2xl overflow-hidden shadow-md group">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white font-bold text-lg drop-shadow-md">{client.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-lg"
            >
              View Our Portfolio
              <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>



      {/* 13. Partner With Us */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Partner With De KITCHEN MASTER
          </h2>
          <p className="text-lg text-white/80 font-medium max-w-3xl mx-auto mb-8">
            We believe in building strong partnerships that create lasting value. Whether you're a hospitality investor, restaurant owner, hotel operator, corporate organisation, supplier, or industry professional, we're always open to meaningful collaborations that drive innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/become-a-partner"
              className="inline-flex items-center px-10 py-5 bg-white text-primary font-bold rounded-xl hover:-translate-y-1 transition-transform shadow-lg text-lg"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/strategic_partnership_proposal.pdf"
              className="inline-flex items-center px-10 py-5 bg-primary/20 text-white font-bold rounded-xl hover:bg-primary/40 hover:-translate-y-1 transition-all shadow-lg text-lg border border-white/30"
            >
              Download Partnership Proposal
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 14. Call to Action */}
      <section className="bg-primary pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Transform Your Culinary or Hospitality Experience?
          </h2>
          <p className="text-lg text-white/80 font-medium max-w-2xl mx-auto mb-10">
            Whether you're looking for a trusted private chef, recruiting hospitality professionals, launching a new restaurant, improving hotel operations, or seeking expert culinary consultancy, De KITCHEN MASTER is ready to help. Let's bring your vision to life with professionalism, creativity, and excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center px-10 py-5 bg-white text-primary font-bold rounded-xl hover:-translate-y-1 transition-transform shadow-lg text-lg">
              Contact Us <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/contact" className="inline-flex items-center px-10 py-5 bg-primary/20 text-white font-bold rounded-xl hover:bg-primary/40 hover:-translate-y-1 transition-all shadow-lg text-lg border border-white/30">
              Book a Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Some of Our Previous Projects */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden relative group">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        <div className="flex marquee-container">
          {["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.png","1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.png"].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-48 mx-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="aspect-[4/3] flex items-center justify-center p-6">
                <img
                  src={`/logos/${src}`}
                  alt={`Project ${(i % 6) + 1}`}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-container {
            animation: marquee 30s linear infinite;
            display: flex;
            flex-wrap: nowrap;
            width: max-content;
          }
          .group:hover .marquee-container {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </>
  );
}
