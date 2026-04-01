"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 border-b border-neutral-200 dark:border-neutral-800">
      <Link href="/" className="text-lg font-medium">
        SG
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/" className="text-sm hover:opacity-70 transition-opacity">
          Home
        </Link>
        <Link href="/experience" className="text-sm text-neutral-400 hover:opacity-70 transition-opacity">
          Experience
        </Link>
        <Link href="/blog" className="text-sm text-neutral-400 hover:opacity-70 transition-opacity">
          Blog
        </Link>
        {mounted && (
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:opacity-70 transition-opacity">
            <span className="text-xs">{theme === "dark" ? "☀" : "●"}</span>
          </button>
        )}
      </div>
    </nav>
  );
}