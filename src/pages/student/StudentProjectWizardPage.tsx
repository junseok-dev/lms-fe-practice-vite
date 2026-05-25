import { Link, useSearchParams } from 'react-router-dom'
import { FigmaChip, FigmaStatusBadge, FigmaWizardStepper } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { projectWizardSteps } from '../../mocks/studentMissingPages'
import './student-missing-pages.css'

type ProjectDetailSection = {
  title: string
  helper: string
  chips: readonly string[]
  selected: readonly string[]
}

// Figma frames: "수강생 — 프로젝트 생성 마법사" Step 1~4
// /student/projects/new?step=숫자 형태로 단계별 생성 화면을 보여줍니다.
export function StudentProjectWizardPage() {
  const [searchParams] = useSearchParams()
  const step = Math.min(Math.max(Number(searchParams.get('step') ?? 1), 1), 4)
  const current = projectWizardSteps[step - 1]
  const stepTitles = projectWizardSteps.map((item) => item.title)
  const invitedMembers = [
    { name: '이서연', initial: '이', color: 'teal' },
    { name: '박지호', initial: '박', color: 'amber' },
    { name: '최유나', initial: '최', color: 'blue' },
  ] as const
  const detailSections: readonly ProjectDetailSection[] = [
    {
      title: '기술 스택',
      helper: '사용할 기술을 모두 선택하세요',
      chips: ['Spring Boot', 'Spring Security', 'JPA', 'Kafka', 'Redis', 'Docker', 'Kubernetes', 'PostgreSQL', 'MySQL', 'JUnit5', 'Gradle'],
      selected: ['Spring Boot', 'JPA', 'Kafka', 'Docker'],
    },
    {
      title: '도메인',
      helper: '프로젝트 도메인을 하나 선택하세요',
      chips: ['커머스', '핀테크', '교육', '소셜', '헬스케어', '물류'],
      selected: ['커머스'],
    },
    {
      title: '산출물 형태',
      helper: '제출할 산출물 형태를 선택하세요',
      chips: ['GitHub 리포지토리', '발표 자료', '배포 URL', 'API 문서', '시연 영상'],
      selected: ['GitHub 리포지토리', '발표 자료', 'API 문서'],
    },
  ]
  const summarySections = [
    {
      title: '기본 정보',
      editTo: ROUTES.studentProjectsNew,
      rows: [
        { label: '프로젝트명', value: '주문 관리 MSA 백엔드' },
        { label: '설명', value: '주문·결제·재고 도메인을 분리한 MSA 구조의 백엔드 프로젝트입니다.' },
        { label: '기간', value: '2026-06-01 ~ 2026-07-31' },
      ],
    },
    {
      title: '팀',
      editTo: `${ROUTES.studentProjectsNew}?step=2`,
      rows: [
        { label: 'PM', value: '김민준 (작성자)' },
        { label: '팀원', value: '이서연, 박지호, 최유나 · 3명' },
      ],
    },
    {
      title: '상세 설정',
      editTo: `${ROUTES.studentProjectsNew}?step=3`,
      rows: [
        { label: '기술 스택', pills: ['Spring Boot', 'JPA', 'Kafka', 'Docker'] },
        { label: '도메인', value: '커머스' },
        { label: '산출물 형태', value: 'GitHub 리포지토리, 발표 자료, API 문서' },
      ],
    },
  ] as const

  const stepFields = {
    1: [
      ['시작일', '2026-06-01'],
      ['종료일', '2026-07-31'],
    ],
  } as const

  return (
    <section className="student-workflow-page student-project-wizard-page">
      <FigmaWizardStepper currentStep={step} steps={stepTitles} />

      <section className="student-workflow-panel">
        <header className="student-project-wizard-panel-title">
          <span>{step}</span>
          <h2>{current.title}</h2>
          <p>{current.helper}</p>
        </header>

        {step === 1 ? (
          <>
            <label className="student-project-wizard-field">
              <span>
                프로젝트명
                <FigmaStatusBadge tone="danger">필수</FigmaStatusBadge>
              </span>
              <input defaultValue="주문 관리 MSA 백엔드" />
            </label>
            <label className="student-project-wizard-textarea">
              <span>설명</span>
              <textarea defaultValue="주문·결제·재고 도메인을 분리한 MSA 구조의 백엔드 프로젝트입니다." />
            </label>
            <div className="student-project-wizard-date-grid">
              {stepFields[1].map(([label, value]) => (
                <label className="student-project-wizard-field" key={label}>
                  <span>
                    {label}
                    <FigmaStatusBadge tone="danger">필수</FigmaStatusBadge>
                  </span>
                  <div className="student-project-wizard-date-input">
                    <i aria-hidden="true" />
                    <input defaultValue={value} />
                  </div>
                </label>
              ))}
            </div>
          </>
        ) : step === 2 ? (
          <>
            <section className="student-project-team-section">
              <h3>프로젝트 매니저 (PM)</h3>
              <article className="student-project-member-row">
                <span className="student-project-member-avatar student-project-member-avatar--purple">김</span>
                <div>
                  <strong>김민준</strong>
                  <p>작성자 · 백엔드 부트캠프 3기</p>
                </div>
                <FigmaStatusBadge tone="purple">PM · 자동 지정</FigmaStatusBadge>
              </article>
              <p>프로젝트를 생성한 작성자가 자동으로 PM이 됩니다. 변경할 수 없습니다.</p>
            </section>

            <section className="student-project-team-section student-project-invite-section">
              <h3>팀원 초대</h3>
              <div className="student-project-invite-search">같은 기수 동료 이름을 검색하세요</div>
              <div className="student-project-member-list">
                {invitedMembers.map((member) => (
                  <article className="student-project-member-row" key={member.name}>
                    <span className={`student-project-member-avatar student-project-member-avatar--${member.color}`}>{member.initial}</span>
                    <div>
                      <strong>{member.name}</strong>
                      <p>백엔드 부트캠프 3기</p>
                    </div>
                    <span className="student-project-member-role">팀원</span>
                    <button className="student-project-member-remove" type="button" aria-label={`${member.name} 제거`}>
                      ✕
                    </button>
                  </article>
                ))}
              </div>
              <p className="student-project-team-note">
                <i aria-hidden="true" />
                기수 외 사용자는 팀원으로 추가할 수 없습니다.
              </p>
            </section>
          </>
        ) : step === 3 ? (
          <>
            {detailSections.map((section) => (
              <section className="student-project-detail-section" key={section.title}>
                <header>
                  <h3>{section.title}</h3>
                  <p>{section.helper}</p>
                </header>
                <div className="student-project-detail-chip-row">
                  {section.chips.map((chip) => (
                    <FigmaChip key={chip} selected={section.selected.includes(chip)}>
                      {chip}
                    </FigmaChip>
                  ))}
                </div>
              </section>
            ))}
          </>
        ) : (
          <>
            <p className="student-project-confirm-helper">
              입력한 내용을 확인하고 프로젝트를 생성하세요. 수정이 필요하면 각 항목의 [수정]을 눌러 해당 단계로 돌아갑니다.
            </p>
            {summarySections.map((section, sectionIndex) => (
              <section className="student-project-summary-section" key={section.title}>
                <header>
                  <h3>{section.title}</h3>
                  <Link to={section.editTo}>수정 ›</Link>
                </header>
                <div className="student-project-summary-rows">
                  {section.rows.map((row) => (
                    <div className="student-project-summary-row" key={row.label}>
                      <span>{row.label}</span>
                      <div>
                        {'pills' in row ? (
                          <div className="student-project-summary-pill-row">
                            {row.pills.map((pill) => (
                              <em key={pill}>{pill}</em>
                            ))}
                          </div>
                        ) : (
                          <p>{row.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {sectionIndex < summarySections.length - 1 ? <hr /> : null}
              </section>
            ))}
          </>
        )}
      </section>

      <div className="student-project-wizard-divider" />

      <footer className="student-workflow-actions">
        {step > 1 ? (
          <Link className="figma-button figma-button--secondary" to={`${ROUTES.studentProjectsNew}?step=${step - 1}`}>
            ‹&nbsp; 이전
          </Link>
        ) : (
          <button className="figma-button figma-button--secondary" disabled type="button">
            이전
          </button>
        )}
        <div className="student-project-wizard-actions-right">
          <p>{step === 4 ? '마지막 단계입니다' : `${step} / 4 단계`}</p>
          {step < 4 ? (
            <Link className="figma-button figma-button--primary" to={`${ROUTES.studentProjectsNew}?step=${step + 1}`}>
              다음&nbsp; ›
            </Link>
          ) : (
            <Link className="figma-button figma-button--primary" to={ROUTES.studentProjectWorkspace.replace(':projectId', 'order-api')}>
              프로젝트 생성
            </Link>
          )}
        </div>
      </footer>
    </section>
  )
}
