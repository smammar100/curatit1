"use client";

import { ImageCollection } from "@/lib/types";
import { useParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  collections: ImageCollection[];
  className?: string;
}

export function CategoryFilter({
  collections,
  className,
}: CategoryFilterProps) {
  const params = useParams<{ collection: string }>();

  return (
    <div className={cn("bg-muted rounded-lg py-4 px-3", className)}>
      <h3 className="font-semibold mb-4">Categories</h3>
      <ul className="flex flex-col gap-1">
        <li>
          <Link
            className={cn(
              "text-left w-full font-sm cursor-pointer transition-all transform hover:translate-x-1",
              !params.collection ? "font-medium translate-x-1" : ""
            )}
            href="/gallery"
            aria-label="View all images"
            prefetch
          >
            All Images
          </Link>
        </li>
        {collections.map((collection) => {
          const isSelected = params.collection === collection.handle;
          return (
            <li key={collection.handle}>
              <Link
                className={cn(
                  "text-left w-full font-sm cursor-pointer transition-all transform hover:translate-x-1",
                  isSelected ? "font-medium translate-x-1" : ""
                )}
                href={`/gallery/${collection.handle}`}
                aria-pressed={isSelected}
                aria-label={`Filter by category: ${collection.title}`}
                prefetch
              >
                {collection.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}