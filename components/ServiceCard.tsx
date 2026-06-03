import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
}

export default function ServiceCard({ title, description, icon, href = "/services" }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-2xl transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-2 group flex flex-col h-full relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
      <div className="w-14 h-14 bg-orange-50 border border-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{description}</p>
      <Link href={href} className="flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors mt-auto w-fit">
        Explore details <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
      </Link>
    </div>
  );
}
