import { Check } from "lucide-react";

export const metadata = {
  title: "Training Academy | De KITCHEN MASTER",
  description:
    "Join the DKM Professional Chef Training Program by Chef Bishop. Practical mentorship, industry standards, and career readiness for aspiring and professional chefs.",
};

const curriculumItems = [
  "Professional Cooking Techniques",
  "Recipe Standardization",
  "Local & Intercontinental Cuisine",
  "Food Costing Fundamentals",
  "Kitchen Operations & Organization",
  "Customer Service Excellence",
  "Food Safety & Hygiene",
  "Kitchen Discipline & Professional Conduct",
  "Food Presentation & Plating",
  "Hospitality Industry Best Practices",
  "Menu Development",
  "Career Development & Industry Expectations",
];

const targetAudience = [
  "Aspiring Chefs",
  "Food Entrepreneurs",
  "Existing Chefs Seeking Improvement",
  "Hospitality Professionals",
  "Kitchen Assistants",
  "Individuals Seeking a Culinary Career",
  "Cooks",
  "Anyone Passionate About Professional Cooking",
  "Private Chefs",
];

const benefits = [
  "Practical Hands-On Training",
  "Direct Mentorship from Chef Bishop",
  "Professional Industry Guidance",
  "Customized Chef Uniform",
  "Ingredients Provided During Training",
  "Networking Opportunities",
  "Industry Exposure",
  "Certificate of Participation",
  "Career Development Support",
  "Access to Future Opportunities Within the DKM Network",
];

const differentiators = [
  {
    title: "Industry-Focused Mentorship",
    body: "Students are mentored directly by Chef Bishop and experienced hospitality professionals who understand the realities of the industry.",
  },
  {
    title: "Practical Learning",
    body: "Training focuses on hands-on kitchen experience rather than theory alone.",
  },
  {
    title: "Real Industry Standards",
    body: "Students are trained according to the standards expected by restaurants, hotels, private residences, catering companies, and hospitality organizations.",
  },
  {
    title: "Career Readiness",
    body: "Our objective is not simply to teach cooking but to prepare chefs for employment, entrepreneurship, leadership, and long-term career success.",
  },
  {
    title: "Professional Development",
    body: "We focus on attitude, discipline, teamwork, communication, professionalism, and workplace readiness in addition to culinary skills.",
  },
];

