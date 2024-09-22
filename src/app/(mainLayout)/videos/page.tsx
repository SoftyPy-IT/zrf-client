"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/share/Container";
import ReactPlayer from "react-player";
import Videos from "./_components/Videos";

const videos = [
  {
    id: 1,
    title: "জিয়াউর রহমান ফাউন্ডেশন রিসার্চ সেল কর্তৃক নির্মিত",
    url: "https://youtu.be/dOWL-q-lEzY",
  },
  {
    id: 2,
    title: "জিয়াউর রহমান ফাউন্ডেশন রিসার্চ সেল কর্তৃক নির্মিত",
    url: "https://youtu.be/dOWL-q-lEzY",
  },
  {
    id: 3,
    title: "জিয়াউর রহমান ফাউন্ডেশন রিসার্চ সেল কর্তৃক নির্মিত",
    url: "https://youtu.be/dOWL-q-lEzY",
  },
  {
    id: 4,
    title: "জিয়াউর রহমান ফাউন্ডেশন রিসার্চ সেল কর্তৃক নির্মিত",
    url: "https://youtu.be/dOWL-q-lEzY",
  },
  {
    id: 5,
    title: "জিয়াউর রহমান ফাউন্ডেশন রিসার্চ সেল কর্তৃক নির্মিত",
    url: "https://youtu.be/dOWL-q-lEzY",
  },
  {
    id: 6,
    title: "জিয়াউর রহমান ফাউন্ডেশন রিসার্চ সেল কর্তৃক নির্মিত",
    url: "https://youtu.be/dOWL-q-lEzY",
  },
];

const VideoGallery = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Videos />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
          {videos.map((video) => (
            <div key={video.id} className="relative rounded overflow-hidden">
              <div className="border-2">
                {mounted && (
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="200px"
                    controls={true}
                  />
                )}
              </div>
              <h1 className="mt-3">{video.title}</h1>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default VideoGallery;
