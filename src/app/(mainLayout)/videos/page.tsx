"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/share/Container";
import ReactPlayer from "react-player";
import { useVideoData } from "@/hooks/useVideoData";
import { useLanguage } from "@/provider/LanguageProvider";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import dynamic from "next/dynamic";
 

const VideoGallery = () => {
  const { videoData, loading, error } = useVideoData();
  const { language } = useLanguage();

  const [mounted, setMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

   
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }

  return (
    <div>
      <CommonBanner
        title={language === "ENG" ? "Video Gallery" : "ভিডিও গ্যালারি"}
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
          {videoData.slice(0, visibleCount).map((video) => (
            <div key={video._id} className="relative rounded-md overflow-hidden  shadow-md  ">
              <div className="border-2">
                {mounted && (
                  <ReactPlayer
                    url={video.video_url}
                    controls
                    width="100%"
                    height="300px"
                  />
                )}
              </div>
              <h1 className="mt-3 p-3 ">
                {language === "ENG"
                  ? video.video_title_english
                  : video.video_title_bangla}
              </h1>
            </div>
          ))}
        </div>
        {visibleCount < videoData.length && (
          <div className="flex items-center justify-center mt-5 ">
            <Button
              onClick={loadMore}
              className="bg-gradient-to-r from-[#216740] to-[#FEC909]"
            >
              {language === "ENG" ? "Load More" : "আরো লোড"}
              <ArrowRightAltIcon />
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default VideoGallery;
