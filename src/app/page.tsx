export default function Home() {
  return (
    <div className="min-h-[65vh] flex flex-col justify-center">
      <h1
        className="text-5xl md:text-6xl tracking-tight leading-none mb-8 fade-up fade-up-1"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
        }}
      >
        Aarush Sah
      </h1>

      <p
        className="text-muted text-lg md:text-xl leading-relaxed max-w-md fade-up fade-up-2"
        style={{ fontStyle: "italic" }}
      >
        Building superintelligence at Meta.
      </p>

      <div className="flex gap-6 mt-12 text-sm text-faint fade-up fade-up-3">
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
  );
}
