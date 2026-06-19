import type { Metadata } from "next";
import PolicyPageTemplate from "@/components/PolicyPageTemplate";
import { policies } from "@/data/policies";

const policy = policies["refund-policy"];

export const metadata: Metadata = {
  title: "Refund Policy | HROX Dispatchers",
  description: policy.description,
};

export default function RefundPolicyPage() {
  return <PolicyPageTemplate policy={policy} />;
}
