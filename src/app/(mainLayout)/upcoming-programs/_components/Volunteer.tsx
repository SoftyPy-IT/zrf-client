import Image from "next/image";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import media1 from "../../../../../src/assets/images/news/news (1).jpg";
import media2 from "../../../../../src/assets/images/news/news (2).jpg";
import media3 from "../../../../../src/assets/images/news/news (3).jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from "@mui/icons-material/Share";

const Volunteer = () => {
  return (
    <div className="p-5 bg-gray-100 mt-5 rounded">
      <p className="text-justify mb-5">
        Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
        porro quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam dolor sit amet, consectetur adipisicing.
      </p>

      {/* Images Section */}
      <div className="grid grid-cols-3 gap-5 mb-10">
        <Image
          src={media1}
          alt="Volunteer Image 1"
          width={500}
          height={300}
          className="rounded lg:h-36 md:h-20 h-16"
        />
        <Image
          src={media2}
          alt="Volunteer Image 2"
          width={500}
          height={300}
          className="rounded lg:h-36 md:h-20 h-16"
        />
        <Image
          src={media3}
          alt="Volunteer Image 2"
          width={500}
          height={300}
          className="rounded lg:h-36 md:h-20 h-16"
        />
      </div>

      {/* we offer */}
      <div className="mb-5">
        <ul className="space-y-2">
          <li>
            <CheckCircleOutlineIcon className="text-green-600" /> Scientific
            Skills For getting a better result
          </li>
          <li>
            <CheckCircleOutlineIcon className="text-green-600" /> Communication
            Skills to getting in touch
          </li>
          <li>
            <CheckCircleOutlineIcon className="text-green-600" /> A Career
            Overview opportunity Available
          </li>
          <li>
            <CheckCircleOutlineIcon className="text-green-600" /> A good Work
            Environment For work
          </li>
        </ul>
      </div>

      {/* Additional Sections */}
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-3">
          Setting The Mood With Incense
        </h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>

      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-3">
          The Rise Of Smarketing And Why You Need It
        </h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
      </div>

      {/* share section */}
      <div className="mt-5">
        <div className="flex gap-5">
          <span className="text-lg font-medium cursor-pointer">
            {" "}
            <ShareIcon />
          </span>
          <span className="cursor-pointer">
            <FacebookIcon
              fontSize="medium"
              className="bg-green-600 p-1 rounded-full text-white"
            />
          </span>
          <span className="cursor-pointer">
            <XIcon
              fontSize="medium"
              className="bg-green-600 p-1 rounded-full text-white"
            />
          </span>
          <span className="cursor-pointer">
            <InstagramIcon
              fontSize="medium"
              className="bg-green-600 p-1 rounded-full text-white"
            />
          </span>
          <span className="cursor-pointer">
            <LinkedInIcon
              fontSize="medium"
              className="bg-green-600 p-1 rounded-full text-white"
            />
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-5">
        <a href="#" className="text-green-600">
          ← Prev Post
        </a>
        <a href="#" className="text-green-600">
          Next Post →
        </a>
      </div>
    </div>
  );
};

export default Volunteer;
