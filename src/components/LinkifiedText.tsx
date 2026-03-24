import Link from "next/link";
import type { ReactNode } from "react";

interface LinkifiedTextProps {
  text: string;
  className?: string;
}

const RAW_LINK_PATTERN = /(https?:\/\/[^\s)]+|\/(?:professional|personal)\/[a-z0-9-]+)/i;
const TOKEN_PATTERN =
  /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/(?:professional|personal)\/[a-z0-9-]+)\)|(https?:\/\/[^\s)]+|\/(?:professional|personal)\/[a-z0-9-]+)/gi;

function isExternalLink(value: string): boolean {
  return value.startsWith("http://") || value.startsWith("https://");
}

export default function LinkifiedText({ text, className }: LinkifiedTextProps) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let keyCounter = 0;

  for (const match of text.matchAll(TOKEN_PATTERN)) {
    const fullMatch = match[0];
    const matchIndex = match.index ?? 0;
    const markdownLabel = match[1];
    const markdownHref = match[2];
    const rawHref = match[3];

    if (matchIndex > lastIndex) {
      nodes.push(
        <span key={`text-${keyCounter++}`}>{text.slice(lastIndex, matchIndex)}</span>
      );
    }

    const href = markdownHref ?? rawHref;
    const label = markdownLabel ?? href;

    if (href) {
      if (isExternalLink(href)) {
        nodes.push(
          <a
            key={`link-${keyCounter++}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-500 underline-offset-4 transition-colors hover:text-white"
          >
            {label}
          </a>
        );
      } else {
        nodes.push(
          <Link
            key={`link-${keyCounter++}`}
            href={href}
            className="underline decoration-zinc-500 underline-offset-4 transition-colors hover:text-white"
          >
            {label}
          </Link>
        );
      }
    } else {
      nodes.push(<span key={`text-${keyCounter++}`}>{fullMatch}</span>);
    }

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < text.length) {
    nodes.push(<span key={`text-${keyCounter}`}>{text.slice(lastIndex)}</span>);
  }

  // Fast path: no link tokens found, render plain text exactly.
  if (!RAW_LINK_PATTERN.test(text) && !text.includes("](")) {
    return <p className={className}>{text}</p>;
  }

  return <p className={className}>{nodes}</p>;
}
