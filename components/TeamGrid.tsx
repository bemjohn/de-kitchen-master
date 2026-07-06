"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";

const executiveTeam = [
  {
    name: "Chef Bishop",
    role: "Chief Executive Officer (CEO) & Founder",
    image: "/images/chefs/Chef_Bishop.jpg",
    location: "Lagos, Nigeria",
    experience: "15+ Years Experience",
    bio: "Dedicated professional committed to delivering exceptional culinary and hospitality experiences.",
  },
  {
    name: "HRH Amb. Executive MasterChef Emmanuel Ekong (Chef Emmatosky)",
    role: "Chief Operating Officer (COO) & Head of Culinary Development",
    image: "/images/chefs/Chef_Emmanuel_Ekong.jpg",
    location: "Calabar, Nigeria",
    experience: "12 Years Experience",
    bio: "HRH Amb. Executive MasterChef Emmanuel Ekong, popularly known as Emmatosky, is an internationally recognized culinary leader, award-winning MasterChef, and respected culinary educator with over 12 years of professional experience. Renowned for his passion for culinary excellence, leadership, and chef development, he has dedicated his career to advancing the culinary profession through education, innovation, mentorship, and operational excellence. Throughout his distinguished career, Chef Emmatosky has earned an exceptional reputation through remarkable achievements on both national and international stages. He is a multiple award-winning chef with 15 Gold Medals, 2 Silver Medals, and 2 Bronze Medals, including Gold Awards at Babecue Nigeria and Babecue Burkina Faso (2025), Gold Medalist at CIGAF Burkina Faso (2023), Silver Trophy for Plated Dessert at the West African Food Festival (2024), and recipient of The Prestigious Chef Award Ghana (2026). As COO at De KITCHEN MASTER, he oversees operational excellence, culinary innovation, chef training, and quality assurance across the organization.",
  },
  {
    name: "Chef Eazzy (Jimoh Ismail Abidemi)",
    role: "Executive Chef & Director of Culinary Innovation",
    image: "/images/chefs/Chef_Eazzy.jpg",
    location: "Lagos, Nigeria",
    experience: "10+ Years Experience",
    bio: "Dedicated professional committed to delivering exceptional culinary and hospitality experiences.",
  },
  {
    name: "Chef Kimberly (Kimberly Ann Marks)",
    role: "Hospitality & Food & Beverage Operations Manager | Executive Chef | Restaurant & Catering Operations Manager",
    image: "/images/chefs/Chef_Kimberly.jpg",
    location: "Accra, Ghana",
    experience: "28+ Years Experience",
    bio: "Chef Kimberly is a highly accomplished hospitality executive and culinary leader with over 28 years of professional experience in hospitality, food and beverage operations, restaurant management, hotel operations, banquet services, and large-scale catering across Canada and Ghana. Her extensive professional journey includes serving as an Executive Chef, Sous Chef, Banquet Chef, Restaurant Manager, Catering Operations Manager, and Hospitality Operations Manager. Chef Kimberly holds a Master's Degree in Business Administration (MBA) alongside professional qualifications in Hospitality Management and Food & Beverage Operations. As Hospitality & Food & Beverage Operations Manager, Executive Chef, and Restaurant & Catering Operations Manager at De KITCHEN MASTER Culinary & Hospitality Services Ltd, Chef Kimberly provides executive leadership across hospitality operations, service delivery, restaurant consultancy, catering management, and organizational development.",
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
    location: "Lagos, Nigeria",
    experience: "13 Years Experience",
    bio: "Chef Buzor is a highly accomplished culinary professional with 13 years of experience across restaurants, hotels, lounges, fine dining establishments, catering companies, and fast-food operations. Throughout his career, he has built extensive expertise in kitchen management, menu engineering, menu planning, recipe development, procurement, inventory control, and operational efficiency. His ability to design innovative menus while maintaining cost-effective kitchen operations has earned him a reputation for excellence and strategic leadership. As Executive Sous Chef and Menu & Recipe Development Specialist at De KITCHEN MASTER, Chef Buzor drives culinary innovation, develops signature recipes, and supports hospitality businesses with sustainable food concepts and operational excellence.",
  },
  {
    name: "Chef Kola (Kolawole Segun Gabriel)",
    role: "Sous Chef | Marketing, Media & Business Development Manager",
    image: "/images/chefs/Chef_Kola.jpg",
    location: "Lagos, Nigeria",
    experience: "9 Years Experience",
    bio: "Chef Kola is a dynamic culinary professional and creative business strategist with over nine years of experience spanning culinary operations, marketing, media, and brand development. His unique combination of kitchen expertise and digital media skills has enabled him to bridge the gap between culinary excellence and modern brand communication. With experience in content creation, advertising, videography, photography, and media influence, he has contributed to promoting culinary brands while strengthening customer engagement and business visibility. Having gained valuable exposure in Nigeria, Ghana, and Dubai, Chef Kola brings a global perspective to culinary marketing and business growth. As Sous Chef and Marketing, Media & Business Development Manager at De KITCHEN MASTER Culinary & Hospitality Services Ltd, he leads the company's marketing strategy, digital storytelling, and brand expansion.",
  },
  {
    name: "",
    role: "Training & Development Coordinator",
    image: "/images/chefs/Training_Development_Coordinator.jpg",
    location: "Lagos, Nigeria",
    experience: "",
    bio: "Dedicated professional committed to delivering exceptional culinary and hospitality experiences.",
  },
  {
    name: "",
    role: "Operations Manager",
    image: "/images/chefs/Operations_Manager.jpg",
    location: "Lagos, Nigeria",
    experience: "",
    bio: "Dedicated professional committed to delivering exceptional culinary and hospitality experiences.",
  },
  {
    name: "Chef Joy (Joy James)",
    role: "Sous Chef | Catering & Event Coordinator – Level 2",
    image: "/images/chefs/Chef_Joy.jpg",
    location: "Lagos, Nigeria",
    experience: "20 Years Experience",
    bio: "Chef Joy is a highly experienced culinary professional with over 20 years of expertise in the hospitality industry. Throughout her career, she has built an impressive portfolio working across leading hotels and resorts, including Inagbe Grand Resort, Piccadilly Hotel, Hillsbay Hotel, and Ife Grand Resort. She specializes in Intercontinental and Continental cuisine, pastries, grilling, and large-scale catering operations. Her wealth of experience in event coordination, kitchen management, and guest service enables her to deliver exceptional culinary experiences with consistency and professionalism. As Sous Chef and Catering & Event Coordinator – Level 2 at De KITCHEN MASTER Culinary & Hospitality Services Ltd, Chef Joy supports the planning and execution of premium catering services, corporate functions, private events, and hospitality projects while maintaining the company's high standards.",
  },
  {
    name: "Chef Best (Iwatt Sifon)",
    role: "Pastry Sous Chef | Head of Pastry & Bakery Operations",
    image: "/images/chefs/Chef_Best.jpg",
    location: "Lagos, Nigeria",
    experience: "9 Years Experience",
    bio: "Chef Best is a skilled pastry professional with over nine years of experience specializing in artisan and fermented breads, puff pastries, premium desserts, and handcrafted cakes. Throughout his career, he has refined his expertise while working with renowned establishments including Bakehouse Lagos, The Bodega Emporium, and Black & Cooper Restaurant. His passion for precision, creativity, and product consistency has earned him a reputation for delivering exceptional baked goods and innovative pastry creations. As Pastry Sous Chef and Head of Pastry & Bakery Operations at De KITCHEN MASTER Culinary & Hospitality Services Ltd, Chef Best leads the company's pastry and bakery division, driving product innovation, quality assurance, recipe development, and the creation of world-class baked products for clients, training programs, and hospitality projects.",
  },
  {
    name: "Chef Moses (Igwe Moses)",
    role: "Sous Chef | Assistant Restaurant & Lounge Consultant – Level 2",
    image: "/images/chefs/Chef_Moses.jpg",
    location: "Warri, Delta State, Nigeria",
    experience: "7 Years Experience",
    bio: "Chef Moses is a passionate culinary professional with seven years of experience in restaurant operations, kitchen leadership, and hospitality consultancy. Throughout his career, he has developed strong expertise in menu and recipe development, kitchen management, operational control, and team leadership. His professional journey includes serving as a Head Chef at PHLUID Restaurant & Lounge, consulting for Wave on West End Restaurant, and mentoring aspiring chefs as a Culinary Instructor at Kitchen Pundit. As Sous Chef and Assistant Restaurant & Lounge Consultant – Level 2 at De KITCHEN MASTER Culinary & Hospitality Services Ltd, Chef Moses contributes to restaurant development, operational improvement, culinary training, and delivering innovative hospitality solutions that align with the company's commitment to excellence.",
  },
  {
    name: "Chef Faith (Faith Godly)",
    role: "Sous Chef | Events Coordinator",
    image: "/images/chefs/Chef_Faith.jpg",
    location: "Lagos, Nigeria",
    experience: "10+ Years Experience",
    bio: "Chef Faith is a dedicated culinary professional with over 10 years of experience across restaurants, hotels, and event catering, consistently delivering exceptional dining experiences through creativity, precision, and professionalism. She specializes in Continental and Nigerian cuisine, baking and pastry, menu planning, food presentation, kitchen management, and food safety. Her career includes roles at White Tree Bistro, Ikoyi, De Phantom Continental Hotel, Chevron, and Dalchifit Suites & Fitness Centre, Abuja. A graduate of Wave Crest College of Hospitality with an additional Advanced Cake Making Certificate from Sugar World, Chef Faith brings strong leadership, event coordination expertise, and a passion for culinary excellence to De KITCHEN MASTER Culinary & Hospitality Services Ltd.",
  },
  {
    name: "Chef Gregory (Gregory Edet Nyong)",
    role: "Executive Pastry Chef | Director of Pastry Development",
    image: "/images/chefs/Chef_Gregory.jpg",
    location: "Port Harcourt, Nigeria",
    experience: "10 Years Experience",
    bio: "Chef Gregory is an accomplished pastry professional with over 10 years of experience in luxury hospitality, specializing in premium pastries, desserts, artisan breads, and bakery operations. His career spans renowned establishments including Le Méridien Hotel & Golf Resort, Ibom Icon Hotel & Golf Resort, Four Points by Sheraton Ikot Ekpene (Marriott International), Grey Field Hotel, and Juli Rose Hotel & Suites. A Food Safety Certified professional and recipient of an Award of Excellence, he is recognized for creativity, precision, and quality. As Executive Pastry Chef & Director of Pastry Development at De KITCHEN MASTER Culinary & Hospitality Services Ltd, Chef Gregory leads pastry innovation, recipe development, quality assurance, and the growth of the company's pastry and bakery division.",
  },
  {
    name: "Zoe (Blessing Emmanuel)",
    role: "Procurement, Logistics & Customer Support Manager",
    image: "/images/chefs/Zoe.jpg",
    location: "Lagos, Nigeria",
    experience: "4 Years Experience",
    bio: "Zoe is a dedicated hospitality and operations professional with four years of experience spanning procurement, logistics, customer support, and hospitality operations. She has held key roles at De Phantom Continental Hotel as a Sous Chef, The Frootaz Place Inc. as Supervisor, Nutritionist, and Client Support Officer, and The Sage Lagos as a Procurement Officer. With ongoing CIPS (Chartered Institute of Procurement & Supply) training, HACCP certification, and a Certified Data Entry qualification, she combines technical knowledge with operational excellence. As Procurement, Logistics & Customer Support Manager at De KITCHEN MASTER Culinary & Hospitality Services Ltd, Zoe oversees procurement processes, supply chain coordination, logistics planning, and customer relations across the company's diverse projects.",
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
