'use client';
import { motion } from "framer-motion";
import avatar1 from '@/assests/images/avatar-1.png';
import avatar2 from '@/assests/images/avatar-2.png';
import avatar3 from '@/assests/images/avatar-3.png';
import avatar4 from '@/assests/images/avatar-4.png';
import avatar5 from '@/assests/images/avatar-5.png';
import avatar6 from '@/assests/images/avatar-6.png';
import avatar7 from '@/assests/images/avatar-7.png';
import avatar8 from '@/assests/images/avatar-8.png';
import avatar9 from '@/assests/images/avatar-9.png';
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const avatars = [avatar1.src, avatar2.src, avatar3.src, avatar4.src, avatar5.src, avatar6.src, avatar7.src, avatar8.src, avatar9.src];

const TestimonialsColum = (props: {
  className?: string;
  testimonials: Array<{ text: string, name: string, username: string, imageSrc: string }>;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: 'linear',
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card" key={username}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image src={imageSrc} alt={name} width={40} height={40} className="rounded-full" />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">{name}</div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const Testimonials = () => {
  const t = useTranslations('testimonials');

  // Dynamically map testimonials from translation file
  const testimonials = Array.from({ length: 9 }).map((_, i) => ({
    text: t(`testimonial${i + 1}Text`),
    name: t(`testimonial${i + 1}Name`),
    username: t(`testimonial${i + 1}Username`),
    imageSrc: avatars[i]
  }));

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-gray-100">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag mt-6">{t('tag')}</div>
          </div>
          <h2 className="section-title mt-5">{t('title')}</h2>
          <p className="section-description mt-5">{t('description')}</p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColum testimonials={firstColumn} duration={15} />
          <TestimonialsColum
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColum
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
