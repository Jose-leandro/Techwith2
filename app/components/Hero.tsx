import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4">
      <h1 className="text-6xl w-4/6 sm:text-5xl font-bold mb-4">
        <span className="">TechWith2</span> – Landing Pages That Convert, Code
        That Performs.
      </h1>

      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8">
        We build high-performing, visually striking landing pages that bring
        your ideas to life and generate real results.
      </p>

      <a
        href="#contact"
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-green-400 text-white rounded-xl font-medium shadow-lg transition-all"
      >
        Let’s Build Your Page
      </a>
    </section>
  );
}
