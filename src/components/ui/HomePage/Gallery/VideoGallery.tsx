import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import dynamic from "next/dynamic";
import { useLanguage } from "@/provider/LanguageProvider";
import { TVideo } from "@/types/type";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});


const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import "./Gallery.css";
const VideoGallery = () => {
  const [videos, setVideos] = React.useState<TVideo[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { language } = useLanguage();

  React.useEffect(() => {
    const fetchPrisonData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/videos?limit=1`,
          {
            cache: "no-store",
          },
        );
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
    return <Loader />;
  }
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }

  return (
    <>

      <div>
        <h2 className="lg:text-3xl text-2xl font-bold uppercase">
          {language === "ENG" ? "Video Gallery " : "ভিডিও গ্যালারি"}
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5"></div>

        <div className="grid grid-cols-1 gap-y-5  gap-5  ">
          {videos.length > 0 ? (
            videos.slice(0, 1).map((video: TVideo) => (
              <div key={video._id} className="videoCard">
                <div className="videoWraper">
                  <ReactPlayer
                    url={video.video_url}
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
                <h3 className="p-3 text-sm md:text-xl ">
                  {language === "ENG"
                    ? video.video_title_english
                    : video.video_title_bangla}
                </h3>
              </div>
            ))
          ) : (
            <div>No videos available</div>
          )}
        </div>
      </div>
      <div className="mt-5">
        <Link href="/videos">
          <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
            {language === "ENG" ? "See All" : "সব দেখুন"}{" "}
            <EastIcon fontSize="small" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default VideoGallery;
