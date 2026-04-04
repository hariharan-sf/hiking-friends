"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionReveal from "@/components/section-reveal";

const packages = [
  {
    title: "Hiking and Trekking",
    description: "Iconic Hatton hikes for sunrise views, ridge walks, and scenic trails.",
    activities: ["Pekoe trail", "Adam's Peak visit", "Morning walk"],
    details:
      "Perfect for travelers who want guided trail experiences with flexible pace and local route knowledge.",
    inquiryText: "Hi Hiking Friends, I want to book the Hiking and Trekking package in Hatton.",
    imageSrc: "/images/trekking/trekking.webp",
    imageAlt: "Group hiking through tea estate trails in Hatton",
  },
  {
    title: "Tea Tour",
    description: "Hands-on tea culture experience from field to factory in Hatton.",
    activities: [
      "Tea estate tour - Walk amongst the tea estate",
      "Tea plucking experience",
      "Tea factory visit",
      "Local tea community meet (pluckers)",
    ],
    details:
      "Ideal for visitors who want to understand Ceylon tea production and connect with local tea-growing communities.",
    inquiryText: "Hi Hiking Friends, I want to book the Tea Tour package in Hatton.",
    imageSrc: "/images/tea-tour/tea-tour.webp",
    imageAlt: "Tea field walk with local tea community in Hatton",
  },
  {
    title: "Tuktuk Tour",
    description: "A scenic ride through tea-country landmarks, waterfalls, and local life.",
    activities: [
      "Melsnter Tea Castle",
      "St. Clair Waterfall",
      "Gadmore Waterfall",
      "Devon Waterfall",
      "Local market visit",
    ],
    details:
      "Great for relaxed exploration with multiple stop points, scenic viewpoints, and easy access for all ages.",
    inquiryText: "Hi Hiking Friends, I want to book the Tuktuk Tour package in Hatton.",
    imageSrc: "/images/photo-gallery/laxpana.webp",
    imageAlt: "Scenic waterfall stop during a tuktuk tour in Hatton",
  },
];

const whatsappUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20view%20all%20hiking%20packages%20in%20Hatton.";

export default function FeaturedPackages() {
  const [selectedPackage, setSelectedPackage] = useState<(typeof packages)[number] | null>(null);
  const selectedPackageWhatsappUrl = selectedPackage
    ? `https://wa.me/94774989745?text=${encodeURIComponent(selectedPackage.inquiryText)}`
    : whatsappUrl;

  useEffect(() => {
    if (!selectedPackage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPackage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPackage]);

  return (
    <>
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
              <button
                type="button"
                onClick={() => setSelectedPackage(item)}
                className="h-full w-full rounded-2xl border border-amber-100 bg-white p-4 text-left shadow-sm transition hover:border-amber-200 hover:shadow-md"
              >
                {item.imageSrc ? (
                  <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl">
                    <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                  </div>
                ) : (
                  <div className="mb-4 flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-amber-200 bg-amber-50/40 px-4 text-center text-xs text-slate-600">
                    Tap to view more details
                  </div>
                )}
                <h3 className="font-luxury text-2xl text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <p className="mt-4 text-sm font-semibold text-amber-700">View More</p>
              </button>
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

      {selectedPackage ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-3 sm:items-center sm:p-6"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedPackage.title} details`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="font-luxury text-3xl text-slate-900">{selectedPackage.title}</h3>
              <button
                type="button"
                onClick={() => setSelectedPackage(null)}
                className="rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Close
              </button>
            </div>

            <p className="text-sm leading-relaxed text-slate-600">{selectedPackage.details}</p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-800">Included Activities</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                {selectedPackage.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </div>

            <a
              href={selectedPackageWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 sm:w-auto"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
