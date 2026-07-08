import Link from "next/link";

// TODO: replace this placeholder mark with the final Cinapi logo artwork once provided.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="Cinapi home">
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="20"
          cy="20"
          r="15"
          stroke="#35482e"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="70 100"
          transform="rotate(115 20 20)"
        />
        <circle cx="20" cy="20" r="4.5" fill="#bb9e60" />
      </svg>
      <span className="text-xl font-semibold tracking-tight text-cinapi-green lowercase">
        cinapi
      </span>
    </Link>
  );
}
