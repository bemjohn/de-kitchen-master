"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";

const executiveTeam = [
  {
    name: "Chef Bishop",
    role: "Chief Executive Officer (CEO) & Founder",
    image: "/images/chefs/Chef_Bishop.jpg",
    location: "",
    experience: "",
    bio: "Dedicated professional committed to delivering exceptional culinary and hospitality experiences.",
  },
  {
    name: "HRH Amb. Executive MasterChef Emmanuel Ekong (Chef Emmatosky)",
    role: "Chief Operating Officer (COO) & Head of Culinary Development",
    image: "/images/chefs/Chef_Emmanuel_Ekong.jpg",
    location: "",
    experience: "",
    bio: "Dedicated professional committed to delivering exceptional culinary and hospitality experiences.",
  },
  {
    name: "Chef Eazzy (Jimoh Ismail Abidemi)",
    role: "Executive Chef & Director of Culinary Innovation",
    image: "/images/chefs/Chef_Eazzy.jpg",
    location: "",
    experience: "",
    bio: "Dedicated professional committed to delivering exceptional culinary and hospitality experiences.",
  },
  {
    name: "Kimberly Ann",
    role: "Executive Chef & Director of Hospitality Services",
    image: "/images/chefs/Kimberly_Ann.jpg",
    location: "",
    experience: "",
    bio: "Dedicated professional committed to delivering exceptional culinary and hospitality experiences.",
  },
  {
    name: "Chef Happiness (Etim Uyime Happiness)",
    role: "Executive Chef | Assistant Restaurant Consultant",
    image: "/images/chefs/Chef_Happiness.jpg",
    location: "Lagos, Nigeria",
    experience: "10 Years Experience",
    bio: "Chef Happiness is a seasoned culinary professional with over 10 years of experience in the hospitality industry, building a reputation for culinary excellence, operational efficiency, and innovative kitchen leadership. Throughout his career, he has developed expertise in menu creation, recipe development, food costing, procurement, staff supervision, and kitchen administration. His passion for creating exceptional dining experiences is matched by his ability to optimize restaurant operations and mentor culinary teams. As Executive Chef and Assistant Restaurant Consultant at De KITCHEN MASTER, he plays a key role in delivering creative culinary solutions, improving food operations, and supporting hospitality businesses through strategic consultancy and professional excellence.",
  },
  {
    name: "Chef Buzor (Mbika Chibuzor Franklyn)",
    role: "Executive Sous Chef | Menu & Recipe Development Specialist",
    image: "/images/chefs/Chef_Buzor.jpg",
    location: "",
    experience: "",
    bio: "Dedicated professional committed to delivering exceptional culinary and hospitality experiences.",
  },
  {
    name: "Chef Kola (Kolawole Segun Gabriel)",
    role: "Sous Chef | Marketing, Media & Business Development Manager",
    image: "/images/chefs/Chef_Kola.jpg",
    location: "",
    experience: "",
    bio: "Dedicated professional committed to delivering exceptional culinary and hospitality experiences.",
  },
  {
    name: "",
    role: "Training & Development Coordinator",
    image: "/images/chefs/Training_Development_Coordinator.jpg",
    location: "",
    experience: "",
    bio: "Dedicated professional committed to delivering exceptional culinary and hospitality experiences.",
  },
  {
    name: "",
    role: "Operations Manager",
    image: "/images/chefs/Operations_Manager.jpg",
    location: "",
    experience: "",
    bio: "Dedicated professional committed to delivering exceptional culinary and hospitality experiences.",
  },
];

export default function TeamGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="team" className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {executiveTeam.map((member, index) => {
          const isExpanded = expandedIndex === index;

          return (
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

                {isExpanded && member.location && (
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 pt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{member.location}</span>
                  </div>
                )}
                {isExpanded && member.experience && (
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{member.experience}</span>
                  </div>
                )}

                <p className="text-sm text-gray-600 leading-relaxed pt-1">
                  {isExpanded
                    ? member.bio
                    : member.bio.length > 120
                      ? member.bio.slice(0, 120) + "..."
                      : member.bio}
                </p>

                <button
                  onClick={() => toggleExpand(index)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors pt-1"
                >
                  {isExpanded ? (
                    <>View Less <ChevronUp className="w-3 h-3" /></>
                  ) : (
                    <>View More <ChevronDown className="w-3 h-3" /></>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
