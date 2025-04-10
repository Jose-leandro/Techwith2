import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <head>
        <Image src={""} height={9} width={0} alt=""></Image>

        <button>
          <Image src={""} height={0} width={0} alt=""></Image>
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
