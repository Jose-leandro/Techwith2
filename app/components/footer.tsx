import React from "react";
import FooterSection from "./footerSection";
import Divider from "./divider";
// import Divider from "./divider";

const dateFooter = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61574393784225&locale=pt_BR",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/tech_with_2?utm_source=qr&igsh=NHJvdTBhcGU1bHV3",
  },
  {
    title: "X",
    link: "https://x.com/Tech_With2?t=vV0jHYNRbKSXP0T7zkk9oA&s=09",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 mt-10">
      <Divider orientacion="horizontal" width="full" height="1px" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm mt-6">
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold mb-2">Stay Ahead in Tech!</h3>
          <p>
            Explore new trends and guides to boost your skills. Dive into our
            articles and grow as a developer!
          </p>
        </div>

        <FooterSection
          title="Resources"
          dateFooter={[
            { title: "My Recent Post", link: "/posts/recent" },
            { title: "My Best Post", link: "/posts/best" },
          ]}
        />
        <FooterSection
          title="Company"
          dateFooter={[{ title: "What is TechWith2", link: "/about" }]}
        />
        <FooterSection
          title="Help"
          dateFooter={[{ title: "Contact Us", link: "/contact" }]}
        />
        <FooterSection title="Social Media" dateFooter={dateFooter} />
      </div>
    </footer>
  );
}
