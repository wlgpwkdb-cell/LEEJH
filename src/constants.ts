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
    role: "→ 캠페인 전략 및 콘텐츠 기획 총괄\n\n→ 크리에이티브 방향 및 메시지 구조 설계\n\n→ 성과 개선을 위한 콘텐츠 구조 설계 주도\n\n→ 제작 전반 참여 및 실행",
    roleBreakdown: { planning: 100, filming: 50, editing: 50 },
    description: "Performance Campaign",
    intent: "배우 설인아를 모델로 기용한 대규모 브랜드 캠페인 전략을 수립했습니다. 모델의 이미지와 제품의 소구점을 정교하게 매칭시킨 스토리보드를 바탕으로, 데이터 분석을 통한 A/B 테스트용 소재를 다수 제작했습니다. 또한 김씨부부, 승아, 웹툰작가 오창 등 인플루언서 협찬 및 협업을 통해 오리지널 브랜디드 영상 콘텐츠를 생산했습니다.",
    challenge: "기존 다이어트 광고는 “단기간 감량”과 같은\n결과 중심 메시지에 집중되어 있었고,\n\n유사한 구조가 반복되면서 사용자 피로도가 높고\n차별성이 부족한 상태였습니다.\n\n이로 인해 콘텐츠는 노출되더라도\n실제 구매로 이어지는 전환 효율이 낮은 구조였습니다.",
    approach: "사용자의 시청 지속 시간과 반응을 확보하기 위해\n기존 제품 중심 콘텐츠 대신\n‘궁금증 유도형 콘텐츠’로 전략을 전환했습니다.\n\n이를 검증하기 위해 두 가지 방향의 광고 소재를 제작하여\nA/B 테스트를 진행했습니다.\n\n#### 제품 중심 메시지\n![Before 1](https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/063229e2ee0ba61462f234520e5bde3bcccc8ef3/230809_%EC%89%90%EC%9D%B4%ED%81%AC2.png) ![Before 2](https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/063229e2ee0ba61462f234520e5bde3bcccc8ef3/230809_%EC%89%90%EC%9D%B4%ED%81%AC6.png)\n\n#### 궁금증 유도형 메시지\n![After 1](https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/063229e2ee0ba61462f234520e5bde3bcccc8ef3/221214_%EC%9A%B0%EC%86%8C%EB%AA%85_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4_1.jpg) ![After 2](https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/063229e2ee0ba61462f234520e5bde3bcccc8ef3/221214_%EB%B0%95%EC%A7%80%EC%9D%80_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4_1.jpg)\n\n> 궁금증 유도 콘텐츠\n>\n> → 기존 광고 대비 더 높은 클릭률, 시청 유지율 기록\n>\n> → 전환 효율이 높은 구조임을 검증\n\n이를 기반으로 광고 전략을 궁금증 중심 구조로 전환하고\n성과 중심으로 콘텐츠를 최적화했습니다.\n\n또한 배우 설인아를 모델로 기용하여\n당시 건강하고 자기관리 이미지와의 적합성을 기반으로\n제품과의 연결성을 강화하고 브랜드 메시지를 명확히 했습니다.",
    execution: [
      "A/B 테스트를 통해 성과를 비교 분석",
      "관심 유도 및 이탈 방지 영상 구조 설계",
      "메인 광고 영상 기획 및 퍼포먼스 소재 제작",
      "인플루언서 협찬 콘텐츠 기획 및 운영"
    ],
    impact: [
      "퍼포먼스 마케팅 최적화를 통해 최고 ROAS 800% 달성",
      "브랜드 검색량 증가 및 자연 유입 확대",
      "콘텐츠 기반 바이럴 확산 및 전환율 개선"
    ],
    insight: "퍼포먼스 콘텐츠에서 중요한 것은 단순한 정보 전달이 아니라\n사용자의 행동을 유도하는 ‘콘텐츠 구조’라는 것을 확인했습니다.\n\n특히 같은 제품이라도 메시지 구조에 따라\n클릭률과 전환 효율이 크게 달라진다는 점에서,\n데이터 기반으로 콘텐츠 방향을 설계하는 것이 중요하다는\n인사이트를 얻었습니다.",
    results: ["퍼포먼스 마케팅 최적화로 최고 ROAS 800% 달성", "브랜드 검색량 폭발적 증가 및 자발적 바이럴 견인"],
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
    roleBreakdown: { planning: 100, filming: 100, editing: 50 },
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
    challenge: "출연자가 1일 동호회원이 되어\n전국 농협 사내 동아리를 직접 체험하며 소개하는 예능 콘텐츠.",
    approach: "단순 정보 전달 방식에서 벗어나\n예능 포맷을 도입하여 직원 참여 중심 구조로 전환",
    results: ["신규 동호회 가입률 40% 이상 폭증", "사내 최고의 화제성 및 실질적인 사내 소통 활성화 견인"],
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
    challenge: "복잡하고 딱딱한 사내 제도와 복지 정보를\n임직원이 쉽게 이해하고 활용할 수 있도록 기획된 콘텐츠.",
    approach: "정보 전달에 최적화된 구조로 설계하고\n스튜디오 진행과 현장 VCR을 결합하여\n이해도와 몰입도를 동시에 높였습니다.\n\n→ 핵심 정보 중심 구성 + 직관적인 연출 적용\n→ 지루함을 줄이고 정보 접근성을 강화한 콘텐츠 구조 설계",
    impact: [
      "사내 정보 콘텐츠의 표준 포맷으로 정착",
      "직원 제도 이해도 및 활용도 개선"
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
    intent: "전문적인 지식을 리얼리티 포맷과 결합하여 시청자들에게 신뢰를 주고 지속 가능한 정보성 시리즈를 구축하고자 했습니다. 단순히 정보를 전달하는 것에 그치지 않고, 체형 고민이 있는 출연자들의 변화 과정을 가감 없이 담아내며 라이프스타일까지 세심하게 관찰하고 피드백하는 진정성 있는 접근 방식을 택했습니다.",
    results: ["시청자 호응으로 시즌 2 제작 확정", "성공적인 정보성 채널 브랜딩 구축"],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/SUKI.png",
    links: [{ name: "수키원장", url: "https://www.youtube.com/watch?v=l1_JaKIHYwY" }],
    tags: ["유튜브 리얼리티", "시즌제"]
  },
  {
    title: "NEWSEN 앳스타일 (STAR 1)",
    category: "Web & Format Content",
    role: "기획 100% / 촬영 50% / 편집 50%",
    roleBreakdown: { planning: 100, filming: 50, editing: 50 },
    description: "아티스트 콘텐츠",
    intent: "아티스트가 가진 고유의 매력을 화보 이상의 생동감 넘치는 영상으로 담아내어, 팬덤의 니즈를 충족시키고 플랫폼의 디지털 도달 범위를 확장하기 위해 기획되었습니다. 스타 화보 메이킹 영상과 트렌디한 인터뷰 세션(왓츠인마이백, 밸런스 게임 등)을 결합하여, 아티스트의 자연스러운 모습과 전문적인 화보 촬영 현장을 유기적으로 연결하는 뉴미디어 콘텐츠를 구축했습니다.",
    results: ["높은 조회수와 활발한 SNS 공유 유발", "플랫폼 도달률 획기적 확장 및 대표 코너 안착"],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/STAR1.png",
    links: [{ name: "앳스타일", url: "https://www.youtube.com/watch?v=j3UJ2ahoT9A" }],
    tags: ["아티스트 콘텐츠", "뉴미디어"]
  },

  // Brand Content
  {
    title: "커머스/F&B 홍보 영상",
    category: "Brand Content",
    role: "기획 및 제작 100%",
    roleBreakdown: { planning: 100, filming: 100, editing: 100 },
    description: "다양한 브랜드 홍보 영상",
    intent: "각 업체별 핵심 타겟과 서비스 특성을 분석하여 맞춤형 광고 영상을 제작했습니다. 구독 서비스 플랫폼을 구독자 약 3배 증가에 기여하는 등 각 브랜드의 인지도 제고 및 매출 전환에 실질적인 도움을 주었습니다.",
    results: ["구독 서비스 플랫폼 구독자 약 3배 증가 기여", "브랜드 인지도 제고 및 매출 전환 실질적 지원"],
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
    intent: "HiVE(고등직업교육거점지구) 사업의 복잡한 성과 지표를 일반 대중과 유관 기관이 한눈에 파악할 수 있도록 '데이터의 시각화'에 집중하여 기획했습니다. 수백 페이지에 달하는 방대한 사업 보고서를 심도 있게 분석하여 핵심 KPI를 추출하고, 이를 기반으로 최적화된 모션 그래픽과 생생한 현장 스케치를 결합했습니다.",
    results: ["기관의 전문성 극대화 및 브랜드 가치 확보", "유관 기관으로부터 '직관적인 영상 언어' 극찬"],
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
    intent: "보험이나 상조 같은 보수적인 상품군이 가진 '어렵고 지루하다'는 편견을 깨는 것을 최우선 과제로 삼았습니다. 시청자가 수동적으로 정보를 수용하는 대신, 퀴즈 형식에 참여하며 자연스럽게 상품의 핵심 혜택을 체득할 수 있도록 설계했습니다.",
    results: ["시청 지속 시간 획기적 향상", "브랜드 친밀도 제고 및 실제 전환 문의 긍정적 영향"],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/DM.png",
    links: [{ name: "대명 아임레디 보험 영상", url: "https://www.youtube.com/watch?v=akyYzi_N6XY" }],
    tags: ["퀴즈쇼", "브랜디드 콘텐츠"]
  },

  // Media & Broadcast Content
  {
    title: "채널A",
    category: "Broadcast Content",
    role: "방송 준비 및 진행\nFD - 생방송 스튜디오 총괄 관리 / 출연자 및 소품 관리\nAD - 자료 조사 및 CG제작 의뢰",
    description: "보도 프로그램 제작",
    intent: "긴박하게 돌아가는 뉴스 현장의 소식을 실시간으로 전달하며, 정확한 팩트 체크와 매끄러운 방송 진행을 통해 보도 매체로서의 신뢰성을 확보하고자 했습니다. <뉴스 A 라이브>, <정치데스크> 등 주요 보도 프로그램의 제작진으로서 초 단위의 긴장감이 흐르는 현장을 서포트했습니다.",
    results: ["생방송 현장 컨트롤 및 무결점 방송 유지", "긴급 보도 상황 대응 역량 입증"],
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
    role: "방송 준비 및 진행 보조 / 출연자 및 소품 관리 / 댓글 관리",
    description: "모바일 라이브 소통 콘텐츠",
    intent: "모바일 플랫폼 성장에 발맞추어, 정형화된 TV 방송에서 벗어나 시청자와 실시간으로 양방향 소통하는 새로운 포맷의 가능성을 확인하고자 기획되었습니다. 2016년 모바일 라이브 방송의 초기 단계에서 진행된 요리 콘텐츠로, 단순 구매 유도보다는 채팅을 통한 즉각적인 피드백과 소통 자체에 집중했습니다.",
    results: ["조회수 2만 회 돌파", "뉴미디어 라이브 선구적 성공 사례 창출"],
    image: "https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/559ee3ca6e6de7fcc25c85dada483ad8f20310a4/NAVER.png",
    links: [{ name: "NAVER LIVE", url: "https://naver.me/5LQnpPMr" }],
    tags: ["모바일라이브", "실시간소통"]
  },
  {
    title: "KBS 2TV <아침>",
    category: "Broadcast Content",
    role: "자료 조사 / 촬영 보조 / 편집 보조 / 예고편 제작",
    description: "정보 프로그램 조연출",
    intent: "매일 아침 시청자들에게 신뢰할 수 있는 생활 정보와 감동적인 사연을 신속·정확하게 전달하여 삶의 활력을 제공하는 데 목적을 두었습니다. 공영방송의 고품질 기준에 맞춘 데일리 콘텐츠 제작을 목표로 했습니다.",
    results: ["데일리 제작 전반 실무 전담", "엄격한 방송 규격 및 데드라인 준수 역량 입증"],
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
