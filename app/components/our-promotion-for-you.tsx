import Image from "next/image";
import React from "react";

export default function OurPromotionForYou() {
  const OurPomotion = [
    {
      id: 1,
      title: "Free + Feedback",
      description:
        " Dolore reiciendis ea corrupti libero dolor facere dignissimos ex, nemo beatae velit a rerum?",
      style: "flex-col",
    },
    {
      id: 2,
      title: "By 90% Off",
      description:
        " Dolore reiciendis ea corrupti libero dolor facere dignissimos ex, nemo beatae velit a rerum!",
      style: "flex-col-reverse",
    },
  ];
  return (
    <section>
      <h2 className="text-5xl font-abril mt-5 ml-3">
        Our <span className="text-7xl font-abril">Promotion</span> For{" "}
        <span className="text-7xl font-abril">Your</span>
      </h2>

      <div className="flex justify-around mt-6">
        {OurPomotion.map((service) => (
          <div className={`flex ${service.style} items-center`}>
            <h3 className="text-4xl mt-1 mb-2">{service.title}</h3>

            <div key={service.id} className="flex items-center justify-center">
              <div className="bg-gray-300 rounded-2xl px-6 py-7 w-2/5 mb-2 h-auto flex flex-col items-start justify-evenly lg:w-4/5">
                <p className="text-1xs my-3 mb-2 text-black">
                  {service.description}
                </p>
                <button className="bg-blue-900 text-white py-2 px-4 rounded-sm">
                  Get This Promotion
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
