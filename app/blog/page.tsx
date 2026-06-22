import { client, urlFor } from "@/sanity/client";
import Link from "next/link";

const POSTS_PER_PAGE = 9;

export const metadata = {
  title: "Blog | De Kitchen Master",
  description:
    "Read the latest culinary insights, recipes, and stories from De Kitchen Master.",
};

interface PostSummary {
  _id: string;
  title: string;
  slug: string;
  mainImage: any;
  excerpt: string;
  publishedAt: string;
  estimatedReadingTime: number | null;
  author: { name: string; slug: string; image: any; role: string } | null;
  categories: { title: string; slug: string }[];
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getPageRange(current: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: (number | "...")[] = [1];
  if (current > 3) pages.push("...");
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, Number(pageParam) || 1);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const { posts, total } = await client.fetch<{
    posts: PostSummary[];
    total: number;
  }>(
    `{
      "posts": *[_type == "post"] | order(publishedAt desc) [$start...$end] {
        _id,
        title,
        "slug": slug.current,
        mainImage,
        excerpt,
        publishedAt,
        estimatedReadingTime,
        "author": author-> { name, "slug": slug.current, image, role },
        "categories": categories[]-> { title, "slug": slug.current }
      },
      "total": count(*[_type == "post"])
    }`,
    { start, end }
  );

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <main className="pt-20 min-h-screen bg-background">
      <section className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-16">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3">
            INSIGHTS & STORIES
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight">
            Our <span className="text-primary">Blog</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  {post.mainImage ? (
                    <img
                      src={urlFor(post.mainImage).width(600).height(450).url()}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-5xl">
                      🍽️
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {post.publishedAt && (
                      <span className="text-xs text-gray-500 font-medium">
                        {formatDate(post.publishedAt)}
                      </span>
                    )}
                    {post.categories && post.categories.length > 0 && (
                      <>
                        <span className="text-gray-300">·</span>
                        {post.categories.map((cat) => (
                          <span
                            key={cat.slug}
                            className="text-xs font-bold text-primary uppercase tracking-wider"
                          >
                            {cat.title}
                          </span>
                        ))}
                      </>
                    )}
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm text-gray-600 font-medium leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    {post.author?.image ? (
                      <img
                        src={urlFor(post.author.image).width(40).height(40).url()}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                        {(post.author?.name || "D")[0]}
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-semibold text-gray-700">
                        {post.author?.name || "DKM Team"}
                      </span>
                      {post.author?.role && (
                        <>
                          <span>·</span>
                          <span>{post.author.role}</span>
                        </>
                      )}
                      {post.estimatedReadingTime && (
                        <>
                          <span>·</span>
                          <span>{post.estimatedReadingTime} min read</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-xl text-gray-500 font-medium">
              No posts yet. Check back soon!
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            {currentPage > 1 && (
              <Link
                href={`/blog?page=${currentPage - 1}`}
                className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:border-primary/40 hover:text-primary transition-colors duration-300"
              >
                Previous
              </Link>
            )}
            {getPageRange(currentPage, totalPages).map((page, idx) =>
              page === "..." ? (
                <span key={`ellipsis-${idx}`} className="px-2 text-gray-400">
                  ...
                </span>
              ) : page === currentPage ? (
                <span
                  key={page}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-bold text-sm"
                >
                  {page}
                </span>
              ) : (
                <Link
                  key={page}
                  href={`/blog?page=${page}`}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:border-primary/40 hover:text-primary transition-colors duration-300"
                >
                  {page}
                </Link>
              )
            )}
            {currentPage < totalPages && (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:border-primary/40 hover:text-primary transition-colors duration-300"
              >
                Next
              </Link>
            )}
          </div>
        )}
        </div>
      </section>
    </main>
  );
}
