// Figma "수강생 - 대시보드" 프레임의 데모 텍스트를 기준으로 만든 mock 데이터입니다.
// API가 생기기 전까지 화면 구조와 컴포넌트 분리를 검증하는 데 사용합니다.
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
    tag: '퀴즈',
    tagTone: 'warn',
  },
  {
    title: '블로그 보완 - 운영자 코멘트 1건',
    due: '내일까지',
    tag: '기록실',
    tagTone: 'info',
  },
  {
    title: 'WeatherAPI 프로젝트 인증 요청',
    due: '5/15까지',
    tag: '프로젝트',
    tagTone: 'success',
  },
  {
    title: '주간 타자 챌린지 도전',
    due: '5/17까지',
    tag: 'PLAY',
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
    meta: '운영팀 · 5/13',
  },
  {
    title: '프로젝트 인증 기준 업데이트',
    meta: '운영팀 · 5/12',
  },
  {
    title: '스터디룸 예약 정책 변경',
    meta: '운영팀 · 5/10',
  },
  {
    title: '마일리지 지급 일정 안내',
    meta: '운영팀 · 5/09',
  },
]

export const dashboardAlerts = [
  {
    title: 'Spring Security 퀴즈가 오늘 18:00에 마감됩니다.',
    meta: '운영팀 · 5/13',
  },
  {
    title: 'WeatherAPI 프로젝트에 피드백이 등록되었습니다.',
    meta: '멘토 · 5/12',
  },
  {
    title: '블로그 보완 요청 코멘트가 도착했습니다.',
    meta: '운영팀 · 5/12',
  },
  {
    title: '마일리지 적립 내역이 갱신되었습니다.',
    meta: '시스템 · 5/11',
  },
]

export const dashboardProjects = [
  {
    title: 'WeatherAPI 프로젝트',
    meta: '팀 · 최근 활동 2시간 전',
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
    title: 'JWT 토큰 만료 후 무한 루프 디버깅',
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
