export const metadata = {
  title: "Training Academy | De Kitchen Master",
  description: "Learn from the best at the De Kitchen Master Training Academy. Professional culinary and hospitality training programs.",
};

export default function TrainingAcademyPage() {
  return (
    <main className="pt-20 pb-24 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
          Training <span className="text-primary">Academy</span>
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
          This page is coming soon. Explore our professional culinary and hospitality training programs designed to launch your career.
        </p>
      </div>
    </main>
  );
}
