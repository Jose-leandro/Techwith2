import React from "react";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";
import Head from "next/head";

type PostType = {
  id: number;
  type: string;
  left: string;
};

const TypeOfPost: PostType[] = [
  { id: 1, type: "Programming", left: "left-12" },
  { id: 2, type: "JavaScript", left: "left-44" },
  { id: 3, type: "Language Of Programming", left: "left-72" },
];

type PostDate = {
  id: number;
  img: string;
  alt: string;
  imgRight: string;
  description: string;
  style: string;
  textRight: string;
};

const PostData: PostDate[] = [
  {
    id: 1,
    img: "/img/photoOfAuthor.png",
    alt: "Image of Author",
    imgRight: "right-40",
    style: "w-36",
    description: "José Leandro",
    textRight: "right-20",
  },
  {
    id: 2,
    img: "/img/icons8-calendar-32.png",
    alt: "Image of Calendar",
    imgRight: "right-60",
    style: "w-36",
    description: "25/04/2025",
    textRight: "right-36",
  },
  {
    id: 3,
    img: "/img/icons8-passado-32.png",
    alt: "Image of Time",
    imgRight: "right-60",
    style: "w-20",
    description: "8 minutes",
    textRight: "right-36",
  },
];

const postDateNav = [
  { id: 1, option: "Introduction" },
  { id: 2, option: "Advantages" },
  { id: 3, option: "Disadvantages" },
  { id: 4, option: "Conclusion" },
];

