import { getImagesByCollection, getCollections } from "@/lib/data";
import { GalleryContent } from "./components/gallery-content";
import { PageLayout } from "@/components/layout/page-layout";
import { CategoryFilter } from "./components/category-filter";
import { MobileFilters } from "./components/mobile-filters";
import { GalleryProvider } from "./providers/gallery-provider";

export const metadata = {
  title: "Photo Gallery",
  description: "Browse our collection of beautiful photography.",
};

export default function GalleryPage() {
  const images = getImagesByCollection("all");
  const collections = getCollections();

  return (
    <PageLayout>
      <GalleryProvider>
        <div className="contents md:grid md:grid-cols-12 md:gap-6">
          {/* Desktop Sidebar */}
          <aside className="max-md:hidden col-span-3 h-screen sticky top-0 p-6 pt-20 md:pt-36 flex flex-col gap-4">
            <CategoryFilter collections={collections} />
          </aside>

          {/* Mobile Filters */}
          <MobileFilters collections={collections} />

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