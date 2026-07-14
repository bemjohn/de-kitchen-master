import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dekitchenmaster.com";

  const routes = [
    "",
    "/about",
    "/become-a-partner",
    "/benefits/private-residence",
    "/benefits/full-setup",
    "/blog",
    "/careers",
    "/chefs",
    "/contact",
    "/events-community",
    "/faq",
    "/hire-a-chef",
    "/partner",
    "/portfolio",
    "/privacy-policy",
    "/projects",
    "/service-packages",
    "/services",
    "/team",
    "/terms-conditions",
    "/training-academy",
    "/uniform-collection",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
