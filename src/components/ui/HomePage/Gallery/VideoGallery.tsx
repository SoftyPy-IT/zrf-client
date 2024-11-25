import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, } from "swiper/modules";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import dynamic from "next/dynamic";
import { useLanguage } from "@/provider/LanguageProvider";
import { TVideo } from "@/types/type";
import Loader from "@/components/Loading/Loading";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoGallery = () => {
    const [videos, setVideos] = React.useState<TVideo[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);
    const { language } = useLanguage();

    React.useEffect(() => {
        const fetchPrisonData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/videos?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setVideos(data.data?.videos || []);
            } catch (err) {
                setError("Failed to fetch videos data.");
            } finally {
                setLoading(false);
            }
        };

        fetchPrisonData();
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
                <h2 className="lg:text-3xl text-2xl font-bold uppercase">{language === 'ENG' ? 'Video Gallery ' : 'ভিডিও গ্যালারি'}</h2>
                <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5"></div>
                <Swiper pagination={{ clickable: true }} navigation modules={[Navigation]} className="mySwiper">
                    {videos.map((video: TVideo, index: number) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-64 md:h-80  rounded-md overflow-hidden">
                                <ReactPlayer style={{ padding: '20px' }} url={video.video_url} width="100%" height="100%" controls />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-5">
                <Link href="/videos">
                    <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
                        {language === 'ENG' ? 'See All' : 'সব দেখুন'}  <EastIcon fontSize="small" />
                    </button>
                </Link>
            </div>
        </>
    );
};

export default VideoGallery;
