import type { SiteContent } from "./types";

const ko: SiteContent = {
  meta: {
    title: "Cinapi | 콘크리트 없는 인프라 솔루션",
    description: "X-PILE과 AirDome으로 완성하는 콘크리트 없는 인프라 솔루션.",
  },
  nav: {
    home: "홈",
    products: "제품",
    contact: "문의하기",
    company: "회사소개",
  },
  hero: {
    headline: "10배 더 효율적인 건축의 시작",
    subtitle: "콘크리트 없이, 어디서든 손쉽게 세우는 인프라 솔루션",
    ctaPrimary: "문의하기",
    ctaSecondary: "제품 보기",
  },
  productTeaser: {
    heading: "콘크리트를 대체하는 두 가지 기술",
    subheading: "X-PILE은 기초를, AirDome은 그 위의 공간을 완성합니다.",
    xpile: {
      name: "X-PILE",
      description:
        "콘크리트 기초 공사 없이 시공하는 친환경 기초 시스템. 기존 파일 대비 4~5배 강한 인발저항과 빠른 시공 속도를 제공합니다.",
      cta: "자세히 보기",
    },
    airdome: {
      name: "AirDome",
      description:
        "공기압과 냉난방 자동화로 완성하는 콘크리트 기초 없는 스마트팜 건축물. 대규모 식량 생산을 위한 공간을 완성합니다.",
      cta: "자세히 보기",
    },
  },
  valueProposition: {
    heading: "왜 콘크리트 없이 지어야 할까요?",
    problemLabel: "문제",
    problem: "기존 콘크리트 건축 방식은 탄소 배출이 높고, 비용이 크며, 비효율적입니다.",
    solutionLabel: "해결",
    solution: "X-PILE과 AirDome은 콘크리트 없는 인프라 솔루션을 제공합니다.",
    effectLabel: "효과",
    effects: [
      { value: "1/10", label: "공사 기간 단축" },
      { value: "최대 10배", label: "비용 절감" },
      { value: "80%", label: "탄소 배출 절감" },
      { value: "0%", label: "폐기물 발생" },
    ],
    note: "대학교 산학협력 구조검토를 통해 성능 테스트가 검증되었습니다.",
  },
  features: {
    heading: "핵심 기술",
    items: [
      {
        title: "콘크리트 없는 기초",
        description:
          "콘크리트 타설 없이 시공하는 X-PILE 기초 시스템으로 공사 기간과 비용을 획기적으로 줄입니다.",
      },
      {
        title: "스마트 공기압 구조",
        description: "공기압을 활용한 AirDome 구조로 대형 무기둥 공간을 안전하게 구현합니다.",
      },
      {
        title: "에너지 효율 운영",
        description: "자동화된 냉난방 시스템으로 에너지 사용을 최적화합니다.",
      },
      {
        title: "기후 및 환경 대응력",
        description: "다양한 기후와 지형 조건에서도 안정적으로 운용됩니다.",
      },
      {
        title: "지속 가능한 건축",
        description: "폐기물 발생 없이 친환경적으로 인프라를 구축합니다.",
      },
    ],
  },
  process: {
    heading: "프로젝트 진행 과정",
    steps: [
      { step: "01", title: "상담", description: "고객의 요구사항과 목표를 함께 논의합니다." },
      { step: "02", title: "현장/요구사항 분석", description: "설치 환경과 조건을 면밀히 분석합니다." },
      { step: "03", title: "설계 제안", description: "최적화된 X-PILE·AirDome 설계안을 제시합니다." },
      { step: "04", title: "엔지니어링 및 생산", description: "구조 검토를 거쳐 자재를 제작합니다." },
      { step: "05", title: "설치", description: "신속하고 안전하게 현장에 설치합니다." },
      { step: "06", title: "사후 지원", description: "설치 이후에도 지속적으로 관리하고 지원합니다." },
    ],
  },
  credibility: {
    heading: "숫자로 보는 Cinapi",
    stats: [
      { value: "1/10", label: "공사 기간" },
      { value: "최대 10배", label: "비용 절감" },
      { value: "80%", label: "탄소 배출 절감" },
      { value: "0%", label: "폐기물 발생" },
    ],
    placeholderNote: "인증, 프로젝트 실적, 대학 실험 결과는 추후 업데이트될 예정입니다.",
  },
  companyStory: {
    heading: "겨자씨에서 시작된 이야기",
    seedTitle: "겨자씨 (Cinapi)",
    seedText:
      "가장 작은 씨앗이 자라 커다란 나무가 되고, 새와 동물들의 안전한 쉼터가 되듯, Cinapi는 작은 기술로 큰 변화를 만듭니다.",
    shieldTitle: "바이오스피어 실드 (Biosphere Shield)",
    shieldText:
      "AirDome과 X-PILE 기술로 생명이 태어나고 자라며 보호받는 커다란 바이오스피어 실드를 만드는 것, 그것이 Cinapi의 미션입니다.",
    cta: "회사 이야기 더 보기",
  },
  contactCta: {
    heading: "지금, 콘크리트 없는 미래를 시작하세요",
    subheading: "Cinapi와 함께 더 빠르고, 더 지속 가능한 인프라를 만들어보세요.",
    button: "문의하기",
  },
  footer: {
    tagline: "콘크리트 없이, 어디서든 세우는 인프라 솔루션",
    rights: "© 2026 Cinapi. All rights reserved.",
  },
  comingSoon: "준비 중입니다.",
  productsPage: {
    headline: "콘크리트를 대체하는 두 가지 기술",
    subcopy: "X-PILE은 기초를, AirDome은 그 위의 공간을 완성합니다.",
    tableHeaders: {
      name: "제품명",
      purpose: "용도",
      scale: "규모",
      targetCustomers: "대상 고객",
    },
    comparison: [
      {
        name: "X-PILE",
        purpose: "콘크리트 없는 친환경 기초 시공",
        scale: "소형~중형 구조물",
        targetCustomers: "태양광·농업·축산 시설 운영자",
      },
      {
        name: "AirDome",
        purpose: "콘크리트·H빔 없는 실외 스마트팜 건축",
        scale: "대형 실외 재배시설",
        targetCustomers: "스마트팜 운영사, 대규모 식량 생산 기업",
      },
    ],
    ctaCards: [
      {
        name: "X-PILE",
        description:
          "10분이면 세우는 친환경 기초, 기존 파일 대비 4~5배 강한 인발저항을 지닌 날개형 구조의 콘크리트 없는 말뚝 기초.",
        href: "/products/x-pile",
        cta: "X-PILE 자세히 보기",
      },
      {
        name: "AirDome",
        description: "콘크리트도 H빔도 없는 스마트팜, 기압과 공조를 자동으로 제어하는 대형 실외 재배 공간.",
        href: "/products/airdome",
        cta: "AirDome 자세히 보기",
      },
    ],
  },
  xpilePage: {
    headline: "10분이면 세우는 친환경 기초",
    subcopy: "날개형 구조로 확장되는, 콘크리트 없는 말뚝 기초",
    definitionLabel: "제품 정의",
    definition: "콘크리트 기초공사 대체형 친환경 기초 시스템, 날개 배출형 말뚝 기초",
    featuresHeading: "핵심 특징",
    features: [
      "10분 설치 가능",
      "확장되는 날개 구조",
      "기존 파일 대비 4~5배 강한 인발저항",
      "다목적·다양한 환경에서 활용 가능",
    ],
    applicationsHeading: "활용 분야",
    applications: ["태양광 패널", "펜스", "비닐하우스", "사료빈", "축사"],
    specSection: {
      heading: "스펙 / 도면",
      note: "제품 스펙 및 도면 자료는 추후 업데이트될 예정입니다.",
    },
    caseStudySection: {
      heading: "시공 사례 사진",
      note: "현장 시공 사례 사진은 추후 업데이트될 예정입니다.",
    },
    gallerySection: {
      heading: "갤러리",
      note: "제품 갤러리 이미지는 추후 업데이트될 예정입니다.",
    },
    contactCta: {
      heading: "X-PILE 도입 문의하기",
      button: "문의하기",
    },
  },
  airdomePage: {
    headline: "콘크리트도 H빔도 없는 스마트팜",
    subcopy: "기압과 공조를 자동으로 제어하는 대형 실외 재배 공간",
    definitionLabel: "제품 정의",
    definition: "콘크리트 공사 없는 실외 에어돔 건축물",
    featuresHeading: "핵심 특징",
    features: ["콘크리트 기초·H빔 불필요", "기압 및 공조 자동화", "식량 대량생산 시스템"],
    gallerySection: {
      heading: "갤러리",
      note: "AirDome 시공 및 운영 사진은 추후 업데이트될 예정입니다.",
    },
    contactCta: {
      heading: "AirDome 패키지 문의하기",
      button: "문의하기",
    },
  },
  contactPage: {
    headline: "지금, 콘크리트 없는 미래를 시작하세요",
    subcopy: "아래 정보를 남겨주시면 담당자가 확인 후 연락드리겠습니다.",
    form: {
      company: "회사명",
      contactName: "담당자",
      email: "이메일",
      phone: "전화번호",
      optionalTag: "(선택)",
      inquiryType: "문의 유형",
      inquiryTypeOptions: ["제품 구매 문의", "기술 라이센스 문의", "에어돔 패키지 문의"],
      message: "문의 내용",
      attachment: "첨부파일",
      attachmentNote: "파일 업로드는 추후 지원될 예정입니다.",
      submit: "문의하기",
      submitNote: "현재 폼 제출 기능은 준비 중입니다. 빠른 문의는 이메일로 연락해 주세요.",
    },
  },
  companyPage: {
    headline: "가장 작은 씨앗, 가장 큰 보호막",
    subcopy: "우리가 이 일을 시작한 이유",
    meaningHeading: "브랜드명 유래",
    meaningText: "시나피(Cinapi) = 겨자씨(Mustard Seed)",
    missionHeading: "미션 선언문",
    missionText:
      "가장 작은 씨앗이 자라 큰 나무가 되어 새와 동물의 안전한 보호막이 되는 것처럼, AirDome이 생명이 태어나고 자랄 수 있는 생명 보호막(Biosphere Shield)이 되는 것이 미션입니다.",
    foundingSection: {
      heading: "창업 배경",
      note: "창업 배경 스토리는 추후 업데이트될 예정입니다.",
    },
    fieldExperienceSection: {
      heading: "스마트팜·스마트 축산 현장 경험",
      note: "현장 경험 콘텐츠는 추후 업데이트될 예정입니다.",
    },
    unExperienceSection: {
      heading: "UN 활동 경험",
      note: "UN 활동 경험 콘텐츠는 추후 업데이트될 예정입니다.",
    },
    imagePlaceholderNote: "대표 이미지 — 추후 업데이트될 예정입니다.",
    blogLinkLabel: "Cinapi 이야기 더 읽기",
  },
  blogPage: {
    headline: "현장의 이야기, 기술의 기록",
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
      line: "변하는 환경엔, 변하는 기술이.",
    },
    question: {
      eyebrow: "THE QUESTION",
      title: "우리가 마주한 질문",
      quote: "살아가는 환경은 계속 변하는데, 기술은 왜 그대로일까?",
      body: "사람들이 살아가는 환경은 계속 달라지고 있습니다.\n\n땅의 조건도, 도시의 모습도, 사람들이 공간에 기대하는 것도 변하고 있습니다.\n그런데 건축은 여전히 오래된 방식을 고수합니다.\n\n\n cinapi는 이 간극에서 출발했습니다.\n",
    },
    philosophy: {
      eyebrow: "OUR PHILOSOPHY",
      headline: "변화에 맞서지 않고,\n변화에 혁신을 주도합니다.",
      lead: "땅이 다르면 다르게 접근하고, 환경이 바뀌면 그 변화를 이끄는 기술을 만듭니다. 가장 화려한 기술이 아니라, 지금 가장 필요한 변화를 만드는 일. 그것이 cinapi가 정의하는 ‘적합한 기술력’입니다.",
      link: "cinapi의 이야기 보기",
    },
    products: {
      eyebrow: "OUR PRODUCTS",
      title: "우리가 만드는 것",
      xpile: {
        eyebrow: "ECO PILE FOUNDATION",
        title: "땅 아래의 기초",
        description:
          "콘크리트와 H빔 없이 강력한 지지력을 확보하는 친환경 말뚝 기초. 지중에서 날개를 펼쳐 땅을 움켜쥐고, 설치는 단 10분, 탄소 배출은 80% 절감합니다.",
        cta: "엑스파일 살펴보기",
        href: "/products/x-pile",
      },
      airdome: {
        eyebrow: "AIR-SUPPORTED DOME",
        title: "땅 위의 공간",
        description:
          "X-PILE 위에 세워지는 콘크리트 없는 대공간 구조물. 기둥 없는 넓은 내부와 뛰어난 냉·난방 효율로, 산소와 안전한 환경을 제공하는 생명 보호막입니다.",
        cta: "에어돔 살펴보기",
        href: "/products/airdome",
      },
    },
    contact: {
      eyebrow: "CONTACT",
      title: "문의하기",
      subtitle: "프로젝트에 cinapi의 기술이 필요하다면, 편하게 남겨주세요.",
      labels: { name: "이름", phone: "연락처", email: "이메일", message: "문의 내용" },
      placeholders: {
        name: "홍길동",
        phone: "010-0000-0000",
        email: "you@company.com",
        message: "문의하실 내용을 입력해주세요.",
      },
      submit: "문의 보내기",
      thanksTitle: "문의가 접수되었습니다.",
      thanksBody: "빠른 시일 내에 담당자가 남겨주신 연락처로 회신드리겠습니다.",
    },
    footer: {
      tagline:
        "변하는 환경엔, 변하는 기술이 필요합니다.\ncinapi는 그 믿음으로 건축을 다시 생각합니다.",
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
        "변하는 환경엔, 변하는 기술이 필요합니다.\ncinapi는 그 믿음으로 건축을 다시 생각합니다.",
      menuLabel: "MENU",
      contactLabel: "CONTACT",
      addressLabel: "ADDRESS",
      email: "sein@cinapi.com",
      address: "경기도 화성시 동탄구 동탄중심상가1길 8, 602호",
      rights: "© 2026 cinapi. All rights reserved.",
    },
    home: {
      scrollHint: "SCROLL",
      hero: {
        eyebrow: "CHANGING ENVIRONMENT · CHANGING TECHNOLOGY",
        line: "변하는 환경엔, 변하는 기술이.",
      },
      question: {
        eyebrow: "THE QUESTION",
        title: "우리가 마주한 질문",
        quote: "살아가는 환경은 계속 변하는데, 기술은 왜 그대로일까?",
        body: "사람들이 살아가는 환경은 계속 달라지고 있습니다.\n땅의 조건도, 도시의 모습도, 사람들이 공간에 기대하는 것도 변하고 있습니다.\n그런데 건축은 여전히 오래된 방식을 고수합니다.\n\n cinapi는 이 간극에서 출발했습니다.",
      },
      philosophy: {
        eyebrow: "OUR PHILOSOPHY",
        headline: "변화에 맞서지 않고,\n변화에 혁신을 주도합니다.",
        lead: "땅이 다르면 다르게 접근하고, 환경이 바뀌면 그 변화를 이끄는 기술을 만듭니다.\n가장 화려한 기술이 아니라, 지금 가장 필요한 변화를 만드는 일.\n그것이 cinapi가 정의하는 ‘적합한 기술력’입니다.",
        link: "cinapi의 이야기 보기",
      },
      products: {
        eyebrow: "OUR PRODUCTS",
        title: "우리가 만드는 것",
        xpile: {
          eyebrow: "ECO PILE FOUNDATION",
          title: "땅 아래의 기초",
          description:
            "땅속에서 날개를 펼쳐 지반을 붙잡는 친환경 말뚝 기초입니다.\n검증된 구조로 일반 말뚝 대비 4배 이상의 인발저항력과 지지력을 확보합니다.\n콘크리트 기초 공사가 없어, 비용과 탄소 배출을 근본적으로 줄입니다.",
          cta: "X-PILE 살펴보기",
          href: "/products/x-pile",
        },
        airdome: {
          eyebrow: "AIR-SUPPORTED DOME",
          title: "땅 위의 공간",
          description:
            "철골과 콘크리트 기초 없이 세우는, 내부에 기둥이 없는 넓은 공간입니다.\n폭설과 강풍, 급격한 온도 변화 같은 열악한 조건에서도 구조를 유지합니다.\n온도와 습도를 철저히 통제해, 외부 환경과 무관하게 내부 조건을 일정하게 유지합니다.",
          cta: "AIRDOME 살펴보기",
          href: "/products/airdome",
        },
      },
      contact: {
        eyebrow: "CONTACT",
        title: "문의하기",
        subtitle: "프로젝트에 cinapi의 기술이 필요하다면, 편하게 남겨주세요.",
        labels: { name: "이름", phone: "연락처", email: "이메일", message: "문의 내용" },
        placeholders: {
          name: "홍길동",
          phone: "010-0000-0000",
          email: "you@company.com",
          message: "문의하실 내용을 입력해주세요.",
        },
        submit: "문의 보내기",
        thanksTitle: "문의가 접수되었습니다.",
        thanksBody: "빠른 시일 내에 담당자가 남겨주신 연락처로 회신드리겠습니다.",
      },
    },
    productsIntro: {
      kicker: "INTRODUCTION",
      title: "콘크리트 없이,\n기초부터 구조까지.",
      body: "cinapi는 콘크리트 없는 시공을 실현하는 X-PILE과, 이를 기반으로 세워지는 AIRDOME을 함께 개발합니다.\n고탄소·고비용·저효율의 기존 공법을 대체하는 것이 우리의 목표입니다.",
      productsLabel: "Products",
      getInTouch: "도입 문의하기",
      readMore: "자세히 보기",
      xpile: {
        pill: "친환경 말뚝 기초",
        eyebrow: "ECO PILE FOUNDATION",
        teaser:
          "땅속에서 날개를 펼쳐 지반을 붙잡는 친환경 말뚝 기초입니다.\n검증된 구조로 일반 말뚝 대비 4배 이상의 인발저항력과 지지력을 확보합니다.\n콘크리트 기초 공사가 없어, 비용과 탄소 배출을 근본적으로 줄입니다.",
        href: "/products/x-pile",
      },
      airdome: {
        pill: "대공간 돔 구조",
        eyebrow: "AIR-SUPPORTED DOME",
        teaser:
          "철골과 콘크리트 기초 없이 세우는, 내부에 기둥이 없는 넓은 공간입니다.\n폭설과 강풍, 급격한 온도 변화 같은 열악한 조건에서도 구조를 유지합니다.\n온도와 습도를 철저히 통제해, 외부 환경과 무관하게 내부 조건을 일정하게 유지합니다.",
        href: "/products/airdome",
      },
    },
    xpile: {
      modelLabel: "모델",
      heading: "X-PILE",
      desc: "지반에 관입한 뒤 지하에서 날개를 펼쳐 땅을 움켜쥐는, 날개 배출형 친환경 말뚝 기초입니다.\n이 구조가 만들어내는 인발저항력과 지지력은 기존 말뚝의 4배 이상, 흔들림 없이 하중을 받아냅니다.\n콘크리트 기초 공사 없이 완성되기에, 고탄소·고비용·환경파괴에서 자유롭습니다.",
      cta: "문의하기",
      whyLead: "Four reasons X-PILE redefines the foundation.",
      whyTitle: "Why X-PILE?",
      features: [
        { n: "01", title: "친환경", body: "콘크리트 기초 대비 탄소 배출 80% 절감" },
        { n: "02", title: "빠른 설치", body: "복잡한 공정 없이 단 10분 만에 시공 완료" },
        { n: "03", title: "경제성", body: "공사 기간 1/10 단축, 비용 10배 절감" },
        { n: "04", title: "날개 확장 구동", body: "날개가 땅 속에서 확장되며 지지력 확보" },
      ],
      effectLead: "Prove your project with X-PILE’s concrete-free, measured results.",
      effectTitle: "콘크리트 없이도, 숫자로 증명합니다",
      stats: [
        { target: -80, suffix: "%", label: "탄소 배출(CO2) 절감" },
        { target: 0, suffix: "%", label: "건설 폐수·폐기물" },
        { target: 10, suffix: "분", label: "평균 설치 시간" },
        { target: 10, suffix: "x", label: "비용 절감 효과" },
      ],
      applicationsLabel: "APPLICATIONS",
      applicationsTitle: "하나의 기초, 다양한 현장",
      apps: [
        { category: "실내 대공간", name: "AIRDOME", subName: "AirDome", desc: "콘크리트 없이 세우는, 기둥 없는 넓은 공간.", chips: ["체육시설", "물류창고", "대피시설"], img: "/apps/app-dome.png" },
        { category: "스마트 재배", name: "스마트팜", subName: "Smart Farm", desc: "지반을 훼손하지 않고 빠르게 조성하는 재배 환경.", chips: ["수직농장", "원예단지"], img: "/apps/app-farm.png" },
        { category: "신재생 에너지", name: "태양광 패널", subName: "Solar Panels", desc: "콘크리트 기초 없이 설치하는 친환경 태양광 가대.", chips: ["영농형", "수상", "유휴부지"], img: "/apps/app-solar.png" },
        { category: "경계·방호", name: "펜스", subName: "Fences", desc: "어떤 지반에도 10분이면 세우는 무진동 지주 기초.", chips: ["방음벽", "경계펜스", "방호책"], img: "/apps/app-fence.png" },
        { category: "도시 인프라", name: "가로등", subName: "Streetlights", desc: "콘크리트 타설 없이 당일 시공하는 조명·CCTV 지주.", chips: ["가로등", "CCTV", "도로 표지판"], img: "/apps/app-light.png" },
        { category: "원예 시설", name: "비닐하우스", subName: "Greenhouses", desc: "연약 지반에서도 강한 인발저항으로 버티는 하우스 기초.", chips: ["원예", "특용작물"], img: "/apps/app-greenhouse.png" },
        { category: "축산 시설", name: "축사", subName: "Livestock Barns", desc: "위생적이고 빠른 시공이 가능한 축사 구조 기초.", chips: ["우사", "돈사", "계사"], img: "/apps/app-barn.png" },
      ],
      ctaBannerText: "X-PILE 위에 세워지는 AIRDOME도 함께 살펴보세요.",
      ctaButtonLabel: "AIRDOME",
    },
    airdome: {
      modelLabel: "모델",
      heading: "AIRDOME",
      // Meeting revision (item 4, layout A -> B): the two mid-sentence breaks the
      // PDF marked in green — after "해체 후" and after "낮아," — stranded those
      // fragments on 46px and 32px lines. Removing them lets the body flow in
      // sequence and fill its measure, which is layout B. The break after the first
      // sentence is kept: layout B shows it, and it was not one of the marked ones.
      // Wording is unchanged.
      // Confirmed corrections (a -> b): the "incorrect spacing" 희원 marked is the
      // Korean line break position, not margin or padding. The desktop paragraph has
      // to break after "시공이 끝나고," (so "필요하면 해체 후" starts the next line) and
      // after "하나의 공간으로". Those two positions carry [[br]] markers, which
      // ProductPage turns into breaks that only exist above the 900px breakpoint —
      // mobile keeps the natural wrapping it has today. The space in front of each
      // marker stays in the copy, so with the break removed the words still separate.
      // Wording is unchanged.
      desc: "X-PILE 기초를 외곽에 배치하고, 그 위에 막구조를 펼쳐 올리는 방식으로 세웁니다.\n터파기와 타설 공정이 없어 기존 대공간 건축 대비 훨씬 짧은 기간에 시공이 끝나고, [[br]]필요하면 해체 후 다른 부지에 다시 세울 수 있습니다. 넓은 면적을 하나의 공간으로 [[br]]쓰면서도 냉·난방 부하가 낮아, 스마트팜과 대형 시설의 운영 비용을 줄입니다.",
      cta: "문의하기",
      whyLead: "Three reasons AirDome redefines the space above.",
      whyTitle: "Why AIRDOME?",
      features: [
        { n: "01", title: "강력한 지지력", body: "콘크리트·H빔 없이 X-PILE의 강력한 인발 저항력으로\n기초를 대체합니다." },
        { n: "02", title: "생명 보호막", body: "산소와 안전한 환경을 제공하는,\n생명이 태어나고 자라는 거대한 보호막입니다." },
        { n: "03", title: "빠른 시공", body: "실외 스마트팜을 비롯한 다양한 환경에\n빠르고 효율적으로 시공합니다." },
      ],
      effectLead: "AirDome, measured — a vast space raised without concrete.",
      effectTitle: "콘크리트 없이 세우는, 거대한 생명 공간",
      stats: [
        { target: 0, suffix: "%", label: "콘크리트 기초" },
        { target: 10, suffix: "분", label: "X-PILE 기초 설치" },
        { target: -80, suffix: "%", label: "탄소 배출 절감" },
        { target: 100, suffix: "%", label: "구조물 재사용 가능" },
      ],
      applicationsLabel: "APPLICATIONS",
      applicationsTitle: "하나의 돔, 다양한 공간",
      apps: [
        { category: "기둥 없는 공간", name: "실내 체육시설", subName: "Indoor Sports", desc: "기둥 없는 대공간에서 즐기는 실내 스포츠 시설.", chips: ["풋살", "테니스", "수영장"], img: "/apps/dome-app-sports.png" },
        { category: "대공간 거점", name: "물류·창고", subName: "Logistics", desc: "기둥 없는 넓은 내부로 효율을 높이는 물류 거점.", chips: ["창고", "물류센터"], img: "/apps/dome-app-logistics.png" },
        { category: "긴급 대응", name: "재난 대피시설", subName: "Disaster Shelter", desc: "빠르게 세워 안전을 확보하는 대규모 대피 공간.", chips: ["대피소", "방재"], img: "/apps/dome-app-shelter.png" },
        { category: "스마트 재배", name: "실외 스마트팜", subName: "Smart Farm", desc: "산소와 안전한 환경을 갖춘 대규모 재배 공간.", chips: ["재배", "원예"], img: "/apps/dome-app-farm.png" },
        { category: "대공간 이벤트", name: "전시·행사장", subName: "Events", desc: "임시·상설로 운영하는, 기둥 없는 이벤트 홀.", chips: ["전시", "공연"], img: "/apps/dome-app-event.png" },
        { category: "청정 환경", name: "방역·의료", subName: "Medical", desc: "격리·방역을 위한 안전하고 청정한 대공간.", chips: ["방역", "의료"], img: "/apps/dome-app-medical.png" },
      ],
      ctaBannerText: "AIRDOME을 지탱하는 X-PILE 기술도 함께 살펴보세요.",
      ctaButtonLabel: "X-PILE",
    },
    contact: {
      kicker: "CONTACT",
      title: "무엇이든 물어보세요.",
      body: "X-PILE과 AIRDOME에 대한 문의, 시공 상담, 제휴 제안 등 무엇이든 남겨주시면 담당자가 빠르게 연락드립니다.",
      labels: { name: "이름", phone: "연락처", email: "이메일", message: "문의 내용" },
      placeholders: {
        name: "홍길동",
        phone: "010-0000-0000",
        email: "you@company.com",
        message: "문의하실 내용을 입력해주세요.",
      },
      submit: "문의 보내기",
      sending: "전송 중…",
      errorBody: "문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",
      thanksTitle: "문의가 접수되었습니다.",
      thanksBody: "문의가 정상적으로 전송되었습니다. 확인 후 연락드리겠습니다.",
      emailLabel: "EMAIL",
      email: "sein@cinapi.com",
      addressLabel: "ADDRESS",
      address: "경기도 화성시 동탄구 동탄중심상가1길 8, 602호",
      mapLabel: "Cinapi 사무실 위치",
      mapUnavailable: "인터랙티브 지도를 현재 표시할 수 없습니다.",
      openInNaver: "네이버 지도에서 보기",
    },
    story: {
      kicker: "OUR STORY",
      heroTitle: "기초를 다시 설계합니다.",
      heroSub: "cinapi는 콘크리트에 의존하지 않는 구조 기술을 개발합니다.",
      questionKicker: "HOW IT STARTED",
      questionBody:
        "건물을 세우려면 먼저 땅을 파고 콘크리트를 부어 바닥을 만듭니다.\n이 콘크리트가 굳을 때까지 짧게는 몇 주, 길게는 몇 달이 걸리고, 그동안 현장의 나머지 공정은 전부 멈춰 있습니다.\n전체 공사 기간과 비용의 상당 부분이 여기서 결정됩니다.\n\n한번 부은 콘크리트는 다시 걷어내기 어렵습니다.\n임시로 쓸 건물이든 오래 쓸 건물이든 같은 절차를 밟아야 한다는 것이 오랫동안 당연하게 여겨져 왔습니다.\n\ncinapi는 이 전제를 다시 검토했습니다.\n땅을 굳혀서 건물을 받치는 대신, 땅을 붙잡아서 받치는 방법이 있는지를 물었습니다.",
      questionQuote: "콘크리트는 기초의 유일한 답이 아닙니다.",
      philoKicker: "OUR TECHNOLOGY",
      philoTitle: "cinapi의 기초 기술이\n콘크리트를 대신합니다.",
      philoBody:
        "X-PILE은 땅속으로 박아 넣은 뒤 날개를 펼쳐 주변 흙을 붙잡는 기둥입니다.\n건물을 지탱하는 힘을 콘크리트가 아니라 땅 자체에서 얻기 때문에,\n바닥에 콘크리트를 부을 필요가 없습니다.\n\n굳기를 기다리는 시간이 사라져 설치가 몇 분 단위로 끝나고,\n시멘트를 쓰지 않으니 그만큼의 탄소도 발생하지 않습니다.\n나중에 걷어내면 땅은 원래 상태로 돌아갑니다.",
      philoTermLabel: "검증된 구조",
      philoTermBody:
        "X-PILE과 AIRDOME은 자체 개발한 구조 기술을 기반으로 하며, 시험을 거쳐 성능을 확인했습니다.",
      attitudeKicker: "HOW WE WORK",
      attitudeTitle: "지반을 먼저 읽습니다",
      attitudes: [
        { num: "01", title: "관찰", body: "지반 조건은 현장마다 다릅니다.\n토질과 하중 조건을 확인한 뒤 설계에 들어갑니다." },
        { num: "02", title: "재정의", body: "관행으로 굳어진 공정에 근거를 요구합니다.\n대체 가능한 공정이라면 대체합니다." },
        { num: "03", title: "검증", body: "주장은 시험으로 확인되어야 합니다.\ncinapi는 시험 결과와 시공 실적을 근거로 제시합니다." },
      ],
      directionKicker: "WHERE WE'RE GOING",
      directionTitle: "기초에서 구조 전체로.",
      directionBody:
        "기초의 제약이 사라지면 그 위에 세울 수 있는 것의 범위가 달라집니다.\n철골과 콘크리트 없이 대공간을 구현한 AIRDOME이 그 첫 번째 사례입니다.",
      directionClose:
        "cinapi는 콘크리트 없이 시공 가능한 구조의 범위를 계속 넓혀가고 있습니다.",
      ctaText: "기술의 실제 적용 사례를 제품 페이지에서 확인하세요.",
      ctaButton: "제품 보기",
    },
    blog: {
      kicker: "BLOG",
      heroTitle: "소식과 이야기",
      heroBody: "cinapi의 기술 소식, 시공 사례, 산업 인사이트를 전합니다.",
      posts: [
        { date: "작성 예정", title: "게시글 제목이 여기에 표시됩니다", imgPlaceholder: "포스트 이미지" },
        { date: "작성 예정", title: "게시글 제목이 여기에 표시됩니다", imgPlaceholder: "포스트 이미지" },
        { date: "작성 예정", title: "게시글 제목이 여기에 표시됩니다", imgPlaceholder: "포스트 이미지" },
      ],
      emptyNote: "준비 중입니다. 곧 새로운 소식으로 찾아뵙겠습니다.",
    },
  },
};

export default ko;
