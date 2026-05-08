import HeroSection from "@/app/components/HeroSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import HowItWorksSection from "@/app/components/HowItWorksSection";
import TrustSafetySection from "@/app/components/TrustSafetySection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import PricingNoteSection from "@/app/components/PricingNoteSection";
import FaqTeaserSection from "@/app/components/FaqTeaserSection";
import SignupSection from "@/app/components/SignupSection";
import FooterSection from "@/app/components/FooterSection";

export default function Home() {
  return (
    <main className="landing-page" id="top">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TrustSafetySection />
      <TestimonialsSection />
      <PricingNoteSection />
      <FaqTeaserSection />
      <SignupSection />
      <FooterSection />
    </main>
  );
}