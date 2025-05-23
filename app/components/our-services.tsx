import Image from "next/image";
import React from "react";

export default function OurServices() {
  const OurServices = [
    {
      id: 1,
      title: "Web Development",
      description: "Building responsive and scalable websites.",
      imageUrl: "/logo.png",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Creating seamless and user-friendly mobile applications.",
      imageUrl: "/logo.png",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Designing intuitive and aesthetically pleasing user experiences.",
      imageUrl: "/logo.png",
    },
  ];

  return (
    <section className="bg-gray-100 mt-10 mb-10 py-12">
      <div className="flex justify-around items-center ml-3 lg:ml-0">
        <h2 className="text-4xl font-abril mt-5 ml-3 lg:text-7xl">
          Our{" "}
          <span className="text-5xl font-abril4 lg:text-7xl ">Services</span>
        </h2>

        <button className="mr-3 rounded-sm h-auto w-72 text-xl px-1 py-1 bg-zinc-400 text-black lg:w-auto lg:px-3 lg:py-3 lg:text-2xl">
          Get US Services
        </button>
      </div>

      <p className="mt-2 ml-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore
        atque libero nisi quisquam vitae ipsam.
      </p>

      <div className="flex justify-around mt-6 mb-3">
        {OurServices.map((service) => (
          <div
            key={service.id}
            className="bg-gray-200 rounded-2xl px-6 py-7 mb-2 h-auto flex flex-col items-start justify-evenly"
          >
            <Image
              src={service.imageUrl}
              alt={service.title}
              width={40}
              height={30}
            />
            <h3 className="text-base mt-1">{service.title}</h3>
            <p className="text-xs my-3 mb-2">{service.description}</p>
            <button>Learn More {">"}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
