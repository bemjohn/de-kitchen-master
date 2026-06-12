"use client";

import { useState } from "react";

const FILTER_TAGS = [
  "All",
  "Chef Recruitment & Placement",
  "Private Chef Services",
  "Catering Events",
  "Restaurant & Lounge Projects",
  "Kitchen Setup Projects",
  "Hospitality Training",
  "Fine Dining Experiences",
  "Corporate Food Services",
  "Team Activities & Operations",
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Executive Chef Placement",
    category: "Chef Recruitment & Placement",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
    caption: "Head Chef deployed to a premium Lagos restaurant.",
  },
  {
    id: 2,
    title: "Private Residence Chef",
    category: "Private Chef Services",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop",
    caption: "Private chef preparing a family meal in an Ikoyi residence.",
  },
  {
    id: 3,
    title: "Luxury Wedding Reception",
    category: "Catering Events",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    caption: "300-guest plated dinner at a luxury wedding reception.",
  },
  {
    id: 4,
    title: "Restaurant Launch Support",
    category: "Restaurant & Lounge Projects",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    caption: "New restaurant concept launch with full staffing and kitchen setup.",
  },
  {
    id: 5,
    title: "Commercial Kitchen Installation",
    category: "Kitchen Setup Projects",
    image: "https://images.unsplash.com/photo-1583394283838-89745a30ed34?q=80&w=800&auto=format&fit=crop",
    caption: "Stainless steel commercial kitchen installation for a new lounge.",
  },
  {
    id: 6,
    title: "BOH Training Workshop",
    category: "Hospitality Training",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=800&auto=format&fit=crop",
    caption: "Practical kitchen training session for aspiring chefs.",
  },
  {
    id: 7,
    title: "Fine Dining Tasting Menu",
    category: "Fine Dining Experiences",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    caption: "7-course tasting menu at an exclusive private gala dinner.",
  },
  {
    id: 8,
    title: "Corporate Executive Lunch",
    category: "Corporate Food Services",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    caption: "Executive lunch service for a corporate headquarters team.",
  },
  {
    id: 9,
    title: "Culinary Team Building",
    category: "Team Activities & Operations",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    caption: "Team-building cooking session with hospitality staff.",
  },
  {
    id: 10,
    title: "Live Cooking Station",
    category: "Catering Events",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
    caption: "Interactive live cooking station at a corporate event.",
  },
  {
    id: 11,
    title: "Sous Chef Recruitment",
    category: "Chef Recruitment & Placement",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    caption: "Sous chef placed at a fine dining restaurant in Abuja.",
  },
  {
    id: 12,
    title: "Pastry Chef in Action",
    category: "Private Chef Services",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    caption: "Pastry chef creating dessert masterpieces for a private client.",
  },
  {
    id: 13,
    title: "Lounge Kitchen Setup",
    category: "Kitchen Setup Projects",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
    caption: "Complete kitchen setup for a high-end lounge in Victoria Island.",
  },
  {
    id: 14,
    title: "FOH Service Training",
    category: "Hospitality Training",
    image: "https://images.unsplash.com/photo-1564759224907-4a6c3a1c0e7a?q=80&w=800&auto=format&fit=crop",
    caption: "Front-of-house service standards training session.",
  },
  {
    id: 15,
    title: "Bar & Lounge Launch",
    category: "Restaurant & Lounge Projects",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=800&auto=format&fit=crop",
    caption: "New lounge launch with full operational support and staffing.",
  },
];

export default function GalleryFilter() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTag);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-2">
        {FILTER_TAGS.map((tag) => (
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
              <div className="p-5">
                <h4 className="text-base font-black text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  {item.caption}
                </p>
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
