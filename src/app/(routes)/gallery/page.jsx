import React from "react";
import Banner from "./Components/banner";
import Showcase from "./Components/showcase";
import ContactModule from "@/app/components/contactModule/contactModule";

export default function page() {
  return (
    <>
      <Banner />
      <Showcase />
      <ContactModule />
    </>
  );
}
