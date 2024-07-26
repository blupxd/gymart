import Link from "next/link";
import React from "react";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import heroLogo from "@/public/images/herologo.png";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
const Footer = () => {
  const linkovi = [
    {
      naziv: "Početna",
      link: "/",
    },
    {
      naziv: "Cenovnik",
      link: "#cenovnik",
    },
    {
      naziv: "Galerija",
      link: "/galerija",
    },
    {
      naziv: "Treneri",
      link: "#treneri",
    },
  ];
  return (
    <footer className=" bg-emerald flex flex-col">
      <div className="grid px-8 py-12 md:p-24 gap-12 md:gap-0 grid-cols-1 md:cols-2 lg:grid-cols-3">
        <section className="flex  flex-col md:items-start items-center h-full gap-4">
          <Image src={heroLogo} alt="Hero Logo Image" width={150} />
          <div className="flex text-white flex-col md:items-start items-center h-full gap-4">
            <div className="flex items-center gap-2 ">
              <FaInstagram className="text-2xl" />
              <Link
                href="https://www.instagram.com/gymart.beograd/"
                className="text-sm lg:text-base font-light italic"
              >
                @gymart.beograd
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-2xl" />
              <a
                href="tel:+381 11 7643 340"
                className="italic text-sm lg:text-base font-light"
              >
                +381 11 7643 340
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaRegEnvelope className="text-2xl" />
              <a
                href="mailto:gymart.beograd@gmail.com"
                className="italic text-sm lg:text-base font-light"
              >
                gymart.beograd@gmail.com
              </a>
            </div>
          </div>
        </section>
        <nav className="flex xl:ml-0 lg:ml-12 md:ml-16 flex-col text-white">
          <h1 className="font-medium text-xl lg:text-2xl">Meni</h1>
          <ul className="flex flex-col h-full lg:gap-0 md:gap-10 gap-4 lg:justify-between mt-4">
            {linkovi.map((x, y) => (
              <li key={y}>
                <Link
                  className="text-base lg:text-lg flex items-center max-w-max font-light"
                  href={x.link}
                >
                  <FaAngleRight /> {x.naziv}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className="flex md:col-span-2 lg:col-span-1 lg:mt-0 flex-col lg:gap-0 gap-12 md:justify-between md:mt-12">
          <h1 className="text-center text-2xl md:text-2xl lg:text-4xl italic font-black text-zuta">
            “
            <span className="text-white font-normal">
              Izgradite vaše telo kao nikada do sada
            </span>
            ”
          </h1>
          <div className="flex items-start md:items-center gap-1">
            <IoLocationOutline className="text-2xl mt-1 text-white md:mt-0" />
            <h2 className="text-base md:text-sm text-white lg:text-lg font-light">
              Bulevar Kralja Aleksandra 455, Beograd
            </h2>
          </div>
          <div className="flex items-start text-white gap-2">
            <GoClock className="text-2xl" />

            <p className="text-base md:text-sm lg:text-lg">
              Pon. - Pet. 7:00 - 22:00
              <br />
              Sub. - Ned. 8:00 - 21:00
            </p>
          </div>
        </section>
      </div>
      <div className="px-24 py-8 w-full bg-tamni-emerald">
        <p className="text-center text-white/50 font-light text-xs">
          Copyright © 2024. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
