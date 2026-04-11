import ServicesHeader from "@/components/services/ServicesHeader";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServiceDetailedSections from "@/components/services/ServiceDetailedSections";
import QuickContact from "@/components/services/QuickContact";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHeader />
      <ServicesGrid /> {/* Provides the quick overview grid */}
      <ServiceDetailedSections /> {/* Highlights the detailed services with layouts */}
      <QuickContact />
    </div>
  );
}
