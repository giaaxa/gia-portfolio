import { ThreeColumnLayout } from '@/components/layout/ThreeColumnLayout';
import { LeftSidebar } from '@/components/sections/LeftSidebar';
import { RightSidebar } from '@/components/sections/RightSidebar';
import { HeroContent } from '@/components/sections/HeroContent';
import { WorkSection } from '@/components/sections/WorkSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { Footer } from '@/components/sections/Footer';
import { StarCursor } from '@/components/ui/StarCursor';
import { ScrollProgress } from '@/components/ScrollProgress';

export default function Index() {
  return (
    <>
      <StarCursor />
      <ScrollProgress />

      <ThreeColumnLayout
        left={<LeftSidebar />}
        center={
          <>
            <HeroContent />
            <WorkSection />
            <AboutSection />
          </>
        }
        right={<RightSidebar />}
      />

      <Footer />
    </>
  );
}
