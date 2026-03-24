import Link from "next/link";
import Image from "next/image";
import { professionalEntries } from "@/data/professional";
import { personalEntries } from "@/data/personal";
import { getProjectPreviewImage } from "@/lib/projectMedia";
import HashScrollLink from "@/components/HashScrollLink";

export default async function Home() {
  const professionalCards = await Promise.all(
    professionalEntries.map(async (entry) => ({
      ...entry,
      previewImage: await getProjectPreviewImage(entry.slug, "/assets/placeholder.png"),
    }))
  );
  const personalCards = await Promise.all(
    personalEntries.map(async (entry) => ({
      ...entry,
      image: {
        ...entry.image,
        src: await getProjectPreviewImage(entry.id, entry.image.src),
      },
    }))
  );

  return (
    <div className="space-y-24">
      <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Phillip Williams
        </h1>
        <p className="mt-4 max-w-xl text-lg text-zinc-400">
          Engineer, builder, and lifelong learner. Explore my professional work
          and personal interests below.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            href="https://drive.google.com/file/d/1yaQoYTe23HszIQNxphM3XeBtfIYTRXsi/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-zinc-700 px-4 py-2 text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            View CV
          </a>
          <a
            href="https://github.com/pcaw627"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center rounded-full border border-zinc-700 p-2 text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.45-2.7 5.42-5.27 5.71.41.36.78 1.08.78 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <HashScrollLink
            href="#professional"
            className="hero-branch-card hero-branch-card--professional group relative flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/60 px-10 py-8 transition-all hover:border-zinc-600 hover:bg-zinc-900"
          >
            <span className="branch-overlay" aria-hidden="true">
              <svg
                className="branch-svg"
                viewBox="0 0 100 190"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="professional-wisp-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#93c5fd" />
                    <stop offset="70%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
                <path className="branch-path branch-path--professional-main" d="M50 0 Q50 34 50 150" />

                <path className="branch-path branch-path--professional branch-path-delay-1" d="M50 34 Q42 52 36 92" />
                <path className="branch-path branch-path--professional branch-path-delay-1" d="M50 34 Q58 52 64 92" />

                <path className="branch-path branch-path--professional branch-path-delay-2" d="M50 66 Q40 94 30 136" />
                <path className="branch-path branch-path--professional branch-path-delay-2" d="M50 66 Q60 94 70 136" />

                <path className="branch-path branch-path--professional branch-path-delay-3" d="M36 92 Q28 110 22 146" />
                <path className="branch-path branch-path--professional branch-path-delay-3" d="M64 92 Q72 110 78 146" />

                <path className="branch-path branch-path--professional branch-path-delay-4" d="M50 98 Q38 126 24 174" />
                <path className="branch-path branch-path--professional branch-path-delay-4" d="M50 98 Q62 126 76 174" />

                <path className="branch-path-wisp branch-path-wisp--professional branch-path-delay-2" d="M30 136 Q27 148 22 160" />
                <path className="branch-path-wisp branch-path-wisp--professional branch-path-delay-2" d="M70 136 Q73 148 78 160" />
                <path className="branch-path-wisp branch-path-wisp--professional branch-path-delay-3" d="M24 174 Q22 182 19 188" />
                <path className="branch-path-wisp branch-path-wisp--professional branch-path-delay-3" d="M76 174 Q78 182 81 188" />
              </svg>
            </span>
            <span className="text-3xl">💼</span>
            <span className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
              Professional
            </span>
            <span className="mt-1 text-sm text-zinc-500">
              Projects, roles &amp; technical work
            </span>
          </HashScrollLink>

          <HashScrollLink
            href="#personal"
            className="hero-branch-card hero-branch-card--personal group relative flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/60 px-10 py-8 transition-all hover:border-zinc-600 hover:bg-zinc-900"
          >
            <span className="branch-overlay" aria-hidden="true">
              <svg
                className="branch-svg"
                viewBox="0 0 100 190"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="personal-wisp-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#86efac" />
                    <stop offset="70%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#16a34a" />
                  </linearGradient>
                </defs>
                <path className="branch-path branch-path--personal-main" d="M50 0 Q50 34 50 150" />

                <path className="branch-path branch-path--personal branch-path-delay-1" d="M50 34 Q42 52 36 92" />
                <path className="branch-path branch-path--personal branch-path-delay-1" d="M50 34 Q58 52 64 92" />

                <path className="branch-path branch-path--personal branch-path-delay-2" d="M50 66 Q40 94 30 136" />
                <path className="branch-path branch-path--personal branch-path-delay-2" d="M50 66 Q60 94 70 136" />

                <path className="branch-path branch-path--personal branch-path-delay-3" d="M36 92 Q28 110 22 146" />
                <path className="branch-path branch-path--personal branch-path-delay-3" d="M64 92 Q72 110 78 146" />

                <path className="branch-path branch-path--personal branch-path-delay-4" d="M50 98 Q38 126 24 174" />
                <path className="branch-path branch-path--personal branch-path-delay-4" d="M50 98 Q62 126 76 174" />

                <path className="branch-path-wisp branch-path-wisp--personal branch-path-delay-2" d="M30 136 Q27 148 22 160" />
                <path className="branch-path-wisp branch-path-wisp--personal branch-path-delay-2" d="M70 136 Q73 148 78 160" />
                <path className="branch-path-wisp branch-path-wisp--personal branch-path-delay-3" d="M24 174 Q22 182 19 188" />
                <path className="branch-path-wisp branch-path-wisp--personal branch-path-delay-3" d="M76 174 Q78 182 81 188" />
              </svg>
            </span>
            <span className="text-3xl">🌿</span>
            <span className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-emerald-400">
              Personal
            </span>
            <span className="mt-1 text-sm text-zinc-500">
              Hobbies, interests &amp; life outside code
            </span>
          </HashScrollLink>
        </div>
      </section>

      <section id="professional" className="scroll-mt-28 space-y-12">
        <header>
          <h2 className="text-4xl font-bold tracking-tight text-white">Professional</h2>
          <p className="mt-2 text-zinc-400">
            A selection of projects and roles I&apos;ve worked on.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {professionalCards.map((entry) => (
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
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-400">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{entry.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="personal" className="scroll-mt-28 space-y-20">
        <header>
          <h2 className="text-4xl font-bold tracking-tight text-white">Personal</h2>
          <p className="mt-2 text-zinc-400">
            A little about who I am outside of work.
          </p>
        </header>

        {personalCards.map((entry, i) => {
          const reversed = i % 2 !== 0;
          return (
            <Link
              key={entry.id}
              href={`/personal/${entry.id}`}
              className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${
                reversed ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold text-white">{entry.title}</h3>
                <p className="leading-relaxed text-zinc-400">{entry.body}</p>
              </div>

              <div className="relative aspect-video flex-1 overflow-hidden rounded-2xl">
                <Image
                  src={entry.image.src}
                  alt={entry.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
