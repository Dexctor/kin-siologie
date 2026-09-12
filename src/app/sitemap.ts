import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/kinesiologie-dunkerque",
    "/maderotherapie-dunkerque",
    "/stress-douleurs-corps",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
  }));
}
