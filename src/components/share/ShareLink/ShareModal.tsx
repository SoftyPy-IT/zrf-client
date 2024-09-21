"use client";
import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import "./Share.css";
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import Image from "next/image";
import facebook from "../../../assets/icon/facebook.png";
import linkedIn from "../../../assets/icon/linkedin.png";
import instagram from "../../../assets/icon/instagram.png";
import whatsapp from "../../../assets/icon/chat3.png";
import twitter from "../../../assets/icon/twitter.png";
import email from "../../../assets/icon/email.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "@mui/material";

type TProps = {
  close: () => void;
};

const ShareModal = ({ close }: TProps) => {
  const urlToShare = window.location.href;
  const title = "Check this out!";
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(urlToShare);
    setCopySuccess("Copied!");
  };

  return (
    <div className="w-full md:w-[550px] h-[250px]  md:h-[330px] bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl text-black shadow-xl z-[9999] overflow-hidden shareModal">
      <div>
        <div className="flex items-center justify-between">
          <span className="transition text-sm ease-in-out delay-75 cursor-pointer absolute left-4 top-4">
            Share
          </span>
          <VscClose
            className="transition text-sm ease-in-out delay-75 cursor-pointer absolute right-4 top-4"
            onClick={close}
            size={30}
          />
        </div>
      </div>
      <div className="mt-16 md:mt-20 w-full md:w-[450px] mx-auto">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          navigation={true}
          className="mySwiper"
          breakpoints={{
            500: {
              slidesPerView: 5,
            },
            640: {
              slidesPerView: 4,
            },

            768: {
              slidesPerView: 4,
            },

            1024: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <div className="text-center">
              <WhatsappShareButton url={urlToShare} title={title}>
                <Image
                  className="w-10 md:w-14 mx-auto"
                  src={whatsapp}
                  alt="WhatsApp"
                />
                <small className="text-sm text-[12px]">WhatsApp</small>
              </WhatsappShareButton>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <FacebookShareButton url={urlToShare} title={title}>
                <Image
                  className="w-10 md:w-14 mx-auto"
                  src={facebook}
                  alt="Facebook"
                />
                <small className="text-sm text-[12px]">Facebook</small>
              </FacebookShareButton>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <LinkedinShareButton url={urlToShare} title={title}>
                <Image
                  className="w-10 md:w-14 mx-auto"
                  src={linkedIn}
                  alt="LinkedIn"
                />
                <small className="text-sm text-[12px]">LinkedIn</small>
              </LinkedinShareButton>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <InstapaperShareButton url={urlToShare} title={title}>
                <Image
                  className="w-10 md:w-14 mx-auto"
                  src={instagram}
                  alt="Instagram"
                />
                <small className="text-sm text-[12px]">Instagram</small>
              </InstapaperShareButton>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <TwitterShareButton url={urlToShare} title={title}>
                <Image
                  className="w-10 md:w-14 mx-auto"
                  src={twitter}
                  alt="Twitter"
                />
                <small className="text-sm text-[12px]">Twitter</small>
              </TwitterShareButton>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <EmailShareButton url={urlToShare} title={title}>
                <Image
                  className="w-10 md:w-14 mx-auto"
                  src={email}
                  alt="Email"
                />
                <small className="text-sm text-[12px]">Email</small>
              </EmailShareButton>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <div className="mt-5 border w-[300px] md:w-[500px] h-[50px] p-3 rounded-md mx-auto items-center justify-between flex">
          <input
            value={urlToShare}
            type="text"
            className=" w-[200px] md:w-full"
            readOnly
          />
          <Button
            onClick={handleCopy}
            sx={{
              borderRadius: "70px",
              width: "60px",
              height: "30px",
              fontSize: "12px",
            }}
          >
            Copy
          </Button>
        </div>
        {copySuccess && (
          <p className="text-center mt-2 text-green-500">{copySuccess}</p>
        )}
      </div>
    </div>
  );
};

export default ShareModal;
