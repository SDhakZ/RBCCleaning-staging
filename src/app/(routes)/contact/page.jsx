import React from "react";
import Faq from "@/app/components/faq/faq";
import Contact from "./contact";

export default function page() {
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
  return (
    <>
      <Contact hcaptcha_site_key={hcaptcha_site_key} />
      <Faq slide={true} />
    </>
  );
}
