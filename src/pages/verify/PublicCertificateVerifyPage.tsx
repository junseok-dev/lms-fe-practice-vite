import { Link, useSearchParams } from 'react-router-dom'
import { FigmaButton, FigmaChip, FigmaStatusBadge } from '../../components/figma/common'
import { publicCertificateVerification } from '../../mocks/publicCertificateVerification'
import './public-certificate-verify.css'

type VerifyStatus = 'loading' | 'invalid' | 'private' | 'public'

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'verify-brand verify-brand--compact' : 'verify-brand'}>
      <strong>
        <span>PLAY</span>DATA
      </strong>
      {!compact ? <em>Learning Management System</em> : null}
    </div>
  )
}

function FooterNote({ children }: { children: string }) {
  return <p className="verify-footer-note">{children}</p>
}

// Figma frames:
// - "외부 검증 — 검증 URL 진입 (/verify/:publicToken)"
// - "외부 검증 — 잘못된 링크 안내 (/verify/:publicToken)"
// - "외부 검증 — 비공개 안내 (/verify/:publicToken)"
// - "외부 검증 — 공개 증명서 (/verify/:publicToken)"
export function PublicCertificateVerifyPage() {
  const [searchParams] = useSearchParams()
  const status = (searchParams.get('status') ?? 'loading') as VerifyStatus

  if (status === 'invalid') {
    return (
      <main className="verify-page verify-page--center" aria-label="잘못된 검증 링크 안내">
        <section className="verify-state-card verify-state-card--invalid">
          <Brand />
          <div className="verify-state-card__icon" aria-hidden="true">
            !
          </div>
          <header>
            <h1>{publicCertificateVerification.invalid.heading}</h1>
            {publicCertificateVerification.invalid.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </header>
          <div className="verify-state-card__actions">
            <FigmaButton>발급자에게 문의</FigmaButton>
            <Link className="figma-button figma-button--secondary" to="/">
              PLAYDATA 홈으로
            </Link>
          </div>
          <FooterNote>{publicCertificateVerification.invalid.footer}</FooterNote>
        </section>
      </main>
    )
  }

  if (status === 'private') {
    return (
      <main className="verify-page verify-page--center verify-page--private" aria-label="비공개 증명서 안내">
        <section className="verify-private-card">
          <Brand compact />
          <em>Learning Management System</em>
          <div className="verify-private-card__icon" aria-hidden="true" />
          <h1>{publicCertificateVerification.private.heading}</h1>
          <div className="verify-private-card__copy">
            {publicCertificateVerification.private.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <dl>
            {publicCertificateVerification.private.meta.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <Link className="figma-button figma-button--secondary" to="/">
            PLAYDATA 홈으로
          </Link>
          <FooterNote>{publicCertificateVerification.private.footer}</FooterNote>
        </section>
      </main>
    )
  }

  if (status === 'public') {
    return (
      <main className="verify-public-page" aria-label="공개 증명서">
        <section className="verify-public-column">
          <header className="verify-public-card verify-public-header">
            <div>
              <Brand compact />
              <FigmaStatusBadge tone="ok">✓ 유효한 증명서</FigmaStatusBadge>
            </div>
            <dl>
              {publicCertificateVerification.public.meta.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <section className="verify-public-card verify-public-core">
            <h2>수강생 정보</h2>
            <strong>{publicCertificateVerification.public.student.name}</strong>
            <div className="verify-public-chip-row">
              {publicCertificateVerification.public.student.chips.map((chip) => (
                <FigmaChip key={chip}>{chip}</FigmaChip>
              ))}
            </div>
            <hr />
            <p>핵심 역량 등급</p>
            <div className="verify-public-competencies">
              {publicCertificateVerification.public.competencies.map(([label, value]) => (
                <article key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="verify-public-card verify-public-evidence">
            <header>
              <h2>대표 근거</h2>
              <p>공개 허용된 산출물만 표시됩니다</p>
            </header>
            <div>
              {publicCertificateVerification.public.evidence.map((item) => (
                <article key={item.title}>
                  <FigmaChip selected>{item.kind}</FigmaChip>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.note ? <small>{item.note}</small> : null}
                </article>
              ))}
            </div>
          </section>

          <section className="verify-public-card verify-public-info">
            <h2>검증 정보</h2>
            <div>
              {publicCertificateVerification.public.verifyInfo.map(([label, value]) => (
                <article key={label}>
                  <span>{label}</span>
                  <code>{value}</code>
                </article>
              ))}
            </div>
            <p>{publicCertificateVerification.public.notice}</p>
          </section>
        </section>
      </main>
    )
  }

  return (
    <main className="verify-page verify-page--loading" aria-label="검증 URL 진입">
      <header>
        <h1>{publicCertificateVerification.loading.title}</h1>
        <p>{publicCertificateVerification.loading.description}</p>
      </header>
      <section className="verify-loading-card">
        <Brand />
        <div className="verify-spinner" aria-hidden="true" />
        <h2>{publicCertificateVerification.loading.heading}</h2>
        <div>
          {publicCertificateVerification.loading.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <FooterNote>{publicCertificateVerification.loading.footnote}</FooterNote>
      </section>
    </main>
  )
}
