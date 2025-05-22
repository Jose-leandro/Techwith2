import React from "react";

export default function Hero() {
  return (
    <section className="flex-col h-auto flex justify-around items-center bg-gray-100 text-black text-center px-4 py-6 lg:flex">
      <div className="flex flex-col items-center w-auto lg:items-start">
        <a
          href="#contact"
          className="sm:text-base  px-6 py-3 text-black bg-white mb-1 rounded-xl font-medium shadow-lg transition-all"
        >
          Let’s Build Your Page
        </a>

        <span className="text-5xl lg:text-9xl font-abril font-normal">
          TechWith2
        </span>

        <h1 className="text-4xl w-2/3 sm:text-5xl font-bold mb-4 lg:text-7xl lg:w-[700px]">
          – Landing Pages That Convert, Code That Performs.
        </h1>
      </div>

      <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mb-8">
        We build high-performing, visually striking landing pages that bring
        your ideas to life and generate real results.
      </p>
    </section>
  );
}
