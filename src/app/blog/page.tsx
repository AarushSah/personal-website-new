import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Aarush Sah",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div>
      <h1
        className="text-3xl md:text-4xl tracking-tight mb-16 md:mb-20 fade-up fade-up-1"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
        }}
      >
        Blog
      </h1>

      <div className="space-y-10 fade-up fade-up-2">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <p className="text-faint text-sm mb-1">{formatDate(post.date)}</p>
              <h2
                className="text-xl group-hover:text-muted transition-colors duration-300"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontWeight: 400,
                }}
              >
                {post.title}
              </h2>
              {post.description && (
                <p className="text-muted text-sm mt-1.5 leading-relaxed">
                  {post.description}
                </p>
              )}
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-muted fade-up fade-up-2">Nothing here yet.</p>
      )}
    </div>
  );
}
