import path from "path";
import { promises as fs } from "fs";

export async function getImageFilenames() {
  const imageDirectory = path.join(process.cwd(), "public/images/galerija");
  const imageFilenames = await fs.readdir(imageDirectory);
  return imageFilenames;
}
