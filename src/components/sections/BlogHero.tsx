'use client';
import React from 'react';
import Image from 'next/image';
import BgImage from '@/assests/images/Image.png';
import { useTranslations } from 'next-intl';

export const BlogHero = () => {
  const t = useTranslations('blogHero');

  return (
    <section className="relative overflow-x-clip">
      {/* Content Container */}
      <div className="relative w-full h-[400px] overflow-hidden">
        {/* Hero Background Image */}
        <Image
          src={BgImage}
          alt="Hero"
          className="w-full h-full object-cover"
          priority
        />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30">
          <h1 className="section-title font-serif">{t('title')}</h1>
          <p className="mt-4 section-description text-lg">{t('description')}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
