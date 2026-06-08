import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://origin-spine.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/physiotherapy-in-patna`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/slip-disc-treatment-patna`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/back-pain-treatment-patna`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/knee-pain-treatment-patna`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/how-we-treat`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/problems`,
      lastModified: new Date().toISOString(),
    },
  ];
}
