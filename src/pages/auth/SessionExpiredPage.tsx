import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './auth-pages.css'

// Figma의 "공통 — 세션 만료 안내 (/session-expired)" 화면입니다.
// 실제 토큰 만료 대신 URL로 직접 접속해서 상태 화면을 확인할 수 있습니다.
export function SessionExpiredPage() {
  return (
    <main className="auth-spec-page auth-spec-page--session">
      <section className="auth-spec-stage" aria-label="세션 만료 안내">
        <header className="auth-spec-heading">
          <h2>세션 만료 — /session-expired</h2>
          <p>토큰 만료 안내 (Forbidden과 별도). 로그인 후 만료 전 페이지로 복귀.</p>
        </header>

        <section className="auth-spec-card auth-spec-card--session">
          <AuthSpecLogo />
          <div className="auth-spec-icon is-warning">⏰</div>

        <h1>세션이 만료되었습니다</h1>
          <p>
            보안을 위해 일정 시간 후 자동 로그아웃 되었습니다.
            <br />
            다시 로그인하시면 마지막 페이지로 돌아갑니다.
          </p>

          <div className="auth-spec-session-info" aria-hidden="true" />

          <Link className="auth-spec-primary-link" to={ROUTES.login}>다시 로그인</Link>

          <p className="auth-spec-help">
            문제가 계속 발생하나요? <span>도움말 →</span>
          </p>
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
