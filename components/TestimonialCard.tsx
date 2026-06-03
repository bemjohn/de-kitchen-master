import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-2xl relative">
      <Quote className="absolute top-6 right-6 text-primary/10 w-12 h-12" />
      <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed font-medium">
        "{content}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-orange-50 border border-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-gray-900 font-bold">{name}</h4>
          <p className="text-primary text-sm font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}
