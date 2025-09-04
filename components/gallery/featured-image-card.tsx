import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImageItem } from "@/lib/types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface FeaturedImageCardProps {
  image: ImageItem;
  featured?: boolean;
  className?: string;
}

export function FeaturedImageCard({
  image,
  featured = false,
  className,
}: FeaturedImageCardProps) {
  if (featured) {
    return (
      <div className={cn("h-fold flex flex-col relative", className)}>
        <Link
          href={`/gallery/${image.id}`}
          className="size-full group"
          prefetch
        >
          <Image
            priority
            src={image.imageUrl}
            alt={image.title}
            width={1200}
            height={800}
            quality={90}
            className="object-cover size-full group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="absolute bottom-0 left-0 grid w-full grid-cols-4 gap-6 pointer-events-none max-md:contents p-6">
          <div className="col-span-3 col-start-2 pointer-events-auto 2xl:col-start-3 2xl:col-span-2 shrink-0 p-4 bg-white/90 backdrop-blur-sm w-fit md:rounded-md flex flex-col gap-3">
            <Badge className="w-fit">Featured</Badge>
            <Link
              href={`/gallery/${image.id}`}
              className="text-xl font-semibold hover:underline"
            >
              {image.title}
            </Link>
            <p className="text-sm text-muted-foreground">{image.description}</p>
            <p className="text-xs text-muted-foreground">by {image.photographer}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative aspect-square", className)}>
      href={`/gallery/${image.category}/${image.handle}`}
        href={`/gallery/${image.id}`}
        className="block w-full h-full group"
        prefetch
      >
        <Image
          src={image.imageUrl}
          alt={image.title}
          width={600}
          height={600}
          className="object-cover size-full group-hover:scale-105 transition-transform duration-500"
          quality={90}
        />
      </Link>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
        <h3 className="text-white font-semibold text-lg">{image.title}</h3>
        <p className="text-white/80 text-sm">{image.description}</p>
        <p className="text-white/60 text-xs mt-1">by {image.photographer}</p>
      </div>
    </div>
  );
}