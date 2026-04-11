"use client"

import ImageGallery from "@/components/ImageGallery/ImageGallery";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import Container from "@/components/share/Container";
import { useLanguage } from "@/provider/LanguageProvider";
import { TImgGallery } from "@/types/type";
import { sortByDate } from "@/utils/sort";
import { useEffect, useState } from "react";

const FetchedGallery = () => {
  const { language } = useLanguage();
  const [galleryData, setGalleryData] = useState<TImgGallery[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const title = language === "ENG" ? "Image Gallery" : "ফটো গ্যালারি";

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery?limit=10000`,
          { cache: "no-store" }
        );
        const data = await response.json();
        setGalleryData(data.data?.galleries || []);
      } catch {
        setError("Failed to fetch gallery data.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <>
      <CommonBanner title={title} />

      <Container className="mt-10">
        <ImageGallery
          galleryData={galleryData}
          loading={loading}
          error={error}
          language="ENG"
        />
      </Container>
    </>
  );
};

export default FetchedGallery; 