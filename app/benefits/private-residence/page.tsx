import Image from "next/image";

export const metadata = {
  title: "Private Residence Chef Benefits | De KITCHEN MASTER",
  description:
    "What you get when you hire a private chef from De KITCHEN MASTER — professional service, uniformity, and a four-month satisfaction guarantee.",
};

export default function PrivateResidenceBenefitsPage() {
  return (
    <div className="pt-20 bg-white">
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto px-6 py-12">
          <div className="lg:col-span-7">
            <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
              PRIVATE RESIDENCE CHEF BENEFITS
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight tracking-tight mb-8">
              What You Get When You Hire a Private Chef From De KITCHEN MASTER
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                When you hire a private chef through De KITCHEN MASTER, you receive a structured and professional culinary service designed to ensure comfort, consistency, and peace of mind in your home.
              </p>
              <p>
                Every chef deployed to a private residence is carefully selected, screened, and matched to meet your household needs and standards.
              </p>
              <p>
                As part of our private chef deployment service, each chef is provided with a professional DKM chef jacket and apron to maintain a clean, disciplined, and professional appearance within your home.
              </p>
              <p>
                We also operate a four-month service support and adjustment period, which allows clients to request a replacement or change of chef if they are not fully satisfied without any additional consultation fee during this period.
              </p>
              <p>
                This ensures flexibility, comfort, and complete satisfaction while maintaining high service standards throughout the engagement.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="w-full aspect-[3/4] relative rounded-3xl overflow-hidden border-4 border-amber-600 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Professional private chef in kitchen"
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
