"use client";
import React, { useEffect, useRef } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { serviceData } from "@/app/data/services";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { ContactDetailModule } from "../contactDetailModule/contactDetailModule";
import { useForm } from "@/app/hooks/useForm";
import { useDynamicFields } from "@/app/hooks/useDynamicFields";

export default function ContactModal({
  isOpen,
  setIsOpen,
  title,
  hcaptcha_site_key,
  serviceItem,
  serviceSlug,
}) {
  const initialFormData = {
    name: "",
    email: "",
    address: "",
    contact: "",
    subject: "",
    message: "",
  };
  const {
    formData,
    loading,
    sentStatus,
    visible,
    selectedOption,
    captchaRef,
    handleChange,
    handleVerifyCaptcha,
    handleSubmit,
    setFormData,
    setSelectedOption,
  } = useForm(initialFormData, hcaptcha_site_key);

  const { handleDynamicChange } = useDynamicFields(
    selectedOption,
    setFormData,
    formData
  );

  const buttonRef = useRef(null);

  const allServices = serviceData.flatMap((category) => category.serviceItems);
  useEffect(() => {
    if (serviceItem.slug === serviceSlug) {
      setSelectedOption(serviceItem.title);
    }
  }, [serviceSlug]);

  const handleInputChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 flex items-center justify-center w-screen overflow-y-auto bg-black bg-opacity-50 rounded-lg"
        >
          <DialogPanel className="max-w-[600px] h-full max-h-[80vh] overflow-y-auto w-full p-8 space-y-6 bg-white border rounded-lg">
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
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <input
                  id="sender_name"
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-md"
                />
                <input
                  id="sender_email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-md"
                />
                <input
                  id="sender_org"
                  value={formData.address}
                  type="text"
                  placeholder="Home address"
                  name="address"
                  required
                  onChange={handleChange}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-md"
                />
                <input
                  id="sender_org"
                  value={formData.contact}
                  type="text"
                  placeholder="Phone number"
                  name="contact"
                  required
                  onChange={handleChange}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-md"
                />
                <select
                  name="subject"
                  id="subject"
                  value={selectedOption}
                  onChange={handleInputChange}
                  className="px-4 py-2 text-[#a3a3a3] text-sm border border-gray-300 rounded-md"
                >
                  <option disabled className="text-[#0e0e0e] font-semibold">
                    Select a subject
                  </option>
                  <option value="ask-question">Ask a question</option>
                  {allServices.map((service, index) => (
                    <option key={index} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
                <ContactDetailModule
                  selectedOption={selectedOption}
                  formData={formData}
                  handleDynamicChange={handleDynamicChange}
                />
                <textarea
                  id="sender_message"
                  value={formData.message}
                  name="message"
                  required
                  onChange={handleChange}
                  placeholder="Send your message here..."
                  className="px-4 py-2 h-[130px] text-sm border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="flex flex-col justify-between gap-4 mt-4 ">
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
                      size="normal"
                    />
                  </div>
                </Tippy>
                <div className="flex flex-col items-center justify-end w-full gap-4 sm:flex-row">
                  <button
                    className="px-4 py-3 rounded-md w-full bg-[#8a8a8a] text-[#fff]"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`flex shiny-global  hover:bg-[#16a9df] bg-primary-shade-200 text-white-shade-100  whitespace-nowrap transition-all h-fit duration-200  w-full items-center max-w-[100%] lg:max-w-[300px] justify-center  text-lg font-medium tracking-wider rounded-md  ${
                      loading
                        ? "bg-gray-400"
                        : sentStatus === "success"
                        ? "bg-green-500"
                        : sentStatus === "error"
                        ? "bg-red-500"
                        : "bg-primary-accent"
                    }`}
                  >
                    {loading ? (
                      <>
                        Sending{" "}
                        <FontAwesomeIcon
                          className="ml-2 animate-spin"
                          icon={faSpinner}
                        />
                      </>
                    ) : sentStatus === "success" ? (
                      "Sent Successfully"
                    ) : sentStatus === "error" ? (
                      "Not Sent"
                    ) : (
                      "Submit Form"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
