import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <head className="flex justify-around">
        <Image src="/logo" height={150} width={100} alt="Logo Of Website" />

        <button>
          <Image src="/icons8-cardápio-48.png" height={20} width={20} alt="" />
        </button>

        <h1>Get Us Services</h1>
      </head>

      <main>
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}
