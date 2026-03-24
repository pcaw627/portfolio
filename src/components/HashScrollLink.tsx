"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

type HashScrollLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

function getHash(href: string): string {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) {
    return "";
  }
  return href.slice(hashIndex);
}

export default function HashScrollLink({ href, className, children }: HashScrollLinkProps) {
  const pathname = usePathname();
  const hash = getHash(href);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!hash || pathname !== "/") {
      return;
    }

    event.preventDefault();
    const target = document.getElementById(hash.slice(1));

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/${hash}`);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
