import type { Metadata } from "next";
import PolicyPageTemplate from "@/components/PolicyPageTemplate";
import { policies } from "@/data/policies";

const policy = policies["return-policy"];

export const metadata: Metadata = {
  title: "Return Policy | HROX Dispatchers",
  description: policy.description,
};

export default function ReturnPolicyPage() {
  return <PolicyPageTemplate policy={policy} />;
}
