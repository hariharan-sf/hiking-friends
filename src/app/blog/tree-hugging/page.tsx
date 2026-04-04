import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/section-reveal";
import SiteNavbar from "@/components/site-navbar";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Packages", href: "/#packages" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const bookHikeUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20book%20a%20Hatton%20hike.";

export const metadata: Metadata = {
  title: "Why Tree Hugging Should Be Part of Your Hiking Experience",
  description:
    "Learn the science-backed benefits of tree hugging for hikers, from stress relief to better focus and deeper nature connection.",
  alternates: {
    canonical: "/blog/tree-hugging",
  },
  openGraph: {
    title: "Why Tree Hugging Should Be Part of Your Hiking Experience",
    description:
      "A practical guide to tree hugging and forest connection for better hiking wellbeing.",
    url: "/blog/tree-hugging",
    type: "article",
    images: [
      {
        url: "/images/blog/tree-hugging/tree-hugging-1.webp",
        width: 2564,
        height: 1710,
        alt: "Hikers walking through tea-country trail in Hatton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Tree Hugging Should Be Part of Your Hiking Experience",
    description:
      "A practical guide to tree hugging and forest connection for better hiking wellbeing.",
    images: ["/images/blog/tree-hugging/tree-hugging-1.webp"],
  },
};

export default function TreeHuggingBlogPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(16,185,129,0.24),transparent_40%)]" />

        <div className="relative z-10 px-6 pt-5 md:px-10 lg:px-16 lg:pt-7">
          <SectionReveal>
            <SiteNavbar navItems={navItems} bookHikeUrl={bookHikeUrl} theme="dark" />
          </SectionReveal>
        </div>

        <div className="relative z-10 container pb-12 pt-12 lg:pb-16 lg:pt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionReveal>
                <p className="text-xs uppercase tracking-[0.32em] text-amber-200">Nature Wellness</p>
              </SectionReveal>
              <SectionReveal delay={0.08}>
                <h1 className="font-luxury mt-4 max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Why Tree Hugging Should Be Part of Your Hiking Experience
                </h1>
              </SectionReveal>
              <SectionReveal delay={0.12}>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                  Tree hugging is more than a quirky trend. It is a simple, mindful way to improve wellbeing, reduce stress, and
                  deepen your connection with nature during hikes.
                </p>
              </SectionReveal>
            </div>

            <div>
              <SectionReveal delay={0.16}>
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/images/blog/tree-hugging/tree-hugging-1.webp"
                    alt="Hikers walking through tea-country trail in Hatton"
                    width={2564}
                    height={1710}
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
              When people hear the term tree hugging, they often think of it as quirky. For hikers and outdoor lovers, it can
              be a practical way to recharge physically and mentally. This guide explains why connecting with trees can improve
              your hiking experience.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <section className="space-y-3">
              <h2 className="font-luxury text-3xl text-slate-900">What Is Tree Hugging for Hikers?</h2>
              <p className="leading-relaxed">
                Tree hugging fits naturally into forest bathing (Shinrin-yoku), a mindful outdoor practice focused on slowing
                down, breathing deeply, and engaging your senses. During a trail break, even a short pause with a tree can
                help you feel grounded in your surroundings.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.14}>
            <section className="space-y-4">
              <h2 className="font-luxury text-3xl text-slate-900">6 Science-Backed Benefits on Your Hike</h2>
              <ol className="space-y-4 text-slate-700">
                <li>
                  <p className="font-semibold text-slate-900">1. Breathe Cleaner, Oxygen-Rich Air</p>
                  <p className="leading-relaxed">
                    Forest trails usually have cleaner air than urban spaces, helping your lungs reset and your body feel more
                    energized.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">2. Reduce Stress and Feel Calmer</p>
                  <p className="leading-relaxed">
                    Time with trees can lower stress responses and help your body shift out of fight-or-flight mode.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">3. Support Your Immune System</p>
                  <p className="leading-relaxed">
                    Trees release phytoncides, natural compounds linked to stronger immune response and better resilience.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">4. Ease Anxiety and Improve Clarity</p>
                  <p className="leading-relaxed">
                    Natural environments can calm racing thoughts and improve emotional balance during and after hikes.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">5. Improve Focus and Reset Your Mind</p>
                  <p className="leading-relaxed">
                    Pausing with nature helps you become present, reduce overwhelm, and return to daily life with better focus.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">6. Stay Cool with Natural Shade</p>
                  <p className="leading-relaxed">
                    Tree-covered trails provide cooler temperatures and protection from direct sunlight in warmer conditions.
                  </p>
                </li>
              </ol>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.18}>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/blog/tree-hugging/tree-hugging-2.webp"
                alt="Tea-country walk with local guide in Hatton"
                width={2564}
                height={1710}
                className="h-auto w-full object-cover"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.22}>
            <section className="space-y-3">
              <h2 className="font-luxury text-3xl text-slate-900">Tree Hugging vs. Forest Bathing</h2>
              <p className="leading-relaxed">
                Tree hugging is one part of a broader forest bathing experience. You can also benefit by listening closely to
                the environment, feeling bark and leaves, observing light and movement, and slowing your pace.
              </p>
              <p className="leading-relaxed">You do not need to hug a tree to benefit, but many hikers find it deepens the experience.</p>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.24}>
            <section className="space-y-3">
              <h2 className="font-luxury text-3xl text-slate-900">Why Every Hiking Trip Should Include Nature Connection</h2>
              <p className="leading-relaxed">
                In a fast, screen-heavy world, pausing with nature can improve your mood, support your health, and make hikes
                feel more meaningful.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.26}>
            <section className="space-y-3">
              <h2 className="font-luxury text-3xl text-slate-900">Ready to Experience It Yourself?</h2>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>Take a moment to slow down on your next hike.</li>
                <li>Step off the trail safely and respectfully.</li>
                <li>Place a hand, or your arms, around a tree and breathe deeply.</li>
                <li>Notice what changes in your body and mind.</li>
              </ul>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.28}>
            <section className="space-y-3">
              <h2 className="font-luxury text-3xl text-slate-900">Final Thought</h2>
              <p className="leading-relaxed">
                We spend hours indoors with screens but sometimes question simple outdoor practices. Tree hugging is a reminder
                to reconnect with nature, with yourself, and with the journey, not just the destination.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.32}>
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
              <h3 className="font-luxury text-2xl text-slate-900">Join Our Guided Hiking and Forest Experiences</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                If you want to deepen your connection with nature, our guided experiences include scenic forest trails, mindful
                outdoor practices, and relaxing routes for both beginner and experienced hikers.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={bookHikeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
                >
                  Book a Hike
                </a>
                <Link
                  href="/blog"
                  className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Back to Blog
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </article>
    </main>
  );
}
