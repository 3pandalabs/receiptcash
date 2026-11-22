/** "<App> | by 3PandaLabs" attribution tag, ported from RentVault's
 * Wordmark (nrighar/web/src/components/Wordmark.tsx). Place it as a sibling
 * of the app name — never inside a Link/anchor, or the <a>s nest. Displayed
 * uppercase via CSS (source text stays "by 3PandaLabs") and never hidden. */
export function WordmarkTag() {
  return (
    <>
      <span
        aria-hidden
        className="mx-2 inline-block h-3.5 w-px translate-y-[1px] bg-current align-middle opacity-20"
      />
      <a
        href="https://3pandalabs.com"
        target="_blank"
        rel="noopener noreferrer"
        className="align-middle font-mono text-[10px] font-normal uppercase tracking-widest text-zinc-500 hover:text-zinc-700 hover:underline dark:text-zinc-400 dark:hover:text-zinc-300"
      >
        by 3PandaLabs
      </a>
    </>
  );
}
