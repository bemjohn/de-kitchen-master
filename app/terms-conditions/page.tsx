import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | De KITCHEN MASTER",
  description:
    "Terms & Conditions for De KITCHEN MASTER Culinary & Hospitality Services Ltd. Governing access to our website, services, and digital platforms.",
};

export default function TermsConditionsPage() {
  return (
    <div className="pt-20 bg-white">
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-500 font-medium mb-12">
            Effective Date: July 14, 2026
          </p>

          <div className="space-y-8 text-base md:text-lg text-gray-700 leading-relaxed font-medium">
            <p>
              Welcome to the official website of De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd (&quot;De KITCHEN MASTER&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
            </p>
            <p>
              These Terms &amp; Conditions govern your access to and use of our website, services, and digital platforms. By accessing or using this website, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please discontinue use of our website.
            </p>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">1. About Us</h2>
              <p className="mb-3">De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd is a Nigerian hospitality company providing professional culinary and hospitality services, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Hospitality &amp; Restaurant Consulting</li>
                <li>Chef Recruitment &amp; Placement</li>
                <li>Private Chef Services</li>
                <li>Contract Chef Services (Chef Rentage)</li>
                <li>Restaurant &amp; Kitchen Setup</li>
                <li>Menu Creation &amp; Menu Engineering</li>
                <li>Recipe Development</li>
                <li>Food Cost Control Systems</li>
                <li>SOP Development</li>
                <li>Kitchen Staff Training</li>
                <li>Culinary Training &amp; Professional Development</li>
                <li>Corporate Hospitality Services</li>
                <li>Event Catering &amp; Culinary Support</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">2. Use of This Website</h2>
              <p className="mb-3">You agree to use this website only for lawful purposes.</p>
              <p className="mb-3">You must not:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Use this website for fraudulent or illegal activities.</li>
                <li>Attempt to gain unauthorized access to our systems.</li>
                <li>Upload malicious software or harmful content.</li>
                <li>Disrupt the functionality or security of the website.</li>
                <li>Copy or reproduce website content without written permission.</li>
              </ul>
              <p>We reserve the right to restrict or terminate access to users who violate these Terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">3. Intellectual Property</h2>
              <p>Unless otherwise stated, all content on this website—including text, graphics, photographs, branding, logos, designs, blog articles, documents, videos, and other materials—is the intellectual property of De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd.</p>
              <p className="mt-3">No content may be copied, reproduced, republished, distributed, modified, or used for commercial purposes without our prior written consent.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">4. Service Enquiries</h2>
              <p>Submitting an enquiry through our website does not automatically create a contract between you and De KITCHEN MASTER.</p>
              <p className="mt-3 mb-3">All services are subject to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Availability</li>
                <li>Consultation</li>
                <li>Assessment where applicable</li>
                <li>Mutual agreement</li>
                <li>Written confirmation</li>
              </ul>
              <p>Quotes and proposals provided through our website are subject to review and may change depending on project requirements.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">5. Chef Recruitment &amp; Placement</h2>
              <p>De KITCHEN MASTER provides professional chef recruitment and placement services for private residences, restaurants, hotels, corporate organizations, and hospitality businesses.</p>
              <p className="mt-3">While we carefully assess candidates before recommendation, the final hiring decision remains the responsibility of the client.</p>
              <p className="mt-3">Clients are encouraged to conduct practical assessments and interviews before employment.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">6. Consultancy Services</h2>
              <p>Hospitality consultancy recommendations are based on information available at the time of engagement and our professional experience.</p>
              <p className="mt-3">Although we strive to deliver practical and effective solutions, business outcomes may vary depending on implementation, market conditions, management decisions, and other factors beyond our control.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">7. Training Programmes</h2>
              <p className="mb-3">Participants enrolled in our culinary or hospitality training programmes are expected to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Maintain professional conduct.</li>
                <li>Respect instructors and fellow participants.</li>
                <li>Follow all health and safety guidelines.</li>
                <li>Protect training materials from unauthorized distribution.</li>
              </ul>
              <p>De KITCHEN MASTER reserves the right to suspend or remove participants whose behaviour disrupts the learning environment.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">8. Payments</h2>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Service fees, deposits, and payment schedules will be communicated before project commencement.</li>
                <li>Payments made for completed services may be subject to separate refund terms agreed upon during engagement.</li>
                <li>Failure to meet agreed payment obligations may result in suspension or termination of services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">9. Website Content</h2>
              <p>We make every reasonable effort to ensure that information published on this website is accurate and up to date.</p>
              <p className="mt-3">However, we do not guarantee that all information will always be complete, accurate, or free from errors.</p>
              <p className="mt-3">Content may be updated or modified without prior notice.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">10. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites or services.</p>
              <p className="mt-3">These links are provided for convenience only.</p>
              <p className="mt-3">De KITCHEN MASTER is not responsible for the content, security, or privacy practices of third-party websites.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">11. Limitation of Liability</h2>
              <p>To the fullest extent permitted by applicable law, De KITCHEN MASTER shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of this website or reliance on information contained within it.</p>
              <p className="mt-3">Users access and use this website at their own discretion.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">12. Privacy</h2>
              <p>Your use of this website is also governed by our <Link href="/privacy-policy" className="text-primary underline underline-offset-2 hover:text-primary-dark">Privacy Policy</Link>, which explains how we collect, use, and protect your personal information.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">13. Changes to These Terms</h2>
              <p>We reserve the right to amend these Terms &amp; Conditions at any time.</p>
              <p className="mt-3">Updated versions will be published on this page together with the revised effective date.</p>
              <p className="mt-3">Continued use of the website after changes are published constitutes acceptance of the updated Terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">14. Governing Law</h2>
              <p>These Terms &amp; Conditions shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria.</p>
              <p className="mt-3">Any disputes arising from the use of this website or our services shall be subject to the jurisdiction of the competent courts in Nigeria.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">15. Contact Information</h2>
              <p className="mb-3">If you have any questions regarding these Terms &amp; Conditions, please contact us using our official business channels.</p>
              <div className="bg-gray-50 rounded-2xl p-6 space-y-2 mt-4">
                <p className="font-bold text-gray-900">De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd</p>
                <p>Website: www.dekitchenmaster.com.ng</p>
                <p>Email: [Insert Official Business Email]</p>
                <p>Phone: [Insert Official Business Phone Number]</p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <p className="text-gray-500 italic">
              Thank you for visiting De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd. We appreciate your trust and look forward to providing professional culinary and hospitality services with integrity, excellence, and professionalism.
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
