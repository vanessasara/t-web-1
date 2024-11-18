'use client';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import LogoImage from '@/assests/images/logo.webp';
import Image from 'next/image';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const Header = ({ locale }: { locale: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        isScrolled ? 'bg-white/50 backdrop-blur-lg shadow-lg' : 'bg-white shadow-md'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-16 xl:px-32">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href={`/${locale}`}>
            <Image src={LogoImage} height={120} width={120} alt={t('home')} />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-600 text-xl">
          <ul className="flex items-center gap-6">
            <Link href={`/${locale}`} className="menu-text cursor-pointer">
              {t('home')}
            </Link>
            <Link href={`/${locale}/about`} className="menu-text cursor-pointer">
              {t('about')}
            </Link>
            <Link href={`/${locale}/service`} className="menu-text cursor-pointer">
              {t('services')}
            </Link>
            <Link href={`/${locale}/blog`} className="menu-text cursor-pointer">
              {t('blog')}
            </Link>
            <select
              className="bg-transparent cursor-pointer"
              value={locale}
              onChange={handleLanguageChange}
            >
              <option value="en">EN</option>
              <option value="id">AR</option>
            </select>
          </ul>
        </nav>

        {/* Contact Button */}
        <Link href={`/${locale}/contact`}>
          <Button className="hidden md:inline-flex uppercase bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transform transition-all duration-300 hover:scale-105">
            {t('contact')}
          </Button>
        </Link>

        {/* Mobile Menu Icon */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden flex flex-col items-center justify-center space-y-1.5 focus:outline-none">
              <div className="w-6 h-0.5 bg-gray-800"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
            </button>
          </SheetTrigger>

          {/* Mobile Navigation Menu inside the Sheet */}
          <SheetContent side="left" className="bg-white text-gray-700">
            <div className="flex flex-col space-y-4 mt-6">
              <Link
                href={`/${locale}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="menu-text"
              >
                {t('home')}
              </Link>
              <Link
                href={`/${locale}/about`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="menu-text"
              >
                {t('about')}
              </Link>
              <Link
                href={`/${locale}/service`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="menu-text"
              >
                {t('services')}
              </Link>
              <Link
                href={`/${locale}/blog`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="menu-text"
              >
                {t('blog')}
              </Link>
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="menu-text"
              >
                {t('contact')}
              </Link>
              <select
                className="mt-4 border border-gray-800 cursor-pointer"
                value={locale}
                onChange={handleLanguageChange}
              >
                <option value="en">EN</option>
                <option value="id">AR</option>
              </select>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
