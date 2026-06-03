import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* GLobally Repeated Sections (Clients & Community CTA) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Clients we have worked with</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-16"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto opacity-70">
            <div className="text-2xl font-black text-gray-400 uppercase tracking-widest hover:text-primary transition-colors cursor-default">Rose</div>
            <div className="text-2xl font-black text-gray-400 uppercase tracking-widest hover:text-primary transition-colors cursor-default">Tunde Adeyemi</div>
            <div className="text-2xl font-black text-gray-400 uppercase tracking-widest hover:text-primary transition-colors cursor-default">Daniel Mike</div>
            <div className="text-2xl font-black text-gray-400 uppercase tracking-widest hover:text-primary transition-colors cursor-default">Lagos Elite</div>
          </div>
        </div>
      </section>

      {/* Global Call to Action / Follow us */}
      <section className="bg-primary pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Join our community to inspire your desires</h2>
          <p className="text-orange-100 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Follow De Kitchen Master on Instagram and reach out to make your next event a resounding success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="px-10 py-5 w-full sm:w-auto bg-white text-primary font-bold rounded-xl hover:-translate-y-1 transition-transform shadow-lg text-lg">
              Follow DKM on Instagram
            </a>
            <Link href="/contact" className="px-10 py-5 w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-colors text-lg">
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-b border-gray-200 pb-12 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="De Kitchen Master Logo" width={50} height={50} className="w-12 h-12 rounded-full shadow-sm bg-white" />
                <h3 className="text-xl font-black text-primary tracking-tight leading-none pt-1">
                  DE KITCHEN<br/><span className="text-gray-900 text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1 inline-block">MASTER</span>
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm font-medium">
                Premium Nigerian culinary and hospitality brand dedicated to delivering exceptional dining experiences.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  <span className="sr-only">Instagram</span>
                  <span className="text-sm font-black">IG</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <span className="text-sm font-black">FB</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <span className="text-sm font-black">X</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-gray-900 font-black mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium flex items-center">Home</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium flex items-center">About Us</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium flex items-center">Services</Link></li>
                <li><Link href="/hire-a-chef" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium flex items-center">Hire a Chef</Link></li>
                <li><Link href="/portfolio" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium flex items-center">Portfolio</Link></li>
                <li><Link href="/training-academy" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium flex items-center">Training Academy</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium flex items-center">Blog</Link></li>
                <li><Link href="/careers" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium flex items-center">Careers</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium flex items-center">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-black mb-6 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/services#private-chef" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">Private Chef Services</Link></li>
                <li><Link href="/services#catering" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">Event Catering</Link></li>
                <li><Link href="/services#kitchen-setup" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">Kitchen Setup</Link></li>
                <li><Link href="/services#consulting" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">Staff Recruitment</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-black mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm font-medium">Lagos, Nigeria</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-600 text-sm font-medium">+234 (706) 603-5210</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-600 text-sm font-medium">hello@dekitchenmaster.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center md:text-left font-medium">
              &copy; {new Date().getFullYear()} De Kitchen Master. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 space-x-6">
              <Link href="/" className="text-gray-500 hover:text-primary text-sm font-bold">Privacy Policy</Link>
              <Link href="/" className="text-gray-500 hover:text-primary text-sm font-bold">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
