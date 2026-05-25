import { Link } from 'react-router-dom'
import { FigmaButton, FigmaChip, FigmaNoticeBanner, FigmaStatusBadge, FigmaTextarea } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import './student-missing-pages.css'

const projectMeta = ['역할 PM', '팀 프로젝트 · 4명', '2026-04-01 ~ 2026-05-30', '인증일 2026-05-08'] as const

const changeFields = [
  { label: '제목', selected: false },
  { label: '설명', selected: true },
  { label: '팀원', selected: false },
  { label: '기여도', selected: false },
  { label: '산출물', selected: true },
] as const

const changeItems = [
  {
    label: '설명',
    tone: 'ok',
    before: '주문·결제·재고 도메인을 분리한 MSA 구조의 백엔드 프로젝트입니다.',
    after: '주문·결제·재고 도메인을 분리한 MSA 구조의 백엔드 프로젝트입니다. 결제 모듈은 이벤트 기반 비동기 처리로 리팩터링했습니다.',
  },
  {
    label: '산출물',
    tone: 'purple',
    before: 'API 명세서 v1.pdf',
    after: 'API 명세서 v2.pdf — 결제 비동기 흐름 반영',
  },
] as const

// Figma frame: "수강생 — 프로젝트 변경 제안 (/student/projects/:projectId/change-requests/new)"
// 인증 완료 프로젝트의 수정 요청을 사유와 변경 전후 비교로 제출하는 화면입니다.
export function StudentProjectChangeRequestPage() {
  return (
    <section className="student-workflow-page student-project-change-request-page">
      <header className="student-workflow-head">
        <div>
          <h1>프로젝트 변경 제안</h1>
          <p>인증 완료된 프로젝트의 수정·삭제를 강사에게 제안합니다. 승인 시 원본에 반영됩니다.</p>
        </div>
      </header>

      <FigmaNoticeBanner title="인증 완료된 프로젝트입니다">
        변경 제안은 강사 검토·승인 후 원본에 반영됩니다. 반려 시 사유 코멘트가 전달됩니다.
      </FigmaNoticeBanner>

      <section className="student-change-request-card">
        <div className="student-change-request-summary-head">
          <h2>주문 관리 MSA 백엔드</h2>
          <FigmaStatusBadge tone="ok">인증 완료</FigmaStatusBadge>
        </div>
        <ul className="student-change-request-meta" aria-label="프로젝트 정보">
          {projectMeta.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="student-change-request-divider" />
        <div className="student-change-request-field-head">
          <span>변경 사유</span>
          <FigmaStatusBadge tone="danger">필수</FigmaStatusBadge>
        </div>
        <FigmaTextarea
          aria-label="변경 사유"
          defaultValue="결제 모듈 리팩터링 결과를 설명에 반영하고, 최신 API 명세서로 산출물을 교체하기 위함입니다."
        />
      </section>

      <section className="student-change-request-card">
        <div className="student-change-request-section-head">
          <h2>변경 항목 선택</h2>
          <span>변경할 항목을 선택하세요</span>
        </div>
        <div className="student-change-request-chips" aria-label="변경 항목">
          {changeFields.map((field) => (
            <FigmaChip key={field.label} selected={field.selected}>
              {field.label}
            </FigmaChip>
          ))}
        </div>

        <div className="student-change-request-compare-list">
          {changeItems.map((item) => (
            <article className="student-change-request-compare" key={item.label}>
              <FigmaStatusBadge tone={item.tone}>{item.label}</FigmaStatusBadge>
              <div className="student-change-request-compare-grid">
                <div className="student-change-request-value student-change-request-value--before">
                  <strong>변경 전</strong>
                  <p>{item.before}</p>
                </div>
                <div className="student-change-request-value student-change-request-value--after">
                  <strong>변경 후</strong>
                  <p>{item.after}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="student-change-request-divider" />
        <footer className="student-change-request-actions">
          <Link className="figma-button figma-button--secondary" to={ROUTES.studentProjectWorkspace.replace(':projectId', 'order-api')}>
            취소
          </Link>
          <div>
            <span>저장 시 강사에게 requested 상태로 전달됩니다</span>
            <FigmaButton>변경 제안 저장</FigmaButton>
          </div>
        </footer>
      </section>
    </section>
  )
}
