"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SectionReveal from "@/components/section-reveal";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";

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
  // {
  //   title: "Adisham Bungalow",
  //   description:
  //     "A timeless colonial retreat in the hill country, known for elegant architecture, peaceful gardens, and a heritage atmosphere.",
  //   src: "/images/photo-gallery/adisham-bungalow.webp",
  //   alt: "Adisham Bungalow and surrounding gardens",
  // },
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
  // {
  //   title: "Adam's Peak",
  //   description:
  //     "A world-renowned mountain sanctuary near Hatton, offering spiritual heritage, cool highland air, and unforgettable sunrise views.",
  //   src: "/images/photo-gallery/adams-peak.webp",
  //   alt: "Sunrise landscape at Adam's Peak",
  // },
  // {
  //   title: "Adisham Bungalow",
  //   description:
  //     "A timeless colonial retreat in the hill country, known for elegant architecture, peaceful gardens, and a heritage atmosphere.",
  //   src: "/images/photo-gallery/adisham-bungalow.webp",
  //   alt: "Adisham Bungalow and surrounding gardens",
  // },
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
  {
    title: "Adam's Peak",
    description:
      "A world-renowned mountain sanctuary near Hatton, offering spiritual heritage, cool highland air, and unforgettable sunrise views.",
    src: "/images/photo-gallery/adams-peak.webp",
    alt: "Sunrise landscape at Adam's Peak",
  },
  // {
  //   title: "Adisham Bungalow",
  //   description:
  //     "A timeless colonial retreat in the hill country, known for elegant architecture, peaceful gardens, and a heritage atmosphere.",
  //   src: "/images/photo-gallery/adisham-bungalow.webp",
  //   alt: "Adisham Bungalow and surrounding gardens",
  // },
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
  {
    title: "Adam's Peak",
    description:
      "A world-renowned mountain sanctuary near Hatton, offering spiritual heritage, cool highland air, and unforgettable sunrise views.",
    src: "/images/photo-gallery/adams-peak.webp",
    alt: "Sunrise landscape at Adam's Peak",
  },
  // {
  //   title: "Adisham Bungalow",
  //   description:
  //     "A timeless colonial retreat in the hill country, known for elegant architecture, peaceful gardens, and a heritage atmosphere.",
  //   src: "/images/photo-gallery/adisham-bungalow.webp",
  //   alt: "Adisham Bungalow and surrounding gardens",
  // },
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

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const desktopSwiperRef = useRef<SwiperType | null>(null);
  const mobileSwiperRef = useRef<SwiperType | null>(null);
  const totalItems = galleryItems.length;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateBreakpoint = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateBreakpoint();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateBreakpoint);
      return () => mediaQuery.removeEventListener("change", updateBreakpoint);
    }

    mediaQuery.addListener(updateBreakpoint);
    return () => mediaQuery.removeListener(updateBreakpoint);
  }, []);

  useEffect(() => {
    if (!copyRef.current) return;
    gsap.fromTo(copyRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" });
  }, [activeIndex]);

  useEffect(() => {
    desktopSwiperRef.current?.slideToLoop(activeIndex, 0, false);
    mobileSwiperRef.current?.slideToLoop(activeIndex, 0, false);
  }, [activeIndex]);

  const getShortestSteps = (from: number, to: number) => {
    const forward = (to - from + totalItems) % totalItems;
    const backward = forward - totalItems;
    return Math.abs(forward) <= Math.abs(backward) ? forward : backward;
  };

  const handleMove = (steps: number) => {
    if (steps === 0) return;

    const activeSwiper = isDesktop ? desktopSwiperRef.current : mobileSwiperRef.current;
    if (!activeSwiper) return;

    if (steps > 0) {
      for (let i = 0; i < steps; i += 1) {
        activeSwiper.slideNext();
      }
      return;
    }

    for (let i = 0; i < Math.abs(steps); i += 1) {
      activeSwiper.slidePrev();
    }
  };

  const moveToIndex = (targetIndex: number) => {
    const normalizedTarget = ((targetIndex % totalItems) + totalItems) % totalItems;
    const activeSwiper = isDesktop ? desktopSwiperRef.current : mobileSwiperRef.current;

    if (!activeSwiper) {
      desktopSwiperRef.current?.slideToLoop(normalizedTarget);
      mobileSwiperRef.current?.slideToLoop(normalizedTarget);
      setActiveIndex(normalizedTarget);
      return;
    }

    const steps = getShortestSteps(activeIndex, normalizedTarget);
    handleMove(steps);
  };

  const activeItem = galleryItems[activeIndex];
  const desktopSlides =
    totalItems < 6
      ? [...galleryItems, ...galleryItems, ...galleryItems].map((item, idx) => ({
          ...item,
          originalIndex: idx % totalItems,
          uid: `${item.title}-${idx}`,
        }))
      : galleryItems.map((item, idx) => ({ ...item, originalIndex: idx, uid: `${item.title}-${idx}` }));

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="container py-16 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Photo Gallery</p>
        </SectionReveal>
        <SectionReveal delay={0.04}>
          <h2 id="gallery-heading" className="font-luxury mt-3 text-3xl text-slate-900 sm:text-4xl">
            See What Your Hatton Adventure Could Look Like
          </h2>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.06}>
        <div className="mx-auto mt-10 container px-3 py-6 sm:px-6 lg:px-8">
          <div className="hidden lg:block">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop
              centeredSlides
              speed={760}
              grabCursor
              watchSlidesProgress
              autoplay={isDesktop ? { delay: 4000, disableOnInteraction: false } : false}
              slidesPerView={3.2}
              spaceBetween={14}
              // loopedSlides={desktopSlides.length}
              // loopAdditionalSlides={desktopSlides.length}
              breakpoints={{
                1280: { slidesPerView: 3.6, spaceBetween: 16 },
              }}
              onSwiper={(swiper) => {
                desktopSwiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                if (isDesktop) {
                  setActiveIndex(swiper.realIndex % totalItems);
                }
              }}
              className=""
            >
              {desktopSlides.map((item) => (
                <SwiperSlide key={`desktop-${item.uid}`}>
                  {({ isActive, isPrev, isNext }) => {
                    const stateClass = isActive
                      ? "opacity-100 scale-100 -translate-y-2"
                      : isPrev || isNext
                        ? "opacity-65 scale-[0.92] translate-y-2"
                        : "opacity-40 scale-[0.84] translate-y-3";
                    return (
                      <button
                        type="button"
                        onClick={() => {
                          moveToIndex(item.originalIndex);
                        }}
                        className={`w-full rounded-[20px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${stateClass}`}
                        aria-label={`Show ${item.title}`}
                      >
                        <div className="overflow-hidden rounded-[20px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                          <div className="relative aspect-[2/3]">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              width={1000}
                              height={1000}
                              className="h-full w-full object-cover"
                              sizes="(max-width: 1279px) 28vw, 20vw"
                            />
                          </div>
                        </div>
                      </button>
                    );
                  }}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div ref={copyRef} className="mx-auto mt-4 hidden max-w-[34rem] text-center lg:block">
            <h3 className="font-luxury text-2xl text-slate-900">{activeItem.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-500">{activeItem.description}</p>
          </div>

          <div className="lg:hidden">
            <Swiper
              modules={[Autoplay]}
              loop
              speed={700}
              slidesPerView={1}
              spaceBetween={14}
              autoplay={!isDesktop ? { delay: 4000, disableOnInteraction: false } : false}
              onSwiper={(swiper) => {
                mobileSwiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                if (!isDesktop) {
                  setActiveIndex(swiper.realIndex % totalItems);
                }
              }}
              className="mx-auto max-w-[18rem]"
            >
              {galleryItems.map((item) => (
                <SwiperSlide key={`mobile-${item.title}`}>
                  <div className="overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                    <div className="relative aspect-[2/3] overflow-hidden rounded-[20px]">
                      <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 1023px) 80vw, 0px" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mx-auto mt-4 max-w-sm text-center">
              <h3 className="font-luxury text-2xl text-slate-900">{activeItem.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">{activeItem.description}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {galleryItems.map((item, index) => (
              <SectionReveal key={item.title} delay={0.08 + index * 0.02}>
                <button
                  type="button"
                  onClick={() => {
                    moveToIndex(index);
                  }}
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
