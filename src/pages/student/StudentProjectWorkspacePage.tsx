import { Link, useSearchParams } from 'react-router-dom'
import {
  FigmaChip,
  FigmaDocumentFileCard,
  FigmaKanbanTaskCard,
  FigmaStatusBadge,
  FigmaTabsBar,
  FigmaWorkspaceDayCell,
} from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { projectWorkspaceTabLabels, projectWorkspaceTabs } from '../../mocks/studentMissingPages'
import './student-missing-pages.css'

type ProjectTab = keyof typeof projectWorkspaceTabLabels
type ProjectAction =
  | 'new-task'
  | 'new-schedule'
  | 'new-meeting'
  | 'new-doc'
  | 'new-issue'
  | 'invite-member'
  | 'new-metric'
  | 'peer-evaluation'
  | 'submit-certification'
  | 'issue-detail'
  | 'member-detail'

const projectActionCopy: Record<ProjectAction, { title: string; description: string; primary: string }> = {
  'new-task': {
    title: '작업 추가',
    description: '새 작업 카드는 보드·작업 탭에 추가됩니다. 현재는 Figma 상태 확인용 패널로 입력 화면 진입만 표시합니다.',
    primary: '작업 추가 준비',
  },
  'new-schedule': {
    title: '일정 추가',
    description: '마일스톤, 회의, 발표 일정을 캘린더 탭에 등록하는 흐름입니다.',
    primary: '일정 추가 준비',
  },
  'new-meeting': {
    title: '회의록 작성',
    description: '회의 일시, 참석자, 결정 사항, 액션 아이템을 기록하는 작성 화면 진입 상태입니다.',
    primary: '회의록 작성 준비',
  },
  'new-doc': {
    title: '문서 추가',
    description: 'API 명세, 설계 문서, 발표 자료, 파일, 위키를 프로젝트 문서함에 추가합니다.',
    primary: '문서 추가 준비',
  },
  'new-issue': {
    title: '이슈 등록',
    description: '버그, 개선 요청, 질문을 이슈로 등록해 우선순위와 상태를 추적합니다.',
    primary: '이슈 등록 준비',
  },
  'invite-member': {
    title: '팀원 초대',
    description: '같은 기수 수강생을 팀원으로 초대하는 흐름입니다. PM 권한 정책을 함께 확인합니다.',
    primary: '팀원 초대 준비',
  },
  'new-metric': {
    title: '지표 추가',
    description: 'Before/After 수치와 개선율을 입력해 증명서에 반영할 성과 지표를 추가합니다.',
    primary: '지표 추가 준비',
  },
  'peer-evaluation': {
    title: '내 평가 작성',
    description: '프로젝트 팀원에 대한 상호평가를 작성하는 흐름입니다.',
    primary: '평가 작성 준비',
  },
  'submit-certification': {
    title: '인증 요청 제출',
    description: '체크리스트를 충족한 뒤 담당 강사에게 프로젝트 인증 검토를 요청합니다.',
    primary: '인증 요청 준비',
  },
  'issue-detail': {
    title: '이슈 상세',
    description: '선택한 이슈의 재현 조건, 담당자, 처리 이력, 상태 변경 내용을 확인합니다.',
    primary: '이슈 상세 보기',
  },
  'member-detail': {
    title: '팀원 상세',
    description: '팀원의 역할, 담당 영역, 기여도, 최근 활동을 확인합니다.',
    primary: '팀원 상세 보기',
  },
}

