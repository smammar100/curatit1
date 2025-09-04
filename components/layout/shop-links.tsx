import Link from "next/link";
import { ImageCollection } from "@/lib/types";

interface ShopLinksProps {
  collections: ImageCollection[];
  align?: "left" | "right";
  label?: string;
}

export function ShopLinks({
  collections,
  label = "Browse",
  align = "left",
}: ShopLinksProps) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <h4 className="font-extrabold text-lg md:text-xl">{label}</h4>

      <ul className="flex flex-col gap-1.5 leading-5 mt-5">
        {collections.map((collection) => (
          <li key={collection.handle}>
            <Link href={`/gallery/${collection.handle}`} prefetch className="hover:underline">
              {collection.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}