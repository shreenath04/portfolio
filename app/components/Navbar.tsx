import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
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
      </div>
    </nav>
  );
}