import SectionReveal from "@/components/section-reveal";

const bookUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20book%20a%20Hatton%20hike.";
const contactUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20have%20a%20question%20about%20your%20Hatton%20hiking%20packages.";
const contactEmail = "info@srilankahikingfriends.com";

export default function CtaSection() {
  return (
    <section id="contact" className="container py-16 lg:py-24">
      <SectionReveal>
        <div className="rounded-3xl bg-amber-50 px-6 py-10 text-center text-slate-900 ring-1 ring-amber-100 sm:px-10">
          <SectionReveal delay={0.04}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Ready to Start?</p>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <h2 className="font-luxury mt-3 text-3xl sm:text-4xl">Ready for Your Hatton Adventure</h2>
          </SectionReveal>
          <SectionReveal delay={0.12}>
            <p className="mx-auto mt-3 max-w-2xl text-slate-700">
              Start your hiking journey today. Our guides are ready to show you the best trails in Hatton.
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Email:{" "}
              <a href={`mailto:${contactEmail}`} className="font-semibold text-amber-700 hover:text-amber-800">
                {contactEmail}
              </a>
            </p>
          </SectionReveal>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <SectionReveal delay={0.16}>
              <a
                href={bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
              >
                Book a Hike
              </a>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-amber-300 px-6 py-3 text-sm font-semibold text-amber-800 transition hover:bg-amber-100"
              >
                Contact Us on WhatsApp
              </a>
            </SectionReveal>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
