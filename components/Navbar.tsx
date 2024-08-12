"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logonav.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";


const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const linkovi = [
    {
      naziv: "Početna",
      link: "/",
    },
    {
      naziv: "Cenovnik",
      link: "/#cenovnik",
    },
    {
      naziv: "Galerija",
      link: "/galerija",
    },
    {
      naziv: "Treneri",
      link: "/#treneri",
    },
  ];

  const variants = {
    open: { opacity: 1, y: 0, display: "flex" },
    closed: { opacity: 0, y: "-10%", transitionEnd: { display: "none" } },
  };

  return (
    <nav className="w-full fixed flex z-30 items-center md:justify-between bg-white px-8 md:px-24 py-1 md:py-4 border-b-2 border-plava">
      <Link className="mx-auto md:mx-0" href="/">
        <Image src={logo} alt="GymArt Logo" width={120} />
      </Link>
      <ul className="hidden lg:flex items-center gap-10">
        {linkovi.map((x, y) => (
          <li key={y} className="font-medium hover-underline-animation">
            <Link className="text-black text-sm" href={x.link}>
              {x.naziv}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/#pridruzi-se"
        className="bg-black  hover:bg-tamni-emerald transition-all duration-200 lg:block hidden text-white px-6 py-2 text-sm font-medium"
      >
        Pridruži se
      </Link>
      <button
        onClick={() => setMenu(!menu)}
        className="text-black lg:hidden block text-3xl"
      >
        {menu ? <IoCloseOutline /> : <RiMenu4Fill />}
      </button>
      <div className="lg:hidden absolute left-0 right-0 top-14 z-10">
        <motion.ul
          initial="closed"
          animate={menu ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.3 }}
          className="flex flex-col  bg-white p-4 h-96 justify-center  items-center gap-10"
        >
          {linkovi.map((x, y) => (
            <li key={y} className="font-medium ">
              <Link
                className="text-black text-sm"
                href={x.link}
                onClick={() => setMenu(false)}
              >
                {x.naziv}
              </Link>
            </li>
          ))}
          <Link
            onClick={() => setMenu(false)}
            href="/#pridruzi-se"
            className="bg-black  hover:bg-tamni-emerald transition-all duration-200 lg:hidden text-white px-6 py-2 text-xs font-medium"
          >
            Pridruži se
          </Link>
        </motion.ul>
      </div>

      <span className="secnut absolute left-0 -bottom-4 bg-plava w-36 md:w-48 h-4" />
    </nav>
  );
};

export default Navbar;
