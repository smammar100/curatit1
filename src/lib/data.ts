import type { ImageItem, ImageCollection } from "./types";

// Beautiful image collection with Unsplash images
export const images: ImageItem[] = [
  // Nature
  {
    id: "mountain-landscape",
    handle: "mountain-landscape",
    title: "Mountain Landscape",
    description: "Breathtaking mountain vista with morning light",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "nature",
    photographer: "Sebastián León Prado",
    unsplashId: "photo-1506905925346-21bda4d32df4",
  },
  {
    id: "forest-path",
    handle: "forest-path",
    title: "Forest Path",
    description: "Serene forest trail in golden hour",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    category: "nature",
    photographer: "David Marcu",
    unsplashId: "photo-1441974231531-c6227db76b6e",
  },
  {
    id: "ocean-waves",
    handle: "ocean-waves",
    title: "Ocean Waves",
    description: "Powerful ocean waves crashing on the shore",
    imageUrl: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
    category: "nature",
    photographer: "Silas Baisch",
    unsplashId: "photo-1505142468610-359e7d316be0",
  },
  {
    id: "desert-sunset",
    handle: "desert-sunset",
    title: "Desert Sunset",
    description: "Golden sand dunes at sunset",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
    category: "nature",
    photographer: "Casey Horner",
    unsplashId: "photo-1509316785289-025f5b846b35",
  },

  // Architecture
  {
    id: "modern-building",
    handle: "modern-building",
    title: "Modern Architecture",
    description: "Clean lines and contemporary design",
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop",
    category: "architecture",
    photographer: "Ryan Koorenny",
    unsplashId: "photo-1486718448742-163732cd1544",
  },
  {
    id: "glass-building",
    handle: "glass-building",
    title: "Glass Tower",
    description: "Reflective glass facade reaching to the sky",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "architecture",
    photographer: "Pedro Lastra",
    unsplashId: "photo-1449824913935-59a10b8d2000",
  },
  {
    id: "historic-architecture",
    handle: "historic-architecture",
    title: "Historic Building",
    description: "Classical architecture with ornate details",
    imageUrl: "https://images.unsplash.com/photo-1520637836862-4d197d17c11a?w=800&h=600&fit=crop",
    category: "architecture",
    photographer: "Anastase Maragos",
    unsplashId: "photo-1520637836862-4d197d17c11a",
  },
  {
    id: "spiral-staircase",
    handle: "spiral-staircase",
    title: "Spiral Staircase",
    description: "Elegant curved staircase design",
    imageUrl: "https://images.unsplash.com/photo-1521013363569-7336fdb4645b?w=800&h=600&fit=crop",
    category: "architecture",
    photographer: "Nathan Van Egmond",
    unsplashId: "photo-1521013363569-7336fdb4645b",
  },

  // Abstract
  {
    id: "color-splash",
    handle: "color-splash",
    title: "Color Explosion",
    description: "Vibrant abstract color patterns",
    imageUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
    category: "abstract",
    photographer: "Pawel Czerwinski",
    unsplashId: "photo-1557672172-298e090bd0f1",
  },
  {
    id: "geometric-shapes",
    handle: "geometric-shapes",
    title: "Geometric Forms",
    description: "Bold geometric shapes and shadows",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
    category: "abstract",
    photographer: "Joel Filipe",
    unsplashId: "photo-1550745165-9bc0b252726f",
  },
  {
    id: "light-patterns",
    handle: "light-patterns",
    title: "Light Patterns",
    description: "Mesmerizing light and shadow interplay",
    imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
    category: "abstract",
    photographer: "Altınay Dinç",
    unsplashId: "photo-1558591710-4b4a1ae0f04d",
  },
  {
    id: "fluid-art",
    handle: "fluid-art",
    title: "Fluid Art",
    description: "Flowing abstract patterns",
    imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop",
    category: "abstract",
    photographer: "Irina Iriser",
    unsplashId: "photo-1541701494587-cb58502866ab",
  },

  // Urban
  {
    id: "city-street",
    handle: "city-street",
    title: "City Streets",
    description: "Urban life in motion",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "urban",
    photographer: "Pedro Lastra",
    unsplashId: "photo-1449824913935-59a10b8d2000",
  },
  {
    id: "neon-lights",
    handle: "neon-lights",
    title: "Neon Nights",
    description: "Vibrant city lights after dark",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    category: "urban",
    photographer: "Efe Kurnaz",
    unsplashId: "photo-1518709268805-4e9042af2176",
  },
  {
    id: "subway-station",
    handle: "subway-station",
    title: "Underground",
    description: "Modern subway station architecture",
    imageUrl: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop",
    category: "urban",
    photographer: "Mikael Blomkvist",
    unsplashId: "photo-1544966503-7cc5ac882d5f",
  },
  {
    id: "street-art",
    handle: "street-art",
    title: "Street Art",
    description: "Colorful urban street art",
    imageUrl: "https://images.unsplash.com/photo-1569701762119-0e7f3fdc23c8?w=800&h=600&fit=crop",
    category: "urban",
    photographer: "Dan Cristian Pădureț",
    unsplashId: "photo-1569701762119-0e7f3fdc23c8",
  },

  // Portrait
  {
    id: "portrait-one",
    handle: "portrait-one",
    title: "Natural Light",
    description: "Portrait in beautiful natural lighting",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=800&h=600&fit=crop",
    category: "portrait",
    photographer: "Michael Dam",
    unsplashId: "photo-1494790108755-2616b612b77c",
  },
  {
    id: "portrait-two",
    handle: "portrait-two",
    title: "Street Portrait",
    description: "Candid street photography moment",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    category: "portrait",
    photographer: "Aziz Acharki",
    unsplashId: "photo-1507003211169-0a1dd7228f2d",
  },
  {
    id: "portrait-three",
    handle: "portrait-three",
    title: "Creative Portrait",
    description: "Artistic portrait with creative lighting",
    imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&h=600&fit=crop",
    category: "portrait",
    photographer: "Ayo Ogunseinde",
    unsplashId: "photo-1463453091185-61582044d556",
  },
  {
    id: "portrait-four",
    handle: "portrait-four",
    title: "Studio Portrait",
    description: "Professional studio photography",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=600&fit=crop",
    category: "portrait",
    photographer: "Max Bender",
    unsplashId: "photo-1508214751196-bcfd4ca60f91",
  },
];

