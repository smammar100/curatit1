"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ImageCollection } from "@/lib/types";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CategoryFilter } from "./category-filter";
import { useGallery } from "../providers/gallery-provider";
import ResultsControls from "./results-controls";

interface MobileFiltersProps {
  collections: ImageCollection[];
  className?: string;
}

export function MobileFilters({ collections, className }: MobileFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { images } = useGallery();

  return (
    <div className="pt-20 md:pt-36 bg-background sticky top-0 z-10 md:hidden overflow-x-clip">
      <ResultsControls
        className="px-6"
        collections={collections}
        images={images}
      />

      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className={cn("relative", className)}
      >
        {/* Always visible header */}
        <div className="flex items-center justify-between px-4 py-3">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="font-semibold text-foreground">
              Filters
              {isOpen ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>

          <Button
            size="sm"
            variant="ghost"
            className="font-medium text-foreground/50 hover:text-foreground/60"
            asChild
          >
            <Link href="/gallery" prefetch>
              Clear
            </Link>
          </Button>
        </div>

        {/* Collapsible content */}
        <CollapsibleContent className="absolute top-full left-0 right-0 bg-background border-b px-4 pb-4 space-y-4 z-20">
          <CategoryFilter collections={collections} />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}