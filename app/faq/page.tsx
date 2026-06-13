"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

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
      {/* Top Section: Full-Width Banner */}
      <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=2000&auto=format&fit=crop"
          alt="Culinary kitchen background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="bg-black/20 absolute inset-0" />
      </div>

      {/* Bottom Section: Stacked Content */}
      <section className="relative bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs">
            FREQUENTLY ASKED QUESTIONS (FAQ)
          </span>
          <h1 className="font-extrabold text-slate-950 text-3xl md:text-4xl leading-tight mt-3 mb-10 mx-auto max-w-3xl">
            Everything you need to know about De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd
          </h1>

          <div className="w-full space-y-4 text-left">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`bg-white border border-slate-100 shadow-sm rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md ${
                    isOpen ? "border-l-4 border-l-amber-500" : ""
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="p-5 flex items-center justify-between cursor-pointer w-full text-left font-semibold text-slate-900 text-lg"
                  >
                    <span className="flex-1">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
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

          {/* Support Card at Bottom */}
          <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-100 mt-8 inline-block text-left">
            <p className="text-slate-700 font-semibold mb-3">
              Still have questions?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
            >
              Contact Support Team <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Final Note */}
          <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-2">
              FINAL NOTE
            </span>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
              De KITCHEN MASTER is a full-scale culinary and hospitality solutions company committed to delivering professionalism, structure, and excellence across every service we provide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
