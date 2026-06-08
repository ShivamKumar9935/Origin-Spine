import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://origin-spine.vercel.app";

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/physiotherapy-in-patna`,
    },
    {
      url: `${baseUrl}/slip-disc-treatment-patna`,
    },
    {
      url: `${baseUrl}/back-pain-treatment-patna`,
    },
    {
      url: `${baseUrl}/knee-pain-treatment-patna`,
    },
    {
      url: `${baseUrl}/how-we-treat`,
    },
    {
      url: `${baseUrl}/problems`,
    },
  ];
}
