import CtaSection from "@/components/cta-section";
import DiscoverHatton from "@/components/discover-hatton";
import FaqSection from "@/components/faq-section";
import FeaturedPackages from "@/components/featured-packages";
import Hero from "@/components/hero";
import PhotoGallery from "@/components/photo-gallery";
import WhyHikeUs from "@/components/why-hike-us";

export default function Home() {
  return (
    <main id="main-content" className="bg-white">
      <Hero />
      <FeaturedPackages />
      <WhyHikeUs />
      <DiscoverHatton />
      <PhotoGallery />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
