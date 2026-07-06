"use client";

import Image from "next/image";

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
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight uppercase">
          TEAM
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto italic leading-relaxed">
          Meet Our Team: The dedicated professionals behind our commitment to culinary excellence and hospitality services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {executiveTeam.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex items-start gap-5 transition-all duration-300 hover:shadow-md"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
              <Image
                src={member.image}
                alt={member.name || member.role}
                width={96}
                height={96}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex-1 min-w-0 space-y-1.5">
              <h3 className="text-lg font-bold text-gray-900 leading-tight">
                {member.name || <span className="text-gray-400 italic">—</span>}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed pt-1">
                Dedicated professional committed to delivering exceptional culinary and hospitality experiences.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
