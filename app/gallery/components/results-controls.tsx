"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";
import { ImageCollection, ImageItem } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function ResultsControls({
  collections,
  images,
  className,
}: {
  collections: Pick<ImageCollection, "handle" | "title">[];
  images: ImageItem[];
  className?: string;
}) {
  const params = useParams<{ collection: string }>();

  const renderCategoryBreadcrumb = () => {
    if (params.collection === undefined) return "All Images";
    const collection = collections.find((c) => c.handle === params.collection);
    return collection?.title;
  };

  return (
    <div
      className={cn(
        "grid grid-cols-2 items-center w-full mb-6 pr-6",
        className
      )}
    >
      {/* Breadcrumb */}
      <Breadcrumb className="ml-1">
        <BreadcrumbList>
          <BreadcrumbItem className="text-foreground/50 cursor-pointer hover:text-foreground/70">
            <BreadcrumbLink href="/gallery" className="font-semibold">
              Gallery
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage className="font-semibold">
            {renderCategoryBreadcrumb()}
          </BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Results count */}
      <span className="text-foreground/50 text-sm place-self-end">
        {images.length} images
      </span>
    </div>
  );
}