import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/data/services";

const service = services.find((item) => item.slug === "ocean-freight-solutions")!;

export const metadata: Metadata = {
  title: `${service.title} | HROX Dispatchers`,
  description: service.metaDescription,
};

export default function OceanFreightSolutionsPage() {
  return <ServicePageTemplate service={service} />;
}
