import { redirect } from "next/navigation";

// The Home design now lives at "/". This route was a temporary preview; keep it
// as a redirect so any bookmarked preview link still resolves. Safe to delete later.
export default function ProductBriefingRedirect() {
  redirect("/");
}
