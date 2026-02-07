import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Aarush Sah",
};

function ExtLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border-b border-border hover:border-fg transition-colors duration-300"
    >
      {children}
    </a>
  );
}

export default function Work() {
  return (
    <div>
      <h1
        className="text-3xl md:text-4xl tracking-tight mb-16 md:mb-20 fade-up fade-up-1"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
        }}
      >
        Work
      </h1>

      {/* Projects */}
      <section className="mb-20 fade-up fade-up-2">
        <div className="space-y-12">
          <article>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-medium">openbench</h3>
              <time className="text-faint text-sm shrink-0">2025</time>
            </div>
            <p className="text-muted mt-2 leading-relaxed">
              Provider-agnostic, open-source evaluation infrastructure for
              language models. Standardized benchmarking across 20+ evaluation
              suites.
            </p>
            <div className="flex gap-4 mt-3 text-sm text-muted">
              <ExtLink href="#">Announcement</ExtLink>
              <ExtLink href="#">GitHub</ExtLink>
              <ExtLink href="#">Tweet</ExtLink>
            </div>
          </article>

          <article>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-medium">Eris</h3>
              <time className="text-faint text-sm shrink-0">2024</time>
            </div>
            <p className="text-muted mt-2 leading-relaxed">
              An evaluation framework using debate simulations to assess AI
              models&apos; reasoning and communication skills.
            </p>
            <div className="flex gap-4 mt-3 text-sm text-muted">
              <ExtLink href="#">Announcement</ExtLink>
              <ExtLink href="#">Code</ExtLink>
            </div>
          </article>

          <article>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-medium">Set-Eval</h3>
              <time className="text-faint text-sm shrink-0">2024</time>
            </div>
            <p className="text-muted mt-2 leading-relaxed">
              A multimodal benchmark for testing vision capabilities and
              reasoning in AI models.
            </p>
            <div className="flex gap-4 mt-3 text-sm text-muted">
              <ExtLink href="#">Details</ExtLink>
              <ExtLink href="#">Code</ExtLink>
            </div>
          </article>
        </div>
      </section>

      {/* Speaking */}
      <section className="fade-up fade-up-3">
        <h2
          className="text-2xl tracking-tight mb-10"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
          }}
        >
          Speaking
        </h2>

        <div className="space-y-8">
          <div>
            <p className="font-medium">RAG, Agents, and Latency</p>
            <p className="text-muted text-sm">
              Webinar with Jason Liu{" "}
              <span className="text-faint">&middot; June 2025</span>
            </p>
          </div>

          <div>
            <p className="font-medium">AI Evals for Engineers &amp; PMs</p>
            <p className="text-muted text-sm">
              Maven Course Guest Lecture{" "}
              <span className="text-faint">&middot; May 2025</span>
            </p>
          </div>

          <div>
            <p className="font-medium">Guest Lecture on Evals</p>
            <p className="text-muted text-sm">
              Stanford CS224G{" "}
              <span className="text-faint">&middot; February 2025</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
