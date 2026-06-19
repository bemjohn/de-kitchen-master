import Link from "next/link";
import {
  Shirt,
  ChefHat,
  UserCircle,
  Store,
  Building2,
  Hotel,
  UtensilsCrossed,
  School,
  Users,
  Briefcase,
  Paintbrush,
  Palette,
  Sparkles,
  TrendingUp,
  Award,
  Truck,
  Eye,
  ArrowRight,
  ShieldCheck,
  Star,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "DKM Chef Uniform Collection | De KITCHEN MASTER",
  description:
    "Premium chef uniforms and hospitality apparel designed by Chef Bishop. Professional jackets, aprons, caps, and customized branding for chefs, restaurants, and hotels.",
};

const collectionItems = [
  {
    title: "Chef Jackets",
    description:
      "Professional chef jackets designed for comfort, durability, and a clean professional appearance.",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Chef Aprons",
    description:
      "Premium aprons suitable for kitchen operations, grilling, catering services, and food production.",
    image:
      "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Chef Caps & Headwear",
    description:
      "Designed to promote hygiene, safety, and professionalism in every kitchen environment.",
    image:
      "https://images.unsplash.com/photo-1604329430698-7e6e1eb0f45a?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Kitchen Staff Uniforms",
    description:
      "Customized uniforms for chefs, cooks, kitchen assistants, stewards, and food production teams.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Restaurant & Hospitality Uniforms",
    description:
      "Professional apparel solutions for restaurants, lounges, hotels, catering businesses, and hospitality establishments.",
    image:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=600&auto=format&fit=crop",
  },
];

const whyChooseItems = [
  {
    title: "Professional Appearance",
    description: "Make a lasting impression with premium, well-fitted chef attire.",
    Icon: Eye,
  },
  {
    title: "Designed by Industry Professionals",
    description: "Every uniform is crafted based on real kitchen experience and feedback from working chefs.",
    Icon: ChefHat,
  },
  {
    title: "Comfort & Durability",
    description: "High-quality fabrics built to withstand the demands of professional kitchen environments.",
    Icon: ShieldCheck,
  },
  {
    title: "Brand Identity",
    description: "Custom embroidery and branding solutions that reflect your establishment's unique identity.",
    Icon: Palette,
  },
  {
    title: "Nationwide Delivery",
    description: "Serving Lagos, Abuja, and all states within Nigeria with reliable delivery.",
    Icon: Truck,
  },
];

const whoWeServeItems = [
  "Professional Chefs",
  "Private Chefs",
  "Restaurants",
  "Lounges",
  "Hotels",
  "Catering Companies",
  "Food Businesses",
  "Culinary Schools",
  "Hospitality Organizations",
  "Kitchen Teams",
  "Food Entrepreneurs",
];

const galleryItems = [
  { label: "CHEF JACKETS PHOTOS", aspect: "aspect-[4/3]" },
  { label: "APRONS PHOTOS", aspect: "aspect-[4/3]" },
  { label: "CHEF CAPS PHOTOS", aspect: "aspect-[4/3]" },
  { label: "CUSTOMIZED UNIFORMS PHOTOS", aspect: "aspect-[4/5]" },
  { label: "KITCHEN TEAM UNIFORMS PHOTOS", aspect: "aspect-[4/3]" },
  { label: "BRANDING & EMBROIDERY SAMPLES", aspect: "aspect-[4/3]" },
];

const customizationFeatures = [
  "Company Name",
  "Restaurant Name",
  "Chef Name",
  "Logo Embroidery",
  "Custom Colors",
  "Team Branding",
  "Corporate Identity Designs",
];

