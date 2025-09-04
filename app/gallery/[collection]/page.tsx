import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollectionByHandle, getImagesByCollection, getCollections } from "@/lib/data";
import { GalleryContent } from "../components/gallery-content";
import { PageLayout } from "@/components/layout/page-layout";
import { CategoryFilter } from "../components/category-filter";
import { MobileFilters } from "../components/mobile-filters";
import { GalleryProvider } from "../providers/gallery-provider";

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collection = getCollectionByHandle(params.collection);

  if (!collection) {
    return {
      title: "Collection Not Found",
      description: "The requested collection could not be found.",
    };
  }

  return {
    title: collection.title,
    description: collection.description,
  };
}

export default async function CollectionPage(props: {
  params: Promise<{ collection: string }>;
}) {
  const params = await props.params;
  
  const collection = getCollectionByHandle(params.collection);
  const images = getImagesByCollection(params.collection);
  const collections = getCollections();

  if (!collection) {
    return notFound();
  }

  const collectionsForFilter = collections.filter(c => c.handle !== collection.handle);

  return (
    <PageLayout>
      <GalleryProvider>
        <div className="contents md:grid md:grid-cols-12 md:gap-6">
          {/* Desktop Sidebar */}
          <aside className="max-md:hidden col-span-3 h-screen sticky top-0 p-6 pt-20 md:pt-36 flex flex-col gap-4">
            <CategoryFilter collections={collectionsForFilter} />
          </aside>

          {/* Mobile Filters */}
          <MobileFilters collections={collectionsForFilter} />

          {/* Main Content */}
          <main className="col-span-9 px-6 pt-20 md:pt-36 pb-10">
            <GalleryContent 
              images={images} 
              collections={collections}
            />
          </main>
        </div>
      </GalleryProvider>
    </PageLayout>
  );
}