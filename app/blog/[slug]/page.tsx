import Image from "next/image";
import { notFound } from "next/navigation";

import type { Post } from "@/components/blocks/blog8";
import { BLOG_POSTS_DATA } from "@/content/blog-posts-data";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<Record<string, string | string[]>>;
}

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.filter((post) => !post.isExternal).map((post) => ({
    slug: post.url,
  }));
}

function getPostBySlug(slug: string): Post | undefined {
  return BLOG_POSTS_DATA.find((post) => !post.isExternal && post.url === slug);
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post || post.isExternal) {
    notFound();
  }

  // For security, you might want to sanitize this HTML content
  // or use a dedicated Markdown/MDX renderer if your content is in that format.
  const articleContent = post.content ? { __html: post.content } : undefined;

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <article className="prose prose-lg mx-auto dark:prose-invert">
          <h1>{post.title}</h1>
          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.published}</span>
            {post.readingTime && (
              <>
                <span>•</span>
                <span>{post.readingTime}</span>
              </>
            )}
          </div>
          {post.image && (
            <div className="mb-8 aspect-[16/9] overflow-hidden rounded-lg border">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          )}
          {articleContent && <div dangerouslySetInnerHTML={articleContent} />}
        </article>
      </div>
    </section>
  );
}
