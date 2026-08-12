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

export interface ProductBriefingProduct {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

export interface ProductBriefingContent {
  nav: {
    home: string;
    products: string;
    contact: string;
    company: string;
    introduction: string;
    story: string;
    blog: string;
  };
  scrollHint: string;
  hero: {
    eyebrow: string;
    line: string;
  };
  question: {
    eyebrow: string;
    title: string;
    quote: string;
    body: string;
  };
  philosophy: {
    eyebrow: string;
    headline: string;
    lead: string;
    link: string;
  };
  products: {
    eyebrow: string;
    title: string;
    xpile: ProductBriefingProduct;
    airdome: ProductBriefingProduct;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    labels: { name: string; phone: string; email: string; message: string };
    placeholders: { name: string; phone: string; email: string; message: string };
    submit: string;
    thanksTitle: string;
    thanksBody: string;
  };
  footer: {
    tagline: string;
    menuLabel: string;
    contactLabel: string;
    addressLabel: string;
    email: string;
    address: string;
    rights: string;
  };
}

/* ---------- New-design system (Claude Design migration) ---------- */

export interface SiteHeaderContent {
  home: string;
  products: string;
  contact: string;
  company: string;
  introduction: string;
  story: string;
  blog: string;
}

export interface SiteFooterContent {
  tagline: string;
  menuLabel: string;
  contactLabel: string;
  addressLabel: string;
  email: string;
  address: string;
  rights: string;
}

export interface SiteHomeContent {
  scrollHint: string;
  hero: { eyebrow: string; line: string };
  question: { eyebrow: string; title: string; quote: string; body: string };
  philosophy: { eyebrow: string; headline: string; lead: string; link: string };
  products: {
    eyebrow: string;
    title: string;
    xpile: ProductBriefingProduct;
    airdome: ProductBriefingProduct;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    labels: { name: string; phone: string; email: string; message: string };
    placeholders: { name: string; phone: string; email: string; message: string };
    submit: string;
    thanksTitle: string;
    thanksBody: string;
  };
}

export interface SiteProductBand {
  pill: string;
  eyebrow: string;
  teaser: string;
  href: string;
}

export interface SiteProductsIntroContent {
  kicker: string;
  title: string;
  body: string;
  productsLabel: string;
  getInTouch: string;
  readMore: string;
  xpile: SiteProductBand;
  airdome: SiteProductBand;
}

export interface SiteStat {
  target: number;
  suffix: string;
  label: string;
}

/**
 * The results section renders a fixed four-column grid, so both products and both
 * languages must supply exactly four stats. A plain SiteStat[] would let one
 * language drift to three and still compile; the tuple makes that a type error.
 * `features` and `apps` are deliberately left as arrays — their lengths legitimately
 * differ per product (X-PILE has 4 features / 7 apps, AIR DOME 3 / 6), so a shared
 * fixed length there would be wrong rather than safer.
 */
export type SiteStatSet = [SiteStat, SiteStat, SiteStat, SiteStat];

export interface SiteFeature {
  n: string;
  title: string;
  body: string;
}

export interface SiteAppCard {
  category: string;
  name: string;
  subName: string; // English name shown as a secondary label (KO only); "" hides it
  desc: string;
  chips: string[];
  img: string;
}

export interface SiteProductPageContent {
  modelLabel: string;
  heading: string; // X-PILE / AIR DOME wordmark (brand literal in markup)
  desc: string;
  cta: string;
  whyLead: string;
  whyTitle: string;
  features: SiteFeature[];
  effectLead: string;
  effectTitle: string;
  stats: SiteStatSet;
  applicationsLabel: string;
  applicationsTitle: string;
  apps: SiteAppCard[];
  ctaBannerText: string;
  ctaButtonLabel: string;
}

export interface SiteContactContent {
  kicker: string;
  title: string;
  body: string;
  labels: { name: string; phone: string; email: string; message: string };
  placeholders: { name: string; phone: string; email: string; message: string };
  submit: string;
  sending: string;
  errorBody: string;
  thanksTitle: string;
  thanksBody: string;
  emailLabel: string;
  email: string;
  addressLabel: string;
  address: string;
  mapLabel: string;
  mapUnavailable: string;
  openInNaver: string;
}

export interface SiteAttitude {
  num: string;
  title: string;
  body: string;
}

export interface SiteStoryContent {
  kicker: string;
  heroTitle: string;
  heroSub: string;
  questionKicker: string;
  questionBody: string;
  questionQuote: string;
  philoKicker: string;
  philoTitle: string;
  philoBody: string;
  philoTermLabel: string;
  philoTermBody: string;
  attitudeKicker: string;
  attitudeTitle: string;
  attitudes: SiteAttitude[];
  directionKicker: string;
  directionTitle: string;
  directionBody: string;
  directionClose: string;
  ctaText: string;
  ctaButton: string;
}

export interface SiteBlogPost {
  date: string;
  title: string;
  imgPlaceholder: string;
}

export interface SiteBlogContent {
  kicker: string;
  heroTitle: string;
  heroBody: string;
  posts: SiteBlogPost[];
  emptyNote: string;
}

export interface SiteDesignContent {
  header: SiteHeaderContent;
  footer: SiteFooterContent;
  home: SiteHomeContent;
  productsIntro: SiteProductsIntroContent;
  xpile: SiteProductPageContent;
  airdome: SiteProductPageContent;
  contact: SiteContactContent;
  story: SiteStoryContent;
  blog: SiteBlogContent;
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
  productBriefing: ProductBriefingContent;
  site: SiteDesignContent;
}
