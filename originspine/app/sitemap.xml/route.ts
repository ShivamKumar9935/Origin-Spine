import { NextResponse } from "next/server";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://origin-spine.vercel.app/</loc>
  </url>

  <url>
    <loc>https://origin-spine.vercel.app/physiotherapy-in-patna</loc>
  </url>

  <url>
    <loc>https://origin-spine.vercel.app/slip-disc-treatment-patna</loc>
  </url>

  <url>
    <loc>https://origin-spine.vercel.app/back-pain-treatment-patna</loc>
  </url>

  <url>
    <loc>https://origin-spine.vercel.app/knee-pain-treatment-patna</loc>
  </url>

  <url>
    <loc>https://origin-spine.vercel.app/how-we-treat</loc>
  </url>

  <url>
    <loc>https://origin-spine.vercel.app/problems</loc>
  </url>

</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