export default function UniformCollectionPage() {
  return (
    <div className="pt-20 bg-white">
      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: HERO                                                */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2000&auto=format&fit=crop"
            alt="Professional chef uniform"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-44">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4 text-primary/80">
              CREATED BY CHEF BISHOP
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
              DKM Chef Uniform Collection
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 leading-relaxed font-medium max-w-2xl">
              Designed by Chefs. Built for Professionals.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#order"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/25"
              >
                Order Now
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.5} />
              </Link>
              <Link
                href="#collections"
                className="inline-flex items-center px-6 py-3 border-2 border-zinc-600 hover:border-primary text-zinc-300 hover:text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                View Collections
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: BRAND INTRODUCTION (SPLIT LAYOUT)                   */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
                About the Collection
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
                Uniforms Built on Experience
              </h2>
              <div className="space-y-5 text-base md:text-lg text-zinc-400 leading-relaxed font-medium">
                <p>
                  At De KITCHEN MASTER, we understand that the right uniform is more than just clothing — it is a statement of professionalism, discipline, and pride. With years of practical kitchen experience, we have developed a collection of chef uniforms and hospitality apparel that prioritizes comfort, functionality, and a polished professional appearance.
                </p>
                <p>
                  Whether you are an individual chef, a restaurant, a lounge, a catering company, a hotel, or a culinary student, our collection is designed to meet the demands of the modern kitchen while projecting the highest standards of professionalism.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="relative overflow-hidden rounded-2xl aspect-square bg-zinc-800 group">
                    <img
                      src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop"
                      alt="Chef in professional uniform"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-800 group">
                    <img
                      src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop"
                      alt="Kitchen team in uniform"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  </div>
                </div>
                <div className="space-y-3 pt-6">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-800 group">
                    <img
                      src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop"
                      alt="Chef apron detail"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl aspect-square bg-zinc-800 group">
                    <img
                      src="https://images.unsplash.com/photo-1604329430698-7e6e1eb0f45a?q=80&w=600&auto=format&fit=crop"
                      alt="Chef cap"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: OUR COLLECTIONS (DYNAMIC GRID)                      */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="collections" className="bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Our Catalog
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Our Collections
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectionItems.map((item) => (
              <div
                key={item.title}
                className="group bg-zinc-800/50 border border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-zinc-700">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: CUSTOM BRANDING & PERSONALIZATION                   */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-zinc-950 to-zinc-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Make It Yours
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Custom Branding &amp; Personalization
            </h2>
            <p className="mt-4 text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
              Every uniform can be customized to reflect your brand identity and professional standards.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {customizationFeatures.map((feature) => (
              <div
                key={feature}
                className="group relative px-6 py-3 bg-zinc-800/60 border border-zinc-700 rounded-xl text-zinc-300 font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-zinc-800 hover:text-primary"
              >
                <span className="relative z-10">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full animate-pulse" style={{ width: "65%" }} />
            </div>
            <div className="flex justify-between mt-2 text-xs text-zinc-500 font-medium px-1">
              <span>Basic</span>
              <span>Standard</span>
              <span>Premium</span>
              <span>Enterprise</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: WHY CHOOSE DKM (VALUE MATRIX)                       */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Why DKM
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Why Choose DKM
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {whyChooseItems.map((item) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="group bg-zinc-800/30 border border-zinc-700/50 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-zinc-800/60"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-black text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SECTION 6: SPECIAL BENEFITS (TWO-COLUMN DUAL CARDS)            */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Exclusive to DKM Clients
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Special Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="group relative bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Star className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">
                Private Chef Deployment Package
              </h3>
              <p className="text-zinc-400 leading-relaxed font-medium text-base">
                Private residential clients receive professionally presented chefs dressed in DKM-standard uniforms. Every chef deployed through our private chef service arrives in premium DKM attire, ensuring a polished and professional presentation from day one.
              </p>
            </div>
            <div className="group relative bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Award className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">
                Full Kitchen Setup Consultancy Package
              </h3>
              <p className="text-zinc-400 leading-relaxed font-medium text-base">
                Businesses engaging De KITCHEN MASTER for complete kitchen setup and development projects receive a complimentary kitchen team uniform package for operational readiness from day one. From concept to launch, your team arrives in coordinated DKM uniforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SECTION 7: WHO WE SERVE (SCROLLING TAG CLOUD)                  */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-zinc-900 border-t border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Our Clientele
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Who We Serve
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {whoWeServeItems.map((item) => (
              <div
                key={item}
                className="px-5 py-2.5 bg-zinc-800/50 border border-zinc-700 rounded-full text-zinc-300 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-zinc-800 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SECTION 8: GALLERY (PRODUCTION GRID)                           */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Visual Showcase
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.label}
                className={`group relative overflow-hidden rounded-2xl bg-zinc-800 border border-zinc-700 ${item.aspect}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-700 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <Eye className="w-6 h-6 text-zinc-500 group-hover:text-primary transition-colors duration-300" strokeWidth={2} />
                    </div>
                    <p className="text-sm font-bold text-zinc-500 group-hover:text-primary transition-colors duration-300">
                      {item.label}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-bold text-primary">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SECTION 9: ORDER YOUR UNIFORM TODAY (CTA)                      */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="order" className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop"
            alt="Professional kitchen background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <span className="inline-block text-white/80 font-bold tracking-[0.25em] uppercase text-xs mb-3">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            Order Your Uniform Today
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium max-w-3xl mx-auto mb-10">
            Elevate your professional image with premium chef uniforms designed for comfort, durability, and style. Whether you need a single jacket or bulk team uniforms, we deliver across Nigeria.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-between px-6 py-4 bg-white text-primary font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span>Place an Order</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-between px-6 py-4 bg-white/10 border-2 border-white text-white font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary hover:shadow-xl"
            >
              <span>Request Customization</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-between px-6 py-4 bg-white/10 border-2 border-white text-white font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary hover:shadow-xl"
            >
              <span>Bulk Supply</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>
          <p className="mt-10 text-base text-white/80 font-medium">
            Nationwide delivery to Lagos, Abuja, and all states within Nigeria.
          </p>
        </div>
      </section>
    </div>
  );
}
