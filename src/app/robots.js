const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${websiteUrl}/sitemap.xml`,
  };
}
