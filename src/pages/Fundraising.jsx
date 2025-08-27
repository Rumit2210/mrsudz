import FundraisingHero from '../components/fundraising/FundraisingHero';
import FundraisingBenefits from '../components/fundraising/FundraisingBenefits';
import FundraisingFAQ from '../components/fundraising/FundraisingFAQ';

export default function Fundraising() {
  return (
    <div className="min-h-screen">
      <div className="container-responsive section-spacing py-10 sm:py-14">
        <FundraisingHero />
        <FundraisingBenefits/>
        <FundraisingFAQ/>
      </div>
    </div>
  );
}