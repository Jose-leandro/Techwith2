import Image from "next/image";
import React from "react";

export default function OurServices() {
  const OurServices = [
    {
      id: 1,
      title: "Web Development",
      description: "Building responsive and scalable websites.",
      imageUrl: "/web-development.jpg",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Creating seamless and user-friendly mobile applications.",
      imageUrl: "/mobile-app.jpg",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Designing intuitive and aesthetically pleasing user experiences.",
      imageUrl: "/ui-ux.jpg",
    },
  ];

  return (
    <section>
      <div>
        <h2 className="text-5xl font-abril mt-5 ml-3">
          Our <span className="text-7xl font-abril">Services</span>
        </h2>

        <button>Get US Services</button>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore
        atque libero nisi quisquam vitae ipsam.
      </p>

      <div className="flex just">
        {OurServices.map((service) => (
          <div key={service.id} className="">
            <Image
              src={service.imageUrl}
              alt={service.title}
              width={200}
              height={150}
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
