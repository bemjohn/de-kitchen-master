'use client';

import { useState } from 'react';

const chefCategories = [
  {
    title: "Executive & Kitchen Leadership",
    description:
      "Experienced culinary leaders responsible for managing kitchen operations, menu development, quality control, and team leadership across multiple establishments.",
    chefs: [
      { name: "Chef David", role: "Senior Sous Chef", experience: "17 Years", specialty: "Nigerian, Continental & International Cuisine", location: "Ibadan, Nigeria", availability: "Available", fullDescription: "An accomplished Senior Sous Chef with 17 years of culinary expertise in Nigerian, Continental, and International cuisines. Recognized for strong kitchen leadership, culinary excellence, team development, and delivering exceptional dining experiences across hotels and restaurants." },
      { name: "Chef Tosin", role: "Sous Chef", experience: "10 Years", specialty: "Multi-Establishment Guest Experiences & Kitchen Leadership", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef Tosin is a dedicated Sous Chef with a decade of experience managing kitchen operations across multiple high-volume establishments. He excels at coordinating brigade teams, maintaining consistency across service periods, and elevating guest experiences through meticulous attention to flavour, presentation, and kitchen discipline." },
      { name: "Chef Adedeji Samuel Popoola", role: "Executive Sous Chef", experience: "18 Years", specialty: "Nigerian & Continental Cuisine Leadership", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef Adedeji Samuel Popoola brings eighteen years of deep culinary wisdom to every kitchen he leads. As an Executive Sous Chef, he has overseen large-scale operations in premier Lagos hotels, mentored scores of junior chefs, and built a reputation for uncompromising standards in both Nigerian and Continental cuisine execution." },
    ],
  },
  {
    title: "Continental & Fine Dining Specialists",
    description:
      "Specialists in luxury dining experiences, premium menu execution, and elevated culinary presentation with a continental flair.",
    chefs: [
      { name: "Pretty Chef", role: "Sous Chef | Private Fine Dining Chef", experience: "5 Years", specialty: "Continental & Mediterranean Cuisine", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Pretty Chef is a refined culinary professional specializing in private fine dining experiences. With five years of expertise in Continental and Mediterranean cuisine, she crafts intimate multi-course menus that transport guests through the flavours of Southern Europe and North Africa, paired with impeccable service and presentation." },
      { name: "Chef Oyin", role: "Professional Chef", experience: "4+ Years", specialty: "Catering, À La Carte Service & Core Culinary Techniques", location: "Lagos, Nigeria", availability: "Available", fullDescription: "A passionate professional chef with over four years of experience in catering, à la carte service, and core culinary techniques. Committed to delivering quality cuisine, exceptional service, and memorable dining experiences with precision and creativity." },
      { name: "Chef James", role: "Fine Dining & Sushi Chef", experience: "6+ Years", specialty: "Japanese Cuisine, Culinary Fusion & Sushi Artistry", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef James is a master of Japanese culinary arts with over six years of experience specializing in sushi craftsmanship and fusion cuisine. He blends traditional Edomae techniques with contemporary West African ingredients, creating unique omakase experiences that have earned him a dedicated following among Lagos fine dining connoisseurs." },
      { name: "Chef Prosper", role: "Chef de Partie", experience: "5 Years", specialty: "Cuisine Preparation, Menu R&D & Innovative Food Concepts", location: "Nigeria", availability: "Available", fullDescription: "Chef Prosper is a creative Chef de Partie with five years of experience driving menu research and development. He thrives on experimenting with flavour profiles, textures, and plating techniques, bringing innovative food concepts to life in both à la carte and tasting menu formats across contemporary dining venues." },
    ],
  },
  {
    title: "African & Local Cuisine Masters",
    description:
      "Experts in authentic African culinary traditions, celebrating indigenous ingredients, time-honoured techniques, and rich cultural heritage.",
    chefs: [
      { name: "Chef Ifunanya Eunice", role: "African Cuisine Cook", experience: "7 Years", specialty: "Authentic African Cuisine & Kitchen Supervision", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef Ifunanya Eunice is a passionate guardian of authentic African cuisine with seven years of experience cooking and supervising kitchens. She brings deep knowledge of traditional Nigerian recipes, spice blends, and cooking methods, ensuring that every dish honours the cultural roots while meeting modern kitchen standards." },
      { name: "Chef phizzle", role: "Chef de Partie", experience: "7 Years", specialty: "Authentic Nigerian Cuisine & Kitchen Standards", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef phizzle is a dedicated Chef de Partie with seven years of experience specializing in authentic Nigerian cuisine. He takes pride in upholding the highest kitchen standards while preparing beloved local dishes — from rich egusi soups and perfectly grilled suya to fluffy jollof rice — with consistency and pride." },
    ],
  },
  {
    title: "Pastry, Grill & Everyday Services",
    description:
      "Professionals skilled in pastry arts, grilling techniques, and everyday meal services for a wide range of culinary needs.",
    chefs: [
      { name: "Chef Thompson", role: "Sous Chef", experience: "11 Years", specialty: "Pastry, Continental & Nigerian Cuisine", location: "Lagos, Nigeria", availability: "Available", fullDescription: "A skilled Sous Chef with 11 years of professional culinary experience, specializing in pastry, Continental, and Nigerian cuisine. Dedicated to culinary excellence, kitchen leadership, and delivering exceptional dining experiences across hotels and fine dining restaurants." },
      { name: "Chef Adewale", role: "Chef de Partie", experience: "4 Years", specialty: "Breakfast, Grilling, Continental & Nigerian Cuisine", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef Adewale is a versatile Chef de Partie with four years of experience covering breakfast service, grilling, and both Continental and Nigerian cuisine. His adaptability and strong foundational skills make him a reliable asset in busy kitchen environments, from hotel breakfast buffets to live grill stations." },
    ],
  },
];

const chefImage = "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop";

type Chef = {
  name: string;
  role?: string;
  experience: string;
  specialty: string;
  location: string;
  availability: string;
  fullDescription: string;
};

function ChefCard({
  chef,
  position,
  onViewProfile,
}: {
  chef: Chef;
  position: string;
  onViewProfile: () => void;
}) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-500">
      <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
        <img
          src={chefImage}
          alt={chef.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-black text-gray-900">{chef.name}</h3>
          <p className="text-primary font-bold text-sm uppercase tracking-wider">
            {chef.role ?? position}
          </p>
        </div>

        <div className="space-y-2 text-sm text-gray-700 font-medium">
          <div className="flex justify-between">
            <span className="text-gray-500">Experience</span>
            <span>{chef.experience}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Specialty</span>
            <span className="text-right">{chef.specialty}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Location</span>
            <span>{chef.location}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Availability</span>
            <span className="inline-flex items-center gap-1.5 text-green-600 font-bold">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              {chef.availability}
            </span>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={onViewProfile}
            className="flex-1 text-center border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary font-bold rounded-xl px-4 py-2.5 text-sm transition-all duration-300"
          >
            View Profile
          </button>
          <a
            href="#"
            className="flex-1 text-center bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-4 py-2.5 text-sm transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Request This Chef
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ChefsPage() {
  const [selectedChef, setSelectedChef] = useState<Chef | null>(null);

  return (
    <div className="pt-20 bg-white">
      {/* ───── SECTION 1: HERO ───── */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
              OUR CHEFS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight">
              Meet the Professionals Behind Exceptional Culinary Experiences
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                At De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, we are proud to work with a growing network of skilled culinary professionals serving private residences, restaurants, hotels, lounges, catering companies, and corporate organizations.
              </p>
            </div>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium space-y-4">
              <p>
                Our chef network consists of experienced professionals with diverse culinary backgrounds, specialties, and industry experience.
              </p>
              <p>
                Whether you require a Private Chef, Executive Chef, Grill Chef, Pastry Chef, Family Chef, Contract Chef, or a complete kitchen team, we can connect you with the right professional for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 2: CHEF CATEGORIES ───── */}
      {chefCategories.map((category) => (
        <section
          key={category.title}
          className="border-b border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
                {category.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-3xl">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.chefs.map((chef) => (
                <ChefCard
                  key={chef.name}
                  chef={chef}
                  position={category.title}
                  onViewProfile={() => setSelectedChef(chef)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ───── SECTION 3: CORE QUALITY MANIFESTO ───── */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
              Our Standard
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8">
              OUR COMMITMENT TO QUALITY
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
              <p>
                Every professional featured within our network undergoes a structured screening and evaluation process designed to maintain the standards expected by our clients.
              </p>
              <p>
                We prioritize professionalism, competence, reliability, and service excellence when selecting culinary professionals for our network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 4: CTA ───── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
            LOOKING FOR A CHEF?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium max-w-4xl mx-auto mb-10">
            Whether you need a chef for your home, restaurant, hotel, event, or hospitality business, our team is ready to help you find the right match.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 max-w-xl mx-auto">
            <a
              href="#"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              REQUEST A CHEF
            </a>
            <a
              href="#"
              className="inline-block border-2 border-gray-300 hover:border-primary text-gray-800 hover:text-primary font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:-translate-y-1"
            >
              SPEAK WITH A CONSULTANT
            </a>
            <a
              href="#"
              className="inline-block text-primary hover:text-primary-dark font-bold px-8 py-4 transition-all duration-300 hover:-translate-y-1 underline underline-offset-4 decoration-primary/30"
            >
              CONTACT OUR TEAM
            </a>
          </div>
        </div>
      </section>

      {/* ───── MODAL OVERLAY ───── */}
      {selectedChef && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedChef(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 rounded-t-2xl">
                <img
                  src={chefImage}
                  alt={selectedChef.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => setSelectedChef(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-all duration-200"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-black text-gray-900 mb-1">
                {selectedChef.name}
              </h2>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-6">
                {chefCategories.find((c) =>
                  c.chefs.some((ch) => ch.name === selectedChef.name)
                )?.title}
              </p>
              <div className="border-t border-gray-100 pt-6">
                <p className="text-gray-700 leading-relaxed text-base">
                  {selectedChef.fullDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
