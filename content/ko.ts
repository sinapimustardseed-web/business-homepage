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
          "5분이면 세우는 친환경 기초, 기존 파일 대비 4~5배 강한 인발저항을 지닌 날개형 구조의 콘크리트 없는 말뚝 기초.",
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
    headline: "5분이면 세우는 친환경 기초",
    subcopy: "날개형 구조로 확장되는, 콘크리트 없는 말뚝 기초",
    definitionLabel: "제품 정의",
    definition: "콘크리트 기초공사 대체형 친환경 기초 시스템, 날개 배출형 말뚝 기초",
    featuresHeading: "핵심 특징",
    features: [
      "5분 설치 가능",
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
};

export default ko;
