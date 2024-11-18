import {
  ArrowDownIcon,
  ChartPieIcon,
  CogIcon,
  CurrencyDollarIcon,
  DocumentCheckIcon,
  MagnifyingGlassIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

export type ServiceCard = {
  id: number;
  name: string;
  title: string;
  description: string;
  icon: JSX.Element;
};

export const servicesList = [
  'Technical Hiring',
  'Software Due Diligence',
  'Virtual CTO'
];

export const serviceCards: { [key: string]: ServiceCard[] } = {
  'Technical Hiring': [
    {
      id: 1,
      name: 'Technical Hiring',
      title: 'Build Your Dream Team',
      description: 'Efficiently build your dream team. Let us handle tech hiring challenges.',
      icon: <UserGroupIcon className="w-12 h-12 text-red-600" />,
    },
    {
      id: 2,
      name: 'Technical Hiring',
      title: 'Talent Sourcing',
      description: 'Access a pool of top tech talent to match your needs.',
      icon: <MagnifyingGlassIcon className="w-12 h-12 text-yellow-500" />,
    },
    {
      id: 3,
      name: 'Technical Hiring',
      title: 'End-to-End Recruitment',
      description: 'Comprehensive recruitment process tailored to your organization.',
      icon: <DocumentCheckIcon className="w-12 h-12 text-green-600" />,
    },
  ],
  'Software Due Diligence': [
    {
      id: 1,
      name: 'Software Due Diligence',
      title: 'Risk Mitigation',
      description: 'Mitigate risks with thorough tech due diligence.',
      icon: <ShieldExclamationIcon className="w-12 h-12 text-blue-600" />,
    },
    {
      id: 2,
      name: 'Software Due Diligence',
      title: 'Maximize Returns',
      description: 'Ensure maximum returns for investors and M&A.',
      icon: <CurrencyDollarIcon className="w-12 h-12 text-purple-600" />,
    },
    {
      id: 3,
      name: 'Software Due Diligence',
      title: 'Comprehensive Analysis',
      description: 'Detailed assessment of software architecture and quality.',
      icon: <ChartPieIcon className="w-12 h-12 text-teal-600" />,
    },
  ],
  'Virtual CTO': [
    {
      id: 1,
      name: 'Virtual CTO',
      title: 'Strategic Leadership',
      description: 'Strategic tech leadership tailored for Fintech innovation.',
      icon: <UsersIcon  className="w-12 h-12 text-pink-600" />,
    },
    {
      id: 2,
      name: 'Virtual CTO',
      title: 'Technology Roadmap',
      description: 'Developing a clear technology roadmap for your business.',
      icon: <CogIcon   className="w-12 h-12 text-indigo-500" />,
    },
    {
      id: 3,
      name: 'Virtual CTO',
      title: 'Cost Optimization',
      description: 'Efficient tech solutions to optimize your costs.',
      icon: <ArrowDownIcon  className="w-12 h-12 text-orange-600" />,
    },
  ],

};
