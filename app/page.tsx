import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <head>
        <Image src="/logo" height={150} width={100} alt="Logo Of Website" />

        <button>
          <Image src={""} height={0} width={0} alt="" />
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
