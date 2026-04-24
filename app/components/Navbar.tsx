"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Added this hook
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname(); // Get the current active path

  useEffect(() => setMounted(true), []);

  // Helper to determine if a link is active
  const isActive = (path: string) => pathname === path;

  // Shared classes for links
  const navLinkClasses = (path: string) => `
    text-sm transition-opacity hover:opacity-100
    ${isActive(path) 
      ? "text-neutral-900 dark:text-neutral-100 font-medium opacity-100" 
      : "text-neutral-500 dark:text-neutral-400 opacity-70"
    }
  `;

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 border-b border-neutral-200 dark:border-neutral-800">
      <Link href="/" className="text-lg font-medium">
        SG
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/" className={navLinkClasses("/")}>
          Home
        </Link>
        <Link href="/experience" className={navLinkClasses("/experience")}>
          Experience
        </Link>
        <Link href="/blog" className={navLinkClasses("/blog")}>
          Blog
        </Link>
        <Link href="/about" className={navLinkClasses("/about")}>
          About
        </Link>
        
        {mounted && (
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
            className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        )}
      </div>
    </nav>
  );
}