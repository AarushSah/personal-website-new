"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "./ThemeProvider";

type Action = {
  id: string;
  label: string;
  hint?: string;
  section?: string;
  perform: () => void;
};

type BlogPost = {
  title: string;
  slug: string;
};

export default function CommandPalette({ posts }: { posts: BlogPost[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { theme, toggle } = useTheme();

  const go = useCallback(
    (path: string) => {
      setOpen(false);
      router.push(path);
    },
    [router]
  );

  const actions: Action[] = [
    { id: "home", label: "Home", hint: "/", section: "Pages", perform: () => go("/") },
    { id: "work", label: "Work", hint: "/work", section: "Pages", perform: () => go("/work") },
    { id: "blog", label: "Blog", hint: "/blog", section: "Pages", perform: () => go("/blog") },
    {
      id: "bookshelf",
      label: "Bookshelf",
      hint: "/bookshelf",
      section: "Pages",
      perform: () => go("/bookshelf"),
    },
    ...posts.map((post) => ({
      id: `post-${post.slug}`,
      label: post.title,
      hint: `/blog/${post.slug}`,
      section: "Posts",
      perform: () => go(`/blog/${post.slug}`),
    })),
    {
      id: "theme",
      label: `Switch to ${theme === "light" ? "dark" : "light"} mode`,
      section: "Actions",
      perform: () => {
        toggle();
        setOpen(false);
      },
    },
    {
      id: "x",
      label: "X (Twitter)",
      hint: "x.com/aarush",
      section: "Links",
      perform: () => {
        window.open("https://x.com/aarush", "_blank");
        setOpen(false);
      },
    },
    {
      id: "github",
      label: "GitHub",
      hint: "github.com/AarushSah",
      section: "Links",
      perform: () => {
        window.open("https://github.com/AarushSah", "_blank");
        setOpen(false);
      },
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      hint: "linkedin.com/in/aarushsah",
      section: "Links",
      perform: () => {
        window.open("https://linkedin.com/in/aarushsah", "_blank");
        setOpen(false);
      },
    },
  ];

  const filtered = query
    ? actions.filter(
        (a) =>
          a.label.toLowerCase().includes(query.toLowerCase()) ||
          (a.hint && a.hint.toLowerCase().includes(query.toLowerCase()))
      )
    : actions;

  // Reset active index when filtered results change
  useEffect(() => {
    setActive(0);
  }, [query]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll("[data-action]");
    const activeItem = items[active] as HTMLElement | undefined;
    if (activeItem) {
      activeItem.scrollIntoView({ block: "nearest" });
    }
  }, [active]);

  // Open/close on Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery("");
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  // Keyboard navigation within palette
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered.length > 0) {
      e.preventDefault();
      filtered[active].perform();
    }
  };

  if (!open) return null;

  // Group filtered results by section for display
  const sections: { name: string; items: { action: Action; globalIndex: number }[] }[] = [];
  filtered.forEach((action, i) => {
    const sectionName = action.section || "";
    let section = sections.find((s) => s.name === sectionName);
    if (!section) {
      section = { name: sectionName, items: [] };
      sections.push(section);
    }
    section.items.push({ action, globalIndex: i });
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" />

      {/* Palette */}
      <div
        className="relative w-full max-w-[480px] mx-4 border border-border rounded-lg overflow-hidden shadow-2xl"
        style={{
          backgroundColor: "var(--bg)",
          animation: "paletteIn 0.15s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleInputKeyDown}
          placeholder="Type a command..."
          className="w-full bg-transparent px-5 py-4 text-fg outline-none border-b border-border"
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "16px",
          }}
        />

        {/* Results */}
        <div ref={listRef} className="max-h-[320px] overflow-y-auto py-1">
          {filtered.length === 0 && (
            <p className="px-5 py-3 text-faint text-sm">No results</p>
          )}
          {sections.map((section) => (
            <div key={section.name}>
              {section.name && (
                <p
                  className="px-5 pt-3 pb-1 text-faint uppercase tracking-wider"
                  style={{ fontSize: "11px" }}
                >
                  {section.name}
                </p>
              )}
              {section.items.map(({ action, globalIndex }) => (
                <button
                  key={action.id}
                  data-action
                  onClick={action.perform}
                  onMouseEnter={() => setActive(globalIndex)}
                  className="w-full flex items-center justify-between px-5 py-2 text-left transition-colors duration-75 cursor-pointer border-none"
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    backgroundColor:
                      globalIndex === active
                        ? "color-mix(in srgb, var(--fg) 8%, transparent)"
                        : "transparent",
                  }}
                >
                  <span className="text-fg">{action.label}</span>
                  {action.hint && (
                    <span className="text-faint text-sm">{action.hint}</span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Footer hint */}
        <div
          className="flex items-center gap-3 px-5 py-2.5 border-t border-border text-faint"
          style={{ fontSize: "12px" }}
        >
          <span>
            <kbd className="px-1 py-0.5 rounded border border-border text-[11px]">
              &uarr;
            </kbd>{" "}
            <kbd className="px-1 py-0.5 rounded border border-border text-[11px]">
              &darr;
            </kbd>{" "}
            navigate
          </span>
          <span>
            <kbd className="px-1 py-0.5 rounded border border-border text-[11px]">
              &crarr;
            </kbd>{" "}
            select
          </span>
          <span>
            <kbd className="px-1 py-0.5 rounded border border-border text-[11px]">
              esc
            </kbd>{" "}
            close
          </span>
        </div>
      </div>

      <style>{`
        @keyframes paletteIn {
          from {
            opacity: 0;
            transform: scale(0.98) translateY(-4px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
