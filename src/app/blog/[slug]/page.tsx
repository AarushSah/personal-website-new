import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.meta.title} — Aarush Sah`,
    description: post.meta.description,
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="text-xl mt-10 mb-4"
      style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="text-lg font-medium mt-8 mb-3" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-muted leading-relaxed mb-5" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="text-fg font-medium" {...props} />
  ),
  em: (props: React.ComponentProps<"em">) => (
    <em className="italic" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="text-muted leading-relaxed mb-5 ml-5 list-decimal space-y-2" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="text-muted leading-relaxed mb-5 ml-5 list-disc space-y-2" {...props} />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code
      className="text-sm bg-border/40 px-1.5 py-0.5 rounded"
      {...props}
    />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-2 border-border pl-5 my-6 text-muted italic"
      {...props}
    />
  ),
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article>
      <div className="mb-12 fade-up fade-up-1">
        <Link
          href="/blog"
          className="text-faint text-sm hover:text-muted transition-colors duration-300"
        >
          &larr; Blog
        </Link>
      </div>

      <header className="mb-12 fade-up fade-up-2">
        <h1
          className="text-3xl md:text-4xl tracking-tight mb-3"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
          }}
        >
          {post.meta.title}
        </h1>
        <p className="text-faint text-sm">{formatDate(post.meta.date)}</p>
      </header>

      <div className="fade-up fade-up-3">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
