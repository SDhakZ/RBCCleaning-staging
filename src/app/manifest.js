export default function manifest() {
  return {
    name: "RBC Cleaning Services",
    short_name: "RBCCleaning",
    description:
      "Professional and reliable cleaning services for residential and commercial spaces.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#65B741",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
