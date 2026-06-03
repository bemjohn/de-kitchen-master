import Image from "next/image";
import { CheckCircle2, Award, History, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "About Us | De Kitchen Master",
  description: "Learn more about De Kitchen Master and Chef Bishop.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            A premium Nigerian culinary and hospitality brand dedicated to delivering exceptional dining experiences, flawless event catering, and expert kitchen setups.
          </p>
        </div>

        {/* Company Overview & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1577106263724-2c8e03bfeffe?q=80&w=2670&auto=format&fit=crop"
              alt="Professional Chef Cooking"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-primary tracking-widest uppercase text-sm mb-2 font-bold">Our Origin</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">4+ Years of Brand Excellence</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Since our official inception over 4 years ago, De Kitchen Master has rapidly grown to become a benchmark for premium culinary services in Nigeria. We don't just cook food; we design memories. Our meticulous attention to detail ensures that every dish leaving our kitchen is a masterpiece of flavor and presentation.
              </p>
            </div>
            
            <ul className="space-y-4">
              {[
                "Impeccable hygiene and quality standards",
                "Authentic Nigerian flavors meet international techniques",
                "Highly trained professional staff",
                "Tailored menus for every specific client requirement"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="text-primary h-6 w-6 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CEO Profile */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 text-center">
              <div className="w-48 h-48 mx-auto bg-white border-4 border-primary/20 rounded-full flex items-center justify-center p-2 mb-6 relative overflow-hidden group">
                {/* Fallback avatar if portrait image isn't available */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2584&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Chef Bishop</h3>
              <p className="text-primary text-sm tracking-widest uppercase mt-1 font-bold">Founder & CEO</p>
            </div>
            <div className="md:col-span-2 space-y-6">
              <Award className="w-12 h-12 text-primary/30 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">A Decade of Culinary Mastery</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">
                Chef Bishop brings over 10 years of intensive, hands-on culinary experience to De Kitchen Master. From bustling high-end restaurant lines to exclusive private estates, his journey has defined our brand's robust DNA.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">
                His philosophy is simple: source the finest ingredients, apply expert techniques, and always cook with passion. It's this dedication that has secured DKM's reputation among our discerning clientele.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-100 shadow-sm p-10 rounded-2xl group hover:border-primary hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
              <HeartHandshake className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              To deliver exceptional culinary experiences through innovative menu creation, expert staffing, and world-class hospitality services, transforming kitchens and delighting palates worldwide.
            </p>
          </div>
          <div className="bg-white border border-gray-100 shadow-sm p-10 rounded-2xl group hover:border-primary hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
              <History className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              To be the leading force in redefining culinary excellence, setting the standard for hospitality and kitchen mastery across Nigeria and beyond.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
