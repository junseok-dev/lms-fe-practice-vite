import type { FormEvent } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../constants/routes'
import { findDemoAccount } from '../../../mocks/auth'
import './login-form.css'

type LoginError =
  | 'required_fields'
  | 'invalid_credentials'
  | 'disabled_user'
  | 'server_error'
  | ''

// Figma 로그인 카드 안의 입력, 오류 배너, 저장 체크, 제출 버튼, 고객센터 박스를 구현합니다.
export function LoginForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<LoginError>('')

  const isMissingRequired = !email.trim() || !password.trim()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isMissingRequired) {
      setError('required_fields')
      return
    }

    if (email === 'server@example.com' || email === 'server') {
      setError('server_error')
      return
    }

    if (email === 'disabled@example.com' || email === 'disabled') {
      setError('disabled_user')
      return
    }

    const account = findDemoAccount(email, password)

    if (!account) {
      setError('invalid_credentials')
      return
    }

    if (account.disabled) {
      setError('disabled_user')
      return
    }

    navigate(`${ROUTES.authRoute}?as=${account.id}`)
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="login-input login-input--id">
        <span aria-hidden="true">👤</span>
        <input
          aria-label="아이디"
          onChange={(event) => {
            setEmail(event.target.value)
            setError('')
          }}
          placeholder="아이디"
          type="text"
          value={email}
        />
      </label>

      <label className="login-input login-input--password">
        <span aria-hidden="true">🔒</span>
        <input
          aria-label="비밀번호"
          onChange={(event) => {
            setPassword(event.target.value)
            setError('')
          }}
          placeholder="비밀번호"
          type="password"
          value={password}
        />
      </label>

      <LoginErrorBanner error={error} />

      <div className="login-form__meta">
        <label>
          <span className="login-checkbox" />
          아이디 저장
        </label>
        <Link to={ROUTES.passwordReset}>비밀번호 찾기</Link>
      </div>

      <button className="login-submit" type="submit">
        로그인
      </button>

      <section className="login-help-card">
        <span className="login-help-card__icon">🎧</span>
        <strong>로그인에 문제가 있으신가요?</strong>
        <p>고객센터를 통해 문의해주세요.</p>
        <a href="#support">고객센터 바로가기 →</a>
      </section>
    </form>
  )
}

function LoginErrorBanner({ error }: { error: LoginError }) {
  if (!error) {
    return null
  }

  const messages = {
    required_fields: '아이디와 비밀번호를 모두 입력해 주세요.',
    invalid_credentials: '아이디 또는 비밀번호가 올바르지 않습니다.',
    disabled_user: '비활성화된 계정입니다. 담당 매니저에게 문의해 주세요.',
    server_error: '일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
  }

  return <p className="login-error-banner">{messages[error]}</p>
}
