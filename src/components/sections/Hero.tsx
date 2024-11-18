import React from 'react';
import Image from 'next/image';
import HeroImage from '@/assests/images/hero-image.png';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { getLangDir } from 'rtl-detect';

const HeroSection: React.FC = () => {
  const t = useTranslations('HeroSection');
  const locale = useLocale();
  const direction = getLangDir(locale); // Get the direction (ltr/rtl)
  const contactPath = `/${locale}/service`;

  return (
    <section
      className="bg-gray-50 py-16 lg:py-30"
      style={{ direction: 'rtl' }} // Apply the text direction
    >
      <div className={`container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 lg:px-16 xl:px-32 gap-12 ${direction === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>

        {/* Text Content */}
        <div className={`flex-1 ${direction === 'rtl' ? 'text-right' : 'text-left'} text-center lg:text-${direction}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-800 leading-tight mb-6">
            {t('title')}
            <br className="hidden sm:block" /> {t('subtitle')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            {t('description')}
          </p>
          <Link href={contactPath}>
            <Button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300">
              {t('buttonText')}
            </Button>
          </Link>
        </div>

        {/* Image Content */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src={HeroImage}
            alt={t('imageAlt')}
            width={500}
            height={500}
            className="w-full h-auto max-w-lg object-cover"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
