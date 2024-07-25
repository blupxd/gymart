import path from "path";
import { promises as fs } from "fs";
import Gallery from "@/components/Galerija";

const Galerija: React.FC = async () => {
  const imageDirectory = path.join(process.cwd(), "public/images/galerija");
  const imageFilenames = await fs.readdir(imageDirectory);
  return (
    <section className="flex flex-col pt-36 gap-4 bg-white">
         <h1 className="text-4xl md:text-5xl font-extrabold italic text-center text-black">
          Slike naše teretane
        </h1>
        <Gallery imageFilenames={imageFilenames} />
    </section>
  );
};

export default Galerija;
