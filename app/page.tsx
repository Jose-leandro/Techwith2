import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/about-us";
import OurServices from "./components/our-services";

export default function Home() {
  return (
    <>
      <head className="flex justify-around items-center">
        <Image
          src="/logo.png"
          className="py-2"
          height={80}
          width={60}
          alt="Logo Of Website"
        />

        <button className="size-8 text-3xl text-white">=</button>

        <h1 className="text-white">Get Us Services</h1>
      </head>

      <main>
        <Hero />
        <AboutUs />
        <OurServices />
      </main>
      <footer></footer>
    </>
  );
}
