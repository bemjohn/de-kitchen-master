"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileHireOpen, setMobileHireOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const hireRef = useRef<HTMLDivElement>(null);
  const careersRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "DKM Chef Training", href: "/training-academy" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const servicePackages = ['Premium Catering & Event Packages', 'Chef Rental Packages', 'Food Service Packages', 'View All Services'];

  const isServicesActive =
    pathname === "/services" ||
    pathname === "/service-packages";

  const isPortfolioActive = pathname === "/portfolio" || pathname === "/chefs" || pathname === "/partner";
  const isCareersActive = pathname === "/careers" || pathname === "/events-community" || pathname === "/uniform-collection";
  const isHireActive =
    pathname === "/hire-a-chef" ||
    pathname === "/benefits/private-residence" ||
    pathname === "/benefits/full-setup";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (careersRef.current && !careersRef.current.contains(event.target as Node)) {
        setCareersOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="w-full max-w-none px-6 md:px-12">
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
              {links.slice(0, 1).map((link) => (
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

              {/* About Us Dropdown */}
              <div ref={aboutRef} className="relative group">
                <div className="flex items-center">
                  <Link
                    href="/about"
                    className={`px-2 py-2 rounded-md text-sm font-semibold transition-colors ${
                      pathname === "/about"
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    About Us
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setAboutOpen(!aboutOpen);
                    }}
                    className={`p-2 rounded-md text-sm font-semibold transition-colors ${
                      pathname === "/about"
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                    aria-label="Toggle About Us sub-menu"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`absolute left-0 mt-1 w-56 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-black/5 p-2 space-y-1 transition-all duration-200 ${
                    aboutOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  }`}
                >
                  <Link
                    href="/about#team"
                    onClick={() => setAboutOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === "/about"
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setAboutOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === "/about"
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    Our Story
                  </Link>
                </div>
              </div>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative group">
                <div className="flex items-center">
                  <Link
                    href="/services"
                    className={`px-2 py-2 rounded-md text-sm font-semibold transition-colors ${
                      isServicesActive
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    Services
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setServicesOpen(!servicesOpen);
                    }}
                    className={`p-2 rounded-md text-sm font-semibold transition-colors ${
                      isServicesActive
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                    aria-label="Toggle Services sub-menu"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`absolute right-0 mt-1 w-56 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-black/5 p-2 space-y-1 transition-all duration-200 ${
                    servicesOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  }`}
                >
                  {servicePackages.filter(p => p !== 'View All Services').map((pkg) => {
                    const slug = pkg.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-');
                    return (
                      <Link
                        key={pkg}
                        href={`/service-packages#${slug}`}
                        onClick={() => setServicesOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                          pathname.includes(slug)
                            ? "text-primary bg-primary/5"
                            : "text-gray-600 hover:text-primary hover:bg-gray-50"
                        }`}
                      >
                        {pkg}
                      </Link>
                    );
                  })}
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === "/services"
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              {/* Hire a Chef Dropdown */}
              <div ref={hireRef} className="relative group">
                <div className="flex items-center">
                  <Link
                    href="/hire-a-chef"
                    className={`px-2 py-2 rounded-md text-sm font-semibold transition-colors ${
                      isHireActive
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    Hire a Chef
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setHireOpen(!hireOpen);
                    }}
                    className={`p-2 rounded-md text-sm font-semibold transition-colors ${
                      isHireActive
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                    aria-label="Toggle Hire a Chef sub-menu"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        hireOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`absolute right-0 mt-1 w-56 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-black/5 p-2 space-y-1 transition-all duration-200 ${
                    hireOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  }`}
                >
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
              </div>

              {/* Portfolio Dropdown */}
              <div ref={portfolioRef} className="relative group">
                <div className="flex items-center">
                  <Link
                    href="/portfolio"
                    className={`px-2 py-2 rounded-md text-sm font-semibold transition-colors ${
                      isPortfolioActive
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    Portfolio
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPortfolioOpen(!portfolioOpen);
                    }}
                    className={`p-2 rounded-md text-sm font-semibold transition-colors ${
                      isPortfolioActive
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                    aria-label="Toggle Portfolio sub-menu"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        portfolioOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`absolute right-0 mt-1 w-56 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-black/5 p-2 space-y-1 transition-all duration-200 ${
                    portfolioOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  }`}
                >
                  <Link
                    href="/partner"
                    onClick={() => setPortfolioOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === "/partner"
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    Partner With Us
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
              </div>

              {/* Careers Dropdown */}
              <div ref={careersRef} className="relative group">
                <div className="flex items-center">
                  <Link
                    href="/careers"
                    className={`px-2 py-2 rounded-md text-sm font-semibold transition-colors ${
                      isCareersActive
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    Careers
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCareersOpen(!careersOpen);
                    }}
                    className={`p-2 rounded-md text-sm font-semibold transition-colors ${
                      isCareersActive
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                    aria-label="Toggle Careers sub-menu"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        careersOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`absolute right-0 mt-1 w-56 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-black/5 p-2 space-y-1 transition-all duration-200 ${
                    careersOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  }`}
                >
                  <Link
                    href="/events-community"
                    onClick={() => setCareersOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === "/events-community"
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    DKM Events & Community
                  </Link>
                  <Link
                    href="/uniform-collection"
                    onClick={() => setCareersOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === "/uniform-collection"
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    DKM Chef Uniform Collection
                  </Link>
                </div>
              </div>
              {links.slice(2).map((link) => (
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
        <div className="fixed inset-0 z-50 flex flex-col items-start justify-start w-full h-screen overflow-y-auto bg-white pt-20 px-8 pb-10">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 z-[60] p-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="block h-6 w-6 text-gray-500" />
          </button>
          <div className="flex flex-col items-start gap-6 w-full min-h-max text-base font-medium text-slate-700 text-left">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex flex-row items-center justify-start w-full gap-4 text-left">
              Home
            </Link>
            <div className="flex flex-col items-start w-full">
              <div className="flex items-center justify-start gap-2">
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  aria-label="Toggle About Us sub-menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {mobileAboutOpen && (
                <div className="mt-3 flex flex-col items-start w-full gap-3 text-left pl-4">
                  <Link
                    href="/about#team"
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-gray-600 hover:text-primary"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-gray-600 hover:text-primary"
                  >
                    Our Story
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-col items-start w-full">
              <div className="flex items-center justify-start gap-2">
                <Link href="/services" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-label="Toggle Services sub-menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="mt-3 flex flex-col items-start w-full gap-3 text-left pl-4">
                  {servicePackages.filter(p => p !== 'View All Services').map((pkg) => {
                    const slug = pkg.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-');
                    return (
                      <Link
                        key={pkg}
                        href={`/service-packages#${slug}`}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-medium text-gray-600 hover:text-primary"
                      >
                        {pkg}
                      </Link>
                    );
                  })}
                  <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-bold text-primary"
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>

            <div className="flex flex-col items-start w-full">
              <div className="flex items-center justify-start gap-2">
                <Link href="/hire-a-chef" onClick={() => setIsOpen(false)}>
                  Hire a Chef
                </Link>
                <button
                  onClick={() => setMobileHireOpen(!mobileHireOpen)}
                  aria-label="Toggle Hire a Chef sub-menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileHireOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {mobileHireOpen && (
                <div className="mt-3 flex flex-col items-start w-full gap-3 text-left pl-4">
                  <Link href="/benefits/private-residence" onClick={() => setIsOpen(false)}>
                    Private Chef Benefits
                  </Link>
                  <Link href="/benefits/full-setup" onClick={() => setIsOpen(false)}>
                    Full Setup Benefits
                  </Link>
                </div>
              )}
            </div>

            <div className="flex flex-col items-start w-full">
              <div className="flex items-center justify-start gap-2">
                <Link href="/portfolio" onClick={() => setIsOpen(false)}>
                  Portfolio
                </Link>
                <button
                  onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                  aria-label="Toggle Portfolio sub-menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobilePortfolioOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {mobilePortfolioOpen && (
                <div className="mt-3 flex flex-col items-start w-full gap-3 text-left pl-4">
                  <Link href="/partner" onClick={() => setIsOpen(false)}>
                    Partner With Us
                  </Link>
                  <Link href="/chefs" onClick={() => setIsOpen(false)}>
                    Our Chefs
                  </Link>
                </div>
              )}
            </div>

            <div className="flex flex-col items-start w-full">
              <div className="flex items-center justify-start gap-2">
                <Link href="/careers" onClick={() => setIsOpen(false)}>
                  Careers
                </Link>
                <button
                  onClick={() => setMobileCareersOpen(!mobileCareersOpen)}
                  aria-label="Toggle Careers sub-menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCareersOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {mobileCareersOpen && (
                <div className="mt-3 flex flex-col items-start w-full gap-3 text-left pl-4">
                  <Link href="/events-community" onClick={() => setIsOpen(false)}>
                    DKM Events & Community
                  </Link>
                  <Link href="/uniform-collection" onClick={() => setIsOpen(false)}>
                    DKM Chef Uniform Collection
                  </Link>
                </div>
              )}
            </div>
            <Link href="/faq" onClick={() => setIsOpen(false)} className="flex flex-row items-center justify-start w-full gap-4 text-left">
              FAQ
            </Link>
            <Link href="/training-academy" onClick={() => setIsOpen(false)} className="flex flex-row items-center justify-start w-full gap-4 text-left">
              DKM Chef Training
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="flex flex-row items-center justify-start w-full gap-4 text-left">
              Blog
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="flex flex-row items-center justify-start w-full gap-4 text-left">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
