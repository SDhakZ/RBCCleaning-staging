import React from "react";
import Service from "./service";
import ContactModule from "@/app/components/contactModule/contactModule";
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata = {
  title: "From Clean to Pristine: Comprehensive Cleaning Solutions",
  description:
    "Experience top-notch cleaning services with RBC Cleaning Services. We offer residential and commercial cleaning solutions tailored to your needs. Contact us at info@rbccleaningservices.com. Located at [Insert Location], [Insert City], [Insert Country].",
  keywords: [
    "RBC Cleaning Services",
    "cleaning services",
    "residential cleaning",
    "commercial cleaning",
    "professional cleaning",
    "cleaning solutions",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "From Clean to Pristine: Comprehensive Cleaning Solutions",
    description:
      "Experience top-notch cleaning services with RBC Cleaning Services. We offer residential and commercial cleaning solutions tailored to your needs. Contact us at info@rbccleaningservices.com. Located at [Insert Location], [Insert City], [Insert Country].",
    url: `${websiteUrl}/services`,
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
  },
};

export default function page() {
  return (
    <div>
      <Service />
      <ContactModule />
    </div>
  );
}
