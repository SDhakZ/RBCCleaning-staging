import React from "react";
import Faq from "@/app/components/faq/faq";
import Contact from "./contact";

const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata = {
  title: "Drop us a line for your inquiries",
  description:
    "Contact RBC Cleaning Services for all your cleaning needs. Email us at info@rbccleaningservices.com. Visit us at 31 Loftus street Glenorchy, TAS 7010.",
  keywords: [
    "RBC Cleaning Services",
    "contact",
    "contact us",
    "cleaning services",
    "residential cleaning",
    "commercial cleaning",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | RBC Cleaning Services",
    description:
      "Contact RBC Cleaning Services for all your cleaning needs. Email us at info@rbccleaningservices.com. Visit us at 31 Loftus street Glenorchy, TAS 7010.",
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
    url: `${websiteUrl}/contact`,
  },
};

export default function page() {
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
  return (
    <>
      <Contact hcaptcha_site_key={hcaptcha_site_key} />
      <Faq slide={true} />
    </>
  );
}
