import React from "react";
import About from "./about.jsx";
import ExtraInfo from "./Components/extraInfo.jsx";
import ContactModule from "@/app/components/contactModule/contactModule";
import Faq from "@/app/components/faq/faq.jsx";
import Services from "@/app/components/services/services.jsx";

export default function page() {
  return (
    <>
      <About />
      <ExtraInfo />
      <Services />
      <ContactModule />
    </>
  );
}
