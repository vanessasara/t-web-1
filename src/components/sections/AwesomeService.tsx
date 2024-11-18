'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { servicesList, serviceCards } from '@/components/serviceData';
import { useTranslations } from 'next-intl';

const ServiceSolutionsSection: React.FC = () => {
  const t = useTranslations('awesomeServices');
  const [activeService, setActiveService] = useState(servicesList[0]);
  const activeServiceData = serviceCards[activeService] || [];

  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="section-title mb-3">
            {t('heading.part1')}{' '}
            <span className="text-blue-600">{t('heading.part2')}</span>
          </h3>
        </div>

        {/* Service Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {servicesList.map((service, index) => (
            <Button
              key={index}
              onClick={() => setActiveService(service)}
              className={`px-4 py-2 rounded-full transition duration-300 ${
                activeService === service
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 hover:bg-blue-600 hover:text-white'
              }`}
            >
              {t(`services.${service}`)}
            </Button>
          ))}
        </div>

        {/* Descriptions */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Service Cards - Display up to 3 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeServiceData.map((card) => (
            <div
              key={card.id}
              className="bg-gray-800 rounded-lg p-8 flex flex-col items-start space-y-4"
            >
              <div className="bg-gray-700 p-4 rounded-full">{card.icon}</div>
              <h4 className="text-xl font-semibold">
                {t(`cards.${activeService}.${card.id}.title`)}
              </h4>
              <p className="text-gray-400">
                {t(`cards.${activeService}.${card.id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSolutionsSection;
