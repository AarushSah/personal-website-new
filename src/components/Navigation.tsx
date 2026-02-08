"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

export default function Navigation() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  const linkClass = (path: string) =>
    `transition-opacity duration-200 ${
      pathname === path || pathname.startsWith(path + "/")
        ? "opacity-100"
        : "opacity-60 hover:opacity-90"
    }`;

  return (
    <nav className="flex items-baseline justify-between mb-20 md:mb-28 text-sm fade-up">
      <Link
        href="/"
        className="transition-opacity duration-200 hover:opacity-60"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "1.15rem",
          letterSpacing: "-0.01em",
        }}
      >
        AS
      </Link>
      <div
        className="flex items-baseline gap-5 text-muted"
        style={{ fontSize: "0.8rem", letterSpacing: "0.04em" }}
      >
        <Link href="/work" className={linkClass("/work")}>
          Work
        </Link>
        <Link href="/blog" className={linkClass("/blog")}>
          Blog
        </Link>
        <Link href="/bookshelf" className={linkClass("/bookshelf")}>
          Bookshelf
        </Link>
        <button
          onClick={toggle}
          className="opacity-50 hover:opacity-80 transition-opacity duration-200 cursor-pointer bg-transparent border-none text-muted"
          style={{ fontSize: "0.8rem", letterSpacing: "0.04em" }}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
}
