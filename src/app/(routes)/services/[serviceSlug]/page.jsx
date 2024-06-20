import React from "react";
import ServiceDetail from "@/app/(routes)/services/[serviceSlug]/serviceDetail";
import { serviceData } from "@/app/data/services";
import NotFound from "@/app/not-found";

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

export default function page() {
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
  return (
    <>
      <ServiceDetail hcaptcha_site_key={hcaptcha_site_key} />
    </>
  );
}
