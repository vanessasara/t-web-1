import { StaticImageData } from 'next/image';
import blog1 from '@/assests/images/blog1.png';
import blog2 from '@/assests/images/blog2.png';
import blog3 from '@/assests/images/blog3.png';
import blog4 from '@/assests/images/blog4.png';
import blog5 from '@/assests/images/blog5.png';
import blog6 from '@/assests/images/blog6.png';
import blog7 from '@/assests/images/blog7.png';
import blog8 from '@/assests/images/blog8.png';
import blog9 from '@/assests/images/blog9.png';

export interface Blog {
  slug: string;
  title: string;
  description: string;
  imageSrc: StaticImageData;
  date: string;
  content?: string;
}



export const blogs: Blog[] = [
  {
    slug: 'harnessing-ai-in-healthcare',
    title: 'Harnessing AI in Healthcare',
    description: 'Discover how AI is revolutionizing patient care, from diagnostics to personalized treatment plans.',
    imageSrc: blog1,
    date: 'November 14, 2024',
  },
  {
    slug: 'top-trends-in-cloud-computing-2024',
    title: 'Top Trends in Cloud Computing for 2024',
    description: 'Stay ahead of the curve with insights into the latest cloud technologies shaping the future of IT.',
    imageSrc: blog2,
    date: 'October 30, 2024',
  },
  {
    slug: 'cybersecurity-essentials',
    title: 'Cybersecurity Essentials: Protecting Your Digital World',
    description: 'Explore best practices for safeguarding data and preventing cyber threats in a rapidly evolving landscape.',
    imageSrc: blog3,
    date: 'October 18, 2024',
  },
  {
    slug: 'data-analytics-for-business-growth',
    title: 'Data Analytics for Business Growth',
    description: 'Learn how leveraging data can boost your decision-making and drive your business to new heights.',
    imageSrc: blog4,
    date: 'September 25, 2024',
  },
  {
    slug: 'the-rise-of-edge-computing',
    title: 'The Rise of Edge Computing',
    description: 'Uncover the potential of edge computing in reducing latency and enhancing real-time data processing.',
    imageSrc: blog5,
    date: 'August 17, 2024',
  },
  {
    slug: 'transforming-ecommerce-with-ai',
    title: 'Transforming eCommerce with AI and Automation',
    description: 'How artificial intelligence is creating personalized shopping experiences and optimizing online sales.',
    imageSrc: blog6,
    date: 'July 12, 2024',
  },
  {
    slug: 'blockchain-beyond-cryptocurrencies',
    title: 'Blockchain Beyond Cryptocurrencies',
    description: 'Understand how blockchain technology is disrupting industries beyond finance, from supply chains to healthcare.',
    imageSrc: blog7,
    date: 'June 30, 2024',
  },
  {
    slug: 'the-future-of-5g',
    title: 'The Future of 5G: What’s Next?',
    description: 'Explore the impact of 5G on connectivity, innovation, and the evolution of smart cities.',
    imageSrc: blog8,
    date: 'May 15, 2024',
  },
  {
    slug: 'ai-in-education',
    title: 'AI in Education: Shaping the Future of Learning',
    description: 'How artificial intelligence is revolutionizing education by personalizing learning experiences and automating administrative tasks.',
    imageSrc: blog9,
    date: 'April 10, 2024',
  }
];