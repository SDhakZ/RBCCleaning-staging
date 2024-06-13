import React from "react";
import About from "./about.jsx";
import ExtraInfo from "./Components/extraInfo.jsx";
import ContactModule from "@/app/components/contactModule/contactModule";

export default function page() {
  return (
    <>
      <About />
      <ExtraInfo />

      <ContactModule />
    </>
  );
}
