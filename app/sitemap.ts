import type { MetadataRoute } from "next";
import { getAllInsights } from "@/lib/insights";
import { siteConfig } from "@/lib/site-config";

export default function sitemap():MetadataRoute.Sitemap{const routes=["","/about","/services","/services/workday-transformation","/transformation-assurance-index","/insights","/contact"].map((route)=>({url:`${siteConfig.url}${route}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:route===""?1:.8}));const articles=getAllInsights().map((item)=>({url:`${siteConfig.url}/insights/${item.slug}`,lastModified:new Date(item.date),changeFrequency:"monthly" as const,priority:.7}));return[...routes,...articles];}
