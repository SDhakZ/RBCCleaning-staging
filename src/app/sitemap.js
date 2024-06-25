import { serviceData } from "@/app/data/services";

export default function sitemap() {
  const homepage = process.env.NEXT_PUBLIC_WEBSITE_URL;
  // Start with your predefined static sitemap entries
  const map = [
    {
      url: homepage,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${homepage}/about`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${homepage}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${homepage}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${homepage}/gallery`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${homepage}/services`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];

  // Service page dynamic sitemap creation
  const allServices = serviceData.flatMap((category) => category.serviceItems);
  allServices.forEach((service) => {
    map.push({
      url: `${homepage}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly", // Adjust based on how often these pages are updated
      priority: 0.8,
    });
  });

  // Return the complete sitemap
  return map;
}
