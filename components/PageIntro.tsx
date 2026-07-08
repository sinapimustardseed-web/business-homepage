export default function PageIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-cinapi-green/10 bg-cinapi-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cinapi-gold">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 break-keep text-3xl font-bold tracking-tight text-cinapi-green sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl break-keep text-lg leading-relaxed text-cinapi-olive">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
