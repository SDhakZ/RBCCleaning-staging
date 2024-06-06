import React from "react";
import { serviceData } from "@/app/data/services";
import Banner from "./Components/banner";
import SellingPoint from "./Components/sellingPoint";
import Testimonial from "@/app/components/testimonial/testimonial";
import Process from "@/app/components/process/process";

export default function page({ params }) {
  const serviceSlug = params.serviceSlug;

  const findServiceBySlug = (slug) => {
    for (const category of serviceData) {
      const service = category.serviceItems.find((item) => item.slug === slug);
      if (service) {
        return service;
      }
    }
    return null;
  };

  const serviceItem = findServiceBySlug(serviceSlug);

  if (!serviceItem) {
    return <div>Service not found</div>;
  }
  return (
    <>
      <Banner serviceItem={serviceItem} />
      <SellingPoint serviceItem={serviceItem} />
      <Testimonial />
      <Process />
    </>
  );
}
