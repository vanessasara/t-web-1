import Card from '@/components/sections/Card';
import { blogs } from '@/data/blogs';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const BlogCard = () => {
    const locale = useLocale();
    const t = useTranslations('blogs');

    return (
        <section className="max-w-7xl mx-auto items-center py-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-4 justify-items-center">
      {blogs.map((blog, index) => (
        <Link key={index} href={`/${locale}/blog/${blog.slug}`}>
          <Card
            title={t(`${blog.slug}.title`)}
            description={t(`${blog.slug}.description`)}
            imageSrc={blog.imageSrc}
            date={blog.date}
            className="w-[400px] h-[400px]"
          />
        </Link>
      ))}
    </section>
    );
}

export default BlogCard;
