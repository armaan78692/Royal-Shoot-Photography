import { createFileRoute } from "@tanstack/react-router";
import { CategoryGallery } from "@/components/site/CategoryGallery";
import { fashionImages } from "@/lib/gallery-data";

export const Route = createFileRoute("/fashion-gallery")({
  head: () => ({
    meta: [
      { title: "Fashion Gallery — Royal Shoot Photography" },
      { name: "description", content: "High-fashion editorials, lookbooks and campaign work crafted with cinematic light." },
      { property: "og:title", content: "Fashion Gallery — Royal Shoot Photography" },
      { property: "og:description", content: "High-fashion editorials and campaign work." },
    ],
    links: [{ rel: "canonical", href: "/fashion-gallery" }],
  }),
  component: () => (
    <CategoryGallery
      eyebrow="Model Shoot"
      title="Editorial light,"
      highlight="bold form."
      description="Lookbooks, campaigns and couture editorials with our signature cinematic palette."
      images={fashionImages}
    />
  ),
});
