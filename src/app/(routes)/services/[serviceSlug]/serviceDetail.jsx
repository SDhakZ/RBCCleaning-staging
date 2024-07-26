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
import { useState, useEffect } from "react";
import NotFound from "@/app/not-found";
import ServiceGallery from "./Components/serviceGallery";

export default function ServiceDetail(props) {
  const { hcaptcha_site_key } = props;
  const params = useParams();
  const serviceSlug = params.serviceSlug;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

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
    return <NotFound />;
  }
  return (
    <div className="overflow-hidden">
      <Banner
        serviceItem={serviceItem}
        openModal={() => setIsModalOpen(true)}
      />
      <SellingPoint serviceItem={serviceItem} />
      {serviceItem.pictures ? (
        <ServiceGallery
          title={serviceItem.title}
          pictures={serviceItem.pictures}
        />
      ) : null}

      <Testimonial />
      <Process title={serviceItem.title} />
      <Services />
      <ContactModule />
      <ContactModal
        hcaptcha_site_key={hcaptcha_site_key}
        serviceSlug={serviceSlug}
        serviceItem={serviceItem}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </div>
  );
}
