import { Project, Expertise, WorkExperience } from './types';

export const HERO_CONTENT = {
  name: "Lee Ji Hye",
  title: "Branded Content Director / Video Strategist",
  tagline: "콘텐츠의 ‘재미’와 ‘성과’를 동시에 설계하는 영상 기획자\n브랜드 메시지부터 실행, 성과까지 연결되는 콘텐츠 구조를 만듭니다",
  description: "콘텐츠 전략 수립부터 오리지널 포맷 개발, 영상 제작, 성과 분석까지 콘텐츠의 기획 · 제작 · 운영을 통합적으로 설계합니다."
};

export const ABOUT_CONTENT = {
  bio: "'이지혜'는 브랜디드 콘텐츠, 웹예능, 방송 제작, 퍼포먼스 마케팅 등\n다양한 콘텐츠 프로젝트를 수행한 콘텐츠 디렉터입니다.\n단순한 영상 제작이 아니라 브랜드 메시지를 지속 가능한 콘텐츠로 설계합니다.",
  tasks: [
    "콘텐츠 전략 설계",
    "영상 콘텐츠 기획 및 제작",
    "프로덕션 리딩",
    "콘텐츠 성과 분석"
  ]
};

export const CORE_EXPERTISE: Expertise[] = [
  {
    title: "콘텐츠 전략 설계",
    description: "브랜드 메시지와 타겟을 기반으로\n콘텐츠 구조와 포맷 설계",
    projects: []
  },
  {
    title: "연출 및 현장 운영",
    description: "촬영 흐름과 몰입도를 설계하고\n현장에서의 디렉팅 및 변수 대응",
    projects: []
  },
  {
    title: "퍼포먼스 기반 콘텐츠 제작",
    description: "데이터 분석과 A/B 테스트를 통해\n성과 중심의 콘텐츠 제작",
    projects: []
  },
  {
    title: "멀티 포맷 경험",
    description: "웹예능, 라이브, 브랜디드, 방송까지\n플랫폼별 최적화된 콘텐츠 제작 경험",
    projects: []
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  // Key Projects (Featured)
  {
    title: "디에트데이 (Dietday)",
    category: "Key Project",
    role: "→ 문제 정의 및 가설 수립\n\n→ A/B 테스트 설계 및 운영\n\n→ 콘텐츠 구조 설계\n\n→ 성과 확장 전략 수립",
    roleBreakdown: { planning: 100, filming: 50, editing: 50 },
    description: "Performance Campaign",
    intent: "> 광고 효율이 아니라 **시청 구조를 바꿨습니다**\n\nROAS 100~200%에서 정체된 다이어트 캠페인을 콘텐츠 구조만 변경해 최대 **800%까지 개선한 프로젝트**입니다.\n\n- 제품 / 타겟 / 예산 / 랜딩 동일\n- 변경 변수: **콘텐츠 구조**\n\n👉 성과를 바꾼 건 메시지가 아니라\n👉 **사용자의 시청 흐름 설계**",
    challenge: "기존 광고 구조는 전형적이었습니다.\n\n- 초반 결과 노출\n- 제품 효과 & 후기 중심\n- 빠른 설득 구조\n\n하지만 데이터는 전혀 다르게 말하고 있었습니다.\n\n> ❗ 문제는 설득력이 아니었습니다\n\n- 3초 이탈률 60%+\n- 5초 구간 유지율 급락\n- 핵심 메시지 이전 대부분 이탈\n\n👉 **설득이 시작되기 전에 시청이 끝나는 구조**",
    approach: "문제를 이렇게 다시 정의했습니다.\n\n> ❌ 무엇을 말할 것인가\n> ⭕ 사용자가 어디까지 보게 만들 것인가\n\n그리고 가설을 세웠습니다.\n\n> 👉 결과가 아니라\n> 👉 **이유를 따라가게 만들면 시청이 유지된다**\n\n### 퍼널 구조\n시청 유지율 ↑ → 메시지 도달 ↑ → CTR ↑ → CVR / ROAS ↑\n\n---\n\n### 왜 이 방법인가 (Why This Way)\n\n검토했던 대안들:\n- 후킹 문구 개선\n- 메시지 리라이팅\n- 신규 촬영\n\n하지만 선택하지 않았습니다.\n\n> 👉 이탈이 메시지 이전에 발생했기 때문\n> 👉 메시지를 바꿔도 문제는 그대로\n\n또한\n> 👉 추가 촬영 없이 빠르게 검증해야 하는 상황\n\n그래서 결론은 하나였습니다.\n👉 **구조를 바꾸는 것이 가장 현실적인 해결책**\n\n---\n\n### A/B 테스트 (A/B Testing)\n\n**A안 (기존)**: 결과 선노출 → 빠른 판단 → 빠른 이탈\n![Before 1](https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/063229e2ee0ba61462f234520e5bde3bcccc8ef3/230809_%EC%89%90%EC%9D%B4%ED%81%AC2.png) ![Before 2](https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/063229e2ee0ba61462f234520e5bde3bcccc8ef3/230809_%EC%89%90%EC%9D%B4%ED%81%AC6.png)\n\n**B안 (개선)**: 질문형 시작 → 과정 중심 전개 → 시청 유지\n![After 1](https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/063229e2ee0ba61462f234520e5bde3bcccc8ef3/221214_%EC%9A%B0%EC%86%8C%EB%AA%85_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4_1.jpg) ![After 2](https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/063229e2ee0ba61462f234520e5bde3bcccc8ef3/221214_%EB%B0%95%EC%A7%80%EC%9D%80_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4_1.jpg)",
    execution: [
      "전략: 끝까지 보게 만드는 흐름 설계 (결과 선노출 제거, 질문형 Hook 시작, 문제→과정→결과 순)",
      "성과 기준 재정의: 초반(유지율) → 중간(CTR) → 최종(CVR/ROAS) 퍼널 병목 기준 판단",
      "실행: 기존 소재 재편집 (추가 촬영 없음), A/B 테스트 기반 반복 검증",
      "확장: 유지율 & CTR 기준 성과 선별 및 구조를 다양한 포맷으로 확장"
    ],
    impact: [
      "3초 유지율: +10~20%p 개선",
      "5초 유지율: +15%p 개선",
      "CTR: 약 1.5배 상승",
      "CVR: 약 1.3~1.5배 상승",
      "ROAS: 100~200% → 최대 800% 달성"
    ],
    insight: "성과는 메시지 이후가 아니라 **시청 경험에서 먼저 결정된다**는 것을 확인했습니다.\n\n좋은 메시지가 중요한 게 아니라, **메시지에 도달하게 만드는 구조가 성과를 만든다**는 것이 핵심 결론입니다.",
    results: ["구조 변경만으로 퍼널 전체 개선", "ROAS 최대 800% 달성"],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/DITE.png",
    links: [
      { name: "디에트데이 메인 광고", url: "https://www.youtube.com/watch?v=2XjMhD6146o" },
      { name: "디에트데이 메인 광고 메이킹", url: "https://youtu.be/eg4zZGmml-g?si=YVAy0JcJ7vbqyOHN" },
      { name: "홈페이지 영상", url: "https://youtube.com/shorts/ZC2di6nNj9U?si=3iZn-32lmSx1iKiS" },
      { name: "유정 협찬 (블루문美)", url: "https://youtu.be/GvY1jC_FsXQ?si=_2CeIpzehur9_2Qn" },
      { name: "박가린 협찬 (스타일美)", url: "https://youtu.be/4FP8nq8BcuU?si=GSrix4wFoeCwzoQZ" },
      { name: "신수지 협찬 (왓츠인마이백)", url: "https://youtu.be/P0fDmv_FH6U?si=GaEsihDyyHGvV0T1" },
      { name: "김씨부부(인플루언서) 협찬", url: "https://www.instagram.com/p/CmMK7gKpyfz/?hl=ko" },
      { name: "승아,아싸라비아픽쳐스 협찬", url: "https://www.instagram.com/reel/CmF_3rrrefu/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
      { name: "오창(웹툰 작가) 협업", url: "https://www.instagram.com/p/CiPP4SVPodg/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
      { name: "오창 협업 2", url: "https://youtu.be/lwQPWOrAAL8?si=L7ob8PZskAV_fO5b" }
    ],
    tags: ["ROAS 800%", "A/B TEST"]
  },
  {
    title: "덕분TV",
    category: "Key Project",
    role: "→ 콘텐츠 포맷 기획 및 구조 설계\n\n→ 대본 작성 및 토크 흐름 설계\n\n→ 제작 전반 기획 및 실행 총괄",
    roleBreakdown: { planning: 100, filming: 100, editing: 0 },
    description: "Web Entertainment Format",
    intent: "기존의 전형적인 무속 콘텐츠 프레임에서 탈피하여, 대중이 가볍고 즐겁게 소비할 수 있는 '웹예능' 포맷을 접목했습니다. 시청자의 호기심을 자극하는 구성과 분위기 있는 현장 연출을 통해 콘텐츠의 몰입도를 극대화했습니다.",
    challenge: "기존 덕분TV 콘텐츠는\n무속인을 인터뷰하며 ‘띠별 운세’, ‘재물운’ 등을\n전달하는 정보 전달형 콘텐츠에 집중되어 있었습니다.\n\n이로 인해 콘텐츠 형식이 반복되며\n흥미도와 몰입도가 제한적인 구조였습니다.",
    approach: "전형적인 무속 정보 전달 방식에서 벗어나\n무속인을 패널화한 웹예능 토크쇼 포맷으로 전환했습니다.\n\n> → 범죄자 사주, 사회적 이슈 등을 주제로 무속인 간 토론을 유도하여 콘텐츠의 긴장감과 몰입도 강화\n>\n> → 무속 콘텐츠 특성상 발생할 수 있는 거부감과 무거운 분위기를 완화하기 위해 개그맨 MC를 기용하여 콘텐츠의 진입 장벽을 낮추고 대중성 확보\n>\n> → 기존 ‘정보 전달 콘텐츠’를 ‘토론 기반 스토리 콘텐츠’로 구조적으로 전환한 프로젝트",
    execution: [
      "콘텐츠 기획 및 포맷 설계 전반 주도",
      "토크 흐름 및 대본 구성 작성",
      "촬영 외주 제작사 협업 및 현장 진행",
      "편집 구성안 설계 및 자막 작성"
    ],
    impact: [
      "단일 영상 조회수 10만 회 이상 달성",
      "콘텐츠 포맷 확장을 통해 채널 방향성 변화 기여",
      "이후 유사 포맷의 후속 콘텐츠 지속 제작"
    ],
    insight: "콘텐츠의 몰입도는 정보의 양이 아니라\n‘구조와 형식’에 의해 결정된다는 것을 확인했습니다.\n\n동일한 소재라도 전달 방식에 따라\n사용자의 체류와 반응이 달라지기 때문에,\n콘텐츠는 메시지보다 ‘포맷 설계’가 핵심이라는\n기준을 확립했습니다.",
    results: ["단일 영상 조회수 10만 회 돌파", "신규 구독자 유입 및 채널 활성화 기여"],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/SINGI.png",
    links: [
      { name: "神기로풀었쇼 1부", url: "https://www.youtube.com/watch?v=Ju1LOcvSDMA&pp=ygUS642V67aEVFYg7ZKA7JeI7Ie8" },
      { name: "神기로풀었쇼 2부", url: "https://www.youtube.com/watch?v=DZ5br4snwzg&pp=ygUS642V67aEVFYg7ZKA7JeI7Ie80gcJCcUKAYcqIYzv" }
    ],
    tags: ["조회수 10만+", "FORMAT DESIGN"]
  },
  {
    title: "however",
    category: "Key Project",
    role: "→ SNS 콘텐츠 전략 및 비주얼 방향성 설계\n\n→ 콘텐츠 기획 및 제작 전반 주도\n\n→ 채널 운영 및 초기 성장 실행",
    roleBreakdown: { planning: 100, filming: 100, editing: 100 },
    description: "SNS Branding & Growth",
    intent: "신규 브랜드의 빠른 인지도 확산을 위해 SNS 비주얼 디렉팅과 숏폼 중심의 채널 전략을 수립했습니다. 감각적인 사진 촬영과 알고리즘을 타겟팅한 릴스 영상 제작에 집중하여 유저의 '저장'과 '공유'를 유도했습니다.",
    challenge: "however는 강렬한 색감의 공간과 레인보우 카스테라 등\n시각적 요소가 뚜렷한 브랜드였지만,\n\n신규 브랜드로서 시장 내 인지도가 전무한 상태였으며,\n단기간 내에 강력한 팬덤을 확보하고 브랜드 이미지를 구축해야 했습니다.",
    approach: "브랜드의 핵심 자산인 ‘공간 비주얼’과 ‘제품 색감’을 중심으로\nSNS 콘텐츠 전략을 설계했습니다.\n\n> → 강렬한 색감과 공간 콘셉트를 강조한 비주얼 중심 콘텐츠 기획\n>\n> → 카페 공간 자체를 콘텐츠화하여 방문 욕구 유도\n>\n> → 레인보우 카스테라를 감각적으로 소비되는 콘텐츠로 설계\n\n단순 정보 전달이 아닌\n‘저장하고 싶은 콘텐츠’, ‘공유되는 콘텐츠’ 구조로 접근했습니다.",
    execution: [
      "SNS 콘텐츠 방향성 및 톤앤매너 설계",
      "공간 및 제품 중심 콘텐츠 기획 및 촬영 디렉팅",
      "이미지 및 숏폼 콘텐츠 구조 설계",
      "채널 운영 및 콘텐츠 업로드 실행"
    ],
    impact: [
      "SNS 계정 개설 1개월 내 팔로워 1만 명 달성",
      "비주얼 중심 콘텐츠를 통한 초기 관심 유입 확보",
      "콘텐츠를 통한 방문 및 구매 유입 증가"
    ],
    insight: "브랜드 콘텐츠에서는 정보 전달보다\n‘보고 싶고 공유하고 싶은 비주얼’이\n사용자 반응을 만든다는 것을 확인했습니다.\n\n특히 공간과 비주얼이 강한 브랜드일수록\n텍스트 중심 메시지보다 이미지 기반 콘텐츠가 더 높은 확산 효과를 만든다는 인사이트를 얻었습니다.",
    results: ["인스타그램 개설 1개월 만에 팔로워 1만 명 달성", "단기간 내 강력한 팬덤 확보 및 브랜드 신뢰도 구축"],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/HOW.png",
    links: [{ name: "Howerver 인스타그램", url: "https://www.instagram.com/reels/CxM48ECv0fM/" }],
    tags: ["팔로워 1만", "BRANDING"]
  },

  // Internal Content & Communication
  {
    title: "체험농협현장",
    category: "Key Project",
    role: "→ 콘텐츠 포맷 기획 및 구조 설계\n\n→ 체험형 콘텐츠 기획 및 진행 방식 설계\n\n→ 제작 전반 기획 및 실행 참여",
    roleBreakdown: { planning: 100, filming: 50, editing: 100 },
    description: "INTERNAL CONTENT TRANSFORMATION",
    intent: "전국 각지에 흩어져 있는 사업소의 생생한 현장을 담아내어 본사와 지사 간의 물리적 거리를 좁히고 결속력을 다지기 위해 기획되었습니다. 출연자가 일일 직원이 되어 업무를 직접 체험하는 예능 형식을 도입하여, 자칫 딱딱할 수 있는 업무 소개를 현장 직원들의 땀방울과 보람이 담긴 친근한 콘텐츠로 풀어냈습니다.",
    challenge: "전국 각지에 흩어져 있는 사업소와 본사 간의 물리적 거리가 멀어,\n현장 직원들의 업무 고충과 보람이 본사에 전달되기 어려운 구조였습니다.\n\n이로 인해 본사와 지사 간의 정서적 유대감이 약화되고,\n사내 방송 콘텐츠에 대한 직원들의 관심도 또한 낮은 상황이었습니다.",
    approach: "딱딱한 정보 전달 방식에서 벗어나\n출연자가 일일 직원이 되어 업무를 직접 체험하는\n‘리얼 예능’ 포맷을 도입했습니다.\n\n> → 현장 직원들과의 직접적인 소통을 통해 업무의 가치와 의미를 전달\n>\n> → 예능적 요소를 결합하여 사내 콘텐츠의 진입 장벽을 낮추고 몰입도 확보\n>\n> → 전국 사업소를 직접 방문하여 본사와 현장을 연결하는 콘텐츠 구조 설계\n\n단순한 정보 전달이 아닌,\n‘사람’과 ‘현장’ 중심의 이야기 구조를 통해\n구성원 간 공감대를 형성하는 방향으로 콘텐츠를 재설계했습니다.",
    execution: [
      "콘텐츠 기획 및 리얼 예능 포맷 설계 전반 주도",
      "체험형 콘텐츠 진행 방식 및 흐름 구성",
      "전국 사업소 촬영 기획 및 현장 운영 협업",
      "편집 방향 및 콘텐츠 스토리라인 설계"
    ],
    impact: [
      "현장 중심 콘텐츠를 통해 직원들의 콘텐츠 관심도 및 몰입도 향상",
      "본사와 현장 간 정서적 거리 완화에 기여",
      "참여형 사내 콘텐츠 운영의 확장 기반 마련"
    ],
    insight: "조직 내부 콘텐츠에서는 정보 전달보다\n‘사람과 경험’ 중심의 콘텐츠가\n더 높은 공감과 참여를 만든다는 것을 확인했습니다.\n\n콘텐츠는 단순 전달 수단이 아니라\n조직 내 관계와 연결을 만들어내는 구조로 설계되어야 한다는\n인사이트를 얻었습니다.",
    results: ["사내 방송 역사상 최장수 프로그램 타이틀 획득", "조직 문화의 온도 제고 및 본사-사업소 간 정서적 유대감 강화"],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/NH.png",
    links: [
      { name: "주유소&농기계 수리센터", url: "https://www.youtube.com/watch?v=h1y6RqylWNM" },
      { name: "제주 하나로마트", url: "https://www.youtube.com/watch?v=RvS3l4EgLqI" },
      { name: "곤드레 수확", url: "https://www.youtube.com/watch?v=K7OhT6enS48" },
      { name: "로컬푸드 직매장", url: "https://www.youtube.com/watch?v=SydDkGsbTJw" },
      { name: "찾아가는 행복장터", url: "https://www.youtube.com/watch?v=Cu5_rTxR9FE" },
      { name: "멋대로 참외", url: "https://www.youtube.com/watch?v=tm2biylczTA" }
    ],
    tags: ["조직연결", "사내 콘텐츠 혁신"]
  },
  {
    title: "퇴근하GO",
    category: "Internal Content",
    role: "기획 100% / 연출 100% / 편집 90% (CG 제외)",
    roleBreakdown: { planning: 100, filming: 100, editing: 90 },
    description: "사내 커뮤니티 활성화 예능",
    intent: "직원들의 '워라밸'을 존중하고 건강한 사내 커뮤니티 형성을 위해 기획되었습니다. 기존의 단순 홍보 방식에서 탈피하여 유쾌한 예능 포맷을 도입, 업무 외 시간에도 동료들과 취미를 공유하며 소통할 수 있는 장을 마련함으로써 경직된 사내 분위기를 유연하게 바꾸고자 했습니다.",
    challenge: "코로나 이후 비대면 근무 환경이 지속되며 사내 동호회 활동이 감소하고\n직원 간 오프라인 교류 또한 크게 줄어든 상황이었습니다.\n\n👉 동호회는 존재했지만 참여가 끊긴 상태",
    approach: "체험형 예능 포맷을 활용해 사내 콘텐츠를 참여 행동을 유도하는 구조로 설계\n\n→ 동호회를 단순 소개하는 것이 아니라 “직접 참여해보고 싶은 콘텐츠”로 재구성\n→ 출연자가 실제 동호회 활동에 참여하며 가입 전 고려되는 요소(분위기, 난이도, 재미)를 콘텐츠 안에서 간접 체험할 수 있도록 설계\n→ 시청자가 콘텐츠를 통해 참여를 망설이는 장벽을 낮추고, 실제 가입으로 이어지도록 구조화",
    results: [
      "신규 동호회 가입률 40% 이상 증가",
      "감소했던 동호회 참여 회복",
      "사내 콘텐츠 내 최고 수준의 화제성 확보",
      "직원 간 자발적 교류 및 커뮤니케이션 활성화"
    ],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/GO.png",
    links: [
      { name: "농협대학교 밴드 동아리 ‘뮤직에러’", url: "http://www.nhtv.co.kr/vodView.hu?file_idx=1021&&sText=&cateCode=2020&nowPage=5" },
      { name: "남동농협 야구 동호회 ‘두레 야구단’ 1부", url: "http://www.nhtv.co.kr/vodView.hu?file_idx=993&&sText=&cateCode=2020&nowPage=10" },
      { name: "남동농협 야구 동호회 ‘두레 야구단’ 2부", url: "http://www.nhtv.co.kr/vodView.hu?file_idx=998&&sText=&cateCode=2020&nowPage=9" },
      { name: "통합IT센터 농구 동호회 ‘휘모리’ 1부", url: "http://www.nhtv.co.kr/vodView.hu?file_idx=977&&sText=&cateCode=2020&nowPage=12" },
      { name: "통합IT센터 농구 동호회 ‘휘모리’ 2부", url: "http://www.nhtv.co.kr/vodView.hu?file_idx=980&&sText=&cateCode=2020&nowPage=12" },
      { name: "농협 강원본부 축구 동호회 ‘신토불이 FC’", url: "http://www.nhtv.co.kr/vodView.hu?file_idx=1032&&sText=&cateCode=2020&nowPage=4" }
    ],
    tags: ["사내 커뮤니티", "예능"]
  },
  {
    title: "다은이가 알려줄게",
    category: "Internal Content",
    role: "기획 100% / 촬영 50% / 편집 100%",
    roleBreakdown: { planning: 100, filming: 50, editing: 100 },
    description: "정보 전달",
    challenge: "사내 제도와 복지 정보는 복잡하고 딱딱한 구조로 인해\n임직원이 내용을 정확히 이해하고 활용하기 어려운 상황이었습니다.\n\n👉 정보는 존재했지만 쉽게 이해되지 않는 구조",
    approach: "정보 전달에 최적화된 포맷으로 사내 콘텐츠를 이해 중심 구조로 재설계\n\n→ 복잡한 정보를 핵심 단위로 분해하여 짧고 명확하게 전달되는 구조로 구성\n→ 스튜디오 진행 + 현장 VCR을 결합하여 정보를 설명이 아닌 사례와 맥락으로 이해하도록 설계\n→ 전달 과정에서 발생하는 피로도를 줄이기 위해 리듬감 있는 구성과 직관적인 연출 적용",
    impact: [
      "사내 콘텐츠 내 최고 시청률 기록",
      "직원 제도 이해도 및 활용도 개선",
      "정보 콘텐츠 접근성 및 소비율 향상"
    ],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/NH_DA.png",
    links: [
      { name: "농협쌀 수출 이야기", url: "http://www.nhtv.co.kr/vodView.hu?file_idx=974&&sText=&cateCode=2020&nowPage=13" },
      { name: "그로운 농장(청년농부)", url: "http://www.nhtv.co.kr/vodView.hu?file_idx=908&&sText=&cateCode=2020&nowPage=23" },
      { name: "농협쌀 간편식품", url: "https://www.youtube.com/watch?v=rx6L3kJssdA" },
      { name: "프랑스 사무소", url: "http://www.nhtv.co.kr/vodView.hu?file_idx=888&&sText=&cateCode=2020&nowPage=26" },
      { name: "쌀의 오해와 진실", url: "https://www.youtube.com/watch?v=i0b9fWhXCXM" },
      { name: "NH트레블리카드", url: "http://www.nhtv.co.kr/vodView.hu?file_idx=895&&sText=&cateCode=2020&nowPage=25" }
    ],
    tags: ["정보전달", "사내복지"]
  },

  // Web & Format Content
  {
    title: "수키원장",
    category: "Web & Format Content",
    role: "기획 100% / 촬영 50% / 편집 100%",
    roleBreakdown: { planning: 100, filming: 50, editing: 100 },
    description: "유튜브 리얼리티 시리즈",
    challenge: "건강/체형 정보 콘텐츠는 전문성이 높을수록 시청자의 신뢰 확보가 중요하지만,\n단순 정보 전달 방식은 지속적인 시청과 몰입으로 이어지기 어려운 구조였습니다.\n\n👉 정보는 있었지만 신뢰와 지속 소비로 연결되지 않는 상태",
    approach: "리얼리티 포맷을 결합하여 정보 콘텐츠를 신뢰와 몰입이 동시에 형성되는 구조로 재설계\n\n→ 단편적인 정보 전달이 아닌 출연자의 변화 과정을 중심으로 서사 구조 설계\n→ 체형 변화뿐 아니라 생활 습관과 과정까지 담아내어 정보를 ‘결과’가 아닌 ‘과정’으로 소비하도록 전환\n→ 시청자가 콘텐츠를 통해 변화를 지속적으로 지켜보게 만드는 시리즈 구조 구축",
    impact: [
      "정보 콘텐츠의 신뢰도 및 몰입도 동시 확보",
      "단발성 콘텐츠가 아닌 지속 시청 기반 시리즈 구조 구축",
      "건강/체형 콘텐츠의 스토리형 확장 가능성 검증"
    ],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/SUKI.png",
    links: [
      { name: "수키원장", url: "https://www.youtube.com/watch?v=l1_JaKIHYwY" },
      { name: "ebody", url: "https://www.ebody.kr/" }
    ],
    tags: ["유튜브 리얼리티", "시즌제"]
  },
  {
    title: "NEWSEN 앳스타일 (STAR 1)",
    category: "Web & Format Content",
    role: "기획 100% / 촬영 50% / 편집 50%",
    roleBreakdown: { planning: 100, filming: 50, editing: 50 },
    description: "아티스트 콘텐츠",
    challenge: "아티스트 화보 콘텐츠는 정적인 이미지 중심으로 소비되며\n영상 콘텐츠에서도 포맷은 유지되지만\n출연자에 따라 차별화된 매력을 보여주는 것이 중요한 과제였습니다.",
    approach: "기존 메이킹 + 인터뷰 구조를 기반으로\n아티스트의 이미지와 캐릭터에 맞는 컨셉을 개별적으로 설계\n\n→ 화보 촬영 메이킹에서는 아티스트의 분위기와 성격이 드러날 수 있도록 현장 포인트와 표현 방식을 조정\n→ 촬영 이후 인터뷰 콘텐츠에서는 아티스트의 캐릭터에 맞는 질문과 톤을 설계하여 자연스러운 매력이 드러나도록 구성\n→ 동일한 포맷 안에서도 아티스트별로 다른 무드와 매력을 전달하는 컨셉 중심 콘텐츠로 완성",
    impact: [
      "아티스트별 매력 차별화 및 팬덤 반응 확보",
      "동일 포맷 내 콘텐츠 완성도 및 몰입도 향상"
    ],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/STAR1.png",
    links: [{ name: "앳스타일", url: "https://www.youtube.com/watch?v=j3UJ2ahoT9A" }],
    tags: ["아티스트 콘텐츠", "뉴미디어"]
  },

  // Brand Content
  {
    title: "커머스/F&B 홍보 영상",
    category: "Brand Content",
    role: "기획 50% / 제작 100%",
    roleBreakdown: { planning: 50, filming: 100, editing: 100 },
    description: "다양한 브랜드 홍보 영상",
    challenge: "브랜드마다 원하는 방향과 강조하고 싶은 포인트가 다르지만,\n이를 영상으로 구체화하는 과정에서 의도와 결과물 사이에 차이가 생기는 경우가 많았습니다.",
    approach: "브랜드 담당자와의 커뮤니케이션을 기반으로\n요구사항과 방향성을 명확히 정리하고 그에 맞는 영상으로 구체화\n\n→ 브랜드가 전달하고자 하는 핵심 메시지와 톤을 정리하고 이를 영상 흐름과 구성에 반영\n→ 피드백 과정을 통해 방향을 조율하며 브랜드 의도와 실제 결과물이 일치하도록 제작\n→ SNS 환경에서 효과적으로 소비될 수 있도록 영상 템포와 구성까지 함께 설계",
    impact: [
      "구독 서비스 플랫폼 구독자 약 3배 증가 기여",
      "브랜드 인지도 상승 및 실제 전환 성과 확보",
      "다양한 브랜드 대상 맞춤형 광고 영상 제작 경험 축적"
    ],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/GUGU.png",
    links: [
      { name: "구독서비스", url: "https://youtu.be/83o74jxdmUA?si=TszY4tM0ZXJyFHyM" },
      { name: "주간감성", url: "https://youtu.be/CzLblgqzzfY?si=9GdZdcl99DqfkNWO" },
      { name: "동구밭 샴푸비누", url: "https://youtu.be/bVEKjETRbXA?si=Iq8BzXyaAIjNy2-5" },
      { name: "베트남 노상식당", url: "https://youtu.be/lsc_-BlPbog?si=mAVr5AF96MwtaDv7" },
      { name: "리나앤보스 헤어샵", url: "https://youtu.be/ywg2o52o4fU?si=syYUHbZtujSt8oEL" },
      { name: "스노우팩 비누", url: "https://youtu.be/8Mw3z202eDc?si=Phrf_eAZPDqYXslm" }
    ],
    tags: ["커머스", "F&B", "매출전환"]
  },
  {
    title: "서정대학교",
    category: "Brand Content",
    role: "기획 100% / 제작(가편) 50%",
    roleBreakdown: { planning: 100, filming: 50, editing: 50 },
    description: "HiVE 사업 성과 홍보 영상",
    challenge: "HiVE 사업은 다양한 성과 지표와 데이터를 포함하고 있어\n일반 대중이나 유관 기관이 한눈에 이해하기 어려운 구조였습니다.\n\n👉 핵심 성과를 직관적으로 전달하기 어려운 상태",
    approach: "방대한 사업 보고서를 분석하여 핵심 지표를 선별하고\n이를 영상 언어로 재구성\n\n→ 주요 KPI를 기준으로 전달해야 할 내용을 정리하고 정보 우선순위를 재설계\n→ 모션 그래픽을 활용해 복잡한 데이터를 직관적으로 시각화\n→ 실제 현장 스케치를 함께 구성하여 데이터를 성과와 사례로 연결\n→ 숫자 중심 정보를 이해 가능한 흐름으로 전달되는 콘텐츠로 변환",
    impact: [
      "기관의 전문성과 사업 성과를 명확하게 전달",
      "유관 기관으로부터 직관적인 영상 구성에 대한 긍정적 평가 확보",
      "복잡한 보고서 기반 콘텐츠의 영상화 가능성 검증"
    ],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/HIVE.png",
    links: [{ name: "서정대학교 성과 영상", url: "https://www.youtube.com/watch?v=I4rlCjZvVxY" }],
    tags: ["성과홍보", "데이터 시각화"]
  },
  {
    title: "대명 아임레디",
    category: "Brand Content",
    role: "기획 및 대본 100% / 현장 연출 50%",
    roleBreakdown: { planning: 100, filming: 50, editing: 0 },
    description: "브랜디드 퀴즈 쇼",
    challenge: "보험·상조와 같은 상품군은 정보가 복잡하고 어렵다는 인식이 강해\n콘텐츠로 접했을 때도 이해와 관심으로 이어지기 어려운 구조였습니다.",
    approach: "퀴즈 형식을 도입해 정보 콘텐츠를 참여형 구조로 전환\n\n→ 시청자가 단순히 보는 것이 아니라 문제를 풀며 자연스럽게 상품의 핵심 혜택을 이해하도록 설계\n→ 복잡한 정보를 설명 대신 질문과 선택의 형태로 재구성\n→ 예능적 요소를 결합하여 정보 콘텐츠의 진입 장벽을 낮추고 몰입도를 유지할 수 있는 흐름 구성",
    impact: [
      "시청 지속 시간 획기적 향상",
      "실제 전환 문의에 긍정적 영향"
    ],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/DM.png",
    links: [{ name: "대명 아임레디 보험 영상", url: "https://www.youtube.com/watch?v=akyYzi_N6XY" }],
    tags: ["퀴즈쇼", "브랜디드 콘텐츠"]
  },

  // Media & Broadcast Content
  {
    title: "채널A",
    category: "Broadcast Content",
    role: "[FD]\n- 생방송 스튜디오 총괄 관리\n- 출연자 및 소품 관리\n\n[AD]\n- 자료 조사\n- CG제작 의뢰",
    description: "보도 프로그램 제작",
    challenge: "뉴스 프로그램은 실시간으로 진행되기 때문에\n작은 오류도 방송 전체의 신뢰도에 영향을 줄 수 있는 환경이었습니다.\n\n👉 빠른 판단과 정확한 대응이 동시에 요구되는 구조",
    approach: "생방송 환경에서의 안정적인 진행을 위해\n방송 준비부터 진행까지 전 과정 운영을 체계적으로 관리\n\n→ 스튜디오 세팅, 출연자 동선, 소품 등을 사전에 정리하여 방송 흐름이 끊기지 않도록 준비\n→ FD로서 생방송 스튜디오 전반을 컨트롤하며 실시간 상황 대응 및 진행 안정성 유지\n→ AD 역할로 자료 조사 및 CG 제작 의뢰를 수행하여 보도 내용의 정확성과 완성도 확보",
    impact: [
      "생방송 환경에서 안정적인 방송 운영 유지",
      "긴급 보도 상황에서도 유연한 대응 역량 입증",
      "방송 사고 없이 무결점 진행 경험 축적"
    ],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/Channela.png",
    links: [
      { name: "사건상황실", url: "https://youtu.be/nNoNyTQFDaI?si=xb9L5UK6opxipay9" },
      { name: "뉴스 A LIVE", url: "https://www.youtube.com/live/ZYJu-2Ot0zk?si=xGfxmHxp8h0n_nds" },
      { name: "토요랭킹쇼", url: "https://youtu.be/bXFki6_XpFM?si=mbVqhNbv1fMHFofg" }
    ],
    tags: ["보도프로그램", "생방송"]
  },
  {
    title: "NAVER LIVE",
    category: "Broadcast Content",
    role: "- 방송 준비 및 진행 보조\n- 출연자 및 소품 관리\n- 댓글 관리",
    description: "모바일 라이브 소통 콘텐츠",
    challenge: "모바일 라이브 방송이 초기 단계였던 시점에서 기존 TV 중심의 일방향 콘텐츠와 달리\n시청자와 실시간으로 소통하는 새로운 콘텐츠 방식에 대한 가능성을\n확인할 필요가 있었습니다.\n\n👉 콘텐츠는 있었지만 소통 중심으로 설계된 사례는 많지 않은 상황",
    approach: "요리 콘텐츠를 기반으로 단순 시청이 아닌 실시간 소통 중심 콘텐츠로 운영\n\n→ 채팅을 통해 들어오는 질문과 반응을 방송 흐름에 즉각 반영하여 양방향 커뮤니케이션 구조 유지\n→ 출연자와 시청자 간의 거리감을 줄이고 참여하고 있다는 느낌을 강화하는 방향으로 진행\n→ 댓글 관리 및 현장 운영을 통해 소통 흐름이 끊기지 않도록 실시간 대응",
    impact: [
      "라이브 방송 조회수 2만 회 달성",
      "뉴미디어 라이브 콘텐츠 초기 사례 경험 축적",
      "모바일 기반 소통형 콘텐츠의 가능성 확인"
    ],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/NAVER.png",
    links: [{ name: "NAVER LIVE", url: "https://naver.me/5LQnpPMr" }],
    tags: ["모바일라이브", "실시간소통"]
  },
  {
    title: "KBS 2TV <아침>",
    category: "Broadcast Content",
    role: "- 자료 조사\n- 촬영 보조 \n- 편집 보조\n- 예고편 제작",
    description: "정보 프로그램 조연출",
    challenge: "매일 아침 방송되는 데일리 프로그램 특성상 제한된 시간 안에 콘텐츠를 완성해야 했으며,\n공영방송 기준에 맞는 정확성과 완성도가 동시에 요구되는 환경이었습니다.\n\n👉 콘텐츠는 매일 만들어야 했고 속도와 품질을 동시에 유지해야 하는 구조",
    approach: "데일리 제작 환경에 맞춰 자료 조사부터 촬영, 편집까지 전 제작 과정을 빠르고 정확하게 수행\n\n→ 주제에 맞는 자료를 빠르게 조사하고 정리하여 콘텐츠 제작의 기초 데이터 확보\n→ 촬영 및 편집 보조를 통해 제작 흐름이 지연되지 않도록 실무 전반 지원\n→ 예고편 제작을 통해 콘텐츠 핵심을 짧고 효과적으로 전달",
    impact: [
      "- 데일리 콘텐츠 제작 전반 실무 안정적으로 수행",
      "- 방송 규격 및 데드라인 지속 준수",
      "- 반복 제작 환경에서의 속도와 정확성 확보"
    ],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/2TV.jpg",
    links: [{ name: "KBS 2TV 아침", url: "https://www.youtube.com/watch?v=3lyJjD7OZ8M" }],
    tags: ["정보프로그램", "공영방송"]
  }
];

export const PORTFOLIO_CATEGORIES = [
  "Internal Content",
  "Web & Format Content",
  "Brand Content",
  "Broadcast Content"
] as const;

export const PRODUCTION_PROCESS = [
  { step: "01", title: "Strategy", description: "브랜드 메시지 분석" },
  { step: "02", title: "Format Development", description: "콘텐츠 포맷 설계" },
  { step: "03", title: "Production", description: "촬영 / 연출 / 편집" },
  { step: "04", title: "Optimization", description: "데이터 기반 성과 분석" }
];

export const IMPACT_STATS = [
  { label: "ROAS", value: "800%", sub: "다이어트데이 캠페인" },
  { label: "Followers", value: "10K+", sub: "however (운영 1개월)" },
  { label: "Views", value: "100K+", sub: "덕분TV (단일 영상)" },
  { label: "Lead Time", value: "-30%", sub: "제작 프로세스 최적화" },
  { label: "Join Rate", value: "+40%", sub: "퇴근하GO (동호회)" }
];
