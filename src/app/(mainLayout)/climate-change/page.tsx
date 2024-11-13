import Image from "next/image";
import img1 from "../../../../src/assets/images/climate/turkey.jpg";
import img2 from "../../../../src/assets/images/climate/sylhet.jpg";
import img3 from "../../../../src/assets/images/climate/netrokona.jpg";
import Container from "@/components/share/Container";

import { Button } from "@mui/material";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";

const Rehabilitation = () => {
  const cardData = [
    {
      id: 1,
      title:
        "Ziaur Rahman Foundation provided assistance to those affected by the earthquake in Turkey.",
      content:
        "The Ziaur Rahman Foundation extended its support to the victims of the recent earthquake in Turkey by providing humanitarian aid to help with relief efforts and recovery.",
      img: img1,
    },
    {
      id: 2,
      title:
        "Ziaur Rahman Foundation distributed relief materials to flood-affected people in the 30th Ward of Sylhet.",
      content:
        "On June 25, 2022, the Ziaur Rahman Foundation distributed relief materials to flood-affected people in the 30th Ward of Sylhet city, at the Chandai Government Primary School. Under the guidance of Tarique Rahman and the management of Dr. Farhad Halim Doner, Executive Director of the Foundation, the relief team from Ziaur Rahman Foundation visited the area. The event was presided over by Professor Dr. Engineer M. Iqbal, with Professor Dr. Khairul Islam Rubel as the moderator. The Chief Guest was Dr. Enamul Haq Chowdhury, Adviser to the BNP Chairperson. Special guests included Miftah Siddiqui, Secretary of Sylhet City BNP.",
      img: img2,
    },
    {
      id: 3,
      title:
        "Ziaur Rahman Foundation distributed relief and medicines in the flood-affected areas of the Netrokona district",
      content:
        "On July 6, 2022, the Ziaur Rahman Foundation distributed relief and medicines in the flood-affected areas of the Netrokona district, including the villages of Tarachapar, Sukari, and neighboring flood-hit areas of Atpara Upazila, as well as the Nichintapur Union in Barhatta Upazila. The assistance was provided by boat to these areas. The event was attended by the Chief Guest, Babu Gayeshwar Chandra Roy, a member of the National Standing Committee of BNP, and Special Guest, Mr. Imran Saleh Prince, Organizational Secretary of Mymensingh Division, BNP's Central Executive Committee. Other notable attendees included Advocate Wares Ali Mamun, Assistant Organizing Secretary of BNP’s National Executive Committee, and Dr. Anwarul Haq, the Convener of Netrokona District BNP.",
      img: img3,
    },
  ];

  return (
    <>
      <CommonBanner title="Climate Change" />
      <Container className="my-20">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[1100px] md:h-[900px] lg:h-[500px]">
          {cardData.map((card, index) => (
            <div
              className="relative shadow-md overflow-hidden group border"
              key={index}
            >
              <Image
                className="w-full h-[300px] lg:h-[400px] object-cover"
                src={card.img}
                alt={card.title}
              />
              {/* Overlapping content */}
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 lg:p-4 bg-blue-950 border-t border-gray-300 rounded-t-3xl h-[150px] md:h-[200px] lg:h-[200px] mt-28 md:mt-0 lg:mt-0">
                {/* <h2 className="text-xl text-white">{card.title}</h2> */}
                <p className="mt-2 text-white">
                  {card.content.slice(0, 180)} ......
                </p>
              </div>
              {/* Hover content */}
              <div className="absolute inset-x-0 bottom-0 bg-green-700 text-[#fff] transition-transform transform translate-y-full group-hover:translate-y-0 duration-500 ease-in-out h-[340px] md:h-[300px] lg:h-[300px] rounded-t-3xl">
                <div className="w-full p-2 md:p-4 lg:p-6 lg:h-full">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl ">{card.title.slice(0, 100)}</h2>
                    </div>
                    <p className="text-justify">{card.content.slice(0, 200)}</p>
                    <Button href={`/whatwedo/program/${card.id}`}>
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Rehabilitation;
