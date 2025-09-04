export interface NavItem {
  label: string;
  href: string;
}

export interface ImageItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  photographer: string;
  unsplashId: string;
}

export interface ImageCollection {
  id: string;
  handle: string;
  title: string;
  description: string;
  images: ImageItem[];
}