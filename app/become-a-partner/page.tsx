export const metadata = {
  title: "Become a Partner | De KITCHEN MASTER",
  description:
    "Apply to partner with De KITCHEN MASTER Culinary & Hospitality Services Ltd. Complete the partnership application form to get started.",
};

const partnershipCategories = [
  "Investor",
  "Restaurant Partner",
  "Hotel Partner",
  "Catering Partner",
  "Corporate Partner",
  "Culinary School / Training Partner",
  "Food & Beverage Brand",
  "Equipment / Kitchen Supplier",
  "Media & Content Partner",
  "Event Partner",
  "Chef / Hospitality Professional",
  "International Partnership",
  "Other",
];

export default function BecomeAPartnerPage() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
            PARTNER WITH US
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            Become a Partner
          </h1>
        </div>

        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-12 max-w-3xl mx-auto">
          <p>
            Thank you for your interest in partnering with De KITCHEN MASTER Culinary & Hospitality Services Ltd.
          </p>
          <p>
            We believe that great partnerships create lasting impact. Whether you&apos;re an investor, hospitality business, restaurant, hotel, corporate organization, culinary institution, supplier, media company, or industry professional, we&apos;d love to explore how we can work together.
          </p>
          <p>
            Please complete the form below, and a member of our leadership team will review your application and contact you.
          </p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-8">
            Partnership Application Form
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Company / Organization
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Job Title / Position <span className="text-primary">*</span>
                </label>
                <input
                  id="jobTitle"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Your job title"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Phone Number (WhatsApp Preferred) <span className="text-primary">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="+234 801 234 5678"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Country <span className="text-primary">*</span>
                </label>
                <input
                  id="country"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Your country"
                />
              </div>

              <div>
                <label htmlFor="stateCity" className="block text-sm font-bold text-gray-700 mb-1.5">
                  State / City <span className="text-primary">*</span>
                </label>
                <input
                  id="stateCity"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Your state or city"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Partnership Category <span className="text-primary">*</span>
                </label>
                <select
                  id="category"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {partnershipCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="proposal" className="block text-sm font-bold text-gray-700 mb-1.5">
                Tell Us About Your Proposal <span className="text-primary">*</span>
              </label>
              <textarea
                id="proposal"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-y"
                placeholder="Please describe your business, partnership idea, investment interest, or how you would like to collaborate with De KITCHEN MASTER."
              />
            </div>

            <div>
              <label htmlFor="documents" className="block text-sm font-bold text-gray-700 mb-1.5">
                Upload Supporting Documents (Optional)
              </label>
              <input
                id="documents"
                type="file"
                multiple
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-colors cursor-pointer"
              />
              <p className="text-xs text-gray-400 mt-1.5">
                Company Profile, Business Proposal, Portfolio, Other Relevant Documents
              </p>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 max-w-xl mx-auto">
          Our team will carefully review your application and contact you within a reasonable timeframe.
        </p>
      </section>
    </div>
  );
}
