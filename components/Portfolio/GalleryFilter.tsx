"use client";

import { useState } from "react";
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

  const filtered = activeTag === "All"
    ? Object.values(
        items.reduce((acc, item) => {
          if (!acc[item.category]) acc[item.category] = item;
          return acc;
        }, {} as Record<string, GalleryItem>)
      )
    : items.filter((item) => item.category === activeTag);

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
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
    </div>
  );
}
