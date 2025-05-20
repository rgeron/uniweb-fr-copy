import { Blog8 } from "@/components/blocks/blog8";
import { BLOG_POSTS_DATA } from "@/content/blog-posts-data";

export default function BlogPage() {
  return (
    <Blog8
      heading="Nos Articles de Blog"
      description="Découvrez nos dernières réflexions, guides et études sur l'accessibilité numérique, le développement web moderne et les meilleures pratiques pour un internet plus inclusif."
      posts={BLOG_POSTS_DATA}
    />
  );
}
