"use client";

import BNPButton from "@/components/Button";
import Container from "@/components/share/Container";
import { useResponsiveButtonSize } from "@/hooks/useResponsiveButtonSize";
import { useLanguage } from "@/provider/LanguageProvider";
import { TImgGallery } from "@/types/type";
import { formatDate } from "@/utils/formateDate";
import {
  Close,
  KeyboardDoubleArrowRight,
  Pause,
  PlayArrow,
} from "@mui/icons-material";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const PhotoGallery = () => {
  const { language } = useLanguage();
  const [galleryData, setGalleryData] = useState<TImgGallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    date: string;
  } | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const buttonSize = useResponsiveButtonSize();
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery?limit=4`,
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
    fetchGalleryData();
  }, []);

  // Extract all images for slideshow
  const allImages = galleryData.flatMap((gallery) =>
    (gallery.thumnailImages || []).map((img) => ({
      src: img,
      title:
        language === "ENG" ? gallery.title_of_english : gallery.title_of_bangla,
      date: gallery.date || gallery.createdAt,
    })),
  );

  // Auto-play logic
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (allImages.length > 0) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % allImages.length);
      }, 4000);
    }
  }, [allImages.length]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isAutoPlaying && allImages.length > 0) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying, allImages.length, startAutoPlay, stopAutoPlay]);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 sectionMargin">
        <Container>
          <div className="h-96 w-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-2xl"></div>
        </Container>
      </div>
    );
  }

  const mobileData = galleryData.slice(0, 2);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-10">
      <Container>
        <div className="text-center mb-5 md:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-emerald-600 bg-clip-text text-transparent">
              {language === "ENG" ? "Photo Gallery" : "ফটো গ্যালারি"}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto rounded-full"></div>

        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-4 auto-rows-[260px]">
            {galleryData.map((data, index) => {
              const isLarge = index === 0;
              const isMedium = index === 1;
              const thumbnail = data.thumnailImages?.[0];
              const title =
                language === "ENG"
                  ? data.title_of_english
                  : data.title_of_bangla;

              return (
                <div
                  key={data._id}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => {
                    if (thumbnail) {
                      setSelectedImage({
                        src: thumbnail,
                        title: title || "",
                        date: data.date || data.createdAt,
                      });
                    }
                  }}
                  className={`
                    relative group overflow-hidden rounded-xl cursor-pointer
                    transition-all duration-500 hover:shadow-2xl hover:-translate-y-1
                    ${isLarge ? "col-span-2 row-span-2" : ""}
                    ${isMedium ? "col-span-2" : "col-span-1"}
                  `}
                >
                  {thumbnail ? (
                    <>
                      <Image
                        src={thumbnail}
                        alt={title || "Gallery"}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1200px) 33vw, 25vw"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                        <p className="text-xs text-white/60 mb-1">
                          {formatDate(data.date || data.createdAt)}
                        </p>
                        <h4
                          className={`font-semibold text-white line-clamp-2 ${isLarge ? "text-lg" : "text-sm"}`}
                        >
                          {title}
                        </h4>

                        {/* Hover Reveal */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ${hoveredCard === index ? "max-h-10 mt-2" : "max-h-0"}`}
                        >
                          <span className="text-xs text-amber-400 flex items-center gap-1">
                            {language === "ENG"
                              ? "View Details"
                              : "বিস্তারিত দেখুন"}
                            <KeyboardDoubleArrowRight sx={{ fontSize: 12 }} />
                          </span>
                        </div>
                      </div>

                      {/* Border Effect */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-xl pointer-events-none transition-all duration-300" />
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========== MOBILE VIEW (2x2 Grid + Carousel) ========== */}
        <div className="md:hidden">
          {/* Mobile Carousel */}
          {allImages.length > 0 && (
            <div className="relative mb-6 rounded-xl overflow-hidden">
              <div className="relative w-full pt-[75%] bg-gray-800">
                <Image
                  src={allImages[currentSlide].src}
                  alt="Gallery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xs line-clamp-1">
                  {allImages[currentSlide].title}
                </p>
              </div>
              <div className="absolute bottom-2 right-2 flex gap-1">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center"
                >
                  {isAutoPlaying ? (
                    <Pause className="text-white text-xs" />
                  ) : (
                    <PlayArrow className="text-white text-xs" />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Mobile Grid - 2x2 */}
          <div className="grid grid-cols-2 gap-3">
            {mobileData.map((data, index) => {
              const thumbnail = data.thumnailImages?.[0];
              return (
                <div
                  key={data._id}
                  onClick={() => {
                    if (thumbnail) {
                      setSelectedImage({
                        src: thumbnail,
                        title:
                          language === "ENG"
                            ? data.title_of_english
                            : data.title_of_bangla,
                        date: data.date || data.createdAt,
                      });
                    }
                  }}
                  className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
                >
                  {thumbnail && (
                    <>
                      <Image
                        src={thumbnail}
                        alt="Gallery"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white text-[10px] line-clamp-1">
                          {language === "ENG"
                            ? data.title_of_english
                            : data.title_of_bangla}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex justify-end mt-8 md:mt-12">
          <BNPButton
            href="/gallery"
            language={language}
            variant="primary"
            size={buttonSize}
            showIcon={true}
            iconPosition="right"
            customIcon={<KeyboardDoubleArrowRight sx={{ fontSize: "10px" }} />}
          >
            {language === "ENG" ? "See All Gallery" : "সব গ্যালারি দেখুন"}
          </BNPButton>
        </div>
      </Container>


      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <Close className="text-white text-2xl" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full pt-[75%]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white font-semibold">
                {selectedImage.title}
              </h3>
              <p className="text-white/60 text-sm mt-1">
                {formatDate(selectedImage.date)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
