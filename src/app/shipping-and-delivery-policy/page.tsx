import type { Metadata } from "next";
import PolicyPageTemplate from "@/components/PolicyPageTemplate";
import { policies } from "@/data/policies";

const policy = policies["shipping-and-delivery-policy"];

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | HROX Dispatchers",
  description: policy.description,
};

export default function ShippingAndDeliveryPolicyPage() {
  return <PolicyPageTemplate policy={policy} />;
}
