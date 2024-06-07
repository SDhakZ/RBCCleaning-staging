"use client";
import React from "react";
import { serviceData } from "@/app/data/services";
import Banner from "./Components/banner";
import SellingPoint from "./Components/sellingPoint";
import Testimonial from "@/app/components/testimonial/testimonial";
import Process from "@/app/components/process/process";
import ContactModule from "@/app/components/contactModule/contactModule";
import Services from "@/app/components/services/services";
import { useParams } from "next/navigation";
import ContactModal from "@/app/components/contactModal/contactModal";
import { useState } from "react";

export default function page() {
  const params = useParams();
  const serviceSlug = params.serviceSlug;
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Banner
        serviceItem={serviceItem}
        openModal={() => setIsModalOpen(true)}
      />
      <SellingPoint serviceItem={serviceItem} />
      <Testimonial />
      <Process />
      <Services />
      <ContactModule />
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}
