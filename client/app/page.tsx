import Image from "next/image";
import MapViewer from "../components/MapViewer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Residencies from "@/components/Residencies";
import Rentals from "@/components/Rentals";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contacts";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Residencies />
      <Rentals />
      <AboutUs />
      <Contact />
      <CallToAction />
    </div>
  );
}
