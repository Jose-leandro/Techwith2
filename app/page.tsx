import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/about-us";
import OurServices from "./components/our-services";
import OurPromotionForYou from "./components/our-promotion-for-you";
import Contact from "./components/Contact";
import OurWork from "./components/Ourwork";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AboutUs />
        <OurServices />
        <OurPromotionForYou />
        <Contact />
        <OurWork />
      </main>
      <Footer />
    </>
  );
}
