"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import type { TImgGallery } from "@/types/type"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/provider/LanguageProvider"
import { East } from "@mui/icons-material"

const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
})

interface ImageDimensions {
  [key: string]: { width: number; height: number }
}

const PhotoGallery = () => {
  const [galleryData, setGalleryData] = useState<TImgGallery[]>([])
  const [loading, setLoading] = useState(true)
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language } = useLanguage();

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery?limit=1000`, {
          cache: "no-store",
        })
        const data = await res.json()
        setGalleryData(data.data?.galleries || [])
      } catch (err) {
        console.error("Failed to fetch gallery", err)
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryData()
  }, [])

  const handleImageLoad = (img: string, naturalWidth: number, naturalHeight: number) => {
    setImageDimensions((prev) => ({
      ...prev,
      [img]: { width: naturalWidth, height: naturalHeight },
    }))
  }

  const allImages = galleryData.flatMap((gallery) => gallery.thumnailImages || [])

  useEffect(() => {
    if (allImages.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [allImages.length])

  if (loading) return <Loader />

  if (allImages.length === 0) {
    return <div className="text-center text-gray-500">No images available</div>
  }

  const currentImg = allImages[currentIndex]
  const dims = imageDimensions[currentImg]
  const displayWidth = dims?.width || 800
  const displayHeight = dims?.height || 600

  return (
    <div>
      <h2 className="lg:text-3xl text-2xl font-bold uppercase"> {language === "ENG" ? " Photo Gallery" : "ফটো গ্যালারি"} </h2>
      <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5"></div>

      <div className="w-full flex flex-col items-center gap-4">
        {/* Image container */}
        <div className="w-full flex justify-center bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-center h-[370px]">
            <Image
              src={currentImg || "/placeholder.svg"}
              alt="gallery"
              width={displayWidth}
              height={displayHeight}
              priority
              onLoad={(result) => {
                const img_element = result.currentTarget as HTMLImageElement
                handleImageLoad(currentImg, img_element.naturalWidth, img_element.naturalHeight)
              }}
             className="h-[370px]"
            />
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <Link href="/gallery">
            <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
              {language === "ENG" ? "See All" : "সব দেখুন"}{" "} <East fontSize="small" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery
