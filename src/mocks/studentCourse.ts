// 수강생 강의 홈 화면을 Figma와 같은 데이터 상태로 보여주기 위한 mock 데이터입니다.
// 실제 API가 정해지기 전까지 페이지 구조와 컴포넌트 배치를 검증하는 기준 데이터로 사용합니다.
export const studentCourse = {
  title: '백엔드 부트캠프 · 3기',
  period: '2026-03-04 ~ 2026-09-12',
  weekSummary: '10주차 진행 중 (전체 28주)',
  progress: 38,
  currentWeekDescription: '이번 주는 10주차 · JPA 영속성 컨텍스트 / 트랜잭션 관리',
  metrics: [
    {
      tone: 'purple',
      label: '미응시 퀴즈',
      value: '2',
      description: '오늘 마감 1건',
    },
    {
      tone: 'orange',
      label: '마감 임박 과제',
      value: '1',
      description: 'D-2 게시판 CRUD',
    },
    {
      tone: 'teal',
      label: '새 자료',
      value: '3',
      description: 'JPA·트랜잭션 추가',
    },
    {
      tone: 'gray',
      label: '승인 대기 요청',
      value: '1',
      description: '블로그 검토 중',
    },
  ],
  weeks: [
    {
      week: '08',
      title: 'Spring Data JPA 기초',
      period: '2026-04-22 ~ 2026-04-28',
      status: '완료',
      state: 'done',
    },
    {
      week: '09',
      title: 'JPA 연관관계 매핑',
      period: '2026-04-29 ~ 2026-05-05',
      status: '완료',
      state: 'done',
    },
    {
      week: '10',
      title: 'JPA 영속성 컨텍스트 · 트랜잭션',
      period: '2026-05-13 ~ 2026-05-19',
      status: '학습 중',
      state: 'current',
    },
    {
      week: '11',
      title: 'Querydsl · 동적 쿼리',
      period: '2026-05-20 ~ 2026-05-26',
      status: '예정',
      state: 'scheduled',
    },
  ],
  notices: [
    {
      tone: 'danger',
      badge: '긴급',
      title: '실전 평가 일정 안내 - 6/3 14:00',
      time: '5시간 전',
    },
    {
      tone: 'info',
      badge: '공지',
      title: '10주차 기록 주제는 JPA 영속성 컨텍스트',
      time: '어제',
    },
    {
      tone: 'neutral',
      badge: '일반',
      title: '실습실 사용 시간 변경 - 평일 19:00까지',
      time: '3일 전',
    },
  ],
  quizzes: [
    {
      title: '10주차 영속성 컨텍스트',
      description: '3개 문제 (60분 이내)',
      action: '응시 →',
      highlight: true,
    },
    {
      title: '9주차 연관관계 매핑',
      description: '5/13',
      action: null,
      highlight: false,
    },
  ],
  assignment: {
    title: '게시판 CRUD 과제',
    due: 'D-2',
    description: 'Spring Boot REST API + JPA 기능 게시판 구현',
  },
  materials: [
    {
      title: 'JPA 영속성 컨텍스트 슬라이드',
      date: '5/13',
    },
    {
      title: '트랜잭션 매니저 설명',
      date: '5/13',
    },
    {
      title: '9주차 실습 정답 코드',
      date: '5월 초',
    },
  ],
} as const