export default function TrainingAcademyPage() {
  return (
    <div className="pt-20 bg-white">
      {/* ───── SECTION 1: HERO & INTRO ───── */}
      <section className="relative overflow-hidden bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto px-6 py-12">
          {/* Left Column: Text (5 cols) */}
          <div className="lg:col-span-5">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
              DKM PROFESSIONAL CHEF TRAINING
            </span>
            <h1 className="text-left font-bold tracking-tight text-slate-900 leading-tight md:text-5xl lg:text-4xl xl:text-5xl mb-6">
              A Professional Chef Mentorship Program by Chef Bishop
            </h1>
            <div className="text-slate-600 text-lg leading-relaxed">
              <p className="mb-6">
                At De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, we believe that great chefs are not born, they are developed through proper training, mentorship, discipline, practical experience, and continuous growth.
              </p>
              <p className="mb-6">
                The DKM Professional Chef Training Program is a specialized chef development and mentorship initiative created by Chef Bishop to train, equip, and prepare aspiring and existing chefs for successful careers within the culinary and hospitality industry.
              </p>
              <p>
                Unlike traditional culinary schools that focus heavily on classroom learning, our program is designed around practical industry experience, real kitchen operations, professional standards, and the realities of working in today's hospitality environment.
              </p>
            </div>
          </div>

          {/* Right Column: Media Frame (7 cols) */}
          <div className="lg:col-span-7 w-full h-full lg:-mt-12 lg:-mr-6">
            <div className="w-full h-[450px] md:h-[500px] relative bg-amber-50 p-4 border border-amber-200/60 rounded-3xl shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1200&auto=format&fit=crop"
                  alt="Chef Bishop in a professional kitchen"
                  className="absolute inset-0 w-full h-full object-cover sepia-[.3] brightness-90 contrast-125"
                />
                <div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay pointer-events-none" />
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-slate-500 font-medium italic">
              The Journey of Excellence — Chef Bishop
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="p-8 md:p-10 rounded-3xl bg-primary/5 border border-primary/20 text-center max-w-5xl mx-auto">
            <p className="text-lg md:text-2xl font-bold text-gray-900 leading-relaxed">
              Our goal is simple: To develop competent, confident, professional, and industry ready chefs capable of meeting the standards expected by restaurants, hotels, private clients, corporate organizations, and hospitality businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ───── SECTION 2: PURPOSE & MISSION ───── */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              WHY THIS PROGRAM WAS CREATED
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.03]">
              <h3 className="text-2xl md:text-3xl font-black leading-tight text-white mb-4">
                The Challenge
              </h3>
              <p className="text-gray-300 leading-relaxed font-medium text-lg md:text-xl">
                Throughout his career, Chef Bishop identified a common challenge within the hospitality industry: Many chefs possess basic cooking skills but lack the practical knowledge, professionalism, discipline, confidence, and operational understanding required to succeed in professional kitchens.
              </p>
            </div>

            <div className="relative p-8 md:p-10 rounded-3xl border-2 border-primary bg-primary/5">
              <h3 className="text-2xl md:text-3xl font-black leading-tight text-white mb-4">
                The Mission
              </h3>
              <p className="text-gray-300 leading-relaxed font-medium text-lg md:text-xl">
                The DKM Professional Chef Training Program was created to bridge this gap. Our mission is to help chefs develop the skills, mindset, and professionalism needed to excel in real-world hospitality environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 3: COMPETITIVE EDGE ───── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Our Difference
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              WHAT MAKES OUR TRAINING DIFFERENT?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-500"
              >
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 4: CURRICULUM & AUDIENCE MATCH ───── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Panel — Curriculum */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-8">
                WHAT PARTICIPANTS WILL LEARN
              </h2>
              <ul className="space-y-3">
                {curriculumItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className="text-gray-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Panel — Audience */}
            <div>
              <div className="p-8 md:p-10 rounded-3xl border-2 border-primary/20 bg-white shadow-sm">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-8">
                  WHO IS THIS PROGRAM FOR?
                </h2>
                <ul className="space-y-4">
                  {targetAudience.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-gray-700 font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 5: STUDENT BENEFITS ───── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Perks &amp; Advantages
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              STUDENT BENEFITS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-500"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span className="text-sm font-bold text-gray-900 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 6: NETWORK PLACEMENT ───── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Beyond Training
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-8">
              FROM TRAINING TO OPPORTUNITY
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                One of the unique advantages of the DKM Professional Chef Training Program is that participants become part of a growing network of culinary professionals connected to De KITCHEN MASTER.
              </p>
              <p>
                Outstanding participants may be considered for future opportunities, chef placements, hospitality projects, private chef assignments, and other industry engagements as opportunities become available.
              </p>
              <p>
                Our commitment extends beyond training, we are dedicated to helping chefs build successful and sustainable careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 7: FINAL CTA BANNER ───── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
            TRAIN WITH CHEF BISHOP
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium max-w-4xl mx-auto mb-10">
            Whether you are beginning your culinary journey or looking to elevate your existing skills, the DKM Professional Chef Training Program provides the mentorship, practical experience, and professional guidance needed to help you reach the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              JOIN THE NEXT TRAINING COHORT
            </a>
            <a
              href="#"
              className="inline-block border-2 border-gray-300 hover:border-primary text-gray-800 hover:text-primary font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:-translate-y-1"
            >
              REQUEST PROGRAM INFORMATION
            </a>
            <a
              href="#"
              className="inline-block text-primary hover:text-primary-dark font-bold px-8 py-4 transition-all duration-300 hover:-translate-y-1 underline underline-offset-4 decoration-primary/30"
            >
              SPEAK WITH OUR TEAM
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
