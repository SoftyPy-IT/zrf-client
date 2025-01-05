"use client";
import React, { useState, useCallback } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from "next/image";
import { useLanguage } from "@/provider/LanguageProvider";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { TImgGallery } from "@/types/type";
import Container from "@/components/share/Container";
import CloseIcon from "@mui/icons-material/Close";

const CustomCloseButton = ({ onClose }: { onClose: () => void }) => (
  <button
    type="button"
    className="closeIcon absolute top-[0%]  right-[50%] z-[10000] p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    onClick={onClose}
    aria-label="Close lightbox"
  >
    <CloseIcon style={{ fontSize: '24px' }} />
  </button>
);

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();
  const [galleryData, setGalleryData] = React.useState<TImgGallery[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchAffiliationData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery?limit=10000`,
          { cache: "no-store" },
        );
        const data = await response.json();
        setGalleryData(data.data?.galleries || []);
      } catch (err) {
        setError("Failed to fetch gallery data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAffiliationData();
  }, []);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
  }, [galleryData]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + galleryData.length - 1) % galleryData.length
    );
  }, [galleryData]);

  const title = language === "ENG" ? "Image Gallery" : "ফটো গ্যালারি";

  return (
    <>
      <CommonBanner title={title} />
      <div className="App my-10">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {galleryData?.map((data, index) => (
              <div
                key={data._id}
                className="cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {data.thumnailImages.length > 0 && (
                  <Image
                    className="w-full h-[300px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                    src={data.thumnailImages[0]}
                    alt={data.title_of_english}
                    width={500}
                    height={500}
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {isOpen && galleryData[currentIndex]?.thumnailImages?.length > 0 && (
        <div className="relative">
          <CustomCloseButton onClose={closeLightbox} />
          <Lightbox
            mainSrc={galleryData[currentIndex].thumnailImages[0]}
            nextSrc={galleryData[(currentIndex + 1) % galleryData.length]?.thumnailImages[0]}
            prevSrc={galleryData[(currentIndex + galleryData.length - 1) % galleryData.length]?.thumnailImages[0]}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={prevImage}
            onMoveNextRequest={nextImage}
            enableZoom={false}

          />
        </div>
      )}
    </>
  );
};

export default Page;

