import { createFileRoute } from "@tanstack/react-router";
import { CategoryGallery } from "@/components/site/CategoryGallery";
import { eventImages } from "@/lib/gallery-data";

export const Route = createFileRoute("/event-gallery")({
  head: () => ({
    meta: [
      { title: "Event Gallery — Royal Shoot Photography" },
      { name: "description", content: "Elegant event coverage — galas, soirées, corporate evenings and private celebrations." },
      { property: "og:title", content: "Event Gallery — Royal Shoot Photography" },
      { property: "og:description", content: "Elegant event coverage — galas, soirées and private celebrations." },
    ],
    links: [{ rel: "canonical", href: "/event-gallery" }],
  }),
  component: () => (
    <CategoryGallery
      eyebrow="Events"
      title="Evenings made"
      highlight="memorable."
      description="From intimate gatherings to grand galas — coverage that captures the rhythm of the night."
      images={eventImages}
    />
  ),
});
