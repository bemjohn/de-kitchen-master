'use client';

import { useState } from 'react';

const chefCategories = [
  {
    title: "Executive Chefs",
    description:
      "Experienced culinary leaders responsible for managing kitchen operations, menu development, quality control, and team leadership.",
    chefs: [
      { name: "Chef Michael Adewale", experience: "10+ Years", specialty: "Local & Intercontinental Cuisine", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef Michael Adewale brings over a decade of culinary mastery, blending bold West African flavours with classical French techniques. He has led brigade kitchens in premium hotels across Lagos and Abuja, mentored junior chefs, and designed award-winning tasting menus for high-profile corporate and diplomatic events." },
      { name: "Chef Sarah Okafor", experience: "8+ Years", specialty: "Continental & Fusion Cuisine", location: "Abuja, Nigeria", availability: "Available", fullDescription: "Chef Sarah Okafor is a creative force in continental and fusion cuisine, known for her inventive flavour pairings and meticulous plating. She has worked across five-star hotels and boutique restaurants, curating bespoke menus for private dinners, embassy receptions, and luxury brand launches throughout Nigeria's capital." },
      { name: "Chef David Nkwocha", experience: "12+ Years", specialty: "African & International Cuisine", location: "Port Harcourt, Nigeria", availability: "Available", fullDescription: "Chef David Nkwocha is a seasoned culinary leader with over twelve years of experience spanning African, European, and Asian cuisines. He has successfully managed multi-outlet kitchen operations in Port Harcourt's premier hospitality venues and is widely respected for his ability to marry traditional Nigerian ingredients with global cooking techniques." },
    ],
  },
  {
    title: "Private & Residential Chefs",
    description:
      "Professional chefs available for private homes, family residences, executives, expatriates, and VIP clients.",
    chefs: [
      { name: "Chef Grace Okonkwo", experience: "7+ Years", specialty: "Home Cooking & Meal Prep", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef Grace Okonkwo specialises in bringing restaurant-quality meals into private homes. With seven years of experience in meal preparation and family nutrition, she tailors weekly menus to dietary requirements and personal preferences, ensuring every meal is both nourishing and deeply satisfying for busy families and executives." },
      { name: "Chef Emmanuel Bello", experience: "6+ Years", specialty: "Family & Nutritional Cuisine", location: "Abuja, Nigeria", availability: "Available", fullDescription: "Chef Emmanuel Bello is a family-focused culinary professional with a deep understanding of nutritional science. He works closely with clients to develop balanced meal plans that support active lifestyles, combining whole foods with globally inspired recipes that even the pickiest eaters enjoy." },
      { name: "Chef Fatima Usman", experience: "5+ Years", specialty: "Private Dining & Events", location: "Kano, Nigeria", availability: "Available", fullDescription: "Chef Fatima Usman creates intimate and memorable private dining experiences for gatherings of all sizes. From romantic anniversary dinners to lively family celebrations, she brings Northern Nigerian hospitality and contemporary flair to every table, handling everything from menu planning to service with grace and professionalism." },
    ],
  },
  {
    title: "Fine Dining Chefs",
    description:
      "Specialists in luxury dining experiences, premium menu execution, and elevated culinary presentation.",
    chefs: [
      { name: "Chef Anthony Eze", experience: "9+ Years", specialty: "Fine Dining & Gourmet Cuisine", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef Anthony Eze is a fine dining virtuoso who has trained under internationally acclaimed chefs in Europe and the Middle East. He brings exacting standards to every plate, specialising in multi-course tasting menus, wine pairings, and molecular gastronomy techniques that transform meals into unforgettable culinary journeys." },
      { name: "Chef Victoria Ogun", experience: "7+ Years", specialty: "French & Mediterranean Cuisine", location: "Abuja, Nigeria", availability: "Available", fullDescription: "Chef Victoria Ogun's cuisine is a love letter to the Mediterranean. Trained in France and Italy, she crafts dishes that celebrate sun-ripened tomatoes, fragrant herbs, and the finest olive oils. Her elegant presentations and refined flavour profiles have made her a sought-after chef for embassy galas and luxury retreats." },
      { name: "Chef Samuel Ibrahim", experience: "8+ Years", specialty: "Modern African Cuisine", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef Samuel Ibrahim is at the forefront of the modern African cuisine movement. He reimagines traditional dishes like jollof rice, egusi soup, and suya with contemporary plating and unexpected ingredient pairings, earning acclaim from food critics and a loyal following among Lagos's discerning diners." },
    ],
  },
  {
    title: "Grill Chefs",
    description:
      "Experts in grilling, barbecue operations, outdoor cooking, and live grill experiences.",
    chefs: [
      { name: "Chef Joseph Mohammed", experience: "6+ Years", specialty: "Barbecue & Grilling", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef Joseph Mohammed is a grill master who commands live-fire cooking with unmatched skill. From smoky Nigerian suya to American-style briskets and Argentine asado, he understands the science of heat, smoke, and seasoning. His outdoor cookouts and barbecue pop-ups are legendary across Lagos." },
      { name: "Chef Patricia Edeh", experience: "5+ Years", specialty: "Live Grill & Outdoor Cooking", location: "Abuja, Nigeria", availability: "Available", fullDescription: "Chef Patricia Edeh brings energy and expertise to live grilling events, from garden parties to corporate retreats. She specialises in high-volume outdoor cooking without compromising on quality, managing multiple stations while engaging guests with the theatre of open-flame cuisine." },
      { name: "Chef Paul Okojie", experience: "7+ Years", specialty: "Grill & Rotisserie", location: "Benin, Nigeria", availability: "Available", fullDescription: "Chef Paul Okojie's rotisserie and grill techniques produce succulent, flavour-packed meats every time. With seven years perfecting his craft, he sources the best local cuts and marinades them with proprietary spice blends, delivering a taste that keeps clients returning week after week." },
    ],
  },
  {
    title: "Pastry Chefs & Bakers",
    description:
      "Professionals specializing in pastries, desserts, cakes, breads, and bakery production.",
    chefs: [
      { name: "Chef Deborah Ajayi", experience: "8+ Years", specialty: "Pastry & Dessert Artistry", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef Deborah Ajayi is an award-winning pastry artist whose creations are as beautiful as they are delicious. Trained in Paris and London, she specialises in intricate sugar work, layered entremets, and artisanal chocolates. Her dessert bars are a staple at high-end weddings, product launches, and VIP galas across Nigeria." },
      { name: "Chef Esther Obi", experience: "6+ Years", specialty: "Bread & Bakery Production", location: "Enugu, Nigeria", availability: "Available", fullDescription: "Chef Esther Obi is a dedicated baker who treats bread-making as both a science and an art. From crusty sourdough loaves to soft brioche and gluten-free alternatives, she supplies boutique hotels and cafés in Enugu with freshly baked goods that have developed a cult following among local food lovers." },
      { name: "Chef Caleb Adeyemi", experience: "7+ Years", specialty: "Cakes & Confectionery", location: "Ibadan, Nigeria", availability: "Available", fullDescription: "Chef Caleb Adeyemi designs and bakes show-stopping custom cakes for every occasion — wedding tiers, birthday sculptures, and corporate centrepieces. His fondant work and flavour combinations (think vanilla-hibiscus or chocolate-chili) have made him one of Ibadan's most sought-after confectionery artists." },
    ],
  },
  {
    title: "Contract & Event Chefs",
    description:
      "Available for temporary assignments, special projects, events, seasonal operations, and hospitality support.",
    chefs: [
      { name: "Chef Daniel Musa", experience: "7+ Years", specialty: "Event Catering & Buffets", location: "Lagos, Nigeria", availability: "Available", fullDescription: "Chef Daniel Musa is a high-volume event specialist who has catered for crowds of fifty to five thousand. His buffet spreads are celebrated for their variety, freshness, and visual appeal. He coordinates end-to-end event food service, from logistics and staffing to execution, ensuring every guest leaves impressed." },
      { name: "Chef Rachel Nnamdi", experience: "5+ Years", specialty: "Contract & Festival Support", location: "Abuja, Nigeria", availability: "Available", fullDescription: "Chef Rachel Nnamdi thrives in fast-paced, temporary environments — music festivals, film sets, sports tournaments, and seasonal hospitality pop-ups. She adapts quickly to new kitchens and constraints, delivering consistent quality under pressure. Her resilience and can-do attitude make her a favourite among event producers." },
      { name: "Chef Timothy Yakubu", experience: "6+ Years", specialty: "Pop-Up & Seasonal Operations", location: "Calabar, Nigeria", availability: "Available", fullDescription: "Chef Timothy Yakubu is the go-to professional for pop-up restaurants and seasonal dining concepts in Calabar. He excels at building temporary kitchen setups, designing limited-time menus that create buzz, and dismantling operations efficiently. His pop-ups have become a hallmark of Calabar's evolving food scene." },
    ],
  },
];

const chefImage = "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop";

type Chef = {
  name: string;
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
            {position}
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
