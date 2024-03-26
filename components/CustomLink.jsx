"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ children, path }) {
  const pathName = usePathname();
  const isActive = pathName === path;
  return (
    <Link className={`capitalize ${isActive && "text-[#ffd160]"}`} href={path}>
      {children}
    </Link>
  );
}
