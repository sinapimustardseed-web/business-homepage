export type Language = "ko" | "en";

export interface NavContent {
  home: string;
  products: string;
  contact: string;
  company: string;
}

export interface HeroContent {
  headline: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface ProductItem {
  name: string;
  description: string;
  cta: string;
}

export interface ProductTeaserContent {
  heading: string;
  subheading: string;
  xpile: ProductItem;
  airdome: ProductItem;
}

export interface EffectStat {
  value: string;
  label: string;
}

export interface ValuePropositionContent {
  heading: string;
  problemLabel: string;
  problem: string;
  solutionLabel: string;
  solution: string;
  effectLabel: string;
  effects: EffectStat[];
  note: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeaturesContent {
  heading: string;
  items: FeatureItem[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  heading: string;
  steps: ProcessStep[];
}

export interface CredibilityStat {
  value: string;
  label: string;
}

export interface CredibilityContent {
  heading: string;
  stats: CredibilityStat[];
  placeholderNote: string;
}

export interface CompanyStoryContent {
  heading: string;
  seedTitle: string;
  seedText: string;
  shieldTitle: string;
  shieldText: string;
  cta: string;
}

export interface ContactCtaContent {
  heading: string;
  subheading: string;
  button: string;
}

export interface FooterContent {
  tagline: string;
  rights: string;
}

export interface ProductComparisonRow {
  name: string;
  purpose: string;
  scale: string;
  targetCustomers: string;
}

export interface ProductCtaCard {
  name: string;
  description: string;
  href: string;
  cta: string;
}

export interface ProductsPageContent {
  headline: string;
  subcopy: string;
  tableHeaders: {
    name: string;
    purpose: string;
    scale: string;
    targetCustomers: string;
  };
  comparison: ProductComparisonRow[];
  ctaCards: ProductCtaCard[];
}

export interface PlaceholderSection {
  heading: string;
  note: string;
}

export interface XPilePageContent {
  headline: string;
  subcopy: string;
  definitionLabel: string;
  definition: string;
  featuresHeading: string;
  features: string[];
  applicationsHeading: string;
  applications: string[];
  specSection: PlaceholderSection;
  caseStudySection: PlaceholderSection;
  gallerySection: PlaceholderSection;
  contactCta: { heading: string; button: string };
}

export interface AirDomePageContent {
  headline: string;
  subcopy: string;
  definitionLabel: string;
  definition: string;
  featuresHeading: string;
  features: string[];
  gallerySection: PlaceholderSection;
  contactCta: { heading: string; button: string };
}

export interface ContactFormContent {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  optionalTag: string;
  inquiryType: string;
  inquiryTypeOptions: string[];
  message: string;
  attachment: string;
  attachmentNote: string;
  submit: string;
  submitNote: string;
}

export interface ContactPageContent {
  headline: string;
  subcopy: string;
  form: ContactFormContent;
}

export interface CompanyPageContent {
  headline: string;
  subcopy: string;
  meaningHeading: string;
  meaningText: string;
  missionHeading: string;
  missionText: string;
  foundingSection: PlaceholderSection;
  fieldExperienceSection: PlaceholderSection;
  unExperienceSection: PlaceholderSection;
  imagePlaceholderNote: string;
  blogLinkLabel: string;
}

export interface BlogPageContent {
  headline: string;
}

export interface SiteContent {
  meta: { title: string; description: string };
  nav: NavContent;
  hero: HeroContent;
  productTeaser: ProductTeaserContent;
  valueProposition: ValuePropositionContent;
  features: FeaturesContent;
  process: ProcessContent;
  credibility: CredibilityContent;
  companyStory: CompanyStoryContent;
  contactCta: ContactCtaContent;
  footer: FooterContent;
  comingSoon: string;
  productsPage: ProductsPageContent;
  xpilePage: XPilePageContent;
  airdomePage: AirDomePageContent;
  contactPage: ContactPageContent;
  companyPage: CompanyPageContent;
  blogPage: BlogPageContent;
}
