import { HomeSidebar } from "@/components/layout/sidebar/home-sidebar";
import { PageLayout } from "@/components/layout/page-layout";
import { FeaturedImageCard } from "@/components/gallery/featured-image-card";
import { Badge } from "@/components/ui/badge";
import { getImagesByCollection, getCollections } from "@/lib/data";

export default function Home() {
  const featuredImages = getImagesByCollection("featured");
  const collections = getCollections();

  const [firstImage, ...restImages] = featuredImages;

  return (
    <PageLayout>
      <div className="contents md:grid md:grid-cols-12 md:gap-6">
        <HomeSidebar collections={collections} />
        <div className="col-span-8 flex flex-col md:grid grid-cols-2 w-full relative">
          <div className="fixed top-0 left-0 w-full base-grid py-6 pointer-events-none z-10">
            <div className="col-start-5 col-span-8">
              <div className="px-6 hidden lg:block">
                <Badge variant="outline-secondary">featured gallery</Badge>
              </div>
            </div>
          </div>
          {featuredImages.length > 0 && (
            <>
              {firstImage && (
                <FeaturedImageCard
                  className="col-span-2"
                  image={firstImage}
                  featured
                />
              )}
              {restImages.map((image, index) => (
                <FeaturedImageCard
                  className="col-span-1"
                  key={image.id}
                  image={image}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}