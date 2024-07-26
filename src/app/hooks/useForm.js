"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export function useForm(initialFormData, hcaptcha_site_key) {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [loading, setLoading] = useState(false);
  const [sentStatus, setSentStatus] = useState(null);
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select a subject");

  useEffect(() => {
    if (token) {
      setVisible(false);
      console.log("token: " + token);
    }
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVerifyCaptcha = (token) => {
    setToken(token);
    setVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const dataToSend = new FormData();
    // Append form data fields
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("address", formData.address);
    dataToSend.append("contact", formData.contact);
    dataToSend.append("message", formData.message);
    dataToSend.append("subject", selectedOption);
    dataToSend.append("token", token);

    Object.keys(formData).forEach((key) => {
      if (
        key !== "name" &&
        key !== "email" &&
        key !== "address" &&
        key !== "contact" &&
        key !== "message" &&
        key !== "subject" &&
        key !== "token"
      ) {
        dataToSend.append(key, formData[key]);
      }
    });

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/send",
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        setSentStatus("success");
        setTimeout(() => {
          setSentStatus(null);
          setFormData({ ...initialFormData });
          setSelectedOption("Select a subject");
          captchaRef.current?.resetCaptcha();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setSentStatus("error");
      setTimeout(() => {
        setSentStatus(null);
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
}
