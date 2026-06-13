export const metadata = {
  title: "Our Chefs | De KITCHEN MASTER",
  description:
    "Meet the skilled culinary professionals in the De KITCHEN MASTER network. Executive chefs, private chefs, fine dining specialists, and more.",
};

const chefCategories = [
  {
    title: "Executive Chefs",
    description:
      "Experienced culinary leaders responsible for managing kitchen operations, menu development, quality control, and team leadership.",
    chefs: [
      { name: "Chef Michael Adewale", experience: "10+ Years", specialty: "Local & Intercontinental Cuisine", location: "Lagos, Nigeria" },
      { name: "Chef Sarah Okafor", experience: "8+ Years", specialty: "Continental & Fusion Cuisine", location: "Abuja, Nigeria" },
      { name: "Chef David Nkwocha", experience: "12+ Years", specialty: "African & International Cuisine", location: "Port Harcourt, Nigeria" },
    ],
  },
  {
    title: "Private & Residential Chefs",
    description:
      "Professional chefs available for private homes, family residences, executives, expatriates, and VIP clients.",
    chefs: [
      { name: "Chef Grace Okonkwo", experience: "7+ Years", specialty: "Home Cooking & Meal Prep", location: "Lagos, Nigeria" },
      { name: "Chef Emmanuel Bello", experience: "6+ Years", specialty: "Family & Nutritional Cuisine", location: "Abuja, Nigeria" },
      { name: "Chef Fatima Usman", experience: "5+ Years", specialty: "Private Dining & Events", location: "Kano, Nigeria" },
    ],
  },
  {
    title: "Fine Dining Chefs",
    description:
      "Specialists in luxury dining experiences, premium menu execution, and elevated culinary presentation.",
    chefs: [
      { name: "Chef Anthony Eze", experience: "9+ Years", specialty: "Fine Dining & Gourmet Cuisine", location: "Lagos, Nigeria" },
      { name: "Chef Victoria Ogun", experience: "7+ Years", specialty: "French & Mediterranean Cuisine", location: "Abuja, Nigeria" },
      { name: "Chef Samuel Ibrahim", experience: "8+ Years", specialty: "Modern African Cuisine", location: "Lagos, Nigeria" },
    ],
  },
  {
    title: "Grill Chefs",
    description:
      "Experts in grilling, barbecue operations, outdoor cooking, and live grill experiences.",
    chefs: [
      { name: "Chef Joseph Mohammed", experience: "6+ Years", specialty: "Barbecue & Grilling", location: "Lagos, Nigeria" },
      { name: "Chef Patricia Edeh", experience: "5+ Years", specialty: "Live Grill & Outdoor Cooking", location: "Abuja, Nigeria" },
      { name: "Chef Paul Okojie", experience: "7+ Years", specialty: "Grill & Rotisserie", location: "Benin, Nigeria" },
    ],
  },
  {
    title: "Pastry Chefs & Bakers",
    description:
      "Professionals specializing in pastries, desserts, cakes, breads, and bakery production.",
    chefs: [
      { name: "Chef Deborah Ajayi", experience: "8+ Years", specialty: "Pastry & Dessert Artistry", location: "Lagos, Nigeria" },
      { name: "Chef Esther Obi", experience: "6+ Years", specialty: "Bread & Bakery Production", location: "Enugu, Nigeria" },
      { name: "Chef Caleb Adeyemi", experience: "7+ Years", specialty: "Cakes & Confectionery", location: "Ibadan, Nigeria" },
    ],
  },
  {
    title: "Contract & Event Chefs",
    description:
      "Available for temporary assignments, special projects, events, seasonal operations, and hospitality support.",
    chefs: [
      { name: "Chef Daniel Musa", experience: "7+ Years", specialty: "Event Catering & Buffets", location: "Lagos, Nigeria" },
      { name: "Chef Rachel Nnamdi", experience: "5+ Years", specialty: "Contract & Festival Support", location: "Abuja, Nigeria" },
      { name: "Chef Timothy Yakubu", experience: "6+ Years", specialty: "Pop-Up & Seasonal Operations", location: "Calabar, Nigeria" },
    ],
  },
];

const chefImage = "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop";

function ChefCard({
  chef,
  position,
}: {
  chef: { name: string; experience: string; specialty: string; location: string };
  position: string;
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
              Available
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Languages</span>
            <span>English</span>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <a
            href="#"
            className="flex-1 text-center border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary font-bold rounded-xl px-4 py-2.5 text-sm transition-all duration-300"
          >
            View Profile
          </a>
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
    </div>
  );
}
