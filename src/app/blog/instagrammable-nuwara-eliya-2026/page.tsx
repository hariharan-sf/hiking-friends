import type { Metadata } from "next";
import Image from "next/image";
import SectionReveal from "@/components/section-reveal";
import SiteNavbar from "@/components/site-navbar";
import BlogPageTracker from "@/components/blog-page-tracker";
import TrackedLink from "@/components/tracked-link";
import { primaryNavItems } from "@/data/navigation";
import { packages } from "@/data/packages";

const bookHikeUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20book%20a%20Hatton%20hike.";

const nuwaraEliyaPackage = packages.find((item) => item.title === "Nuwara Eliya Tour (One day)");
const nuwaraEliyaBookingUrl = nuwaraEliyaPackage
  ? `https://wa.me/94774989745?text=${encodeURIComponent(nuwaraEliyaPackage.inquiryText)}`
  : bookHikeUrl;

const photoSpots = [
  {
    title: "Gregory Lake",
    image: "/images/photo-gallery/kayaking.webp",
    alt: "Kayaking on calm hill-country water in Sri Lanka",
    vibe: "Soft reflections, lake breeze, picnic energy",
    bestTime: "Golden hour or a cloudy afternoon",
    shotIdea: "Go low near the waterline for reflections, or use a boat ride as a motion shot for Reels and TikTok.",
  },
  {
    title: "The Pekoe Trail near Pedro Estate",
    image: "/images/pekoe-trail/pekoe-trail.webp",
    alt: "Hikers walking along the Pekoe Trail in Sri Lanka's tea country",
    vibe: "Tea trails, open skies, cinematic walking clips",
    bestTime: "Morning light, especially when the mist is still lifting",
    shotIdea: "Use the tea rows as leading lines and capture a walking-away shot with the trail curving ahead.",
  },
  {
    title: "Tea Estate Viewpoints",
    image: "/images/tea-tour/tea-estate-walk.webp",
    alt: "Walking through lush tea estate paths in Sri Lanka",
    vibe: "Layered greens, mountain air, slow-travel mood",
    bestTime: "After light rain, when the greens look extra vivid",
    shotIdea: "Shoot from slightly above the tea rows so the landscape fills the frame behind you.",
  },
  {
    title: "Lovers Leap Waterfall Detour",
    image: "/images/photo-gallery/stclaire-waterfall.webp",
    alt: "Waterfall surrounded by green hills in Sri Lanka",
    vibe: "Mist, movement, dramatic nature backdrop",
    bestTime: "After rain, with safe footing and a local route plan",
    shotIdea: "Keep the person small in the frame so the waterfall scale does the talking.",
  },
  {
    title: "Highland Sunrise Stops",
    image: "/images/photo-gallery/sunrise-viewing.webp",
    alt: "Sunrise over Sri Lanka's hill-country landscape",
    vibe: "Soft clouds, pastel skies, main-character morning",
    bestTime: "Sunrise, with a warm layer ready",
    shotIdea: "Silhouette your subject against the first light and keep the caption simple.",
  },
];

