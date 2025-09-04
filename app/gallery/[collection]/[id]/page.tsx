import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getImageByHandle, getCollectionByHandle } from "@/lib/data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function generateMetadata(props: {
  params: Promise<{ collection: string; id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const image = getImageByHandle(params.id);

  if (!image) return notFound();

  return {
    title: image.title,
    description: image.description,
  };
}

export default async function ImagePage(props: {
  params: Promise<{ collection: string; id: string }>;
}) {
  const params = await props.params;
  const image = getImageByHandle(params.id);

  if (!image) return notFound();

  const collection = getCollectionByHandle(image.category);

  return (
    <PageLayout className="bg-muted">
      <div className="flex flex-col md:grid md:grid-cols-12 md:gap-6">
        {/* Mobile Image */}
        <div className="md:hidden col-span-full h-[60vh] min-h-[400px]">
          <Image
            src={image.imageUrl}
            alt={image.title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="col-span-5 flex flex-col 2xl:col-span-4 max-md:col-span-full md:h-screen max-md:p-6 md:pl-6 md:pt-36 sticky max-md:static top-0">
          <div className="col-span-full">
            <Breadcrumb className="col-span-full mb-3 md:mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/gallery" prefetch>
                      Gallery
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {collection && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href={`/gallery/${collection.handle}`} prefetch>
                          {collection.title}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{image.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex flex-col gap-6 col-span-full mb-10 max-md:order-2">
              <div className="rounded bg-card py-4 px-4 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{image.category}</Badge>
                </div>
                <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-balance">
                  {image.title}
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed">{image.description}</p>
                
                <div className="pt-2">
                  <p className="text-sm font-medium mb-2">Photographer</p>
                  <p className="text-lg font-semibold">{image.photographer}</p>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full gap-2"
                asChild
              >
                <a 
                  href={`https://unsplash.com/photos/${image.unsplashId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Unsplash
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block col-start-6 col-span-7 w-full overflow-y-auto relative">
          <Image
            src={image.imageUrl}
            alt={image.title}
            width={1200}
            height={800}
            className="w-full object-cover"
            quality={100}
          />
        </div>
      </div>
    </PageLayout>
  );
}