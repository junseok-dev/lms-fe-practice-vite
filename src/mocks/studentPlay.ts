// 수강생 PLAY 게임 선택 화면에서 사용하는 mock 데이터입니다.
// Figma의 "/student/play" 프레임에 보이는 KPI, 게임 카드, 최근 기록, 랭킹 값을 화면에 주입합니다.
export const studentPlay = {
  kpis: [
    {
      label: '이번 주 플레이',
      value: '8회',
      helper: '타자 게임 참여',
    },
    {
      label: '최고 점수',
      value: '92,400',
      helper: '서버 계산 기준',
    },
    {
      label: '랭킹',
      value: '12위',
      helper: '백엔드 부트캠프 3기',
    },
    {
      label: '보상 예정',
      value: '3,000M',
      helper: '상위 기록 보상',
    },
  ],
  games: [
    {
      title: '타자 게임',
      description: '제시문을 정확하고 빠르게 입력해 tpm, cpm, wpm, score를 기록합니다.',
      status: { label: '사용 가능', tone: 'ok' },
      enabled: true,
      progress: 72,
      helper: '이번 주 최고 612타 · 정확도 97.2%',
      action: '게임 입장',
    },
    {
      title: '코딩 스피드',
      description: '짧은 코드 조각을 완성하는 게임입니다. 현재 과정에서는 비활성화되어 있습니다.',
      status: { label: '준비 중', tone: 'neutral' },
      enabled: false,
      action: '준비 중',
    },
    {
      title: 'CS 퀴즈 배틀',
      description: '기초 CS 문항을 제한 시간 안에 푸는 게임입니다. 추후 확장용 슬롯입니다.',
      status: { label: '준비 중', tone: 'neutral' },
      enabled: false,
      action: '준비 중',
    },
  ],
  records: [
    {
      time: '오늘 14:10',
      game: '타자 게임',
      result: '612타 · 97.2%',
      score: '92,400',
    },
    {
      time: '어제 18:45',
      game: '타자 게임',
      result: '588타 · 96.8%',
      score: '88,100',
    },
    {
      time: '5/12 11:20',
      game: '타자 게임',
      result: '560타 · 95.9%',
      score: '84,800',
    },
    {
      time: '5/10 16:05',
      game: '타자 게임',
      result: '541타 · 96.1%',
      score: '81,200',
    },
  ],
  rankings: [
    { rank: '1', name: '이서연', score: '98,300', current: false },
    { rank: '2', name: '박지호', score: '95,700', current: false },
    { rank: '3', name: '김민준', score: '92,400', current: true },
    { rank: '4', name: '최유나', score: '90,100', current: false },
    { rank: '5', name: '정하늘', score: '87,600', current: false },
  ],
} as const
