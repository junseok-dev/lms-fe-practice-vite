import { Link, useSearchParams } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './auth-pages.css'

const forbiddenMessages = {
  unauthenticated: {
    icon: '🔑',
    tone: 'success',
    title: '로그인이 필요합니다',
    description: '토큰이 없거나 만료되었습니다. 다시 로그인해 주세요.',
    primary: '로그인 화면으로',
  },
  forbidden_role: {
    icon: '🚫',
    tone: 'danger',
    title: '역할 권한이 부족합니다',
    description: '이 페이지는 다른 역할만 접근할 수 있습니다.',
    primary: '내 홈으로',
    secondary: '역할 전환',
  },
  forbidden_scope: {
    icon: '🔒',
    tone: 'warning',
    title: '담당 범위를 벗어났습니다',
    description: '본인 담당 과정·기수 외부 데이터는 조회할 수 없습니다.',
    primary: '이전 화면',
    secondary: '담당 범위 보기',
  },
  not_found_or_hidden: {
    icon: '?',
    tone: 'muted',
    title: '페이지를 찾을 수 없습니다',
    description: '존재하지 않거나 숨겨진 페이지입니다.',
    primary: '내 홈으로',
  },
} as const

type ForbiddenReason = keyof typeof forbiddenMessages

// Figma의 "공통 — 권한 오류 4 variants (/403)" 화면입니다.
// query string으로 4가지 상태를 확인하되, 각 상태 카드는 Figma variant의 카드 구조를 따릅니다.
export function ForbiddenPage() {
  const [searchParams] = useSearchParams()
  const reason = (searchParams.get('reason') ?? 'forbidden_role') as ForbiddenReason
  const message = forbiddenMessages[reason] ?? forbiddenMessages.forbidden_role

  return (
    <main className="auth-spec-page auth-spec-page--forbidden">
      <section className="auth-spec-stage auth-spec-stage--forbidden" aria-label="권한 오류">
        <header className="auth-spec-heading">
          <h2>권한 오류 — /403 (4 상태)</h2>
          <p>unauthenticated · forbidden_role · forbidden_scope · not_found_or_hidden</p>
        </header>

        <section className="auth-spec-card auth-spec-card--forbidden">
          <AuthSpecLogo />
          <div className={`auth-spec-icon is-${message.tone}`}>{message.icon}</div>

          <h1>{message.title}</h1>
          <p>{message.description}</p>

          <div className="auth-spec-actions">
            <Link className="auth-spec-primary-link" to={ROUTES.login}>
              {message.primary}
            </Link>
            {'secondary' in message ? (
              <Link className="auth-spec-secondary-link" to={ROUTES.authRoute}>
                {message.secondary}
              </Link>
            ) : null}
          </div>

          <p className="auth-spec-contact">문의: support@playdata.io</p>
        </section>
      </section>
    </main>
  )
}

function AuthSpecLogo() {
  return (
    <div className="auth-spec-logo">
      <strong>
        <span>PLAY</span>DATA
      </strong>
      <p>Learning Management System</p>
    </div>
  )
}
