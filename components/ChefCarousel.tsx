"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const chefs = [
  { name: "Chef Bishop", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2584&auto=format&fit=crop" },
  { name: "Chef Tobi", img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2670&auto=format&fit=crop" },
  { name: "Chef Atinuke", img: "https://images.unsplash.com/photo-1577106263724-2c8e03bfeffe?q=80&w=2670&auto=format&fit=crop" },
  { name: "Chef Chidon", img: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=2564&auto=format&fit=crop" },
  { name: "Chef Emma", img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2680&auto=format&fit=crop" },
  { name: "Chef Kayode", img: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=2574&auto=format&fit=crop" },
  { name: "Chef Jazzy", img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=2678&auto=format&fit=crop" },
  { name: "Chef Joseph", img: "https://images.unsplash.com/photo-1556910110-a5a63dfd393c?q=80&w=2670&auto=format&fit=crop" }
];

export default function ChefCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350); // check after smooth scroll finishes
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Explore Our Chefs</h2>
            <div className="w-24 h-1 bg-primary rounded-full"></div>
            <p className="mt-6 text-gray-600 font-medium max-w-2xl">Meet the culinary artists behind the masterpiece dishes of De Kitchen Master.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:hover:border-gray-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:hover:border-gray-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
        >
          {chefs.map((chef, index) => (
            <div key={index} className="flex-none w-[280px] md:w-[320px] snap-start group relative overflow-hidden rounded-3xl text-center">
              <div className="h-[400px] w-full relative">
                <img src={chef.img} alt={chef.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold text-white flex flex-col items-center">
                  {chef.name}
                  <div className="w-8 h-1 bg-primary mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/about" className="inline-flex items-center text-primary font-bold hover:text-primary-dark text-lg">
            Meet All Our Chefs <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