export const metadata: Metadata = {
  title: "The Most Instagrammable Spots in Nuwara Eliya to Visit in 2026",
  description:
    "A trendy visual guide to Nuwara Eliya's most Instagrammable places in 2026, from Gregory Lake and tea viewpoints to the Pekoe Trail.",
  alternates: {
    canonical: "/blog/instagrammable-nuwara-eliya-2026",
  },
  openGraph: {
    title: "The Most Instagrammable Spots in Nuwara Eliya to Visit in 2026",
    description:
      "Plan a photo-ready Nuwara Eliya day with Gregory Lake, tea estates, waterfalls, and the Pekoe Trail.",
    url: "/blog/instagrammable-nuwara-eliya-2026",
    type: "article",
    images: [
      {
        url: "/images/nuwaraeliya-tour.png",
        width: 2032,
        height: 1016,
        alt: "Traveler overlooking misty tea-country scenery near Nuwara Eliya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Most Instagrammable Spots in Nuwara Eliya to Visit in 2026",
    description:
      "A visual listicle for trend-focused travelers visiting Nuwara Eliya in 2026.",
    images: ["/images/nuwaraeliya-tour.png"],
  },
};

export default function InstagrammableNuwaraEliyaBlogPage() {
  return (
    <main id="main-content" className="bg-white">
      <BlogPageTracker
        pageType="article"
        slug="instagrammable-nuwara-eliya-2026"
        title="The Most Instagrammable Spots in Nuwara Eliya to Visit in 2026"
      />
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(16,185,129,0.24),transparent_40%)]" />

        <div className="relative z-10 px-6 pt-5 md:px-10 lg:px-16 lg:pt-7">
          <SectionReveal>
            <SiteNavbar navItems={primaryNavItems} bookHikeUrl={bookHikeUrl} theme="dark" />
          </SectionReveal>
        </div>

        <div className="relative z-10 container pb-12 pt-12 lg:pb-16 lg:pt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionReveal>
                <p className="text-xs uppercase tracking-[0.32em] text-amber-200">2026 Photo Guide</p>
              </SectionReveal>
              <SectionReveal delay={0.08}>
                <h1 className="font-luxury mt-4 max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  The Most Instagrammable Spots in Nuwara Eliya to Visit in 2026
                </h1>
              </SectionReveal>
              <SectionReveal delay={0.12}>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                  Sri Lanka&apos;s hill country is back in the global travel conversation, and Nuwara Eliya is exactly the kind
                  of misty, cinematic place that looks made for social feeds. Here&apos;s where to point your camera first.
                </p>
              </SectionReveal>
            </div>

            <div>
              <SectionReveal delay={0.16}>
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/images/nuwaraeliya-tour.png"
                    alt="Traveler overlooking misty tea-country scenery near Nuwara Eliya"
                    width={2032}
                    height={1016}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <article className="container py-12 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-8 text-slate-700">
          <SectionReveal delay={0.06}>
            <p className="text-lg leading-relaxed">
              If your 2026 travel style is part adventure, part aesthetic reset, Nuwara Eliya belongs on your route. The town
              has lakeside views, tea-country trails, waterfalls, and cool mountain weather, all close
              enough to build into one highly photogenic day.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <section className="space-y-3">
              <h2 className="font-luxury text-3xl text-slate-900">Why Nuwara Eliya Is Trending in 2026</h2>
              <p className="leading-relaxed">
                Sri Lanka&apos;s latest tourism push is leaning into creator-led storytelling, with international influencers set
                to visit destinations including Nuwara Eliya in July 2026. That matters because this town is built for visual
                travel: glassy water, tea estates, waterfalls, and scenic walking routes all sit inside one cool
                highland landscape.
              </p>
            </section>
          </SectionReveal>

          <div className="space-y-10">
            {photoSpots.map((spot, index) => (
              <SectionReveal key={spot.title} delay={0.12 + index * 0.04}>
                <section className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={spot.image}
                      alt={spot.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                  <div className="space-y-4 p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                      Spot {index + 1}
                    </p>
                    <h2 className="font-luxury text-3xl text-slate-900">{spot.title}</h2>
                    <p className="leading-relaxed">{spot.vibe}</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl bg-amber-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">Best light</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">{spot.bestTime}</p>
                      </div>
                      <div className="rounded-xl bg-emerald-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">Shot idea</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">{spot.shotIdea}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.18}>
            <section className="space-y-4">
              <h2 className="font-luxury text-3xl text-slate-900">A Quick 2026 Photo Route</h2>
              <ol className="space-y-3 leading-relaxed">
                <li>
                  <span className="font-semibold text-slate-900">1. Start at Gregory Lake.</span> Save enough time for a walk,
                  a boat shot, or a relaxed cafe-style break.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">2. Head toward Pedro Estate and the Pekoe Trail.</span> Use
                  the tea-country roads and trail edges for the most cinematic clips.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">3. Add a tea estate viewpoint.</span> Look for layered rows,
                  soft mist, and clear gaps where you can stand without stepping into working areas.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">4. Finish with a waterfall or sunset viewpoint.</span> The
                  final light is usually the easiest way to make a simple photo feel expensive.
                </li>
              </ol>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.22}>
            <section className="space-y-3">
              <h2 className="font-luxury text-3xl text-slate-900">Small Etiquette Notes That Make Better Content</h2>
              <p className="leading-relaxed">
                The best travel content still respects the place. Ask before photographing people, avoid blocking working
                areas around attractions, stay on marked paths in tea estates, and keep drone plans aligned with local rules.
                In the hill country, weather changes fast, so keep your camera protected and pack one warm layer even when the
                morning starts bright.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.26}>
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
              <h3 className="font-luxury text-2xl text-slate-900">Want the Photo Day Without the Planning Stress?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Our one-day Nuwara Eliya tour can help you connect Gregory Lake, tea-country viewpoints, waterfalls, temples,
                gardens, and flexible photo stops into one smooth highland route.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <TrackedLink
                  href={nuwaraEliyaBookingUrl}
                  external
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="CTA Clicked"
                  eventProps={{
                    cta_name: "book_nuwara_eliya_from_blog",
                    cta_location: "blog_instagrammable_nuwara_eliya_2026",
                  }}
                  className="inline-flex rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
                >
                  Book the Nuwara Eliya Tour
                </TrackedLink>
                <TrackedLink
                  href="/blog"
                  eventName="CTA Clicked"
                  eventProps={{
                    cta_name: "back_to_blog",
                    cta_location: "blog_instagrammable_nuwara_eliya_2026",
                  }}
                  className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Back to Blog
                </TrackedLink>
              </div>
            </div>
          </SectionReveal>
        </div>
      </article>
    </main>
  );
}
