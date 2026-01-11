"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Topbar = () => {
  const pathname: string = usePathname();

  return (
    <div className="flex x flex-col sm:flex-row gap-8 items-center">
      {/* The title */}
      <h1 className="text-5xl font-mono grow">Speed Reader</h1>
      {/* The navigation bar */}
      <nav className="flex flex-row gap-8">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "" : ""
          } hover:underline hover:text-primary active:opacity-80 text-xl`}
        >
          Reader
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/" ? "" : ""
          } hover:underline hover:text-primary active:opacity-80 text-xl`}
        >
          About
        </Link>
      </nav>
    </div>
  );
};
