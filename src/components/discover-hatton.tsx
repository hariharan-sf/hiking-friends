import SectionReveal from "@/components/section-reveal";

const whatsappUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20learn%20more%20about%20Hatton%20hiking.";

export default function DiscoverHatton() {
  return (
    <section id="about-hatton" className="container py-16 lg:py-24">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Discover Hatton</p>
          </SectionReveal>
          <SectionReveal delay={0.04}>
            <h2 className="font-luxury mt-3 text-3xl text-slate-900 sm:text-4xl">
              Sri Lanka&apos;s Most Atmospheric Hiking Region
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Hatton is one of the most beautiful places in Sri Lanka&apos;s hill country, known for tea plantations, cool weather,
              mountain ridges, and waterfalls.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.12}>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              With Adam&apos;s Peak and Horton Plains close by, Hatton is ideal for travelers who want nature, fresh air, and
              memorable outdoor adventure.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.16}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Learn More About Hatton
            </a>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.08}>
          <div className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed border-amber-200 bg-amber-50/40 p-6 text-center text-sm text-slate-600">
            16:10 image placeholder - Panoramic Hatton valley with tea estates, mist, and sunrise light
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
