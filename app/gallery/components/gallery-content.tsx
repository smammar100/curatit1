"use client";

import { useEffect } from "react";
import { ImageItem, ImageCollection } from "@/lib/types";
import { useGallery } from "../providers/gallery-provider";
import { ImageCard } from "./image-card";
import { Suspense } from "react";
import ResultsControls from "./results-controls";

interface GalleryContentProps {
  images: ImageItem[];
  collections: Pick<ImageCollection, "handle" | "title">[];
}

export function GalleryContent({
  images,
  collections,
}: GalleryContentProps) {
  const { setImages } = useGallery();

  // Set images in the provider whenever they change
  useEffect(() => {
    setImages(images);
  }, [images, setImages]);

  return (
    <>
      <Suspense>
        <ResultsControls
          className="max-md:hidden"
          collections={collections}
          images={images}
        />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </>
  );
}