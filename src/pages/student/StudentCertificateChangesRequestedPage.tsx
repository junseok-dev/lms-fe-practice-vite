import { Link } from 'react-router-dom'
import { studentCertificateChangesRequested } from '../../mocks/studentLearningEvidence'
import './student-learning-evidence.css'

// Figma의 "수강생 — 보완 요청 상세 (/student/certificate/changes-requested)" 프레임을 구현하는 페이지입니다.
// 재요청 동작은 아직 붙이지 않고, 보완 사유와 관련 화면 이동 흐름을 mock 데이터로 확인합니다.
export function StudentCertificateChangesRequestedPage() {
  return (
    <section className="student-evidence certificate-request" aria-label="보완 요청 상세">
      <section className="request-status-card">
        <span>{studentCertificateChangesRequested.status.badge}</span>
        <h2>{studentCertificateChangesRequested.status.title}</h2>
        <p>{studentCertificateChangesRequested.status.description}</p>
        <div>
          {studentCertificateChangesRequested.status.meta.map((item) => (
            <article key={item.label}>
              <small>{item.label}</small>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="evidence-panel request-reasons">
        <header>
          <h2>보완 요청 사유</h2>
          <p>각 항목의 코멘트를 확인하고 관련 화면에서 수정 후 돌아오세요</p>
        </header>

        {studentCertificateChangesRequested.reasons.map((reason) => (
          <article className="request-reason-card" key={reason.number}>
            <strong>{reason.number}</strong>
            <div>
              <p>
                <b>{reason.title}</b>
                <span>{reason.target}</span>
              </p>
              <h3>{reason.summary}</h3>
              <small>{reason.description}</small>
            </div>
            <Link to={reason.to}>{reason.action}</Link>
          </article>
        ))}
      </section>

      <section className="evidence-panel request-shortcuts">
        <header>
          <h2>관련 영역 바로가기</h2>
          <p>보완 사항이 있는 5개 영역으로 바로 이동할 수 있습니다</p>
        </header>

        <div>
          {studentCertificateChangesRequested.shortcuts.map((shortcut) => (
            <Link to={shortcut.to} key={shortcut.label}>
              <strong>{shortcut.label}</strong>
              <span>{shortcut.status}</span>
              <i>이동 →</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="evidence-panel certificate-checklist">
        <header>
          <h2>정식 인증 재요청</h2>
          <p>재요청 전 체크리스트 — 모든 항목이 완료되어야 재요청 버튼이 활성화됩니다</p>
        </header>
        {studentCertificateChangesRequested.checklist.map((item) => (
          <article key={item.title}>
            <span>{item.title}</span>
            <strong>{item.status}</strong>
          </article>
        ))}
      </section>
    </section>
  )
}
