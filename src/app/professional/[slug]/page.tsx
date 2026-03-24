import { notFound } from "next/navigation";
import Link from "next/link";
import { professionalEntries } from "@/data/professional";
import { professionalDetailText } from "@/data/professionalDetailText";
import MediaGallery from "@/components/MediaGallery";
import { getProjectMedia } from "@/lib/projectMedia";
import EscapeToHomeOnMount from "@/components/EscapeToHomeOnMount";
import ScrollToTopOnMount from "@/components/ScrollToTopOnMount";
import LinkifiedText from "@/components/LinkifiedText";

/* Generate static paths for all projects at build time. */
export function generateStaticParams() {
  return professionalEntries.map((e) => ({ slug: e.slug }));
}

/* Dynamic metadata per project. */
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((p) => {
    const entry = professionalEntries.find((e) => e.slug === p.slug);
    return { title: entry ? `${entry.title} — Phillip Williams` : "Not Found" };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = professionalEntries.find((e) => e.slug === slug);
  if (!entry) notFound();

  const detailText = professionalDetailText[slug];
  const longSummary = detailText?.summary ?? entry.sections.goal.body;
  const textSections = [
    {
      heading: "Design Decisions",
      body: detailText?.designDecisions ?? entry.sections.architecture.body,
    },
    {
      heading: "Key Learnings & Takeaways",
      body: detailText?.keyLearnings ?? entry.sections.learnings.body,
    },
  ];
  const mediaItems = await getProjectMedia(slug);

  return (
    <article className="mx-auto max-w-3xl space-y-12">
      <ScrollToTopOnMount />
      <EscapeToHomeOnMount />
      <header className="space-y-5">
        <Link
          href="/#professional"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          ← Back to Professional
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          {entry.title}
        </h1>
        <LinkifiedText
          text={longSummary}
          className="whitespace-pre-line text-lg leading-relaxed text-zinc-300"
        />
      </header>

      {mediaItems.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Media</h2>
          <MediaGallery title={entry.title} mediaItems={mediaItems} />
        </section>
      )}

      <section className="space-y-10">
        {textSections.map((section) => (
          <div key={section.heading} className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
            <LinkifiedText
              text={section.body}
              className="whitespace-pre-line leading-relaxed text-zinc-300"
            />
          </div>
        ))}
      </section>
    </article>
  );
}
