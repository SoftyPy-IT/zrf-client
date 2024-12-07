"use client";
import Image from "next/image";
import Container from "@/components/share/Container";
import React, { useState } from "react";

import { useLanguage } from "@/provider/LanguageProvider";
import { TIntroduction } from "@/types/type";
import ReactHtmlParser from "react-html-parser";
import Biography from "./Biography";
import Modal from "./Modal";
import Loader from "@/components/Loading/Loading";
import { Paper, Typography } from "@mui/material";

const renderContent = (content: string) => {
  const parsedContent = ReactHtmlParser(content);

  return parsedContent.map((element, index) => {
    if (element.type === "h1") {
      return (
        <h1 key={index} className="text-2xl font-bold mb-2 ">
          {element.props.children}
        </h1>
      );
    } else if (element.type === "h2") {
      return (
        <h2 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h2>
      );
    } else if (element.type === "h3") {
      return (
        <h3 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h3>
      );
    } else if (element.type === "p") {
      return (
        <p key={index} className="mb-2">
          {element.props.children}
        </p>
      );
    }


    else if (
      element.type === "div" &&
      element.props.className === "ql-align-center"
    ) {
      return (
        <div key={index} className="text-center mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-right"
    ) {
      return (
        <div key={index} className="text-right mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-left"
    ) {
      return (
        <div key={index} className="text-left mb-2">
          {element.props.children}
        </div>
      );
    } else {
      return null;
    }
  });
};
const FetchZiaurRahmanData = () => {

  const [introductionData, stIntroductionData] = React.useState<TIntroduction[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { language } = useLanguage()
  React.useEffect(() => {
    const fetchPrisonData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/introduction?limit=1000`, {
          cache: 'no-store'
        });
        const data = await response.json();
        const sortedData = data.data?.introductions?.sort((a: TIntroduction, b: TIntroduction) => {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(); // Sort ascending
        });

        stIntroductionData(sortedData || []);
      } catch (err) {
        setError('Failed to fetch introduction data.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrisonData();
  }, []);



  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string;
  } | null>(null);
  const handleOpen = (
    englishTitle: string,
    banglaDescription: string,
    banglaTitle: string,
    englishDescription: string
  ) => {
    setModalContent({
      title: language === 'ENG' ? englishTitle : banglaTitle,
      content: language === 'ENG' ? englishDescription : banglaDescription,
    });
    setIsOpen(true);
  };


  const handleClose = () => {
    setIsOpen(false);
    setModalContent(null);
  };
  if (loading) {
    return <Loader />
  }

  return (
    <Container>
      <div className="my-5  md:my-16">
        <Container>
          <Paper elevation={3} className=" p-3 md:p-5  md:px-14">
            <div className="text-center mb-10 ">
              <Typography
                variant="h4"
                color="#216740"
                gutterBottom
                fontWeight="bold"
                sx={{
                  fontSize: {
                    xs: '1.5rem',
                    sm: '1.75rem',
                    md: '2rem', 
                    lg: '2.5rem', 
                    xl: '3rem',   
                  },
                }}
              >
                {language === 'ENG' ? 'Biography of Shaheed President Ziaur Rahman' : '  শহীদ প্রেসিডেন্ট জিয়াউর রহমান  এর জীবনী'}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {language === 'ENG' ?
                  "Lieutenant General Ziaur Rahman Bir Uttam (1936-1981) was the founder of Bangladesh Nationalist Party. He was the declarer of independence and a valiant freedom fighter. He was also Chief of Army Staff and later became the elected President of Bangladesh. He opened up multi-party democracy in Bangladesh and defined Bangladeshi Nationalism." :
                  "লেফটেন্যান্ট জেনারেল জিয়াউর রহমান বীর উত্তম (১৯৩৬-১৯৮১) ছিলেন স্বাধীনতার ঘোষক এবং বাংলাদেশের নির্বাচিত রাষ্ট্রপতি। তিনি একজন বীর মুক্তিযোদ্ধা, সেনাপ্রধান এবং বাংলাদেশে বহুদলীয় গণতন্ত্রের প্রতিষ্ঠাতা, সেই সাথে বাংলাদেশী জাতীয়তাবাদ এবং বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি'র প্রতিষ্ঠাতা ছিলেন."
                }
              </Typography>
            </div>
          </Paper>
        </Container>

        {
          introductionData?.slice(0, 1).map((data) => (
            <div key={data._id} className="mt-10 ">
              <div className="flex flex-row items-center justify-center content-center">
                <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base mb-4 border rounded-full text-center w-[105px] bg-white">
                  {language === 'ENG' ? 'Patron' : 'পৃষ্ঠপোষক'}
                </h2>
              </div>
              <div className="w-full text-center space-y-4 mb-2">
                <h1 className="text-3xl lg:text-5xl xl:text-5xl text-[#FEC909] font-bold ">  {language === 'ENG' ? data.english_title : data.bangla_title} </h1>

              </div>
              <div className="shadow-lg rounded-lg lg:rounded-3xl overflow-hidden grid grid-cols-12 my-10 border place-items-center ">
                <div className="col-span-12 md:col-span-4">
                  <div className=" bg-[#fdf7f4] shadow-lg rounded-xl ">
                    <div className=" ">
                      {
                        data.bng_images?.slice(0, 1).map((img) => (
                          <Image
                            width={500}
                            height={500}
                            key={img}
                            src={img}
                            alt={" তারেক রহমান"}
                            className="w-[300px] h-full lg:h-[500px] md:w-full"
                          />
                        ))
                      }
                    </div>
                  </div>
                </div>


                <div className="col-span-12 md:col-span-8 lg:h-[500px] p-3 lg:p-6  space-y-6 bg-gradient-to-r from-yellow-600 to-green-600 text-white">
                  <b className="text-justify text-xl ">
                    {
                      language === 'ENG' ? renderContent(data.english_description) : renderContent(data.bangla_description)

                    }
                  </b>
                </div>
              </div>
            </div>
          ))
        }
        <Biography introductionData={introductionData} language={language} handleOpen={handleOpen} />
        {modalContent && (
          <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={modalContent.title}
          >
            <p>{renderContent(modalContent.content)}</p>
          </Modal>
        )}
      </div>
    </Container>
  );
};


export default FetchZiaurRahmanData;
