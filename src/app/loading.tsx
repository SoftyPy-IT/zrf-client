"use client";

import dynamic from "next/dynamic";
import loaderAnimation from "../../src/assets/images/loader/loading.json";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }, // This is important - it prevents server-side rendering
);

const Loader = () => {
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center bg-white z-50">
      <Player
        autoplay
        loop
        src={loaderAnimation}
        className="w-[150px] h-[150px] md:w-[250px] md:h-[150px]"
      />
    </div>
  );
};

export default Loader;
