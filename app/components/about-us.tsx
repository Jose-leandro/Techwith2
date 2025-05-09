import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <section>
      <h2 className="text-5xl font-abril mt-5 ml-3">
        About <span className="text-7xl font-abril">TechWith2</span>
      </h2>

      <div className="flex justify-around w-full">
        <p className="w-3/5 text-lg mt-3">
          we believe that the first impression is everything — and that starts
          with a powerful landing page. Founded with a passion for clean design
          and real results, we help entrepreneurs, startups, and businesses
          stand out online through modern, high-performance web experiences.
        </p>

        <div className="bg-gray-100 p-6 rounded-xl shadow-sm w-1/3">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            🚀 Our Mission
          </h3>
          <p className="text-gray-700 text-base">
            To empower businesses worldwide with modern, high-performing landing
            pages that turn visitors into customers — fast, responsive, and
            beautiful.
          </p>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6 w-11/12 ml-3">
        <div className="bg-gray-100 p-6 h-44 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Our Goal</h3>
          <p className="text-gray-700 text-base">
            Deliver personalized web solutions with measurable results,
            combining design and speed for entrepreneurs, startups, and small
            businesses.
          </p>
        </div>

        <div className="bg-gray-100 p-6 h-44 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            🌍 Our Vision
          </h3>
          <p className="text-gray-700 text-base">
            Become a global reference in landing page development, connecting
            with clients in both Portuguese and English — and growing with them.
          </p>
        </div>

        <p className="w-[450px] text-lg">
          What makes TechWith2 different is our focus on both aesthetic and
          performance. We use cutting-edge technologies like React, Next.js, and
          Tailwind CSS to create lightning-fast, responsive landing pages built
          for conversion. With bilingual support in Portuguese and English, we
          serve clients in Brazil and around the world — always delivering
          personalized service with clear results.
        </p>
      </div>
    </section>
  );
}
