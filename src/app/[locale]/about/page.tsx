import WorkProcessSection from '@/components/sections/WorkprocessSection';
import AboutHero from '@/components/sections/AboutHero';
import AboutFeature from '@/components/sections/AboutFeature';
import AboutMember from '@/components/sections/AboutMember';
import AboutNews from '@/components/sections/AboutNews';

const AboutUsPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutFeature />
      <WorkProcessSection />
      <AboutMember />
      <AboutNews />
    </div>
  );
};

export default AboutUsPage;