const tabContent: Record<ProjectTab, { title: string; description: string; cards: string[] }> = {
  home: {
    title: '프로젝트 홈',
    description: '이번 주 진행률, 내 할 일, 인증 준비 상태를 한 번에 확인합니다.',
    cards: ['이번 주 목표 3개 중 2개 완료', '내 담당 API 명세 검토 대기', '프로젝트 인증 준비율 72%'],
  },
  board: {
    title: '보드·작업',
    description: '할 일, 진행 중, 완료 작업을 칸반 형태로 관리합니다.',
    cards: ['주문 API 리팩토링', 'ERD 변경안 정리', '배포 체크리스트'],
  },
  calendar: {
    title: '캘린더',
    description: '마일스톤과 회의 일정을 날짜 기준으로 확인합니다.',
    cards: ['5/24 API 리뷰', '5/27 중간 발표 리허설', '5/30 최종 산출물 제출'],
  },
  meetings: {
    title: '회의록',
    description: '데일리 스크럼과 멘토링 회의 기록을 관리합니다.',
    cards: ['5/21 데일리 스크럼', '5/22 멘토링 피드백', '5/23 배포 회고'],
  },
  docs: {
    title: '문서·파일·위키',
    description: '기획서, API 명세, ERD, 배포 문서를 모아둡니다.',
    cards: ['API 명세서 v2', 'ERD 캡처', '배포 가이드'],
  },
  issues: {
    title: '이슈',
    description: '버그, 개선 요청, 질문을 이슈 단위로 추적합니다.',
    cards: ['JWT 만료 처리 누락', '주문 취소 API 검증', 'N+1 쿼리 개선'],
  },
  team: {
    title: '팀 관리',
    description: '팀원 역할, 기여도, 연락 채널을 확인합니다.',
    cards: ['김하늘 · PM · 40%', '이준 · API · 30%', '박서연 · UI · 30%'],
  },
  outcomes: {
    title: '성과·기술스택',
    description: '프로젝트 성과와 사용 기술을 증명서 반영용으로 정리합니다.',
    cards: ['Spring Boot', 'JPA', 'Kafka', 'Docker'],
  },
  'peer-evaluation': {
    title: '상호평가',
    description: '팀 프로젝트 내 상호평가 진행률과 미작성 대상을 확인합니다.',
    cards: ['김하늘 평가 완료', '이준 평가 대기', '박서연 평가 완료'],
  },
  certification: {
    title: '인증 요청',
    description: '산출물, 기여도, 회고를 확인한 뒤 프로젝트 인증을 요청합니다.',
    cards: ['저장소 URL 확인 완료', '배포 URL 확인 필요', '회고 문서 작성 완료'],
  },
}

const workspaceStats = [
  { label: '작업 진행률', value: '68%', to: 'board', link: '보드·작업  ›', tone: 'teal' },
  { label: '회의록', value: '12건', to: 'meetings', link: '회의록  ›', tone: 'dark' },
  { label: '산출물', value: '8건', to: 'docs', link: '문서·파일·위키  ›', tone: 'dark' },
  { label: '열린 이슈', value: '3건', to: 'issues', link: '이슈  ›', tone: 'amber' },
] as const

const myTasks = [
  { badge: '오늘 마감', meta: '담당 나 · 진행 중', title: '결제 실패 재시도 로직 구현', tone: 'danger' },
  { badge: 'D-2', meta: '담당 나 · 진행 중', title: '주문 조회 API 페이지네이션', tone: 'warning' },
  { badge: 'D-4', meta: '담당 나 · 예정', title: '통합 테스트 시나리오 작성', tone: 'neutral' },
] as const

const recentActivities = [
  { kind: '작업', time: '2시간 전', title: '결제 모듈 단위 테스트 완료', tone: 'work' },
  { kind: '회의', time: '어제 17:30', title: '스프린트 3 회고 회의록 작성', tone: 'meeting' },
  { kind: '이슈', time: '2일 전', title: 'Kafka 컨슈머 지연 이슈 등록', tone: 'issue' },
  { kind: '산출', time: '3일 전', title: 'API 명세서 v2.pdf 업로드', tone: 'docs' },
  { kind: '작업', time: '3일 전', title: '주문 생성 API 구현 완료', tone: 'work' },
  { kind: '회의', time: '4일 전', title: 'DB 스키마 확정 회의록 작성', tone: 'meeting' },
] as const

const members = [
  { initial: '김', name: '김민준', role: 'PM', tone: 'purple' },
  { initial: '이', name: '이서연', role: '팀원', tone: 'teal' },
  { initial: '박', name: '박지호', role: '팀원', tone: 'amber' },
  { initial: '최', name: '최유나', role: '팀원', tone: 'blue' },
] as const

const metrics = [
  { label: 'API 평균 응답 시간', value: '120 ms', tone: 'dark' },
  { label: '테스트 커버리지', value: '82%', tone: 'teal' },
  { label: '주문 처리 TPS', value: '1,200', tone: 'dark' },
] as const

