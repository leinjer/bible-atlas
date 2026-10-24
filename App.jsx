import React, { useState, useMemo, useEffect } from 'react';
import {
  BookOpen,
  Map as MapIcon,
  Compass,
  Mountain,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Circle,
  Sparkles,
  Copy,
  Check,
  Search,
  Footprints,
  Navigation,
  Info,
  Layers,
  StickyNote,
  ArrowUpRight,
  Award,
  Flame,
  Droplets,
  Tent,
  ScrollText,
  Eye,
  RotateCcw,
  Share2,
  Globe,
  Github,
  Rocket,
  Terminal,
  ExternalLink
} from 'lucide-react';

// --- SERIES ROADMAP (6 ERAS FOR FULL PLATFORM) ---
const SERIES_VOLUMES = [
  {
    vol: 1,
    id: 'patriarchs',
    title: '제1권: 족장시대 (창 12~50장)',
    subtitle: '아브라함 · 이삭 · 야곱 · 요셉',
    status: 'active',
    badge: '현재 학습 가능'
  },
  {
    vol: 2,
    id: 'exodus',
    title: '제2권: 출애굽과 광야 40년',
    subtitle: '출애굽기 ~ 신명기 여정',
    status: 'upcoming',
    badge: '다음 업데이트 예정'
  },
  {
    vol: 3,
    id: 'kingdom',
    title: '제3권: 가나안 정복 · 사사 · 왕정',
    subtitle: '여호수아 · 다윗의 도피기 · 남북왕국',
    status: 'upcoming',
    badge: '시리즈 예정'
  },
  {
    vol: 4,
    id: 'exile',
    title: '제4권: 포로기와 귀환 시대',
    subtitle: '바벨론 · 페르시아 · 1~3차 귀환',
    status: 'upcoming',
    badge: '시리즈 예정'
  },
  {
    vol: 5,
    id: 'gospels',
    title: '제5권: 예수님의 공생애 발자취',
    subtitle: '갈릴리 · 사마리아 · 예루살렘',
    status: 'upcoming',
    badge: '시리즈 예정'
  },
  {
    vol: 6,
    id: 'acts',
    title: '제6권: 사도행전과 바울 서신',
    subtitle: '1·2·3차 전도여행 및 로마 여정',
    status: 'upcoming',
    badge: '시리즈 예정'
  }
];

