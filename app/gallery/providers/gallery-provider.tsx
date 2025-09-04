"use client";

import { ImageItem } from "@/lib/types";
import { createContext, useContext, useState, ReactNode } from "react";

interface GalleryContextType {
  images: ImageItem[];
  setImages: (images: ImageItem[]) => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<ImageItem[]>([]);

  return (
    <GalleryContext.Provider value={{ images, setImages }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
}