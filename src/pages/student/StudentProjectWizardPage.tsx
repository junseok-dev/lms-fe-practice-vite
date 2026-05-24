import { Link, useSearchParams } from 'react-router-dom'
import { FigmaInputField, FigmaTextarea } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { projectWizardSteps } from '../../mocks/studentMissingPages'
import './student-missing-pages.css'

// Figma frames: "수강생 — 프로젝트 생성 마법사" Step 1~4
// /student/projects/new?step=숫자 형태로 단계별 생성 화면을 보여줍니다.
export function StudentProjectWizardPage() {
  const [searchParams] = useSearchParams()
  const step = Math.min(Math.max(Number(searchParams.get('step') ?? 1), 1), 4)
  const current = projectWizardSteps[step - 1]

  const stepFields = {
    1: [
      ['프로젝트명', '예: 주문 관리 MSA 백엔드'],
      ['프로젝트 유형', '팀 프로젝트'],
      ['진행 기간', '2026-05-20 ~ 2026-06-20'],
      ['대표 저장소', 'https://github.com/playdata/order-msa'],
    ],
    2: [
      ['팀명', 'Order Rangers'],
      ['팀원 / 역할', '김하늘 PM, 이준 API, 박서연 UI'],
      ['내 역할', 'PM · 백엔드 API'],
      ['기여 목표', '40%'],
    ],
    3: [
      ['기술 스택', 'Spring Boot, JPA, Kafka, Docker'],
      ['배포 URL', 'https://order-api.playdata.dev'],
      ['문서 URL', 'https://notion.so/order-msa'],
      ['주요 산출물', 'ERD, API 명세, 회고 문서'],
    ],
    4: [
      ['최종 프로젝트명', '주문 관리 MSA 백엔드'],
      ['팀 구성', '4명 · 팀 프로젝트'],
      ['내 기여도', '40%'],
      ['인증 요청 여부', '생성 후 워크스페이스에서 요청'],
    ],
  } as const

  return (
    <section className="student-workflow-page">
      <header className="student-workflow-head">
        <div>
          <h1>프로젝트 생성 4단계 마법사</h1>
          <p>기본 정보, 팀 설정, 상세 설정, 생성 확인 순서로 프로젝트를 등록합니다.</p>
        </div>
      </header>

      <div className="student-project-wizard-steps">
        {projectWizardSteps.map((item, index) => (
          <article className={index + 1 === step ? 'is-active' : ''} key={item.title}>
            <strong>Step {index + 1}</strong>
            <h3>{item.title}</h3>
            <p>{item.helper}</p>
          </article>
        ))}
      </div>

      <section className="student-workflow-panel">
        <h2>{current.title}</h2>
        <p>{current.helper}</p>
        <div className="student-workflow-grid">
          {stepFields[step as keyof typeof stepFields].map(([label, placeholder]) => (
            <FigmaInputField key={label} label={label} placeholder={placeholder} />
          ))}
        </div>
        <FigmaTextarea label="프로젝트 설명" placeholder="프로젝트 목표, 핵심 기능, 내가 맡은 역할을 입력하세요." />
      </section>

      <footer className="student-workflow-actions">
        <Link className="figma-button figma-button--secondary" to={ROUTES.studentProjects}>
          취소
        </Link>
        {step > 1 ? (
          <Link className="figma-button figma-button--secondary" to={`${ROUTES.studentProjectsNew}?step=${step - 1}`}>
            이전
          </Link>
        ) : null}
        {step < 4 ? (
          <Link className="figma-button figma-button--primary" to={`${ROUTES.studentProjectsNew}?step=${step + 1}`}>
            다음
          </Link>
        ) : (
          <Link className="figma-button figma-button--primary" to={ROUTES.studentProjectWorkspace.replace(':projectId', 'order-api')}>
            워크스페이스 생성
          </Link>
        )}
      </footer>
    </section>
  )
}
