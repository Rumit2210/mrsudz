// src/pages/Home.jsx
import HeroSection from "../components/home/HeroSection";
import PromoBanner from "../components/home/PromoBanner";
import PackagesSection from "../components/home/PackagesSection";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import ServicesSection from "../components/home/ServicesSection";
import LocationsSection from "../components/home/LocationsSection";
import CtaSection from "../components/home/CtaSection";
import summerBanner from "../assets/banners/promo-banner.jpg";
import FundraisingSection from "../components/home/FundraisingSection";
import GalleryCarousel from "../components/home/GalleryCarousel";

// (optional) provide specific images for the gallery

import g1 from "/src/assets/gallery/1.jpg";
import g2 from "/src/assets/gallery/2.jpg";
import g3 from "/src/assets/gallery/3.jpg";
import g4 from "/src/assets/gallery/4.jpg";
import g5 from "/src/assets/gallery/5.jpg";
export default function Home() {
  const galleryImages = [
    { src: g1, alt: "Tunnel foam bath" },
    { src: g2, alt: "Exterior rinse" },
    { src: g3, alt: "Quick dry station" },
    { src: g4, alt: "Quick dry station" },
    { src: g5, alt: "Quick dry station" },
  ];

  return (
    <div className="min-h-screen">
      <section id="hero">
        <HeroSection />
      </section>

      <main className="space-y-15 sm:space-y-15 lg:space-y-15">
        <section id="promo" aria-label="Promotion">
          <PromoBanner
            src={summerBanner}
            alt="Summer Special – The Meg Unlimited now $37/mo"
            href="#packages"
          />
        </section>

        <section
          id="packages"
          aria-label="Packages & Prices"
          className="container-responsive"
        >
          <PackagesSection />
        </section>

        <section
          id="how-it-works"
          aria-label="Why Choose Us"
          className="container-responsive"
        >
          <HowItWorks />
        </section>

        <section id="testimonials" aria-label="Testimonials">
          <Testimonials />
        </section>

        <section id="fundraising">
          <FundraisingSection />
        </section>
        {/* NEW: Gallery (small carousel + modal) */}
        <section
          id="gallery"
          aria-label="Gallery"
          className="container-responsive"
        >
          <GalleryCarousel title="Wash Gallery" images={galleryImages} />
        </section>
        <section id="locations" aria-label="Where to Find Us">
          <LocationsSection />
        </section>

        <section id="join" aria-label="Join the Club">
          <CtaSection />
        </section>
      </main>
    </div>
  );
}
