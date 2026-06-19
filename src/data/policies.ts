export const policies = {
  "privacy-policy": {
    title: "Privacy Policy",
    description:
      "This Privacy Policy explains how HROX Dispatchers collects, uses, and protects business, carrier, and contact information.",
    sections: [
      {
        heading: "Information We Collect",
        body: "HROX Dispatchers may collect business contact details, carrier authority information, equipment details, lane preferences, billing information, and communication records needed to provide truck dispatching support.",
      },
      {
        heading: "How We Use Information",
        body: "We use information to communicate with carriers, source and coordinate loads, manage dispatch activity, organize paperwork, provide support, and improve our service quality.",
      },
      {
        heading: "Information Sharing",
        body: "We may share necessary operational information with brokers, shippers, receivers, factoring companies, and service providers when required to support dispatch operations. We do not sell personal information.",
      },
      {
        heading: "Data Protection",
        body: "We use reasonable administrative and technical safeguards to protect business records and dispatch-related information from unauthorized access, misuse, or disclosure.",
      },
    ],
  },
  "refund-policy": {
    title: "Refund Policy",
    description:
      "This Refund Policy explains how refund requests are handled for HROX Dispatchers truck dispatching services.",
    sections: [
      {
        heading: "Service-Based Billing",
        body: "HROX Dispatchers provides professional dispatching and coordination services. Fees may be based on an agreed percentage, flat service rate, or other written arrangement between the company and carrier.",
      },
      {
        heading: "Refund Eligibility",
        body: "Refunds may be reviewed when a duplicate payment, billing error, or service charge mistake is confirmed. Completed dispatch work, broker communication, paperwork support, and administrative services are generally non-refundable.",
      },
      {
        heading: "Request Process",
        body: "Refund requests must be submitted by email with the invoice, payment reference, and reason for review. Approved refunds are processed to the original payment method when possible.",
      },
    ],
  },
  "return-policy": {
    title: "Return Policy",
    description:
      "This Return Policy clarifies that HROX Dispatchers provides digital and professional services rather than physical products.",
    sections: [
      {
        heading: "No Physical Product Returns",
        body: "HROX Dispatchers does not sell or ship physical products. Because our services are professional dispatching, coordination, consulting, and documentation support, there are no physical goods to return.",
      },
      {
        heading: "Service Concerns",
        body: "If a carrier has a concern about service quality, communication, or billing, the issue should be reported promptly so our support team can review the matter and respond appropriately.",
      },
      {
        heading: "Documentation",
        body: "Any returned or corrected documents related to dispatch operations should be sent through the agreed communication channel so records can be updated.",
      },
    ],
  },
  "cancellation-policy": {
    title: "Cancellation Policy",
    description:
      "This Cancellation Policy explains how carriers may cancel ongoing dispatching services with HROX Dispatchers.",
    sections: [
      {
        heading: "Cancellation Notice",
        body: "Carriers may request cancellation of ongoing dispatch support by providing written notice through email or another approved communication channel.",
      },
      {
        heading: "Active Loads",
        body: "Cancellation does not remove responsibility for active loads already booked, accepted, or in progress. Any active dispatch work should be completed or responsibly transitioned before service ends.",
      },
      {
        heading: "Outstanding Fees",
        body: "Any unpaid dispatch fees, administrative charges, or agreed service balances remain due according to the applicable service agreement.",
      },
    ],
  },
  "terms-and-conditions": {
    title: "Terms & Conditions",
    description:
      "These Terms & Conditions govern use of HROX Dispatchers truck dispatching services and website.",
    sections: [
      {
        heading: "Service Scope",
        body: "HROX Dispatchers provides dispatch support, load search assistance, broker communication, appointment coordination, and paperwork organization for trucking carriers. We are not a motor carrier, freight broker, shipper, or legal advisor unless specifically stated in a written agreement.",
      },
      {
        heading: "Carrier Responsibilities",
        body: "Carriers are responsible for maintaining active authority, insurance, compliance, equipment readiness, driver qualifications, and lawful operation. Carriers must review and accept load terms before committing to freight.",
      },
      {
        heading: "No Revenue Guarantee",
        body: "Market rates, freight availability, lanes, and revenue vary. HROX Dispatchers does not guarantee specific loads, rates, weekly revenue, or uninterrupted freight availability.",
      },
      {
        heading: "Website Use",
        body: "Website content is provided for general business information. Unauthorized copying, misuse, or disruption of the website or its content is prohibited.",
      },
    ],
  },
  "shipping-and-delivery-policy": {
    title: "Shipping & Delivery Policy",
    description:
      "This Shipping & Delivery Policy explains how HROX Dispatchers delivers professional dispatching services digitally.",
    sections: [
      {
        heading: "Digital Service Delivery",
        body: "HROX Dispatchers does not ship physical products. Our services are delivered through phone, email, messaging, digital documents, dispatch systems, and direct communication with carriers and load contacts.",
      },
      {
        heading: "Service Timelines",
        body: "Dispatch support begins according to the agreed onboarding timeline, carrier readiness, document availability, and service arrangement. Load coordination timelines depend on market conditions, carrier location, equipment type, broker response, and driver availability.",
      },
      {
        heading: "Document Delivery",
        body: "Rate confirmations, bills of lading, proofs of delivery, and other dispatch-related documents may be exchanged digitally through email, messaging applications, or approved dispatch channels.",
      },
      {
        heading: "Support Availability",
        body: "Support availability follows posted business hours and any active dispatch coverage agreed with the carrier. Urgent active-load issues are handled with priority whenever possible.",
      },
    ],
  },
} as const;

export type PolicySlug = keyof typeof policies;
