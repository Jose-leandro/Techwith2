import React from "react";

const contacts = [
  {
    typeContact: "Email",
    howContact: "contact@techwith2.com",
    conect: "Send Email",
    href: "mailto:contact@techwith2.com",
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
    <section className="mt-10 px-5">
      <h2 className="text-5xl font-abril mt-5 ml-3">
        Contact <span className="text-7xl font-abril">Us</span>
      </h2>

      <div className="flex flex-col flex-wrap gap-6 mt-2 w-2/4">
        <div className="w-full mb-4">
          <h3 className="text-2xl font-semibold">
            Let's Build Something Great Together
          </h3>
        </div>

        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex-1 w-aut border rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
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

      <div></div>
    </section>
  );
}
