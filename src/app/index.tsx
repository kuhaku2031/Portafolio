import { createFileRoute } from '@tanstack/react-router';
import { HeroSection } from '../features/landing/components/Hero';
import { TechStack } from '../features/landing/components/TechStack';
import { Projects } from '../features/landing/components/Projects';
import { Experience } from '../features/landing/components/Experience';
import { Certifications } from '../features/landing/components/Certifications';
import { Contact} from '../features/landing/components/Contact';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <HeroSection />
      <TechStack />
      <Projects/>
      <Experience/>
      <Certifications/>
      <Contact />
    </div>
  );
}