import React, { useEffect, useState } from "react";
import "./History.css";
import Image from "next/image";
import { TAbout } from "@/types/type";
import { Button } from "@mui/material";
import { renderContent } from "@/utils/renderContent";
import Loader from "@/app/loading";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

interface AboutProps {
  aboutData: TAbout[];
  language: string;
}

const HistoryFetchData: React.FC<AboutProps> = ({ aboutData, language }) => {
  const [historyData, setHistoryData] = useState<TAbout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [startYear, setStartYear] = useState<string>("");
  const [endYear, setEndYear] = useState<string>("");

  const category = `History`;

  const fetchHistoryData = async (startYear?: number, endYear?: number) => {


    try {
      setLoading(true);
      let url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/about?category=${category}`;

      if (startYear && endYear) {
        url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/about?category=${category}&startYear=${startYear}&endYear=${endYear}`;
      }


      const response = await fetch(url, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setHistoryData(data.data?.abouts || []);
    } catch (err) {
      console.error("Error fetching history data:", err);
      setError("Failed to fetch history data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistoryData();
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedStartYear = parseInt(startYear);
    const parsedEndYear = parseInt(endYear);
    if (parsedStartYear && parsedEndYear && parsedStartYear <= parsedEndYear) {
      fetchHistoryData(parsedStartYear, parsedEndYear);
    } else {
      setError("Please enter a valid year range.");
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="mt-20">
      <form onSubmit={handleSearch}>
        <div className="flex items-center gap-2 w-[600px] mx-auto">
          <input
            type="number"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            placeholder="Start Year"
            min="1900"
            max="2099"
            step="1"
            className="w-1/3 p-2 border rounded"
          />
          <input
            type="number"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
            placeholder="End Year"
            min="1900"
            max="2099"
            step="1"
            className="w-1/3 p-2 border rounded"
          />
          <Button className="bg-gradient-to-r from-yellow-600 to-green-600" type="submit" sx={{ height: '40px', }}>Search</Button>
        </div>
      </form>
      <div className="mb-10 mt-5">
        <h2 className="text-center text-3xl font-bold">
          {language === "ENG" ? "Our Journey" : "আমাদের যাত্রা"}
        </h2>
        <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
      </div>
      <section id="conference-timeline">
        <div className="timeline-start">
          {language === "ENG" ? "Start" : "শুরু"}
        </div>
        <div className="conference-center-line"></div>
        <div className="conference-timeline-content">
          {historyData
            ?.slice(0, visibleCount)
            .map((data, index: number) => (
              <div className="timeline-article" key={index}>
                {index % 2 === 0 ? (
                  <>
                    <div className="content-left-container">
                      <div className="content-left">
                        <h3 className="text-xl font-bold">
                          {language === "ENG"
                            ? data.title_english
                            : data.title_bangla}
                        </h3>
                        <p className="mt-3 block">
                          {language === "ENG"
                            ? renderContent(data.description_enlgish)
                            : renderContent(data.description_banlga)}
                        </p>
                      </div>
                    </div>
                    <div className="content-right-container">
                      <div className="content-right">
                        <div className="contentRightImgWrap">
                          {data.images?.slice(0, 1).map((img, idx) => (
                            <Image
                              key={idx}
                              src={img || "/placeholder.svg"}
                              alt="history"
                              width={500}
                              height={300}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="meta-date">
                      <span className="date">{formatDate(data.date)}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="content-right-container">
                      <div className="content-left">
                        <div className="contentRightImgWrap">
                          {data.images?.slice(0, 1).map((img, idx) => (
                            <Image
                              key={idx}
                              src={img || "/placeholder.svg"}
                              alt="history"
                              width={500}
                              height={300}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="content-left-container">
                      <div className="content-right">
                        <h3 className="text-xl font-bold">
                          {language === "ENG"
                            ? data.title_english
                            : data.title_bangla}
                        </h3>
                        <p className="mt-3 block">
                          {language === "ENG"
                            ? renderContent(data.description_enlgish)
                            : renderContent(data.description_banlga)}
                        </p>
                      </div>
                    </div>
                    <div className="meta-date">
                      <span className="date">{formatDate(data.date)}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
        </div>
        {historyData.length > visibleCount && (
          <div className="flex items-center justify-center">
            <Button onClick={loadMore} className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm md:px-3 md:py-1 rounded text-white">
              {language === "ENG" ? "See More" : "আরো দেখুন"}
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default HistoryFetchData;

