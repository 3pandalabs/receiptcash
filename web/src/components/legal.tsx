// Long-form layout for the public legal pages (/privacy, /terms), in the same
// shape as SpendVault's and AdVault's LegalPage: header with a way back to the
// site, big title, last-updated date, a ruled summary, a contents list, then
// prose. Styled with this app's zinc light/dark palette. Server components
// only. The site-wide footer comes from the root layout, so none here.
import Link from "next/link";
import { WordmarkTag } from "@/components/Wordmark";

export const CONTACT_EMAIL = "3pandas@3pandalabs.com";
export const CONTACT_PHONE = "+1 (332) 316-8453";
export const LAST_UPDATED = "November 22, 2026";

export type TocEntry = { id: string; title: string };

export function LegalPage({
  title,
  intro,
  toc,
  children,
}: {
  title: string;
  intro: React.ReactNode;
  toc: TocEntry[];
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
      <header className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3 px-6 py-6">
        <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          <Link href="/">ReceiptCash</Link>
          <WordmarkTag />
        </span>
        <nav className="text-sm">
          <Link
            href="/"
            className="rounded-full px-3 py-2 whitespace-nowrap text-zinc-600 hover:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Back to site
          </Link>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pt-6 pb-20">
        <article>
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-4xl dark:text-zinc-50">
            {title}
          </h1>
          <p className="mt-3 text-sm text-zinc-500">Last updated: {LAST_UPDATED}</p>
          <div className="mt-6 space-y-4 border-l-2 border-zinc-300 pl-4 text-lg leading-relaxed text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
            {intro}
          </div>
          {toc.length ? (
            <nav
              aria-label="Contents"
              className="mt-10 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">Contents</p>
              <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-zinc-500">
                {toc.map((e) => (
                  <li key={e.id}>
                    <a href={`#${e.id}`} className="text-zinc-700 hover:underline dark:text-zinc-300">
                      {e.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}
          <div className="[&_li>strong]:font-medium [&_strong]:text-zinc-900 dark:[&_strong]:text-zinc-100">{children}</div>
        </article>
      </main>
    </div>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="mt-12 mb-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{title}</h2>
      <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400 [&_li]:leading-relaxed">{children}</div>
    </section>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 mb-2 text-base font-semibold text-zinc-800 dark:text-zinc-200">{children}</h3>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5">{children}</ul>;
}

export function Mail({ to = CONTACT_EMAIL }: { to?: string }) {
  return (
    <a href={`mailto:${to}`} className="text-zinc-900 underline underline-offset-2 dark:text-zinc-100">
      {to}
    </a>
  );
}

export function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-zinc-900 underline underline-offset-2 dark:text-zinc-100">
      {children}
    </Link>
  );
}
