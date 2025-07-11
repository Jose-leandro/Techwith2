import React from "react";

const contacts = [
  {
    typeContact: "Instagram",
    howContact: "contact@techwith2.com",
    conect: "Send One Messagem",
    href: "",
  },
  {
    typeContact: "WhatsApp",
    howContact: "+55 11 91234-5678",
    conect: "Chat on WhatsApp",
    href: "https://wa.me/5511912345678",
  },
  {
    typeContact: "LinkedIn",
    howContact: "linkedin.com/company/techwith2",
    conect: "Visit LinkedIn",
    href: "https://linkedin.com/company/techwith2",
  },
];

export default function Contact() {
  return (
    <section className="mt-10 px-5 bg-gray-300 py-10">
      <h2 className="text-4xl font-abril mt-5 ml-3  text-gray-800 lg:text-5xl">
        Contact <span className="text-5xl font-abril lg:text-7xl">Us</span>
      </h2>

      <div className="flex-col justify-between w-full mt-12 lg:flex-row lg:flex">
        <div className="flex flex-col flex-wrap w-auto mb-3 gap-6 ml-6 lg:w-1/3 lg:mb-0">
          <div className="w-full mb-4">
            <h3 className="text-2xl text-gray-800">
              Let&apos;s Build Something Great Together
            </h3>
          </div>

          <div className="md:flex md:w-full lg:flex-col">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="flex-1 w-auto border rounded-2xl p-4 shadow-md hover:shadow-lg transition duration-300 md:w-1/3 lg:mt-1 lg:w-4/5"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {contact.typeContact}
                </h3>
                <p className="text-gray-600 mb-4">{contact.howContact}</p>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  {contact.conect}
                </a>
              </div>
            ))}
          </div>
        </div>

        <form className="bg-gray-200 p-6 shadow-lg w-auto space-y-4 mt-7 lg:mt-0 lg:w-2/4">
          <h3 className="text-black text-xl">Send Us a Message</h3>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-black mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-2 rounded-md border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-black mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-2 rounded-md border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-black mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="p-2 rounded-md border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
