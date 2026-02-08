import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-start gap-6 md:gap-8 mb-10 fade-up fade-up-1">
        <div className="shrink-0">
          <Image
            src="https://pbs.twimg.com/profile_images/1993931348206379008/qsV7W7jP_400x400.jpg"
            alt="Aarush Sah"
            width={100}
            height={100}
            className="rounded-sm"
            priority
          />
        </div>
        <div>
          <h1
            className="text-4xl md:text-5xl tracking-tight leading-none mb-4"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400,
            }}
          >
            Aarush Sah
          </h1>
          <div className="flex gap-5 text-sm text-faint">
            <a
              href="https://x.com/aarush"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition-colors duration-300"
            >
              X
            </a>
            <a
              href="https://github.com/AarushSah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/aarushsah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-5 text-muted leading-relaxed max-w-xl fade-up fade-up-2">
        <p>
          I work at{" "}
          <a
            href="https://www.meta.com/superintelligence/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg border-b border-border hover:border-fg transition-colors duration-300"
          >
            Meta Superintelligence Labs
          </a>
          .
        </p>

        <p>
          Before MSL, I was at NVIDIA working on &lt;redacted&gt; after{" "}
          <a
            href="https://groq.com/newsroom/groq-and-nvidia-enter-non-exclusive-inference-technology-licensing-agreement-to-accelerate-ai-inference-at-global-scale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg border-b border-border hover:border-fg transition-colors duration-300"
          >
            Groq licensed its inference technology to NVIDIA
          </a>
          . At Groq, I led the Evals team and built{" "}
          <a
            href="#"
            className="text-fg border-b border-border hover:border-fg transition-colors duration-300"
          >
            openbench
          </a>
          &mdash;an open-source standard for running evals easily, reliably, and
          in a reproducible manner.
        </p>

        <p>
          Before Groq, I was at{" "}
          <a
            href="https://nousresearch.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg border-b border-border hover:border-fg transition-colors duration-300"
          >
            Nous Research
          </a>{" "}
          developing synthetic data pipelines for training language models.
        </p>

        <p>
          When I&apos;m not thinking about evals, I read epic fantasy
          novels&mdash;especially Brandon Sanderson&mdash;and optimize little
          parts of my life with software.
        </p>
      </div>

      <p className="text-faint text-sm mt-8 fade-up fade-up-3">
        Currently reading:{" "}
        <Link
          href="/bookshelf"
          className="text-muted hover:text-fg transition-colors duration-300"
          style={{ fontStyle: "italic" }}
        >
          Isles of the Emberdark
        </Link>{" "}
        <span className="text-faint">by Brandon Sanderson</span>
      </p>
    </div>
  );
}
