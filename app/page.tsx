import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/about-us";
import OurServices from "./components/our-services";
import OurPromotionForYou from "./components/our-promotion-for-you";
import Contact from "./components/Contact";
import OurWork from "./components/Ourwork";

export default function Home() {
  return (
    <>
      <header className="flex justify-around items-center lg:justify-around lg:items-center">
        <Image
          src="/logo.png"
          className="py-2 lg:py-2"
          height={80}
          width={60}
          alt="Logo Of Website"
        />

        <button className="size-8 text-3xl text-black lg:size-8 lg:text-3xl">
          =
        </button>

        <h1 className="text-black underline">Get Us Services</h1>
      </header>

      <main>
        <Hero />
        <AboutUs />
        <OurServices />
        <OurPromotionForYou />
        <Contact />
        <OurWork />
      </main>
      <footer></footer>
    </>
  );
}
