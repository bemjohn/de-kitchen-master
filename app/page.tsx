import Link from "next/link";
import { ArrowRight, Utensils, Award, Briefcase, Coffee, UserPlus, ChefHat, MapPin, Globe2, ShieldCheck, ThumbsUp, Check } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroCarousel />

      {/* 2. Featured Services */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Featured Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 font-medium max-w-2xl mx-auto">
              Comprehensive culinary solutions for hospitality businesses, private clients, and ambitious chefs across every scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Chef Recruitment"
              description="Source, vet, and deploy top-tier culinary talent matched to your kitchen culture and service standards."
              icon={<UserPlus className="w-7 h-7" />}
            />
            <ServiceCard
              title="Private Chef Services"
              description="Bespoke in-home and on-site dining experiences crafted by vetted private chefs for any occasion."
              icon={<ChefHat className="w-7 h-7" />}
            />
            <ServiceCard
              title="Hospitality Consulting"
              description="Strategic advisory on operations, branding, and service design to elevate hospitality businesses."
              icon={<Briefcase className="w-7 h-7" />}
            />
            <ServiceCard
              title="Restaurant Setup"
              description="End-to-end kitchen and front-of-house design, layout, equipment sourcing, and launch support."
              icon={<Utensils className="w-7 h-7" />}
            />
            <ServiceCard
              title="Catering Services"
              description="Flawless catering execution for weddings, corporate events, and private celebrations of any scale."
              icon={<Coffee className="w-7 h-7" />}
            />
            <ServiceCard
              title="Culinary Training"
              description="Hands-on coaching and curriculum design that sharpen technique, leadership, and kitchen performance."
              icon={<Award className="w-7 h-7" />}
            />
          </div>
        </div>
      </section>

      {/* 3. Trusted By Businesses, Hotels, Restaurants & Private Clients */}
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
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2670&auto=format&fit=crop" alt="Commercial kitchen" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md group">
                <img src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop" alt="Catering buffet" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md group">
                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2677&auto=format&fit=crop" alt="Chef plating" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md group">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop" alt="Culinary team" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Impact In Numbers */}
      <section className="py-24 bg-gray-900 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Impact In Numbers</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">7+</div>
              <div className="text-primary-light font-bold uppercase tracking-wider text-sm mb-3">Years</div>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">Of Excellence. Delivering professional hospitality solutions and supporting businesses across the food and beverage industry.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">500+</div>
              <div className="text-primary-light font-bold uppercase tracking-wider text-sm mb-3">Deployed</div>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">Chefs &amp; Hospitality Professionals Deployed. Successfully recruiting and deploying qualified culinary experts for restaurants, hotels, and private clients.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">100+</div>
              <div className="text-primary-light font-bold uppercase tracking-wider text-sm mb-3">Completed</div>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">Successful Projects Completed. Providing restaurant setup, kitchen development, consulting, menu engineering, and training.</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2 leading-tight">Nationwide</div>
              <div className="text-primary-light font-bold uppercase tracking-wider text-sm mb-3">Coverage</div>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">Serving clients across Lagos, Abuja, and major cities throughout Nigeria while maintaining capacity to support projects beyond national borders.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">10+</div>
              <div className="text-primary-light font-bold uppercase tracking-wider text-sm mb-3">Years</div>
              <p className="text-gray-300 font-medium text-sm leading-relaxed">Of Industry Experience. Under the leadership of Chef Bishop, an experienced hospitality consultant with over a decade of practical industry expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Clients Trust Us */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Clients Trust Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="relative h-full min-h-[560px] rounded-3xl overflow-hidden shadow-md group">
              <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2670&auto=format&fit=crop" alt="Modern culinary experience" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
            </div>

            <div className="flex flex-col">
              <div className="space-y-5 flex-grow">
                {[
                  "Professional Recruitment Standards",
                  "Experienced Culinary Professionals",
                  "Reliable Service Delivery",
                  "Customized Hospitality Solutions",
                  "Industry Expertise & Practical Knowledge",
                  "Long-Term Client Partnerships",
                  "Commitment to Excellence",
                ].map((pillar) => (
                  <div key={pillar} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5" strokeWidth={3} />
                    </div>
                    <p className="text-gray-900 font-bold text-base leading-relaxed">{pillar}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 pt-8 border-t border-gray-200 text-gray-600 font-medium leading-relaxed">
                At De KITCHEN MASTER, our success is measured by the success of our clients. Every chef deployed, every restaurant supported, and every project completed reflects our dedication to professionalism, quality, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 font-medium max-w-2xl mx-auto">
              A trusted culinary partner with the reach, rigor, and results to back every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">10+ Years Industry Experience</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">A decade of culinary placements, events, and kitchen launches behind every engagement.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nationwide Coverage</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">Trusted partners and chefs ready to serve in every major city across the country.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Globe2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">International Deployment</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">Cross-border chef deployment and consulting for hospitality brands operating abroad.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Screening Process</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">Multi-stage vetting covering skills, references, and background for chefs you can rely on.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ThumbsUp className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trusted By Businesses</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">Preferred culinary partner for hotels, restaurants, corporates, and private clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Clients We Have Worked With */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Clients We Have Worked With</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative overflow-hidden" style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}>
            <div className="flex w-max gap-6 animate-infinite-scroll">
              {[
                { name: "Midnight City", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" },
                { name: "Solid Lounge", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop" },
                { name: "Tastybox", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop" },
                { name: "Wildbird Restaurant", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" },
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
                { name: "Midnight City", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" },
                { name: "Solid Lounge", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop" },
                { name: "Tastybox", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop" },
                { name: "Wildbird Restaurant", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" },
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
        </div>
      </section>

      {/* 8. Testimonies Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 font-medium max-w-2xl mx-auto">Discover the incredible experiences we've tailored for our cherished clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rose"
              role="Private Dining Client"
              content="The culinary experience provided by De Kitchen Master was nothing short of extraordinary. The flavors, the presentation, and the warm service completely blew my guests away!"
            />
            <TestimonialCard
              name="Tunde Adeyemi"
              role="Corporate Director"
              content="I hired them for a corporate retreat and it genuinely transformed the entire event. The chefs were highly professional, and the food was undeniably five-star."
            />
            <TestimonialCard
              name="Daniel Mike"
              role="Wedding Client"
              content="We truly could not have chosen a better team for our wedding catering. They took out all the stress and just delivered pure magic on a plate. Absolutely immaculate."
            />
          </div>
        </div>
      </section>

      {/* 9. Call to Action */}
      <section className="bg-primary pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-tight">
            Join our community to inspire your desires. Reach out to make your next event a resounding success
          </h2>
          <Link href="/contact" className="inline-flex items-center px-10 py-5 bg-white text-primary font-bold rounded-xl hover:-translate-y-1 transition-transform shadow-lg text-lg">
            Get in Touch <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
