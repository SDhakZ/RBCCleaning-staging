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
  {
    title: "Services",
    items: [
      { title: "Lawn Mowing", link: `/services/lawn-mowing` },
      { title: "Power Hose", link: `/services/lawn-mowing` },
      { title: "Window Cleaning", link: `/services/lawn-mowing` },
      { title: "Carpet Cleaning", link: `/services/lawn-mowing` },
      { title: "Building Cleaning", link: `/services/lawn-mowing` },
      { title: "Buffering", link: `/services/lawn-mowing` },
      { title: "Air BNB Cleaning", link: `/services/lawn-mowing` },
      { title: "Domestic Cleaning", link: `/services/lawn-mowing` },
      { title: "End of the lease cleaning", link: `/services/lawn-mowing` },
      { title: "Polishing Floors", link: `/services/lawn-mowing` },
      { title: "Office Cleaning", link: `/services/lawn-mowing` },
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