const stacks = ['Spring Boot', 'JPA', 'Kafka', 'Docker', 'Redis', 'JUnit5'] as const

const boardColumns = [
  {
    title: '할 일',
    tasks: [
      { title: '결제 실패 재시도 로직 구현', meta: '나 · D-1', tag: '백엔드', priority: '긴급' },
      { title: '주문 취소 API 설계', meta: '나 · D-5', tag: '백엔드', priority: '보통' },
      { title: 'ERD 초안 리뷰 반영', meta: '최유나 · D-6', tag: '설계', priority: '보통' },
    ],
  },
  {
    title: '진행 중',
    tasks: [
      { title: '재고 동기화 이벤트 처리', meta: '김민준 · D-2', tag: '백엔드', priority: '보통' },
      { title: '통합 테스트 시나리오 작성', meta: '나 · D-4', tag: '테스트', priority: '보통' },
      { title: '장바구니 캐시 무효화 구현', meta: '박지우 · D-3', tag: '백엔드', priority: '긴급' },
    ],
  },
  {
    title: '검토 대기',
    tasks: [
      { title: 'API 명세서 업데이트', meta: '최유나 · D-1', tag: '문서', priority: '보통' },
      { title: '인증 토큰 만료 처리 PR', meta: '김민준 · D-2', tag: '백엔드', priority: '긴급' },
      { title: '결제 모듈 단위 테스트', meta: '나 · D-3', tag: '테스트', priority: '보통' },
    ],
  },
] as const

const calendarCells = [
  ...Array.from({ length: 4 }, () => ({ day: undefined, event: undefined })),
  ...Array.from({ length: 31 }, (_, index) => {
    const day = index + 1
    const eventByDay: Partial<Record<number, { label: string; tone: 'info' }>> = {
      4: { label: '회의', tone: 'info' },
      12: { label: '회의', tone: 'info' },
      18: { label: '발표', tone: 'info' },
    }

    return { day, event: eventByDay[day] }
  }),
] as const

const upcomingSchedules = [
  { date: '5/16', title: '스프린트 리뷰', label: '회의', tone: 'ok' },
  { date: '5/18', title: '중간 발표', label: '발표', tone: 'warning' },
  { date: '5/23', title: 'API 명세 마감', label: '작업', tone: 'info' },
  { date: '5/28', title: '인증 요청 준비', label: '인증', tone: 'purple' },
] as const

const meetingRecords = [
  {
    title: '스프린트 3 회고',
    meta: '2026-05-14 · 참석 4명',
    summary: '액션 아이템 5개',
    status: '완료',
    tone: 'ok',
  },
  {
    title: 'DB 스키마 확정 회의',
    meta: '2026-05-11 · 참석 4명',
    summary: '결정 사항 3개',
    status: '완료',
    tone: 'ok',
  },
  {
    title: '인증 발표 준비 회의',
    meta: '2026-05-09 · 참석 3명',
    summary: '담당자 배정',
    status: '진행',
    tone: 'warning',
  },
  {
    title: '기술 스택 변경 논의',
    meta: '2026-05-06 · 참석 4명',
    summary: 'Kafka 도입 확정',
    status: '완료',
    tone: 'ok',
  },
] as const

const documentFilters = ['전체', 'API 명세', '설계 문서', '발표 자료', '첨부 파일', '위키'] as const

const documentFiles = [
  { title: 'API 명세서 v2', meta: 'PDF · 1.2MB', status: '승인 후보' },
  { title: 'ERD 설계 문서', meta: 'Wiki · 12분 전', status: '초안' },
  { title: '중간 발표 자료', meta: 'PPTX · 8.4MB', status: '검토' },
  { title: '배포 아키텍처', meta: 'Wiki · 어제', status: '완료' },
  { title: '성능 테스트 결과', meta: 'CSV · 240KB', status: '완료' },
  { title: 'README 정리', meta: 'Markdown · 2일 전', status: '완료' },
] as const

