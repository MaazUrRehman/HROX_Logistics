import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/data/services";

const service = services.find((item) => item.slug === "warehousing-fulfillment")!;

export const metadata: Metadata = {
  title: `${service.title} | HROX Dispatchers`,
  description: service.metaDescription,
};

export default function WarehousingFulfillmentPage() {
  return <ServicePageTemplate service={service} />;
}
