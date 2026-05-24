import { Link, useLocation } from 'react-router-dom'
import { FigmaButton, FigmaInputField, FigmaTextarea } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { troubleshootingFormSections } from '../../mocks/studentMissingPages'
import './student-missing-pages.css'

// Figma frames: 트러블슈팅 새 사례 작성, 트러블슈팅 변경 제안
// 경로에 change-requests가 있으면 변경 제안 폼으로 보여줍니다.
export function StudentTroubleshootingFormPage() {
  const location = useLocation()
  const isChangeRequest = location.pathname.includes('change-requests')

  return (
    <section className="student-workflow-page">
      <header className="student-workflow-head">
        <div>
          <h1>{isChangeRequest ? '트러블슈팅 변경 제안' : '트러블슈팅 새 사례 작성'}</h1>
          <p>문제 상황, 원인 분석, 해결 과정, 결과와 회고를 분리해 작성합니다.</p>
        </div>
      </header>

      <section className="student-workflow-panel">
        <div className="student-workflow-grid">
          <FigmaInputField label="사례 제목" placeholder="예: JPA N+1 쿼리 해결" />
          <FigmaInputField label="관련 프로젝트" placeholder="주문 관리 MSA 백엔드" />
        </div>
        {troubleshootingFormSections.map((section) => (
          <FigmaTextarea key={section} label={section} placeholder={`${section}을 입력하세요.`} />
        ))}
        <footer className="student-workflow-actions">
          <Link className="figma-button figma-button--secondary" to={ROUTES.studentTroubleshooting}>
            취소
          </Link>
          <FigmaButton>{isChangeRequest ? '변경 제안 제출' : '사례 저장'}</FigmaButton>
        </footer>
      </section>
    </section>
  )
}
