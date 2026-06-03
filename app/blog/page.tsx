export const metadata = {
  title: "Blog | De Kitchen Master",
  description: "Read the latest culinary insights, recipes, and stories from De Kitchen Master.",
};

export default function BlogPage() {
  return (
    <main className="pt-20 pb-24 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
          Our <span className="text-primary">Blog</span>
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
          This page is coming soon. Culinary insights, signature recipes, and stories from the kitchen.
        </p>
      </div>
    </main>
  );
}
