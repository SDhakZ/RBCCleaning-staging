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
  return (
    <>
      <ServiceDetail />
    </>
  );
}
