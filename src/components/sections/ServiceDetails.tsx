'use client';
import { useEffect, useState } from 'react';
import { Blog, blogs } from '@/data/blogs';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface BlogDetailProps {
  slug: string;
}

const BlogDetail = ({ slug }: BlogDetailProps) => {
  const t = useTranslations('blogsContent');

  // State to handle the blog data
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (slug) {
      // Find the blog by slug when slug is available
      const foundBlog = blogs.find((item) => item.slug === slug);
      setBlog(foundBlog || null);
    }
  }, [slug]);

  // If the blog is not found
  if (!blog) return <div>{t('notFound')}</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 text-center">
      {/* Translated Title */}
      <h1 className="text-4xl font-bold mb-4">{t(`${blog.slug}.title`)}</h1>
      <p className="text-gray-600 mb-6">{blog.date}</p>

      {/* Blog Image */}
      <div className="flex justify-center">
        <Image
          src={blog.imageSrc}
          alt={blog.title}
          width={400}   // Adjusted width for a smaller image
          height={400}  // Adjusted height to maintain aspect ratio
          className="rounded-lg"
        />
      </div>
        <p className="mt-6 text-2xl">{t(`${blog.slug}.content`)}</p>

      {/* Translated Description */}
    </div>

  );
};

export default BlogDetail;
