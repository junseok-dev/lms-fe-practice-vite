import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './auth-pages.css'

// Figma의 "공통 — 비밀번호 재설정 안내 (/login/password-reset)" 화면입니다.
// 보안 정책상 자가 재설정이 아니라 담당 매니저 문의 흐름으로 안내합니다.
export function PasswordResetPage() {
  return (
    <main className="password-reset-page">
      <div className="password-reset-orb password-reset-orb--top" />
      <div className="password-reset-orb password-reset-orb--bottom" />

      <section className="password-reset-panel" aria-labelledby="password-reset-title">
        <div className="password-reset-logo">
          <strong>
            <span>PLAY</span>DATA
          </strong>
          <p>Learning Management System</p>
        </div>

        <div className="password-reset-icon" aria-hidden="true">🔑</div>

        <h1 id="password-reset-title">
          담당 매니저에게
          <br />
          문의해 주세요
        </h1>

        <p className="password-reset-description">
          보안 정책상 비밀번호 자가 재설정은 운영하지 않습니다.
          <br />
          매니저가 운영 화면에서 임시 비밀번호를 발급합니다.
        </p>

        <section className="manager-contact-card" aria-label="담당 매니저 문의 정보">
          <div className="manager-contact-card__header">
            <span>문의</span>
            <strong>PLAYDATA 운영팀</strong>
          </div>

          <dl>
            <div>
              <dt>이메일</dt>
              <dd>support@playdata.io</dd>
            </div>
            <div>
              <dt>전화</dt>
              <dd>02-0000-0000</dd>
            </div>
            <div>
              <dt>근무 시간</dt>
              <dd>평일 09:00-18:00 (점심 12:00-13:00)</dd>
            </div>
          </dl>
        </section>

        <section className="manager-tip-card">
          <strong>내 담당 매니저를 모르겠다면?</strong>
          <p>라운지에 계시는 인포 매니저님에게 직접 찾아와 문의 주세요.</p>
        </section>

        <Link className="password-reset-cta" to={ROUTES.login}>
          로그인 화면으로 돌아가기
        </Link>

        <p className="password-reset-footnote">
          개인정보 보호를 위해 이메일·전화로 비밀번호를 직접 안내드리지 않습니다.
        </p>
      </section>
    </main>
  )
}
