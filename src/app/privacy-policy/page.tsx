import SiteNavbar from "@/components/site-navbar";

const navItems = [
  { label: "About Us", href: "/#about-hatton" },
  { label: "Packages", href: "/#packages" },
  { label: "Gallery", href: "/#gallery" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const bookHikeUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20book%20a%20Hatton%20hike.";
const contactEmail = "info@srilankahikingfriends.com";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <header className="px-6 pt-5 md:px-10 lg:px-16 lg:pt-7">
        <SiteNavbar navItems={navItems} bookHikeUrl={bookHikeUrl} theme="light" />
      </header>

      <div className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Last updated: April 4, 2026</p>
          <p className="text-gray-700">
            This Privacy Policy explains how Hiking Friends collects, uses, and
            protects your information when you use our website and services.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            Information We Collect
          </h2>
          <p className="text-gray-700">
            We may collect personal information you provide directly, such as
            your name, email address, phone number, and booking details.
          </p>
          <p className="text-gray-700">
            We may also collect non-personal information like browser type, IP
            address, and usage data through cookies and analytics tools.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            How We Use Your Information
          </h2>
          <p className="text-gray-700">We use your information to:</p>
          <ul className="list-disc space-y-1 pl-6 text-gray-700">
            <li>Process inquiries and bookings</li>
            <li>Provide customer support</li>
            <li>Improve our services and website experience</li>
            <li>Send updates related to your bookings or requests</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            Sharing of Information
          </h2>
          <p className="text-gray-700">
            We do not sell your personal information. We may share data with
            trusted service providers only when necessary to operate our
            business, process bookings, or comply with legal obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Data Security</h2>
          <p className="text-gray-700">
            We implement reasonable technical and organizational measures to
            protect your personal information. However, no online platform can
            guarantee absolute security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Your Rights</h2>
          <p className="text-gray-700">
            Depending on your location, you may have rights to access, correct,
            or delete your personal data. To make a request, please contact us
            at{" "}
            <a href={`mailto:${contactEmail}`} className="font-medium text-amber-700 hover:text-amber-800">
              {contactEmail}
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Updates will
            be posted on this page with a revised effective date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href={`mailto:${contactEmail}`} className="font-medium text-amber-700 hover:text-amber-800">
              {contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
      </div>
    </main>
  );
}
