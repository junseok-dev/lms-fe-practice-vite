// 수강생 프로젝트 목록 화면에서 사용하는 mock 데이터입니다.
// 프로젝트 카드 자체는 아직 Figma 공통 컴포넌트가 아니므로 목록 화면에 필요한 값만 제공합니다.
export const studentProjects = {
  summary: {
    title: '참여 프로젝트',
    count: '3건',
    action: '+ 신규 프로젝트',
  },
  items: [
    {
      id: 'order-api',
      title: '주문 관리 MSA 백엔드',
      badges: [
        { label: '인증 완료', tone: 'ok' },
        { label: '대표 후보', tone: 'purple' },
      ],
      action: '워크스페이스 열기',
      role: '역할 PM',
      type: '팀 프로젝트 · 4명',
      period: '2026-04-01 ~ 2026-05-30',
      stacks: ['Spring Boot', 'JPA', 'Kafka', 'Docker'],
      contribution: 40,
    },
    {
      id: 'chat-server',
      title: '실시간 채팅 서버',
      badges: [{ label: '검토 중', tone: 'warning' }],
      action: '검토 상태 보기',
      role: '역할 팀원',
      type: '팀 프로젝트 · 3명',
      period: '2026-03-20 ~ 2026-04-25',
      stacks: ['Spring Boot', 'WebSocket', 'Redis'],
      contribution: 28,
    },
    {
      id: 'portfolio-api',
      title: '포트폴리오 REST API',
      badges: [{ label: '작성 중', tone: 'neutral' }],
      action: '워크스페이스 열기',
      role: '역할 PM',
      type: '개인 프로젝트',
      period: '2026-05-02 ~ 진행 중',
      stacks: ['Spring Boot', 'JPA', 'PostgreSQL'],
      contribution: 100,
    },
  ],
} as const
