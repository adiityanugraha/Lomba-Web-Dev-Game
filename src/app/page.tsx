import Hero from "@/components/home/Hero";
import FeatureTeaser from "@/components/home/FeatureTeaser";
import MediaSection from "@/components/home/MediaSection";
import AvailableOn from "@/components/home/AvailableOn";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <section aria-label="Features teaser" className="py-16 md:py-24">
          <FeatureTeaser />
        </section>
        <section aria-label="Media" className="border-t border-border py-16 md:py-24">
          <MediaSection />
        </section>
        <section aria-label="Platforms" className="border-t border-border py-16 md:py-24">
          <AvailableOn />
        </section>
      </div>
    </main>
  );
}
