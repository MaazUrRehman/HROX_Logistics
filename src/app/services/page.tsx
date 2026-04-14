import ServicesHeader from "@/components/services/ServicesHeader";
import ServiceDetailedSections from "@/components/services/ServiceDetailedSections";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHeader />
      <ServiceDetailedSections />
    </div>
  );
}