// --- DATA: PATRIARCHAL ERA (GENESIS 12-50) ---
const PATRIARCHS = [
  {
    id: 'abraham',
    name: '아브라함 (Abraham)',
    chapters: '창세기 12장 ~ 25장',
    subtitle: '부르심과 제단, 믿음의 발걸음',
    themeColor: 'amber',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
    accentHex: '#d97706',
    summary: '갈대아 우르와 하란을 떠나 약속의 땅 가나안의 중앙 산악 지대(세겜·벧엘·헤브론·브엘세바)를 종단하며 여호와의 이름을 부른 여정입니다.',
    viewBox: '0 0 700 440', // Full Fertile Crescent + Canaan
    mapMode: 'crescent',
    episodes: [
      {
        id: 'ab-1',
        stepNum: 1,
        title: '소명과 가나안 입성',
        ref: '창세기 12:1–5',
        fromLoc: 'ur_haran',
        toLoc: 'shechem',
        distanceKm: 1850,
        travelDays: '약 3~4개월 (대상 행렬)',
        directionText: '유프라테스강을 따라 북서진 후 남하 (비옥한 초승달 경로)',
        elevationStart: 40,
        elevationEnd: 550,
        terrainTag: '강변 평야 → 중앙 산악 분지',
        scripture: [
          {
            verse: '12:1',
            text: '여호와께서 아브람에게 이르시되 너는 너의 고향과 친척과 아비의 집을 떠나 내가 네게 보여 줄 땅으로 가라',
            highlights: ['고향', '보여 줄 땅']
          },
          {
            verse: '12:4–5',
            text: '아브람이 하란을 떠날 때에 칠십오 세였더라 … 마침내 가나안 땅에 들어갔더라',
            highlights: ['하란', '떠날 때에', '가나안 땅', '들어갔더라']
          },
          {
            verse: '12:6–7',
            text: '아브람이 그 땅을 지나 세겜 땅 모레 상수리나무에 이르니 … 그 곳에서 여호와께 제단을 쌓았더라',
            highlights: ['세겜 땅', '모레 상수리나무', '제단을 쌓았더라']
          }
        ],
        geoContext: '우르에서 가나안까지는 직선거리로 약 800km이지만, 가운데 아라비아 사막을 횡단할 수 없어 유프라테스강을 따라 북쪽 하란을 거치는 약 1,850km의 ‘비옥한 초승달(Fertile Crescent)’ 우회로를 따라 이동했습니다. 세겜은 가나안 중앙 산악 지대의 한복판(에발산과 그리심산 사이)에 위치한 동서남북 교통의 요충지입니다.',
        spiritualInsight: '문명과 풍요의 중심지였던 메소포타미아(우르·하란)를 뒤로하고, 비에만 의존해야 하는 낯선 가나안 산지로 들어선 첫 제단의 자리입니다.',
        reflectionQ: '내가 익숙한 안전지대(우르·하란)를 떠나 하나님의 말씀만 의지해 발을 내디뎌야 할 ‘세겜’은 어디인가요?'
      },
      {
        id: 'ab-2',
        stepNum: 2,
        title: '벧엘의 제단과 네겝으로의 이동',
        ref: '창세기 12:8–9',
        fromLoc: 'shechem',
        toLoc: 'bethel',
        distanceKm: 32,
        travelDays: '도보 약 1~2일',
        directionText: '중앙 산악 능선 도로(족장들의 길)를 따라 남하',
        elevationStart: 550,
        elevationEnd: 880,
        terrainTag: '산악 분지 → 해발 880m 고지대 능선',
        scripture: [
          {
            verse: '12:8',
            text: '거기서 벧엘 동쪽 산으로 옮겨 장막을 치니 서쪽은 벧엘이요 동쪽은 아이라 그가 그 곳에서 여호와께 제단을 쌓고 여호와의 이름을 부르더니',
            highlights: ['벧엘 동쪽 산', '서쪽은 벧엘', '동쪽은 아이', '제단을 쌓고']
          },
          {
            verse: '12:9',
            text: '점점 남방(네겝)으로 옮겨갔더라',
            highlights: ['남방(네겝)', '옮겨갔더라']
          }
        ],
        geoContext: '세겜에서 남쪽으로 이어지는 해발 800m 이상의 산등성이 길은 훗날 ‘족장들의 길(Route of the Patriarchs)’로 불립니다. 벧엘과 아이 사이의 산지는 서쪽 지중해와 동쪽 요단 계곡이 한눈에 내려다보이는 천연 전망대입니다.',
        spiritualInsight: '가나안 원주민들의 성읍 한가운데가 아니라, 벧엘과 아이 사이의 빈 산지에 장막을 치고 먼저 제단을 쌓음으로써 약속의 땅을 영적으로 유업으로 받았습니다.',
        reflectionQ: '삶의 자리를 옮길 때마다 내가 가장 먼저 세워야 할 ‘영적 제단(예배의 습관)’은 무엇입니까?'
      },
      {
        id: 'ab-3',
        stepNum: 3,
        title: '기근으로 인한 애굽 하행과 벧엘 귀환',
        ref: '창세기 12:10 ~ 13:4',
        fromLoc: 'bethel',
        toLoc: 'egypt',
        returnLoc: 'bethel',
        distanceKm: 420,
        travelDays: '편도 도보 약 15~20일',
        directionText: '네겝 사막과 해변길(Via Maris)을 거쳐 나일 삼각주로 내려갔다가 다시 올라옴',
        elevationStart: 880,
        elevationEnd: 15,
        terrainTag: '고산 지대 → 반사막 네겝 → 나일강 저지대 평야',
        scripture: [
          {
            verse: '12:10',
            text: '그 땅에 기근이 들었으므로 아브람이 애굽에 거류하려고 그리로 내려갔으니 이는 그 땅에 기근이 심하였음이라',
            highlights: ['기근', '애굽', '내려갔으니']
          },
          {
            verse: '13:1, 3–4',
            text: '아브람이 애굽에서부터 … 네겝으로 올라가니 … 네겝에서부터 길을 떠나 벧엘에 이르며 … 그가 처음으로 제단을 쌓은 곳이라 그가 거기서 여호와의 이름을 불렀더라',
            highlights: ['애굽에서부터', '네겝으로 올라가니', '벧엘에 이르며', '처음으로 제단을 쌓은 곳']
          }
        ],
        geoContext: '성경에서 애굽으로 갈 때는 항상 ‘내려간다(go down)’고 표현하고, 가나안 산지로 돌아올 때는 ‘올라간다(go up)’고 기록합니다. 이는 단순한 남북 방향이 아니라 해발 880m의 벧엘 산지에서 해수면 높이의 나일 삼각주로 내려가는 실제 고도 차이를 정확히 반영한 표현입니다.',
        spiritualInsight: '기근이라는 현실적 위기 앞에 약속의 땅을 떠나 애굽으로 ‘내려갔던’ 실패 이후, 다시 처음 제단을 쌓았던 벧엘로 ‘올라가’ 여호와의 이름을 부르며 신앙을 회복합니다.',
        reflectionQ: '현실의 기근 때문에 타협하며 내려갔던 자리에서 다시 돌아와 회복해야 할 나의 ‘처음 제단(벧엘)’은 어디인가요?'
      },
      {
        id: 'ab-4',
        stepNum: 4,
        title: '롯과의 분가와 헤브론 마므레 정착',
        ref: '창세기 13:8–18',
        fromLoc: 'bethel',
        toLoc: 'hebron',
        distanceKm: 50,
        travelDays: '도보 약 2일',
        directionText: '롯은 동쪽 요단 들판(저지대)으로, 아브람은 남쪽 헤브론 산지(고지대)로 이동',
        elevationStart: 880,
        elevationEnd: 930,
        terrainTag: '요단 저지대(-390m) 대비 유다 산지 최고봉(930m)',
        scripture: [
          {
            verse: '13:10–11',
            text: '이에 롯이 눈을 들어 요단 지역을 바라보니 소알까지 온 땅에 물이 넉넉하니 … 롯이 동쪽으로 옮기니라',
            highlights: ['눈을 들어', '요단 지역', '물이 넉넉하니', '동쪽으로']
          },
          {
            verse: '13:14, 18',
            text: '여호와께서 아브람에게 이르시되 너는 눈을 들어 너 있는 곳에서 북쪽과 남쪽 그리고 동쪽과 서쪽을 바라보라 … 이에 아브람이 장막을 옮겨 헤브론에 있는 마므레 상수리 수풀에 이르러 거주하며 거기서 여호와를 위하여 제단을 쌓았더라',
            highlights: ['눈을 들어', '북쪽과 남쪽 그리고 동쪽과 서쪽', '헤브론', '마므레 상수리 수풀', '제단을 쌓았더라']
          }
        ],
        geoContext: '벧엘 동쪽 산에서 동쪽을 보면 해수면 아래 390m까지 급격히 떨어지는 비옥한 요단 저지대가 보입니다. 롯은 눈에 보이는 물이 넉넉한 저지대(소돔 방향)를 택했고, 아브람은 해발 930m의 거친 산지인 헤브론으로 옮겨 오랫동안 정착했습니다.',
        spiritualInsight: '롯의 시선(‘눈을 들어 물이 넉넉한 땅을 봄’)과 아브람에게 주신 하나님의 시선(‘눈을 들어 동서남북 약속의 땅을 바라보라’)이 지형적 고도와 방향 속에서 극명하게 대비됩니다.',
        reflectionQ: '나는 당장 눈에 보기에 물이 넉넉한 ‘소돔 들판’을 구하고 있나요, 아니면 하나님이 보여주시는 ‘헤브론의 약속’을 바라보고 있나요?'
      },
      {
        id: 'ab-5',
        stepNum: 5,
        title: '브엘세바 언약과 모리아산의 순종',
        ref: '창세기 21:31–33, 22:1–14',
        fromLoc: 'beersheba',
        toLoc: 'moriah',
        distanceKm: 75,
        travelDays: '도보 정확히 3일 길 (창 22:4)',
        directionText: '남방 브엘세바 분지에서 중앙 산악 능선을 따라 예루살렘(모리아산)으로 북상',
        elevationStart: 280,
        elevationEnd: 740,
        terrainTag: '네겝 북단 분지(280m) → 유다 능선 오르막 → 모리아산(740m)',
        scripture: [
          {
            verse: '21:33',
            text: '아브라함이 브엘세바에 에셀나무를 심고 거기서 영생하시는 하나님 여호와의 이름을 불렀으며',
            highlights: ['브엘세바', '에셀나무', '영생하시는 하나님']
          },
          {
            verse: '22:2, 4',
            text: '네 아들 네 사랑하는 독자 이삭을 데리고 모리아 땅으로 가서 내가 네게 일러 준 한 산 거기서 그를 번제로 드리라 … 제삼일에 아브라함이 눈을 들어 그 곳을 멀리 바라본지라',
            highlights: ['모리아 땅', '제삼일에', '눈을 들어', '멀리 바라본지라']
          },
          {
            verse: '22:14',
            text: '아브라함이 그 땅 이름을 여호와 이레라 하였으므로 오늘날까지 사람들이 이르기를 여호와의 산에서 준비되리라 하더라',
            highlights: ['여호와 이레', '여호와의 산에서 준비되리라']
          }
        ],
        geoContext: '브엘세바(해발 280m)에서 모리아산(훗날 예루살렘 성전산, 해발 740m)까지는 헤브론과 베들레헴을 거치는 산악 능선 길로 약 75km입니다. 성인 남성과 나귀가 하루 약 25km씩 걸으면 본문 기록 그대로 정확히 ‘제삼일(3일째)’에 모리아산이 눈에 들어오는 지점에 도착합니다.',
        spiritualInsight: '3일 동안 침묵 속에 오르막 산길을 걸으며 아들을 바치기까지 순종한 모리아산은, 훗날 솔로몬 성전이 세워지고 예수 그리스도께서 대속의 십자가를 지신 구속사의 핵심 장소가 됩니다.',
        reflectionQ: '이해할 수 없는 말씀 앞에서도 묵묵히 걸어가야 할 나의 ‘삼일 길’ 끝에는 어떤 ‘여호와 이레’의 은혜가 예비되어 있을까요?'
      }
    ]
  },
  {
    id: 'isaac',
    name: '이삭 (Isaac)',
    chapters: '창세기 26장',
    subtitle: '우물을 파며 누리는 평화와 번성',
    themeColor: 'emerald',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    accentHex: '#059669',
    summary: '가나안 땅을 한 번도 떠나지 않고 그랄 골짜기와 브엘세바 네겝 지역에서 우물을 파며 양보와 화평으로 언약을 계승한 여정입니다.',
    viewBox: '120 160 320 260', // Zoomed into Southern Canaan / Negev
    mapMode: 'canaan',
    episodes: [
      {
        id: 'is-1',
        stepNum: 1,
        title: '브엘라해로이에서 그랄에 머묾',
        ref: '창세기 25:11, 26:1–6',
        fromLoc: 'beer_lahai_roi',
        toLoc: 'gerar',
        distanceKm: 65,
        travelDays: '도보 약 2~3일',
        directionText: '네겝 남단 브엘라해로이에서 애굽으로 내려가는 길목인 그랄 평야로 북서진',
        elevationStart: 380,
        elevationEnd: 160,
        terrainTag: '네겝 사막 오아시스 → 블레셋 해안 접경 비옥한 평야',
        scripture: [
          {
            verse: '26:1–2',
            text: '아브라함 때에 첫 흉년이 들었더니 그 땅에 또 흉년이 들매 이삭이 그랄로 가서 블레셋 왕 아비멜렉에게 이르렀더니 여호와께서 이삭에게 나타나 이르시되 애굽으로 내려가지 말고 내가 네게 지시하는 땅에 거주하라',
            highlights: ['흉년', '그랄', '애굽으로 내려가지 말고', '지시하는 땅에 거주하라']
          },
          {
            verse: '26:6, 12',
            text: '이삭이 그랄에 거주하였더니 … 이삭이 그 땅에서 농사하여 그 해에 백 배나 얻었고 여호와께서 복을 주시므로',
            highlights: ['그랄에 거주하였더니', '농사하여', '백 배나 얻었고']
          }
        ],
        geoContext: '그랄은 네겝 사막과 지중해 해안 평야가 만나는 비옥한 완충 지대로, 애굽으로 내려가는 길목에 위치합니다. 아버지 아브라함은 흉년 때 애굽까지 내려갔으나, 이삭은 하나님의 말씀에 순종해 가나안 남서쪽 경계인 그랄에서 멈추어 백 배의 결실을 거두었습니다.',
        spiritualInsight: '흉년의 때에 세상적 방법(애굽 하행)을 따르지 않고 약속의 땅 경계 안에 머무는 순종이 하늘의 백 배 축복을 여는 통로가 됩니다.',
        reflectionQ: '위기의 순간에 애굽으로 내려가지 않고 말씀이 지시하는 자리에서 인내하며 심어야 할 씨앗은 무엇인가요?'
      },
      {
        id: 'is-2',
        stepNum: 2,
        title: '그랄 골짜기의 우물 논쟁과 르호봇',
        ref: '창세기 26:17–22',
        fromLoc: 'gerar',
        toLoc: 'rehoboth',
        distanceKm: 28,
        travelDays: '단거리 이동 (우물 간 수십 km)',
        directionText: '그랄 와디(골짜기)를 따라 에섹 → 싯나 → 르호봇으로 남동진',
        elevationStart: 160,
        elevationEnd: 290,
        terrainTag: '건천(와디) 골짜기 지하수맥 지대',
        scripture: [
          {
            verse: '26:19–21',
            text: '이삭의 종들이 골짜기를 파서 샘 근원을 얻었더니 그랄 목자들이 이삭의 목자와 다투어 … 이름을 에섹이라 하였으며 또 다른 우물을 팠더니 그들이 또 다투므로 그 이름을 싯나라 하였으며',
            highlights: ['골짜기를 파서', '샘 근원', '에섹(다툼)', '싯나(대적함)']
          },
          {
            verse: '26:22',
            text: '이삭이 거기서 옮겨 다른 우물을 팠더니 그들이 다투지 아니하였으므로 그 이름을 르호봇이라 하여 이르되 이제는 여호와께서 우리를 위하여 넓게 하셨으니 이 땅에서 우리가 번성하리로다 하였더라',
            highlights: ['거기서 옮겨', '다투지 아니하였으므로', '르호봇(넓은 곳)', '번성하리로다']
          }
        ],
        geoContext: '연강수량이 200mm 미만인 네겝 지역에서 ‘샘 근원(살아 솟는 지하수 우물)’은 생존과 직결된 최고의 재산이었습니다. 이삭은 힘으로 맞서 싸울 수 있었음에도 우물을 양보하며 점차 내륙 남쪽인 르호봇으로 물러났습니다.',
        spiritualInsight: '다툼(에섹)과 대적함(싯나)에 맞서 싸우지 않고 양보하며 물러선 자에게 하나님께서는 다툼이 없는 넓은 땅(르호봇)을 허락하십니다.',
        reflectionQ: '내 삶에서 억울한 다툼(에섹·싯나)을 피하고 온유함으로 양보할 때 하나님이 열어주실 ‘르호봇’을 신뢰하고 있나요?'
      },
      {
        id: 'is-3',
        stepNum: 3,
        title: '브엘세바 귀환과 세바의 우물 언약',
        ref: '창세기 26:23–33',
        fromLoc: 'rehoboth',
        toLoc: 'beersheba',
        distanceKm: 25,
        travelDays: '도보 약 1일',
        directionText: '르호봇에서 동북쪽 브엘세바 분지로 올라감',
        elevationStart: 290,
        elevationEnd: 280,
        terrainTag: '네겝 중심 분지 및 고대 우물터',
        scripture: [
          {
            verse: '26:23–25',
            text: '이삭이 거기서부터 브엘세바로 올라갔더니 그 밤에 여호와께서 그에게 나타나 이르시되 나는 네 아버지 아브라함의 하나님이니 두려워하지 말라 … 이삭이 그 곳에 제단을 쌓고 여호와의 이름을 부르고 거기 장막을 쳤더니',
            highlights: ['브엘세바로 올라갔더니', '두려워하지 말라', '제단을 쌓고', '장막을 쳤더니']
          },
          {
            verse: '26:32–33',
            text: '그 날에 이삭의 종들이 자기들이 판 우물에 대하여 이삭에게 와서 알리어 이르되 우리가 물을 얻었나이다 하매 그가 그 이름을 세바라 한지라 그러므로 그 성읍 이름이 오늘까지 브엘세바더라',
            highlights: ['물을 얻었나이다', '세바(맹세/일곱)', '브엘세바']
          }
        ],
        geoContext: '브엘세바는 가나안 땅의 최남단 경계(‘단에서 브엘세바까지’)이자 네겝 교통로의 중심지입니다. 이삭은 이곳에서 제단과 장막과 우물을 모두 회복하고, 자신을 쫓아냈던 아비멜렉과 평화 조약을 맺었습니다.',
        spiritualInsight: '먼저 제단을 쌓고 하나님의 이름을 부를 때, 원수까지도 찾아와 화친을 청하며 마르지 않는 생수의 우물(브엘세바)이 터져 나옵니다.',
        reflectionQ: '내 삶의 우선순위가 ‘우물(생업)’보다 ‘제단(예배)’에 놓여 있는지 돌아봅시다.'
      }
    ]
  },
  {
    id: 'jacob',
    name: '야곱 (Jacob)',
    chapters: '창세기 28장 ~ 35장',
    subtitle: '도피자의 돌베개에서 이스라엘의 제단까지',
    themeColor: 'indigo',
    badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    accentHex: '#4f46e5',
    summary: '브엘세바에서 하란까지의 먼 도피 길과 20년 만의 귀환 여정(얍복강·세겜·벧엘)을 통해 ‘야곱’이 ‘이스라엘’로 빚어지는 연단의 경로입니다.',
    viewBox: '0 0 700 440',
    mapMode: 'crescent',
    episodes: [
      {
        id: 'ja-1',
        stepNum: 1,
        title: '브엘세바에서 벧엘로: 돌베개와 하늘 사닥다리',
        ref: '창세기 28:10–22',
        fromLoc: 'beersheba',
        toLoc: 'bethel',
        distanceKm: 90,
        travelDays: '도보 약 3일 (빠른 도피 걸음)',
        directionText: '브엘세바에서 중앙 산악 능선을 따라 북상',
        elevationStart: 280,
        elevationEnd: 880,
        terrainTag: '네겝 분지 → 유다 산지 능선 → 벧엘 바위 고원',
        scripture: [
          {
            verse: '28:10–11',
            text: '야곱이 브엘세바에서 떠나 하란으로 향하여 가더니 한 곳에 이르러는 해가 진지라 거기서 유숙하려고 그 곳의 한 돌을 가져다가 베개로 삼고 거기 누워 자더니',
            highlights: ['브엘세바에서 떠나', '하란으로', '한 돌을 가져다가 베개로 삼고']
          },
          {
            verse: '28:15, 19',
            text: '내가 너와 함께 있어 네가 어디로 가든지 너를 지키며 너를 이끌어 이 땅으로 돌아오게 할지라 … 그 곳 이름을 벧엘이라 하였더라 이 성의 옛 이름은 루스더라',
            highlights: ['어디로 가든지 너를 지키며', '돌아오게 할지라', '벧엘(하나님의 집)']
          }
        ],
        geoContext: '형 에서의 낯을 피해 빈손으로 도망친 야곱은 사흘 만에 약 90km의 험준한 산악 오르막을 걸어 해발 880m의 루스(벧엘) 석회암 고원에 쓰러져 잠들었습니다. 바로 그 거친 돌밭이 하늘 문이 열리는 ‘벧엘(하나님의 집)’이 되었습니다.',
        spiritualInsight: '가장 외롭고 두려운 도피의 밤, 돌베개를 베고 누운 황량한 광야가 하나님께서 찾아오시는 임재의 처소(벧엘)로 변합니다.',
        reflectionQ: '인생의 해가 지고 홀로 남겨진 것 같은 광야에서 나를 찾아오신 임마누엘의 하나님을 어떻게 경험했나요?'
      },
      {
        id: 'ja-2',
        stepNum: 2,
        title: '하란(밧단아람)에서의 20년과 탈출',
        ref: '창세기 29:1 ~ 31:23',
        fromLoc: 'bethel',
        toLoc: 'ur_haran',
        returnLoc: 'gilead',
        distanceKm: 750,
        travelDays: '도보 약 25~30일',
        directionText: '가나안 북상 → 다메섹 경유 → 유프라테스 상류 하란 도착 후 20년 뒤 길르앗 산지로 남하',
        elevationStart: 880,
        elevationEnd: 360,
        terrainTag: '가나안 산지 → 시리아 사막 가장자리 → 하란 평야 → 길르앗 산지(950m)',
        scripture: [
          {
            verse: '29:1',
            text: '야곱이 길을 떠나 동방 사람의 땅에 이르러 본즉 들에 우물이 있고',
            highlights: ['길을 떠나', '동방 사람의 땅(하란)', '우물']
          },
          {
            verse: '31:3, 21',
            text: '여호와께서 야곱에게 이르시되 네 조상의 땅 네 족속에게로 돌아가라 내가 너와 함께 있으리라 … 그가 그의 모든 소유를 이끌고 강(유프라테스)을 건너 길르앗 산을 향하여 도망한지라',
            highlights: ['조상의 땅', '돌아가라', '강을 건너', '길르앗 산을 향하여']
          }
        ],
        geoContext: '하란에서 가나안으로 돌아올 때 야곱은 유프라테스강(‘그 강’)을 건너 요단강 동편의 고원 지대인 길르앗 산지(해발 약 950m)로 내려왔습니다. 외삼촌 라반이 칠 일 길을 쫓아와 길르앗 산에서 미스바 언약을 맺었습니다.',
        spiritualInsight: '속이는 자였던 야곱이 라반 밑에서 20년간 더 큰 속임을 당하며 연단받은 뒤, 마침내 하나님의 때에 큰 떼를 이루어 약속의 땅으로 귀환합니다.',
        reflectionQ: '나의 모난 성품을 깎아내시기 위해 하나님이 허락하신 ‘하란의 20년’ 시간은 나에게 어떤 성숙을 남겼나요?'
      },
      {
        id: 'ja-3',
        stepNum: 3,
        title: '마하나임과 얍복강 브니엘의 씨름',
        ref: '창세기 32:1–32',
        fromLoc: 'gilead',
        toLoc: 'jabbok',
        distanceKm: 45,
        travelDays: '도보 약 2일',
        directionText: '길르앗 산지에서 요단 동편 지류인 얍복강 깊은 협곡으로 하강',
        elevationStart: 950,
        elevationEnd: -100,
        terrainTag: '길르앗 고원 → 가파른 얍복강 협곡(해수면 아래 100m)',
        scripture: [
          {
            verse: '32:2, 22',
            text: '야곱이 그들을 볼 때에 이르기를 이는 하나님의 군대라 하고 그 땅 이름을 마하나임이라 하였더라 … 밤에 일어나 두 아내와 두 여종과 열한 아들을 인도하여 얍복 나루를 건널새',
            highlights: ['마하나임(두 진영)', '얍복 나루를 건널새']
          },
          {
            verse: '32:28, 30',
            text: '네 이름을 다시는 야곱이라 부를 것이 아니요 이스라엘이라 부를 것이니 이는 네가 하나님과 및 사람들과 겨루어 이겼음이니라 … 그러므로 야곱이 그 곳 이름을 브니엘이라 하였으니',
            highlights: ['이스라엘', '브니엘(하나님의 얼굴)']
          }
        ],
        geoContext: '얍복강은 길르앗 산지를 동서로 깊게 가르고 요단강으로 흘러드는 급류 협곡입니다. 고도 차이가 1,000m에 달하는 깎아지른 협곡 바닥의 나루터에서 야곱은 가족을 먼저 건네보내고 홀로 남아 밤새 씨름했습니다.',
        spiritualInsight: '내 힘과 꾀(야곱)의 근원인 허벅지 관절이 위골되고 하나님만 붙들었을 때, 비로소 ‘이스라엘’이라는 새 이름과 브니엘의 아침 해가 떠오릅니다.',
        reflectionQ: '하나님 앞에서 내 고집과 인간적 술수가 꺾이고 ‘이스라엘’로 거듭난 나의 얍복 나루터는 어디인가요?'
      },
      {
        id: 'ja-4',
        stepNum: 4,
        title: '세겜을 지나 다시 벧엘로 올라감',
        ref: '창세기 33:17 ~ 35:15',
        fromLoc: 'jabbok',
        toLoc: 'bethel',
        distanceKm: 65,
        travelDays: '숙곳·세겜 체류 후 벧엘로 약 2일 등반',
        directionText: '요단강을 건너 세겜 분지에 머물다가 해발 880m 벧엘 산지로 올라감',
        elevationStart: -250,
        elevationEnd: 880,
        terrainTag: '요단 계곡 숙곳(-250m) → 세겜 분지(550m) → 벧엘 고지(880m)',
        scripture: [
          {
            verse: '35:1–3',
            text: '하나님이 야곱에게 이르시되 일어나 벧엘로 올라가서 거기 거주하며 네가 네 형 에서의 낯을 피하여 도망하던 때에 네게 나타났던 하나님께 거기서 제단을 쌓으라 … 우리가 일어나 벧엘로 올라가자',
            highlights: ['일어나 벧엘로 올라가서', '제단을 쌓으라', '벧엘로 올라가자']
          },
          {
            verse: '35:7',
            text: '그가 거기서 제단을 쌓고 그 곳을 엘벧엘이라 불렀으니 이는 그의 형의 낯을 피할 때에 하나님이 거기서 그에게 나타나셨음이더라',
            highlights: ['엘벧엘(벧엘의 하나님)']
          }
        ],
        geoContext: '얍복강 이후 야곱은 서원을 미루고 요단 계곡의 숙곳(해수면 아래 250m)과 세겜 분지(550m)의 안락한 평지에 주저앉았다가 디나 사건의 위기를 겪습니다. 그제야 이방 신상을 세겜 상수리나무 아래 묻고 해발 880m의 벧엘 산지로 ‘올라가’ 서원을 이행했습니다.',
        spiritualInsight: '하나님이 부르신 목표 지점(벧엘)까지 가지 않고 중간 지대(숙곳·세겜)에 안주할 때 영적 위기가 찾아오며, 우상을 버리고 벧엘로 올라갈 때 비로소 참된 평안이 임합니다.',
        reflectionQ: '내가 지금 온전한 헌신의 자리(벧엘)까지 올라가지 못하고 타협하며 머뭇거리고 있는 ‘숙곳과 세겜’은 무엇인가요?'
      }
    ]
  },
  {
    id: 'joseph',
    name: '요셉 (Joseph)',
    chapters: '창세기 37장 ~ 50장',
    subtitle: '구덩이에서 애굽 총리로, 섭리의 대로',
    themeColor: 'sky',
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
    accentHex: '#0284c7',
    summary: '헤브론에서 도단으로, 대상의 손에 팔려 국제 해변길(Via Maris)을 따라 애굽으로 내려갔으나 마침내 온 가족을 구원하고 가나안 귀환을 유언한 섭리의 여정입니다.',
    viewBox: '110 150 340 270',
    mapMode: 'canaan',
    episodes: [
      {
        id: 'jo-1',
        stepNum: 1,
        title: '헤브론에서 세겜을 거쳐 도단 구덩이까지',
        ref: '창세기 37:12–24',
        fromLoc: 'hebron',
        toLoc: 'dothan',
        distanceKm: 105,
        travelDays: '도보 약 4~5일',
        directionText: '헤브론 산지에서 세겜(80km)을 거쳐 북쪽 도단 평야(추가 25km)까지 북상',
        elevationStart: 930,
        elevationEnd: 250,
        terrainTag: '남부 유다 산지 → 중앙 세겜 분지 → 북부 도단 구릉 평야',
        scripture: [
          {
            verse: '37:14',
            text: '이스라엘이 그에게 이르되 가서 네 형들과 양 떼가 다 잘 있는지를 보고 돌아와 내게 말하라 하고 그를 헤브론 골짜기에서 보내매 그가 세겜으로 가니라',
            highlights: ['헤브론 골짜기', '세겜으로 가니라']
          },
          {
            verse: '37:17, 24',
            text: '그 사람이 이르되 그들이 여기서 떠났느니라 내가 들으니 그들이 도단으로 가자 하더라 하니라 요셉이 형들의 뒤를 따라가서 도단에서 그들을 만난지라 … 그를 잡아 구덩이에 던지니 그 구덩이는 빈 것이라 그 속에 물이 없었더라',
            highlights: ['도단으로 가자', '도단에서 그들을 만난지라', '구덩이에 던지니']
          }
        ],
        geoContext: '17세 소년 요셉은 아버지의 심부름으로 헤브론에서 세겜까지 약 80km의 험한 산길을 걸어갔고, 형들을 찾지 못하자 포기하지 않고 북쪽으로 25km를 더 걸어 도단까지 갔습니다. 도단은 사마리아 산지와 이스르엘 평야를 잇는 고개로서, 국제 무역상들이 지나가는 핵심 통로였습니다.',
        spiritualInsight: '만약 형들이 세겜에 있었다면 그곳은 산악 내부라 대상 행렬을 만나기 어려웠을 것입니다. 형들이 국제 무역로가 지나는 ‘도단’으로 이동한 것조차 요셉을 애굽으로 보내시려는 하나님의 정교한 섭리였습니다.',
        reflectionQ: '나의 끝까지 순종한 걸음이 오히려 억울한 ‘도단의 빈 구덩이’로 이어졌을 때, 그 자리조차 지나가는 무역로로 예비하신 하나님을 신뢰할 수 있나요?'
      },
      {
        id: 'jo-2',
        stepNum: 2,
        title: '도단에서 해변길을 따라 애굽으로 팔려감',
        ref: '창세기 37:25–28, 39:1',
        fromLoc: 'dothan',
        toLoc: 'egypt',
        distanceKm: 450,
        travelDays: '대상 행렬로 약 20일',
        directionText: '도단 고개에서 해변길(Via Maris)로 합류하여 블레셋 해안과 시나이 북단을 거쳐 애굽으로 남서진',
        elevationStart: 250,
        elevationEnd: 15,
        terrainTag: '도단 구릉 → 샤론 해안 평야 → 해변길 사구 → 나일 삼각주',
        scripture: [
          {
            verse: '37:25, 28',
            text: '보니 이스마엘 사람들이 길르앗에서 오는데 그 낙타들에 향품과 유향과 몰약을 싣고 애굽으로 내려가는지라 … 그들이 요셉을 구덩이에서 끌어올리고 은 이십에 그를 이스마엘 사람들에게 팔매 그 상인들이 요셉을 데리고 애굽으로 갔더라',
            highlights: ['길르앗에서 오는데', '애굽으로 내려가는지라', '요셉을 데리고 애굽으로 갔더라']
          },
          {
            verse: '39:1–2',
            text: '요셉이 이끌려 애굽에 내려가매 … 여호와께서 요셉과 함께 하시므로 그가 형통한 자가 되어 그의 주인 애굽 사람의 집에 있으니',
            highlights: ['애굽에 내려가매', '여호와께서 요셉과 함께 하시므로', '형통한 자']
          }
        ],
        geoContext: '길르앗에서 온 이스마엘 대상들은 요단강을 건너 벧산과 도단 고개를 통과해 지중해 해안 평야의 ‘해변길(Via Maris)’로 접어들어 애굽으로 내려갔습니다. 노예로 끌려간 가장 비참한 무역로였으나, 여호와께서 그 걸음마다 함께하셨습니다.',
        spiritualInsight: '세상 눈에는 노예로 팔려 내려가는 비극의 길이지만, 하나님 편에서는 온 가족과 열방을 기근에서 구원하기 위해 총리를 먼저 파송하시는 구원의 선발대 경로였습니다(창 45:5).',
        reflectionQ: '진정한 ‘형통’이란 환경이 평탄한 것이 아니라, 구덩이와 감옥에서도 ‘여호와께서 함께하시는 것’임을 삶으로 고백하고 있나요?'
      },
      {
        id: 'jo-3',
        stepNum: 3,
        title: '야곱 가족의 애굽 이주(고센 땅)와 가나안 장례 행렬',
        ref: '창세기 46:1–7, 50:7–14',
        fromLoc: 'beersheba',
        toLoc: 'egypt',
        returnLoc: 'hebron',
        distanceKm: 350,
        travelDays: '가족 수레 행렬 약 15일',
        directionText: '브엘세바에서 언약 확인 후 애굽 고센 땅으로 이주, 훗날 야곱의 유해를 모시고 헤브론 막벨라 굴로 귀환',
        elevationStart: 280,
        elevationEnd: 930,
        terrainTag: '브엘세바 분지 → 고센 나일 동부 삼각주(15m) → 헤브론 산지(930m)',
        scripture: [
          {
            verse: '46:1, 3–4',
            text: '이스라엘이 모든 소유를 이끌고 떠나 브엘세바에 이르러 그의 아버지 이삭의 하나님께 희생제사를 드리니 … 나는 하나님이라 네 아버지의 하나님이니 애굽으로 내려가기를 두려워하지 말라 내가 거기서 너로 큰 민족을 이루게 하리라 내가 너와 함께 애굽으로 내려가겠고 반드시 너를 인도하여 다시 올라오게 할 것이며',
            highlights: ['브엘세바에 이르러', '애굽으로 내려가기를 두려워하지 말라', '함께 애굽으로 내려가겠고', '다시 올라오게 할 것이며']
          },
          {
            verse: '50:13, 25',
            text: '그의 아들들이 그를 가나안 땅으로 메어다가 마므레 앞 막벨라 밭 굴에 장사하였으니 … 요셉이 또 이스라엘 자손에게 맹세시켜 이르기를 하나님이 반드시 당신들을 돌보시리니 당신들은 여기서 내 해골을 메고 올라가겠다 하라 하였더라',
            highlights: ['가나안 땅으로 메어다가', '막벨라 밭 굴', '내 해골을 메고 올라가겠다']
          }
        ],
        geoContext: '가나안 최남단 경계인 브엘세바에서 야곱은 애굽으로 떠나기 전 마지막 제사를 드렸고, 하나님으로부터 “함께 내려가겠고 반드시 다시 올라오게 하리라”는 확증을 받았습니다. 고센 땅은 나일 삼각주 동북부로 가나안과 가장 가까우며 목축에 최적화된 땅이었습니다.',
        spiritualInsight: '창세기는 애굽의 화려한 피라미드가 아니라, 헤브론 막벨라 굴에 묻힌 야곱과 ‘내 해골을 메고 가나안으로 올라가라’는 요셉의 유언으로 끝을 맺으며 출애굽의 소망을 예비합니다.',
        reflectionQ: '비록 이 땅(애굽)에서 살아가고 있을지라도, 내 마음과 유언이 향하고 있는 영원한 약속의 땅은 어디인가요?'
      }
    ]
  }
];

