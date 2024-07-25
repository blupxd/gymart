"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImagePopup from "./ImagePopup";
interface GallerySlideProps {
  imageFilenames: string[];
}

const Gallery: React.FC<GallerySlideProps> = ({ imageFilenames }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openPopup = (index: number) => {
    setCurrentImageIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => setIsPopupOpen(false);

  const handleNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % imageFilenames.length
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + imageFilenames.length) % imageFilenames.length
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-24 py-12 gap-8">
      {imageFilenames.map((x, y) => (
        <div
          key={y}
          className="h-72 md:h-80 lg:h-96 w-full relative overflow-hidden shadow-lg shadow-black/30 cursor-pointer"
          onClick={() => openPopup(y)}
        >
          <Image src={`/images/galerija/${x}`} alt={x} fill objectFit="cover" />
        </div>
      ))}
      <ImagePopup
        isOpen={isPopupOpen}
        onRequestClose={closePopup}
        currentImageIndex={currentImageIndex}
        imageFilenames={imageFilenames}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default Gallery;
