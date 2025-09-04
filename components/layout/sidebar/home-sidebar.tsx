import { ShopLinks } from "../shop-links";
import { ImageCollection } from "@/lib/types";

interface HomeSidebarProps {
  collections: ImageCollection[];
}

export function HomeSidebar({ collections }: HomeSidebarProps) {
  return (
    <aside className="max-md:hidden col-span-4 h-screen sticky top-0 p-6 pt-20 md:pt-36 flex flex-col justify-between">
      <div>
        <p className="italic tracking-tighter text-base">
          Curated. Beautiful. Inspiring.
        </p>
        <div className="mt-5 text-base leading-tight">
          <p>Photography that speaks to the soul.</p>
          <p>Captured moments, shared stories.</p>
          <p>Beauty in every frame.</p>
        </div>
      </div>
      <ShopLinks collections={collections} label="Browse" />
    </aside>
  );
}