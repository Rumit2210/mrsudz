import PackagesSection from '../components/home/PackagesSection';
import PackagesHero from '../components/packages/PackagesHero';
// import heroImg from '../assets/your-packages-hero.jpg';

export default function Packages() {
  return (
    <div className="min-h-screen">
      <div className="container-responsive py-8 sm:py-12 lg:py-16">
        <PackagesHero /* heroImg={heroImg} */ />
        <PackagesSection />
      </div>
    </div>
  );
}
