"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionReveal from "@/components/section-reveal";

type GalleryItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: "Adam's Peak",
    description:
      "A world-renowned mountain sanctuary near Hatton, offering spiritual heritage, cool highland air, and unforgettable sunrise views.",
    src: "/images/photo-gallery/adams-peak.webp",
    alt: "Sunrise landscape at Adam's Peak",
  },
  {
    title: "Adisham Bungalow",
    description:
      "A timeless colonial retreat in the hill country, known for elegant architecture, peaceful gardens, and a heritage atmosphere.",
    src: "/images/photo-gallery/adisham-bungalow.webp",
    alt: "Adisham Bungalow and surrounding gardens",
  },
  {
    title: "Devon Falls",
    description:
      "Set amid rolling tea estates, Devon Falls is a graceful natural landmark celebrated for misty beauty and scenic hill-country views.",
    src: "/images/photo-gallery/devon falls.webp",
    alt: "Devon Falls flowing through tea country",
  },
  {
    title: "Laxapana Falls",
    description:
      "One of Sri Lanka's most striking waterfalls, with dramatic cascades, lush surroundings, and serene highland appeal.",
    src: "/images/photo-gallery/laxpana.webp",
    alt: "Laxapana Falls in the hill country",
  },
];

function getLoopedIndex(index: number, total: number) {
  return (index % total + total) % total;
}

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideMotion = {
    initial: { opacity: 0, y: 14, scale: 0.985 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.985 },
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const },
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryItems.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const activeItem = galleryItems[activeIndex];
  const desktopSlots = [-2, -1, 0, 1, 2].map((offset) => {
    const itemIndex = getLoopedIndex(activeIndex + offset, galleryItems.length);
    return {
      item: galleryItems[itemIndex],
      itemIndex,
      offset,
    };
  });

  return (
    <section id="gallery" className="container py-16 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Photo Gallery</p>
        </SectionReveal>
        <SectionReveal delay={0.04}>
          <h2 className="font-luxury mt-3 text-3xl text-slate-900 sm:text-4xl">
            See What Your Hatton Adventure Could Look Like
          </h2>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.06}>
        <div className="mx-auto mt-10 container px-3 py-6 sm:px-6 lg:px-8">
        <div className="hidden items-end justify-center gap-3 xl:gap-4 lg:flex">
          {desktopSlots.map(({ item, itemIndex, offset }, index) => {
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;
            const cardWidthClass =
              absOffset === 0
                ? "w-[11rem] xl:w-[18rem]"
                : absOffset === 1
                  ? "w-[9rem] xl:w-[16rem] hover:cursor-pointer"
                  : "w-[7rem] xl:w-[14rem] hover:cursor-pointer";
            const opacityClass =
              absOffset === 0 ? "opacity-100" : absOffset === 1 ? "opacity-65" : "opacity-45";

            return (
              <SectionReveal key={`${item.title}-${offset}`} delay={0.08 + index * 0.03}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(itemIndex)}
                  className={`shrink-0 rounded-[20px] transition-all duration-500 ${cardWidthClass} ${opacityClass} ${
                    isCenter ? "-translate-y-2" : "translate-y-2"
                  }`}
                  aria-label={`Show ${item.title}`}
                >
                  <div className="overflow-hidden rounded-[20px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                    <div className="relative aspect-2/3">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={1000}
                        height={1000}
                        className="object-cover"
                        sizes="(max-width: 1279px) 0px, 2200px"
                      />
                    </div>
                  </div>
                </button>
              </SectionReveal>
            );
          })}
        </div>

        <div className="mx-auto mt-4 hidden max-w-136 text-center lg:block">
          <AnimatePresence mode="wait">
            <motion.div key={`desktop-copy-${activeIndex}`} {...slideMotion}>
              <h3 className="font-luxury text-2xl text-slate-900">{activeItem.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">{activeItem.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setActiveIndex((activeIndex + 1) % galleryItems.length)}
            className="block w-full"
            aria-label={`Show ${activeItem.title}`}
          >
            <div className="mx-auto max-w-[18rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`mobile-image-${activeIndex}`}
                  {...slideMotion}
                  className="overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
                >
                  <div className="relative aspect-2/3 overflow-hidden rounded-[20px]">
                    <Image
                      src={activeItem.src}
                      alt={activeItem.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1023px) 80vw, 0px"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </button>

          <div className="mx-auto mt-4 max-w-sm text-center">
            <AnimatePresence mode="wait">
              <motion.div key={`mobile-copy-${activeIndex}`} {...slideMotion}>
                <h3 className="font-luxury text-2xl text-slate-900">{activeItem.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">{activeItem.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {galleryItems.map((item, index) => (
            <SectionReveal key={item.title} delay={0.08 + index * 0.02}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to ${item.title}`}
                className={
                  activeIndex === index
                    ? "h-2.5 w-8 rounded-full bg-amber-600 transition-all duration-300"
                    : "h-2.5 w-2.5 rounded-full bg-amber-200 transition-all duration-300 hover:bg-amber-300"
                }
              />
            </SectionReveal>
          ))}
        </div>
      </div>
      </SectionReveal>
    </section>
  );
}
