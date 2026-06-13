"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What services does De KITCHEN MASTER offer?",
    a: "We provide professional culinary and hospitality solutions including chef recruitment, private chef services, restaurant and lounge consultancy, kitchen setup, catering services, menu development, staff training, food costing systems, equipment support, and full hospitality business solutions.",
  },
  {
    q: "Do you only recruit chefs or other kitchen staff as well?",
    a: "Our primary focus is professional chefs and kitchen personnel. This includes executive chefs, private chefs, grill chefs, pastry chefs, cooks, and other qualified kitchen professionals.",
  },
  {
    q: "Do you provide services for private homes?",
    a: "Yes. We specialize in private chef deployment for homes, estates, and individuals who require professional culinary services within a residential setting.",
  },
  {
    q: "Do you work with restaurants, hotels, and lounges?",
    a: "Yes. We provide full hospitality support for restaurants, hotels, lounges, catering companies, and other food service businesses.",
  },
  {
    q: "Do you also handle kitchen equipment installation and repairs?",
    a: "Yes. We also work with qualified kitchen equipment engineers and technicians who handle installation, servicing, maintenance, and repair of commercial kitchen equipment for restaurants, hotels, lounges, and food businesses. This ensures our clients not only get professional kitchen setups, but also long-term technical support for smooth kitchen operations.",
  },
  {
    q: "Do you operate outside Nigeria?",
    a: "Yes. We operate across Nigeria (including Lagos and Abuja) and also handle international recruitment and placements where required.",
  },
  {
    q: "Do you charge fixed prices for your services?",
    a: "No. All services are customized based on client requirements, location, scope of work, and staffing needs. Final pricing is provided after consultation and assessment.",
  },
  {
    q: "Do I need a consultation before hiring your services?",
    a: "Yes. Every service begins with a consultation to properly understand your needs and provide the right solution.",
  },
  {
    q: "What is your recruitment process like?",
    a: "We follow a structured process: Inquiry → Consultation → Assessment → Matching → Proposal → Deployment.",
  },
  {
    q: "Do you replace chefs if I am not satisfied?",
    a: "For private chef services, we provide a structured support period where replacements can be made based on agreed service terms.",
  },
  {
    q: "Are your chefs verified and trained?",
    a: "Yes. All chefs undergo professional screening, verification, and skill assessment before deployment.",
  },
  {
    q: "How long does it take to deploy a chef?",
    a: "Deployment time depends on your requirements, but we work to ensure quick and efficient placement after consultation and agreement.",
  },
  {
    q: "Do you handle full kitchen or restaurant setup?",
    a: "Yes. We handle complete kitchen setup, restaurant and lounge development, operational structuring, menu engineering, and hospitality consultancy.",
  },
  {
    q: "Do you provide staff training?",
    a: "Yes. We offer professional training and mentorship programs for chefs and kitchen staff to meet industry standards and client expectations.",
  },
  {
    q: "What is DKM Professional Chef Training?",
    a: "It is a mentorship program by Chef Bishop designed to train, upgrade, and prepare chefs for professional industry standards and real-world kitchen operations.",
  },
  {
    q: "Do you offer catering services?",
    a: "Yes. We provide indoor and outdoor catering services for events, corporate functions, private gatherings, and large-scale hospitality needs.",
  },
  {
    q: "Can individuals or companies partner with De KITCHEN MASTER?",
    a: "Yes. We accept partnerships with restaurants, hotels, corporate organizations, hospitality brands, and international clients for long-term collaboration and recruitment solutions.",
  },
  {
    q: "How can I contact De KITCHEN MASTER?",
    a: "You can reach us through our website contact form, email, phone, or social media platforms for inquiries, bookings, or partnerships.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 bg-white">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-4">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
              FREQUENTLY ASKED QUESTIONS (FAQ)
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Everything you need to know about De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd
            </h1>
          </div>

          <div className="max-w-4xl mx-auto mt-12 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-start justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-base md:text-lg font-bold text-gray-900 leading-snug flex-1">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-shrink-0 mt-1 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed font-medium text-base">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100 text-center max-w-4xl mx-auto">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              FINAL NOTE
            </span>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              De KITCHEN MASTER is a full-scale culinary and hospitality solutions company committed to delivering professionalism, structure, and excellence across every service we provide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
