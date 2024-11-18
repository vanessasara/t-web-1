import Image from 'next/image';
import MaskImage from '@/assests/images/mask.png';
import { useTranslations } from 'next-intl';

const features = [
  {
    id: 1,
    icon: '🚀',
    titleKey: 'feature1Title',
    descriptionKey: 'feature1Description',
  },
  {
    id: 2,
    icon: '💳',
    titleKey: 'feature2Title',
    descriptionKey: 'feature2Description',
  },
  {
    id: 3,
    icon: '📦',
    titleKey: 'feature3Title',
    descriptionKey: 'feature3Description',
  },
  {
    id: 4,
    icon: '💻',
    titleKey: 'feature4Title',
    descriptionKey: 'feature4Description',
  },
];

const AboutFeature = () => {
  const t = useTranslations('AboutFeature');

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center py-16 px-8 bg-white space-y-12 lg:space-y-0 lg:space-x-12">
      {/* Left Side: Features List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-lg">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-start space-x-4">
            <div className="text-4xl">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{t(feature.titleKey)}</h3>
              <p className="text-gray-500">{t(feature.descriptionKey)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side: Image Card */}
      <div className="flex-shrink-0">
        <div className="rounded-lg shadow-lg overflow-hidden max-w-sm w-full">
          <Image
            src={MaskImage}
            alt={t('imageAlt')}
            width={400}
            height={300}
            className="w-full object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">{t('cardTitle')}</h3>
            <p className="text-gray-500">{t('cardDescription')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeature;
