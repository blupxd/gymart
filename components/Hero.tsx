import Image from "next/image";
import heroImage from "@/public/images/heroImage.jpeg";
import heroLogo from "@/public/images/herologo.png";
import Link from "next/link";
import { GoClock } from "react-icons/go";
import fitpass from "@/public/images/fitpass.png";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { FiExternalLink, FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <header className="relative mt-10 md:mt-20 flex lg:pb-0 pb-28  flex-col w-full overflow-hidden">
      <div className="flex flex-col items-center p-20">
        <Image src={heroLogo} alt="Hero Logo Image" width={300} />
        <h1 className="text-white text-xl md:w-96 w-72 text-center mt-4">
          Pridruži nam se danas i postani član{" "}
          <span className="font-bold italic">GYMART</span> teretane!
        </h1>
        -
        <Link
          href="#pridruzi-se"
          className="border-2 border-white px-6 font-medium mt-4 py-2"
        >
          Postani član
        </Link>
      </div>
      <div className="bg-plava flex py-2 md:py-4 px-8 md:px-24 w-full md:max-w-max secnut2">
        <div className="flex flex-col pr-4 md:pr-12 border-r border-white">
          <h1 className="text-4xl md:text-5xl font-extrabold italic md:font-normal">
            200+
          </h1>
          <p className="text-xs md:text-xl font-light">zadovoljnih vežbača</p>
        </div>
        <div className="ml-4 flex flex-col">
          <h1 className="text-4xl md:text-5xl font-extrabold italic md:font-normal">
            4
          </h1>
          <p className="text-xs md:text-xl font-light">
            profesionalnih trenera
          </p>
        </div>
      </div>
      <aside className="bg-black py-4 px-8 md:px-24 flex items-start justify-between">
        <div className="flex items-start gap-2">
          <GoClock className="md:w-16 mt-1 md:h-16 w-5 h-5" />
          <div className="flex flex-col text-white ">
            <h1 className="font-bold italic text-base md:text-xl">Radno vreme</h1>
            <p className="text-sm md:text-base w-full">
              Pon. - Pet. 7:00 - 22:00
              <br />
              Sub. - Ned. 8:00 - 21:00
            </p>
          </div>
        </div>
        <div className="flex md:flex-col flex-col-reverse justify-between md:justify-normal gap-2">
          <div className="flex lg:flex-row flex-col items-end lg:items-center md:gap-4 justify-end md:justify-between text-xl md:text-2xl">
            <Image
              src={fitpass}
              className="lg:block hidden"
              width={220}
              alt="Fitpass partner"
            />
            <div className="flex items-center text-lg md:text-xl gap-4">
              <Link href="https://www.instagram.com/gymart.beograd">
                <FaInstagram />
              </Link>
              <a href="tel:+381 61 1234 567">
                <FiPhone />
              </a>
              <a href="mailto:gymart.beograd@gmail.com">
                <FaRegEnvelope />
              </a>
            </div>
          </div>
          <div className="flex lg:items-center">
            <IoLocationOutline className="w-4 h-4 md:w-8 md:h-8" />
            <Link
              href="https://www.google.com/maps/place/GYMART/@44.7821796,20.5201296,17z/data=!3m1!4b1!4m6!3m5!1s0x475a71d16aa6662b:0x580a9cfc2830381!8m2!3d44.7821758!4d20.5227045!16s%2Fg%2F11vz3tdf4t?entry=ttu"
              className="text-[0.6rem] text-right lg:text-right w-32 md:text-base md:w-52 lg:w-full"
            >
              Bulevar Kralja Aleksandra 455, Beograd
            </Link>
            <FiExternalLink className="mb-1 w-6 h-6 ml-1 lg:block hidden" />
          </div>
        </div>
      </aside>
      <Image
        src={fitpass}
        className="absolute bottom-10 max-w-max left-0 right-0 mx-auto lg:hidden"
        width={300}
        alt="Fitpass partner"
      />
      <Image
        src={heroImage}
        alt="Hero Background Image"
        className="opacity-20 -z-10"
        fill
        objectFit="cover"
      />
    </header>
  );
};

export default Hero;
