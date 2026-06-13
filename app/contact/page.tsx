"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, ExternalLink } from "lucide-react";
import Link from "next/link";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", details: "" });
    }, 1000);
  };

  return (
    <div className="pt-20 bg-white">
      {/* ───── SECTION 1: HERO ───── */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
              CONTACT US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Let&apos;s Discuss Your Next Culinary or Hospitality Project
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                Whether you&apos;re looking to hire a private chef, recruit hospitality professionals, set up a restaurant, develop a menu, organize a catering event, train your team, or explore a business partnership, our team is ready to assist.
              </p>
            </div>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium space-y-4">
              <p>
                At De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, we combine culinary expertise with hospitality excellence to deliver solutions that help individuals, businesses, and organizations succeed.
              </p>
              <p>
                From private homes and corporate offices to restaurants, lounges, hotels, and large-scale food operations, we provide professional support backed by experience, structure, and results.
              </p>
            </div>
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
                  <form onSubmit={handleSubmit} className="space-y-5">
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
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest rounded-xl px-8 py-5 transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-1 flex items-center justify-center"
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
              icon={InstagramIcon}
              href="https://www.instagram.com/dekitchenmaster?igsh=ZjM5ajBqa3ppZnU="
            />
            <SocialCard
              name="Chef Bishop (@dee_youngbishop)"
              icon={InstagramIcon}
              href="https://www.instagram.com/dee_youngbishop?igsh=dHZtM2NzZjJ2cG84"
            />
            <SocialCard
              name="De Kitchen Master Culinary & Hospitality Service Ltd"
              icon={FacebookIcon}
              href="https://www.facebook.com/share/18mimAGsTL/"
            />
            <SocialCard
              name="Chef Bishop"
              icon={TikTokIcon}
              href="https://www.tiktok.com/@young_bishop25?_r=1&_t=ZS-979MnjDdpSr"
            />
            <SocialCard
              name="Chef Bishop"
              icon={LinkedInIcon}
              href="https://www.linkedin.com/in/chef-bishop-b88953273"
            />
            <SocialCard
              name="Dee_Youngbishop"
              icon={XIcon}
              href="https://x.com/Dee_youngbishop"
            />
            <SocialCard
              name="Dee_Youngbishop"
              icon={ThreadsIcon}
              href="https://www.threads.com/@dee_youngbishop?invite=0"
            />
            <SocialCard
              name="Young_b1281"
              icon={SnapchatIcon}
              href="https://www.snapchat.com/add/young_b1281?share_id=vwA2JhFEARc&locale=en-GB"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <SocialCard
              name="Chef Bishop"
              icon={YouTubeIcon}
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
      <Icon className="w-6 h-6 text-primary mb-3" />
      <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-snug">
        {name}
      </p>
    </a>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.08 0C8.81 0 6.12 1.88 4.65 4.22 3.29 6.38 2.5 9.2 2.5 12c0 2.8.79 5.62 2.15 7.78C6.12 22.12 8.81 24 12.08 24c3.27 0 5.96-1.88 7.43-4.22 1.36-2.16 2.15-4.98 2.15-7.78 0-2.8-.79-5.62-2.15-7.78C18.04 1.88 15.35 0 12.08 0zm0 4.5c2.79 0 4.54 1.83 5.38 3.66.56 1.22.85 2.69.94 4.08-1.08-.25-2.22-.38-3.34-.38-1.72 0-3.09.34-4.06 1.02a3.97 3.97 0 00-1.56 2.4c-.35 1.48-.11 2.92.67 4.07.79 1.16 2.05 1.9 3.55 2.08 1.53.18 2.9-.22 3.97-1.17.8-.71 1.3-1.63 1.49-2.68h-2.2c-.45 0-.82-.37-.82-.82s.37-.82.82-.82h3.79c.3 0 .55.2.62.48.2.85.16 1.8-.15 2.75-.45 1.36-1.33 2.58-2.58 3.44-1.47 1.01-3.25 1.49-5.1 1.33-1.86-.16-3.52-1.02-4.71-2.48-1.17-1.44-1.67-3.19-1.41-4.95.2-1.38.8-2.63 1.73-3.64.96-1.04 2.2-1.78 3.64-2.14 1.29-.32 2.66-.37 3.98-.14 0-.74-.1-1.5-.31-2.23-.68-2.32-2.3-3.9-4.87-3.9-2.91 0-4.91 2.21-5.85 4.54-.7 1.74-.93 3.85-.93 6.05 0 2.2.23 4.31.93 6.05.94 2.33 2.94 4.54 5.85 4.54 2.58 0 5.06-1.39 6.51-3.7 1.15-1.83 1.7-4.13 1.65-6.53v-.04c.03-2.92-.69-5.51-2.15-7.32-1.53-1.89-3.81-2.99-6.47-2.99z" />
    </svg>
  );
}

function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.986 15.82c-.184.38-.474.67-.844.84-.146.066-.31.115-.48.154-.06.014-.064.052-.062.116.006.244.003.49-.013.733-.008.112-.065.157-.176.162-.396.02-.783.148-1.139.352-.426.243-.78.571-1.155.87-.178.142-.373.262-.575.368-.684.36-1.43.382-2.17.173-.237-.067-.465-.159-.68-.27-.23-.12-.448-.26-.663-.402-.46-.303-.93-.59-1.463-.731-.27-.07-.545-.094-.823-.077-.114.007-.17-.042-.177-.158-.018-.26-.006-.524.004-.786.002-.036-.016-.07-.056-.082-.27-.08-.523-.195-.746-.35-.632-.44-.998-1.026-1.109-1.805a1.39 1.39 0 01.104-.7c.07-.166.22-.243.396-.22.447.06.89.02 1.32-.117.496-.158.91-.441 1.278-.8.16-.158.17-.25.018-.418-.424-.468-.727-1.003-.917-1.596-.106-.33-.173-.67-.2-1.015-.018-.232.044-.4.267-.496.075-.032.153-.06.23-.087.056-.02.075-.056.078-.116.023-.468.154-.901.386-1.295.515-.874 1.35-1.33 2.36-1.47.345-.048.7-.04 1.05-.003.527.056 1.016.24 1.449.57.26.2.49.43.696.686.232.287.375.617.45.98.05.244.093.49.104.74.004.087.039.13.128.14.303.036.586.144.837.31.42.28.72.672.9 1.162.134.366.185.75.207 1.135.004.072.026.127.108.148.223.058.432.15.625.27.371.232.632.56.792.97.058.15.1.305.114.467.043.485-.14.901-.538 1.232-.313.26-.685.418-1.09.506-.039.008-.048.03-.036.066.059.163.072.332.060.502-.03.409-.164.79-.384 1.134z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
