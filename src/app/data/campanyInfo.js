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
  /*  {
    title: "Services",
    items: serviceData.map((service) => ({
      title: service.title,
      link: `/services/${service.slug}`,
    })),
  }, */
  {
    title: "Others",
    items: [
      { title: "Sitemap", link: "/sitemap.xml" },
      { title: "Terms & Conditions", link: "/terms-and-conditions" },
    ],
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
        title: "Kupondole, Lalitpur, Nepal",
        link: "https://maps.app.goo.gl/sj9EsoNrJkjWph3x9",
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
    color: "#E1306C",
  },
  {
    icon: faTwitter,
    title: "Tiktok",
    link: "https://www.twitter.com/",
    color: "#000",
  },
  {
    icon: faLinkedinIn,
    title: "Linkedin",
    link: "https://www.linkedin.com/",
    color: "#0a66c2",
  },
  {
    icon: faFacebookF,
    title: "Facebook",
    link: "https://www.facebook.com/",
    color: "#316FF6",
  },
];
