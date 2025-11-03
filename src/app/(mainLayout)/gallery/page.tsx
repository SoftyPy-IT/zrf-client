"use client";
import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeViewer = () => setIsOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {sortedGalleryData.map((data, index) => (
                <div
                  key={data._id}
                  className="cursor-pointer relative overflow-hidden rounded-lg group"
                  onClick={() => openViewer(index)}
                >
                  {data.thumnailImages?.[0] && (
                    <Image
                      src={data.thumnailImages[0]}
                      alt={data.title_of_english}
                      width={500}
                      height={300}
                      className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>

      {/* Custom Lightbox */}
      {isOpen && sortedGalleryData[currentIndex]?.thumnailImages?.[0] && (
        <div className="fixed inset-0 z-[10000] bg-black bg-opacity-90 flex items-center justify-center p-4 md:p-10">
          <button
            className="absolute top-4 right-4 text-white bg-red-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 transition"
            onClick={closeViewer}
          >
            ×
          </button>

          <button
            className="absolute left-4 text-white text-3xl md:text-5xl font-bold"
            onClick={prevImage}
          >
            ‹
          </button>

          <div className="max-w-full max-h-full flex items-center justify-center">
            <Image
              src={sortedGalleryData[currentIndex].thumnailImages[0]}
              alt={sortedGalleryData[currentIndex].title_of_english}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-md"
            />
          </div>

          <button
            className="absolute right-4 text-white text-3xl md:text-5xl font-bold"
            onClick={nextImage}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default Page;
