import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';


interface CardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  date?: string;
  className?: string;
  icon?: JSX.Element;

}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, date, className, icon }) => {
  return (

    <div className={twMerge("bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105", className)}>
      <Image src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-500 text-sm mt-2">{date}</p>
        <p>{icon}</p>
      </div>
    </div>

  );
};

export default Card;
