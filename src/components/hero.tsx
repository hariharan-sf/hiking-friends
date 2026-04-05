import Image from "next/image";
import SectionReveal from "@/components/section-reveal";
import SiteNavbar from "@/components/site-navbar";
import { primaryNavItems } from "@/data/navigation";
const bookHikeUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20book%20a%20Hatton%20hike.";

export default function Hero() {
  const heroImage = "/images/hero-desktop.webp";
  const heroImageMobile = "/images/hero-mobile.webp";

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <Image
        src={heroImage}
        alt="Aerial view of hikers above tea-covered valleys in Hatton, Sri Lanka"
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 z-0 hidden h-full w-full object-cover lg:block"
      />
      <Image
        src={heroImageMobile}
        alt="Hikers overlooking sunrise over Castlereagh Reservoir in Hatton"
        width={1080}
        height={1920}
        priority
        className="absolute inset-0 z-0 h-full w-full object-cover lg:hidden"
      />

      <div className="absolute inset-0 z-10 bg-linear-to-r from-black/55 via-black/20 to-black/10 lg:from-black/50 lg:via-black/20 lg:to-transparent" />
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/50 via-transparent to-black/10 lg:from-black/35" />

      <div className="relative z-20 flex min-h-screen flex-col">
        <header className="pt-5 lg:pt-7">
          <div className="container">
            <SectionReveal>
              <SiteNavbar navItems={primaryNavItems} bookHikeUrl={bookHikeUrl} theme="dark" />
            </SectionReveal>
          </div>
        </header>

        <div className="container flex flex-1 items-end pb-14 lg:pb-20">
          <div className="w-full">
            <div className="max-w-xl lg:hidden">
              <SectionReveal delay={0.08}>
                <p className="mb-3 text-xs uppercase tracking-[0.32em] text-amber-200">Hatton, Sri Lanka</p>
              </SectionReveal>
              <SectionReveal delay={0.12}>
                <h1 className="font-luxury text-4xl leading-[1.1] text-white sm:text-5xl">
                  Explore the Best Experiences in Hatton
                </h1>
              </SectionReveal>
              <SectionReveal delay={0.16}>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/95 sm:text-base">
                  Hiking, tea tours, Adam&apos;s Peak visits, wellness sessions, water adventures, and local sightseeing with
                  trusted local guides.
                </p>
              </SectionReveal>
            </div>

            <div className="hidden lg:grid lg:grid-cols-2 lg:items-end lg:gap-10">
              <SectionReveal delay={0.08}>
                <div className="max-w-2xl">
                  <p className="mb-4 text-sm uppercase tracking-[0.34em] text-amber-200">Hatton, Sri Lanka</p>
                  <h1 className="font-luxury text-6xl leading-[1.05] text-white xl:text-7xl">
                    Unforgettable Hatton Experiences
                  </h1>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.14}>
                <div className="ml-auto max-w-md">
                  <p className="text-xl leading-relaxed text-white/95">
                    From trekking trails to tea-country tours and mindful wellness sessions, discover Hatton with curated
                    packages for every type of traveler.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>

        <SectionReveal delay={0.2}>
          <div className="pointer-events-none absolute bottom-7 right-5 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-white/20 backdrop-blur-sm lg:bottom-8 lg:right-10">
            <span aria-hidden className="text-3xl leading-none text-white/95">
              ↓
            </span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
