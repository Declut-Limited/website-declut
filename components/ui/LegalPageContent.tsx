type LegalSection = {
  heading: string;
  body: string;
};

export default function LegalPageContent({
  title,
  lastUpdated,
  sections,
}: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <article>
      <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-ink/50">Last updated: {lastUpdated}</p>

      <div className="mt-6 rounded-2xl border border-primary/20 bg-primary-25 px-5 py-4 text-sm text-ink/70">
        This page is a placeholder. It will be replaced with Declut&apos;s
        finalized {title.toLowerCase()} before launch.
      </div>

      <div className="mt-10 flex flex-col gap-8">
        {sections.map((section, index) => (
          <div key={section.heading}>
            <h2 className="text-lg font-bold text-ink">
              {index + 1}. {section.heading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
