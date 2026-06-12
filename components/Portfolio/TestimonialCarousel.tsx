"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    stars: 5,
    quote:
      "De KITCHEN MASTER transformed our lounge operations from top to bottom. Their recruitment team provided us with exceptional culinary talent, and the customized SOP systems they engineered brought structural consistency and measurable efficiency to our kitchens from day one. Truly a world-class hospitality consulting partner.",
    name: "Executive Director",
    role: "Bespoke Hospitality Group",
  },
  {
    stars: 5,
    quote:
      "The level of professionalism and culinary expertise that De KITCHEN MASTER brought to our restaurant launch was outstanding. From menu development to staff training, they delivered excellence at every stage. Our customers have consistently praised the quality and presentation of our dishes.",
    name: "Managing Partner",
    role: "Prestige Hotels & Resorts",
  },
  {
    stars: 5,
    quote:
      "We engaged De KITCHEN MASTER for a complete kitchen overhaul and staff recruitment for our new lounge in Abuja. The turnaround was impressive, the quality of chefs provided exceeded our expectations, and the operational systems they put in place have been running flawlessly ever since.",
    name: "Operations Director",
    role: "Legacy Dining Concepts",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const slide = testimonials[current];

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <div className="max-w-2xl mx-auto relative">
      <div className="relative bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-sm text-center min-h-[280px] flex flex-col justify-center">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-3 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary/40 transition-all duration-200 z-10"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-3 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary/40 transition-all duration-200 z-10"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="text-2xl tracking-wider mb-6" aria-label={`${slide.stars} stars`}>
              {"⭐".repeat(slide.stars)}
            </div>
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-8 italic">
              &ldquo;{slide.quote}&rdquo;
            </blockquote>
            <div className="w-12 h-0.5 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-gray-900 font-black text-base">{slide.name}</p>
            <p className="text-gray-500 text-sm font-medium mt-1">{slide.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2.5 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary w-7"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
