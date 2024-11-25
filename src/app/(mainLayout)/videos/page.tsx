"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/share/Container";
import ReactPlayer from "react-player";
import Videos from "./_components/Videos";
import Loader from "@/components/Loading/Loading";
import { useVideoData } from "@/hooks/useVideoData";
import { useLanguage } from "@/provider/LanguageProvider";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";

const VideoGallery = () => {
  const { videoData, loading, error } = useVideoData()
  const { language } = useLanguage()

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
  }

  return (
    <div> 
      <CommonBanner title={language === 'ENG' ? 'Video Gallery' : 'ভিডিও গ্যালারি'}/>
     
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
          {videoData.map((video) => (
            <div key={video._id} className="relative rounded overflow-hidden">
              <div className="border-2">
                {mounted && (
                  <ReactPlayer
                    url={video.video_url} controls
                    width="100%"
                    height="200px"
                  />
                )}
              </div>
              <h1 className="mt-3">{language == 'ENG' ? video.video_title_english : video.video_title_bangla}</h1>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default VideoGallery;
