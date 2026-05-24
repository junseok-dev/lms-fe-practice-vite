import { studentCertificatePublication } from '../../mocks/studentLearningEvidence'
import './student-learning-evidence.css'

// Figma의 "수강생 — 공개 설정 (/student/certificate/publication)" 프레임을 구현하는 페이지입니다.
// 공개 토글, URL 복사, QR 다운로드는 아직 실제 동작 없이 화면 상태를 검토하는 용도로 배치합니다.
export function StudentCertificatePublicationPage() {
  return (
    <section className="student-evidence certificate-publication" aria-label="증명서 공개 설정">
      <div className="publication-user-chip">
        <span>김</span>
        <strong>{studentCertificatePublication.user}</strong>
      </div>

      <section className="publication-complete-card">
        <div>
          <p>ENCORE DATA</p>
          <strong>VERIFIED</strong>
        </div>
        <article>
          <small>학생 / 과정·기수</small>
          <strong>{studentCertificatePublication.complete.student}</strong>
        </article>
        <article>
          <small>검증 ID</small>
          <strong>{studentCertificatePublication.complete.verifyId}</strong>
        </article>
        <article>
          <small>snapshotHash</small>
          <strong>{studentCertificatePublication.complete.snapshotHash}</strong>
        </article>
        <button type="button">상세 보기</button>
      </section>

      <section className="publication-toggle-card">
        <div>
          <h2>{studentCertificatePublication.toggle.title}</h2>
          <p>{studentCertificatePublication.toggle.description}</p>
        </div>
        <strong>{studentCertificatePublication.toggle.state}</strong>
        <span aria-hidden="true" />
        <p className="publication-notice">{studentCertificatePublication.toggle.notice}</p>
      </section>

      <div className="publication-grid">
        <section className="evidence-panel publication-verification">
          <header>
            <h2>{studentCertificatePublication.verification.title}</h2>
            <p>{studentCertificatePublication.verification.description}</p>
          </header>
          <label>
            <span>검증 URL</span>
            <input readOnly value={studentCertificatePublication.verification.url} />
          </label>
          <div className="publication-qr-row">
            <div className="publication-qr" aria-label="QR 코드 미리보기">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div>
              <p>{studentCertificatePublication.verification.qrHint}</p>
              <button type="button">QR 다운로드</button>
              <button type="button">URL 복사</button>
            </div>
          </div>
          <small>{studentCertificatePublication.verification.privacy}</small>
        </section>

        <section className="evidence-panel publication-preview">
          <header>
            <h2>{studentCertificatePublication.preview.title}</h2>
            <p>{studentCertificatePublication.preview.description}</p>
          </header>
          <div>
            <strong>비공개 증명서</strong>
            <p>수강생이 공개를 허용하면 외부 검증 페이지에서 인증 정보를 확인할 수 있습니다.</p>
          </div>
          <small>{studentCertificatePublication.preview.footnote}</small>
        </section>
      </div>

      <section className="evidence-panel publication-compare">
        <header>
          <h2>{studentCertificatePublication.compare.title}</h2>
          <p>{studentCertificatePublication.compare.description}</p>
        </header>
        <div>
          <article>
            <strong>공개 ON</strong>
            {studentCertificatePublication.compare.on.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </article>
          <article>
            <strong>공개 OFF</strong>
            {studentCertificatePublication.compare.off.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </article>
        </div>
      </section>

      <section className="publication-privacy-card">
        <strong>개인정보 안내</strong>
        <p>{studentCertificatePublication.privacy}</p>
        <button type="button">공개 항목 관리</button>
      </section>
    </section>
  )
}
