"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaXTwitter, FaSnapchat, FaYoutube } from "react-icons/fa6";
import { SiThreads } from "react-icons/si";

const serviceOptions = [
  "Private Chef Deployment",
  "Restaurant Setup",
  "Catering",
  "Partnership",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-20 bg-white">
      {/* ───── SECTION 1: HERO ───── */}
      <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury culinary hospitality setup"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="bg-black/20 absolute inset-0" />
      </div>

      <section className="relative bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 text-center">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs">
            CONTACT US
          </span>
          <h1 className="font-extrabold text-slate-950 text-3xl md:text-5xl leading-tight mt-3 mb-10 mx-auto max-w-4xl">
            Let&apos;s Discuss Your Next Culinary or Hospitality Project
          </h1>
          <div className="w-full max-w-7xl mx-auto text-center space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Whether you&apos;re looking to hire a private chef, recruit hospitality professionals, set up a restaurant, develop a menu, organize a catering event, train your team, or explore a business partnership, our team is ready to assist.
            </p>
            <p>
              At De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, we combine culinary expertise with hospitality excellence to deliver solutions that help individuals, businesses, and organizations succeed. From private homes and corporate offices to restaurants, lounges, hotels, and large-scale food operations, we provide professional support backed by experience, structure, and results.
            </p>
          </div>
        </div>
      </section>

      {/* ───── SECTION 2: COMMUNICATION SPLIT ───── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* LEFT — Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-black text-gray-900 mb-8">
                  Submit an Enquiry
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Enquiry Submitted!
                    </h3>
                    <p className="text-green-800 font-medium">
                      Thank you for reaching out. Our team will review your enquiry and get back to you promptly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-primary font-bold hover:text-primary-dark transition-colors"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form action="https://formsubmit.co/dekitchenmasterltd@gmail.com" method="POST" className="space-y-5">
                    <div>
                      <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-1 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-bold text-gray-700 mb-1 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-bold text-gray-700 mb-1 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 XXX XXX XXXX"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="text-sm font-bold text-gray-700 mb-1 block">
                        Service Category
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-colors appearance-none"
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="details" className="text-sm font-bold text-gray-700 mb-1 block">
                        Project Details
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        required
                        rows={5}
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Tell us about your project, requirements, and expectations..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest rounded-xl px-8 py-5 transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                      SUBMIT ENQUIRY
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT — Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Office Locations */}
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">
                    Office Locations
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Lagos Office</p>
                    <p className="text-gray-600 text-sm font-medium">
                      Serving clients across Lagos and surrounding regions.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Abuja Operations</p>
                    <p className="text-gray-600 text-sm font-medium">
                      Supporting culinary and hospitality projects, recruitment, consultancy, and business development across Abuja and Northern Nigeria.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Coverage Area</p>
                    <p className="text-gray-600 text-sm font-medium">
                      We operate nationwide across Nigeria and also support international recruitment, consultancy, and culinary projects where required.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Call, WhatsApp & Enquiries */}
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <Phone className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">
                    Call, WhatsApp &amp; Enquiries
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">WhatsApp &amp; Phone</p>
                    <a
                      href="tel:+2347066035210"
                      className="text-primary font-bold text-sm hover:underline block"
                    >
                      +234 706 603 5210
                    </a>
                    <a
                      href="https://wa.me/2347066035210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1"
                    >
                      Chat on WhatsApp <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Alternative Contact Number</p>
                    <a href="tel:+2348115051309" className="text-primary font-bold text-sm hover:underline block">
                      +234 811 505 1309
                    </a>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Availability</p>
                    <p className="text-gray-600 text-sm font-medium">
                      Our team is available 24 hours a day, 7 days a week to respond to enquiries, consultation requests, recruitment needs, culinary projects, and hospitality support services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Email Channels */}
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <Mail className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">
                    Email Us
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Primary Email</p>
                    <a
                      href="mailto:dekitchenmasterltd@gmail.com"
                      className="text-primary font-bold text-sm hover:underline block"
                    >
                      dekitchenmasterltd@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Secondary Email</p>
                    <a
                      href="mailto:ezekoton@gmail.com"
                      className="text-primary font-bold text-sm hover:underline block"
                    >
                      ezekoton@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Usage Note</p>
                    <p className="text-gray-600 text-sm font-medium">
                      For recruitment, consultancy, chef deployment, partnerships, training enquiries, catering requests, and general support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 3: SOCIAL GRID ───── */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-4">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              CONNECT WITH US
            </span>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium max-w-4xl mx-auto">
              Follow our journey, projects, chef training activities, culinary experiences, community events, and hospitality insights across our social media platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <SocialCard
              name="De KITCHEN MASTER"
              icon={FaInstagram}
              href="https://www.instagram.com/dekitchenmaster?igsh=ZjM5ajBqa3ppZnU="
            />
            <SocialCard
              name="Chef Bishop (@dee_youngbishop)"
              icon={FaInstagram}
              href="https://www.instagram.com/dee_youngbishop?igsh=dHZtM2NzZjJ2cG84"
            />
            <SocialCard
              name="De Kitchen Master Culinary & Hospitality Service Ltd"
              icon={FaFacebook}
              href="https://www.facebook.com/share/18mimAGsTL/"
            />
            <SocialCard
              name="Chef Bishop"
              icon={FaTiktok}
              href="https://www.tiktok.com/@young_bishop25?_r=1&_t=ZS-979MnjDdpSr"
            />
            <SocialCard
              name="Chef Bishop"
              icon={FaLinkedin}
              href="https://www.linkedin.com/in/chef-bishop-b88953273"
            />
            <SocialCard
              name="Dee_Youngbishop"
              icon={FaXTwitter}
              href="https://x.com/Dee_youngbishop"
            />
            <SocialCard
              name="Dee_Youngbishop"
              icon={SiThreads}
              href="https://www.threads.com/@dee_youngbishop?invite=0"
            />
            <SocialCard
              name="Young_b1281"
              icon={FaSnapchat}
              href="https://www.snapchat.com/add/young_b1281?share_id=vwA2JhFEARc&locale=en-GB"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <SocialCard
              name="Chef Bishop"
              icon={FaYoutube}
              href="https://youtube.com/@chefbishop001?si=J4dlQO1ZLwttRk5M"
            />
          </div>
        </div>
      </section>

      {/* ───── SECTION 4: CONTEXTUAL ROUTING FOOTNOTES ───── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Frame 1 */}
            <div className="p-8 md:p-10 rounded-3xl border border-slate-100 bg-gray-50">
              <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
                Partnership &amp; Business Enquiries
              </span>
              <p className="text-gray-700 leading-relaxed font-medium text-base mb-4">
                We welcome collaboration opportunities with: Restaurants, Lounges, Hotels &amp; Resorts, Corporate Organizations, Catering Companies, Food Service Businesses, Hospitality Investors, Equipment Suppliers &amp; Manufacturers, International Employers &amp; Recruitment Agencies.
              </p>
              <p className="text-gray-700 leading-relaxed font-medium text-base">
                For partnership opportunities, kindly contact us directly via phone, WhatsApp, or email.
              </p>
            </div>

            {/* Frame 2 */}
            <div className="p-8 md:p-10 rounded-3xl border border-slate-100 bg-gray-50">
              <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
                Hire a Chef
              </span>
              <p className="text-gray-700 leading-relaxed font-medium text-base mb-4">
                Looking for a professional cook or culinary professional for your home, business, event, restaurant, lounge, hotel, or food operation?
              </p>
              <p className="text-gray-700 leading-relaxed font-medium text-base">
                Speak with our team and we will guide you through our recruitment, selection, and deployment process to ensure you are matched with the right culinary professional for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 5: FINAL CONVERSION MANIFESTO ───── */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium max-w-5xl mx-auto">
            Whether you require a private chef, professional cook, culinary consultant, hospitality staffing solution, restaurant setup, catering service, kitchen equipment support, or operational guidance, De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd is ready to assist. Call, WhatsApp, email, or connect with us on social media today. We look forward to becoming your trusted culinary and hospitality partner.
          </p>
        </div>
      </section>
    </div>
  );
}

function SocialCard({
  name,
  icon: Icon,
  href,
}: {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-5 rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.06]"
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 text-primary mb-3">
        <Icon className="w-5 h-5" />
      </span>
      <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-snug">
        {name}
      </p>
    </a>
  );
}
