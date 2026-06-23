"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Hire Top Chefs",
    subtitle: "De Kitchen Master",
    description: "Your Trusted Partner for Culinary Excellence, Hospitality Solutions, Chef Recruitment, Catering Services, Restaurant Development, and Professional Hospitality Support in Lagos, Abuja Across Africa.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2677&auto=format&fit=crop",
    ctaText: "View Our Chefs",
    ctaLink: "/about",
  },
  {
    id: 2,
    title: "Delicious Food just for You",
    subtitle: "Culinary Excellence",
    description: "We Recruit, Train, and Deploy Professional Chefs and Hospitality Teams for Restaurants, Hotels, Corporate Organizations, and Private Clients.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop",
    ctaText: "View Our Menu",
    ctaLink: "/services",
  },
  {
    id: 3,
    title: "Catering that delivers",
    subtitle: "Unforgettable Events",
    description: "Bespoke culinary experiences and seamless service execution tailored for private events, corporate gatherings, and exclusive dining moments. Every detail is handled with precision, excellence, and professionalism.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop",
    ctaText: "Make a Reservation Today",
    ctaLink: "/contact",
  }
];

const AUTOPLAY_MS = 4000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [current]);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-gray-900 overflow-hidden group">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="object-cover w-full h-full"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <span className="inline-block py-1.5 px-4 bg-primary/90 text-white font-bold rounded-full text-sm uppercase tracking-widest backdrop-blur-sm shadow-sm">
                {slides[current].subtitle}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight drop-shadow-lg">
                {slides[current].title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-medium max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                {slides[current].description}
              </p>
              <div className="pt-8">
                <Link
                  href={slides[current].ctaLink}
                  className="px-10 py-5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-1 inline-block text-lg"
                >
                  {slides[current].ctaText}
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-primary text-white backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-50 z-20 border border-white/20"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-primary text-white backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-50 z-20 border border-white/20"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full h-2 ${
              current === index ? "w-10 bg-primary" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
