import {
  ChefHat,
  Utensils,
  ShoppingBag,
  Users,
  Building2,
  Briefcase,
  Home,
  PartyPopper,
  GraduationCap,
  Heart,
  Star,
  Calendar,
  Globe,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface ChefAllocation {
  guests: string;
  chefs: string;
  level: string;
}

export interface ServicePackage {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: string;
  includes: string[];
  suitableFor: { label: string; icon: LucideIcon }[];
  chefAllocation?: ChefAllocation[];
  highlight?: string;
}

export const servicePackages: ServicePackage[] = [
  {
    id: "premium-catering",
    slug: "premium-catering-event-packages",
    title: "Premium Catering & Event Packages",
    tagline: "Elevate Every Occasion with World-Class Culinary Excellence",
    description:
      "From intimate private dinners to large-scale corporate galas, our Premium Catering & Event Packages deliver an unforgettable culinary experience. Every detail is meticulously curated — from menu design and ingredient sourcing to professional service staff and elegant presentation. We transform your vision into a seamless, breathtaking event.",
    icon: Utensils,
    color: "primary",
    includes: [
      "Bespoke menu design & consultation",
      "Professional chef & service staff deployment",
      "Premium ingredient sourcing & procurement",
      "Full event setup & styling coordination",
      "Custom cake & dessert station",
      "Beverage & cocktail service management",
      "Clean-up & post-event breakdown",
      "Event insurance & safety compliance",
    ],
    suitableFor: [
      { label: "Corporate Galas & Award Ceremonies", icon: Briefcase },
      { label: "Private Dinner Parties & Anniversaries", icon: Home },
      { label: "Wedding Receptions & Engagements", icon: Heart },
      { label: "Product Launches & Brand Activations", icon: Sparkles },
      { label: "Diplomatic & Consulate Events", icon: Globe },
      { label: "Graduation & Achievement Celebrations", icon: GraduationCap },
      { label: "Luxury Retreats & VIP Gatherings", icon: Star },
      { label: "Festive & Holiday Celebrations", icon: PartyPopper },
    ],
  },
  {
    id: "chef-rental",
    slug: "chef-rental-packages",
    title: "Chef Rental Packages",
    tagline: "Flexible Professional Chefs On Demand — For Any Occasion",
    description:
      "Our Chef Rental Packages provide businesses and private clients with instant access to skilled culinary professionals on a temporary, contract, seasonal, or project basis. Whether you need coverage during staff shortages, extra hands for a busy period, or a specialty chef for a unique event, we match the right chef to your specific needs.",
    icon: ChefHat,
    color: "primary-dark",
    includes: [
      "Professionally vetted & certified chefs",
      "Flexible rental durations (daily, weekly, monthly)",
      "Dedicated point-of-contact coordination",
      "All necessary kitchen tools & equipment",
      "Menu planning & execution",
      "HACCP-compliant food safety standards",
      "Replacement guarantee within 24 hours",
      "Comprehensive liability insurance coverage",
    ],
    suitableFor: [
      { label: "Restaurants & Hotels", icon: Building2 },
      { label: "Private Residences & Villas", icon: Home },
      { label: "Event Planners & Organizers", icon: Calendar },
      { label: "Corporate Cafeterias & Canteens", icon: Briefcase },
      { label: "Film & Media Production Sets", icon: Star },
      { label: "Embassies & Diplomatic Missions", icon: Globe },
      { label: "Cruise Ships & Resort Properties", icon: Users },
      { label: "Pop-up Restaurants & Food Concepts", icon: Sparkles },
    ],
    chefAllocation: [
      { guests: "1 – 7", chefs: "1 Professional Chef", level: "Sous Chef / Chef de Partie" },
      { guests: "8 – 20", chefs: "1 Senior Chef + 1 Commis", level: "Senior Sous Chef" },
      { guests: "21 – 50", chefs: "1 Executive Chef + 2 Commis", level: "Executive Chef" },
      { guests: "51 – 100", chefs: "1 Executive Chef + 3 Staff", level: "Executive Chef + Team" },
      { guests: "101 – 200", chefs: "1 Executive Chef + 5 Staff", level: "Full Brigade" },
      { guests: "200+", chefs: "Custom Brigade Allocation", level: "Tailored Team" },
    ],
    highlight:
      "All our chefs are professionally trained, fully insured, and experienced in diverse cuisines including Nigerian, Continental, Asian, and Fusion.",
  },
  {
    id: "food-service",
    slug: "food-service-packages",
    title: "Food Service Packages",
    tagline: "Sustainable, Scalable Meal Solutions for Organizations & Institutions",
    description:
      "Our Food Service Packages are designed for organizations that require consistent, high-quality meal solutions for their teams, clients, or communities. From corporate canteen management to institutional feeding programs, we handle end-to-end food production with a focus on nutrition, hygiene, taste, and cost efficiency.",
    icon: ShoppingBag,
    color: "primary-light",
    includes: [
      "Comprehensive menu engineering & rotation planning",
      "Bulk food production & portion-controlled packaging",
      "HACCP-certified kitchen & delivery protocols",
      "Nutritionist-approved meal plans",
      "Flexible delivery schedules (daily, weekly, monthly)",
      "Dedicated account management & reporting",
      "Eco-friendly packaging options",
      "Emergency backup & contingency coverage",
    ],
    suitableFor: [
      { label: "Corporate Offices & Business Parks", icon: Briefcase },
      { label: "Schools, Colleges & Universities", icon: GraduationCap },
      { label: "Hospitals & Healthcare Facilities", icon: Heart },
      { label: "Construction Sites & Remote Camps", icon: Building2 },
      { label: "Government Parastatals & Agencies", icon: Shield },
      { label: "NGOs & Community Feeding Programs", icon: Users },
      { label: "Event Venues & Conference Centers", icon: Calendar },
      { label: "Airline & Transport Catering Services", icon: Globe },
    ],
  },
];

export const importantNote = {
  title: "Important Note",
  body: "All packages are fully customizable to meet your specific requirements. Pricing is determined based on guest count, menu complexity, duration, location, and level of service required. We recommend scheduling a consultation with our team to receive a tailored quote that accurately reflects your unique needs. For urgent inquiries, please call or WhatsApp us directly.",
};

export const cta = {
  heading: "Ready to Book a Package?",
  subheading: "Let's create something extraordinary together. Reach out to our team today.",
  phone: "+2347066035210",
  whatsapp: "+2347066035210",
  email: "hello@dekitchenmaster.com",
};
