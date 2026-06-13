"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [mobileHireOpen, setMobileHireOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const hireRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Training Academy", href: "/training-academy" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isPortfolioActive = pathname === "/portfolio" || pathname === "/chefs";
  const isHireActive =
    pathname === "/hire-a-chef" ||
    pathname === "/benefits/private-residence" ||
    pathname === "/benefits/full-setup";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (portfolioRef.current && !portfolioRef.current.contains(event.target as Node)) {
        setPortfolioOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (hireRef.current && !hireRef.current.contains(event.target as Node)) {
        setHireOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

              {/* Hire a Chef Dropdown */}
              <div ref={hireRef} className="relative">
                <button
                  onClick={() => setHireOpen(!hireOpen)}
                  className={`inline-flex items-center gap-1 px-2 py-2 rounded-md text-sm font-semibold transition-colors ${
                    isHireActive
                      ? "text-primary bg-primary/5"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  Hire a Chef
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      hireOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {hireOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-black/5 p-2 space-y-1"
                    onMouseLeave={() => setHireOpen(false)}
                  >
                    <Link
                      href="/hire-a-chef"
                      onClick={() => setHireOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        pathname === "/hire-a-chef"
                          ? "text-primary bg-primary/5"
                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                      }`}
                    >
                      Hire a Chef
                    </Link>
                    <Link
                      href="/benefits/private-residence"
                      onClick={() => setHireOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        pathname === "/benefits/private-residence"
                          ? "text-primary bg-primary/5"
                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                      }`}
                    >
                      Private Chef Benefits
                    </Link>
                    <Link
                      href="/benefits/full-setup"
                      onClick={() => setHireOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        pathname === "/benefits/full-setup"
                          ? "text-primary bg-primary/5"
                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                      }`}
                    >
                      Full Setup Benefits
                    </Link>
                  </div>
                )}
              </div>

              {/* Portfolio Dropdown */}
              <div ref={portfolioRef} className="relative">
                <button
                  onClick={() => setPortfolioOpen(!portfolioOpen)}
                  className={`inline-flex items-center gap-1 px-2 py-2 rounded-md text-sm font-semibold transition-colors ${
                    isPortfolioActive
                      ? "text-primary bg-primary/5"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  Portfolio
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      portfolioOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {portfolioOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-black/5 p-2 space-y-1"
                    onMouseLeave={() => setPortfolioOpen(false)}
                  >
                    <Link
                      href="/portfolio"
                      onClick={() => setPortfolioOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        pathname === "/portfolio"
                          ? "text-primary bg-primary/5"
                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                      }`}
                    >
                      Featured Projects
                    </Link>
                    <Link
                      href="/chefs"
                      onClick={() => setPortfolioOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        pathname === "/chefs"
                          ? "text-primary bg-primary/5"
                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                      }`}
                    >
                      Our Chefs
                    </Link>
                  </div>
                )}
              </div>
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
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-start h-screen w-full overflow-y-auto bg-white pt-20 pb-10">
          <div className="flex flex-col items-center gap-6 w-full min-h-max text-base font-medium text-slate-700 text-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="block w-full text-center">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block w-full text-center">
              About Us
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block w-full text-center">
              Services
            </Link>
            <Link href="/training-academy" onClick={() => setIsOpen(false)} className="block w-full text-center">
              Training Academy
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block w-full text-center">
              Blog
            </Link>
            <Link href="/careers" onClick={() => setIsOpen(false)} className="block w-full text-center">
              Careers
            </Link>
            <Link href="/faq" onClick={() => setIsOpen(false)} className="block w-full text-center">
              FAQ
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center">
              Contact Us
            </Link>

            <div className="flex flex-col items-center justify-center w-full">
              <button
                onClick={() => setMobileHireOpen(!mobileHireOpen)}
                className="flex items-center justify-center gap-2"
              >
                Hire a Chef
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileHireOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileHireOpen && (
                <div className="mt-3 flex flex-col items-center justify-center w-full gap-3 text-center">
                  <Link href="/hire-a-chef" onClick={() => setIsOpen(false)}>
                    Hire a Chef
                  </Link>
                  <Link href="/benefits/private-residence" onClick={() => setIsOpen(false)}>
                    Private Chef Benefits
                  </Link>
                  <Link href="/benefits/full-setup" onClick={() => setIsOpen(false)}>
                    Full Setup Benefits
                  </Link>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center justify-center w-full">
              <button
                onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                className="flex items-center justify-center gap-2"
              >
                Portfolio
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobilePortfolioOpen ? "rotate-180" : ""}`} />
              </button>
              {mobilePortfolioOpen && (
                <div className="mt-3 flex flex-col items-center justify-center w-full gap-3 text-center">
                  <Link href="/portfolio" onClick={() => setIsOpen(false)}>
                    Featured Projects
                  </Link>
                  <Link href="/chefs" onClick={() => setIsOpen(false)}>
                    Our Chefs
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
