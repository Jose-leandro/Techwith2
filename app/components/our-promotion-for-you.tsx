import Image from "next/image";
import React from "react";

export default function OurPromotionForYou() {
  const OurPomotion = [
    {
      id: 1,
      title: "Free + Feedback",
      description:
        " Dolore reiciendis ea corrupti libero dolor facere dignissimos ex, nemo beatae velit a rerum?",
    },
    {
      id: 2,
      title: "By 90% Off",
      description:
        " Dolore reiciendis ea corrupti libero dolor facere dignissimos ex, nemo beatae velit a rerum!",
    },
  ];
  return (
    <section>
      <h2 className="text-5xl font-abril mt-5 ml-3">
        Our <span className="text-7xl font-abril">Promotion</span> For{" "}
        <span className="text-7xl font-abril">Your</span>
      </h2>

      <div className="flex justify-around flex-col mt-6">
        {OurPomotion.map((service) => (
          <div key={service.id}>
            <div className="bg-black rounded-2xl px-6 py-7 w-2/5 mb-2 h-auto flex flex-col items-start justify-evenly">
              <h3 className="text-4xl mt-1">{service.title}</h3>
              <button className="bg-white text-black">
                Get This Promotion
              </button>
            </div>
            <p className="text-xs my-3 mb-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
