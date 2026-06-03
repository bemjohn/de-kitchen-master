"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Hire a Chef", href: "/hire-a-chef" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Training Academy", href: "/training-academy" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="De Kitchen Master Logo" width={60} height={60} className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-sm" />
              <div className="hidden sm:block">
                <span className="text-xl font-black text-primary tracking-tight leading-none block pt-1">DE KITCHEN</span>
                <span className="text-gray-900 text-[10px] font-bold tracking-[0.2em] uppercase leading-none block mt-1">MASTER</span>
              </div>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center space-x-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2 py-2 rounded-md text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium ${
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
