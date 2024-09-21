"use client";
import Image from "next/image";
import person1 from "../../../../assets/images/profile.jpg";
import person2 from "../../../../assets/images/profile.jpg";
import person3 from "../../../../assets/images/profile.jpg";
import person4 from "../../../../assets/images/profile.jpg";
import AddIcon from "@mui/icons-material/Add";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@/components/share/Container";

const teamMembers = [
  { image: person1, name: "Bern Dorey", position: "Founder" },
  { image: person2, name: "John Hines", position: "Manager" },
  { image: person3, name: "Jason Bower", position: "Volunteer" },
  { image: person4, name: "Phillip Haris", position: "Volunteer" },
];

// Define social media data
const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/zrf.org/",
    Icon: FacebookIcon,
  },
  {
    name: "X",
    url: "https://x.com",
    Icon: XIcon,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    Icon: LinkedInIcon,
  },
];

const TeamMember = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="px-0 my-20">
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="gap-8 p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
          >
            <div className="relative shadow-md rounded overflow-hidden bg-gray-200 group">
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-green-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-in-out opacity-90 -h-[200px]"></div>

              {/* Image Section */}
              <div className="relative overflow-hidden  z-10">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-56 object-cover border border-b-8 border-white border-e-8 rounded-ee-[100px]"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 relative z-10">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p>{member.position}</p>
              </div>

              {/* Plus Icon and Social Media Icons */}
              <div className="absolute bottom-4 right-4">
                <div className="relative group">
                  {/* Plus Icon */}
                  <div className="bg-yellow-500 rounded-full p-2 shadow-lg cursor-pointer z-10 flex items-center justify-center">
                    <AddIcon className="text-white" />
                  </div>

                  {/* Social Media Icons (Initially Hidden) */}
                  <div className="flex flex-col space-y-2 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 right-0 invisible group-hover:visible rounded p-1 z-10 mb-10">
                    {socialMediaLinks.map((social, idx) => (
                      <Link
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black bg-white rounded-full p-1 "
                      >
                        <social.Icon />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default TeamMember;
