"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function isActivePath(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  // Sub-pages (e.g. /in-practice/<architecture>) keep their section active.
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLink({
  href,
  className = "",
  activeClassName = "",
  onClick,
  children,
}: {
  href: string;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`${className} ${active ? activeClassName : ""}`}
    >
      {children}
    </Link>
  );
}
