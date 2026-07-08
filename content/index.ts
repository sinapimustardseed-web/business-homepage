import ko from "./ko";
import en from "./en";
import type { Language, SiteContent } from "./types";

export const content: Record<Language, SiteContent> = { ko, en };

export type { Language, SiteContent };
