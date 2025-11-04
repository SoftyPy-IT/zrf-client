"use client";
import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import "./Share.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import Image from "next/image";
import facebook from "../../../../src/assets/icon/facebook.png";
import linkedIn from "../../../../src/assets/icon/linkedin.png";
import whatsapp from "../../../../src/assets/icon/chat3.png";
import twitter from "../../../../src/assets/icon/twitter.png";
import email from "../../../../src/assets/icon/email.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "@mui/material";

type TProps = {
  close: () => void;
  title: string;
  shareUrl: string;
  hashtag: string;
  description: string;
};

const ShareModal = ({ close, shareUrl, title, hashtag }: TProps) => {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopySuccess("Copied!");
  };

  return (
    <div className="w-full md:w-[550px] h-[250px] md:h-[330px] bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl text-black shadow-xl z-[9999] overflow-hidden shareModal">
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
              <WhatsappShareButton url={shareUrl} title={title}>
                <Image
                  className="w-10 md:w-14 mx-auto"
                  src={whatsapp || "/placeholder.svg"}
                  alt="WhatsApp"
                  width={56}
                  height={56}
                />
                <small className="text-sm text-[12px]">WhatsApp</small>
              </WhatsappShareButton>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <FacebookShareButton
                url={shareUrl}
                title={title}
                hashtag={hashtag}
              >
                <Image
                  className="w-10 md:w-14 mx-auto"
                  src={facebook || "/placeholder.svg"}
                  alt="Facebook"
                  width={56}
                  height={56}
                />
                <small className="text-sm text-[12px]">Facebook</small>
              </FacebookShareButton>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <LinkedinShareButton url={shareUrl} title={title}>
                <Image
                  className="w-10 md:w-14 mx-auto"
                  src={linkedIn || "/placeholder.svg"}
                  alt="LinkedIn"
                  width={56}
                  height={56}
                />
                <small className="text-sm text-[12px]">LinkedIn</small>
              </LinkedinShareButton>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <TwitterShareButton
                url={shareUrl}
                title={title}
                hashtags={[hashtag]}
              >
                <Image
                  className="w-10 md:w-14 mx-auto"
                  src={twitter || "/placeholder.svg"}
                  alt="Twitter"
                  width={56}
                  height={56}
                />
                <small className="text-sm text-[12px]">Twitter</small>
              </TwitterShareButton>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <EmailShareButton
                url={shareUrl}
                subject={title}
                body={`Check out this link: ${shareUrl}`}
              >
                <Image
                  className="w-10 md:w-14 mx-auto"
                  src={email || "/placeholder.svg"}
                  alt="Email"
                  width={56}
                  height={56}
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
            value={shareUrl}
            type="text"
            className="w-[200px] md:w-full"
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
