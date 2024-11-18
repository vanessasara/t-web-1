'use client';
import React from 'react';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const workProcessData = [
  {
    id: 1,
    titleKey: 'step1Title',
    descriptionKey: 'step1Description',
  },
  {
    id: 2,
    titleKey: 'step2Title',
    descriptionKey: 'step2Description',
  },
  {
    id: 3,
    titleKey: 'step3Title',
    descriptionKey: 'step3Description',
  },
  {
    id: 4,
    titleKey: 'step4Title',
    descriptionKey: 'step4Description',
  },
];

const WorkProcessSection = () => {
  const t = useTranslations('WorkProcess');
  const locale = useLocale()
  const contactPath = `/${locale}/service`;

  return (
    <section className="bg-gray-100 py-20">
      <div className="flex justify-center">
        <div className="tag mt-6 mb-3">{t('execution')}</div>
      </div>
      <div className="container mx-auto px-6 lg:px-16 xl:px-32">
        <h2 className="section-title mb-12 text-center">{t('title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {workProcessData.map((step) => (
            <Link href={contactPath} key={step.id}>
              <div className="flex flex-col justify-between items-center text-center p-8 shadow-lg rounded-lg bg-gray-50 hover:bg-blue-50 transition duration-300 h-full">
                {/* Top Section */}
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <CheckCircleIcon className="w-12 h-12 text-blue-600 mb-6" />

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {t(step.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">{t(step.descriptionKey)}</p>
                </div>

                {/* Bottom Arrow Icon */}
                <ArrowRightIcon className="w-6 h-6 text-blue-600 mt-8" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
