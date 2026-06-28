"use client";

import Link from "next/link";
import {
  Check,
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  AlertTriangle,
  Users,
  Star,
} from "lucide-react";
import { servicePackages, importantNote, cta } from "@/data/servicePackages";

function PackageHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
            DKM Service Packages
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6">
            Structured Solutions for Every
            <span className="text-primary"> Culinary Need</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-medium">
            Carefully curated service packages designed to deliver excellence, consistency, and
            value — whether you are hosting an event, renting a chef, or managing daily food
            operations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link
              href="#premium-catering-event-packages"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/25"
            >
              Explore Packages
              <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.5} />
            </Link>
            <a
              href={`https://wa.me/${cta.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IncludesList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
            <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3.5} />
          </span>
          <span className="text-gray-700 font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SuitableForGrid({
  items,
}: {
  items: { label: string; icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-primary/[0.02] transition-colors"
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Icon className="w-4 h-4" strokeWidth={2} />
            </span>
            <span className="text-sm font-semibold text-gray-800 leading-tight">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function ChefAllocationTable({
  data,
}: {
  data: { guests: string; chefs: string; level: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="text-left px-5 py-4 font-bold tracking-wide">Guest Count</th>
            <th className="text-left px-5 py-4 font-bold tracking-wide">Chef Allocation</th>
            <th className="text-left px-5 py-4 font-bold tracking-wide hidden sm:table-cell">
              Chef Level
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.guests}
              className={`border-t border-gray-100 transition-colors hover:bg-primary/[0.02] ${
                i === data.length - 1 ? "bg-primary/5 font-semibold" : ""
              }`}
            >
              <td className="px-5 py-4 text-gray-900 font-bold whitespace-nowrap">{row.guests}</td>
              <td className="px-5 py-4 text-gray-700">{row.chefs}</td>
              <td className="px-5 py-4 text-gray-600 hidden sm:table-cell">{row.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ImportantNoteBlock() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative flex items-start gap-5">
            <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" strokeWidth={2} />
            </span>
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{importantNote.title}</h3>
              <p className="text-base text-gray-700 leading-relaxed font-medium">
                {importantNote.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="bg-primary border border-primary-light rounded-3xl p-8 md:p-16 relative overflow-hidden group shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" />
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
                {cta.heading}
              </h2>
              <p className="text-orange-50 text-lg leading-relaxed mb-10 font-medium">
                {cta.subheading}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${cta.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-3" strokeWidth={2.5} />
                  WhatsApp Us
                </a>
                <a
                  href={`tel:${cta.phone}`}
                  className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-primary font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-3" strokeWidth={2.5} />
                  Call {cta.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border-2 border-white/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5 mr-3" strokeWidth={2.5} />
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicePackagesPage() {
  const [pkg1, pkg2, pkg3] = servicePackages;

  return (
    <div className="bg-white">
      <PackageHero />

      {/* Package 1: Premium Catering & Event Packages */}
      <section id={pkg1.slug} className="scroll-mt-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              <Star className="w-3.5 h-3.5" strokeWidth={2.5} />
              Package 01
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
              {pkg1.title}
            </h2>
            <p className="text-lg text-primary font-semibold max-w-2xl mx-auto">{pkg1.tagline}</p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed font-medium">
              {pkg1.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-lg font-black text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
                What&apos;s Included
              </h3>
              <IncludesList items={pkg1.includes} />
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Users className="w-4 h-4" strokeWidth={2.5} />
                </span>
                Perfect For
              </h3>
              <SuitableForGrid items={pkg1.suitableFor} />
            </div>
          </div>
        </div>
      </section>

      {/* Package 2: Chef Rental Packages */}
      <section id={pkg2.slug} className="scroll-mt-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              <Star className="w-3.5 h-3.5" strokeWidth={2.5} />
              Package 02
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
              {pkg2.title}
            </h2>
            <p className="text-lg text-primary font-semibold max-w-2xl mx-auto">{pkg2.tagline}</p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed font-medium">
              {pkg2.description}
            </p>
          </div>

          <div className="mb-14">
            <h3 className="text-lg font-black text-gray-900 mb-5 text-center">
              Chef Allocation System
            </h3>
            <ChefAllocationTable data={pkg2.chefAllocation!} />
            {pkg2.highlight && (
              <div className="mt-6 flex items-start gap-3 p-5 rounded-2xl bg-white border border-primary/10 shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">{pkg2.highlight}</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-lg font-black text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
                What&apos;s Included
              </h3>
              <IncludesList items={pkg2.includes} />
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Users className="w-4 h-4" strokeWidth={2.5} />
                </span>
                Perfect For
              </h3>
              <SuitableForGrid items={pkg2.suitableFor} />
            </div>
          </div>
        </div>
      </section>

      {/* Package 3: Food Service Packages */}
      <section id={pkg3.slug} className="scroll-mt-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              <Star className="w-3.5 h-3.5" strokeWidth={2.5} />
              Package 03
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
              {pkg3.title}
            </h2>
            <p className="text-lg text-primary font-semibold max-w-2xl mx-auto">{pkg3.tagline}</p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed font-medium">
              {pkg3.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-lg font-black text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
                What&apos;s Included
              </h3>
              <IncludesList items={pkg3.includes} />
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Users className="w-4 h-4" strokeWidth={2.5} />
                </span>
                Perfect For
              </h3>
              <SuitableForGrid items={pkg3.suitableFor} />
            </div>
          </div>
        </div>
      </section>

      <ImportantNoteBlock />
      <CTABanner />
    </div>
  );
}
