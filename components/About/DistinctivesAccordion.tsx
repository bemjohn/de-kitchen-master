"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type Distinctive = {
  title: string;
  description: string;
  image: string;
};

export default function DistinctivesAccordion({ items }: { items: Distinctive[] }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = items[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
      <ul className="lg:col-span-5 space-y-3">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <li key={item.title}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "border-primary bg-white shadow-lg shadow-primary/10"
                    : "border-gray-200 bg-white/60 hover:border-primary/40 hover:bg-white"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`mt-1 flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-black ${
                      isActive ? "bg-primary text-white" : "bg-orange-50 text-primary"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className={`text-lg font-black leading-tight ${
                        isActive ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed font-medium ${
                        isActive ? "text-gray-600" : "text-gray-500"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="lg:col-span-7 relative">
        <div className="relative h-[420px] lg:h-[560px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={current.title}
              src={current.image}
              alt={current.title}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-1">
              Distinctive {String(active + 1).padStart(2, "0")}
            </p>
            <p className="text-white font-black text-2xl md:text-3xl leading-tight drop-shadow">
              {current.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
