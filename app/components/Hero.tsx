import React from "react";

export default function Hero() {
  return (
    <section className="sm:flex-col sm:flex-wrap min-h-screen flex justify-around items-center bg-gray-900 text-white text-center px-4">
      <div className="flex flex-col items-start w-auto">
        <a
          href="#contact"
          className="sm:text-base  px-6 py-3 text-black bg-white mb-1 rounded-xl font-medium shadow-lg transition-all"
        >
          Let’s Build Your Page
        </a>

        <span className="sm:text-2xl text-9xl font-abril font-normal">TechWith2</span>

        <h1 className="text-7xl w-[700px] sm:text-5xl font-bold mb-4">
          – Landing Pages That Convert, Code That Performs.
        </h1>
      </div>

      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8">
        We build high-performing, visually striking landing pages that bring
        your ideas to life and generate real results.
      </p>
    </section>
  );
}