const projectIssues = [
  {
    title: 'Kafka 컨슈머 지연',
    meta: '성능 · 담당 박지호',
    priority: 'P1',
    priorityTone: 'warning',
    status: '열림',
    statusTone: 'neutral',
  },
  {
    title: '결제 실패 재시도 중복 실행',
    meta: '버그 · 담당 김민준',
    priority: 'P0',
    priorityTone: 'danger',
    status: '진행',
    statusTone: 'warning',
  },
  {
    title: 'Docker 배포 환경변수 누락',
    meta: '배포 · 담당 이서연',
    priority: 'P2',
    priorityTone: 'purple',
    status: '닫힘',
    statusTone: 'neutral',
  },
  {
    title: 'API 응답 코드 정책 불일치',
    meta: '설계 · 담당 최유나',
    priority: 'P1',
    priorityTone: 'warning',
    status: '열림',
    statusTone: 'neutral',
  },
  {
    title: '주문 조회 정렬 오류',
    meta: '버그 · 담당 김민준',
    priority: 'P2',
    priorityTone: 'purple',
    status: '검토',
    statusTone: 'warning',
  },
] as const

const teamMembers = [
  {
    initial: '김',
    name: '김민준',
    contribution: 40,
    specialty: '백엔드·인프라',
    role: 'PM',
    roleTone: 'purple',
    avatarTone: 'purple',
  },
  {
    initial: '이',
    name: '이서연',
    contribution: 25,
    specialty: 'API·문서',
    role: '팀원',
    roleTone: 'neutral',
    avatarTone: 'teal',
  },
  {
    initial: '박',
    name: '박지호',
    contribution: 20,
    specialty: 'Kafka·성능',
    role: '팀원',
    roleTone: 'neutral',
    avatarTone: 'amber',
  },
  {
    initial: '최',
    name: '최유나',
    contribution: 15,
    specialty: 'QA·발표',
    role: '팀원',
    roleTone: 'neutral',
    avatarTone: 'blue',
  },
] as const

const rolePolicies = [
  '1. PM은 인증 요청과 팀원 초대를 관리',
  '2. 팀원은 본인 작업과 산출물을 등록',
  '3. 기여도 합계는 100% 이하로 유지',
  '4. 인증 후 변경은 제안으로 제출',
] as const

const outcomeMetrics = [
  {
    label: 'API 평균 응답 시간',
    before: '420ms',
    after: '120ms',
    change: '-71%',
    tone: 'danger',
  },
  {
    label: '테스트 커버리지',
    before: '35%',
    after: '82%',
    change: '+47%p',
    tone: 'ok',
  },
  {
    label: '주문 처리 TPS',
    before: '240',
    after: '1,200',
    change: '+400%',
    tone: 'ok',
  },
] as const

const outcomeStacks = ['Spring Boot', 'JPA', 'Kafka', 'Docker', 'Redis', 'JUnit5', 'PostgreSQL', 'Github Actions'] as const

const peerEvaluationRows = [
  { name: '김민준', role: 'PM', result: '기술 5.0 · 소통 4.5', status: '제출 완료', tone: 'ok' },
  { name: '이서연', role: '팀원', result: '기술 4.5 · 소통 5.0', status: '제출 완료', tone: 'ok' },
  { name: '박지호', role: '팀원', result: '마감 D-2', status: '미제출', tone: 'neutral' },
  { name: '최유나', role: '팀원', result: '기술 4.0 · 소통 4.5', status: '제출 완료', tone: 'ok' },
] as const

const certificationChecklist = [
  { label: '프로젝트 기본 정보 입력', status: '완료', tone: 'ok', checked: true },
  { label: '팀원 및 기여도 확인', status: '완료', tone: 'ok', checked: true },
  { label: '성과 지표 3개 이상 등록', status: '완료', tone: 'ok', checked: true },
  { label: '산출물 공개 범위 확인', status: '완료', tone: 'ok', checked: true },
  { label: '트러블슈팅 연결', status: '필요', tone: 'danger', checked: false },
  { label: '상호평가 제출 완료', status: '진행', tone: 'warning', checked: false },
] as const

function tabUrl(tab: ProjectTab) {
  const base = ROUTES.studentProjectWorkspace.replace(':projectId', 'order-api')
  return tab === 'home' ? base : `${base}?tab=${tab}`
}

