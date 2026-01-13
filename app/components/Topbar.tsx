"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Topbar = () => {
  const pathname: string = usePathname();

  return (
    <div className="flex x flex-row gap-4 items-center">
      {/* The title */}
      <div className="flex grow">
        <Link href="/">
          <h1 className="text-xl sm:text-5xl font-mono">Speed Reader</h1>
        </Link>
      </div>

      {/* The navigation bar */}
      <nav className="flex flex-row gap-4 sm:gap-8">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "" : ""
          } hover:underline hover:text-primary active:opacity-80 text-md sm:text-xl`}
        >
          Reader
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/" ? "" : ""
          } hover:underline hover:text-primary active:opacity-80 text-md sm:text-xl`}
        >
          About
        </Link>
      </nav>
    </div>
  );
};
