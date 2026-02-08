import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookshelf — Aarush Sah",
};

type Book = {
  title: string;
  author: string;
  note?: string;
};

const currentlyReading: Book = {
  title: "Isles of the Emberdark",
  author: "Brandon Sanderson",
};

const fiction: Book[] = [
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    note: "The most intricate magic system ever constructed.",
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    note: "Science fiction that actually respects the science.",
  },
  {
    title: "The Three-Body Problem",
    author: "Liu Cixin",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
  },
  {
    title: "Ender\u2019s Game",
    author: "Orson Scott Card",
  },
  {
    title: "The Final Empire",
    author: "Brandon Sanderson",
  },
];

const nonfiction: Book[] = [
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    note: "The book I wish someone had handed me at 18.",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
  },
  {
    title: "The Beginning of Infinity",
    author: "David Deutsch",
    note: "Changed how I think about progress and explanation.",
  },
  {
    title: "Surely You\u2019re Joking, Mr. Feynman!",
    author: "Richard Feynman",
  },
  {
    title: "G\u00f6del, Escher, Bach",
    author: "Douglas Hofstadter",
  },
  {
    title: "The Alignment Problem",
    author: "Brian Christian",
  },
];

function BookEntry({ book }: { book: Book }) {
  return (
    <li className="py-2">
      <span style={{ fontStyle: "italic" }}>{book.title}</span>
      <span className="text-faint"> — {book.author}</span>
      {book.note && (
        <p className="text-muted text-sm mt-0.5">{book.note}</p>
      )}
    </li>
  );
}

export default function Bookshelf() {
  return (
    <div>
      <h1
        className="text-3xl md:text-4xl tracking-tight mb-6 fade-up fade-up-1"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
        }}
      >
        Bookshelf
      </h1>

      <p className="text-muted mb-16 fade-up fade-up-2">
        Books that shaped how I think. Not exhaustive, just the ones I&apos;d
        press into someone&apos;s hands.
      </p>

      {/* Currently Reading */}
      <section className="mb-14 fade-up fade-up-2">
        <p className="text-faint text-sm uppercase tracking-wider mb-3">
          Currently reading
        </p>
        <p>
          <span style={{ fontStyle: "italic" }}>
            {currentlyReading.title}
          </span>
          <span className="text-faint"> — {currentlyReading.author}</span>
        </p>
      </section>

      {/* Fiction */}
      <section className="mb-14 fade-up fade-up-4">
        <h2
          className="text-xl mb-6"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
          }}
        >
          Fiction
        </h2>
        <ul className="list-none space-y-1">
          {fiction.map((book) => (
            <BookEntry key={book.title} book={book} />
          ))}
        </ul>
      </section>

      {/* Non-Fiction */}
      <section className="fade-up fade-up-5">
        <h2
          className="text-xl mb-6"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
          }}
        >
          Non-Fiction
        </h2>
        <ul className="list-none space-y-1">
          {nonfiction.map((book) => (
            <BookEntry key={book.title} book={book} />
          ))}
        </ul>
      </section>
    </div>
  );
}
