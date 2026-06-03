export const metadata = {
  title: "Hire a Chef | De Kitchen Master",
  description: "Book a professional private chef for your home, dinner party, or special occasion with De Kitchen Master.",
};

export default function HireAChefPage() {
  return (
    <main className="pt-20 pb-24 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
          Hire a <span className="text-primary">Chef</span>
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
          This page is coming soon. Get in touch to book a private chef experience tailored to your occasion.
        </p>
      </div>
    </main>
  );
}
