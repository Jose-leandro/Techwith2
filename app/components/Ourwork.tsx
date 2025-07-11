import Image from "next/image";
import React from "react";

const projects = [
  {
    name: "Strellar",
    description:
      "A modern landing page built for a tech startup focused on digital innovation.",
    image: "/img/Strellar.png",
    link: "https://strellar.tech",
  },
  {
    name: "Upload AI",
    description:
      "AI-driven file sharing and storage service with a clean, minimal UI.",
    image: "/img/uploadAi.jpeg",
    link: "https://uploadai.io",
  },
  {
    name: "Gedf",
    description:
      "Landing page created for a global education funding platform.",
    image: "/img/gedf.jpeg",
    link: "https://gedf.org",
  },
];

export default function OurWork() {
  return (
    <section className="mt-6">
      <h2 className="text-4xl font-abril mt-5 ml-3 w-auto text-gray-800 lg:text-5xl">
        This is{" "}
        <span className="text-5xl font-abril lg:text-7xl"> the first</span>{" "}
        impression{" "}
        <span className="text-5xl font-abril lg:text-7xl">we crafted</span>
      </h2>

      <p className="text-lg text-gray-600 mt-2 ml-2">
        Each project is built using React, Next.js, and Tailwind CSS — tailored
        to drive results and elevate your brand.
      </p>

      <div className="flex flex-wrap justify-center gap-8 mt-10 lg:w-auto lg:flex-nowrap">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl w-11/12 md:w-[30%] overflow-hidden shadow-lg hover:shadow-xl transition duration-300 lg:w-1/2"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={600}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
