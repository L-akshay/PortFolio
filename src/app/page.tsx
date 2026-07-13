import { PageContainer } from "@/components/layout/PageContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <PageContainer className="space-y-24 pb-24">
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <AboutSection />
      </AnimatedSection>
    </PageContainer>
  );
}
