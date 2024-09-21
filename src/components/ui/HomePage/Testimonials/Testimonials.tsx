import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Container from "@/components/share/Container";
import profile1 from "../../../../assets/images/testimonials/2.jpg";
import profile2 from "../../../../assets/images/logo/zfa.png";
import profile3 from "../../../../assets/images/logo/zfa.png";

// Import the background image
import bgImage from "../../../../assets/images/testimonials/map.png"; // Adjust the path to your background image

const testimonials = [
  {
    name: "মো. ইব্রাহিম",
    company: "আমারা বিএনপি পরিবার",
    location: "ঢাকা",
    rating: 5,
    image: profile1,
    reviwTitle: "সুন্দর এবং সামাজিক কাজের জন্য সুশৃংঙ্খল এবং বিশস্ত প্রতিষ্ঠান। ",
    review:
      "জিয়াউর রহমান ফাউন্ডেশন একটি সামাজিক প্রতিষ্ঠান। মানুষের সেবায় নিয়োজিত। আমি তাদের সর্বোত্তম কল্যাণ কামনা করি। ",
  },
  {
    name: "বাবলূ মিয়া",
    company: "জাতীয়তাবাদী যুবদল",
    location: "ঢাকা",
    rating: 4,
    image: profile1,
    reviwTitle: "সুন্দর এবং সামাজিক কাজের জন্য সুশৃংঙ্খল এবং বিশস্ত প্রতিষ্ঠান। ",
    review:
      "জিয়াউর রহমান ফাউন্ডেশন একটি সামাজিক প্রতিষ্ঠান। মানুষের সেবায় নিয়োজিত। আমি তাদের সর্বোত্তম কল্যাণ কামনা করি। ",
  },
];

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-[-12%] lg:bottom-[-10px] right-[50%] translate-x-[50%] bg-gray-200 p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-[-12%] lg:bottom-[-10px] left-[45%] translate-x-[-50%] bg-gray-200 p-2 rounded-full cursor-pointer mr-4 z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <>
      {/* Apply background image to the full section */}
      <div
        className="w-auto lg:w-full bg-bottom lg:bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage.src})` }} 
      >
        <Container>
          <div className="w-full py-20 px-4 bg-opacity-80">
            <h2 className="text-center text-green-600 text-xl mb-6">
                Testimonials
            </h2>
            <h2 className="text-center text-3xl font-bold mb-6">
              আমাদের সম্পর্কে আমাদের সহযোগী ব্যাক্তিদের বক্তব্য - 
            </h2>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="">
                  <div className="w-full lg:flex">
                    <div className="lg:border-r lg:border-dashed lg:border-gray-500 lg:w-[600px] flex flex-col content-center items-center justify-center text-center space-x-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-full w-[150px] h-[150px] mb-4"
                      />
                      <h3 className="text-2xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 mb-2">
                        {testimonial.company}, {testimonial.location}
                      </p>
                      <div className="flex mb-4 gap-4">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <span key={i} className="text-yellow-500">
                            &#9733;
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:mx-8 space-y-5">
                      <p className="font-bold font-sans text-2xl lg:text-3xl text-justify">
                        {testimonial.reviwTitle}
                      </p>
                      <p className="text-justify">{testimonial.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
