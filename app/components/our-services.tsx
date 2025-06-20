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
      <div className="flex flex-col ml-3 md:flex md:flex-row md:items-start lg:ml-0">
        <h2 className="text-4xl font-abril mt-5 ml-3 mb-5  text-gray-800 lg:text-7xl lg:mb-0">
          Our{" "}
          <span className="text-5xl font-abril4 lg:text-7xl ">Services</span>
        </h2>
      </div>

      <p className="mt-2 ml-7 mb-4 w-1/3 text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore
        atque libero nisi quisquam vitae ipsam, libero nisi quisquam vitae
        ipsam.
      </p>

      <div className="flex justify-around">
        <div className="flex justify-around mt-6 mb-3 w-1/3 ">
          {OurServices.map((service) => (
            <div key={service.id}>
              <h2 className="text-3xl"> {service.title} </h2>

              <div className="w-full h-[1px] bg-black"></div>
            </div>
          ))}
        </div>

        <div></div>
      </div>
    </section>
  );
}
