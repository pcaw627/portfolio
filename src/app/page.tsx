import Link from "next/link";
import Image from "next/image";
import { professionalEntries } from "@/data/professional";
import { personalEntries } from "@/data/personal";
import { getProjectPreviewImage } from "@/lib/projectMedia";

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

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Link
            href="#professional"
            className="group flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/60 px-10 py-8 transition-all hover:border-zinc-600 hover:bg-zinc-900"
          >
            <span className="text-3xl">💼</span>
            <span className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
              Professional
            </span>
            <span className="mt-1 text-sm text-zinc-500">
              Projects, roles &amp; technical work
            </span>
          </Link>

          <Link
            href="#personal"
            className="group flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/60 px-10 py-8 transition-all hover:border-zinc-600 hover:bg-zinc-900"
          >
            <span className="text-3xl">🌿</span>
            <span className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-emerald-400">
              Personal
            </span>
            <span className="mt-1 text-sm text-zinc-500">
              Hobbies, interests &amp; life outside code
            </span>
          </Link>
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
