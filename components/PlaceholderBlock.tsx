export default function PlaceholderBlock({ heading, note }: { heading: string; note: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-cinapi-green/25 bg-cinapi-green/[0.03] p-8">
      <h3 className="text-lg font-semibold text-cinapi-green">{heading}</h3>
      <div className="mt-4 flex h-32 items-center justify-center rounded-xl border border-cinapi-green/10 bg-white/40">
        <p className="max-w-xs text-center text-sm text-cinapi-green/50">{note}</p>
      </div>
    </div>
  );
}
