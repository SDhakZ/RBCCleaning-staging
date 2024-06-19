"use client";
import React from "react";
import { Hero } from "./Components/hero/hero";
import Offerings from "./Components/offerings/offerings";
import Engage from "./Components/engagingSection/engage";
import Services from "@/app/components/services/services";
import Process from "@/app/components/process/process";
import Testimonial from "@/app/components/testimonial/testimonial";
import Contact from "../contact/contact";
import FAQ from "@/app/components/faq/faq";
import { heroData } from "@/app/data/heroData";
import { useDeviceType } from "@/app/hooks/useDeviceType";

export default function Home() {
  const deviceType = useDeviceType();
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
  return (
    <>
      <Hero heroData={heroData} deviceType={deviceType} />
      <Offerings />
      <Engage />
      <div className="mt-2 lg:mt-6">
        <Services />
      </div>
      <Process />
      <Testimonial />
      <Contact hcaptcha_site_key={hcaptcha_site_key} />
      <FAQ />
    </>
  );
}
