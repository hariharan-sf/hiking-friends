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

const tuktukPackage = packages.find((item) => item.title === "Tuktuk Tour");
const tuktukBookingUrl = tuktukPackage
  ? `https://wa.me/94774989745?text=${encodeURIComponent(tuktukPackage.inquiryText)}`
  : bookHikeUrl;

export const metadata: Metadata = {
  title: "St. Clair's Falls: Sri Lanka's Widest Waterfall for Travelers",
  description:
    "Discover why St. Clair's Falls is Sri Lanka's widest waterfall, the best time to visit, and how to explore it comfortably with our Hatton Tuktuk Tour.",
  alternates: {
    canonical: "/blog/st-claire-waterfall",
  },
  openGraph: {
    title: "St. Clair's Falls: Sri Lanka's Widest Waterfall for Travelers",
    description:
      "A traveler's guide to St. Clair's Falls in Hatton, including viewpoints, timing tips, and a scenic Tuktuk route.",
    url: "/blog/st-claire-waterfall",
    type: "article",
    images: [
      {
        url: "/images/photo-gallery/stclaire-waterfall.webp",
        width: 728,
        height: 850,
        alt: "St. Clair's Falls surrounded by green hills in Hatton, Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Clair's Falls: Sri Lanka's Widest Waterfall for Travelers",
    description:
      "Plan your St. Clair's Falls visit in Hatton and explore nearby highlights with our scenic Tuktuk Tour.",
    images: ["/images/photo-gallery/stclaire-waterfall.webp"],
  },
};

export default function StClaireWaterfallBlogPage() {
  return (
    <main id="main-content" className="bg-white">
      <BlogPageTracker
        pageType="article"
        slug="st-claire-waterfall"
        title="St. Clair's Falls: Sri Lanka's Widest Waterfall You Must See"
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
                <p className="text-xs uppercase tracking-[0.32em] text-amber-200">Waterfall Travel</p>
              </SectionReveal>
              <SectionReveal delay={0.08}>
                <h1 className="font-luxury mt-4 max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  St. Clair&apos;s Falls: Sri Lanka&apos;s Widest Waterfall You Must See
                </h1>
              </SectionReveal>
              <SectionReveal delay={0.12}>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                  If you love scenic road trips, mountain mist, and dramatic waterfalls, St. Clair&apos;s Falls in Hatton should
                  be on your travel list. It is often called the widest waterfall in Sri Lanka, and the views are unforgettable.
                </p>
              </SectionReveal>
            </div>

            <div>
              <SectionReveal delay={0.16}>
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/images/photo-gallery/stclaire-waterfall.webp"
                    alt="St. Clair's Falls surrounded by green hills in Hatton, Sri Lanka"
                    width={728}
                    height={850}
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
              St. Clair&apos;s Falls is one of the most iconic waterfalls in the Hill Country. The broad, layered cascade flowing
              through tea-covered slopes makes it feel cinematic in every season. For travelers who chase unique landscapes,
              this is a stop that delivers.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <section className="space-y-3">
              <h2 className="font-luxury text-3xl text-slate-900">Why Travelers Love St. Clair&apos;s Falls</h2>
              <p className="leading-relaxed">
                Unlike narrow vertical falls, St. Clair&apos;s spreads wide across rock formations, creating a layered white-water
                curtain against deep green surroundings. It is easy to access, visually dramatic, and perfect for both quick
                stops and slow travel days in Hatton.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.14}>
            <section className="space-y-4">
              <h2 className="font-luxury text-3xl text-slate-900">Best Time to Visit</h2>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>Early morning for cooler weather and soft misty light.</li>
                <li>Late afternoon for golden hillside tones and atmospheric views.</li>
                <li>After rainfall for stronger water flow and more dramatic cascades.</li>
              </ul>
              <p className="leading-relaxed">
                If you enjoy photography, combine cloudy hill-country weather with a planned stop window so you can wait for
                the best light.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.18}>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/photo-gallery/tuktuk-tour.webp"
                alt="Tuktuk ride through scenic tea-country roads near St. Clair's Falls"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.22}>
            <section className="space-y-3">
              <h2 className="font-luxury text-3xl text-slate-900">Make It a Full Waterfall Day With Our Tuktuk Tour</h2>
              <p className="leading-relaxed">
                The smartest way to enjoy St. Clair&apos;s Falls is to combine it with nearby highlights in one smooth route. Our
                Tuktuk Tour is built for travelers who want scenic drives, easy stop points, and local insights without rushing.
              </p>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>Visit St. Clair&apos;s Falls with comfortable local transport.</li>
                <li>Pair it with viewpoints, tea landmarks, and other waterfall stops.</li>
                <li>Enjoy a flexible pace ideal for photos and short breaks.</li>
              </ul>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.26}>
            <section className="space-y-3">
              <h2 className="font-luxury text-3xl text-slate-900">Who This Is Perfect For</h2>
              <p className="leading-relaxed">
                This experience is ideal for couples, families, and small travel groups who love nature but prefer comfortable
                exploration over long trekking hours. If waterfalls are your thing, this route should be high on your list.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
              <h3 className="font-luxury text-2xl text-slate-900">Ready to Visit St. Clair&apos;s Falls?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Book our Tuktuk Tour and turn your waterfall stop into a complete Hatton sightseeing experience with local
                guidance and scenic route planning.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <TrackedLink
                  href={tuktukBookingUrl}
                  external
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="CTA Clicked"
                  eventProps={{
                    cta_name: "book_tuktuk_from_blog",
                    cta_location: "blog_st_claire_waterfall",
                  }}
                  className="inline-flex rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
                >
                  Book the Tuktuk Tour
                </TrackedLink>
                <TrackedLink
                  href="/blog"
                  eventName="CTA Clicked"
                  eventProps={{
                    cta_name: "back_to_blog",
                    cta_location: "blog_st_claire_waterfall",
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
