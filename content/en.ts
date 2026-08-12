import type { SiteContent } from "./types";

// 081226 FINAL Edit (Last_fix.pdf): the footer and the Contact page showed two
// different English romanisations of the same office. Both now read from this
// single value so they cannot drift apart again.
const ADDRESS_EN =
  "#602, 8 Dongtanjungsimsangga 1-gil, Dongtan-gu, Hwaseong-si, Gyeonggi-do, Republic of Korea";

const en: SiteContent = {
  meta: {
    title: "Cinapi | Concrete-Free Infrastructure Solutions",
    description: "Concrete-free infrastructure solutions powered by X-PILE and AirDome.",
  },
  nav: {
    home: "Home",
    products: "Products",
    contact: "Contact",
    company: "Company",
  },
  hero: {
    headline: "The Beginning of 10x More Efficient Construction",
    subtitle: "Infrastructure solutions that can be built anywhere, easily and without concrete.",
    ctaPrimary: "Contact Us",
    ctaSecondary: "View Products",
  },
  productTeaser: {
    heading: "Two Technologies Replacing Concrete",
    subheading: "X-PILE completes the foundation. AirDome completes the space above it.",
    xpile: {
      name: "X-PILE",
      description:
        "An eco-friendly foundation system installed without concrete foundation work. Delivers 4–5x stronger pull-out resistance than conventional piles and faster installation.",
      cta: "Learn More",
    },
    airdome: {
      name: "AirDome",
      description:
        "A concrete-free smart farm structure completed with air pressure and automated HVAC. Built for large-scale food production.",
      cta: "Learn More",
    },
  },
  valueProposition: {
    heading: "Why Build Without Concrete?",
    problemLabel: "Problem",
    problem: "Conventional concrete construction is high-carbon, high-cost, and inefficient.",
    solutionLabel: "Solution",
    solution: "X-PILE and AirDome provide concrete-free infrastructure solutions.",
    effectLabel: "Effect",
    effects: [
      { value: "1/10", label: "Construction Period" },
      { value: "Up to 10x", label: "Cost Reduction" },
      { value: "80%", label: "CO2 Reduction" },
      { value: "0%", label: "Waste Generated" },
    ],
    note: "Performance tests verified through university-industry cooperative structural review.",
  },
  features: {
    heading: "Core Technology",
    items: [
      {
        title: "Concrete-Free Foundation",
        description:
          "X-PILE's foundation system is installed without concrete pouring, dramatically cutting construction time and cost.",
      },
      {
        title: "Smart Air-Pressure Structure",
        description: "AirDome's air-pressure structure safely realizes large, column-free spaces.",
      },
      {
        title: "Energy-Efficient Operation",
        description: "Automated HVAC systems optimize energy use.",
      },
      {
        title: "Climate & Weather Resilience",
        description: "Operates reliably across a wide range of climates and terrains.",
      },
      {
        title: "Sustainable Construction",
        description: "Builds infrastructure sustainably, with zero waste generation.",
      },
    ],
  },
  process: {
    heading: "Project Process",
    steps: [
      { step: "01", title: "Consultation", description: "We discuss your requirements and goals together." },
      {
        step: "02",
        title: "Site & Requirements Analysis",
        description: "We closely analyze the installation environment and conditions.",
      },
      {
        step: "03",
        title: "Design Proposal",
        description: "We present an optimized X-PILE / AirDome design.",
      },
      {
        step: "04",
        title: "Engineering & Production",
        description: "Materials are manufactured following structural review.",
      },
      { step: "05", title: "Installation", description: "Fast, safe on-site installation." },
      {
        step: "06",
        title: "After-Support",
        description: "Ongoing management and support after installation.",
      },
    ],
  },
  credibility: {
    heading: "Cinapi by the Numbers",
    stats: [
      { value: "1/10", label: "Construction Period" },
      { value: "Up to 10x", label: "Cost Reduction" },
      { value: "80%", label: "CO2 Reduction" },
      { value: "0%", label: "Waste Generated" },
    ],
    placeholderNote: "Certifications, project records, and university test results will be added soon.",
  },
  companyStory: {
    heading: "A Story That Begins With a Mustard Seed",
    seedTitle: "Mustard Seed (Cinapi)",
    seedText:
      "Just as the smallest seed grows into a large tree that shelters birds and animals, Cinapi creates big change through small technology.",
    shieldTitle: "Biosphere Shield",
    shieldText:
      "Our mission is to build a large Biosphere Shield, where life can be born, grow, and be protected, through AirDome and X-PILE technologies.",
    cta: "Read Our Story",
  },
  contactCta: {
    heading: "Start the Concrete-Free Future Today",
    subheading: "Build faster, more sustainable infrastructure with Cinapi.",
    button: "Contact Us",
  },
  footer: {
    tagline: "Infrastructure solutions built anywhere, without concrete.",
    rights: "© 2026 Cinapi. All rights reserved.",
  },
  comingSoon: "Coming soon.",
  productsPage: {
    headline: "Two Technologies Replacing Concrete",
    subcopy: "X-PILE completes the foundation. AirDome completes the space above it.",
    tableHeaders: {
      name: "Product",
      purpose: "Purpose",
      scale: "Scale",
      targetCustomers: "Target Customers",
    },
    comparison: [
      {
        name: "X-PILE",
        purpose: "Eco-friendly foundation installation without concrete",
        scale: "Small to mid-scale structures",
        targetCustomers: "Solar, agriculture, and livestock facility operators",
      },
      {
        name: "AirDome",
        purpose: "Concrete- and H-beam-free outdoor smart farm structure",
        scale: "Large-scale outdoor cultivation facility",
        targetCustomers: "Smart farm operators, large-scale food producers",
      },
    ],
    ctaCards: [
      {
        name: "X-PILE",
        description:
          "An eco-friendly foundation you can install in 10 minutes — a concrete-free pile foundation with 4–5x stronger pull-out resistance than conventional piles and an expanding wing structure.",
        href: "/products/x-pile",
        cta: "Explore X-PILE",
      },
      {
        name: "AirDome",
        description:
          "A smart farm with no concrete and no H-beams — a large outdoor cultivation space with automated air pressure and HVAC control.",
        href: "/products/airdome",
        cta: "Explore AirDome",
      },
    ],
  },
  xpilePage: {
    headline: "An Eco-Friendly Foundation You Can Build in 10 Minutes",
    subcopy: "A concrete-free pile foundation that expands with a wing structure",
    definitionLabel: "Product Definition",
    definition:
      "An eco-friendly foundation system that replaces concrete foundation work — a wing-deploying pile foundation.",
    featuresHeading: "Key Features",
    features: [
      "Installs in as little as 10 minutes",
      "Expanding wing structure",
      "4–5x stronger pull-out resistance than conventional piles",
      "Versatile — usable across a wide range of environments",
    ],
    applicationsHeading: "Applications",
    applications: ["Solar panels", "Fences", "Greenhouses", "Feed bins", "Livestock facilities"],
    specSection: {
      heading: "Spec / Drawings",
      note: "Product specifications and drawings will be added soon.",
    },
    caseStudySection: {
      heading: "Installation Case Photos",
      note: "On-site installation case photos will be added soon.",
    },
    gallerySection: {
      heading: "Gallery",
      note: "Product gallery images will be added soon.",
    },
    contactCta: {
      heading: "Inquire About X-PILE",
      button: "Contact Us",
    },
  },
  airdomePage: {
    headline: "A Smart Farm With No Concrete and No H-Beams",
    subcopy: "A large outdoor cultivation space with automated air pressure and HVAC control",
    definitionLabel: "Product Definition",
    definition: "An outdoor AirDome structure built without concrete construction.",
    featuresHeading: "Key Features",
    features: [
      "No concrete foundation or H-beams required",
      "Automated air pressure and HVAC control",
      "A system built for large-scale food production",
    ],
    gallerySection: {
      heading: "Gallery",
      note: "AirDome installation and operation photos will be added soon.",
    },
    contactCta: {
      heading: "Inquire About the AirDome Package",
      button: "Contact Us",
    },
  },
  contactPage: {
    headline: "Start the Concrete-Free Future Today",
    subcopy: "Leave your details below and our team will get back to you.",
    form: {
      company: "Company Name",
      contactName: "Contact Person",
      email: "Email",
      phone: "Phone Number",
      optionalTag: "(optional)",
      inquiryType: "Inquiry Type",
      inquiryTypeOptions: [
        "Product Purchase Inquiry",
        "Technology License Inquiry",
        "AirDome Package Inquiry",
      ],
      message: "Message",
      attachment: "Attachment",
      attachmentNote: "File upload support is coming soon.",
      submit: "Submit Inquiry",
      submitNote: "Form submission isn't connected yet. For an urgent inquiry, please reach out by email.",
    },
  },
  companyPage: {
    headline: "The Smallest Seed, the Largest Shelter",
    subcopy: "Why we started this work",
    meaningHeading: "The Origin of Our Name",
    meaningText: "Cinapi (시나피) = Mustard Seed",
    missionHeading: "Mission Statement",
    missionText:
      "Just as the smallest seed grows into a large tree that becomes a safe shelter for birds and animals, our mission is for AirDome to become a Biosphere Shield where life can be born and grow.",
    foundingSection: {
      heading: "Founding Story",
      note: "Our founding story will be added soon.",
    },
    fieldExperienceSection: {
      heading: "Smart Farm & Smart Livestock Field Experience",
      note: "Field experience content will be added soon.",
    },
    unExperienceSection: {
      heading: "UN Activity Experience",
      note: "UN activity experience content will be added soon.",
    },
    imagePlaceholderNote: "Representative image — to be added soon.",
    blogLinkLabel: "Read More Cinapi Stories",
  },
  blogPage: {
    headline: "Stories from the Field, Records of Technology",
  },
  productBriefing: {
    nav: {
      home: "HOME",
      products: "PRODUCTS",
      contact: "CONTACT",
      company: "COMPANY",
      introduction: "INTRODUCTION",
      story: "STORY",
      blog: "BLOG",
    },
    scrollHint: "SCROLL",
    hero: {
      eyebrow: "CHANGING ENVIRONMENT · CHANGING TECHNOLOGY",
      line: "A changing world needs changing technology.",
    },
    question: {
      eyebrow: "THE QUESTION",
      title: "The question we faced",
      quote: "If the environment keeps changing, why does the technology stay the same?",
      body: "The environments people live in keep changing — the condition of the land, the shape of cities, and what people expect from space. Yet construction still clings to old methods. cinapi began in that gap.",
    },
    philosophy: {
      eyebrow: "OUR PHILOSOPHY",
      headline: "We don’t resist change —\nwe lead it with innovation.",
      lead: "When the land differs we approach it differently; when the environment shifts we build technology that leads the shift. Not the flashiest technology, but the change that matters most right now — that is what cinapi calls Fitting Technology.",
      link: "Read our story",
    },
    products: {
      eyebrow: "OUR PRODUCTS",
      title: "What we make",
      xpile: {
        eyebrow: "ECO PILE FOUNDATION",
        title: "The foundation below",
        description:
          "An eco pile foundation with powerful holding strength — no concrete, no H-beams. Its wings unfold underground to grip the earth. Installed in 10 minutes, with 80% less carbon.",
        cta: "Explore X-PILE",
        href: "/products/x-pile",
      },
      airdome: {
        eyebrow: "AIR-SUPPORTED DOME",
        title: "The space above",
        description:
          "A concrete-free large-span structure built on X-PILE. Column-free interior space and high HVAC efficiency — a biosphere shield providing oxygen and a safe environment.",
        cta: "Explore Air Dome",
        href: "/products/airdome",
      },
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Get in Touch",
      subtitle: "If your project needs cinapi’s technology, leave us a note.",
      labels: { name: "Name", phone: "Phone", email: "Email", message: "Message" },
      placeholders: {
        name: "Jane Doe",
        phone: "010-0000-0000",
        email: "you@company.com",
        message: "Tell us what you need.",
      },
      submit: "Send Inquiry",
      thanksTitle: "Your inquiry has been received.",
      thanksBody: "Our team will reach out shortly using the details you provided.",
    },
    footer: {
      tagline:
        "A changing world needs changing technology.\nWith that belief, cinapi rethinks the way we build.",
      menuLabel: "MENU",
      contactLabel: "CONTACT",
      addressLabel: "ADDRESS",
      email: "sein@cinapi.com",
      address: "경기도 화성시 동탄구 동탄중심상가1길 8, 602호",
      rights: "© 2026 cinapi. All rights reserved.",
    },
  },
  site: {
    header: {
      home: "HOME",
      products: "PRODUCTS",
      contact: "CONTACT",
      company: "COMPANY",
      introduction: "INTRODUCTION",
      story: "STORY",
      blog: "BLOG",
    },
    footer: {
      tagline:
        "A changing world needs changing technology.\nWith that belief, cinapi rethinks the way we build.",
      menuLabel: "MENU",
      contactLabel: "CONTACT",
      addressLabel: "ADDRESS",
      email: "sein@cinapi.com",
      // Same address as site.contact.address, on one line for the footer column.
      address: ADDRESS_EN,
      rights: "© 2026 cinapi. All rights reserved.",
    },
    home: {
      scrollHint: "SCROLL",
      hero: {
        eyebrow: "CHANGING ENVIRONMENT · CHANGING TECHNOLOGY",
        line: "Changing environments, changing technology.",
      },
      question: {
        eyebrow: "THE QUESTION",
        title: "The question we ask",
        quote: "If the environment keeps changing,\nwhy does the technology stay the same?",
        body: "Our environment is changing — the condition of the land, heavier seasons, harsher climates.\nWhat people ask of a space has grown more demanding.\nThe way we build them hasn't.\n\nCinapi began in that gap.",
      },
      philosophy: {
        eyebrow: "OUR PHILOSOPHY",
        headline: "We don’t resist change.\nWe build for it.",
        lead: "When the ground differs, we approach it differently.\nWhen conditions shift, we build what answers them.\nThat's what we mean by technology that fits.",
        link: "Read our story",
      },
      products: {
        eyebrow: "OUR PRODUCTS",
        title: "What we make",
        xpile: {
          eyebrow: "ECO PILE FOUNDATION",
          title: "The foundation below",
          description:
            "Conventional foundations mean concrete: heavy equipment, curing time, and a permanent change to the land. X-pile deploys wings underground to grip the soil, delivering over 4× the uplift resistance of a conventional pile of the same diameter. No concrete, no curing — and it can be removed, leaving the ground as it was.",
          cta: "Explore X-PILE",
          href: "/products/x-pile",
        },
        airdome: {
          eyebrow: "AIR-SUPPORTED DOME",
          title: "The space above",
          description:
            "A large interior with no columns at all, raised without steel framing or a concrete foundation. Lighter than a steel-framed building, yet it holds its structure through heavy snow, high wind and abrupt temperature swings.\nTemperature and humidity are tightly controlled, keeping interior conditions constant regardless of the weather outside.",
          cta: "Explore AIRDOME",
          href: "/products/airdome",
        },
      },
      contact: {
        eyebrow: "CONTACT",
        title: "Get in Touch",
        subtitle: "If your project needs cinapi’s technology, leave us a note.",
        labels: { name: "Name", phone: "Phone", email: "Email", message: "Message" },
        placeholders: {
          name: "Jane Doe",
          phone: "010-0000-0000",
          email: "you@company.com",
          message: "Tell us what you need.",
        },
        submit: "Send Inquiry",
        thanksTitle: "Your inquiry has been received.",
        thanksBody: "Our team will reach out shortly using the details you provided.",
      },
    },
    productsIntro: {
      kicker: "INTRODUCTION",
      title: "From foundation To structure,\nwithout concrete.",
      body: "Cinapi builds X-PILE, a foundation that needs no concrete, and AIRDOME, a structure that needs no frame.\nBoth replace construction methods that cost more, take longer, and leave more carbon behind.",
      productsLabel: "Products",
      getInTouch: "Get in touch",
      readMore: "Learn more",
      xpile: {
        pill: "Eco Pile Foundation",
        eyebrow: "ECO PILE FOUNDATION",
        teaser:
          "An eco-friendly pile foundation that deploys wings underground\nto grip the soil. Its proven structure delivers over 4× the uplift resistance and bearing capacity of conventional piles. With no concrete foundation work, it fundamentally cuts cost and carbon emissions.",
        href: "/products/x-pile",
      },
      airdome: {
        pill: "Large-span Dome",
        eyebrow: "AIR-SUPPORTED DOME",
        teaser:
          "A column-free large-span structure raised without steel framing or a concrete foundation. Lighter than a steel-framed building, yet it holds its structure through heavy snow, high wind and abrupt temperature swings. Temperature and humidity are tightly controlled, keeping interior conditions constant regardless of the weather outside.",
        href: "/products/airdome",
      },
    },
    xpile: {
      modelLabel: "MODEL",
      heading: "X-PILE",
      desc: "An eco-friendly, wing-deployable pile foundation designed to penetrate the ground and deploy its wings sub-surface to grip the soil. This structural mechanism provides pull-out resistance and bearing capacity more than four times greater than conventional piles, stably sustaining structural loads. Because it eliminates the need for concrete foundation work, it is free from high carbon emissions, excessive costs, and environmental damage.",
      cta: "Contact Us",
      whyLead: "Four reasons X-PILE redefines the foundation.",
      whyTitle: "Why X-PILE?",
      features: [
        { n: "01", title: "Eco-friendly", body: "80% carbon emission reduction\nvs. concrete foundations" },
        { n: "02", title: "Rapid Setup", body: "Completed\nin just 10 minutes with zero hassle" },
        { n: "03", title: "High Cost Efficiency", body: "10x faster construction,\n10x cost savings" },
        { n: "04", title: "Wing Expansion", body: "Underground wing deployment\nfor maximum bearing support" },
      ],
      effectLead: "Prove your project with X-PILE’s concrete-free, measured results.",
      effectTitle: "Concrete-free, proven with metrics.",
      stats: [
        { target: -80, suffix: "%", label: "CO2 emission reduction" },
        { target: 0, suffix: "%", label: "Construction waste" },
        { target: 10, suffix: " min", label: "Average install time" },
        { target: 10, suffix: "x", label: "Cost savings" },
      ],
      applicationsLabel: "APPLICATIONS",
      applicationsTitle: "One foundation, many fields",
      apps: [
        { category: "Indoor Large-Space", name: "AirDome", subName: "", desc: "A column-free large-span structure built without concrete.", chips: ["Sports", "Logistics", "Shelter"], img: "/apps/app-dome.png" },
        { category: "Cultivation", name: "Smart Farm", subName: "", desc: "A cultivation environment built fast without harming the soil.", chips: ["Vertical Farm", "Horticulture"], img: "/apps/app-farm.png" },
        { category: "Renewable Energy", name: "Solar Panels", subName: "", desc: "Eco solar mounts installed without concrete footings.", chips: ["Agrivoltaic", "Floating", "Idle Land"], img: "/apps/app-solar.png" },
        { category: "Boundary", name: "Fences", subName: "", desc: "A vibration-free post foundation raised in 10 minutes on any ground.", chips: ["Sound Wall", "Fence", "Guardrail"], img: "/apps/app-fence.png" },
        { category: "Urban Infra", name: "Streetlights", subName: "", desc: "Lighting and CCTV poles installed same-day, without concrete.", chips: ["Streetlight", "CCTV", "Signage"], img: "/apps/app-light.png" },
        { category: "Horticulture", name: "Greenhouses", subName: "", desc: "A greenhouse foundation that holds firm even on soft ground.", chips: ["Horticulture", "Specialty Crops"], img: "/apps/app-greenhouse.png" },
        { category: "Livestock", name: "Livestock Barns", subName: "", desc: "A barn foundation enabling hygienic, rapid construction.", chips: ["Cattle", "Pig", "Poultry"], img: "/apps/app-barn.png" },
      ],
      ctaBannerText: "Explore AIRDOME, built on top of X-PILE.",
      ctaButtonLabel: "AIRDOME",
    },
    airdome: {
      modelLabel: "MODEL",
      heading: "AIRDOME",
      desc: "It is raised by placing X-PILE foundations around the perimeter and stretching a membrane\nstructure over them. With no excavation or pouring, installation finishes in a fraction of the time\na conventional large-span building takes, and the structure can be dismantled and rebuilt\non another site. A single uninterrupted interior with low heating and cooling loads keeps\noperating costs down for smart farms and large facilities.",
      cta: "Contact Us",
      whyLead: "Three reasons AirDome redefines the space above.",
      whyTitle: "Why AIRDOME?",
      features: [
        { n: "01", title: "Powerful\nBearing Capacity", body: "Replaces traditional foundations with X-PILE’s\nstrong pull-out resistance\n- no concrete or H-beams required." },
        { n: "02", title: "Shield of Life", body: "A massive protective shield where life is born and thrives, providing oxygen and a safe environment." },
        { n: "03", title: "Rapid Installation", body: "Quickly and efficiently installed across various environments, including outdoor smart farms." },
      ],
      effectLead: "AirDome, measured — a vast space raised without concrete.",
      effectTitle: "Concrete-free, a vast sanctuary for life.",
      stats: [
        { target: 0, suffix: "%", label: "Concrete foundation" },
        { target: 10, suffix: " min", label: "X-PILE foundation install" },
        { target: -80, suffix: "%", label: "CO2 reduction" },
        { target: 100, suffix: "%", label: "Structure reusable" },
      ],
      applicationsLabel: "APPLICATIONS",
      applicationsTitle: "One dome, many spaces",
      apps: [
        { category: "Column-free Space", name: "Indoor Sports", subName: "", desc: "Indoor sports facilities in a column-free large space.", chips: ["Futsal", "Tennis", "Pool"], img: "/apps/dome-app-sports.png" },
        { category: "Large-span Hub", name: "Logistics", subName: "", desc: "A logistics hub with a wide, column-free interior for efficiency.", chips: ["Warehouse", "Distribution"], img: "/apps/dome-app-logistics.png" },
        { category: "Emergency", name: "Disaster Shelter", subName: "", desc: "A large shelter raised quickly to secure safety.", chips: ["Shelter", "Disaster"], img: "/apps/dome-app-shelter.png" },
        { category: "Cultivation", name: "Smart Farm", subName: "", desc: "A large cultivation space with oxygen and a safe environment.", chips: ["Cultivation", "Horticulture"], img: "/apps/dome-app-farm.png" },
        { category: "Event Hall", name: "Events", subName: "", desc: "A column-free event hall for temporary or permanent use.", chips: ["Exhibition", "Performance"], img: "/apps/dome-app-event.png" },
        { category: "Clean Space", name: "Medical", subName: "", desc: "A safe, clean large space for isolation and quarantine.", chips: ["Quarantine", "Medical"], img: "/apps/dome-app-medical.png" },
      ],
      ctaBannerText: "Explore the X-PILE technology that supports AIRDOME.",
      ctaButtonLabel: "X-PILE",
    },
    contact: {
      kicker: "CONTACT",
      title: "Ask us anything.",
      body: "Leave any inquiry about X-PILE or AIRDOME (project consultation, partnership proposals, anything) and our team will get back to you promptly.",
      labels: { name: "Name", phone: "Phone", email: "Email", message: "Message" },
      placeholders: {
        name: "Jane Doe",
        phone: "010-0000-0000",
        email: "you@company.com",
        message: "Tell us what you need.",
      },
      submit: "Send Inquiry",
      sending: "Sending…",
      errorBody: "We couldn't send your inquiry. Please try again shortly.",
      thanksTitle: "Your inquiry has been received.",
      thanksBody: "Your inquiry has been sent successfully. We'll get back to you after reviewing it.",
      emailLabel: "EMAIL",
      email: "sein@cinapi.com",
      addressLabel: "ADDRESS",
      // Last_fix.pdf (c -> d): the Contact address now matches the footer exactly and
      // wraps naturally. The Korean address and the NAVER coordinates are untouched.
      address: ADDRESS_EN,
      mapLabel: "Cinapi office location",
      mapUnavailable: "The interactive map is currently unavailable.",
      openInNaver: "Open in NAVER Map",
    },
    story: {
      kicker: "OUR STORY",
      heroTitle: "We redesign the foundation.",
      heroSub: "Cinapi develops structural technology that does not depend on concrete.",
      questionKicker: "HOW IT STARTED",
      questionBody:
        "To put up a building, you first dig into the ground and pour concrete for a base.\nThat concrete takes weeks, sometimes months, to harden, and everything else on site waits while it does.\nMuch of a project\u2019s schedule and cost is decided right there.\n\nOnce poured, concrete is hard to take back out.\nWhether a building is meant to last a season or a lifetime,\nit has long been taken for granted that both follow the same procedure.\n\nCinapi re-examined that premise, asking whether a building could be held up\nby gripping the ground rather than hardening it.",
      questionQuote: "Concrete is not the only answer\nfor a foundation.",
      philoKicker: "OUR TECHNOLOGY",
      philoTitle: "Cinapi\u2019s foundation technology,\nin place of concrete.",
      philoBody:
        "X-PILE is a pile driven into the ground that then opens wings to grip the surrounding soil. The strength holding a building up comes from the ground itself rather than from concrete, so there is no need to pour a base.\n\nWith no hardening to wait for, installation takes minutes, and no cement means none of its carbon. Pull it back out later and the ground returns to what it was.",
      philoTermLabel: "Proven Structure",
      philoTermBody:
        "X-PILE and AIRDOME are built on structural technology developed in-house,\nwith performance confirmed through testing.",
      attitudeKicker: "HOW WE WORK",
      attitudeTitle: "We read the ground first",
      attitudes: [
        { num: "01", title: "Observe", body: "Ground conditions differ from site to site.\nWe confirm soil and load conditions before design, rather than fixing a standard method first." },
        { num: "02", title: "Redefine", body: "We ask what justifies a process that has hardened into habit. Where a step can be replaced, we replace it." },
        { num: "03", title: "Verify", body: "A claim has to hold up under testing.\nCinapi presents test results and installation records as its evidence." },
      ],
      directionKicker: "WHERE WE\u2019RE GOING",
      directionTitle: "From the foundation to the whole structure.",
      directionBody:
        "When the foundation stops being a constraint, the range of what can stand on it changes.\nAIRDOME, a large-span structure raised without steel framing or concrete, is the first case.",
      directionClose:
        "Cinapi continues to widen the range of structures\nthat can be built without concrete.",
      ctaText: "See how the technology is applied\n- explore our products.",
      ctaButton: "View Products",
    },
    blog: {
      kicker: "BLOG",
      heroTitle: "News & Stories",
      heroBody: "Updates on cinapi’s technology, project case studies, and industry insights.",
      posts: [
        { date: "Coming soon", title: "Post title goes here", imgPlaceholder: "Post image" },
        { date: "Coming soon", title: "Post title goes here", imgPlaceholder: "Post image" },
        { date: "Coming soon", title: "Post title goes here", imgPlaceholder: "Post image" },
      ],
      emptyNote: "Coming soon — new posts will be added shortly.",
    },
  },
};

export default en;
