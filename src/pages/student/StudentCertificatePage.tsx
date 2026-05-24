import { Link } from 'react-router-dom'
import { studentCertificate } from '../../mocks/studentLearningEvidence'
import './student-learning-evidence.css'

// Figma의 "수강생 — 증명서 미리보기 (/student/certificate)" 프레임을 구현하는 페이지입니다.
// 정식 인증 요청은 동작시키지 않고, 보완 항목과 미리보기 정보를 화면 검토용으로 배치합니다.
export function StudentCertificatePage() {
  return (
    <section className="student-evidence student-certificate" aria-label="수강 역량 증명서">
      <section className="certificate-status-card">
        <span>{studentCertificate.status.badge}</span>
        <h2>{studentCertificate.status.title}</h2>
        <p>{studentCertificate.status.description}</p>
        <small>{studentCertificate.status.updatedAt}</small>
        <button type="button">{studentCertificate.status.action}</button>
      </section>

      <h2 className="certificate-issue-title">보완이 필요한 항목 · 3건</h2>
      <div className="certificate-issues">
        {studentCertificate.issues.map((issue) => (
          <article className={`certificate-issue certificate-issue--${issue.tone}`} key={issue.title}>
            <i />
            <strong>{issue.title}</strong>
            <p>{issue.description}</p>
            <Link to={issue.to}>{issue.action}</Link>
          </article>
        ))}
      </div>

      <nav className="certificate-tabs" aria-label="증명서 섹션">
        {studentCertificate.tabs.map((tab, index) => (
          <button className={index === 0 ? 'is-active' : undefined} key={tab} type="button">
            {tab}
          </button>
        ))}
      </nav>

      <section className="certificate-preview-card">
        <p>ENCORE DATA COMPETENCY CERTIFICATE</p>
        <h2>김수강</h2>
        <span>백엔드 부트캠프 · 3기 | 교육 기간 2025.11.04 ~ 2026.05.20 | 총 800시간 / 출석 768시간</span>
        <small>검증 ID · 미발급 (preview)</small>
        <em>PREVIEW</em>
      </section>

      <div className="certificate-metrics">
        {studentCertificate.metrics.map((metric) => (
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
            <p>StudentSkillAxisMart · 0–100</p>
          </header>
          <div className="skill-radar" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <i />
          </div>
          <div className="skill-list">
            {studentCertificate.skills.map((skill) => (
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
          {studentCertificate.featured.map((item) => (
            <article key={item.title}>
              <span>{item.kind}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.meta}</p>
              </div>
              <i>›</i>
            </article>
          ))}
        </section>
      </div>

      <section className="evidence-panel certificate-checklist">
        <header>
          <h2>요청 전 체크</h2>
          <p>모든 항목이 충족되어야 정식 인증 요청이 가능합니다</p>
        </header>
        {studentCertificate.checklist.map((item) => (
          <article key={item.title}>
            <span>{item.title}</span>
            <strong>{item.status}</strong>
          </article>
        ))}
      </section>
    </section>
  )
}
