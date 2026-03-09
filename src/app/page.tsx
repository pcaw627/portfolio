import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      {/* Hero */}
      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
        Phillip Williams
      </h1>
      <p className="mt-4 max-w-xl text-lg text-zinc-400">
        Engineer, builder, and lifelong learner. Explore my professional work
        and personal interests below.
      </p>

      {/* CTA cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Link
          href="/professional"
          className="group flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/60 px-10 py-8 transition-all hover:border-zinc-600 hover:bg-zinc-900"
        >
          <span className="text-3xl">💼</span>
          <span className="mt-3 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
            Professional
          </span>
          <span className="mt-1 text-sm text-zinc-500">
            Projects, roles &amp; technical work
          </span>
        </Link>

        <Link
          href="/personal"
          className="group flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/60 px-10 py-8 transition-all hover:border-zinc-600 hover:bg-zinc-900"
        >
          <span className="text-3xl">🌿</span>
          <span className="mt-3 text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
            Personal
          </span>
          <span className="mt-1 text-sm text-zinc-500">
            Hobbies, interests &amp; life outside code
          </span>
        </Link>
      </div>
    </div>
  );
}
