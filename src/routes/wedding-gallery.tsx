import { createFileRoute } from "@tanstack/react-router";
import { CategoryGallery } from "@/components/site/CategoryGallery";
import { weddingImages } from "@/lib/gallery-data";

export const Route = createFileRoute("/wedding-gallery")({
  head: () => ({
    meta: [
      { title: "Wedding Gallery — Royal Shoot Photography" },
      { name: "description", content: "Cinematic wedding photography — sacred vows, candid joy, and timeless frames captured with care." },
      { property: "og:title", content: "Wedding Gallery — Royal Shoot Photography" },
      { property: "og:description", content: "Cinematic wedding photography — sacred vows, candid joy, and timeless frames." },
    ],
    links: [{ rel: "canonical", href: "/wedding-gallery" }],
  }),
  component: () => (
    <CategoryGallery
      eyebrow="Wedding Stories"
      title="Sacred vows."
      highlight="Timeless frames."
      description="A curated collection from weddings we've had the honour of photographing — from quiet rituals to grand celebrations."
      images={weddingImages}
    />
  ),
});
