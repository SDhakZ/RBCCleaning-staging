import React from "react";
import { Hero } from "./Components/hero/hero";
import Offerings from "./Components/offerings/offerings";
import Engage from "./Components/engagingSection/engage";
import Services from "@/app/components/services/services";
import Process from "@/app/components/process/process";
import Testimonial from "@/app/components/testimonial/testimonial";
import Contact from "../contact/contact";
import FAQ from "@/app/components/faq/faq";

export default function home() {
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
  return (
    <>
      <Hero />
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
