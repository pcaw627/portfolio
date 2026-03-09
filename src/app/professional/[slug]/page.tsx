import { notFound } from "next/navigation";
import Link from "next/link";
import { professionalEntries } from "@/data/professional";
import AlternatingSection from "@/components/AlternatingSection";
import SectionDivider from "@/components/SectionDivider";

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

  const sectionOrder = [
    entry.sections.technologies,
    entry.sections.goal,
    entry.sections.architecture,
    entry.sections.learnings,
  ];

  return (
    <div className="space-y-16">
      {/* Back link + header */}
      <header className="space-y-4">
        <Link
          href="/professional"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          ← Back to Professional
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          {entry.title}
        </h1>
        <p className="text-lg text-zinc-400">{entry.subtitle}</p>
      </header>

      {/* Alternating sections */}
      {sectionOrder.map((section, i) => (
        <div key={section.heading} className="space-y-16">
          {i > 0 && <SectionDivider />}
          <AlternatingSection
            heading={section.heading}
            body={section.body}
            media={section.media}
            reversed={i % 2 !== 0}
          />
        </div>
      ))}
    </div>
  );
}
