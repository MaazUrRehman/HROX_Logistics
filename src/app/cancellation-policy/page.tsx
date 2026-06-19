import type { Metadata } from "next";
import PolicyPageTemplate from "@/components/PolicyPageTemplate";
import { policies } from "@/data/policies";

const policy = policies["cancellation-policy"];

export const metadata: Metadata = {
  title: "Cancellation Policy | HROX Dispatchers",
  description: policy.description,
};

export default function CancellationPolicyPage() {
  return <PolicyPageTemplate policy={policy} />;
}
