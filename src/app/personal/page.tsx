import Image from "next/image";
import Link from "next/link";
import { personalEntries } from "@/data/personal";
import { getProjectPreviewImage } from "@/lib/projectMedia";

export const metadata = { title: "Personal — Phillip Williams" };

export default async function PersonalPage() {
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
    <div className="space-y-20">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Personal
        </h1>
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
            {/* Text */}
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                {entry.title}
              </h2>
              <p className="leading-relaxed text-zinc-400">{entry.body}</p>
            </div>

            {/* Image */}
            <div className="relative flex-1 aspect-video overflow-hidden rounded-2xl">
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
    </div>
  );
}
