import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | De KITCHEN MASTER",
  description:
    "Privacy Policy for De KITCHEN MASTER Culinary & Hospitality Services Ltd. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 bg-white">
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 font-medium mb-12">
            Effective Date: July 14, 2026
          </p>

          <div className="space-y-8 text-base md:text-lg text-gray-700 leading-relaxed font-medium">
            <p>
              Welcome to De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd (&quot;De KITCHEN MASTER,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and handling your personal information responsibly.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, use our services, or communicate with us.
            </p>
            <p>
              By using our website, you agree to the practices described in this Privacy Policy.
            </p>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="mb-3 font-bold">Personal Information</p>
              <p className="mb-3">Information you voluntarily provide, including:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Residential or business address (where applicable)</li>
                <li>Company or organization name</li>
                <li>Information submitted through contact forms</li>
                <li>Information submitted when applying for chef recruitment or employment</li>
                <li>Information submitted during training registrations or consultancy enquiries</li>
              </ul>
              <p className="mb-3 font-bold">Non-Personal Information</p>
              <p className="mb-3">We may also collect technical information such as:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Website pages visited</li>
                <li>Date and time of visits</li>
                <li>Website usage statistics</li>
              </ul>
              <p>This information helps us improve our website and user experience.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-3">Your information may be used to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Respond to enquiries and requests.</li>
                <li>Process chef recruitment enquiries.</li>
                <li>Respond to consultancy requests.</li>
                <li>Process training registrations.</li>
                <li>Improve our website and services.</li>
                <li>Send important updates regarding our services.</li>
                <li>Improve customer support.</li>
                <li>Monitor website performance and security.</li>
                <li>Comply with applicable legal obligations.</li>
              </ul>
              <p>We do not sell or rent your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">3. Cookies</h2>
              <p className="mb-3">Our website may use cookies and similar technologies to improve your browsing experience.</p>
              <p className="mb-3">Cookies help us:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Remember user preferences.</li>
                <li>Analyse website traffic.</li>
                <li>Improve website performance.</li>
                <li>Understand visitor behaviour.</li>
              </ul>
              <p>You may choose to disable cookies through your browser settings, although some website features may not function properly.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="mb-3">We respect your privacy.</p>
              <p className="mb-3">We may only share your information:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>When required by law.</li>
                <li>With trusted service providers assisting in website operations.</li>
                <li>To protect our legal rights.</li>
                <li>With your consent.</li>
              </ul>
              <p>We never sell your personal information to advertisers or unrelated third parties.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">5. Data Security</h2>
              <p>We implement reasonable administrative, technical, and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.</p>
              <p className="mt-3">While we strive to protect your information, no online platform can guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">6. Third-Party Services</h2>
              <p>Our website may contain links to third-party websites, social media platforms, or external services.</p>
              <p className="mt-3">We are not responsible for the privacy practices or content of those third-party websites.</p>
              <p className="mt-3">We encourage users to review their respective privacy policies before providing personal information.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">7. Your Rights</h2>
              <p className="mb-3">Depending on applicable laws, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Request access to your personal information.</li>
                <li>Request correction of inaccurate information.</li>
                <li>Request deletion of your personal information where appropriate.</li>
                <li>Withdraw consent where consent is the basis for processing.</li>
                <li>Request clarification on how your information is used.</li>
              </ul>
              <p>To exercise these rights, please contact us using the details provided below.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">8. Data Retention</h2>
              <p className="mb-3">We retain personal information only for as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Provide requested services.</li>
                <li>Meet legal obligations.</li>
                <li>Resolve disputes.</li>
                <li>Maintain business records.</li>
                <li>Improve our services.</li>
              </ul>
              <p>When information is no longer required, it will be securely deleted or anonymized where appropriate.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
              <p>Our website and services are not intentionally directed toward children under the age of 13.</p>
              <p className="mt-3">We do not knowingly collect personal information from children without appropriate parental or guardian consent.</p>
              <p className="mt-3">If you believe a child has provided personal information through our website, please contact us so we can remove the information where appropriate.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or business practices.</p>
              <p className="mt-3">Any updates will be published on this page with a revised effective date.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">11. Contact Us</h2>
              <p className="mb-3">If you have any questions regarding this Privacy Policy or how we handle your personal information, please contact us through our official website or our published business contact details.</p>
              <div className="bg-gray-50 rounded-2xl p-6 space-y-2 mt-4">
                <p className="font-bold text-gray-900">De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd</p>
                <p>Website: www.dekitchenmaster.com.ng</p>
                <p>Email: [Insert Official Business Email]</p>
                <p>Phone: [Insert Official Business Number]</p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <p className="text-gray-500 italic">
              Thank you for trusting De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd. We value your privacy and remain committed to protecting your personal information while providing professional culinary and hospitality services.
            </p>

            <div className="pt-6">
              <Link
                href="/"
                className="inline-flex items-center text-primary hover:text-primary-dark font-bold transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2" strokeWidth={2.5} />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