export default function MyFirstPost() {
  return (
    <>
      <Head>
        <title>Why JavaScript Remains One of the Most Powerful Languages in 2025</title>
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Why JavaScript Remains One of the Most Powerful Languages in 2025",
              description:
                "Discover why JavaScript remains one of the most powerful programming languages. Learn its importance and how it shapes modern web development.",
              author: {
                "@type": "Person",
                name: "José Leandro",
              },
              datePublished: "2025-04-25",
            }),
          }}
        />
      </Head>

      <Header />

      <main className="flex flex-wrap justify-start p-6">
        {/* Title Section */}
        <section
          className="flex flex-col w-full md:w-1/2 h-auto md:h-96 mb-8 md:mb-0"
          aria-labelledby="post-title"
        >
          <h1
            id="post-title"
            className="text-4xl font-ibmplex ml-3 leading-tight"
          >
            Why <span className="font-garamond text-5xl">JavaScript</span>{" "}
            Remains One of the Most{" "}
            <span className="font-garamond text-5xl">Powerful</span> Languages
            in the World (In 2025)
          </h1>

          <div className="flex my-2 items-center" role="note" aria-label="Survey source">
            <div className="w-[2px] h-6 bg-gray-900 mr-3"></div>
            <span className="text-cyan-600 font-semibold">
              Based on Stack Overflow’s 2024 Developer Survey
            </span>
          </div>

          <nav aria-label="Post categories" className="flex gap-4 flex-wrap mt-2">
            {TypeOfPost.map(({ id, type }) => (
              <span
                key={id}
                className="bg-slate-600 text-white rounded-full py-1 px-3 text-sm"
              >
                {type}
              </span>
            ))}
          </nav>
        </section>

        {/* Intro Text Section */}
        <section
          className="flex flex-col w-full md:w-2/5 text-lg leading-relaxed"
          aria-label="Introduction"
        >
          <p className="mb-4">
            As we step into 2025, JavaScript continues to dominate the tech world.
            Year after year, it remains one of the most popular and desirable programming
            languages among developers.
          </p>

          <p className="mb-4">
            Millions of developers worldwide rely on it to build everything from websites
            to mobile apps and desktop applications. This ongoing popularity shows the
            true scale and impact of JavaScript.
          </p>

          <p>
            I’m one of those developers. JavaScript is the first (and only) language I’ve
            truly learned and used daily. Over the last four years, I’ve developed projects
            using it — and I genuinely enjoy working with this language.
          </p>

          <p className="mt-4">
            So, what makes JavaScript so powerful? Let’s take a closer look at its advantages
            and disadvantages.
          </p>
        </section>

        {/* Advantages Section */}
        <section
          className="flex justify-start flex-col w-full mt-12 text-lg max-w-4xl"
          aria-labelledby="advantages-heading"
        >
          <h2 id="advantages-heading" className="text-xl font-semibold mb-3">
            🔼 Advantages of JavaScript
          </h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Compatible with All Browsers:</strong> JavaScript is supported by
              all modern web browsers, which means your code will run almost anywhere
              without extra setup.
            </li>
            <li>
              <strong>Strong Community & Industry Support:</strong> JavaScript is backed by
              major tech companies such as Meta (React.js) and Google (Angular). Many
              startups and enterprises use JavaScript tools daily, providing a rich ecosystem.
            </li>
            <li>
              <strong>Ubiquity on the Web:</strong> JavaScript powers everything from
              interactive web pages to full-stack applications (thanks to Node.js). It’s
              nearly impossible to browse the web without encountering JavaScript.
            </li>
            <li>
              <strong>Open Source:</strong> JavaScript is maintained by a global community,
              making it dynamic and constantly evolving.
            </li>
            <li>
              <strong>Rich Interfaces:</strong> Enables developers to build interactive
              user interfaces such as carousels, dropdowns, real-time updates, and more.
            </li>
          </ol>
        </section>

        {/* Disadvantages Section */}
        <section
          className="flex flex-col w-full mt-12 text-lg"
          aria-labelledby="disadvantages-heading"
        >
          <h2 id="disadvantages-heading" className="text-xl font-semibold mb-3">
            🔽 Disadvantages of JavaScript
          </h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Error Handling Can Break User Experience:</strong> When an error
              occurs, JavaScript can cause an entire webpage or feature to stop working if
              not properly managed.
            </li>
            <li>
              <strong>Security Concerns (Client-Side Execution):</strong> Since JavaScript
              runs on the client side, it can be vulnerable to exploitation by malicious users.
            </li>
            <li>
              <strong>Browser Compatibility Issues:</strong> Different browsers may interpret
              JavaScript differently, so developers often need to write additional code or
              use polyfills to ensure consistency.
            </li>
          </ol>
        </section>

        {/* Is It Worth Learning Section */}
        <section
          className="flex flex-col w-full mt-12 text-lg"
          aria-labelledby="worth-learning-heading"
        >
          <h3 id="worth-learning-heading" className="font-semibold text-lg mb-3">
            ✅ Is JavaScript Still Worth Learning in 2025?
          </h3>
          <p>
            Absolutely. As someone who's used JavaScript for over four years building
            real-world projects, I can confidently say it remains an excellent choice.
            It powers most of the web and is used for mobile (React Native), desktop
            (Electron), and backend development (Node.js).
          </p>
          <p className="mt-2">
            JavaScript is relatively easy to learn, versatile, and well-supported —
            making it ideal for both beginners and experienced developers.
          </p>
        </section>

        {/* Personal Perspective Section */}
        <section
          className="flex flex-col w-full mt-12 text-lg"
          aria-labelledby="personal-perspective-heading"
        >
          <h4 id="personal-perspective-heading" className="font-semibold text-lg mb-3">
            💬 My Perspective as a JavaScript Developer
          </h4>
          <p>
            As a developer who has spent years using JavaScript, I want to do everything
            I can to keep it at the top. Maybe it’s partly my ego — I’ve invested a lot
            of time and energy into this language — but I genuinely believe in its power.
          </p>
          <p className="mt-2">
            Even with the rise of AI, I see JavaScript not just surviving but evolving.
            I plan to explore how JavaScript can work with AI — from integrating machine
            learning APIs to building smart, interactive apps using tools like
            TensorFlow.js.
          </p>
          <p className="mt-2">
            JavaScript is more than just code to me — it’s how I bring ideas to life.
            As AI becomes part of every app, I’ll continue using JavaScript to build
            faster, smarter, and better. The journey isn’t over — it’s just getting more exciting.
          </p>
        </section>

        {/* References Section */}
        <section className="w-full mt-12 mb-12" aria-label="References">
          <h4 className="font-semibold text-lg mb-3">🔗 References / Sources</h4>
          <ul className="list-disc list-inside space-y-1 text-cyan-700">
            <li>
              <a
                href="https://survey.stackoverflow.co/2024/technology#most-popular-technologies-language"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-cyan-900"
              >
                Stack Overflow 2024 Survey
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/advantages-and-disadvantages-of-javascript/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-cyan-900"
              >
                GeeksforGeeks - Advantages and Disadvantages of JavaScript
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/news/pros-and-cons-of-javascript/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-cyan-900"
              >
                FreeCodeCamp - Pros and Cons of JavaScript
              </a>
            </li>
            <li>
              <a
                href="https://codeinstitute.net/blog/javascript-advantages-disadvantages/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-cyan-900"
              >
                CodeInstitute Blog
              </a>
            </li>
            <li>
              <a
                href="https://ellow.io/blog/javascript-advantages-disadvantages/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-cyan-900"
              >
                Ellow.io Blog
              </a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

