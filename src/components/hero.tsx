import Image from "next/image";
import SectionReveal from "@/components/section-reveal";

const navItems = [
  { label: "About Us", href: "#about-hatton" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
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
              <div className="rounded-full border border-white/35 bg-white/20 px-4 py-3 backdrop-blur-md lg:px-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/logo-shf.png"
                    alt="Hiking Friends Sri Lanka logo"
                    width={34}
                    height={34}
                    className="h-12 w-12 rounded-full object-cover lg:h-9 lg:w-9"
                  />
                  <span className="font-luxury text-lg tracking-wide lg:text-xl lg:block hidden">Hiking Friends</span>
                </div>

                <nav className="hidden items-center gap-7 text-sm text-white/95 lg:flex">
                  {navItems.map((item) => (
                    <a key={item.label} href={item.href} className="transition hover:text-amber-200">
                      {item.label}
                    </a>
                  ))}
                </nav>

                <a
                  href={bookHikeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600 lg:px-6"
                >
                  Book a Hike
                </a>
              </div>
              </div>
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
                  Hike Above the Misty Tea Valleys of Hatton
                </h1>
              </SectionReveal>
              <SectionReveal delay={0.16}>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/95 sm:text-base">
                  Sunrise climbs, hidden waterfalls, and ridge trails around Castlereagh Reservoir. Discover Hatton with local
                  guides who know every turn.
                </p>
              </SectionReveal>
            </div>

            <div className="hidden lg:grid lg:grid-cols-2 lg:items-end lg:gap-10">
              <SectionReveal delay={0.08}>
                <div className="max-w-2xl">
                  <p className="mb-4 text-sm uppercase tracking-[0.34em] text-amber-200">Hatton, Sri Lanka</p>
                  <h1 className="font-luxury text-6xl leading-[1.05] text-white xl:text-7xl">
                    Unforgettable Hiking Moments in Hatton
                  </h1>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.14}>
                <div className="ml-auto max-w-md">
                  <p className="text-xl leading-relaxed text-white/95">
                    Trek through tea estates, cloud-kissed ridgelines, and quiet lakeside paths. Every Hatton trail is a story
                    carved into the highlands.
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
