import BgImage from '@/assests/images/bg.png';
import Curved from '@/assests/images/curved.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AboutHero = () => {
  const t = useTranslations('AboutHero');

  return (
    <section className="relative overflow-x-clip">
      <div className="relative w-full h-[400px] overflow-hidden">
        {/* Hero Background Image */}
        <Image
          src={BgImage}
          alt={t('heroAlt')}
          className="w-full h-full object-cover"
        />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30">
          <h1 className="text-5xl font-serif">{t('title')}</h1>
          <p className="mt-4 text-lg">{t('description')}</p>
        </div>
      </div>

      {/* Adjusted Curved Overlay Image */}
      <div className="relative">
        <Image
          src={Curved}
          alt={t('curveAlt')}
          className="w-full -mt-10 md:-mt-14 sm:-mt-4 xs:-mt-4 scale-x-110"
        />
      </div>
    </section>
  );
};

export default AboutHero;
