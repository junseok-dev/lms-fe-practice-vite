// Figma의 "수강생 — 대시보드" 프레임에 나온 텍스트를 기준으로 만든 mock 데이터입니다.
// API가 생기기 전까지는 이 데이터를 화면에 뿌리며 컴포넌트 분리와 렌더링을 연습합니다.
type DashboardKpi = {
  helper: string
  label: string
  mark: string
  tone: 'positive' | 'warning' | 'neutral'
  unit: string
  value: string
}

export const dashboardKpis: DashboardKpi[] = [
  {
    label: '출석률',
    value: '92',
    unit: '%',
    helper: '+3%p',
    tone: 'positive',
    mark: '↑',
  },
  {
    label: '미응시 퀴즈',
    value: '2',
    unit: '건',
    helper: '마감 임박 1건',
    tone: 'warning',
    mark: '!',
  },
  {
    label: '승인 대기',
    value: '3',
    unit: '건',
    helper: '블로그·스터디',
    tone: 'neutral',
    mark: '',
  },
  {
    label: '보완 요청',
    value: '0',
    unit: '건',
    helper: '완료',
    tone: 'positive',
    mark: '↑',
  },
]

export const dashboardTodos = [
  {
    title: 'Spring Security 기초 퀴즈 응시',
    due: '오늘 18:00',
    tagTone: 'warn',
  },
  {
    title: '블로그 보완 — 운영자 코멘트 1건',
    due: '내일까지',
    tagTone: 'info',
  },
  {
    title: 'WeatherAPI 프로젝트 인증 요청',
    due: '5/15까지',
    tagTone: 'success',
  },
  {
    title: '주간 타자 챌린지 도전',
    due: '5/17까지',
    tagTone: 'plain',
  },
]

export const dashboardDueQuizzes = [
  {
    title: 'Spring Security 기초',
    course: 'Spring 백엔드 심화',
    estimate: '예상 25분',
    due: '오늘 18:00',
  },
  {
    title: 'REST API 설계 패턴',
    course: 'Spring 백엔드 심화',
    estimate: '예상 35분',
    due: '5/15',
  },
  {
    title: 'JPA 영속성 컨텍스트',
    course: '데이터베이스 설계',
    estimate: '예상 20분',
    due: '5/17',
  },
]

export const dashboardNotices = [
  {
    title: '5월 3주차 보강 일정 안내',
    meta: '운영자 · 5/13',
  },
  {
    title: '프로젝트 인증 기준 업데이트',
    meta: '운영자 · 5/12',
  },
  {
    title: '스터디룸 예약 정책 변경',
    meta: '운영자 · 5/10',
  },
  {
    title: '마일리지 지급 일정 안내',
    meta: '운영자 · 5/09',
  },
]

export const dashboardProjects = [
  {
    title: 'WeatherAPI 프로젝트',
    meta: '팀원 · 최근 활동 2일 전',
    status: '검토중',
    tone: 'ok',
  },
  {
    title: 'JWT 인증 미니 프로젝트',
    meta: '개인 · 최근 활동 4일 전',
    status: '초안',
    tone: 'neutral',
  },
]

export const dashboardTroubleshooting = [
  {
    title: 'JWT 토큰 만료 시 무한 루프 디버깅',
    date: '5/10',
  },
  {
    title: 'Docker Compose 네트워크 격리 이슈',
    date: '5/03',
  },
  {
    title: 'Spring Batch 청크 사이즈 튜닝',
    date: '4/28',
  },
]
