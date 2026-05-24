// 수강생 내 마일리지 화면에서 사용하는 mock 데이터입니다.
// Figma의 "/student/mileage" 프레임에 보이는 KPI, 최근 내역, 상품, 사용 한도를 화면에 주입합니다.
export const studentMileage = {
  kpis: [
    {
      label: '보유 마일리지',
      value: '128,400M',
      helper: '이번 달 +18,000M',
    },
    {
      label: '이번 달 사용',
      value: '42,000M',
      helper: '상품 신청 2건',
    },
    {
      label: '구매 요청',
      value: '3건',
      helper: '승인 대기 1건',
    },
    {
      label: '사용 한도',
      value: '71%',
      helper: '도서·강의 한도 기준',
    },
  ],
  history: [
    {
      title: '프로젝트 인증 보상',
      meta: '+20,000M · 2026-05-14',
      badge: { label: '적립', tone: 'ok' },
    },
    {
      title: '도서 구매 신청',
      meta: '-32,000M · 승인 대기',
      badge: { label: '대기', tone: 'warning' },
    },
    {
      title: '주간 출석 보너스',
      meta: '+5,000M · 2026-05-10',
      badge: { label: '적립', tone: 'ok' },
    },
    {
      title: '기프티콘 구매',
      meta: '-10,000M · 승인 완료',
      badge: { label: '사용', tone: 'purple' },
    },
    {
      title: 'PLAY 챌린지 보상',
      meta: '+3,000M · 2026-05-08',
      badge: { label: '적립', tone: 'ok' },
    },
  ],
  products: [
    {
      title: '도서 구매',
      limit: '잔여 한도 68,000M',
    },
    {
      title: '온라인 강의',
      limit: '잔여 한도 120,000M',
    },
    {
      title: '기프티콘',
      limit: '잔여 한도 30,000M',
    },
  ],
  limits: [
    {
      title: '도서',
      value: '42,000 / 100,000M',
      percent: 42,
    },
    {
      title: '온라인 강의',
      value: '40,000 / 200,000M',
      percent: 20,
    },
    {
      title: '기프티콘',
      value: '30,000 / 50,000M',
      percent: 60,
    },
  ],
} as const
