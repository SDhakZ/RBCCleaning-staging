import React from "react";
import Banner from "./Components/banner";
import Showcase from "./Components/showcase";
import ContactModule from "@/app/components/contactModule/contactModule";

const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata = {
  title: "Gallery | RBC Cleaning Services",
  description:
    "Explore the RBC Cleaning Services Gallery to see our work in action. From residential to commercial cleaning, witness the transformation and quality service we provide.",
  keywords: [
    "RBC Cleaning Services",
    "cleaning services gallery",
    "before and after cleaning",
    "residential cleaning",
    "commercial cleaning",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | RBC Cleaning Services",
    description:
      "Explore the RBC Cleaning Services Gallery to see our work in action. From residential to commercial cleaning, witness the transformation and quality service we provide.",
    images: [
      {
        url: "/OpengraphAlt2.png",
        width: 1800,
        height: 1600,
        alt: "RBC Cleaning Services Gallery",
      },
      {
        url: "/Opengraph.png",
        width: 1200,
        height: 630,
        alt: "RBC Cleaning Services Gallery",
      },
      {
        url: "/OpengraphAlt.png",
        width: 800,
        height: 600,
        alt: "RBC Cleaning Services Gallery",
      },
    ],
    url: `${websiteUrl}/gallery`,
  },
};

export default function page() {
  return (
    <>
      <Banner />
      <Showcase />
      <ContactModule />
    </>
  );
}
