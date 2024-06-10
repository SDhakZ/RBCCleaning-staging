import React from "react";
import About from "./about.jsx";
import ExtraInfo from "./Components/extraInfo.jsx";
import ContactModule from "@/app/components/contactModule/contactModule";
import Faq from "./Components/faq.jsx";

export default function page() {
  return (
    <>
      <About />
      <ExtraInfo />
    
      <ContactModule />
    </>
  );
}
