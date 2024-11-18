'use client';
import React from 'react';
import Image from 'next/image';
import SolutionsImage from '@/assests/images/solutions-image.png';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';


const BestSolutionsSection: React.FC = () => {
  const t = useTranslations('bestSolutions');
  const locale = useLocale()
  const contactPath = `/${locale}/service`;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 lg:px-16 xl:px-24">

        {/* Left Image Content (Appears Below Text on Smaller Screens) */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <Image
            src={SolutionsImage}
            alt={t('solutionsImageAlt')}
            width={500}
            height={500}
          />
        </div>

        {/* Right Text Content (Appears on Top for Smaller Screens) */}
        <div className="flex-1 lg:pl-12">
          <h2 className="section-title mt-5 lg:text-left">
            {t('sectionTitle')}
          </h2>
          <p className="text-gray-600 section-description mt-5 lg:text-left mb-4">
            {t('sectionDescription')}
          </p>
          <ul className="space-y-3 text-gray-700 text-sm mb-8 text-center lg:text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <li className="flex items-center justify-center lg:justify-start">
              <span className="text-blue-600 mr-3">✓</span> {t('customWebDevelopment')}
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="text-blue-600 mr-3">✓</span> {t('responsiveDesign')}
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="text-blue-600 mr-3">✓</span> {t('ecommerceSolutions')}
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="text-blue-600 mr-3">✓</span> {t('seoOptimization')}
            </li>
          </ul>
          <div className="flex justify-center lg:justify-start">
            <Link href={contactPath}>
              <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                {t('learnMoreButton')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSolutionsSection;
