import { Link } from 'react-router-dom'
import { FigmaButton, FigmaNoticeBanner, FigmaTextarea } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import './student-missing-pages.css'

const scoreRows = [
  ['기술 문제해결', 86],
  ['책임감', 92],
  ['소통', 88],
  ['성장 태도', 90],
  ['피드백', 84],
] as const

// Figma frame: "수강생 / PeerReputation 5축 평가".
// 5가지 축으로 동료의 협업 평판을 평가하는 화면입니다.
export function StudentPeerReputationPage() {
  return (
    <section className="student-workflow-page">
      <FigmaNoticeBanner title="5축 평가는 익명으로 집계됩니다">
        평가자는 공개되지 않고, 동일 기수 안에서만 평가할 수 있습니다.
      </FigmaNoticeBanner>

      <header className="student-workflow-head">
        <div>
          <h1>PeerReputation 5축 평가</h1>
          <p>기술, 책임감, 소통, 성장 태도, 피드백 기준으로 동료의 작업 역량을 평가합니다.</p>
        </div>
      </header>

      <section className="student-workflow-panel">
        <h2>김하늘님 평가</h2>
        <div className="student-peer-score-grid">
          {scoreRows.map(([label, score]) => (
            <div className="student-peer-score-row" key={label}>
              <strong>{label}</strong>
              <span>
                <span style={{ width: `${score}%` }} />
              </span>
              <em>{score}</em>
            </div>
          ))}
        </div>
        <FigmaTextarea
          label="추천 코멘트"
          placeholder="동료의 강점이나 함께 일하며 인상 깊었던 점을 입력하세요."
        />
        <footer className="student-workflow-actions">
          <Link className="figma-button figma-button--secondary" to={ROUTES.studentPeerEvaluations}>
            취소
          </Link>
          <FigmaButton>평가 제출</FigmaButton>
        </footer>
      </section>
    </section>
  )
}
