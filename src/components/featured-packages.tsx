import SectionReveal from "@/components/section-reveal";

const packages = [
  {
    title: "Adam's Peak Sunrise Hike",
    description:
      "Watch the sunrise from one of Sri Lanka's most famous mountains with an early-morning guided climb.",
    placeholder: "4:3 image placeholder - Pre-dawn trail with pilgrims and sunrise summit view",
  },
  {
    title: "Tea Plantation Trail Walk",
    description:
      "Walk through tea estates and village paths while learning how Ceylon tea is grown.",
    placeholder: "4:3 image placeholder - Rolling tea estate paths with hikers",
  },
  {
    title: "Hatton Waterfall Adventure",
    description:
      "Visit hidden waterfalls through forest trails with natural pools and scenic photo points.",
    placeholder: "4:3 image placeholder - Waterfall in jungle with trekking group",
  },
  {
    title: "Horton Plains + Hatton Combo",
    description:
      "A full-day experience combining Hatton hiking with Horton Plains National Park highlights.",
    placeholder: "4:3 image placeholder - Cloudy plateau and dramatic cliff lookout",
  },
  {
    title: "Multi-Day Hill Country Trek",
    description:
      "A longer route through tea country, forest ridges, and mountain villages.",
    placeholder: "4:3 image placeholder - Multi-day hikers with backpacks in highlands",
  },
];

const whatsappUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20view%20all%20hiking%20packages%20in%20Hatton.";

export default function FeaturedPackages() {
  return (
    <section id="packages" className="container py-16 lg:py-24">
      <SectionReveal>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Featured Packages</p>
          <h2 className="font-luxury mt-3 text-3xl text-slate-900 sm:text-4xl">Explore Hatton With Expert Local Guides</h2>
          </div>
        </div>
      </SectionReveal>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {packages.map((item, index) => (
          <SectionReveal key={item.title} delay={0.04 + index * 0.04}>
            <article className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
              <div className="mb-4 flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-amber-200 bg-amber-50/40 px-4 text-center text-xs text-slate-600">
                {item.placeholder}
              </div>
              <h3 className="font-luxury text-2xl text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.14}>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
        >
          View All Hiking Packages
        </a>
      </SectionReveal>
    </section>
  );
}