// --- MAP COORDINATES FOR LOCATIONS ---
const LOCATIONS = {
  ur_haran: {
    id: 'ur_haran',
    name: '하란 (우르 경유)',
    subName: '밧단아람 / 메소포타미아',
    x: 480,
    y: 58,
    elevation: 360,
    desc: '유프라테스강 상류의 무역 중심지. 아브라함이 부르심을 받고 떠난 곳이자 야곱이 20년간 머문 곳.'
  },
  gilead: {
    id: 'gilead',
    name: '길르앗 산지',
    subName: '미스바 언약터',
    x: 325,
    y: 215,
    elevation: 950,
    desc: '요단강 동편의 울창한 고원 산지. 야곱이 라반과 언약의 돌무더기를 세운 곳.'
  },
  jabbok: {
    id: 'jabbok',
    name: '얍복강 (브니엘)',
    subName: '마하나임 인근 협곡',
    x: 318,
    y: 245,
    elevation: -100,
    desc: '요단강 동편으로 흘러드는 깊은 협곡의 강. 야곱이 천사와 씨름하여 이스라엘이라는 이름을 얻은 곳.'
  },
  dothan: {
    id: 'dothan',
    name: '도단',
    subName: '국제 해변길 연결 고개',
    x: 282,
    y: 222,
    elevation: 250,
    desc: '사마리아 북쪽 평야와 해변길(Via Maris)이 만나는 목초지. 요셉이 구덩이에 던져지고 상인에게 팔린 곳.'
  },
  shechem: {
    id: 'shechem',
    name: '세겜',
    subName: '모레 상수리나무',
    x: 284,
    y: 248,
    elevation: 550,
    desc: '가나안 중앙 산지의 그리심산과 에발산 사이 분지. 아브라함이 가나안 첫 제단을 쌓은 곳.'
  },
  bethel: {
    id: 'bethel',
    name: '벧엘 (옛 이름 루스)',
    subName: '하나님의 집 · 해발 880m',
    x: 280,
    y: 274,
    elevation: 880,
    desc: '중앙 산악 능선 도로의 핵심 고지. 아브라함의 제단터이자 야곱이 돌베개를 베고 하늘 사닥다리를 본 곳.'
  },
  moriah: {
    id: 'moriah',
    name: '모리아산 (예루살렘)',
    subName: '여호와 이레 · 해발 740m',
    x: 278,
    y: 292,
    elevation: 740,
    desc: '아브라함이 독자 이삭을 번제로 드리려 했던 산. 훗날 솔로몬 성전과 골고다 언덕이 세워진 구속사의 중심.'
  },
  hebron: {
    id: 'hebron',
    name: '헤브론 (마므레)',
    subName: '막벨라 굴 · 해발 930m',
    x: 272,
    y: 314,
    elevation: 930,
    desc: '유다 산지에서 가장 높은 성읍. 아브라함·이삭·야곱 3대 족장과 아내들이 묻힌 막벨라 굴이 있는 언약의 본거지.'
  },
  gerar: {
    id: 'gerar',
    name: '그랄',
    subName: '블레셋 접경 평야',
    x: 232,
    y: 325,
    elevation: 160,
    desc: '해안 평야와 네겝 사막 사이의 비옥한 골짜기. 이삭이 흉년 때 농사하여 백 배의 결실을 얻은 곳.'
  },
  beersheba: {
    id: 'beersheba',
    name: '브엘세바',
    subName: '맹세의 우물 · 네겝 중심',
    x: 256,
    y: 342,
    elevation: 280,
    desc: '가나안 최남단 경계이자 네겝의 관문. 아브라함이 에셀나무를 심고 이삭과 야곱이 우물과 제단을 세운 곳.'
  },
  rehoboth: {
    id: 'rehoboth',
    name: '르호봇',
    subName: '넓은 곳 (네겝 우물)',
    x: 240,
    y: 360,
    elevation: 290,
    desc: '이삭이 에섹과 싯나의 우물 다툼을 양보하고 내려와 마침내 다툼 없이 판 넓은 우물.'
  },
  beer_lahai_roi: {
    id: 'beer_lahai_roi',
    name: '브엘라해로이',
    subName: '살아 계셔서 나를 보시는 이의 우물',
    x: 226,
    y: 382,
    elevation: 380,
    desc: '네겝 남단 광야의 샘. 하갈이 여호와의 사자를 만났고 이삭이 리브가를 맞이하며 거주했던 곳.'
  },
  egypt: {
    id: 'egypt',
    name: '애굽 (고센 땅)',
    subName: '나일강 동부 삼각주',
    x: 155,
    y: 378,
    elevation: 15,
    desc: '나일강 하류의 비옥한 목초지. 아브라함이 기근 때 내려갔고, 요셉이 총리가 되어 이스라엘 70인이 이주해 민족을 이룬 곳.'
  }
};

