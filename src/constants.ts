import { Project, Expertise, WorkExperience } from './types';

export const HERO_CONTENT = {
  name: "Lee Ji Hye",
  title: "Branded Content Director / Video Strategist",
  tagline: "데이터로 설득하고 콘텐츠 포맷으로 브랜딩하는 콘텐츠 디렉터",
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
    title: "오리지널 콘텐츠 기획 및\n제작 리딩",
    description: "[체험농협현장], [퇴근하GO] 등\n장기 지속 가능한 콘텐츠를\n기획하고 촬영/편집 전 과정을\n리딩하여 브랜드 로열티 강화",
    projects: ["기획/촬영/편집 총괄", "브랜드 로열티 강화", "장기 지속 포맷 설계"]
  },
  {
    title: "퍼포먼스 마케팅 및\n채널 성장",
    description: "SNS 광고 이탈 구간 분석을\n통한 콘텐츠 최적화로\n최고 ROAS 800% 달성",
    projects: ["최고 ROAS 800% 달성", "1개월 만에 팔로워 1만 명 확보", "단일 영상 조회수 10만 회 이상"]
  },
  {
    title: "프로세스 최적화 및\n능동적 협업",
    description: "부서 간 다이렉트 소통 채널\n구축으로 제작 리드타임\n30% 단축",
    projects: ["제작 리드타임 30% 단축", "인플루언서 협업 가이드라인 수립", "최종 퀄리티 관리 컨트롤 타워"]
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  // Internal Branding
  {
    title: "체험농협현장",
    category: "Internal Branding",
    role: "기획 100% / 촬영 50% / 편집 100%",
    roleBreakdown: { planning: 100, filming: 50, editing: 100 },
    description: "리얼 버라이어티",
    intent: "전국 각지에 흩어져 있는 사업소의 생생한 현장을 담아내어 본사와 지사 간의 물리적 거리를 좁히고 결속력을 다지기 위해 기획되었습니다. 출연자가 일일 직원이 되어 업무를 직접 체험하는 예능 형식을 도입하여, 자칫 딱딱할 수 있는 업무 소개를 현장 직원들의 땀방울과 보람이 담긴 친근한 콘텐츠로 풀어냈습니다.",
    results: ["사내 방송 역사상 최장수 프로그램 타이틀 획득", "조직 문화의 온도 제고 및 본사-사업소 간 정서적 유대감 강화"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/NH.png",
    links: [
      { name: "주유소&농기계 수리센터", url: "https://www.youtube.com/watch?v=h1y6RqylWNM" },
      { name: "제주 하나로마트", url: "https://www.youtube.com/watch?v=RvS3l4EgLqI" },
      { name: "곤드레 수확", url: "https://www.youtube.com/watch?v=K7OhT6enS48" },
      { name: "로컬푸드 직매장", url: "https://www.youtube.com/watch?v=SydDkGsbTJw" },
      { name: "찾아가는 행복장터", url: "https://www.youtube.com/watch?v=Cu5_rTxR9FE" },
      { name: "멋대로 참외", url: "https://www.youtube.com/watch?v=tm2biylczTA" }
    ],
    tags: ["리얼 버라이어티", "사내방송"]
  },
  {
    title: "퇴근하GO",
    category: "Internal Branding",
    role: "기획 100% / 연출 100% / 편집 90% (CG 제외)",
    roleBreakdown: { planning: 100, filming: 100, editing: 90 },
    description: "사내 커뮤니티 활성화 예능",
    intent: "직원들의 '워라밸'을 존중하고 건강한 사내 커뮤니티 형성을 위해 기획되었습니다. 기존의 단순 홍보 방식에서 탈피하여 유쾌한 예능 포맷을 도입, 업무 외 시간에도 동료들과 취미를 공유하며 소통할 수 있는 장을 마련함으로써 경직된 사내 분위기를 유연하게 바꾸고자 했습니다.",
    results: ["신규 동호회 가입률 40% 이상 폭증", "사내 최고의 화제성 및 실질적인 사내 소통 활성화 견인"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/GO.png",
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
    category: "Internal Branding",
    role: "기획 100% / 촬영 50% / 편집 100%",
    roleBreakdown: { planning: 100, filming: 50, editing: 100 },
    description: "정보 전달",
    intent: "복잡하고 딱딱한 사내 제도, 규정, 복지 혜택 등을 모든 임직원이 쉽게 이해하고 혜택을 누릴 수 있도록 정보 격차 해소를 위해 기획되었습니다. 정보 전달에 최적화된 스튜디오 진행과 생생한 현장 VCR을 결합하고, 직관적인 연출을 가미하여 시청자의 지루함을 방지했습니다.",
    results: ["'사내 정보 가이드의 표준'으로 안착", "임직원 제도 이해도 및 복지 활용 지표 획기적 개선"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/NH_DA.png",
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

  // Digital Media & Web Entertainment
  {
    title: "덕분TV",
    category: "Digital Media & Web Entertainment",
    role: "기획 100% / 연출 100% / 편집 50%",
    roleBreakdown: { planning: 100, filming: 100, editing: 50 },
    description: "웹예능",
    intent: "기존의 전형적인 무속 콘텐츠 프레임에서 탈피하여, 대중이 가볍고 즐겁게 소비할 수 있는 '웹예능' 포맷을 접목했습니다. 시청자의 호기심을 자극하는 구성과 분위기 있는 현장 연출을 통해 콘텐츠의 몰입도를 극대화했습니다.",
    results: ["단일 영상 조회수 10만 회 돌파", "신규 구독자 유입 및 채널 활성화 기여"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/SINGI.png",
    links: [
      { name: "神기로풀었쇼 1부", url: "https://www.youtube.com/watch?v=Ju1LOcvSDMA&pp=ygUS642V67aEVFYg7ZKA7JeI7Ie8" },
      { name: "神기로풀었쇼 2부", url: "https://www.youtube.com/watch?v=DZ5br4snwzg&pp=ygUS642V67aEVFYg7ZKA7JeI7Ie80gcJCcUKAYcqIYzv" }
    ],
    tags: ["웹예능", "조회수 10만"]
  },
  {
    title: "however",
    category: "Digital Media & Web Entertainment",
    role: "사진 촬영 100% / 릴스 제작 100% / 채널 운영 총괄",
    roleBreakdown: { planning: 100, filming: 100, editing: 100 },
    description: "SNS 브랜딩 및 채널 성장",
    intent: "신규 브랜드의 빠른 인지도 확산을 위해 SNS 비주얼 디렉팅과 숏폼 중심의 채널 전략을 수립했습니다. 감각적인 사진 촬영과 알고리즘을 타겟팅한 릴스 영상 제작에 집중하여 유저의 '저장'과 '공유'를 유도했습니다.",
    results: ["인스타그램 개설 1개월 만에 팔로워 1만 명 달성", "단기간 내 강력한 팬덤 확보 및 브랜드 신뢰도 구축"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/HOW.png",
    links: [{ name: "Howerver 인스타그램", url: "https://www.instagram.com/reels/CxM48ECv0fM/" }],
    tags: ["SNS 브랜딩", "팔로워 1만"]
  },
  {
    title: "수키원장",
    category: "Digital Media & Web Entertainment",
    role: "기획 100% / 촬영 50% / 편집 100%",
    roleBreakdown: { planning: 100, filming: 50, editing: 100 },
    description: "유튜브 리얼리티 시리즈",
    intent: "전문적인 지식을 리얼리티 포맷과 결합하여 시청자들에게 신뢰를 주고 지속 가능한 정보성 시리즈를 구축하고자 했습니다. 단순히 정보를 전달하는 것에 그치지 않고, 체형 고민이 있는 출연자들의 변화 과정을 가감 없이 담아내며 라이프스타일까지 세심하게 관찰하고 피드백하는 진정성 있는 접근 방식을 택했습니다.",
    results: ["시청자 호응으로 시즌 2 제작 확정", "성공적인 정보성 채널 브랜딩 구축"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/SUKI.png",
    links: [{ name: "수키원장", url: "https://www.youtube.com/watch?v=l1_JaKIHYwY" }],
    tags: ["유튜브 리얼리티", "시즌제"]
  },
  {
    title: "NEWSEN 앳스타일 (STAR 1)",
    category: "Digital Media & Web Entertainment",
    role: "기획 100% / 촬영 50% / 편집 50%",
    roleBreakdown: { planning: 100, filming: 50, editing: 50 },
    description: "아티스트 콘텐츠",
    intent: "아티스트가 가진 고유의 매력을 화보 이상의 생동감 넘치는 영상으로 담아내어, 팬덤의 니즈를 충족시키고 플랫폼의 디지털 도달 범위를 확장하기 위해 기획되었습니다. 스타 화보 메이킹 영상과 트렌디한 인터뷰 세션(왓츠인마이백, 밸런스 게임 등)을 결합하여, 아티스트의 자연스러운 모습과 전문적인 화보 촬영 현장을 유기적으로 연결하는 뉴미디어 콘텐츠를 구축했습니다.",
    results: ["높은 조회수와 활발한 SNS 공유 유발", "플랫폼 도달률 획기적 확장 및 대표 코너 안착"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/STAR1.png",
    links: [{ name: "앳스타일", url: "https://www.youtube.com/watch?v=j3UJ2ahoT9A" }],
    tags: ["아티스트 콘텐츠", "뉴미디어"]
  },

  // Branded & Performance Marketing
  {
    title: "디에트데이 (Dietday)",
    category: "Branded & Performance Marketing",
    role: "기획 및 전략 100% / 인플루언서 섭외 100% / 제작 총괄",
    roleBreakdown: { planning: 100, filming: 50, editing: 50 },
    description: "통합 캠페인 및 협찬",
    intent: "배우 설인아를 모델로 기용한 대규모 브랜드 캠페인 전략을 수립했습니다. 모델의 이미지와 제품의 소구점을 정교하게 매칭시킨 스토리보드를 바탕으로, 데이터 분석을 통한 A/B 테스트용 소재를 다수 제작했습니다. 또한 김씨부부, 승아, 웹툰작가 오창 등 인플루언서 협찬 및 협업을 통해 오리지널 브랜디드 영상 콘텐츠를 생산했습니다.",
    results: ["퍼포먼스 마케팅 최적화로 최고 ROAS 800% 달성", "브랜드 검색량 폭발적 증가 및 자발적 바이럴 견인"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/DITE.png",
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
    tags: ["ROAS 800%", "통합 캠페인"]
  },
  {
    title: "커머스/F&B 홍보 영상",
    category: "Branded & Performance Marketing",
    role: "기획 및 제작 100%",
    roleBreakdown: { planning: 100, filming: 100, editing: 100 },
    description: "다양한 브랜드 홍보 영상",
    intent: "각 업체별 핵심 타겟과 서비스 특성을 분석하여 맞춤형 광고 영상을 제작했습니다. 구독 서비스 플랫폼을 구독자 약 3배 증가에 기여하는 등 각 브랜드의 인지도 제고 및 매출 전환에 실질적인 도움을 주었습니다.",
    results: ["구독 서비스 플랫폼 구독자 약 3배 증가 기여", "브랜드 인지도 제고 및 매출 전환 실질적 지원"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/GUGU.png",
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

  // Public & Media Content
  {
    title: "서정대학교",
    category: "Public & Media Content",
    role: "기획 100% / 제작(가편) 50%",
    roleBreakdown: { planning: 100, filming: 50, editing: 50 },
    description: "HiVE 사업 성과 홍보 영상",
    intent: "HiVE(고등직업교육거점지구) 사업의 복잡한 성과 지표를 일반 대중과 유관 기관이 한눈에 파악할 수 있도록 '데이터의 시각화'에 집중하여 기획했습니다. 수백 페이지에 달하는 방대한 사업 보고서를 심도 있게 분석하여 핵심 KPI를 추출하고, 이를 기반으로 최적화된 모션 그래픽과 생생한 현장 스케치를 결합했습니다.",
    results: ["기관의 전문성 극대화 및 브랜드 가치 확보", "유관 기관으로부터 '직관적인 영상 언어' 극찬"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/HIVE.png",
    links: [{ name: "서정대학교 성과 영상", url: "https://www.youtube.com/watch?v=I4rlCjZvVxY" }],
    tags: ["성과홍보", "데이터 시각화"]
  },
  {
    title: "대명 아임레디",
    category: "Public & Media Content",
    role: "기획 및 대본 100% / 현장 연출 50%",
    roleBreakdown: { planning: 100, filming: 50, editing: 0 },
    description: "브랜디드 퀴즈 쇼",
    intent: "보험이나 상조 같은 보수적인 상품군이 가진 '어렵고 지루하다'는 편견을 깨는 것을 최우선 과제로 삼았습니다. 시청자가 수동적으로 정보를 수용하는 대신, 퀴즈 형식에 참여하며 자연스럽게 상품의 핵심 혜택을 체득할 수 있도록 설계했습니다.",
    results: ["시청 지속 시간 획기적 향상", "브랜드 친밀도 제고 및 실제 전환 문의 긍정적 영향"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/DM.png",
    links: [{ name: "대명 아임레디 보험 영상", url: "https://www.youtube.com/watch?v=akyYzi_N6XY" }],
    tags: ["퀴즈쇼", "브랜디드 콘텐츠"]
  },
  {
    title: "채널A",
    category: "Public & Media Content",
    role: "방송 준비 및 진행\nFD - 생방송 스튜디오 총괄 관리 / 출연자 및 소품 관리\nAD - 자료 조사 및 CG제작 의뢰",
    description: "보도 프로그램 제작",
    intent: "긴박하게 돌아가는 뉴스 현장의 소식을 실시간으로 전달하며, 정확한 팩트 체크와 매끄러운 방송 진행을 통해 보도 매체로서의 신뢰성을 확보하고자 했습니다. <뉴스 A 라이브>, <정치데스크> 등 주요 보도 프로그램의 제작진으로서 초 단위의 긴장감이 흐르는 현장을 서포트했습니다.",
    results: ["생방송 현장 컨트롤 및 무결점 방송 유지", "긴급 보도 상황 대응 역량 입증"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/Channela.png",
    links: [
      { name: "사건상황실", url: "https://youtu.be/nNoNyTQFDaI?si=xb9L5UK6opxipay9" },
      { name: "뉴스 A LIVE", url: "https://www.youtube.com/live/ZYJu-2Ot0zk?si=xGfxmHxp8h0n_nds" },
      { name: "토요랭킹쇼", url: "https://youtu.be/bXFki6_XpFM?si=mbVqhNbv1fMHFofg" }
    ],
    tags: ["보도프로그램", "생방송"]
  },
  {
    title: "NAVER LIVE",
    category: "Public & Media Content",
    role: "방송 준비 및 진행 보조 / 출연자 및 소품 관리 / 댓글 관리",
    description: "모바일 라이브 소통 콘텐츠",
    intent: "모바일 플랫폼 성장에 발맞추어, 정형화된 TV 방송에서 벗어나 시청자와 실시간으로 양방향 소통하는 새로운 포맷의 가능성을 확인하고자 기획되었습니다. 2016년 모바일 라이브 방송의 초기 단계에서 진행된 요리 콘텐츠로, 단순 구매 유도보다는 채팅을 통한 즉각적인 피드백과 소통 자체에 집중했습니다.",
    results: ["조회수 2만 회 돌파", "뉴미디어 라이브 선구적 성공 사례 창출"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/NAVER.png",
    links: [{ name: "NAVER LIVE", url: "https://naver.me/5LQnpPMr" }],
    tags: ["모바일라이브", "실시간소통"]
  },
  {
    title: "KBS 2TV <아침>",
    category: "Public & Media Content",
    role: "자료 조사 / 촬영 보조 / 편집 보조 / 예고편 제작",
    description: "정보 프로그램 조연출",
    intent: "매일 아침 시청자들에게 신뢰할 수 있는 생활 정보와 감동적인 사연을 신속·정확하게 전달하여 삶의 활력을 제공하는 데 목적을 두었습니다. 공영방송의 고품질 기준에 맞춘 데일리 콘텐츠 제작을 목표로 했습니다.",
    results: ["데일리 제작 전반 실무 전담", "엄격한 방송 규격 및 데드라인 준수 역량 입증"],
    image: "https://cdn.jsdelivr.net/gh/wlgpwkdb-cell/LEEJH@559ee3ca6e6de7fcc25c85dada483ad8f20310a4/2TV.jpg",
    links: [{ name: "KBS 2TV 아침", url: "https://www.youtube.com/watch?v=3lyJjD7OZ8M" }],
    tags: ["정보프로그램", "공영방송"]
  }
];

export const PORTFOLIO_CATEGORIES = [
  "Internal Branding",
  "Digital Media & Web Entertainment",
  "Branded & Performance Marketing",
  "Public & Media Content"
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
