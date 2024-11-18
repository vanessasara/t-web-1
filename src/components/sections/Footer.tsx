import { useTranslations } from "next-intl";
import LogoImage from '@/assests/images/logo2.webp';
import Image from 'next/image';

const Footer = () => {
  const t = useTranslations("footer"); // Using 'footer' namespace

  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-2 text-center">
      <div className="container">
        {/* Flex container for logo and nav */}
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-6">
          {/* Logo */}
          <div className="inline-flex">
            <Image src={LogoImage} height={120} alt="Logo" className="relative" />
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-0">
            <a href="#">{t("about")}</a> {/* Dynamic translation */}
            <a href="#">{t("features")}</a> {/* Dynamic translation */}
            <a href="#">{t("customers")}</a> {/* Dynamic translation */}
            <a href="#">{t("pricing")}</a> {/* Dynamic translation */}
            <a href="#">{t("help")}</a> {/* Dynamic translation */}
            <a href="#">{t("careers")}</a> {/* Dynamic translation */}
          </nav>
        </div>

        {/* Footer text */}
        <p className="sm:mt-5">{t("rights")}</p> {/* Dynamic footer text */}
      </div>
    </footer>
  );
};

export default Footer;