export default function App() {
  const [selectedPatriarchId, setSelectedPatriarchId] = useState('abraham');
  const [selectedEpisodeIndex, setSelectedEpisodeIndex] = useState(0);
  const [userNotes, setUserNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('bible_atlas_patriarchs_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [completedEpisodes, setCompletedEpisodes] = useState(() => {
    try {
      const saved = localStorage.getItem('bible_atlas_patriarchs_done');
      return saved ? JSON.parse(saved) : { 'ab-1': true };
    } catch {
      return { 'ab-1': true };
    }
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [mapZoomMode, setMapZoomMode] = useState('auto'); // 'auto', 'crescent', 'canaan'
  const [activeLocModal, setActiveLocModal] = useState(null);
  const [copiedNotion, setCopiedNotion] = useState(false);
  const [showNotionPreview, setShowNotionPreview] = useState(false);
  const [showDeployGuide, setShowDeployGuide] = useState(false);
  const [showSeriesDrawer, setShowSeriesDrawer] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);

  // Sync URL Query Parameters on Initial Load (?p=jacob&step=2)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const pParam = params.get('p');
      const stepParam = params.get('step');
      if (pParam && PATRIARCHS.some((item) => item.id === pParam)) {
        setSelectedPatriarchId(pParam);
        const foundP = PATRIARCHS.find((item) => item.id === pParam);
        if (stepParam && foundP) {
          const idx = parseInt(stepParam, 10) - 1;
          if (!Number.isNaN(idx) && idx >= 0 && idx < foundP.episodes.length) {
            setSelectedEpisodeIndex(idx);
          }
        }
      }
    } catch {
      // ignore inside restricted iframe
    }
  }, []);

  const currentPatriarch = useMemo(
    () => PATRIARCHS.find((p) => p.id === selectedPatriarchId) || PATRIARCHS[0],
    [selectedPatriarchId]
  );

  const currentEpisode = useMemo(
    () => currentPatriarch.episodes[selectedEpisodeIndex] || currentPatriarch.episodes[0],
    [currentPatriarch, selectedEpisodeIndex]
  );

  useEffect(() => {
    try {
      localStorage.setItem('bible_atlas_patriarchs_notes', JSON.stringify(userNotes));
    } catch {
      // ignore storage errors in restricted sandbox
    }
  }, [userNotes]);

  useEffect(() => {
    try {
      localStorage.setItem('bible_atlas_patriarchs_done', JSON.stringify(completedEpisodes));
    } catch {
      // ignore
    }
  }, [completedEpisodes]);

  const handleSelectPatriarch = (id) => {
    setSelectedPatriarchId(id);
    setSelectedEpisodeIndex(0);
    setActiveLocModal(null);
  };

  const toggleEpisodeComplete = (epId) => {
    setCompletedEpisodes((prev) => ({
      ...prev,
      [epId]: !prev[epId]
    }));
  };

  const handleNoteChange = (epId, text) => {
    setUserNotes((prev) => ({
      ...prev,
      [epId]: text
    }));
  };

  const handleShareCurrentStepUrl = () => {
    try {
      const baseUrl = window.location.origin + window.location.pathname;
      const shareUrl = `${baseUrl}?p=${currentPatriarch.id}&step=${currentEpisode.stepNum}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl);
      } else {
        const ta = document.createElement('textarea');
        ta.value = shareUrl;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2500);
    } catch {
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2500);
    }
  };

  // Determine effective SVG viewBox
  const effectiveViewBox = useMemo(() => {
    if (mapZoomMode === 'crescent') return '0 0 700 440';
    if (mapZoomMode === 'canaan') return '115 165 310 250';
    if (
      currentEpisode.fromLoc === 'ur_haran' ||
      currentEpisode.toLoc === 'ur_haran'
    ) {
      return '0 0 700 440';
    }
    return '115 165 310 250';
  }, [mapZoomMode, currentEpisode]);

  const fromPoint = LOCATIONS[currentEpisode.fromLoc];
  const toPoint = LOCATIONS[currentEpisode.toLoc];
  const returnPoint = currentEpisode.returnLoc ? LOCATIONS[currentEpisode.returnLoc] : null;

  // Build Notion Markdown Export text
  const generateNotionMarkdown = () => {
    const note = userNotes[currentEpisode.id] || '(묵상 기록을 여기에 작성하세요)';
    const versesMd = currentEpisode.scripture
      .map((s) => `> **창 ${s.verse}** ${s.text}`)
      .join('\n>\n');

    return `# 🗺️ [${currentPatriarch.name}] ${currentEpisode.stepNum}. ${currentEpisode.title} (${currentEpisode.ref})

- **이동 경로:** ${fromPoint?.name} (${currentEpisode.elevationStart}m) ➔ ${toPoint?.name} (${currentEpisode.elevationEnd}m)${returnPoint ? ` ➔ ${returnPoint.name}` : ''}
- **체감 거리 및 기간:** 약 ${currentEpisode.distanceKm}km (${currentEpisode.travelDays})
- **지형 및 방향 특징:** ${currentEpisode.directionText} | \`${currentEpisode.terrainTag}\`

### 📖 성경 본문 (개역개정)
${versesMd}

### 🧭 지리적·역사적 배경
- ${currentEpisode.geoContext}

### 💡 영적 교훈 및 묵상
- **핵심 메시지:** ${currentEpisode.spiritualInsight}
- **묵상 질문:** *${currentEpisode.reflectionQ}*
- **나의 묵상 기록:**
  ${note}
`;
  };

  const handleCopyNotion = () => {
    const md = generateNotionMarkdown();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(md);
      } else {
        const ta = document.createElement('textarea');
        ta.value = md;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopiedNotion(true);
      setTimeout(() => setCopiedNotion(false), 2500);
    } catch {
      setShowNotionPreview(true);
    }
  };

  // Total progress calculation
  const totalEpisodesCount = PATRIARCHS.reduce((acc, p) => acc + p.episodes.length, 0);
  const completedCount = Object.values(completedEpisodes).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalEpisodesCount) * 100);

  // Filter episodes if search query exists
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.trim().toLowerCase();
    const matches = [];
    PATRIARCHS.forEach((p) => {
      p.episodes.forEach((ep, idx) => {
        const inTitle = ep.title.toLowerCase().includes(q) || ep.ref.toLowerCase().includes(q);
        const inVerses = ep.scripture.some((s) => s.text.toLowerCase().includes(q));
        const inGeo = ep.geoContext.toLowerCase().includes(q);
        if (inTitle || inVerses || inGeo) {
          matches.push({ patriarch: p, episode: ep, index: idx });
        }
      });
    });
    return matches;
  }, [searchQuery]);

  // Helper to highlight keywords in verse text
  const renderHighlightedVerse = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text;
    const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escaped.join('|')})`, 'g');
    const parts = text.split(regex);
    return parts.map((part, idx) =>
      highlights.includes(part) ? (
        <span
          key={idx}
          className="px-1.5 py-0.5 mx-0.5 rounded font-semibold bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs"
        >
          {part}
        </span>
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  };

  // Elevation chart helper
  const renderElevationBar = () => {
    const startE = currentEpisode.elevationStart;
    const endE = currentEpisode.elevationEnd;
    const norm = (val) => Math.max(8, Math.min(95, ((val + 300) / 1300) * 100));
    const startH = norm(startE);
    const endH = norm(endE);
    const diff = endE - startE;

    return (
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-700">
            <Mountain className="w-4 h-4 text-amber-700" />
            <span>지형 고도 단면도 및 체감 거리</span>
          </div>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              diff > 100
                ? 'bg-rose-50 text-rose-700 border border-rose-200'
                : diff < -100
                ? 'bg-sky-50 text-sky-700 border border-sky-200'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            }`}
          >
            {diff > 100
              ? `▲ 산지 오르막 (+${diff}m)`
              : diff < -100
              ? `▼ 저지대 내리막 (${diff}m)`
              : '━ 평탄·완만한 능선 이동'}
          </span>
        </div>

        {/* SVG Elevation Profile */}
        <div className="relative h-24 w-full bg-white rounded-lg border border-stone-200 overflow-hidden px-4 pt-3 pb-2 flex flex-col justify-between">
          <svg viewBox="0 0 300 65" className="w-full h-14 overflow-visible">
            <defs>
              <linearGradient id="elevGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={currentPatriarch.accentHex} stopOpacity="0.35" />
                <stop offset="100%" stopColor={currentPatriarch.accentHex} stopOpacity="0.03" />
              </linearGradient>
            </defs>
            {/* Sea level reference line (0m) */}
            <line
              x1="15"
              y1={65 - norm(0) * 0.58}
              x2="285"
              y2={65 - norm(0) * 0.58}
              stroke="#94a3b8"
              strokeDasharray="3 3"
              strokeWidth="1"
            />
            <text x="18" y={62 - norm(0) * 0.58} fontSize="7" fill="#64748b">
              해수면(0m)
            </text>

            {/* Terrain Fill */}
            <path
              d={`M 25,60 L 25,${65 - startH * 0.58} C 110,${65 - startH * 0.58} 190,${
                65 - endH * 0.58
              } 275,${65 - endH * 0.58} L 275,60 Z`}
              fill="url(#elevGrad)"
            />
            {/* Terrain Stroke */}
            <path
              d={`M 25,${65 - startH * 0.58} C 110,${65 - startH * 0.58} 190,${
                65 - endH * 0.58
              } 275,${65 - endH * 0.58}`}
              fill="none"
              stroke={currentPatriarch.accentHex}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Start Node */}
            <circle
              cx="25"
              cy={65 - startH * 0.58}
              r="4.5"
              fill="#fff"
              stroke={currentPatriarch.accentHex}
              strokeWidth="2.5"
            />
            <text
              x="25"
              y={Math.max(10, 56 - startH * 0.58)}
              textAnchor="middle"
              fontSize="8.5"
              fontWeight="bold"
              fill="#334155"
            >
              {startE}m
            </text>
            {/* End Node */}
            <circle
              cx="275"
              cy={65 - endH * 0.58}
              r="4.5"
              fill={currentPatriarch.accentHex}
            />
            <text
              x="275"
              y={Math.max(10, 56 - endH * 0.58)}
              textAnchor="middle"
              fontSize="8.5"
              fontWeight="bold"
              fill="#334155"
            >
              {endE}m
            </text>
          </svg>

          <div className="flex items-center justify-between text-[11px] text-stone-600 font-medium border-t border-stone-100 pt-1">
            <span className="truncate max-w-[35%]">출발: {fromPoint?.name}</span>
            <span className="text-amber-800 font-semibold flex items-center gap-1">
              <Footprints className="w-3 h-3" /> 약 {currentEpisode.distanceKm}km ({currentEpisode.travelDays})
            </span>
            <span className="truncate max-w-[35%] text-right">도착: {toPoint?.name}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-800 font-sans selection:bg-amber-200">
      {/* NOTION STYLE TOP WORKSPACE BAR */}
      <header className="sticky top-0 z-30 bg-[#faf8f5]/95 backdrop-blur-md border-b border-stone-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Breadcrumb & Title */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-700 text-white flex items-center justify-center shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                <button
                  type="button"
                  onClick={() => setShowSeriesDrawer((prev) => !prev)}
                  className="hover:text-stone-900 underline decoration-stone-300 underline-offset-2 flex items-center gap-1 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-amber-700" />
                  <span>전권 시리즈 목차 (1~6권)</span>
                </button>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-amber-800 font-semibold">제1권: 창세기 족장시대</span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                <span>말씀을 읽으며 따라가는 족장들의 발걸음</span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 text-[11px] font-medium bg-stone-200/80 text-stone-700 rounded-md">
                  창세기 12장 ~ 50장
                </span>
              </h1>
            </div>
          </div>

          {/* Search & Progress & Platform Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="지명·구절 검색 (예: 벧엘, 얍복)..."
                className="pl-8 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-amber-600 w-40 sm:w-48"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-stone-400 hover:text-stone-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Study Progress Pill */}
            <div className="flex items-center gap-2 bg-white border border-stone-200 px-2.5 py-1.5 rounded-lg text-xs">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline text-stone-600 font-medium">진도</span>
              <span className="font-bold text-stone-900">
                {completedCount}/{totalEpisodesCount}
              </span>
              <div className="w-12 h-1.5 bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-600 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Share Direct Episode Link */}
            <button
              type="button"
              onClick={handleShareCurrentStepUrl}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 transition cursor-pointer"
              title="현재 본문 단락 공유 링크 복사"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-700" />
              <span>{sharedToast ? '링크 복사됨!' : '단락 링크 공유'}</span>
            </button>

            {/* Notion Template Export Button */}
            <button
              type="button"
              onClick={() => setShowNotionPreview((prev) => !prev)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 text-white hover:bg-stone-700 transition shadow-xs cursor-pointer"
            >
              <ScrollText className="w-3.5 h-3.5" />
              <span>노션 복사</span>
            </button>

            {/* GitHub + Vercel Deploy Guide Button */}
            <button
              type="button"
              onClick={() => setShowDeployGuide((prev) => !prev)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-700 text-white hover:bg-amber-600 transition shadow-xs cursor-pointer"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>GitHub·Vercel 배포 가이드</span>
            </button>
          </div>
        </div>

        {/* Search Dropdown Overlay */}
        {searchQuery.trim() !== '' && (
          <div className="max-w-7xl mx-auto mt-2 bg-white border border-stone-200 rounded-xl shadow-lg p-3 max-h-60 overflow-y-auto">
            <div className="text-xs font-semibold text-stone-500 mb-2">
              검색 결과 ({searchResults.length}건)
            </div>
            {searchResults.length === 0 ? (
              <div className="text-xs text-stone-500 py-2">
                일치하는 성경 본문이나 지명이 없습니다.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {searchResults.map(({ patriarch, episode, index }) => (
                  <button
                    key={episode.id}
                    type="button"
                    onClick={() => {
                      setSelectedPatriarchId(patriarch.id);
                      setSelectedEpisodeIndex(index);
                      setSearchQuery('');
                    }}
                    className="text-left p-2 rounded-lg border border-stone-100 hover:bg-amber-50/70 hover:border-amber-200 transition flex items-start justify-between gap-2"
                  >
                    <div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 mr-1.5">
                        {patriarch.name.split(' ')[0]}
                      </span>
                      <span className="text-xs font-bold text-stone-800">{episode.title}</span>
                      <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">
                        {episode.ref} · {episode.directionText}
                      </p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </header>

      {/* SERIES VOLUMES DRAWER (VOLUMES 1 TO 6 ROADMAP) */}
      {showSeriesDrawer && (
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-700" />
                <h3 className="text-sm font-bold text-stone-900">
                  말씀 중심 성경지도 플랫폼 전권 로드맵 (GitHub + Vercel 시리즈 구조)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSeriesDrawer(false)}
                className="text-xs text-stone-500 hover:text-stone-800"
              >
                닫기 ✕
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {SERIES_VOLUMES.map((v) => (
                <div
                  key={v.id}
                  className={`p-3 rounded-xl border flex flex-col justify-between ${
                    v.status === 'active'
                      ? 'bg-amber-50/70 border-amber-400'
                      : 'bg-stone-50/70 border-stone-200 opacity-80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          v.status === 'active'
                            ? 'bg-amber-700 text-white'
                            : 'bg-stone-200 text-stone-600'
                        }`}
                      >
                        {v.badge}
                      </span>
                      <span className="text-[11px] text-stone-400 font-mono">Vol.{v.vol}</span>
                    </div>
                    <div className="text-xs font-bold text-stone-900">{v.title}</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">{v.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* GITHUB + VERCEL DEPLOYMENT GUIDE MODAL / DRAWER */}
      {showDeployGuide && (
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <div className="bg-stone-900 text-stone-100 rounded-2xl p-5 shadow-xl border border-stone-700">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold">
                    방법 4: GitHub + Vercel 정식 웹사이트 배포 가이드 (평생 무료 · 자동 업데이트)
                  </h3>
                  <p className="text-xs text-stone-400">
                    제공된 ZIP 패키지(`bible_atlas_vercel_project.zip`)를 다운로드하여 3단계만 따라 하면 전용 도메인(`https://내사이트이름.vercel.app`)이 생성됩니다.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowDeployGuide(false)}
                className="px-3 py-1.5 rounded-lg text-xs bg-stone-800 text-stone-300 hover:text-white cursor-pointer"
              >
                닫기 ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs">
              <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-4">
                <div className="flex items-center gap-2 font-bold text-amber-400 mb-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center">
                    1
                  </span>
                  <span>ZIP 압축 해제 및 GitHub 저장소 생성</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  채팅창에 첨부된 <code className="text-amber-300">bible_atlas_vercel_project.zip</code> 파일을 다운로드해 압축을 풉니다. <strong>github.com</strong>에 로그인 후 우측 상단 <strong>New repository</strong>를 눌러 <code className="text-amber-300">bible-atlas</code> 저장소를 만들고, <strong>uploading an existing file</strong>을 클릭해 압축 푼 파일들을 마우스로 끌어다 놓은 뒤 <strong>Commit changes</strong>를 누릅니다.
                </p>
              </div>

              <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-4">
                <div className="flex items-center gap-2 font-bold text-amber-400 mb-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center">
                    2
                  </span>
                  <span>Vercel 연결 및 1분 자동 배포</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  <strong>vercel.com</strong>에 접속해 <strong>Continue with GitHub</strong>로 로그인합니다. <strong>Add New... ➔ Project</strong>를 누르고 방금 만든 <code className="text-amber-300">bible-atlas</code> 저장소의 <strong>Import</strong> 버튼을 클릭한 뒤, 아무 설정 변경 없이 <strong>Deploy</strong>를 누르면 약 45초 만에 전 세계 어디서나 접속 가능한 전용 웹 주소가 발급됩니다.
                </p>
              </div>

              <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-4">
                <div className="flex items-center gap-2 font-bold text-amber-400 mb-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center">
                    3
                  </span>
                  <span>향후 2권(출애굽)~6권 무중단 업데이트</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  앞으로 출애굽기나 복음서 지도를 추가할 때는 GitHub 저장소의 <code className="text-amber-300">src/App.jsx</code> 파일만 새 코드로 교체(Commit)하면, Vercel이 이를 감지하여 기존 공유 주소 그대로 30초 만에 새 챕터를 자동 반영합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NOTION EXPORT MODAL / DRAWER */}
      {showNotionPreview && (
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <div className="bg-stone-900 text-stone-100 rounded-2xl p-4 sm:p-5 shadow-xl border border-stone-700">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold">
                  노션(Notion) 바인더용 마크다운 블록 — 현재 단락 ({currentEpisode.ref})
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyNotion}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-stone-950 hover:bg-amber-400 transition cursor-pointer"
                >
                  {copiedNotion ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>클립보드에 복사됨! 노션에 붙여넣기(Ctrl+V) 하세요</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>현재 단락 마크다운 복사하기</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowNotionPreview(false)}
                  className="px-2.5 py-1.5 rounded-lg text-xs text-stone-400 hover:text-white hover:bg-stone-800"
                >
                  닫기
                </button>
              </div>
            </div>
            <pre className="text-xs bg-stone-950/90 text-stone-300 p-3.5 rounded-xl overflow-x-auto font-mono leading-relaxed whitespace-pre-wrap border border-stone-800 max-h-56 overflow-y-auto">
              {generateNotionMarkdown()}
            </pre>
          </div>
        </div>
      )}

      {/* PATRIARCH SELECTOR TABS (4 MAJOR FIGURES) */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {PATRIARCHS.map((p) => {
            const isSelected = p.id === selectedPatriarchId;
            const pCompletedCount = p.episodes.filter((ep) => completedEpisodes[ep.id]).length;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => handleSelectPatriarch(p.id)}
                className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-amber-600 shadow-md ring-2 ring-amber-600/15'
                    : 'bg-white/70 border-stone-200/90 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${p.badgeBg}`}
                  >
                    {p.chapters}
                  </span>
                  <span className="text-[11px] text-stone-500 font-medium">
                    {pCompletedCount}/{p.episodes.length} 완료
                  </span>
                </div>
                <div className="font-bold text-stone-900 text-sm sm:text-base">{p.name}</div>
                <div className="text-xs text-stone-500 mt-0.5 line-clamp-1">{p.subtitle}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* EPISODE STEPPER BAR */}
      <div className="max-w-7xl mx-auto px-4 pt-3">
        <div className="bg-white border border-stone-200 rounded-2xl p-3 flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {currentPatriarch.episodes.map((ep, idx) => {
              const isCurrent = idx === selectedEpisodeIndex;
              const isDone = !!completedEpisodes[ep.id];
              return (
                <button
                  key={ep.id}
                  type="button"
                  onClick={() => {
                    setSelectedEpisodeIndex(idx);
                    setActiveLocModal(null);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    isCurrent
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200/70'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                      isCurrent
                        ? 'bg-amber-400 text-stone-950'
                        : isDone
                        ? 'bg-emerald-600 text-white'
                        : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {isDone && !isCurrent ? '✓' : ep.stepNum}
                  </span>
                  <div className="text-left">
                    <div className="leading-tight">{ep.title}</div>
                    <div
                      className={`text-[10px] font-normal ${
                        isCurrent ? 'text-stone-300' : 'text-stone-400'
                      }`}
                    >
                      {ep.ref}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Prev / Next Navigation Buttons */}
          <div className="flex items-center gap-1.5 shrink-0 pl-2 border-l border-stone-200">
            <button
              type="button"
              disabled={selectedEpisodeIndex === 0}
              onClick={() => setSelectedEpisodeIndex((i) => Math.max(0, i - 1))}
              className="p-2 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 disabled:opacity-35 cursor-pointer"
              title="이전 여정"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              disabled={selectedEpisodeIndex === currentPatriarch.episodes.length - 1}
              onClick={() =>
                setSelectedEpisodeIndex((i) =>
                  Math.min(currentPatriarch.episodes.length - 1, i + 1)
                )
              }
              className="p-2 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 disabled:opacity-35 cursor-pointer"
              title="다음 여정"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* MAIN INTEGRATED 2-COLUMN WORKSPACE: LEFT = SCRIPTURE & NARRATIVE, RIGHT = INTERACTIVE SYNCHRONIZED MAP */}
      <main className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* LEFT COLUMN (7 COLS): SCRIPTURE CENTERED STUDY & CONTEXT */}
        <section className="lg:col-span-7 flex flex-col gap-4">
          {/* Episode Header Card */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
            <div className="flex flex-wrap items-start justify-between gap-3 pb-3.5 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    STEP {currentEpisode.stepNum}
                  </span>
                  <span className="text-xs font-semibold text-stone-500">
                    {currentEpisode.ref}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
                    {currentEpisode.terrainTag}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1.5">
                  {currentEpisode.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => toggleEpisodeComplete(currentEpisode.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                  completedEpisodes[currentEpisode.id]
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                    : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                }`}
              >
                {completedEpisodes[currentEpisode.id] ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>묵상 완료됨</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-4 h-4 text-stone-400" />
                    <span>묵상 완료 체크</span>
                  </>
                )}
              </button>
            </div>

            {/* Route Quick Summary Pill Bar */}
            <div className="mt-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 font-semibold text-stone-800 flex-wrap">
                <Navigation className="w-4 h-4 text-amber-700 shrink-0" />
                <button
                  type="button"
                  onClick={() => setActiveLocModal(fromPoint)}
                  className="underline decoration-amber-500 underline-offset-2 hover:text-amber-800 cursor-pointer"
                >
                  ① {fromPoint?.name}
                </button>
                <span className="text-stone-400">➔</span>
                <button
                  type="button"
                  onClick={() => setActiveLocModal(toPoint)}
                  className="underline decoration-amber-500 underline-offset-2 hover:text-amber-800 cursor-pointer"
                >
                  ② {toPoint?.name}
                </button>
                {returnPoint && (
                  <>
                    <span className="text-stone-400">➔</span>
                    <button
                      type="button"
                      onClick={() => setActiveLocModal(returnPoint)}
                      className="underline decoration-amber-500 underline-offset-2 hover:text-amber-800 cursor-pointer"
                    >
                      ③ {returnPoint.name}
                    </button>
                  </>
                )}
              </div>
              <span className="text-stone-600 font-medium">{currentEpisode.directionText}</span>
            </div>

            {/* SCRIPTURE PASSAGES WITH INLINE GEO-HIGHLIGHTS */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                  <span>성경 본문과 지리·동선 하이라이트</span>
                </h3>
                <span className="text-[11px] text-stone-400">
                  노란색 표시는 지리적 위치 및 이동 동사입니다
                </span>
              </div>

              <div className="space-y-2.5">
                {currentEpisode.scripture.map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#fcfaf5] border border-stone-200/90 leading-relaxed text-sm sm:text-[15px] text-stone-800 shadow-2xs"
                  >
                    <span className="inline-block font-bold text-xs text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded mr-2 align-middle">
                      창 {item.verse}
                    </span>
                    <span className="align-middle">
                      {renderHighlightedVerse(item.text, item.highlights)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* GEO-HISTORICAL CONTEXT & SPIRITUAL INSIGHT CARDS */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/90">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800 mb-1.5">
                  <Compass className="w-4 h-4 text-amber-700" />
                  <span>왜 이 길로 갔을까? (지리·역사적 배경)</span>
                </div>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  {currentEpisode.geoContext}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1.5">
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span>말씀과 지리가 만나는 영적 교훈</span>
                </div>
                <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed">
                  {currentEpisode.spiritualInsight}
                </p>
              </div>
            </div>

            {/* NOTION-STYLE CALLOUT & PERSONAL QT REFLECTION JOURNAL */}
            <div className="mt-4 pt-4 border-t border-stone-100">
              <div className="flex items-start gap-2.5 bg-stone-100/80 p-3.5 rounded-xl border border-stone-200/80 mb-3">
                <StickyNote className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-[13px] font-semibold text-stone-800">
                  묵상 질문: “{currentEpisode.reflectionQ}”
                </div>
              </div>

              <label
                htmlFor="qt-note-input"
                className="block text-xs font-bold text-stone-600 mb-1.5"
              >
                ✍️ 나의 말씀 & 지리 묵상 노트 (자동 저장 및 노션 복사 연동)
              </label>
              <textarea
                id="qt-note-input"
                rows={3}
                value={userNotes[currentEpisode.id] || ''}
                onChange={(e) => handleNoteChange(currentEpisode.id, e.target.value)}
                placeholder="본문을 읽으며 지도에서 발견한 점이나 나에게 주시는 적용점을 기록해 보세요..."
                className="w-full rounded-xl border border-stone-200 bg-white p-3 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-amber-600 transition"
              />
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN (5 COLS): SYNCHRONIZED MICRO-MAP & ELEVATION CROSS-SECTION */}
        <aside className="lg:col-span-5 lg:sticky lg:top-20 flex flex-col gap-4">
          <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-xs">
            {/* Map Controls Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-1.5">
                <MapIcon className="w-4 h-4 text-amber-700" />
                <h3 className="text-sm font-bold text-stone-900">
                  본문 연동 동선 지도 (Micro-Atlas)
                </h3>
              </div>

              {/* Zoom Switcher */}
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => setMapZoomMode('auto')}
                  className={`px-2 py-1 rounded-md cursor-pointer transition ${
                    mapZoomMode === 'auto'
                      ? 'bg-white text-stone-900 shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  본문 맞춤
                </button>
                <button
                  type="button"
                  onClick={() => setMapZoomMode('canaan')}
                  className={`px-2 py-1 rounded-md cursor-pointer transition ${
                    mapZoomMode === 'canaan'
                      ? 'bg-white text-stone-900 shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  가나안 확대
                </button>
                <button
                  type="button"
                  onClick={() => setMapZoomMode('crescent')}
                  className={`px-2 py-1 rounded-md cursor-pointer transition ${
                    mapZoomMode === 'crescent'
                      ? 'bg-white text-stone-900 shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  초승달 전체
                </button>
              </div>
            </div>

            {/* INTERACTIVE SVG BIBLICAL MAP */}
            <div className="relative w-full aspect-16/11 rounded-xl overflow-hidden border border-stone-300 bg-[#e6dfd3] shadow-inner">
              <svg
                viewBox={effectiveViewBox}
                className="w-full h-full transition-all duration-500 ease-out select-none"
              >
                <defs>
                  <linearGradient id="seaGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#93c5fd" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                  <linearGradient id="fertileGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#d9e5c9" />
                    <stop offset="100%" stopColor="#e6dfd3" />
                  </linearGradient>
                  <marker
                    id="routeArrow"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="5.5"
                    markerHeight="5.5"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={currentPatriarch.accentHex} />
                  </marker>
                  <marker
                    id="returnArrow"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#475569" />
                  </marker>
                </defs>

                {/* 1. Base Landmass & Fertile Crescent Belt */}
                <rect x="0" y="0" width="700" height="440" fill="#ede6d8" />

                {/* Fertile Crescent Greenish Band */}
                <path
                  d="M 140,395 Q 230,360 275,240 Q 320,100 475,52 Q 585,65 655,280 L 605,310 Q 545,120 465,92 Q 355,130 315,255 Q 280,375 180,415 Z"
                  fill="url(#fertileGrad)"
                  opacity="0.75"
                />

                {/* Central Hill Country Ridge Shading (Patriarchs' Highway) */}
                <ellipse
                  cx="280"
                  cy="285"
                  rx="22"
                  ry="65"
                  fill="#d6cbb5"
                  opacity="0.7"
                />
                <ellipse
                  cx="322"
                  cy="240"
                  rx="18"
                  ry="45"
                  fill="#d6cbb5"
                  opacity="0.6"
                />

                {/* 2. Bodies of Water: Mediterranean Sea, Nile Delta, Red Sea, Sea of Galilee, Dead Sea, Rivers */}
                <path
                  d="M 0,0 L 295,0 Q 280,90 265,175 Q 252,250 218,335 Q 185,355 120,360 L 0,365 Z"
                  fill="url(#seaGrad)"
                  stroke="#3b82f6"
                  strokeWidth="1"
                />
                <text
                  x="155"
                  y="245"
                  fill="#1e40af"
                  fontSize="11"
                  fontWeight="bold"
                  opacity="0.75"
                >
                  지중해 (대해)
                </text>

                {/* Nile River & Delta */}
                <path
                  d="M 145,440 L 155,380 L 130,358 M 155,380 L 175,356 M 155,380 L 155,356"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                />

                {/* Sea of Galilee (Chinnereth) */}
                <ellipse
                  cx="302"
                  cy="195"
                  rx="5.5"
                  ry="9"
                  fill="#3b82f6"
                />
                {/* Jordan River */}
                <path
                  d="M 302,204 Q 300,245 301,284"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                {/* Jabbok River tributary */}
                <path
                  d="M 340,248 Q 320,244 301,247"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="1.5"
                  strokeDasharray="2 1"
                />
                {/* Dead Sea (Salt Sea) */}
                <ellipse
                  cx="301"
                  cy="310"
                  rx="7.5"
                  ry="24"
                  fill="#2563eb"
                />

                {/* Euphrates & Tigris Rivers */}
                <path
                  d="M 430,25 Q 480,60 540,145 Q 600,235 660,310"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                />
                <path
                  d="M 510,20 Q 565,90 615,195 Q 645,255 660,310"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="1.5"
                />
                <text x="530" y="115" fill="#1e40af" fontSize="9" opacity="0.75">
                  유프라테스강
                </text>

                {/* Regional Labels */}
                <text
                  x="435"
                  y="245"
                  fill="#92836e"
                  fontSize="12"
                  fontWeight="bold"
                  letterSpacing="2"
                >
                  아라비아 사막 (횡단 불가)
                </text>
                <text
                  x="235"
                  y="402"
                  fill="#857560"
                  fontSize="9.5"
                  fontWeight="bold"
                >
                  네겝 (남방 광야)
                </text>

                {/* Faint Ancient Highway: Way of the Patriarchs & Via Maris */}
                <path
                  d="M 155,378 Q 210,345 232,325 Q 250,275 282,222"
                  fill="none"
                  stroke="#a8a29e"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 256,342 L 272,314 L 278,292 L 280,274 L 284,248 L 282,222"
                  fill="none"
                  stroke="#a8a29e"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />

                {/* 3. ACTIVE EPISODE MOVEMENT PATH (HIGHLIGHTED CURVE) */}
                {fromPoint && toPoint && (
                  <g>
                    <path
                      d={`M ${fromPoint.x},${fromPoint.y} Q ${
                        (fromPoint.x + toPoint.x) / 2 - 14
                      },${(fromPoint.y + toPoint.y) / 2 - 12} ${toPoint.x},${toPoint.y}`}
                      fill="none"
                      stroke={currentPatriarch.accentHex}
                      strokeWidth="6"
                      opacity="0.2"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M ${fromPoint.x},${fromPoint.y} Q ${
                        (fromPoint.x + toPoint.x) / 2 - 14
                      },${(fromPoint.y + toPoint.y) / 2 - 12} ${toPoint.x},${toPoint.y}`}
                      fill="none"
                      stroke={currentPatriarch.accentHex}
                      strokeWidth="2.8"
                      markerEnd="url(#routeArrow)"
                      strokeLinecap="round"
                    />
                  </g>
                )}

                {/* Secondary Return Path if present */}
                {toPoint && returnPoint && (
                  <path
                    d={`M ${toPoint.x},${toPoint.y} Q ${
                      (toPoint.x + returnPoint.x) / 2 + 18
                    },${(toPoint.y + returnPoint.y) / 2 + 12} ${returnPoint.x},${
                      returnPoint.y
                    }`}
                    fill="none"
                    stroke="#475569"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    markerEnd="url(#returnArrow)"
                  />
                )}

                {/* 4. LOCATION PINS (INTERACTIVE) */}
                {Object.values(LOCATIONS).map((loc) => {
                  const isStart = loc.id === currentEpisode.fromLoc;
                  const isEnd = loc.id === currentEpisode.toLoc;
                  const isRet = loc.id === currentEpisode.returnLoc;
                  const isActive = isStart || isEnd || isRet;

                  let labelDx = 8;
                  let labelDy = 3;
                  let anchor = 'start';
                  if (['shechem', 'bethel', 'hebron', 'dothan', 'gerar', 'beer_lahai_roi', 'egypt'].includes(loc.id)) {
                    labelDx = -8;
                    anchor = 'end';
                  }
                  if (loc.id === 'moriah') {
                    labelDx = 9;
                    labelDy = 4;
                    anchor = 'start';
                  }

                  return (
                    <g
                      key={loc.id}
                      onClick={() => setActiveLocModal(loc)}
                      className="cursor-pointer group"
                    >
                      {isActive && (
                        <circle
                          cx={loc.x}
                          cy={loc.y}
                          r="9"
                          fill={currentPatriarch.accentHex}
                          opacity="0.25"
                        />
                      )}
                      <circle
                        cx={loc.x}
                        cy={loc.y}
                        r={isActive ? 5 : 3.2}
                        fill={
                          isEnd
                            ? currentPatriarch.accentHex
                            : isStart
                            ? '#ffffff'
                            : isRet
                            ? '#334155'
                            : '#78716c'
                        }
                        stroke={isActive ? currentPatriarch.accentHex : '#ffffff'}
                        strokeWidth={isActive ? 2.2 : 1}
                      />
                      <text
                        x={loc.x + labelDx}
                        y={loc.y + labelDy}
                        textAnchor={anchor}
                        fontSize={isActive ? '9.5' : '8'}
                        fontWeight={isActive ? 'bold' : 'normal'}
                        fill={isActive ? '#1c1917' : '#57534e'}
                        className="group-hover:font-bold"
                        style={{
                          paintOrder: 'stroke',
                          stroke: '#faf8f5',
                          strokeWidth: '2.5px',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round'
                        }}
                      >
                        {isStart ? `① ${loc.name.split(' ')[0]}` : isEnd ? `② ${loc.name.split(' ')[0]}` : isRet ? `③ ${loc.name.split(' ')[0]}` : loc.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Map Legend Overlay */}
              <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-stone-200/90 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-semibold text-stone-800">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block border-2"
                      style={{ borderColor: currentPatriarch.accentHex, backgroundColor: '#fff' }}
                    />
                    ① 출발지
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-stone-800">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: currentPatriarch.accentHex }}
                    />
                    ② 도착·제단
                  </span>
                  {returnPoint && (
                    <span className="flex items-center gap-1 font-semibold text-stone-700">
                      <span className="w-2.5 h-2.5 rounded-full inline-block bg-slate-700" />
                      ③ 귀환지
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-stone-500">
                  지명을 클릭하면 상세 지리 정보가 열립니다
                </span>
              </div>
            </div>

            {/* Selected Location Quick Inspector */}
            {activeLocModal ? (
              <div className="mt-3 p-3.5 rounded-xl bg-amber-50/90 border border-amber-300 text-xs relative">
                <button
                  type="button"
                  onClick={() => setActiveLocModal(null)}
                  className="absolute top-2.5 right-2.5 text-stone-400 hover:text-stone-700 font-bold"
                >
                  ✕
                </button>
                <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
                  <Compass className="w-4 h-4 text-amber-700" />
                  <span>{activeLocModal.name}</span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-amber-800 border border-amber-200">
                    해발 {activeLocModal.elevation}m
                  </span>
                </div>
                <div className="text-[11px] text-amber-800 font-medium mt-0.5">
                  {activeLocModal.subName}
                </div>
                <p className="text-stone-700 mt-1.5 leading-relaxed">{activeLocModal.desc}</p>
              </div>
            ) : null}

            {/* ELEVATION CROSS-SECTION COMPONENT */}
            <div className="mt-3.5">{renderElevationBar()}</div>

            {/* Patriarch Summary Footer inside Map Card */}
            <div className="mt-3.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-600 flex items-start gap-2">
              <Info className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-800">{currentPatriarch.name} 핵심 동선 요약: </span>
                {currentPatriarch.summary}
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}