import Image from "next/image";
import Link from "next/link";
import { professionalEntries } from "@/data/professional";

export const metadata = { title: "Professional — Phillip Williams" };

export default function ProfessionalPage() {
  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Professional
        </h1>
        <p className="mt-2 text-zinc-400">
          A selection of projects and roles I&apos;ve worked on.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {professionalEntries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/professional/${entry.slug}`}
            className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition-all hover:border-zinc-600 hover:bg-zinc-900"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={entry.previewImage}
                alt={entry.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                {entry.title}
              </h2>
              <p className="mt-1 text-sm text-zinc-500">{entry.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
