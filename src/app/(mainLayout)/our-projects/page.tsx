import React from "react";
import Image from "next/image";
import image1 from "../../../../src/assets/images/projects/image1.jpg";
import image2 from "../../../../src/assets/images/projects/image2.jpg";
import image3 from "../../../../src/assets/images/projects/image3.jpg";
import image4 from "../../../../src/assets/images/projects/image4.jpg";
import Link from "next/link";
import Container from "@/components/share/Container";
import EastIcon from "@mui/icons-material/East";
import Banner from "./_components/Banner";

const page = () => {
  const cardsData = [
    {
      image: image1,
      title: "Asthma Care and Prevention Center",
      description:
        "70lacs people suffer from asthma, which is about 5% of the total population. Asthma centre at Dhaka under government arrangement was the only integrated asthma management centre in our country. Asthma care and prevention centre, Bogra commenced on 14th May, 2003 to ensure effortless breathing for asthmatics. This centre is providing integrated asthma treatment by trained doctors including of patient education, which is the most important component of asthma treatment. Specialized service like, Nebulisation, Spirometry, ECG and Oxygen therapy is also available at a very rational cost. Orientation training of doctors on asthma is a unique component of this centre by which the integrated asthma management concept will be disseminated at grass root levels. Response of patients encouraged us to start a new centre at Chittagong on 11th February, 2004.",
    },
    {
      image: image2,
      title: "Shahid Ziaur Rahman Shishu Hospital",
      description:
        "Shahid Ziaur Rahman Shishu Hospital is committed to providing comprehensive healthcare services to children with the goal of improving pediatric health outcomes. The hospital focuses on offering better medical care and modern facilities, aiming to reduce child morbidity and mortality rates. It is equipped with outpatient services for consultations and treatment, ensuring easy access for families. Additionally, the hospital prioritizes the development of skilled healthcare professionals by organizing specialized training programs for nurses and paramedics.",
    },
    {
      image: image3,
      title: "Komol Project",
      description:
        "The farmers of our country contribute a major part in our economy. The unbelievable fact is that 5% of this farmer use quality seed, which is a mandatory requirement for booming production. Parallel to government no significant initiative was taken in private sector to explore this huge requirements.",
    },
    {
      image: image4,
      title: "Scholarship Project",
      description:
        "Bangladesh with its vast natural beauty is a land of green panorama. Apart from exerting beauty trees have multiple benefits as it prevents deforestation, generate income for the owner and protects environment. Ziaur Rahman Foundation undertook program to help people reap the multiple benefits of the mother nature.",
    },
    // {
    //   image: image3,
    //   title: "দারিদ্র্য বিমোচন",
    //   description:
    //     "দারিদ্র্য বিমোচনের জন্য ফাউন্ডেশনটি বিশেষ কর্মসূচি গ্রহণ করে থাকে। ফাউন্ডেশনটির লক্ষ্য হলো দরিদ্র জনগোষ্ঠীকে স্বনির্ভর করতে সাহায্য করা। এর জন্য বিভিন্ন প্রশিক্ষণ কেন্দ্র স্থাপন করা হয়েছে, যেখানে দরিদ্র মানুষেরা বিনামূল্যে দক্ষতা উন্নয়ন প্রশিক্ষণ নিতে পারেন। এই প্রশিক্ষণ প্রোগ্রামের মাধ্যমে তাদের কর্মসংস্থানের সুযোগ সৃষ্টি করা হয় এবং তারা আর্থিকভাবে স্বাবলম্বী হতে পারেন। এছাড়াও, ফাউন্ডেশনটি দরিদ্র জনগোষ্ঠীর জন্য মাইক্রোফাইন্যান্সের ব্যবস্থা করে, যাতে তারা স্বল্প সুদে ঋণ নিয়ে ক্ষুদ্র ব্যবসা শুরু করতে পারেন। ফাউন্ডেশনটি গরীব পরিবারগুলোর অর্থনৈতিক উন্নয়নে ভূমিকা রাখে এবং তাদের জীবনের মানোন্নয়নে কাজ করে।",
    // },
    // {
    //   image: image3,
    //   title: "নারীর ক্ষমতায়ন",
    //   description:
    //     "জিয়াউর রহমান ফাউন্ডেশন নারীর ক্ষমতায়নকে অত্যন্ত গুরুত্ব দেয়। ফাউন্ডেশনটি দরিদ্র এবং প্রান্তিক নারীদের জন্য বিভিন্ন কর্মসংস্থানের সুযোগ সৃষ্টি করে। বিশেষ করে নারীদের জন্য দক্ষতা উন্নয়ন প্রশিক্ষণ দেওয়া হয়, যা তাদেরকে অর্থনৈতিকভাবে স্বাবলম্বী হতে সাহায্য করে। এই প্রশিক্ষণ কার্যক্রমের মধ্যে রয়েছে সেলাই, হস্তশিল্প, কৃষি, এবং ক্ষুদ্র ব্যবসা পরিচালনার প্রশিক্ষণ। ফাউন্ডেশনটি নারীদের জন্য ক্ষুদ্র ঋণ প্রদান করে, যা তারা নিজেদের ব্যবসা শুরু করার জন্য ব্যবহার করতে পারেন। নারীদের আর্থিক উন্নয়ন এবং সামাজিক স্বীকৃতি বাড়ানোর মাধ্যমে, ফাউন্ডেশনটি একটি সমানাধিকারভিত্তিক সমাজ গঠনে কাজ করছে।",
    // },
  ];
  return (
    <div>
      <Banner />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
          {cardsData.map((data, index) => (
            <div key={index}>
              <div className="shadow-lg lg:h-[500px] md:h-[450px] relative">
                <div className="relative h-[250px]">
                  <Image
                    src={data.image}
                    alt=""
                    className="h-[250px] object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                  <p className="text-justify">
                    {data.description.slice(0, 150)}...
                  </p>
                  <div className="flex justify-end mt-3 absolute bottom-5">
                    <Link href="/our-projects">
                      <button className="hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:text-white rounded-full uppercase text-sm border">
                        সব দেখুন <EastIcon />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
