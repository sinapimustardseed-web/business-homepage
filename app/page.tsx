import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductTeaser from "@/components/ProductTeaser";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import ProcessSteps from "@/components/ProcessSteps";
import Credibility from "@/components/Credibility";
import CompanyStoryPreview from "@/components/CompanyStoryPreview";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductTeaser />
        <ValueProposition />
        <Features />
        <ProcessSteps />
        <Credibility />
        <CompanyStoryPreview />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
