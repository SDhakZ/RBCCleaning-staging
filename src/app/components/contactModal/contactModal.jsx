"use client";
import React, { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function ContactModal({ isOpen, setIsOpen, title }) {
  const [selectedOption, setSelectedOption] = useState("Select a subject");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex items-center justify-center w-screen bg-black bg-opacity-50 rounded-lg">
          <DialogPanel className="max-w-[500px] w-full p-8 space-y-6 bg-white border rounded-lg">
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
                  onChange={handleChange}
                  className="px-4 py-2 text-sm border rounded-md text-black-shade-100"
                >
                  <option
                    className="text-black-shade-100"
                    value="Select a subject"
                    disabled
                  >
                    Select a subject
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <textarea
                  placeholder="Additional Message*"
                  className="px-4 py-2 h-[130px] text-sm border border-gray-300 rounded-md"
                ></textarea>
              </div>
            </form>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 rounded-md bg-[#8a8a8a] text-[#fff]"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-md bg-primary-shade-200 text-white-shade-100"
                onClick={() => setIsOpen(false)}
              >
                Send Request
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
