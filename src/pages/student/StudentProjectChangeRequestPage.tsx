import { Link } from 'react-router-dom'
import { FigmaButton, FigmaInputField, FigmaTextarea } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import './student-missing-pages.css'

// Figma frame: "수강생 — 프로젝트 변경 제안"
// 프로젝트 정보 변경 요청을 작성하는 페이지입니다.
export function StudentProjectChangeRequestPage() {
  return (
    <section className="student-workflow-page">
      <header className="student-workflow-head">
        <div>
          <h1>프로젝트 변경 제안</h1>
          <p>프로젝트명, 팀원, 기간, 산출물 변경이 필요할 때 매니저에게 검토를 요청합니다.</p>
        </div>
      </header>

      <section className="student-workflow-panel">
        <div className="student-workflow-grid">
          <FigmaInputField label="변경 항목" placeholder="예: 팀원 역할 변경" />
          <FigmaInputField label="희망 적용일" placeholder="2026-05-24" />
        </div>
        <FigmaTextarea label="변경 사유" placeholder="변경이 필요한 이유를 입력하세요." />
        <FigmaTextarea label="변경 후 내용" placeholder="변경 후 프로젝트 정보를 입력하세요." />
        <footer className="student-workflow-actions">
          <Link className="figma-button figma-button--secondary" to={ROUTES.studentProjectWorkspace.replace(':projectId', 'order-api')}>
            취소
          </Link>
          <FigmaButton>변경 제안 제출</FigmaButton>
        </footer>
      </section>
    </section>
  )
}
