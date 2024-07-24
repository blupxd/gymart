import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logonav.png";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
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
    <nav className="w-full fixed flex z-30 items-center md:justify-between bg-white px-8 md:px-24 py-1 md:py-4 border-b-2 border-plava">
      <Link className='mx-auto md:mx-0' href="/">
        <Image src={logo} alt="GymArt Logo" width={120} />
      </Link>
      <ul className="hidden lg:flex items-center gap-10">
        {linkovi.map((x, y) => (
          <li key={y} className="font-medium">
            <Link className="text-black text-sm" href={x.link}>
              {x.naziv}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="#pridruzi-se"
        className="bg-black lg:block hidden text-white px-6 py-2 text-sm font-medium"
      >
        Pridruži se
      </Link>
      <button className="text-black lg:hidden block text-3xl">
        <CgMenuRight />
      </button>
      <span className="secnut absolute left-0 -bottom-4 bg-plava w-36 md:w-48 h-4" />
    </nav>
  );
};

export default Navbar;
