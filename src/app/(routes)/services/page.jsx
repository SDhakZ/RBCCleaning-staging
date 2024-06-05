import React from "react";
import Service from "./service";
import ContactModule from "@/app/components/contactModule/contactModule";

export default function page() {
  return (
    <div>
      <Service />
      <ContactModule message="" />
    </div>
  );
}
