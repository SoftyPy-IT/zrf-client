import React from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { TImgGallery, TVideo } from "@/types/type";
import { useLanguage } from "@/provider/LanguageProvider";
import Image from "next/image";
import Loader from "@/components/Loading/Loading";

const PhotoGallery = () => {
  const [galleryData, setGalleryData] = React.useState<TImgGallery[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { language } = useLanguage();

  React.useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery?limit=1000`, {
          cache: "no-store",
        });
        const data = await response.json();
        setGalleryData(data.data?.galleries || []);
      } catch (err) {
        setError("Failed to fetch image-gallery data.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
  }

  return (
    <>
      <div>
        <h2 className="lg:text-3xl text-2xl font-bold uppercase">
          {language === 'ENG' ? ' Photo Gallery' : 'ফটো গ্যালারি'}
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5"></div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
          className="mySwiper"
        >
          {galleryData.map((gallery, index) => (
            <SwiperSlide key={gallery._id || index}>
              <div className="relative w-full h-64 md:h-80 bg-gray-200 overflow-hidden">
                {gallery.thumnailImages?.slice(0, 1).map((img, idx) => {

                  return (
                    <Image
                      key={idx}
                      src={img}
                      alt="gallery"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      layout="responsive"
                    />
                  );
                })}


              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-end mt-5">
        <Link href="/gallery">
          <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
            {language === 'ENG' ? 'See All' : 'সব দেখুন'} <EastIcon fontSize="small" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default PhotoGallery;
