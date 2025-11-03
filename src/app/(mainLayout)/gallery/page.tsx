"use client";

import React from "react";
import LightGallery from "lightgallery/react";

// ✅ Import all the plugins you want
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgShare from "lightgallery/plugins/share";

// ✅ Import all required CSS files
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-autoplay.css";
import "./style.css";

import Image from "next/image";
import { useLanguage } from "@/provider/LanguageProvider";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import Container from "@/components/share/Container";
import { sortByDate } from "@/utils/sort";
import { TImgGallery } from "@/types/type";


const Page = () => {
  const { language } = useLanguage();
  const [galleryData, setGalleryData] = React.useState<TImgGallery[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery?limit=10000`,
          { cache: "no-store" }
        );
        const data = await response.json();
        setGalleryData(data.data?.galleries || []);
      } catch {
        setError("Failed to fetch gallery data.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const title = language === "ENG" ? "Image Gallery" : "ফটো গ্যালারি";
  const sortedGalleryData = sortByDate(galleryData, "date");

  return (
    <>
      <CommonBanner title={title} />

      <div className="App my-10">
        <Container>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <LightGallery
              plugins={[lgThumbnail, lgZoom, lgFullscreen, lgAutoplay, lgShare]}
              speed={500}
              elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
              // Optional settings
              download={true}
              mode="lg-slide"
              closable={true}
              escKey={true}
              counter={true}
              hideBarsDelay={5000}
            >
              {sortedGalleryData?.map((data) => (
                <a
                  key={data._id}
                  href={data.thumnailImages?.[0]}
                  data-sub-html={` 
      <h4 class='text-white'>${data.title_of_english}</h4>
      <p class='text-gray-300'>${data.title_of_bangla || ""}</p>
    `}
                  className="block group relative overflow-hidden rounded-lg cursor-pointer"
                >
                  {/* Image */}
                  {data.thumnailImages?.[0] && (
                    <>
                      <Image
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                        src={data.thumnailImages[0]}
                        alt={data.title_of_english}
                        width={500}
                        height={300}
                      />

                      {/* Dark Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Title at Bottom of Image */}
                      <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="text-white font-semibold text-lg">
                          {language === "ENG"
                            ? data.title_of_english
                            : data.title_of_bangla || data.title_of_english}
                        </h3>
                      </div>
                    </>
                  )}
                </a>
              ))}


            </LightGallery>
          )}
        </Container>
      </div>
    </>
  );
};

export default Page;


