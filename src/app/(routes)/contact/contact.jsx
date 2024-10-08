"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { menuData } from "@/app/data/companyInfo";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { serviceData } from "@/app/data/services";
import { ContactDetailModule } from "@/app/components/contactDetailModule/contactDetailModule";
import { useForm } from "@/app/hooks/useForm";
import { useDynamicFields } from "@/app/hooks/useDynamicFields";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactComponent(props) {
  const { hcaptcha_site_key } = props;
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");

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
  const [skeletons, setSkeletons] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSkeletons(false);
    }, 7000);
  }, []);

  useEffect(() => {
    if (subject) {
      setSelectedOption(subject);
    }
  }, [subject, setSelectedOption]);

  const handleInputChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const allServices = serviceData
    .flatMap((category) => category.serviceItems)
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div
      className={`relative overflow-hidden transition-colors duration-[1200ms] bg-[#fff]`}
    >
      <div className="relative container-margin-compact">
        <section className="top-section-p">
          <h1
            className={`text-3xl lg:leading-tight font-semibold sm:text-3xl md:text-4xl text-black-shade-300 lg:text-5xl`}
          >
            <span className="text-primary-shade-200">Have any questions?</span>{" "}
            Feel free to drop those in we will happily assist you.
          </h1>
        </section>
        <section className="pb-20 margin-t lg:pb-36">
          <div className="flex flex-col-reverse flex-wrap justify-center w-full gap-10 lg:gap-10 sm:flex-row-reverse md:flex-nowrap">
            <div className="relative flex flex-col w-full gap-10">
              {/* Skeleton element */}
              {skeletons ? (
                <div className="absolute max-w-[700px] md:min-w-[400px] top-0 left-0 w-full h-[480px] bg-gray-300 rounded-sm animate-pulse"></div>
              ) : null}
              {/* Iframe */}
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.0073928872544!2d147.2691590765761!3d-42.85157707115141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6e748c1cf2a869%3A0xff594b389d216d6c!2sRBC%20Cleaning%20services%20Pty.Ltd!5e0!3m2!1sen!2snp!4v1718096360972!5m2!1sen!2snp"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative outline outline-2 outline-black-shade-100 rounded-md z-10 w-full h-[480px] max-w-[700px] md:min-w-[300px]"
              ></iframe>
              <div className="space-y-6 ">
                {menuData[2].items.map((info, index) => (
                  <a
                    title={info.title}
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-3 transition-all duration-200 cursor-pointer text-black-shade-200 group w-fit "
                  >
                    <FontAwesomeIcon
                      className="text-xl transition-all duration-200 group-hover:text-primary-shade-200 lg:text-2xl text-primary-accent"
                      icon={info.icon}
                      width={20}
                    />
                    <p
                      className={`text-lg sm:text-lg break-all transition-all duration-200 group-hover:text-primary-shade-200 hover:text-primary-orange-300 text-black-shade-200 tracking-wider font-medium relative overflow-hidden lg:text-lg`}
                    >
                      {info.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-[550px]">
              <div className="flex flex-col w-full gap-4">
                <input
                  id="sender_name"
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="px-5 py-3 border-2 rounded-md border-[#B8B8B8] outline-2 outline-primary-orange-300"
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
                  className="px-5 py-3 border-2 rounded-md border-[#B8B8B8] outline-2 outline-primary-orange-300"
                />
                <input
                  id="sender_org"
                  value={formData.address}
                  type="text"
                  placeholder="Home address"
                  name="address"
                  required
                  onChange={handleChange}
                  className="px-5 py-3 border-2 rounded-md border-[#B8B8B8] outline-2 outline-primary-orange-300"
                />
                <input
                  id="sender_org"
                  value={formData.contact}
                  type="text"
                  placeholder="Phone number"
                  name="contact"
                  required
                  onChange={handleChange}
                  className="px-5 py-3 border-2 rounded-md border-[#B8B8B8] outline-2 outline-primary-orange-300"
                />
                <select
                  name="subject"
                  id="subject"
                  value={selectedOption}
                  onChange={handleInputChange}
                  className="px-5 custom-select font-medium text-[#4b4b4b] cursor-pointer py-3 border-2 rounded-md border-[#B8B8B8] outline-2 outline-primary-orange-300"
                >
                  <option
                    disabled
                    defaultValue
                    className="text-[#0e0e0e] font-semibold"
                  >
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
                  className="px-5 py-3 transition-all duration-200 border-2 rounded-md border-[#B8B8B8] outline-2 outline-primary-orange-300 min-h-40 "
                  placeholder="Send your message here..."
                />
                <div className="flex flex-col gap-6 mt-2">
                  <Tippy
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
                  <button
                    type="submit"
                    className={`flex shiny-global  hover:bg-[#16a9df] bg-primary-shade-200 text-white-shade-100  whitespace-nowrap transition-all h-fit duration-200  w-full items-center max-w-[100%] lg:max-w-[300px] justify-center p-3 text-lg font-medium tracking-wider rounded-md  ${
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
          </div>
        </section>
      </div>
    </div>
  );
}

const Contact = (props) => (
  <Suspense
    fallback={
      <div className="100vh">
        <FontAwesomeIcon className="ml-2 animate-spin" icon={faSpinner} />
      </div>
    }
  >
    <ContactComponent {...props} />
  </Suspense>
);
export default Contact;
