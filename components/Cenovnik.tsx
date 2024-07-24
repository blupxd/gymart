import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";
import GluteArt from "./Glute";
import StrongArt from "./StrongArt";
const Cenovnik = () => {
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
        <div
          className="bg-white border-b-4 border-zuta px-6 py-8 flex flex-col gap-3 items-center lg:col-span-2 xl:col-span-1"
          key={y}
        >
          <h1 className="text-black text-2xl italic font-normal">{x.title}</h1>
          <h2 className="text-3xl italic text-svetlo-plava font-bold">
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
      ))}
      <div className="bg-white border-b-8 border-svetlo-plava px-6 py-8 col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-2 flex md:flex-row flex-col items-center">
        <div className="flex flex-col gap-3 items-center w-auto md:pr-4 md:border-r border-svetlo-plava">
          <h1 className="text-black text-2xl italic font-normal">
            {vodjeni.title}
          </h1>
          <h2 className="text-3xl italic text-zuta font-extrabold">
            {vodjeni.price} <span className="text-black">RSD</span><span className="text-xs text-black">/mes</span>
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
        <div className="hidden md:flex flex-col h-full justify-between ml-8 w-1/2">
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
        <button className="bg-black px-6 py-2 mt-8 text-sm md:hidden">Programi</button>
      </div>
      <div className="bg-white border-b-8 border-svetlo-plava px-6 py-8 col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-2 flex flex-col gap-3 items-center">
        <h1 className="text-black text-2xl italic font-normal">
          {personalni.title}
        </h1>
        <h2 className="text-3xl italic text-zuta font-extrabold">
          {personalni.price} <span className="text-black">RSD</span><span className="text-xs text-black">/mes</span>
        </h2>
        <div className="flex flex-col gap-2">
          {personalni.benefits.map((z, k) => (
            <div key={k} className="flex gap-1 items-start">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 text-zuta" />
              <p className="text-black text-sm text-wrap italic w-full">{z}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cenovnik;
