"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/pagination";

// Import des images statiques
import video1 from "../../../../public/video-section/video-1.webp";
import video2 from "../../../../public/video-section/video-2.webp";
import video3 from "../../../../public/video-section/video-3.webp";
import video4 from "../../../../public/video-section/video-4.webp";
import video5 from "../../../../public/video-section/video-5.webp";
import video6 from "../../../../public/video-section/video-6.webp";
import video7 from "../../../../public/video-section/video-7.webp";
import video8 from "../../../../public/video-section/video-8.webp";
import video9 from "../../../../public/video-section/video-9.webp";
import video10 from "../../../../public/video-section/video-10.webp";
import video11 from "../../../../public/video-section/video-11.webp";
import video12 from "../../../../public/video-section/video-12.webp";
import video13 from "../../../../public/video-section/video-13.webp";
import video14 from "../../../../public/video-section/video-14.webp";
import video15 from "../../../../public/video-section/video-15.webp";
import video16 from "../../../../public/video-section/video-16.webp";
import video17 from "../../../../public/video-section/video-17.webp";
import video18 from "../../../../public/video-section/video-18.webp";

const videoImages = [
  { id: 1, src: video1, alt: "Vidéo 1" },
  { id: 2, src: video2, alt: "Vidéo 2" },
  { id: 3, src: video3, alt: "Vidéo 3" },
  { id: 4, src: video4, alt: "Vidéo 4" },
  { id: 5, src: video5, alt: "Vidéo 5" },
  { id: 6, src: video6, alt: "Vidéo 6" },
  { id: 7, src: video7, alt: "Vidéo 7" },
  { id: 8, src: video8, alt: "Vidéo 8" },
  { id: 9, src: video9, alt: "Vidéo 9" },
  { id: 10, src: video10, alt: "Vidéo 10" },
  { id: 11, src: video11, alt: "Vidéo 11" },
  { id: 12, src: video12, alt: "Vidéo 12" },
  { id: 13, src: video13, alt: "Vidéo 13" },
  { id: 14, src: video14, alt: "Vidéo 14" },
  { id: 15, src: video15, alt: "Vidéo 15" },
  { id: 16, src: video16, alt: "Vidéo 16" },
  { id: 17, src: video17, alt: "Vidéo 17" },
  { id: 18, src: video18, alt: "Vidéo 18" },
];

export default function VideoSlider() {
  const [selectedImage, setSelectedImage] = useState<{
    src: StaticImageData;
    alt: string;
  } | null>(null);

  const openZoom = (image: { src: StaticImageData; alt: string }) => {
    setSelectedImage(image);
  };

  const closeZoom = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="video-slider"
      >
        {videoImages.map((video) => (
          <SwiperSlide key={video.id}>
            <div
              className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => openZoom(video)}
            >
              <Image
                src={video.src}
                alt={video.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal de zoom */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeZoom}
        >
          <div
            className="relative max-w-7xl max-h-full w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .video-slider .swiper-pagination {
          position: relative !important;
          margin-top: 20px !important;
        }

        .video-slider .swiper-pagination-bullet {
          background: #d1d5db !important;
          opacity: 1 !important;
          margin-top: 20px !important;
          width: 12px !important;
          height: 12px !important;
        }

        .video-slider .swiper-pagination-bullet-active {
          background: #ff8000 !important;
        }
      `}</style>
    </div>
  );
}
