import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { serviceData } from "./services";

const allServices = serviceData.flatMap((category) => category.serviceItems);
export const menuData = [
  {
    title: "Company",
    items: [
      { title: "Home", link: "/" },
      { title: "Services", link: "/services" },
      { title: "About", link: "/about" },
      { title: "Gallery", link: "/gallery" },
      { title: "Contact", link: "/contact" },
    ],
  },
  {
    title: "Services",
    items: allServices.map((service) => ({
      title: service.title,
      link: `/services/${service.slug}`,
    })),
  },
  {
    title: "Contacts",
    items: [
      {
        title: "cleaningservices.rbc@gmail.com",
        link: "mailto:cleaningservices.rbc@gmail.com",
        icon: faEnvelope,
      },
      {
        title: "(+61) 406 053 766",
        link: "tel:+61 406 053 766",
        icon: faPhone,
      },
      {
        title: "0448 556 464",
        link: "tel:0448 556 464",
        icon: faPhone,
      },
      {
        title: "address-16 Albert Road Moonah, 7009,TAS",
        link: "https://maps.app.goo.gl/jZD7zTrxD8vSZ3t57",
        icon: faLocationDot,
      },
    ],
  },
];

export const socialInfo = [
  {
    icon: faYoutube,
    title: "Youtube",
    link: "https://www.instagram.com",
    color: "#FF0000",
  },
  {
    icon: faTwitter,
    title: "Tiktok",
    link: "https://www.twitter.com/",
    color: "#1DA1F2",
  },
  {
    icon: faLinkedinIn,
    title: "Linkedin",
    link: "https://www.linkedin.com/",
    color: "#0077B5",
  },
  {
    icon: faFacebookF,
    title: "Facebook",
    link: "https://www.facebook.com/",
    color: "#1877F2",
  },
];
