import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <main className="flex flex-col">
      
      <Hero />
      <Info />
    </main>
  );
}
