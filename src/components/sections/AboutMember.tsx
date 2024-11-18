'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Work1 from '@/assests/images/work1.png';
import Work2 from '@/assests/images/work2.png';
import Work3 from '@/assests/images/work3.png';
import Work4 from '@/assests/images/work4.png';

const teamMembers = [
  {
    id: 1,
    nameKey: 'member1Name',
    roleKey: 'member1Role',
    descriptionKey: 'member1Description',
    image: Work2,
  },
  {
    id: 2,
    nameKey: 'member2Name',
    roleKey: 'member2Role',
    descriptionKey: 'member2Description',
    image: Work1,
  },
  {
    id: 3,
    nameKey: 'member3Name',
    roleKey: 'member3Role',
    descriptionKey: 'member3Description',
    image: Work3,
  },
  {
    id: 4,
    nameKey: 'member4Name',
    roleKey: 'member4Role',
    descriptionKey: 'member4Description',
    image: Work4,
  },
];

const AboutMember = () => {
  const t = useTranslations('Team');

  return (
    <section className="relative bg-[#141727] text-white py-16">
      {/* Title & Description */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif">{t('title')}</h2>
        <p className="mt-4 text-gray-300">{t('description')}</p>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 px-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center"
          >
            {/* Image Container */}
            <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center md:justify-start p-4">
              <Image
                src={member.image}
                alt={t(member.nameKey)}
                width={500}
                height={500}
                className="object-cover transition-all duration-300 rounded-full md:rounded-none w-24 h-24 md:w-full md:h-full"
              />
            </div>

            {/* Content */}
            <div className="p-6 w-full md:w-2/3">
              <h3 className="text-xl font-bold">{t(member.nameKey)}</h3>
              <p className="text-blue-500">{t(member.roleKey)}</p>
              <p className="text-gray-600 mt-2">{t(member.descriptionKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMember;