function actionUrl(tab: ProjectTab, action: ProjectAction) {
  const base = tabUrl(tab)
  return `${base}${base.includes('?') ? '&' : '?'}action=${action}`
}

// Figma frames: 프로젝트 워크스페이스 전체 탭
// ?tab=board 같은 쿼리로 탭별 실제 콘텐츠를 분기해서 보여줍니다.
export function StudentProjectWorkspacePage() {
  const [searchParams] = useSearchParams()
  const tab = (searchParams.get('tab') ?? 'home') as ProjectTab
  const action = searchParams.get('action') as ProjectAction | null
  const activeTab = projectWorkspaceTabs.includes(tab) ? tab : 'home'
  const activeAction = action && action in projectActionCopy ? action : null
  const content = tabContent[activeTab]
  const tabItems = projectWorkspaceTabs.map((item) => ({
    label: projectWorkspaceTabLabels[item],
    to: tabUrl(item),
    value: item,
  }))

  return (
    <section className="student-workflow-page student-project-workspace-page">
      <FigmaTabsBar activeValue={activeTab} items={tabItems} />

      {activeTab === 'home' ? (
        <>
          <section className="student-project-home-stats" aria-label="프로젝트 요약">
            {workspaceStats.map((stat) => (
              <article className="student-project-home-stat" key={stat.label}>
                <span>{stat.label}</span>
                <strong className={`student-project-home-stat__value--${stat.tone}`}>{stat.value}</strong>
                <i aria-hidden="true" />
                <Link to={tabUrl(stat.to)}>{stat.link}</Link>
              </article>
            ))}
          </section>

          <div className="student-project-home-layout">
            <div className="student-project-home-main">
              <section className="student-project-home-card">
                <header>
                  <div>
                    <h2>내 할 일</h2>
                    <p>마감 임박 3건</p>
                  </div>
                  <Link to={tabUrl('board')}>보드·작업에서 전체 보기  ›</Link>
                </header>
                <div className="student-project-task-list">
                  {myTasks.map((task) => (
                    <article className="student-project-task-row" key={task.title}>
                      <span aria-hidden="true" />
                      <div>
                        <strong>{task.title}</strong>
                        <p>{task.meta}</p>
                      </div>
                      <FigmaStatusBadge tone={task.tone}>{task.badge}</FigmaStatusBadge>
                    </article>
                  ))}
                </div>
              </section>

              <section className="student-project-home-card">
                <header>
                  <h2>최근 활동</h2>
                  <Link to={tabUrl('board')}>보드·작업에서 전체 보기  ›</Link>
                </header>
                <div className="student-project-activity-list">
                  {recentActivities.map((activity) => (
                    <article className="student-project-activity-row" key={`${activity.kind}-${activity.title}`}>
                      <span className={`student-project-activity-kind student-project-activity-kind--${activity.tone}`}>
                        {activity.kind}
                      </span>
                      <div>
                        <strong>{activity.title}</strong>
                        <p>{activity.time}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="student-project-home-side" aria-label="프로젝트 부가 정보">
              <section className="student-project-home-card student-project-team-card">
                <header>
                  <h2>팀원</h2>
                  <p>4명</p>
                </header>
                <div className="student-project-side-list">
                  {members.map((member) => (
                    <article className="student-project-side-member" key={member.name}>
                      <span className={`student-project-member-avatar student-project-member-avatar--${member.tone}`}>{member.initial}</span>
                      <div>
                        <strong>{member.name}</strong>
                        <p>{member.role}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="student-project-home-card student-project-metrics-card">
                <header>
                  <h2>성과 지표</h2>
                  <Link to={tabUrl('outcomes')}>전체  ›</Link>
                </header>
                <div>
                  {metrics.map((metric) => (
                    <p className="student-project-metric-row" key={metric.label}>
                      <span>{metric.label}</span>
                      <strong className={`student-project-home-stat__value--${metric.tone}`}>{metric.value}</strong>
                    </p>
                  ))}
                </div>
              </section>

              <section className="student-project-home-card">
                <h2>기술 스택</h2>
                <div className="student-project-summary-pill-row">
                  {stacks.map((stack) => (
                    <em key={stack}>{stack}</em>
                  ))}
                </div>
              </section>

              <section className="student-project-home-card student-project-cert-card">
                <h2>인증 상태</h2>
                <div>
                  <FigmaStatusBadge tone="ok">인증 완료</FigmaStatusBadge>
                  <FigmaStatusBadge tone="purple">대표 후보</FigmaStatusBadge>
                </div>
                <p>2026-05-08 인증 · 검토자 정수민 강사</p>
                <Link className="figma-button figma-button--secondary" to={tabUrl('certification')}>
                  인증 요청 탭에서 내역 보기
                </Link>
              </section>
            </aside>
          </div>
        </>
      ) : activeTab === 'board' ? (
        <>
          <div className="student-project-board-actions">
            <Link className="figma-button figma-button--primary" to={actionUrl('board', 'new-task')}>
              + 작업 추가
            </Link>
          </div>
          <section className="student-project-kanban" aria-label="보드·작업">
            {boardColumns.map((column) => (
              <section className="student-project-kanban-column" key={column.title}>
                <h2>{column.title}</h2>
                <div className="student-project-kanban-column__tasks">
                  {column.tasks.map((task) => (
                    <FigmaKanbanTaskCard
                      key={`${column.title}-${task.title}`}
                      meta={task.meta}
                      priority={task.priority}
                      tag={task.tag}
                      title={task.title}
                    />
                  ))}
                </div>
              </section>
            ))}
          </section>
        </>
      ) : activeTab === 'calendar' ? (
        <>
          <div className="student-project-calendar-toolbar">
            <h2>2026년 5월</h2>
            <Link className="figma-button figma-button--primary" to={actionUrl('calendar', 'new-schedule')}>
              일정 추가
            </Link>
          </div>
          <div className="student-project-calendar-layout">
            <section className="student-project-calendar-card" aria-label="2026년 5월 프로젝트 일정">
              <div className="student-project-calendar-weekdays" aria-hidden="true">
                {['월', '화', '수', '목', '금', '토', '일'].map((weekday) => (
                  <span key={weekday}>{weekday}</span>
                ))}
              </div>
              <div className="student-project-calendar-grid">
                {calendarCells.map((cell, index) => (
                  <FigmaWorkspaceDayCell
                    day={cell.day}
                    event={cell.event}
                    key={cell.day ? `2026-05-${cell.day}` : `blank-${index}`}
                  />
                ))}
              </div>
            </section>

            <aside className="student-project-schedule-card" aria-label="다가오는 일정">
              <h2>다가오는 일정</h2>
              <div className="student-project-schedule-list">
                {upcomingSchedules.map((schedule) => (
                  <article className="student-project-schedule-row" key={`${schedule.date}-${schedule.title}`}>
                    <span>{schedule.date}</span>
                    <div>
                      <strong>{schedule.title}</strong>
                      <FigmaStatusBadge tone={schedule.tone}>{schedule.label}</FigmaStatusBadge>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </>
      ) : activeTab === 'meetings' ? (
        <>
          <div className="student-project-meetings-toolbar">
            <h2>회의록</h2>
            <Link className="figma-button figma-button--primary" to={actionUrl('meetings', 'new-meeting')}>
              회의록 작성
            </Link>
          </div>
          <section className="student-project-meetings-card" aria-label="회의록 목록">
            {meetingRecords.map((meeting) => (
              <article className="student-project-meeting-row" key={meeting.title}>
                <strong>{meeting.title}</strong>
                <span>{meeting.meta}</span>
                <p>{meeting.summary}</p>
                <FigmaStatusBadge tone={meeting.tone}>{meeting.status}</FigmaStatusBadge>
              </article>
            ))}
          </section>
        </>
      ) : activeTab === 'docs' ? (
        <>
          <div className="student-project-docs-toolbar">
            <h2>문서·파일·위키</h2>
            <Link className="figma-button figma-button--primary" to={actionUrl('docs', 'new-doc')}>
              문서 추가
            </Link>
          </div>
          <div className="student-project-docs-layout">
            <aside className="student-project-docs-filter" aria-label="문서 필터">
              {documentFilters.map((filter, index) => (
                <FigmaChip key={filter} selected={index === 0}>
                  {filter}
                </FigmaChip>
              ))}
            </aside>

            <section className="student-project-docs-card" aria-label="문서·파일·위키 목록">
              {documentFiles.map((file) => (
                <FigmaDocumentFileCard key={file.title} meta={file.meta} status={file.status} title={file.title} />
              ))}
            </section>
          </div>
        </>
      ) : activeTab === 'issues' ? (
        <>
          <div className="student-project-issues-toolbar">
            <h2>이슈</h2>
            <Link className="figma-button figma-button--primary" to={actionUrl('issues', 'new-issue')}>
              이슈 등록
            </Link>
          </div>
          <section className="student-project-issues-card" aria-label="프로젝트 이슈 목록">
            {projectIssues.map((issue) => (
              <article className="student-project-issue-row" key={issue.title}>
                <div>
                  <strong>{issue.title}</strong>
                  <p>{issue.meta}</p>
                </div>
                <FigmaStatusBadge tone={issue.priorityTone}>{issue.priority}</FigmaStatusBadge>
                <FigmaStatusBadge tone={issue.statusTone}>{issue.status}</FigmaStatusBadge>
                <Link className="figma-button figma-button--secondary" to={actionUrl('issues', 'issue-detail')}>
                  상세
                </Link>
              </article>
            ))}
          </section>
        </>
      ) : activeTab === 'team' ? (
        <>
          <div className="student-project-team-toolbar">
            <h2>팀원 관리</h2>
            <Link className="figma-button figma-button--primary" to={actionUrl('team', 'invite-member')}>
              팀원 초대
            </Link>
          </div>
          <div className="student-project-team-layout">
            <section className="student-project-team-management-card" aria-label="팀원 관리">
              {teamMembers.map((member) => (
                <article className="student-project-team-row" key={member.name}>
                  <span className={`student-project-member-avatar student-project-member-avatar--${member.avatarTone}`}>
                    {member.initial}
                  </span>
                  <div className="student-project-team-row__info">
                    <div>
                      <strong>{member.name}</strong>
                      <FigmaStatusBadge tone={member.roleTone}>{member.role}</FigmaStatusBadge>
                    </div>
                    <p>기여도 {member.contribution}%</p>
                    <small>{member.specialty}</small>
                  </div>
                  <div className="student-project-team-progress" aria-label={`${member.name} 기여도 ${member.contribution}%`}>
                    <span style={{ width: `${member.contribution}%` }} />
                  </div>
                  <Link className="figma-button figma-button--secondary" to={actionUrl('team', 'member-detail')}>
                    상세
                  </Link>
                </article>
              ))}
            </section>

            <aside className="student-project-role-policy-card" aria-label="역할 정책">
              <h2>역할 정책</h2>
              {rolePolicies.map((policy) => (
                <p key={policy}>{policy}</p>
              ))}
            </aside>
          </div>
        </>
      ) : activeTab === 'outcomes' ? (
        <>
          <div className="student-project-outcomes-toolbar">
            <h2>성과 지표</h2>
            <Link className="figma-button figma-button--primary" to={actionUrl('outcomes', 'new-metric')}>
              지표 추가
            </Link>
          </div>
          <section className="student-project-outcome-metrics" aria-label="성과 지표">
            {outcomeMetrics.map((metric) => (
              <article className="student-project-outcome-metric-card" key={metric.label}>
                <h3>{metric.label}</h3>
                <div>
                  <p>
                    <span>Before</span>
                    <strong>{metric.before}</strong>
                  </p>
                  <p>
                    <span>After</span>
                    <strong>{metric.after}</strong>
                  </p>
                </div>
                <FigmaStatusBadge tone={metric.tone}>{metric.change}</FigmaStatusBadge>
              </article>
            ))}
          </section>

          <section className="student-project-stack-card" aria-label="기술 스택">
            <h2>기술 스택</h2>
            <div>
              {outcomeStacks.map((stack) => (
                <FigmaChip key={stack}>{stack}</FigmaChip>
              ))}
            </div>
          </section>
        </>
      ) : activeTab === 'peer-evaluation' ? (
        <>
          <h2 className="student-project-peer-title">프로젝트 상호평가</h2>
          <section className="student-project-peer-summary-card" aria-label="상호평가 제출 현황">
            <h3>제출 현황</h3>
            <div className="student-project-peer-progress">
              <span />
            </div>
            <strong>3 / 4명 제출 완료</strong>
            <Link className="figma-button figma-button--primary" to={actionUrl('peer-evaluation', 'peer-evaluation')}>
              내 평가 작성
            </Link>
          </section>

          <section className="student-project-peer-list-card" aria-label="상호평가 목록">
            {peerEvaluationRows.map((row) => (
              <article className="student-project-peer-row" key={row.name}>
                <strong>{row.name}</strong>
                <span>{row.role}</span>
                <p>{row.result}</p>
                <FigmaStatusBadge tone={row.tone}>{row.status}</FigmaStatusBadge>
              </article>
            ))}
          </section>
        </>
      ) : activeTab === 'certification' ? (
        <>
          <h2 className="student-project-certification-title">프로젝트 인증 요청</h2>
          <div className="student-project-certification-layout">
            <section className="student-project-certification-checklist" aria-label="요청 전 체크리스트">
              <h3>요청 전 체크리스트</h3>
              {certificationChecklist.map((item) => (
                <article className="student-project-certification-check-row" key={item.label}>
                  <span className={item.checked ? 'is-checked' : ''} aria-hidden="true" />
                  <strong>{item.label}</strong>
                  <FigmaStatusBadge tone={item.tone}>{item.status}</FigmaStatusBadge>
                </article>
              ))}
            </section>

            <aside className="student-project-certification-side" aria-label="인증 요청 상태">
              <section className="student-project-certification-status-card">
                <h3>인증 상태</h3>
                <FigmaStatusBadge tone="warning">검토 전</FigmaStatusBadge>
                <p>요청하면 담당 강사가 산출물과 발표 내용을 검토합니다. 인증 완료 후 프로젝트는 증명서 대표 후보가 됩니다.</p>
                <Link className="figma-button figma-button--primary" to={actionUrl('certification', 'submit-certification')}>
                  인증 요청 제출
                </Link>
                <Link
                  className="figma-button figma-button--secondary"
                  to={ROUTES.studentProjectChangeRequest.replace(':projectId', 'order-api')}
                >
                  변경 제안 보기
                </Link>
              </section>

              <section className="student-project-certification-change-card">
                <h3>최근 변경 제안</h3>
                <div>
                  <strong>성과 지표 보정 요청</strong>
                  <FigmaStatusBadge tone="warning">요청됨</FigmaStatusBadge>
                </div>
                <p>2026-05-14 제출 · 검토 대기</p>
              </section>
            </aside>
          </div>
        </>
      ) : (
        <section className="student-workflow-panel">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        <div className="student-workspace-board">
          {content.cards.map((card, index) => (
            <article className="student-workflow-card" key={card}>
              <h3>{card}</h3>
              <p>{index === 0 ? '우선순위 높음' : index === 1 ? '이번 주 확인 필요' : '완료 또는 참고 항목'}</p>
              <FigmaStatusBadge tone={index === 0 ? 'warning' : index === 1 ? 'neutral' : 'ok'}>
                {index === 0 ? '진행 중' : index === 1 ? '확인 필요' : '완료'}
              </FigmaStatusBadge>
            </article>
          ))}
        </div>
        </section>
      )}

      {activeAction ? (
        <ProjectActionPanel action={activeAction} backTo={tabUrl(activeTab)} />
      ) : null}
    </section>
  )
}

function ProjectActionPanel({ action, backTo }: { action: ProjectAction; backTo: string }) {
  const copy = projectActionCopy[action]

  return (
    <div className="student-project-action-panel" role="dialog" aria-labelledby="project-action-title" aria-modal="true">
      <section>
        <header>
          <span>프로젝트 액션</span>
          <Link aria-label="닫기" to={backTo}>
            ×
          </Link>
        </header>
        <h2 id="project-action-title">{copy.title}</h2>
        <p>{copy.description}</p>
        <footer>
          <Link className="figma-button figma-button--secondary" to={backTo}>
            닫기
          </Link>
          <button className="figma-button figma-button--primary" type="button">
            {copy.primary}
          </button>
        </footer>
      </section>
    </div>
  )
}
