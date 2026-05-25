import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './student-onboarding.css'

type OnboardingStep = 1 | 2 | 3

const skills = ['Java', 'Spring', 'React', 'SQL', 'Python', 'Docker', 'Git', 'AWS', 'JPA', 'TypeScript', 'REST API', 'Linux']

function getInitialStep(stepParam: string | null): OnboardingStep {
  if (stepParam === 'skills') return 2
  if (stepParam === 'links') return 3
  return 1
}

function getStepParam(step: OnboardingStep) {
  if (step === 2) return 'skills'
  if (step === 3) return 'links'
  return null
}

// Figma의 온보딩 화면을 3단계 흐름으로 구현한 페이지입니다.
// Step 1의 학습 다짐은 필수값이므로 비어 있으면 다음 단계로 넘어갈 수 없습니다.
export function StudentOnboardingPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [step, setStepState] = useState<OnboardingStep>(() => getInitialStep(searchParams.get('step')))
  const [pledge, setPledge] = useState('')
  const [didTryNext, setDidTryNext] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Java', 'Spring', 'SQL', 'Git'])
  const [blogUrl, setBlogUrl] = useState('')
  const [githubUrl, setGithubUrl] = useState('')

  const isPledgeMissing = !pledge.trim()

  function setStep(nextStep: OnboardingStep) {
    setStepState(nextStep)
    const nextStepParam = getStepParam(nextStep)
    if (nextStepParam) {
      setSearchParams({ step: nextStepParam })
    } else {
      setSearchParams({})
    }
  }

  function goNext() {
    if (step === 1 && isPledgeMissing) {
      setDidTryNext(true)
      return
    }

    if (step === 3) {
      navigate(ROUTES.studentDashboard)
      return
    }

    setStep((step + 1) as OnboardingStep)
  }

  function goPrev() {
    setStep(Math.max(1, step - 1) as OnboardingStep)
  }

  function toggleSkill(skill: string) {
    setSelectedSkills((current) =>
      current.includes(skill)
        ? current.filter((item) => item !== skill)
        : [...current, skill],
    )
  }

  return (
    <main className="onboarding-page">
      <header className="onboarding-top">
        <div className="onboarding-logo">
          <strong>
            <span>PLAY</span>DATA
          </strong>
          <p>Learning Management System</p>
        </div>
        <button type="button">한국어 ▾</button>
      </header>

      <section className="onboarding-hero">
        <p className="welcome-chip">WELCOME</p>
        <h1>
          환영합니다! 학습 시작 전
          <br />
          몇 가지만 알려주세요
        </h1>
        <p>
          다짐과 스킬, 외부 링크를 입력하면 학습 시작 상태가 확정됩니다. 입력은
          마이 프로필에서 언제든 보완할 수 있어요.
        </p>
      </section>

      <ol className="onboarding-stepper">
        <li className={step === 1 ? 'is-active' : 'is-complete'}>
          <button onClick={() => setStep(1)} type="button">
            <span>1</span>
            다짐
          </button>
        </li>
        <li className={step === 2 ? 'is-active' : step === 3 ? 'is-complete' : ''}>
          <button onClick={() => setStep(2)} type="button">
            <span>2</span>
            스킬
          </button>
        </li>
        <li className={step === 3 ? 'is-active' : ''}>
          <button onClick={() => setStep(3)} type="button">
            <span>3</span>
            외부 URL
          </button>
        </li>
      </ol>

      <section className="onboarding-card">
        {step === 1 ? (
          <>
            <p className="onboarding-card__eyebrow">STEP 01 / 03</p>
            <h2>당신의 학습 다짐을 적어주세요</h2>
            <p>
              어떤 학습자가 되고 싶으신가요? 짧아도 좋아요. 다짐은 마이 프로필에서
              언제든 수정할 수 있습니다.
            </p>

            <label className="pledge-field">
              <span>
                학습 다짐 <b>필수</b>
              </span>
              <textarea
                maxLength={300}
                onChange={(event) => setPledge(event.target.value)}
                placeholder="예) 매일 1시간씩 꾸준히 코딩하고, 한 달 안에 첫 토이 프로젝트를 완성하는 학습자가 되겠습니다."
                value={pledge}
              />
              <em>{pledge.length} / 300</em>
            </label>

            {didTryNext && isPledgeMissing ? (
              <p className="onboarding-required">학습 다짐은 필수 입력값입니다.</p>
            ) : null}
            <p className="onboarding-tip">입력한 다짐은 대시보드 상단과 마이 프로필에 노출됩니다.</p>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <p className="onboarding-card__eyebrow">STEP 02 / 03</p>
            <h2>관심 스킬을 선택해주세요</h2>
            <p>앞으로 집중하고 싶은 기술을 선택해주세요. 선택한 스킬은 수강 역량 증명서 종합 요약과 추천 학습 자료에 활용됩니다.</p>

            <div className="skill-field__label">
              <span>관심 스킬</span>
              <b>다중 선택</b>
            </div>
            <div className="skill-picker" aria-label="관심 스킬">
              {skills.map((skill) => (
                <button
                  className={selectedSkills.includes(skill) ? 'is-selected' : ''}
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  type="button"
                >
                  {selectedSkills.includes(skill) ? `✓ ${skill}` : skill}
                </button>
              ))}
              <p>{selectedSkills.length}개 선택됨 · 최대 8개까지 선택 가능</p>
            </div>

            <p className="onboarding-tip">선택한 스킬은 온보딩 완료 후에도 마이 프로필에서 수정할 수 있습니다.</p>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <p className="onboarding-card__eyebrow">STEP 03 / 03</p>
            <h2>외부 URL을 연결해주세요</h2>
            <p>블로그와 GitHub 주소를 등록하면 증명서와 마이 프로필에서 학습 근거로 활용할 수 있습니다.</p>

            <div className="url-field__label">
              <span>외부 링크</span>
              <b>선택</b>
            </div>
            <div className="url-fields">
              <label>
                블로그 URL
                <input
                  onChange={(event) => setBlogUrl(event.target.value)}
                  placeholder="https://your-blog.example.com/posts/..."
                  type="url"
                  value={blogUrl}
                />
              </label>
              <label>
                GitHub URL
                <input
                  onChange={(event) => setGithubUrl(event.target.value)}
                  placeholder="https://github.com/your-name"
                  type="url"
                  value={githubUrl}
                />
              </label>
            </div>

            <p className="onboarding-tip">외부 URL은 공개 설정에서 노출 여부를 다시 조정할 수 있습니다.</p>
          </>
        ) : null}

        <footer className="onboarding-card__actions">
          <Link to={ROUTES.studentDashboard}>건너뛰기</Link>
          <button disabled={step === 1} onClick={goPrev} type="button">{step === 1 ? '이전' : '← 이전'}</button>
          <button
            className="primary"
            disabled={step === 1 && isPledgeMissing}
            onClick={goNext}
            type="button"
          >
            {step === 3 ? '시작하기' : '다음 →'}
          </button>
        </footer>
      </section>

      <section className="onboarding-preview">
        <article className={step === 2 ? 'is-current' : ''}>
          <p>STEP 02</p>
          <h3>관심 스킬 선택</h3>
          <small>Skill 마스터에서 다중 선택할 수 있어요.</small>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </article>
        <article className={step === 3 ? 'is-current' : ''}>
          <p>STEP 03</p>
          <h3>외부 URL 등록</h3>
          <small>블로그·GitHub 링크를 등록하세요. 선택 입력입니다.</small>
          <div>🔗 블로그 URL (선택)</div>
          <div>🔗 GitHub URL (선택)</div>
        </article>
      </section>

      <footer className="onboarding-footer">
        <p>이용안내 | 개인정보처리방침 | 고객센터</p>
        <small>© 2026 PLAYDATA. All rights reserved.</small>
      </footer>
    </main>
  )
}
