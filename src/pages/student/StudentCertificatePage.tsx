import { Link } from 'react-router-dom'
import { FigmaStatusBadge } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { studentCertificatePreview } from '../../mocks/studentCertificatePreview'
import './student-learning-evidence.css'

// Figma frame: "수강생 - 증명서 미리보기 (/student/certificate)"
// 정식 인증 전 미리보기, 보완 항목, 요청 전 체크 상태를 한 화면에서 보여줍니다.
export function StudentCertificatePage() {
  return (
    <section className="student-evidence student-certificate" aria-label="수강 역량 증명서">
      <section className="certificate-status-card">
        <FigmaStatusBadge tone="neutral">{studentCertificatePreview.status.badge}</FigmaStatusBadge>
        <h2>{studentCertificatePreview.status.title}</h2>
        <p>{studentCertificatePreview.status.description}</p>
        <small>{studentCertificatePreview.status.updatedAt}</small>
        <Link className="figma-button figma-button--primary" to={ROUTES.studentCertificateChangesRequested}>
          {studentCertificatePreview.status.action}
        </Link>
      </section>

      <h2 className="certificate-issue-title">보완이 필요한 항목 · 3건</h2>
      <div className="certificate-issues">
        {studentCertificatePreview.issues.map((issue) => (
          <article className={`certificate-issue certificate-issue--${issue.tone}`} key={issue.title}>
            <i />
            <strong>{issue.title}</strong>
            <p>{issue.description}</p>
            <Link to={issue.to}>{issue.action}</Link>
          </article>
        ))}
      </div>

      <nav className="certificate-tabs" aria-label="증명서 섹션">
        {studentCertificatePreview.tabs.map((tab, index) => (
          <button className={index === 0 ? 'is-active' : undefined} key={tab} type="button">
            {tab}
          </button>
        ))}
      </nav>

      <section className="certificate-preview-card">
        <p>{studentCertificatePreview.certificate.eyebrow}</p>
        <h2>{studentCertificatePreview.certificate.name}</h2>
        <span>{studentCertificatePreview.certificate.description}</span>
        <small>{studentCertificatePreview.certificate.verify}</small>
        <em>{studentCertificatePreview.certificate.stamp}</em>
      </section>

      <div className="certificate-metrics">
        {studentCertificatePreview.metrics.map((metric) => (
          <article className="certificate-metric" key={metric.label}>
            <span>{metric.label}</span>
            <strong>
              {metric.value}
              <small>{metric.unit}</small>
            </strong>
            <p>{metric.note}</p>
            <i className={`tone-${metric.tone}`} />
          </article>
        ))}
      </div>

      <div className="certificate-detail-grid">
        <section className="evidence-panel skill-axis">
          <header>
            <h2>6축 역량 점수</h2>
            <p>StudentSkillAxisMart · 0-100</p>
          </header>
          <div className="skill-radar" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <i />
          </div>
          <div className="skill-list">
            {studentCertificatePreview.skills.map((skill) => (
              <p key={skill.label}>
                <span>{skill.label}</span>
                <strong>{skill.value}</strong>
              </p>
            ))}
          </div>
        </section>

        <section className="evidence-panel featured-records">
          <header>
            <h2>대표 프로젝트·기록</h2>
            <p>강사 인증 완료 · 외부 공개 항목</p>
          </header>
          {studentCertificatePreview.featured.map((item) => (
            <article key={item.title}>
              <span className={`is-${item.tone}`}>{item.kind}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.meta}</p>
              </div>
              <i>→</i>
            </article>
          ))}
        </section>
      </div>

      <header className="certificate-checklist-title">
        <h2>{studentCertificatePreview.checklist.title}</h2>
        <p>{studentCertificatePreview.checklist.description}</p>
      </header>
      <section className="evidence-panel certificate-checklist">
        {studentCertificatePreview.checklist.rows.map((item, index) => (
          <article className={item.passed ? 'is-passed' : 'is-blocked'} key={item.title}>
            <span>{item.passed ? '✓' : '×'}</span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
            <Link
              to={
                index === 0
                  ? ROUTES.studentProfile
                  : index === 2
                    ? ROUTES.studentProjects
                    : index === 3
                      ? ROUTES.studentCertificatePublication
                      : ROUTES.studentCertificateChangesRequested
              }
            >
              {item.action}
            </Link>
          </article>
        ))}
      </section>

      <section className="certificate-request-summary">
        <div>
          <h2>{studentCertificatePreview.summary.title}</h2>
          <p>{studentCertificatePreview.summary.description}</p>
        </div>
        <button className="figma-button figma-button--secondary" disabled type="button">
          {studentCertificatePreview.summary.action}
        </button>
      </section>
    </section>
  )
}
