import Link from "next/link";

export default function InlineContactCta({ heading, button }: { heading: string; button: string }) {
  return (
    <div className="rounded-2xl bg-cinapi-olive px-8 py-10 text-center">
      <h3 className="break-keep text-2xl font-bold tracking-tight text-cinapi-ivory">{heading}</h3>
      <Link
        href="/contact"
        className="mt-6 inline-block rounded-md bg-cinapi-gold px-8 py-3 text-sm font-semibold text-cinapi-green transition hover:brightness-95"
      >
        {button}
      </Link>
    </div>
  );
}
