import React from "react";
import ServiceDetail from "@/app/(routes)/services/[serviceSlug]/serviceDetail";
import { serviceData } from "@/app/data/services";
import NotFound from "@/app/not-found";
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export function generateStaticParams() {
  const allServices = serviceData.flatMap((category) => category.serviceItems);
  const serviceSlugs = allServices.map((service) => ({
    serviceSlug: service.slug,
  }));

  if (!serviceSlugs) {
    return <NotFound />;
  }

  return serviceSlugs;
}

export async function generateMetadata({ params }) {
  // read route params
  const serviceSlug = params.serviceSlug;
  const allServices = serviceData.flatMap((category) => category.serviceItems);
  const serviceItem = allServices.find((item) => item.slug === serviceSlug);

  if (!serviceItem || !serviceSlug) {
    return <NotFound />;
  }
  const { title, brief } = serviceItem;

  const optimizedDescription =
    brief < 230
      ? brief +
        "Email: cleaningservices.rbc@gmail.com, Location: 31 Loftus street Glenorchy, TAS 7010"
      : brief;

  return {
    title: `${title} - Service`,
    description: `${optimizedDescription}`,
    keywords: ["RBC Cleaning Services", "Portfolio", title],
    alternates: {
      canonical: `/services/${serviceSlug}`,
    },
    openGraph: {
      title: `${title}:${brief} - RBC Cleaning Services.`,
      description: `${optimizedDescription}`,
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
      url: `${websiteUrl}/services/${serviceSlug}`,
    },
  };
}

export default function page() {
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
  return (
    <>
      <ServiceDetail hcaptcha_site_key={hcaptcha_site_key} />
    </>
  );
}
