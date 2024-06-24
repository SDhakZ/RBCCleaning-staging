import React from "react";
import About from "./about.jsx";
import ExtraInfo from "./Components/extraInfo.jsx";
import ContactModule from "@/app/components/contactModule/contactModule";
import Services from "@/app/components/services/services.jsx";

const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata = {
  title: "Discover Our Visions and Goals",
  description:
    "RBC Cleaning Services Pty. Ltd. is a local cleaning service company that has been helping people keep their homes and businesses clean for over four years. Learn more about our vision and mission here.",
  keywords: [
    "RBC Cleaning Services",
    "cleaning services",
    "residential cleaning",
    "commercial cleaning",
    "vision and mission",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Discover Our Visions and Goals | RBC Cleaning Services",
    description:
      "RBC Cleaning Services Pty. Ltd. is a local cleaning service company that has been helping people keep their homes and businesses clean for over four years. Learn more about our vision and mission here.",
    images: [
      {
        url: "/OpengraphAlt2.png",
        width: 1800,
        height: 1600,
        alt: "RBC Cleaning Services",
      },
      {
        url: "/Opengraph.png",
        width: 1200,
        height: 630,
        alt: "RBC Cleaning Services",
      },
      {
        url: "/OpengraphAlt.png",
        width: 800,
        height: 600,
        alt: "RBC Cleaning Services",
      },
    ],
    url: `${websiteUrl}/about`,
  },
};
export default function page() {
  return (
    <>
      <About />
      <ExtraInfo />
      <Services />
      <ContactModule />
    </>
  );
}
