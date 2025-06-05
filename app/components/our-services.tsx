import Image from "next/image";
import React from "react";

export default function OurServices() {
  const OurServices = [
    {
      id: 1,
      title: "Landing Pages",
      description: "Building responsive and scalable Landing pages.",
      imageUrl: "/our-services.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 mt-10 mb-10 py-12">
      <div className="flex flex-col ml-3 md:flex md:flex-row md:justify-around md:items-center  lg:ml-0">
        <h2 className="text-4xl font-abril mt-5 ml-3 mb-5 lg:text-7xl lg:mb-0">
          Our{" "}
          <span className="text-5xl font-abril4 lg:text-7xl ">Services</span>
        </h2>

        <button className="ml-5 rounded-sm h-auto w-1/2 mt-2 mb-6 text-xl px-1 py-1 bg-zinc-400 text-black md:w-72 lg:px-3 lg:py-3 lg:text-2xl lg:mt-0 lg:mb-0">
          Get US Services
        </button>
      </div>

      <p className="mt-2 ml-7 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore
        atque libero nisi quisquam vitae ipsam.
      </p>

      <div className="flex justify-around mt-6 mb-3">
        {OurServices.map((service) => (
          <div
            key={service.id}
            className="bg-gray-200 rounded-2xl px-6 py-7 w-11/12 mb-2 h-auto flex-col items-start justify-evenly lg:flex lg:flex-row lg:w-auto"
          >
            <Image
              src={service.imageUrl}
              alt={service.title}
              className="w-3/4 lg:w-[450px]"
              width={450}
              height={350}
            />

            <div className="flex flex-col justify-evenly items-start ml-5">
              <h3 className="mt-1 text-3xl">{service.title}</h3>
              <p className="text-base my-3 mt-4 mb-2">{service.description}</p>
              <button>Learn More {">"}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
