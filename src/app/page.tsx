import Hero from "@/components/home/Hero";
import TrailerSection from "@/components/home/TrailerSection";
import FeatureTeaser from "@/components/home/FeatureTeaser";
import MediaSection from "@/components/home/MediaSection";
import AvailableOn from "@/components/home/AvailableOn";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <TrailerSection />
        <section aria-label="Features teaser" className="border-t border-border py-16 md:py-24">
          <FeatureTeaser />
        </section>
        <section aria-label="Media" className="border-t border-border py-16 md:py-24">
          <MediaSection />
        </section>
      </div>
      <AvailableOn />
    </main>
  );
}
