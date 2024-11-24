"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import loaderAnimation from "../../../src/assets/images/loader/loading.json";

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
