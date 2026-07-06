"use client";

const executiveTeam = [
  {
    name: "Chef Bishop",
    role: "Chief Executive Officer (CEO) & Founder",
    image: "/images/chefs/Chef_Bishop.jpg",
  },
  {
    name: "HRH Amb. Executive MasterChef Emmanuel Ekong (Chef Emmatosky)",
    role: "Chief Operating Officer (COO) & Head of Culinary Development",
    image: "/images/chefs/Chef_Emmanuel_Ekong.jpg",
  },
  {
    name: "Chef Eazzy (Jimoh Ismail Abidemi)",
    role: "Executive Chef & Director of Culinary Innovation",
    image: "/images/chefs/Chef_Eazzy.jpg",
  },
  {
    name: "Kimberly Ann",
    role: "Executive Chef & Director of Hospitality Services",
    image: "/images/chefs/Kimberly_Ann.jpg",
  },
  {
    name: "Chef Happiness (Etim Uyime Happiness)",
    role: "Executive Chef | Assistant Restaurant Consultant",
    image: "/images/chefs/Chef_Happiness.jpg",
  },
  {
    name: "Chef Buzor (Mbika Chibuzor Franklyn)",
    role: "Executive Sous Chef | Menu & Recipe Development Specialist",
    image: "/images/chefs/Chef_Buzor.jpg",
  },
  {
    name: "Chef Kola (Kolawole Segun Gabriel)",
    role: "Sous Chef | Marketing, Media & Business Development Manager",
    image: "/images/chefs/Chef_Kola.jpg",
  },
  {
    name: "",
    role: "Training & Development Coordinator",
    image: "/images/chefs/Training_Development_Coordinator.jpg",
  },
  {
    name: "",
    role: "Operations Manager",
    image: "/images/chefs/Operations_Manager.jpg",
  },
];

export default function TeamGrid() {
  return (
    <div id="team" className="mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {executiveTeam.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-500"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
              <img
                src={member.image}
                alt={member.name || member.role}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-black text-gray-900">
                {member.name || <span className="text-gray-400 italic">—</span>}
              </h3>
              <p className="text-sm font-semibold text-primary leading-relaxed">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
