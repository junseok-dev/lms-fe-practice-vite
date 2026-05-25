import { Link } from 'react-router-dom'
import { FigmaNoticeBanner } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { studentCertificatePublication } from '../../mocks/studentLearningEvidence'
import './student-learning-evidence.css'

// Figma의 "수강생 — 공개 설정 (/student/certificate/publication)" 프레임을 구현하는 페이지입니다.
// 공개 토글, URL 복사, QR 다운로드는 아직 실제 동작 없이 화면 상태를 검토하는 용도로 배치합니다.
export function StudentCertificatePublicationPage() {
  return (
    <section className="student-evidence certificate-publication" aria-label="증명서 공개 설정">
      <div className="publication-user-chip">
        <span>수</span>
        <strong>{studentCertificatePublication.user}</strong>
      </div>

      <section className="publication-complete-card">
        <div>
          <em>✓</em>
          <p>정식 인증 완료</p>
          <span>인증일 2026-05-14</span>
          <strong>certified</strong>
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
        <Link to={ROUTES.studentCertificate}>증명서 상세 보기</Link>
      </section>

      <section className="publication-toggle-card">
        <div>
          <h2>{studentCertificatePublication.toggle.title}</h2>
          <p>{studentCertificatePublication.toggle.description}</p>
        </div>
        <strong>{studentCertificatePublication.toggle.state}</strong>
        <span aria-hidden="true" />
        <FigmaNoticeBanner title={studentCertificatePublication.toggle.notice}>
          외부 검증 URL 비공개. 검증자는 "비공개 증명서" 안내만 받습니다. 정식 인증 마크는 그대로 유지됩니다.
        </FigmaNoticeBanner>
      </section>

      <div className="publication-grid">
        <section className="evidence-panel publication-verification">
          <header>
            <h2>{studentCertificatePublication.verification.title}</h2>
            <p>{studentCertificatePublication.verification.description}</p>
          </header>
          <label>
            <span>검증 URL</span>
            <div className="publication-url-field">
              <input readOnly value={studentCertificatePublication.verification.url} />
              <button type="button">복사</button>
            </div>
          </label>
          <div className="publication-qr-row">
            <div className="publication-qr" aria-label="QR 코드 미리보기">
              {Array.from({ length: 81 }, (_, index) => (
                <span key={index} />
              ))}
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
          <div className="publication-preview-browser">
            <div className="publication-preview-browser__bar">
              <i aria-hidden="true" />
              <i aria-hidden="true" />
              <i aria-hidden="true" />
              <span>verify.playdata.io/v/abc123def456</span>
            </div>
            <div className="publication-preview-browser__body">
              <span className="publication-preview-certified">CERTIFIED</span>
              <h3>수강 Kim</h3>
              <p>백엔드 부트캠프 · 3기</p>
              <section className="publication-preview-cardlet">
                <span>핵심 역량</span>
                <strong>B+</strong>
              </section>
              <section className="publication-preview-cardlet publication-preview-cardlet--project">
                <span>대표 프로젝트 1건</span>
                <strong>WeatherAPI 분석 서비스</strong>
                <em>Python</em>
              </section>
              <small>검증자 · 외부 인사담당자 / 채용자 등</small>
              <article className="publication-preview-off-modal">
                <span aria-hidden="true">🔒</span>
                <div>
                  <b>공개 OFF</b>
                  <small>외부 검증자는 "비공개 증명서" 안내만 받습니다</small>
                  <em>공개 ON으로 전환하면 위 화면이 노출됩니다</em>
                </div>
              </article>
            </div>
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
        <Link to={ROUTES.studentCertificate}>공개 항목 관리</Link>
      </section>
    </section>
  )
}
