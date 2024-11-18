import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useTranslations, useLocale } from 'next-intl';
import Card from '@/components/sections/Card';
import { services } from '@/data/services';
import Link from 'next/link';


const ServicesList: React.FC = () => {
  const t = useTranslations('Services');
  const t2 = useTranslations('common')
  const locale = useLocale();

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 xl:px-32 mb-12">
        {/* Tag above the Heading */}
        <div className="text-center">
          <div className="tag mt-6 tracking-wide">{t('tag')}</div>
          <h2 className="section-title mt-4 mb-2">{t('title')}</h2>
        </div>

        {/* Grid for Services */}
        <div className="max-w-7xl mx-auto items-center py-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-4 justify-items-center">
          {services.map((service) => (
            <Link href={`/${locale}/service/${service.slug}`}
              key={service.id}
              className="cursor-pointer">
              <Card
                title={t2(`${service.slug}.title`)}
                description={t2(`${service.slug}.description`)}
                imageSrc={service.image}
                className="w-[400] h-[400]"
                icon={<CheckCircleIcon className="w-6 h-6 text-blue-600" />}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
