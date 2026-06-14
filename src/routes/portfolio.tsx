import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Portfolio } from "@/components/site/Portfolio";
import { Signature } from "@/components/site/Signature";
import { BookingCTA } from "@/components/site/BookingCTA";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Royal Shoot Photography" },
      {
        name: "description",
        content:
          "A curated portfolio of weddings, pre-wedding shoots, fashion editorials, portraits and cinematic films by Royal Shoot Photography.",
      },
      { property: "og:title", content: "Portfolio — Royal Shoot Photography" },
      {
        property: "og:description",
        content: "Editorial chapters from weddings, fashion and cinematic films.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteShell>
      <div className="bg-ink pt-40 pb-8 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center justify-center gap-3">
            <span className="hairline" />
            <span className="eyebrow">The Work</span>
            <span className="hairline" />
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
            A decade in <em className="gold-gradient-text not-italic">frames</em>.
          </h1>
        </div>
      </div>
      <Portfolio />
      <Signature />
      <BookingCTA />
    </SiteShell>
  );
}
