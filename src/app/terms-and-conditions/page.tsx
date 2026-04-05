import SiteNavbar from "@/components/site-navbar";
import { primaryNavItems } from "@/data/navigation";

const bookHikeUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20book%20a%20Hatton%20hike.";
const contactEmail = "info@srilankahikingfriends.com";

export default function TermsAndConditionsPage() {
  return (
    <main id="main-content" className="bg-white">
      <header className="px-6 pt-5 md:px-10 lg:px-16 lg:pt-7">
        <SiteNavbar navItems={primaryNavItems} bookHikeUrl={bookHikeUrl} theme="light" />
      </header>

      <div className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Terms and Conditions</h1>
            <p className="text-sm text-gray-500">Last updated: April 5, 2026</p>
            <p className="text-gray-700">
              These Terms and Conditions govern your use of the Hiking Friends website and services. By accessing this
              website or making a booking, you agree to these terms.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Bookings and Confirmation</h2>
            <p className="text-gray-700">
              All bookings are subject to availability. A booking is confirmed only after we acknowledge your request
              through WhatsApp, email, or another official communication channel.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Pricing and Payments</h2>
            <p className="text-gray-700">
              Package prices may vary based on season, group size, transport needs, and custom itinerary requests.
              Final pricing and payment terms will be shared at the time of booking confirmation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Cancellations and Changes</h2>
            <p className="text-gray-700">
              If you need to cancel or reschedule, please inform us as early as possible. Refund eligibility and
              rescheduling options depend on notice period, third-party vendor policies, and weather or safety
              conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Health and Safety</h2>
            <p className="text-gray-700">
              Participants are responsible for ensuring they are medically fit for selected activities. You must follow
              all guide instructions and safety rules during hikes, tours, and adventure activities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Weather and Force Majeure</h2>
            <p className="text-gray-700">
              Outdoor activities may be adjusted, postponed, or canceled due to weather, natural events, road
              conditions, government restrictions, or other events beyond our control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Liability</h2>
            <p className="text-gray-700">
              We take reasonable care in planning and operating experiences. However, Hiking Friends is not liable for
              personal injury, loss, delay, or damage arising from circumstances beyond reasonable control, including
              third-party transport or activity providers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Use of Website Content</h2>
            <p className="text-gray-700">
              Website text, images, and branding are the property of Hiking Friends unless otherwise stated. You may not
              copy or reuse site content for commercial use without prior permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
            <p className="text-gray-700">
              If you have questions about these Terms and Conditions, please contact us through our official website
              channels or email us at{" "}
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
