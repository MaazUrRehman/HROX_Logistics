import type { Metadata } from "next";
import PolicyPageTemplate from "@/components/PolicyPageTemplate";
import { policies } from "@/data/policies";

const policy = policies["privacy-policy"];

export const metadata: Metadata = {
  title: "Privacy Policy | HROX Dispatchers",
  description: policy.description,
};

export default function PrivacyPolicyPage() {
  return <PolicyPageTemplate policy={policy} />;
}
