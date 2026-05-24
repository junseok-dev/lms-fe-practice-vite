import { Link } from 'react-router-dom'
import { FigmaStatusBadge } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { studentTroubleshootingCases } from '../../mocks/studentTroubleshooting'
import './student-troubleshooting.css'

// Figma frame: "수강생 — 트러블슈팅 사례 목록 (/student/troubleshooting)"
// 새 사례 작성과 변경 제안 화면으로 이동할 수 있는 사례 목록 페이지입니다.
export function StudentTroubleshootingPage() {
  return (
    <section className="student-troubleshooting" aria-label="트러블슈팅 사례 목록">
      <header className="student-troubleshooting__toolbar">
        <div>
          <h2>{studentTroubleshootingCases.summary.title}</h2>
          <span>{studentTroubleshootingCases.summary.count}</span>
        </div>
        <Link className="figma-button figma-button--primary" to={ROUTES.studentTroubleshootingNew}>
          + 새 사례 작성
        </Link>
      </header>

      <div className="student-troubleshooting__list">
        {studentTroubleshootingCases.items.map((caseItem) => (
          <article className="student-troubleshooting-card" key={caseItem.title}>
            <header>
              <div>
                <h3>{caseItem.title}</h3>
                {caseItem.badges.map((badge) => (
                  <FigmaStatusBadge key={badge.label} tone={badge.tone}>
                    {badge.label}
                  </FigmaStatusBadge>
                ))}
              </div>
              <Link
                className="figma-button figma-button--secondary"
                to={ROUTES.studentTroubleshootingChangeRequest.replace(':id', 'jpa-n-plus-one')}
              >
                {caseItem.action}
              </Link>
            </header>

            <p className="student-troubleshooting-card__meta">
              <span>{caseItem.createdAt}</span>
              <i />
              <span>{caseItem.updatedAt}</span>
            </p>

            <div className="student-troubleshooting-card__situation">
              <span>상황</span>
              <p>{caseItem.situation}</p>
            </div>

            <div className="student-troubleshooting-card__sections" aria-label="작성 섹션 상태">
              {caseItem.sections.map((section) => (
                <FigmaStatusBadge key={section.label} tone={section.tone}>
                  {section.label}
                </FigmaStatusBadge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
