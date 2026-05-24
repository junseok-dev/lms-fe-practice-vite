import { Link } from 'react-router-dom'
import { FigmaButton, FigmaChip, FigmaNoticeBanner } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { peerTargets } from '../../mocks/studentMissingPages'
import './student-missing-pages.css'

// Figma frame: "수강생 — PeerTag 부여"
// 동료에게 익명 태그를 부여하는 페이지입니다.
export function StudentPeerTagPage() {
  return (
    <section className="student-workflow-page">
      <FigmaNoticeBanner title="PeerTag는 익명으로 전달됩니다">
        같은 기수 동료에게만 부여할 수 있고, 본인은 평가 대상이 아닙니다.
      </FigmaNoticeBanner>

      <header className="student-workflow-head">
        <div>
          <h1>PeerTag 부여</h1>
          <p>동료에게 어울리는 작업 태그를 선택해 주세요.</p>
        </div>
      </header>

      <div className="student-workflow-grid">
        {peerTargets.map((target) => (
          <article className="student-workflow-card" key={target.name}>
            <h3>{target.name}</h3>
            <p>{target.role}</p>
            <div className="student-peer-tag-list">
              {target.tags.map((tag) => (
                <FigmaChip key={tag}>{tag}</FigmaChip>
              ))}
            </div>
            <FigmaButton>태그 저장</FigmaButton>
          </article>
        ))}
      </div>

      <Link className="figma-button figma-button--secondary" to={ROUTES.studentPeerEvaluations}>
        허브로 돌아가기
      </Link>
    </section>
  )
}
