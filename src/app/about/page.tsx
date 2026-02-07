import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Aarush Sah",
};

export default function About() {
  return (
    <div>
      <h1
        className="text-3xl md:text-4xl tracking-tight mb-16 md:mb-20 fade-up fade-up-1"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
        }}
      >
        About
      </h1>

      <div className="fade-up fade-up-2">
        <Image
          src="https://pbs.twimg.com/profile_images/1993931348206379008/qsV7W7jP_400x400.jpg"
          alt="Aarush Sah"
          width={140}
          height={140}
          className="rounded-sm mb-10"
          priority
        />
      </div>

      <div className="space-y-5 text-muted leading-relaxed max-w-lg fade-up fade-up-3">
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
          , where I focus on evals, reinforcement learning, and infrastructure.
        </p>

        <p>
          Before Meta, I was at NVIDIA after{" "}
          <a
            href="https://groq.com/newsroom/groq-and-nvidia-enter-non-exclusive-inference-technology-licensing-agreement-to-accelerate-ai-inference-at-global-scale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg border-b border-border hover:border-fg transition-colors duration-300"
          >
            Groq and NVIDIA struck a deal
          </a>
          . At Groq, I led the Evals team and built{" "}
          <a
            href="#"
            className="text-fg border-b border-border hover:border-fg transition-colors duration-300"
          >
            openbench
          </a>{" "}
          &mdash; an open-source standard for running evals easily, reliably,
          and in a reproducible manner.
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
          novels &mdash; especially Brandon Sanderson &mdash; and optimize
          little parts of my life with software.
        </p>
      </div>
    </div>
  );
}
