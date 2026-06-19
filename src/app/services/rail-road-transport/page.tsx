import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/data/services";

const service = services.find((item) => item.slug === "rail-road-transport")!;

export const metadata: Metadata = {
  title: `${service.title} | HROX Dispatchers`,
  description: service.metaDescription,
};

export default function RailRoadTransportPage() {
  return <ServicePageTemplate service={service} />;
}
