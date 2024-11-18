'use client';
import Image from 'next/image';
import Illustration from '@/assests/images/emoji.png';
import { useTranslations } from 'next-intl';

const AboutNews = () => {
  const t = useTranslations('News');

  return (
    <section className="bg-white py-14">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 lg:px-16 xl:px-32">
        {/* Left Side: Text and Input */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
            {t('title')}
          </h2>
          <p className="mt-3 text-gray-500">{t('description')}</p>

          {/* Subscription Form */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
            <input
              type="email"
              placeholder={t('placeholder')}
              className="w-full sm:flex-1 p-3 border border-gray-300 rounded-lg sm:rounded-r-none sm:rounded-l-lg focus:outline-none"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:opacity-90 mt-4 sm:mt-0">
              {t('button')}
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden lg:flex lg:w-1/2 justify-center mt-8 lg:mt-0">
          <Image
            src={Illustration}
            alt="Illustration"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutNews;