export const collections: ImageCollection[] = [
  {
    id: "nature",
    handle: "nature",
    title: "Nature",
    description: "Stunning landscapes and natural beauty",
    images: images.filter(img => img.category === "nature"),
  },
  {
    id: "architecture", 
    handle: "architecture",
    title: "Architecture",
    description: "Modern and historic architectural photography",
    images: images.filter(img => img.category === "architecture"),
  },
  {
    id: "abstract",
    handle: "abstract",
    title: "Abstract",
    description: "Creative abstract compositions and patterns",
    images: images.filter(img => img.category === "abstract"),
  },
  {
    id: "urban",
    handle: "urban",
    title: "Urban",
    description: "City life and urban environments",
    images: images.filter(img => img.category === "urban"),
  },
  {
    id: "portrait",
    handle: "portrait",
    title: "Portrait",
    description: "Human stories captured through photography",
    images: images.filter(img => img.category === "portrait"),
  },
  {
    id: "featured",
    handle: "featured",
    title: "Featured",
    description: "Our most captivating images",
    images: images.slice(0, 6),
  },
];

export function getImages(): ImageItem[] {
  return images;
}

export function getCollections(): ImageCollection[] {
  return collections;
}

export function getImagesByCollection(handle: string): ImageItem[] {
  if (handle === "all") {
    return images;
  }
  
  const collection = collections.find(c => c.handle === handle);
  return collection?.images || [];
}

export function getImageByHandle(handle: string): ImageItem | null {
  return images.find(img => img.handle === handle) || null;
}

export function getCollectionByHandle(handle: string): ImageCollection | null {
  return collections.find(c => c.handle === handle) || null;
}