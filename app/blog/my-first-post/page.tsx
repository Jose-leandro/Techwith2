import React from "react";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";
import Head from "next/head";
import { LuCalendarDays } from "react-icons/lu";

type PostType = {
  type: string;
  left: string;
};

const TypeOfPost: PostType[] = [
  { type: "Programming", left: "left-12" },
  { type: "JavaScript", left: "left-44" },
  { type: "Language Of Programming", left: "left-72" },
];

type PostDate = {
  img: string;
  alt: string;
  imgRight: string;
  description: string;
  textRight: string;
};

const PostData: PostDate[] = [
  {
    img: "/img/photoOfAuthor.png",
    alt: "Image of Author",
    imgRight: "right-40",
    description: "José Leandro",
    textRight: "right-20",
  },
  {
    img: "/img/icons8-calendar-32.png",
    alt: "Image of Calendar",
    imgRight: "right-60",
    description: "25 Of April Of 2025",
    textRight: "right-36",
  },
  {
    img: "/img/icons8-passado-32.png",
    alt: "Image of Time",
    imgRight: "right-60",
    description: "8 minutes",
    textRight: "right-36",
  },
];

export default function MyFirstPost() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Discover why JavaScript remains one of the most powerful programming languages. Learn its importance and how it shapes modern web development."
        />
        <meta
          name="keywords"
          content="JavaScript, Programming, Web Development, Tech Blog"
        />
        <meta name="author" content="José Leandro" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Why JavaScript Remains One of the Most Powerful Languages in the World"
        />
        <meta
          property="og:description"
          content="Discover why JavaScript remains one of the most powerful programming languages. Learn its importance and how it shapes modern web development."
        />
        <meta property="og:type" content="article" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Why JavaScript Remains One of the Most Powerful Languages in the World"
        />
        <meta
          name="twitter:description"
          content="Discover why JavaScript remains one of the most powerful programming languages. Learn its importance and how it shapes modern web development."
        />
      </Head>

      <Header />

      <main>
        <section className="flex justify-end relative h-96">
          <div>
            <h1 className="text-4xl font-ibmplex ml-3 w-3/4 absolute top-32 left-12 z-10">
              Why <span className="font-garamond text-5xl">JavaScript</span>{" "}
              Remains One of the Most{" "}
              <span className="font-garamond text-5xl">Powerful</span> Languages
              in the World
            </h1>

            <p className="mt-1 absolute top-56 left-12 w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              a nihil, fugiat officia mollitia deserunt ipsum? Impedit numquam
              nesciunt eius ullam magnam minima obcaecati, ad, expedita fugit
              tempore voluptatum.
            </p>

            {TypeOfPost.map((element) => (
              <span
                key={element.type}
                className={`className=" bg-slate-800 text-white rounded-full py-1 px-2 mt-1 mx-4 absolute top-72 ${element.left} `}
              >
                {element.type}
              </span>
            ))}
          </div>

          <Image
            className="z-0 absolute top-5 right-16"
            src="/img/Strellar.png"
            width={400}
            height={350}
            alt="Image for the blog post"
          />

          <div className="w-[400px] h-[400px] mr-12 flex flex-col justify-evenly">
            <div className="h-5/6"></div>
            <div className="flex">
              {PostData.map((element) => (
                <div className="w-auto flex h-8" key={element.img}>
                  <Image
                    className=""
                    src={element.img}
                    alt={element.alt}
                    width={20}
                    height={20}
                  />

                  <span className=" bg-slate-800 text-base text-white rounded-full py-1 px-2 mt-1">
                    {element.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
