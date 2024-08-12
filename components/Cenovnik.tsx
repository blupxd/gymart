"use client";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import GluteArt from "./Glute";
import StrongArt from "./StrongArt";
import Animation1 from "./Animation1";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";
const Cenovnik = () => {
  const [showProgarms, setShowPrograms] = useState<boolean>(false);
  const clanarine = [
    {
      title: "Dnevni",
      price: "800",
      benefits: ["jednodnevni ulazak", "korišćenje svih sprava"],
    },
    {
      title: "Mesečna",
      price: "3,500",
      benefits: ["neograničeni dolasci mesec dana", "korišćenje svih sprava"],
    },
    {
      title: "Polugodišnja",
      price: "16,500",
      benefits: ["neograničeni dolasci 6 meseci", "korišćenje svih sprava"],
    },
    {
      title: "Godišnja",
      price: "31,000",
      benefits: ["neograničeni dolasci 12 meseci", "korišćenje svih sprava"],
    },
  ];
  const variants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const vodjeni = {
    title: "Vodjeni treninzi",
    price: "6,500",
    benefits: [
      "vođeni treninzi u grupama sa trenerima",
      "12 treninga sa konstantnim nadzorom",
      "neograničeni dolasci mesec dana",
    ],
    programi: [
      {
        naziv: "Glute Art",
        opis: "Predstavlja trening sa akcentom na razvoj gluteusa i donjeg dela tela, ali bez zapostavljanja ostalih mišićnih regija.",
      },
      {
        naziv: "Strong Art",
        opis: "Trening namenjen za razvoj mišićne mase celog tela.",
      },
    ],
  };
  const personalni = {
    title: "Personalni treninzi",
    price: "12,500",
    benefits: [
      "plan ishrane i treninga",
      "online konsultacije",
      "neograničeni dolasci mesec dana",
    ],
  };
  return (
    <div className="mx-8 md:mx-24 my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {clanarine.map((x, y) => (
        <Animation1 key={y}>
          <div className="bg-white h-full border-b-4 border-zuta px-6 py-8 flex flex-col gap-3 items-center lg:col-span-2 xl:col-span-1">
            <h1 className="text-black text-2xl italic font-normal">
              {x.title}
            </h1>
            <h2 className="text-3xl italic text-center text-svetlo-plava font-bold">
              {x.price} <span className="text-black">RSD</span>
            </h2>
            <div className="flex flex-col gap-2">
              {x.benefits.map((z, k) => (
                <div key={k} className="flex gap-1 items-start">
                  <IoMdCheckmarkCircleOutline className="w-5 h-5 text-svetlo-plava" />
                  <p className="text-black text-sm text-wrap italic w-full">
                    {z}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Animation1>
      ))}
      <div className="col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-2 h-full">
        <Animation1>
          <div className="bg-white h-auto border-b-8 border-svetlo-plava px-6 py-8 flex md:flex-row flex-col items-center">
            <div className="flex flex-col gap-3 items-center w-auto md:pr-4 md:border-r border-svetlo-plava">
              <h1 className="text-black text-2xl italic font-normal">
                {vodjeni.title}
              </h1>
              <h2 className="text-3xl text-center italic text-zuta font-extrabold">
                {vodjeni.price} <span className="text-black">RSD</span>
                <span className="text-xs text-black">/mes</span>
              </h2>
              <div className="flex flex-col gap-2">
                {vodjeni.benefits.map((z, k) => (
                  <div key={k} className="flex gap-1 items-start">
                    <IoMdCheckmarkCircleOutline className="w-5 h-5 text-zuta" />
                    <p className="text-black text-sm text-wrap italic w-full">
                      {z}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden gap-4 md:flex flex-col h-full justify-between ml-8 w-1/2">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <GluteArt className="-mt-3 w-8 h-8" />
                  <h1 className="text-roze italic text-2xl font-semibold">
                    {vodjeni.programi[0].naziv}
                  </h1>
                </div>
                <p className="text-light italic text-black text-sm">
                  {vodjeni.programi[0].opis}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <StrongArt className="-mt-3 w-8 h-8" />
                  <h1 className="text-svetlo-plava italic text-2xl font-semibold">
                    {vodjeni.programi[1].naziv}
                  </h1>
                </div>
                <p className="text-light italic text-black text-sm">
                  {vodjeni.programi[1].opis}
                </p>
              </div>
            </div>
            <div className="md:hidden flex flex-col w-full mt-12">
              <button
                onClick={() =>
                  showProgarms ? setShowPrograms(false) : setShowPrograms(true)
                }
                className="bg-black px-16 mb-0 py-2 text-sm md:hidden relative"
              >
                Programi{" "}
                {showProgarms ? <MdOutlineKeyboardArrowUp className="text-white absolute top-2 right-3 h-6 w-6" /> :<MdOutlineKeyboardArrowDown className="text-white absolute top-2 right-3 h-6 w-6" /> }
              </button>
              <motion.div
                initial="open"
                animate={showProgarms ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden pt-8 items-center text-center flex flex-col w-full gap-4 bg-white max-h-max"
              >
                <div className="flex items-center flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <GluteArt className="-mt-3 w-8 h-8" />
                    <h1 className="text-roze italic text-2xl font-semibold">
                      {vodjeni.programi[0].naziv}
                    </h1>
                  </div>
                  <p className="text-light italic text-black text-sm">
                    {vodjeni.programi[0].opis}
                  </p>
                </div>
                <div className="flex items-center flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <StrongArt className="-mt-3 w-8 h-8" />
                    <h1 className="text-svetlo-plava italic text-2xl font-semibold">
                      {vodjeni.programi[1].naziv}
                    </h1>
                  </div>
                  <p className="text-light italic text-black text-sm">
                    {vodjeni.programi[1].opis}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Animation1>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-2 h-full">
        <Animation1>
          <div className="bg-white h-full border-b-8 border-svetlo-plava px-6 py-8 flex flex-col gap-3 items-center">
            <h1 className="text-black text-2xl italic font-normal">
              {personalni.title}
            </h1>
            <h2 className="text-3xl text-center italic text-zuta font-extrabold">
              {personalni.price} <span className="text-black">RSD</span>
              <span className="text-xs text-black">/mes</span>
            </h2>
            <div className="flex flex-col gap-2">
              {personalni.benefits.map((z, k) => (
                <div key={k} className="flex gap-1 items-start">
                  <IoMdCheckmarkCircleOutline className="w-5 h-5 text-zuta" />
                  <p className="text-black text-sm text-wrap italic w-full">
                    {z}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Animation1>
      </div>
    </div>
  );
};

export default Cenovnik;
