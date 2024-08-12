"use client";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import aleksandra from "@/public/images/aleksandra.jpg"
import marko from "@/public/images/marko.jpg"
import petar from "@/public/images/petar.jpg"
import mira from "@/public/images/mira.jpg"
import { useInView } from "framer-motion";
// Komponenta
const Personalni: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const windowWidth = useWindowSize();

  const scrollAmount = windowWidth.width > 2000 ? 850 : 250; // Prilagodite ovu vrednost prema potrebi
  const lastRef = useRef<any>(null);
  const treneri = [
    {
      ime: "Mira Skrobić",
      email: "miraskrobic3@gmail.com",
      instagram: "_mirkaa997_",
      tel: "+381 61 2964 517",
      slika: mira,
    },
    {
      ime: "Aleksandra Petković",
      email: "aleksandrapetkovic756@gmail.com",
      instagram: "petkovic_aleksandra",
      tel: "+381 69 5503 545",
      slika: aleksandra,
    },
    {
      ime: "Petar Petrović",
      email: "petarpetar1@live.com",
      instagram: "petar__petrovic",
      tel: "+381 60 1538 707",
      slika: petar,
    },
    {
      ime: "Marko Stefanović",
      email: "stefanovicmare@gmail.com",
      instagram: "markomss",
      tel: "+381 60 6643 595",
      slika: marko,
    },
  ];
  const isInView = useInView(lastRef)
  const updateScrollState = () => {
    if (scrollerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
      setIsAtEnd(isInView);
      setIsAtStart(scrollLeft === 0);
    }
  };

  useEffect(() => {
    console.log(isInView)
    const timer = setInterval(() => {
      if (scrollerRef.current) {
        if (isInView) {
          scrollerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          scrollerRef.current.scrollTo({
            left: scrollerRef.current.scrollLeft + scrollAmount,
            behavior: "smooth",
          });
        }
        setTimeout(updateScrollState, 500); // Delay to ensure smooth scroll completes before state update
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isInView, isAtStart]);

  const handleLeftClick = () => {
    if (scrollerRef.current && !isAtStart) {
      scrollerRef.current.scrollTo({
        left: scrollerRef.current.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
      setTimeout(updateScrollState, 500); // Delay to ensure smooth scroll completes before state update
    }
  };

  const handleRightClick = () => {
    if (scrollerRef.current && !isInView) {
      scrollerRef.current.scrollTo({
        left: scrollerRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
      setTimeout(updateScrollState, 500); // Delay to ensure smooth scroll completes before state update
    }
  };
  return (
    <div className="z-10 relative mt-10">
      <button
        onClick={handleLeftClick}
        className="text-white absolute text-3xl max-h-max bottom-6 md:bottom-20 lg:top-1/2 left-10"
        disabled={isAtStart}
      >
        <FaChevronLeft />
      </button>
      <div
        ref={scrollerRef}
        className="scroller auto-cols-[100%] md:auto-cols-[50%] md:pr-[3rem] lg:pr-[6rem] lg:auto-cols-[33.33%] mx-8 md:mx-24 snaps-inline"
        onScroll={updateScrollState}
      >
        {treneri.map((x, y) => (
          <div
            key={y}
            ref={y === treneri.length-1 ? lastRef : null}
            className="md:px-0 md:py-8 xl:p-6 flex flex-col items-center text-white"
          >
            <div className="w-full h-[30rem] sm:h-[28rem] md:h-96 lg:h-[32] relative shadow-md shadow-black/30">
              <Image src={x.slika} alt={x.ime} fill objectFit="cover" />
            </div>
            <h1 className="text-3xl md:text-2xl lg:text-3xl text-center font-medium mt-2">
              {x.ime}
            </h1>
            <h2 className="italic text-lg font-thin">personalni trener</h2>
            <div className="flex items-center justify-between w-24 mt-2">
              <a href={`mailto: ${x.email}`} className="text-xl">
                <FaRegEnvelope />
              </a>
              <Link
                className="text-xl"
                href={`https://www.instagram.com/${x.instagram}`}
              >
                <FaInstagram />
              </Link>
              <a href={`tel: ${x.tel}`} className="text-xl">
                <FiPhone />
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleRightClick}
        className="text-white right-10 text-3xl max-h-max absolute bottom-6 md:bottom-20 z-20 lg:top-1/2 "
        disabled={isInView}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};
function useWindowSize() {

  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
export default Personalni;
