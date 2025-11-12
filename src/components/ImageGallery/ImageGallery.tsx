"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Close } from "@mui/icons-material";
import { TImgGallery } from "@/types/type";
import { useLanguage } from "@/provider/LanguageProvider";

export interface ImageGalleryProps {
  galleryData: TImgGallery[];
  language?: "ENG" | "BN";
  loading?: boolean;
  error?: string | null;
  onImageClick?: (image: TImgGallery, index: number) => void;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  galleryData = [],
  loading = false,
  error = null,
  onImageClick,
  className = ""
}) => {
  // Modal states
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<TImgGallery | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const openModal = (image: TImgGallery, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    setZoomLevel(1);
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = 'hidden';
    
    if (onImageClick) {
      onImageClick(image, index);
    }
  };

  // Close modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setZoomLevel(1);
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = 'auto';
  }, []);

  // Navigate to next image
  const nextImage = () => {
    if (!selectedImage || galleryData.length === 0) return;
    const nextIndex = (currentImageIndex + 1) % galleryData.length;
    const nextImage = galleryData[nextIndex];
    setSelectedImage(nextImage);
    setCurrentImageIndex(nextIndex);
    setZoomLevel(1);
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 });
  };

  // Navigate to previous image
  const prevImage = () => {
    if (!selectedImage || galleryData.length === 0) return;
    const prevIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    const prevImage = galleryData[prevIndex];
    setSelectedImage(prevImage);
    setCurrentImageIndex(prevIndex);
    setZoomLevel(1);
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 });
  };

  // Zoom functionality
  const toggleZoom = () => {
    if (isZoomed) {
      setZoomLevel(1);
      setIsZoomed(false);
      setPosition({ x: 0, y: 0 });
    } else {
      setZoomLevel(2);
      setIsZoomed(true);
    }
  };

  // Double click zoom
  const handleDoubleClick = () => {
    toggleZoom();
  };

  // Handle mouse wheel for zooming
  const handleImageWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newZoomLevel = Math.max(0.5, Math.min(5, zoomLevel + delta));

    setZoomLevel(newZoomLevel);
    setIsZoomed(newZoomLevel !== 1);

    if (newZoomLevel <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  // Mouse events for panning when zoomed
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isZoomed) return;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isZoomed) return;

    setPosition(prev => ({
      x: prev.x + e.movementX,
      y: prev.y + e.movementY
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isZoomed) return;
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isZoomed) return;
    e.preventDefault();

    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;

    setPosition(prev => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY
    }));

    setTouchStart({
      x: touch.clientX,
      y: touch.clientY
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'z':
        case 'Z':
          toggleZoom();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, closeModal, nextImage, prevImage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Image Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {galleryData?.map((data, index) => (
          <div
            key={data._id}
            className="block group relative overflow-hidden rounded-lg cursor-pointer shadow-md transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(data, index)}
          >
            {/* Image */}
            {data.thumnailImages?.[0] && (
              <>
                <div className="relative w-full aspect-square bg-gray-100">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={data.thumnailImages[0]}
                    alt={language === "ENG" ? data.title_of_english : data.title_of_bangla || data.title_of_english}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Title at Bottom of Image */}
                <div className="absolute bottom-0 left-0 w-full p-2 sm:p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
                    {language === "ENG"
                      ? data.title_of_english
                      : data.title_of_bangla || data.title_of_english}
                  </h3>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Custom Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 sm:p-3 md:p-4"
          onClick={closeModal}
        >
          <div
            className="relative rounded-lg overflow-hidden flex flex-col bg-black w-full md:h-full max-w-full max-h-full md:max-w-[95vw] md:max-h-[65vh] lg:max-w-[90vw] lg:max-h-[67vh] xl:max-w-[1000px] xl:max-h-[600px] mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image container */}
            <div className="flex-1 relative overflow-hidden">
              <div
                className="md:w-full md:h-full flex items-center justify-center relative"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onDoubleClick={handleDoubleClick}
                onWheel={handleImageWheel}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                style={{ cursor: isZoomed ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
              >
                {selectedImage.thumnailImages?.[0] && (
                  <div
                    className="transition-transform duration-300"
                    style={{
                      transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                    }}
                  >
                    <Image
                      src={selectedImage.thumnailImages[0]}
                      alt={language === "ENG" ? selectedImage.title_of_english : selectedImage.title_of_bangla || selectedImage.title_of_english}
                      width={1000}
                      height={800}
                      className="h-[300px] md:h-[400px] lg:h-[600px] w-[400px] md:w-[500px] lg:w-full"
                      priority
                    />
                  </div>
                )}

                {/* OVERLAY ELEMENTS */}

                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-red-500 hover:bg-red-600 text-white w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors duration-200 z-20 shadow-lg"
                >
                  <Close className="text-base sm:text-lg md:text-xl" />
                </button>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 bg-black bg-opacity-40 z-10">
                  <h2 className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-center line-clamp-2">
                    {language === "ENG"
                      ? selectedImage.title_of_english
                      : selectedImage.title_of_bangla || selectedImage.title_of_english}
                  </h2>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 md:p-3 rounded-full hover:bg-opacity-70 transition z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center"
                >
                  <span className="text-base sm:text-lg md:text-xl">&#10094;</span>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 md:p-3 rounded-full hover:bg-opacity-70 transition z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center"
                >
                  <span className="text-base sm:text-lg md:text-xl">&#10095;</span>
                </button>

                {/* Image counter */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 bg-black bg-opacity-50 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm z-10">
                  {currentImageIndex + 1} / {galleryData.length}
                </div>

                {/* Zoom indicator */}
                {isZoomed && (
                  <div className="absolute bottom-14 sm:bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm z-10 hidden sm:block">
                    Zoom: {Math.round(zoomLevel * 100)}%
                  </div>
                )}

                {/* Mobile zoom hint */}
                {isZoomed && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-xs z-10 block sm:hidden">
                    Pinch to zoom & pan
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;