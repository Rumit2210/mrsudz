import AboutHero from '../components/AboutHero';
import AnimatedStats from '../components/AnimatedStats';
import ProcessSection from '../components/ProcessSection';
import LocationSection from '../components/LocationSection';
import StorySection from '../components/StorySection';
import CTASection from '../components/CTASection';

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="container-responsive section-spacing py-10 sm:py-14">
        <AboutHero />
        <StorySection />
        <ProcessSection />
        <AnimatedStats />
        <LocationSection />
        <CTASection />
      </div>
    </div>
  );
}