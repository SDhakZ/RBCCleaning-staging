"use client";
import React, { useState, useRef } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { serviceData } from "@/app/data/services";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function ContactModal({
  isOpen,
  setIsOpen,
  title,
  hcaptcha_site_key,
}) {
  const [selectedOption, setSelectedOption] = useState("Select a subject");
  const captchaRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const handleInputChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleVerifyCaptcha = (token) => {
    setToken(token);
    setVisible(false);
  };
  const allServices = serviceData.flatMap((category) => category.serviceItems);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex items-center justify-center w-screen bg-black bg-opacity-50 rounded-lg">
          <DialogPanel className="max-w-[600px] w-full p-8 space-y-6 bg-white border rounded-lg">
            <div className="flex justify-between gap-2">
              <DialogTitle className="font-bold text-black-shade-300">
                {title ? title : "Request our service and get a free quote "}
              </DialogTitle>
              <button
                onClick={() => setIsOpen(false)}
                className="text-black-shade-100"
                type="button"
              >
                <FontAwesomeIcon className="text-xl" icon={faClose} />
              </button>
            </div>
            <form>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="px-4 py-2 text-sm border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="px-4 py-2 text-sm border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Home Address*"
                  className="px-4 py-2 text-sm border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Contact Number*"
                  className="px-4 py-2 text-sm border border-gray-300 rounded-md"
                />
                <select
                  name="cars"
                  id="cars"
                  value={selectedOption}
                  onChange={handleInputChange}
                  className="px-4 py-2 text-[#a3a3a3] text-sm border border-gray-300 rounded-md"
                >
                  <option value="ask-question">Ask a question</option>
                  {allServices.map((service, index) => (
                    <option key={index} value={service.slug}>
                      {service.title}
                    </option>
                  ))}
                </select>
                <textarea
                  placeholder="Additional Message*"
                  className="px-4 py-2 h-[130px] text-sm border border-gray-300 rounded-md"
                ></textarea>
              </div>
            </form>
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <Tippy
                trigger="manual"
                content={<span>Click to complete CAPTCHA</span>}
                visible={visible}
              >
                <div>
                  <HCaptcha
                    sitekey={hcaptcha_site_key}
                    onVerify={handleVerifyCaptcha}
                    ref={captchaRef}
                    size="compact"
                  />
                </div>
              </Tippy>
              <div className="flex flex-col items-center justify-end w-full gap-4 sm:flex-row">
                <button
                  className="px-4 py-2 rounded-md w-full bg-[#8a8a8a] text-[#fff]"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="w-full px-4 py-2 rounded-md bg-primary-shade-200 text-white-shade-100"
                  onClick={() => setIsOpen(false)}
                >
                  Send
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
