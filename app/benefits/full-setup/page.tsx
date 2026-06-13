import Image from "next/image";

export const metadata = {
  title: "Full Kitchen Setup Benefits | De KITCHEN MASTER",
  description:
    "What you get when you engage De KITCHEN MASTER for full kitchen, restaurant, or lounge setup projects — uniforms, post-launch supervision, and operational stability.",
};

export default function FullSetupBenefitsPage() {
  return (
    <div className="pt-20 bg-white">
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto px-6 py-12">
          <div className="lg:col-span-7">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
              FULL KITCHEN / RESTAURANT SETUP BENEFITS
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight tracking-tight mb-8">
              What You Get When You Engage De KITCHEN MASTER for Full Setup Projects
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                When De KITCHEN MASTER handles a full kitchen, restaurant, or lounge setup, we deliver more than just consultancy, we build complete operational hospitality systems.
              </p>
              <p>
                As part of our full setup service, all kitchen staff are provided with professional chef uniforms, including jackets, aprons, and caps, ensuring a clean, unified, and professional team presentation from day one of operations.
              </p>
              <p>
                In addition, every full setup project comes with a six-month post-launch supervision and assessment period, where we continue to monitor, guide, and support kitchen operations to ensure proper execution, consistency, and stability.
              </p>
              <p>
                During this supervision period, we assess performance, correct operational gaps, and ensure the business is running at a professional standard aligned with industry best practices.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="w-full aspect-[3/4] relative rounded-3xl overflow-hidden border-4 border-amber-600 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Professional commercial kitchen setup"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
