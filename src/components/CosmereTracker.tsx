"use client";

type Status = "read" | "reading" | "unread";

type Book = {
  title: string;
  status: Status;
};

type Series = {
  name: string;
  books: Book[];
};

const cosmere: Series[] = [
  {
    name: "Mistborn Era 1",
    books: [
      { title: "The Final Empire", status: "read" },
      { title: "The Well of Ascension", status: "unread" },
      { title: "The Hero of Ages", status: "unread" },
    ],
  },
  {
    name: "Mistborn Era 2",
    books: [
      { title: "The Alloy of Law", status: "unread" },
      { title: "Shadows of Self", status: "unread" },
      { title: "The Bands of Mourning", status: "unread" },
      { title: "The Lost Metal", status: "unread" },
    ],
  },
  {
    name: "Stormlight Archive",
    books: [
      { title: "The Way of Kings", status: "read" },
      { title: "Words of Radiance", status: "reading" },
      { title: "Oathbringer", status: "unread" },
      { title: "Rhythm of War", status: "unread" },
      { title: "Wind and Truth", status: "unread" },
    ],
  },
  {
    name: "Standalones",
    books: [
      { title: "Elantris", status: "unread" },
      { title: "Warbreaker", status: "unread" },
    ],
  },
];

function Dot({ status, title }: { status: Status; title: string }) {
  const base = "w-3 h-3 rounded-full transition-colors duration-300 cursor-default";

  if (status === "read") {
    return <span className={`${base} bg-fg`} title={`${title} — read`} />;
  }
  if (status === "reading") {
    return (
      <span
        className={`${base} bg-fg`}
        title={`${title} — reading`}
        style={{
          animation: "pulse 2s ease-in-out infinite",
        }}
      />
    );
  }
  return (
    <span
      className={`${base} border border-border`}
      style={{ background: "transparent" }}
      title={`${title} — unread`}
    />
  );
}

export default function CosmereTracker() {
  const total = cosmere.reduce((n, s) => n + s.books.length, 0);
  const read = cosmere.reduce(
    (n, s) => n + s.books.filter((b) => b.status === "read").length,
    0
  );
  const reading = cosmere.reduce(
    (n, s) => n + s.books.filter((b) => b.status === "reading").length,
    0
  );
  const pct = Math.round(((read + reading * 0.5) / total) * 100);

  return (
    <div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>

      <div className="flex items-baseline justify-between mb-5">
        <h2
          className="text-xl"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
          }}
        >
          Cosmere Progress
        </h2>
        <span className="text-faint text-sm">
          {read}/{total} books &middot; {pct}%
        </span>
      </div>

      <div className="space-y-4">
        {cosmere.map((series) => (
          <div key={series.name} className="flex items-center gap-3">
            <span className="text-muted text-sm w-32 shrink-0">
              {series.name}
            </span>
            <div className="flex gap-1.5">
              {series.books.map((book) => (
                <Dot key={book.title} status={book.status} title={book.title} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-5 text-xs text-faint">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-fg inline-block" /> Read
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full bg-fg inline-block"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          />{" "}
          Reading
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full border border-border inline-block" />{" "}
          Unread
        </span>
      </div>
    </div>
  );
}
