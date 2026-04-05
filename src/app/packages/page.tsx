"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import SectionReveal from "@/components/section-reveal";
import SiteNavbar from "@/components/site-navbar";
import { primaryNavItems } from "@/data/navigation";
import { packages } from "@/data/packages";

const bookHikeUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20book%20a%20Hatton%20hike.";

export default function PackagesPage() {
  const [query, setQuery] = useState("");

  const filteredPackages = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) {
      return packages;
    }

    return packages.filter((item) => {
      const searchable = [item.title, item.description, item.details, ...item.activities, ...(item.benefits ?? [])]
        .join(" ")
        .toLowerCase();
      return searchable.includes(search);
    });
  }, [query]);

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
            <p className="text-xs uppercase tracking-[0.32em] text-amber-200">All Packages</p>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <h1 className="font-luxury mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Find the Right Hatton Experience
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.14}>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
              Search and browse all Hiking Friends packages including hiking, tours, wellness, and local activities.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="container py-10 lg:py-14">
        <SectionReveal>
          <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4 sm:p-5">
            <label htmlFor="package-search" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Search Packages
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                id="package-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by package, activity, or benefit"
                className="h-12 w-full rounded-xl border border-amber-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500"
              />
              <p className="text-sm font-medium text-slate-700">{filteredPackages.length} packages</p>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredPackages.map((item, index) => {
            const packageWhatsappUrl = `https://wa.me/94774989745?text=${encodeURIComponent(item.inquiryText)}`;
            return (
              <SectionReveal key={item.title} delay={0.04 + index * 0.03}>
                <article className="h-full overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:border-amber-200 hover:shadow-md">
                  <div className="relative aspect-[4/3]">
                    <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h2 className="font-luxury text-2xl text-slate-900">{item.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>

                    <div className="mt-4">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-800">Included Activities</h3>
                      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                        {item.activities.slice(0, 3).map((activity) => (
                          <li key={activity}>{activity}</li>
                        ))}
                      </ul>
                    </div>

                    {item.benefits?.length ? (
                      <div className="mt-4">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-800">Benefits</h3>
                        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                          {item.benefits.slice(0, 2).map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <a
                      href={packageWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700"
                    >
                      Book via WhatsApp
                    </a>
                  </div>
                </article>
              </SectionReveal>
            );
          })}
        </div>

        {filteredPackages.length === 0 ? (
          <SectionReveal>
            <div className="mt-8 rounded-2xl border border-amber-100 bg-white p-6 text-center text-slate-700">
              No packages found for <span className="font-semibold">&quot;{query}&quot;</span>. Try a different keyword.
            </div>
          </SectionReveal>
        ) : null}
      </section>
    </main>
  );
}
