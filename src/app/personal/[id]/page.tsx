import { notFound } from "next/navigation";
import Link from "next/link";
import { personalEntries } from "@/data/personal";
import MediaGallery from "@/components/MediaGallery";
import { getProjectMedia } from "@/lib/projectMedia";
import ScrollToTopOnMount from "@/components/ScrollToTopOnMount";
import EscapeToHomeOnMount from "@/components/EscapeToHomeOnMount";
import LinkifiedText from "@/components/LinkifiedText";

export function generateStaticParams() {
  return personalEntries.map((entry) => ({ id: entry.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then((p) => {
    const entry = personalEntries.find((item) => item.id === p.id);
    return { title: entry ? `${entry.title} — Phillip Williams` : "Not Found" };
  });
}

export default async function PersonalEntryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entry = personalEntries.find((item) => item.id === id);
  if (!entry) notFound();

  const mediaItems = await getProjectMedia(id);

  return (
    <article className="mx-auto max-w-3xl space-y-12">
      <ScrollToTopOnMount />
      <EscapeToHomeOnMount />
      <header className="space-y-5">
        <Link
          href="/#personal"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          ← Back to Personal
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-white">{entry.title}</h1>
        <LinkifiedText
          text={entry.body}
          className="whitespace-pre-line text-lg leading-relaxed text-zinc-300"
        />
      </header>

      {mediaItems.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Gallery</h2>
          <MediaGallery title={entry.title} mediaItems={mediaItems} />
        </section>
      )}
    </article>
  );
}
