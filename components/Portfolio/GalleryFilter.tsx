"use client";

import { useState, useEffect, useCallback } from "react";
import type { GalleryItem } from "@/lib/gallery-data";

interface GalleryFilterProps {
  categories: string[];
  items: GalleryItem[];
}

export default function GalleryFilter({
  categories,
  items,
}: GalleryFilterProps) {
  const [activeTag, setActiveTag] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = activeTag === "All"
    ? Object.values(
        items.reduce((acc, item) => {
          if (!acc[item.category]) acc[item.category] = item;
          return acc;
        }, {} as Record<string, GalleryItem>)
      )
    : items.filter((item) => item.category === activeTag);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  }, [filtered.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  }, [filtered.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeLightbox, goToPrev, goToNext]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-2">
        {categories.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTag === tag
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div
          key={activeTag}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-contain bg-neutral-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="col-span-full text-center py-20 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50">
          <p className="text-gray-500 text-lg font-medium">
            📸 No items match this category yet. Check back as we update our
            gallery.
          </p>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-xl font-bold transition-colors"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl font-bold transition-colors"
          >
            ‹
          </button>

          <div className="flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[currentIndex].image}
              alt={filtered[currentIndex].title}
              className="max-h-[85vh] max-w-[90vw] object-contain select-none"
            />
          </div>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl font-bold transition-colors"
          >
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
            {currentIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </div>
  );
}
