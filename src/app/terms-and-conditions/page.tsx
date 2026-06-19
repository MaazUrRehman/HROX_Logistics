import type { Metadata } from "next";
import PolicyPageTemplate from "@/components/PolicyPageTemplate";
import { policies } from "@/data/policies";

const policy = policies["terms-and-conditions"];

export const metadata: Metadata = {
  title: "Terms & Conditions | HROX Dispatchers",
  description: policy.description,
};

export default function TermsAndConditionsPage() {
  return <PolicyPageTemplate policy={policy} />;
}
