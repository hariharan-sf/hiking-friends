import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/section-reveal";
import SiteNavbar from "@/components/site-navbar";
import { primaryNavItems } from "@/data/navigation";

const posts = [
  {
    title: "The Joy of Tree Hugging in Hatton",
    description:
      "A mindful walking story through misty tea-country forests and why tree hugging can be a meaningful nature ritual.",
    href: "/blog/tree-hugging",
    image: "/images/blog/tree-hugging/tree-hugging-1.webp",
    tag: "Nature Wellness",
  },
];

const bookHikeUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20book%20a%20Hatton%20hike.";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read Hiking Friends stories, trail guides, and Hatton travel tips from local experts.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Hiking Friends Blog",
    description: "Stories, guides, and highland moments from Hatton.",
    url: "/blog",
    type: "website",
    images: [
      {
        url: "/images/blog/tree-hugging/tree-hugging-1.webp",
        width: 2564,
        height: 1710,
        alt: "Tree hugging walk in Hatton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiking Friends Blog",
    description: "Stories, guides, and highland moments from Hatton.",
    images: ["/images/blog/tree-hugging/tree-hugging-1.webp"],
  },
};

export default function BlogPage() {
  return (
    <main id="main-content" className="bg-white">
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(16,185,129,0.24),transparent_40%)]" />

        <div className="relative z-10 px-6 pt-5 md:px-10 lg:px-16 lg:pt-7">
          <SectionReveal>
            <SiteNavbar navItems={primaryNavItems} bookHikeUrl={bookHikeUrl} theme="dark" />
          </SectionReveal>
        </div>

        <div className="relative z-10 container pb-14 pt-16 lg:pb-20 lg:pt-20">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-amber-200">Hiking Friends Blog</p>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <h1 className="font-luxury mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Stories, guides, and highland moments from Hatton
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.14}>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
              Explore local insights on trails, tea country culture, and slow travel experiences curated by the Hiking Friends
              team.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Featured Article</p>
          <h2 className="font-luxury mt-3 text-3xl text-slate-900 sm:text-4xl">Start Here</h2>
        </SectionReveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => (
            <SectionReveal key={post.title} delay={0.06 + index * 0.06}>
              <article className="h-full overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:shadow-md">
                <div className="relative aspect-[4/3]">
                  <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">{post.tag}</p>
                  <h3 className="font-luxury mt-3 text-2xl text-slate-900">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.description}</p>
                  <Link
                    href={post.href}
                    className="mt-5 inline-flex rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700"
                  >
                    Read Article
                  </Link>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
