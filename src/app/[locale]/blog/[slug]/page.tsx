
import BlogDetail from '@/components/sections/BlogDetail';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  console.log(slug)
  return <BlogDetail slug={slug}/>
}