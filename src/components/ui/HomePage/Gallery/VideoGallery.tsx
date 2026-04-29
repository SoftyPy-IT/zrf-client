import BNPButton from "@/components/Button";
import { useLanguage } from "@/provider/LanguageProvider";
import { TVideo, VideoSlideProps } from "@/types/type";
import { PlayArrow } from "@mui/icons-material";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './Gallery.css';
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });


const getYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;
  const shortMatch = url.match(/youtu\.be\/([^?#&]+)/);
  if (shortMatch) return shortMatch[1];
  const longMatch = url.match(/[?&]v=([^?#&]+)/);
  if (longMatch) return longMatch[1];
  return null;
};


const getYouTubeThumbnail = (url: string): string | null => {
  const id = getYouTubeVideoId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
};



const VideoSlide: React.FC<VideoSlideProps> = React.memo(
  ({ video, idx, language, onOpenModal }) => {
    const [isActive, setIsActive] = useState(false);
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    const thumbnailUrl = getYouTubeThumbnail(video.video_url);
    const title =
      language === "ENG" ? video.video_title_english : video.video_title_bangla;

    const handleActivate = () => {
      setIsActive(true);
    };

    return (
      <div className="relative group rounded-xl md:rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          {!isActive && (
            <div
              className="absolute inset-0 cursor-pointer active:scale-95 transition-transform duration-150"
              onClick={handleActivate}
            >
              {thumbnailUrl ? (
                <Image
                  src={thumbnailUrl}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 70vw, 60vw"
                  priority={idx === 0}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
              )}


              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#FEC909] rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(254,201,9,0.5)]">
                  <PlayArrow
                    className="text-[#216740]"
                    style={{ fontSize: "clamp(28px, 5vw, 44px)" }}
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold line-clamp-2">
                  {title}
                </h3>
              </div>
            </div>
          )}

          {isActive && (
            <div className="absolute inset-0 bg-black">

              {!isPlayerReady && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-black">
                  <div className="w-12 h-12 border-4 border-[#FEC909] border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              <ReactPlayer
                url={video.video_url}
                width="100%"
                height="100%"
                controls
                playing
                config={{
                  playerVars: {
                    modestbranding: 1,
                    rel: 0,
                    fs: 1,
                    autoplay: 1,
                    playsinline: 1,
                  },
                }}
                onReady={() => setIsPlayerReady(true)}
                onError={() => setIsPlayerReady(true)}
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          )}
        </div>
        {!isActive && (
          <button
            type="button"
            onClick={(e) => onOpenModal(video, e)}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-black/50 backdrop-blur-md text-white text-[10px] sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
          >
            {language === "ENG" ? "Full View" : "বড় করুন"}
          </button>
        )}
      </div>
    );
  }
);

VideoSlide.displayName = "VideoSlide";

const VideoGallery: React.FC = () => {
  const [videos, setVideos] = useState<TVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dataFetched, setDataFetched] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState<TVideo | null>(null);
  const [isClient, setIsClient] = useState(false);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    setIsClient(true);
    if (dataFetched) return;

    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/videos?limit=10`,
          { cache: "no-store" }
        );
        const data = await response.json();
        const videoList: TVideo[] = data.data?.videos || [];
        setVideos(videoList);
        setDataFetched(true);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to fetch videos data.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [dataFetched]);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  const handleThumbnailClick = useCallback((index: number) => {
    mainSwiperRef.current?.slideTo(index);
  }, []);

  const openModal = useCallback(
    (video: TVideo, e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setModalVideo(video);
      setIsModalOpen(true);
    },
    []
  );

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalVideo(null);
  }, []);


  if (loading) {
    return (
      <div className="w-full py-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl">
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-[#216740] border-t-transparent rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-[#FEC909] border-b-transparent rounded-full animate-spin" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full py-8 md:py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 md:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#216740] via-[#FEC909] to-[#216740] bg-clip-text text-transparent">
              {language === "ENG" ? "Video Gallery" : "ভিডিও গ্যালারি"}
            </span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#216740] via-[#FEC909] to-[#216740] mx-auto rounded-full" />

        </div>
        <div className="relative mb-6 md:mb-8">
          <Swiper
            onSwiper={(swiper) => {
              mainSwiperRef.current = swiper;
            }}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            modules={[
              EffectCoverflow,
              Pagination,
              Navigation,
              Autoplay,
              Thumbs,
            ]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            className="video-swiper"
            onSlideChange={handleSlideChange}
            thumbs={{ swiper: thumbsSwiper }}
            breakpoints={{
              320: { spaceBetween: 10 },
              640: { spaceBetween: 20 },
              1024: { spaceBetween: 30 },
            }}
          >
            {videos.map((video, idx) => (
              <SwiperSlide
                key={video._id}
                className="!w-[85%] md:!w-[70%] lg:!w-[60%]"
              >
                <VideoSlide
                  video={video}
                  idx={idx}
                  language={language}
                  onOpenModal={openModal}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-6 md:mt-8">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={3}
            freeMode
            watchSlidesProgress
            modules={[Thumbs, FreeMode]}
            breakpoints={{
              320: { slidesPerView: 3, spaceBetween: 8 },
              480: { slidesPerView: 4, spaceBetween: 10 },
              640: { slidesPerView: 5, spaceBetween: 12 },
              768: { slidesPerView: 6, spaceBetween: 12 },
              1024: { slidesPerView: 7, spaceBetween: 16 },
            }}
            className="thumbnail-swiper"
          >
            {videos.map((video, idx) => {
              const thumbnailUrl = getYouTubeThumbnail(video.video_url);
              const title =
                language === "ENG"
                  ? video.video_title_english
                  : video.video_title_bangla;
              return (
                <SwiperSlide key={video._id}>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleThumbnailClick(idx)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleThumbnailClick(idx)
                    }
                    className={`
                      relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300
                      ${activeIndex === idx
                        ? "ring-2 ring-[#FEC909] ring-offset-1 sm:ring-offset-2 scale-105 opacity-100"
                        : "opacity-60 hover:opacity-100"
                      }
                      active:scale-95
                    `}
                  >
                    <div className="relative w-full h-12 sm:h-16 md:h-20 bg-gray-800">
                      {thumbnailUrl ? (
                        <Image
                          src={thumbnailUrl}
                          alt={title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 480px) 25vw, (max-width: 768px) 20vw, 15vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#216740]/20 to-[#FEC909]/20">
                          <PlayArrow
                            className="text-[#FEC909]"
                            style={{ fontSize: "clamp(20px, 4vw, 32px)" }}
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <PlayArrow
                          className="text-white"
                          style={{ fontSize: "clamp(18px, 3vw, 28px)" }}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="flex justify-end mt-5 md:mt-8">
          <BNPButton
            href="/videos"
            language={language}
            variant="primary"
            size="sm"
            showIcon={true}
            iconPosition="right"

          >
            {language === "ENG" ? "Explore All Videos" : "সব ভিডিও দেখুন"}
          </BNPButton>
        </div>
      </div>

    </div>
  );
};

export default VideoGallery;