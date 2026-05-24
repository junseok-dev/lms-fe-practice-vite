import { LoginForm } from '../../features/auth/components/LoginForm'
import './login-page.css'

// Figma Main의 "로그인" 프레임을 기준으로 만든 공통 진입 화면입니다.
// 화면 상태 페이지는 라우트로 연결되어 있고, 로그인 화면 자체는 Figma 시안과 최대한 동일하게 유지합니다.
export function LoginPage() {
  return (
    <main className="login-page">
      <div className="login-logo">
        <strong>
          <span>PLAY</span>DATA
        </strong>
        <p>Learning Management System</p>
      </div>

      <button className="login-language" type="button">🌐 한국어 ▾</button>

      <section className="login-copy">
        <h1>
          배움이 즐거워지는
          <br />
          스마트한 <span>IT</span> 학습 플랫폼
        </h1>
        <p>
          다양한 IT 교육 콘텐츠와 실습을 통해
          <br />
          당신의 성장을 함께 지원합니다.
        </p>
      </section>

      <section className="login-feature-list" aria-label="서비스 특징">
        <FeatureCard description="단계별 커리큘럼으로 효과적인 학습" title="체계적인 학습" tone="teal" />
        <FeatureCard description="실습과 프로젝트로 실무 역량 강화" title="실습 중심 교육" tone="purple" />
        <FeatureCard description="나의 학습을 한눈에 확인하고 관리" title="학습 현황 관리" tone="blue" />
      </section>

      <section className="login-card" aria-labelledby="login-title">
        <div className="login-card__icon">🔒</div>
        <h2 id="login-title">로그인</h2>
        <p>계정 정보를 입력하여 로그인하세요.</p>
        <LoginForm />
      </section>

      <DemoAccountsHint />

      <footer className="login-page__footer">
        <p>이용안내    |    개인정보처리방침    |    고객센터</p>
        <small>© 2024 PLAYDATA. All rights reserved.</small>
      </footer>
    </main>
  )
}

type FeatureCardProps = {
  description: string
  title: string
  tone: 'teal' | 'purple' | 'blue'
}

function FeatureCard({ description, title, tone }: FeatureCardProps) {
  return (
    <article className="login-feature-card">
      <div className={`login-feature-card__icon is-${tone}`} />
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

function DemoAccountsHint() {
  return (
    <section className="demo-hint" aria-label="프로토타입 데모 계정">
      <header>
        <span />
        <strong>프로토타입 데모 계정</strong>
      </header>
      <div className="demo-hint__grid">
        <DemoRow badge="성공" detail="아이디: playdata" password="/  비번: 1234" result="→ 대시보드" />
        <DemoRow badge="차단" detail="아이디: disabled" password="/  비번: (아무 값)" result="→ 비활성 계정" />
        <DemoRow badge="서버" detail="아이디: server" password="/  비번: (아무 값)" result="→ 서버 오류" />
        <DemoRow badge="오류" detail="아이디: (그 외)" password="/  비번: (아무 값)" result="→ 아이디·비번 불일치" />
        <DemoRow badge="공란" detail="아이디: (빈칸)" password="/  비번: (빈칸)" result="→ 필수값 미입력" />
      </div>
      <p>입력 필드를 클릭해서 직접 타이핑할 수 있습니다.</p>
    </section>
  )
}

type DemoRowProps = {
  badge: string
  detail: string
  password: string
  result: string
}

function DemoRow({ badge, detail, password, result }: DemoRowProps) {
  return (
    <div className="demo-hint__row">
      <span>{badge}</span>
      <code>{detail}</code>
      <code>{password}</code>
      <em>{result}</em>
    </div>
  )
}
