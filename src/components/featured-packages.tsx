"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionReveal from "@/components/section-reveal";
import { packages } from "@/data/packages";

const whatsappUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20view%20all%20hiking%20packages%20in%20Hatton.";
const featuredPackageTitles = new Set([
  "Hiking and Trekking",
  "Pekoe Trail Hike",
  "Adam's Peak Visit",
  "Tea Tour",
  "Tuktuk Tour",
  "Kayaking",
]);

export default function FeaturedPackages() {
  const featuredPackages = packages.filter((item) => featuredPackageTitles.has(item.title));
  const [selectedPackage, setSelectedPackage] = useState<(typeof packages)[number] | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const selectedPackageWhatsappUrl = selectedPackage
    ? `https://wa.me/94774989745?text=${encodeURIComponent(selectedPackage.inquiryText)}`
    : whatsappUrl;

  useEffect(() => {
    if (!selectedPackage) {
      return;
    }

    previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPackage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocusedElementRef.current?.focus();
    };
  }, [selectedPackage]);

  useEffect(() => {
    if (!selectedPackage) {
      return;
    }

    const images = selectedPackage.gallery?.length ? selectedPackage.gallery : [selectedPackage.imageSrc];
    const timer = window.setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [selectedPackage]);

  return (
    <>
      <section id="packages" aria-labelledby="packages-heading" className="container py-16 lg:py-24">
        <SectionReveal>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Featured Packages</p>
              <h2 id="packages-heading" className="font-luxury mt-3 text-3xl text-slate-900 sm:text-4xl">
                Explore Hatton With Expert Local Guides
              </h2>
            </div>
          </div>
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featuredPackages.map((item, index) => (
            <SectionReveal key={item.title} delay={0.04 + index * 0.04}>
              <button
                type="button"
                onClick={() => {
                  setCarouselIndex(0);
                  setSelectedPackage(item);
                }}
                className="h-full w-full rounded-2xl border border-amber-100 bg-white p-4 text-left shadow-sm transition hover:border-amber-200 hover:shadow-md"
              >
                {item.imageSrc ? (
                  <div className="relative mb-4 aspect-4/3 overflow-hidden rounded-xl">
                    <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                  </div>
                ) : (
                  <div className="mb-4 flex aspect-4/3 items-center justify-center rounded-xl border border-dashed border-amber-200 bg-amber-50/40 px-4 text-center text-xs text-slate-600">
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Get more information
            </a>
            <a
              href="/packages"
              className="inline-flex rounded-full border border-amber-300 px-6 py-3 text-sm font-semibold text-amber-800 transition hover:bg-amber-100"
            >
              Show More Packages
            </a>
          </div>
        </SectionReveal>
      </section>

      {selectedPackage ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-3 sm:items-center sm:p-6"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl md:h-[60vh] md:max-h-[92vh]"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="package-modal-title"
            aria-describedby="package-modal-details"
          >
            <div className="grid max-h-[90vh] md:h-[60vh] md:max-h-[92vh] md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
              <div className="overflow-y-auto p-5 sm:p-7 justify-center items-start flex flex-col relative">
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelectedPackage(null)}
                  className="rounded-full absolute top-5 left-5 border mb-5 border-slate-200 px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  aria-label="Close package details modal"
                >
                  Close
                </button>
                <div className="mb-4 flex items-start justify-between w-full gap-4">
                  <h3 id="package-modal-title" className="font-luxury text-3xl text-slate-900">
                    {selectedPackage.title}
                  </h3>
                </div>

                <p id="package-modal-details" className="text-sm leading-relaxed text-slate-600">
                  {selectedPackage.details}
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-800">Included Activities</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                    {selectedPackage.activities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>

                {selectedPackage.benefits?.length ? (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-800">Benefits</h4>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                      {selectedPackage.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <span className="text-sm text-slate-600 pt-4 block">For more information, please contact us via WhatsApp.</span>


                <a
                  href={selectedPackageWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 sm:w-auto"
                >
                  Book via WhatsApp
                </a>
              </div>

              <div className="relative border-t border-amber-100 bg-amber-50/40 md:border-l md:border-t-0">
                <div className="relative aspect-10/16 overflow-hidden md:h-full md:aspect-auto">
                  <div
                    className="flex h-full transition-transform duration-700 ease-out"
                    style={{
                      transform: `translateX(-${carouselIndex * 100}%)`,
                    }}
                  >
                    {(selectedPackage.gallery?.length ? selectedPackage.gallery : [selectedPackage.imageSrc]).map((src) => (
                      <div key={src} className="relative h-full min-w-full">
                        <Image src={src} alt={selectedPackage.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-1.5">
                  {(selectedPackage.gallery?.length ? selectedPackage.gallery : [selectedPackage.imageSrc]).map((src, index) => (
                    <button
                      key={`${src}-${index}`}
                      type="button"
                      onClick={() => setCarouselIndex(index)}
                      className={`h-2 w-2 rounded-full transition ${index === carouselIndex ? "bg-white" : "bg-white/50"}`}
                      aria-label={`Show image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
