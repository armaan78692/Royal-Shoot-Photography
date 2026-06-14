import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { BookingCTA } from "@/components/site/BookingCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Royal Shoot Photography" },
      {
        name: "description",
        content:
          "Meet Aarav Mehta and the Royal Shoot Photography team — a small, devoted crew turning moments into timeless memories.",
      },
      { property: "og:title", content: "About — Royal Shoot Photography" },
      {
        property: "og:description",
        content: "Photographer & filmmaker Aarav Mehta on craft, light, and storytelling.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <div className="bg-ink pt-40 pb-8 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center justify-center gap-3">
            <span className="hairline" />
            <span className="eyebrow">The Studio</span>
            <span className="hairline" />
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
            A studio built on <em className="gold-gradient-text not-italic">light</em>.
          </h1>
        </div>
      </div>
      <About />
      <Stats />
      <Testimonials />
      <BookingCTA />
    </SiteShell>
  );
}
