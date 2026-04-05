import SectionReveal from "@/components/section-reveal";

const reasons = [
  {
    title: "Local Guides",
    description: "Our guides are from Hatton and know the safest, most beautiful routes.",
  },
  {
    title: "Small Groups",
    description: "We keep group sizes small so every hiker gets a better experience.",
  },
  {
    title: "Safe Hiking",
    description: "Safety-first planning with trained guides and clear trail briefings.",
  },
  {
    title: "Real Local Experience",
    description: "Discover hidden places most travelers miss in Sri Lanka's hill country.",
  },
];

export default function WhyHikeUs() {
  return (
    <section aria-labelledby="why-hike-us-heading" className="bg-amber-50/60 py-16 lg:py-24">
      <div className="container">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Why Hike With Us</p>
        </SectionReveal>
        <SectionReveal delay={0.04}>
          <h2 id="why-hike-us-heading" className="font-luxury mt-3 text-3xl text-slate-900 sm:text-4xl">
            Built for Comfortable, Scenic, and Safe Hiking
          </h2>
        </SectionReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => (
            <SectionReveal key={reason.title} delay={0.08 + index * 0.04}>
              <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-100">
                <h3 className="font-luxury text-2xl text-slate-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{reason.description}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
