import { createFileRoute } from "@tanstack/react-router";
import { CategoryGallery } from "@/components/site/CategoryGallery";
import { preWeddingImages } from "@/lib/gallery-data";

export const Route = createFileRoute("/pre-wedding-gallery")({
  head: () => ({
    meta: [
      { title: "Pre-Wedding Gallery — Royal Shoot Photography" },
      { name: "description", content: "Romantic pre-wedding shoots across breathtaking locations — captured with cinematic intimacy." },
      { property: "og:title", content: "Pre-Wedding Gallery — Royal Shoot Photography" },
      { property: "og:description", content: "Romantic pre-wedding shoots across breathtaking locations." },
    ],
    links: [{ rel: "canonical", href: "/pre-wedding-gallery" }],
  }),
  component: () => (
    <CategoryGallery
      eyebrow="Pre-Wedding"
      title="Love stories,"
      highlight="unposed."
      description="Editorial pre-wedding films and stills shot across hills, oceans and quiet studios."
      images={preWeddingImages}
    />
  ),
});
