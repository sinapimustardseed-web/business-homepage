import type { Metadata } from "next";
import BlogPage from "@/components/site/company/BlogPage";

/**
 * Blog is hidden for now (Sein: "일단 BLOG는 숨겨놓자"). The route and its
 * content are deliberately kept so it can be brought back, but it is removed
 * from every public entry point and told not to be indexed. Delete this
 * `metadata` export and restore the COMPANY dropdown in SiteHeader to unhide.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Blog() {
  return <BlogPage />;
}
