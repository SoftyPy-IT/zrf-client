import type React from "react"
import { useEffect, useState } from "react"
import "./History.css"
import Image from "next/image"
import type { TAbout } from "@/types/type"
import { Button, MenuItem, FormControl, InputLabel } from "@mui/material"
import { styled } from "@mui/material/styles"
import Select from "@mui/material/Select"
import type { SelectChangeEvent } from "@mui/material/Select"
import { renderContent } from "@/utils/renderContent"
import Loader from "@/app/loading"

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  }
  return date.toLocaleDateString("en-US", options)
}

const ScrollableSelect = styled(Select)<{ value: unknown }>({
  height: "30px",
  background: "#fff",
  "& .MuiSelect-select": {
    height: "30px !important",
    minHeight: "30px !important",
    padding: "0 14px",
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#dee2e6",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#adb5bd",
  },
  "& .MuiInputBase-input": {
    padding: "0 14px",
    height: "30px !important",
  },
})

interface AboutProps {
  aboutData: TAbout[]
  language: string
}

const HistoryFetchData: React.FC<AboutProps> = ({ aboutData, language }) => {
  const [historyData, setHistoryData] = useState<TAbout[]>([])
  const [filteredData, setFilteredData] = useState<TAbout[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(4)
  const currentYear = new Date().getFullYear().toString()
  const [startYear, setStartYear] = useState<string>("2000")
  const [endYear, setEndYear] = useState<string>('2000')

  const category = `History`

  const fetchHistoryData = async () => {
    try {
      setLoading(true)
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/about?category=${category}`

      console.log("Fetching data from:", url)

      const response = await fetch(url, {
        cache: "no-store",
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setHistoryData(data.data?.abouts || [])
      setFilteredData(data.data?.abouts || [])
    } catch (err) {
      console.error("Error fetching history data:", err)
      setError("Failed to fetch history data. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHistoryData()
  }, []) //Fixed: Added empty dependency array to useEffect

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const startDate = new Date(`${startYear}-01-01`)
    const endDate = new Date(`${endYear}-12-31`)

    const filtered = historyData.filter((item) => {
      const itemDate = new Date(item.date)
      return itemDate >= startDate && itemDate <= endDate
    })

    setFilteredData(filtered)
    setVisibleCount(4) // Reset visible count when new search is performed
  }

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear()
    const years = []
    for (let year = 2000; year <= currentYear; year++) {
      years.push(year)
    }
    return years
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <div className="mt-20">
      <div className="mb-10 mt-5">
        <h2 className="text-center text-3xl font-bold">{language === "ENG" ? "Our Journey" : "আমাদের যাত্রা"}</h2>
        <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
      </div>
      <form onSubmit={handleSearch} className="ml-0 md:ml-24 lg:ml-24">
        <div className="flex items-center gap-2 md:w-[600px] mx-auto mb-8">
          <FormControl className="w-1/3" sx={{ height: "30px" }}>
            <InputLabel
              id="start-year-label"
              sx={{
                lineHeight: "30px",
                transform: "translate(14px, -10px) scale(0.75)",
                "&.Mui-focused, &.MuiFormLabel-filled": {
                  transform: "translate(14px, -10px) scale(0.75)",
                },
              }}
            >
              {language === "ENG" ? "Start Year" : "শুরুর বছর"}
            </InputLabel>
            <ScrollableSelect
              labelId="start-year-label"
              value={startYear as unknown}
              onChange={(e: SelectChangeEvent<unknown>, child: React.ReactNode) =>
                setStartYear(e.target.value as string)
              }
              label={language === "ENG" ? "Start Year" : "শুরুর বছর"}
              defaultValue="2000"
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200,
                    overflowY: "auto",
                  },
                },
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                disableScrollLock: true,
              }}
              onOpen={() => {
                document.body.style.overflow = "hidden"
              }}
              onClose={() => {
                document.body.style.overflow = "unset"
              }}
            >
              {generateYearOptions().map((year) => (
                <MenuItem key={year} value={year.toString()} onWheel={(e) => e.stopPropagation()}>
                  {year}
                </MenuItem>
              ))}
            </ScrollableSelect>
          </FormControl>
          <FormControl className="w-1/3" sx={{ height: "30px" }}>
            <InputLabel
              id="end-year-label"
              sx={{
                lineHeight: "30px",
                transform: "translate(14px, -10px) scale(0.75)",
                "&.Mui-focused, &.MuiFormLabel-filled": {
                  transform: "translate(14px, -10px) scale(0.75)",
                },
              }}
            >
              {language === "ENG" ? "End Year" : "শেষ বছর"}
            </InputLabel>
            <ScrollableSelect
              labelId="end-year-label"
              value={endYear as unknown}
              onChange={(e: SelectChangeEvent<unknown>, child: React.ReactNode) => setEndYear(e.target.value as string)}
              label={language === "ENG" ? "End Year" : "শেষ বছর"}
              defaultValue={currentYear}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200,
                    overflowY: "auto",
                  },
                },
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                disableScrollLock: true,
              }}
              onOpen={() => {
                document.body.style.overflow = "hidden"
              }}
              onClose={() => {
                document.body.style.overflow = "unset"
              }}
            >
              {generateYearOptions().map((year) => (
                <MenuItem key={year} value={year.toString()} onWheel={(e) => e.stopPropagation()}>
                  {year}
                </MenuItem>
              ))}
            </ScrollableSelect>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: {
                xs: "20px",
              },
              height: "30px",
              minHeight: "30px",
              backgroundColor: "#2b7a4b",
              "&:hover": {
                backgroundColor: "#236c40",
              },
            }}
          >
            {language === "ENG" ? "Search" : "অনুসন্ধান"}
          </Button>
        </div>
      </form>
      <section id="conference-timeline">
        <div className="timeline-start">{language === "ENG" ? "Start" : "শুরু"}</div>
        <div className="conference-center-line"></div>
        <div className="conference-timeline-content">
          {filteredData?.slice(0, visibleCount).map((data, index: number) => (
            <div className="timeline-article" key={index}>
              {index % 2 === 0 ? (
                <>
                  <div className="content-left-container">
                    <div className="content-left">
                      <h3 className="text-xl font-bold">
                        {language === "ENG" ? data.title_english : data.title_bangla}
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
                          <Image key={idx} src={img || "/placeholder.svg"} alt="history" width={500} height={300} />
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
                          <Image key={idx} src={img || "/placeholder.svg"} alt="history" width={500} height={300} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="content-left-container">
                    <div className="content-right">
                      <h3 className="text-xl font-bold">
                        {language === "ENG" ? data.title_english : data.title_bangla}
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
        {filteredData.length > visibleCount && (
          <div className="flex items-center justify-center">
            <Button
              onClick={loadMore}
              className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm md:px-3 md:py-1 rounded text-white"
            >
              {language === "ENG" ? "See More" : "আরো দেখুন"}
            </Button>
          </div>
        )}
      </section>
    </div>
  )
}

export default HistoryFetchData

