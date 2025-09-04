import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageItem } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export const ImageCard = ({ image }: { image: ImageItem }) => {
  return (
    <div className="relative w-full aspect-[4/3] bg-muted group overflow-hidden rounded-lg">
      <Link
        href={`/gallery/${image.id}`}
        className="block size-full focus-visible:outline-none"
        aria-label={`View ${image.title} by ${image.photographer}`}
        prefetch
      >
        <Image
          src={image.imageUrl}
          alt={image.title}
          width={600}
          height={450}
          className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
          quality={90}
        />
      </Link>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-white border-white/30 bg-white/10">
              {image.category}
            </Badge>
          </div>
          <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
          <p className="text-white/90 text-sm mb-2">{image.description}</p>
          <p className="text-white/70 text-xs">by {image.photographer}</p>
        </div>
      </div>
    </div>
  );
};