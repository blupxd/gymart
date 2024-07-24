"use client";
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import Link from 'next/link';

// Definišite tip za props
interface GallerySlideProps {
  imageFilenames: string[];
}

// Komponenta
const GallerySlide: React.FC<GallerySlideProps> = ({ imageFilenames }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const scrollAmount = 300; // Prilagodite ovu vrednost prema potrebi

  const updateScrollState = () => {
    if (scrollerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth-100);
      setIsAtStart(scrollLeft === 0);
    }
  };

  const handleLeftClick = () => {
    if (scrollerRef.current && !isAtStart) {
      scrollerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
      updateScrollState();
    }
  };

  const handleRightClick = () => {
    if (scrollerRef.current && !isAtEnd) {
      scrollerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
      updateScrollState();
    }
  };

  return (
    <div className="z-10 relative">
      <button
        onClick={handleLeftClick}
        className="text-black absolute max-h-max  text-3xl -bottom-7 lg:bottom-0 lg:top-1/2 left-10"
        disabled={isAtStart}
      >
        <FaChevronLeft />
      </button>
      <div
        ref={scrollerRef}
        className="scroller md:auto-cols-[50%] lg:auto-cols-[33.33%] pr-[3rem] lg:pr-[6rem] auto-cols-[85%] scroll-pl-4 pl-4 md:pl-0 md:scroll-pl-0 mx-0 md:mx-24 my-10 snaps-inline"
        onScroll={updateScrollState}
      >
        {imageFilenames.map((x, y) => (
          <div key={y} className="md:h-80 lg:h-[28rem] h-72 relative">
            <Image
              src={`/images/galerija/${x}`}
              alt={x}
              fill
              objectFit="cover"
            />
          </div>
        ))}
      </div>
       <Link
          href="/galerija"
          className="bg-black absolute left-0 right-0 -bottom-8 px-10 md:px-14 font-normal py-2 max-w-max mx-auto"
        >
          Vidi sve
        </Link>
      <button
        onClick={handleRightClick}
        className="text-black right-10 max-h-max text-3xl absolute -bottom-7 lg:bottom-0 lg:top-1/2"
        disabled={isAtEnd}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default GallerySlide;
