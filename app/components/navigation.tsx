"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  // show different styles for the active pathname
  const pathname: string = usePathname();

  return (
    <nav>
      <Link href="/" className={pathname === "/" ? "bg-gray-200" : ""}>
        Reader
      </Link>
      <Link
        href="/about"
        className={pathname === "/about" ? "bg-gray-200" : ""}
      >
        About
      </Link>
    </nav>
  );
};
