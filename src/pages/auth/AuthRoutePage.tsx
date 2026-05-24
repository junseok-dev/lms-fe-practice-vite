import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import { demoAccounts } from '../../mocks/auth'
import './auth-pages.css'

// Figma의 "공통 — 역할 라우팅 (/auth/route)" 화면입니다.
// 로그인 성공 후 잠시 역할을 확인한 뒤 적절한 화면으로 이동합니다.
export function AuthRoutePage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const accountId = searchParams.get('as')
  const account = demoAccounts.find((item) => item.id === accountId)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate(account?.nextPath ?? `${ROUTES.forbidden}?reason=unauthenticated`)
    }, 1100)

    return () => window.clearTimeout(timer)
  }, [account?.nextPath, navigate])

  return (
    <main className="auth-route-page">
      <div className="auth-route-orb auth-route-orb--top" />
      <div className="auth-route-orb auth-route-orb--bottom" />

      <div className="auth-route-avatar" aria-hidden="true">J</div>

      <section className="auth-route-content" aria-live="polite">
        <div className="auth-route-logo">
          <strong>
            <span>PLAY</span>DATA
          </strong>
          <p>Learning Management System</p>
        </div>

        <div className="auth-route-spinner" aria-hidden="true" />

        <h1>역할 확인 중...</h1>
        <p>잠시만 기다려 주세요. 적합한 화면으로 이동합니다.</p>
      </section>
    </main>
  )
}
