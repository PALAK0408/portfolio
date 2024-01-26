import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import AboutSection from "./components/aboutsection";
import ContactMe from "./components/contactme";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 to-indigo-950 bg-[#121212]">
      <Navbar/>
       <div className="container mx-auto px-12 py-14">
         <HeroSection />
         <AboutSection />
         <ContactMe/>
       </div>
    </main>
  );
}
