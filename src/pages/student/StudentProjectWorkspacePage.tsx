import { Link, useSearchParams } from 'react-router-dom'
import { FigmaButton, FigmaStatusBadge } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { projectWorkspaceTabLabels, projectWorkspaceTabs } from '../../mocks/studentMissingPages'
import './student-missing-pages.css'

type ProjectTab = keyof typeof projectWorkspaceTabLabels

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

// Figma frames: 프로젝트 워크스페이스 전체 탭
// ?tab=board 같은 쿼리로 탭별 실제 콘텐츠를 분기해서 보여줍니다.
export function StudentProjectWorkspacePage() {
  const [searchParams] = useSearchParams()
  const tab = (searchParams.get('tab') ?? 'home') as ProjectTab
  const activeTab = projectWorkspaceTabs.includes(tab) ? tab : 'home'
  const content = tabContent[activeTab]

  return (
    <section className="student-workflow-page">
      <header className="student-workflow-head">
        <div>
          <h1>주문 관리 MSA 백엔드</h1>
          <p>작업, 문서, 회의록, 팀 관리, 인증 요청을 한곳에서 관리합니다.</p>
        </div>
        <Link className="figma-button figma-button--secondary" to={ROUTES.studentProjectChangeRequest.replace(':projectId', 'order-api')}>
          변경 제안
        </Link>
      </header>

      <nav className="student-workspace-tabs" aria-label="프로젝트 탭">
        {projectWorkspaceTabs.map((item) => (
          <Link
            className={`figma-chip ${item === activeTab ? 'is-selected' : ''}`}
            key={item}
            to={`${ROUTES.studentProjectWorkspace.replace(':projectId', 'order-api')}?tab=${item}`}
          >
            {projectWorkspaceTabLabels[item]}
          </Link>
        ))}
      </nav>

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

      {activeTab === 'certification' ? (
        <section className="student-workflow-panel">
          <h2>인증 요청 전 확인</h2>
          <p>대표 산출물과 내 기여도를 확인한 뒤 매니저 검토를 요청합니다.</p>
          <FigmaButton>인증 요청 제출</FigmaButton>
        </section>
      ) : null}
    </section>
  )
}
