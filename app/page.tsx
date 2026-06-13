
import HeroSection  from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import AmenitiesSection  from "@/components/amenities-section"
import TestimonialsSection  from "@/components/testimonials-section"
import FAQSection  from "@/components/faq-section"
import MiniBlogsSection from "@/components/mini-blogs-section"
import { Footer } from "@/components/footer"
import FloatingCTA from "@/components/FloatingCTA"
import FeaturesSwitcher from "@/components/FeaturesSwitcher"
import VirtualTourHero from "@/components/vertualTour"
import CompanyAboutSection from "@/components/company-about-section"
import StatsSection from "@/components/stats-section"
import OtherProjectsSection from "@/components/other-projects-section"
import LocalAmenitiesSection from "@/components/local-amenities-section"


export default function Home() {

  return (
    <main >
      <HeroSection />
      <AmenitiesSection />
      <VirtualTourHero />
      <FeaturesSwitcher />
      <AboutSection />
      <CompanyAboutSection />
      <StatsSection />
      <OtherProjectsSection />
      <LocalAmenitiesSection />
      <TestimonialsSection />
      <MiniBlogsSection />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
