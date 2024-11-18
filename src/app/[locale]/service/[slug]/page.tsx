import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import Contact from '@/components/sections/Contact';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}
// Ensuring that the `generateStaticParams` function returns the expected array of objects
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Marking the function component as async to align with Next.js expectations
const Page = async ({ params }: BlogPostProps) => {
  const slug = (await params).slug

  // Fetching the blog based on the slug
  const service = services.find((post) => post.slug === slug);

  // Handling the case where the blog is not found
  if (!service) return notFound();

  // Rendering the blog post content
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="section-title font-serif text-gray-900 mb-6 ">{service.title}</h1>
      

      <div className="space-y-6">
        <p className="text-lg section-description text-gray-700 leading-relaxed">
          {service.description}
        </p>
        <div
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: service.content }}
      />
      </div>
      <Contact/>
    </div>
  );
};

export default Page;
