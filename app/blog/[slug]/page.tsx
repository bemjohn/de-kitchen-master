import { client, urlFor } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PostDetail {
  _id: string;
  title: string;
  slug: string;
  mainImage: any;
  excerpt: string;
  body: any[];
  publishedAt: string;
  estimatedReadingTime: number | null;
  featured: boolean;
  tags: string[];
  author: {
    name: string;
    slug: string;
    image: any;
    bio: string;
    role: string;
  } | null;
  categories: { _id: string; title: string }[];
}

interface RelatedPost {
  _id: string;
  title: string;
  slug: string;
  mainImage: any;
  publishedAt: string;
  categories: { title: string }[];
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<PostDetail | null>(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      excerpt
    }`,
    { slug }
  );

  if (!post) return { title: "Post Not Found | De Kitchen Master" };

  return {
    title: `${post.title} | De Kitchen Master`,
    description: post.excerpt || `Read ${post.title} on De Kitchen Master blog.`,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch<PostDetail | null>(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      mainImage,
      excerpt,
      body,
      publishedAt,
      estimatedReadingTime,
      featured,
      tags,
      "author": author-> { name, image, bio, role },
      "categories": categories[]-> { _id, title }
    }`,
    { slug }
  );

  if (!post) notFound();

  const categoryIds = post.categories?.map((c) => c._id) || [];

  const relatedPosts = categoryIds.length > 0
    ? await client.fetch<RelatedPost[]>(
        `*[_type == "post" && _id != $currentId && count(categories[@->_id in $categoryIds]) > 0] | order(publishedAt desc) [0...3]{
          _id,
          title,
          "slug": slug.current,
          mainImage,
          publishedAt,
          "categories": categories[]-> { title }
        }`,
        { currentId: post._id, categoryIds }
      )
    : [];

  return (
    <main className="pt-20 min-h-screen bg-background">
      <article>
        {post.mainImage && (
          <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] bg-gray-900 overflow-hidden">
            <img
              src={urlFor(post.mainImage).width(1920).height(1080).url()}
              alt={post.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {post.categories?.map((cat) => (
                  <span
                    key={cat._id}
                    className="text-xs font-bold text-primary uppercase tracking-widest bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
                  >
                    {cat.title}
                  </span>
                ))}
                {post.publishedAt && (
                  <span className="text-xs text-gray-300 font-medium bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {formatDate(post.publishedAt)}
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 mt-6">
                {post.author?.image ? (
                  <img
                    src={urlFor(post.author.image).width(64).height(64).url()}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black text-lg">
                    {(post.author?.name || "D")[0]}
                  </div>
                )}
                <div>
                  <p className="text-white font-bold">
                    {post.author?.name || "DKM Team"}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {post.author?.role}
                    {post.estimatedReadingTime && (
                      <> · {post.estimatedReadingTime} min read</>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:shadow-lg">
            <PortableText value={post.body || []} />
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {post.author && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 md:p-8">
                {post.author.image ? (
                  <img
                    src={urlFor(post.author.image).width(96).height(96).url()}
                    alt={post.author.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-white flex items-center justify-center font-black text-2xl flex-shrink-0">
                    {post.author.name[0]}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {post.author.name}
                  </h3>
                  {post.author.role && (
                    <p className="text-sm text-primary font-semibold mb-2">
                      {post.author.role}
                    </p>
                  )}
                  {post.author.bio && (
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      {post.author.bio}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="text-center mb-14">
              <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
                KEEP READING
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                Related <span className="text-primary">Articles</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp._id}
                  href={`/blog/${rp.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                    {rp.mainImage ? (
                      <img
                        src={urlFor(rp.mainImage).width(600).height(450).url()}
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300 text-5xl">
                        🍽️
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    {rp.publishedAt && (
                      <span className="text-xs text-gray-500 font-medium">
                        {formatDate(rp.publishedAt)}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {rp.title}
                    </h3>
                    {rp.categories && rp.categories.length > 0 && (
                      <div className="flex items-center gap-2 mt-2">
                        {rp.categories.map((cat) => (
                          <span
                            key={cat.title}
                            className="text-xs font-bold text-primary uppercase tracking-wider"
                          >
                            {cat.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
