import { Inter, Calistoga } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { twMerge } from 'tailwind-merge';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Tech Solutions',
  description: 'Unleash with powerful services',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string
  }
}

export default async function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {

  const messages = await getMessages();

  return (
    <html lang={locale} className="relative">
      <body className={twMerge(inter.variable, calistoga.variable, 'antialiased font-sans')}>
        <NextIntlClientProvider messages={messages}>
          <div>
            <Header locale={locale} />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
