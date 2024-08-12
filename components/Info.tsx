import bg from "@/public/images/background.jpeg";
import Image from "next/image";
import { LuDumbbell } from "react-icons/lu";
import { LiaBroomSolid, LiaHandsHelpingSolid } from "react-icons/lia";
import GallerySlide from "./GallerySlide";
import Link from "next/link";
import img0 from "@/public/images/image0.png";
import img2 from "@/public/images/galerija/image_67210753.jpeg";
import path from "path";
import { promises as fs } from "fs";
import { FaInstagram, FaRegEnvelope, FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import Cenovnik from "./Cenovnik";
import Personalni from "./PersonalniSlide";
import Animation1 from "./Animation1";
import Animation3 from "./Animation3";
import Animation2 from "./Animation2";
import InvalidSVG from "./InvalidSVG";
interface InfoItem {
  ikonica: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  header: string;
  opis: string;
}

const info: InfoItem[] = [
  {
    ikonica: LuDumbbell,
    header: "Najnovije sprave",
    opis: "Naša teretana raspolaže najnovijom opremom",
  },
  {
    ikonica: LiaHandsHelpingSolid,
    header: "Personalni treninzi",
    opis: "Posedujemo najbolje sertifikovane trenere",
  },
  {
    ikonica: LiaBroomSolid,
    header: "Uvek čist",
    opis: "Teretana je uvek čista i uvek blista",
  },
];

const Info: React.FC = async () => {
  const imageDirectory = path.join(process.cwd(), "public/images/galerija");
  const imageFilenames = await fs.readdir(imageDirectory);
  return (
    <section className="overflow-hidden relative flex flex-col bg-white">
      <section className="flex md:gap-0 gap-2 lg:flex-row flex-col lg:items-center justify-between px-8 md:px-24 py-20 z-10">
        {info.map((item, index) => (
          <Animation1 key={index}>
            <div className="p-4 flex md:flex-col justify-center items-center text-left md:text-center">
              <item.ikonica className="text-6xl text-svetlo-plava" />
              <div className="flex md:ml-0 ml-4 flex-col w-64 mt-2">
                <h3 className="text-2xl font-bold text-plava">{item.header}</h3>
                <p className="text-black italic mt-0 md:mt-2 font-light">
                  {item.opis}
                </p>
              </div>
            </div>
          </Animation1>
        ))}
      </section>
      <section className="flex flex-col z-10">
        <h1 className="text-4xl md:text-5xl font-bold md:font-medium italic text-center text-black">
          Pregled teretane
        </h1>
        <GallerySlide imageFilenames={imageFilenames} />
      </section>
      <section className="flex lg:flex-row flex-col-reverse items-end gap-6 mx-8 md:mx-24 mt-24 mb-20">
        <Animation1>
          <div className="flex flex-col text-center lg:text-left w-full">
            <InvalidSVG className='w-12 h-12 mb-4 lg:h-16 lg:w-16 lg:hidden fill-black mx-auto'/>
            <h1 className="text-4xl lg:text-5xl font-bold lg:font-semibold lg:flex lg:items-center text-black italic">
              Invalid friendly
              <InvalidSVG className='hidden md:h-16 md:w-16 lg:block ml-2 fill-black'/>
            </h1>
            <h2 className="text-xl lg:text-3xl mt-2 mb-4 lg:my-6 font-extrabold italic text-zuta">
              I invaliditet voli sport!
            </h2>
            <p className="text-black leading-6 lg:leading-8 w-full lg:w-[30rem] text-base md:text-2xl italic font-light">
              U našoj teretani većina sprava za gornji deo tela poseduje opciju{" "}
              <span className="font-medium">prilaska invalidskih kolica</span>,
              kao i <span className="font-medium">prilagođeni toalet.</span>
            </p>
            <div className="flex flex-col w-full lg:max-w-max">
              <h3 className="text-lg lg:text-3xl mt-4 mb-2 lg:my-6 italic font-extrabold text-black">
                Zajedno gradimo prave vrednosti!
              </h3>
              <FaRegHeart className="w-10 h-10 text-zuta mx-auto" />
            </div>
          </div>
        </Animation1>
        <Animation3>
          <div className="relative w-auto lg:h-full z-10">
            <Image src={img0} alt="Image 0" />
          </div>
        </Animation3>
      </section>
      <section
        id="pridruzi-se"
        className="relative scroll-mt-40 flex lg:flex-row flex-col items-start mx-8 md:mx-24 mb-32 gap-6 z-10"
      >
        <Animation2>
          <div className="relative w-full h-64 md:h-96">
            <span className="bg-zuta w-48 md:w-72 md:h-8 h-6 md:-top-4 -top-3 -left-4 md:-left-6 absolute z-20" />
            <Image
              src={img2}
              alt="Slika postanite clan"
              className="secnut3 z-10"
              fill
              objectFit="cover"
            />
            <span className="bg-plava w-48 md:w-72 md:h-8 h-6 -bottom-3 md:-bottom-4 right-10 md:right-16 absolute" />
          </div>
        </Animation2>
        <Animation1>
          <div className="text-black w-full h-full">
            <h1 className="text-3xl md:text-5xl md:italic font-bold md:font-semibold">
              Postanite naš član!
            </h1>
            <p className="font-light italic leading-6 text-base md:text-2xl my-2 md:my-4">
              Dobrodošli u našu teretanu! Sa modernom opremom, stručnim osobljem
              i prijatnom atmosferom, nudimo grupne časove i personalne treninge
            </p>
            <div className="flex flex-col justify-between h-full md:gap-0 gap-2 md:h-44">
              <div className="flex items-center gap-1">
                <IoLocationOutline className="text-2xl" />
                <h2 className="text-sm md:text-lg italic font-semibold">
                  Bulevar Kralja Aleksandra 455, Beograd
                </h2>
              </div>
              <div className="flex items-center gap-1">
                <FaInstagram className="text-2xl" />
                <Link
                  href="https://www.instagram.com/gymart.beograd/"
                  className="text-sm md:text-lg font-light"
                >
                  @gymart.beograd
                </Link>
              </div>
              <div className="flex items-center gap-1">
                <FiPhone className="text-2xl" />
                <a
                  href="tel:+381 11 7643 340"
                  className="text-sm md:text-lg font-light"
                >
                  +381 11 7643 340
                </a>
              </div>
              <div className="flex items-center gap-1">
                <FaRegEnvelope className="text-2xl" />
                <a
                  href="mailto:gymart.beograd@gmail.com"
                  className="text-sm md:text-lg font-light"
                >
                  gymart.beograd@gmail.com
                </a>
              </div>
            </div>
          </div>
        </Animation1>
      </section>
      <section id="cenovnik" className="flex flex-col z-10">
        <Animation1>
          <h1 className="text-5xl italic font-bold md:font-medium text-center text-black">
            Članarine i cenovnik
          </h1>
        </Animation1>
        <Cenovnik />
      </section>
      <section id="treneri" className="relative flex flex-col z-10 mt-24 mb-36">
        <h1 className="text-5xl italic md:block hidden font-medium text-center text-black">
          Upoznajte naš tim
        </h1>
        <div className="z-10 bg-plava py-24 krivina2 md:krivina">
          <h1 className="text-5xl mx-8 sm:text-6xl italic font-bold md:hidden text-center text-white">
            Upoznajte naš tim
          </h1>
          <Personalni />
        </div>
        <span className="w-full h-[90%] bg-zuta krivina2 md:krivina absolute -bottom-2" />
      </section>
      <Image
        src={bg}
        fill
        objectFit="cover"
        className="opacity-5"
        alt="Background Image"
      />
    </section>
  );
};

export default Info;
