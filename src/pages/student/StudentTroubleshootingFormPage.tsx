import { Link, useLocation } from 'react-router-dom'
import {
  FigmaButton,
  FigmaChip,
  FigmaInputField,
  FigmaNoticeBanner,
  FigmaStatusBadge,
  FigmaTextarea,
} from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import './student-missing-pages.css'

const categoryChips = ['성능 최적화', '배포 이슈', '모델', '데이터', '인프라'] as const

const recordSections = [
  {
    label: '상황',
    value: '주문 이벤트 컨슈머를 스케일아웃하자 리밸런싱이 잦게 발생했고, 같은 주문 이벤트가 두 번 처리되어 재고가 잘못 차감됐습니다.',
  },
  {
    label: '해결',
    value:
      '컨슈머 처리 단계에 멱등성 키를 도입해 이미 처리한 이벤트를 건너뛰도록 했고, 리밸런싱 빈도를 줄이기 위해 세션 타임아웃과 파티션 수를 조정했습니다.',
  },
  {
    label: '결과',
    value:
      '중복 처리로 인한 재고 오차가 사라졌고, 컨슈머 재배포 시에도 데이터 정합성이 유지됐습니다. 통합 테스트에 리밸런싱 시나리오를 추가했습니다.',
  },
] as const

const troubleshootingChangeMeta = ['작성일 2026-04-22', '인증일 2026-05-08', '검토자 정수민 강사'] as const

const troubleshootingChangeFields = [
  { label: '제목', selected: false },
  { label: '카테고리', selected: false },
  { label: '상황', selected: false },
  { label: '해결', selected: true },
  { label: '결과', selected: true },
] as const

const troubleshootingChangeItems = [
  {
    label: '해결',
    before: '리밸런싱 빈도를 줄이기 위해 컨슈머 수를 고정했습니다.',
    after: '리밸런싱 빈도를 줄이고, 멱등성 키를 도입해 중복 이벤트를 소비 단계에서 차단하도록 변경했습니다.',
  },
  {
    label: '결과',
    before: '중복 처리로 인한 재고 오차를 운영 중 수동 보정으로 처리했고, 정합성 지표는 따로 측정하지 않았습니다.',
    after: '멱등성 키 도입 후 재고 오차가 사라졌고, 컨슈머 재배포 시에도 데이터 정합성이 유지됨을 통합 테스트로 확인했습니다.',
  },
] as const

function RequiredLabel({ children }: { children: string }) {
  return (
    <div className="student-troubleshooting-label">
      <span>{children}</span>
      <FigmaStatusBadge tone="danger">필수</FigmaStatusBadge>
    </div>
  )
}

// Figma frames: "수강생 — 트러블슈팅 새 사례 작성", "수강생 — 트러블슈팅 변경 제안"
// 신규 작성과 변경 제안 경로를 같은 컴포넌트에서 구분해 렌더링합니다.
export function StudentTroubleshootingFormPage() {
  const location = useLocation()
  const isChangeRequest = location.pathname.includes('change-requests')

  if (isChangeRequest) {
    return (
      <section className="student-workflow-page student-troubleshooting-form-page">
        <FigmaNoticeBanner title="인증 완료된 트러블슈팅 사례입니다">
          변경 제안은 강사 검토·승인 후 원본에 반영됩니다. 반려 시 사유 코멘트가 전달됩니다.
        </FigmaNoticeBanner>

        <section className="student-change-request-card">
          <div className="student-change-request-summary-head">
            <h2>Kafka 컨슈머 리밸런싱으로 메시지 중복 처리</h2>
            <div className="student-troubleshooting-change-badges">
              <FigmaStatusBadge tone="ok">인증 완료</FigmaStatusBadge>
              <FigmaStatusBadge tone="purple">발표 연결</FigmaStatusBadge>
            </div>
          </div>
          <ul className="student-change-request-meta" aria-label="트러블슈팅 사례 정보">
            {troubleshootingChangeMeta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="student-change-request-divider" />
          <div className="student-change-request-field-head">
            <span>변경 사유</span>
            <FigmaStatusBadge tone="danger">필수</FigmaStatusBadge>
          </div>
          <FigmaTextarea
            aria-label="변경 사유"
            defaultValue="멱등성 키 도입 이후의 해결 방식을 본문에 정확히 반영하고, 회고에 재발 방지 조치를 추가하기 위함입니다."
          />
        </section>

        <section className="student-change-request-card">
          <div className="student-change-request-section-head">
            <h2>변경 항목 선택</h2>
            <span>변경할 항목을 선택하세요</span>
          </div>
          <div className="student-change-request-chips" aria-label="변경 항목">
            {troubleshootingChangeFields.map((field) => (
              <FigmaChip key={field.label} selected={field.selected}>
                {field.label}
              </FigmaChip>
            ))}
          </div>
        </section>

        <section className="student-change-request-card">
          <h2 className="student-troubleshooting-compare-title">변경 전 / 후 비교</h2>
          <div className="student-change-request-compare-list">
            {troubleshootingChangeItems.map((item) => (
              <article className="student-change-request-compare" key={item.label}>
                <FigmaStatusBadge tone="purple">{item.label}</FigmaStatusBadge>
                <div className="student-change-request-compare-grid">
                  <div className="student-change-request-value student-change-request-value--before">
                    <strong>변경 전</strong>
                    <p>{item.before}</p>
                  </div>
                  <div className="student-change-request-value student-change-request-value--after">
                    <strong>변경 후</strong>
                    <p>{item.after}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="student-change-request-divider" />
        <footer className="student-change-request-actions">
          <Link className="figma-button figma-button--secondary" to={ROUTES.studentTroubleshooting}>
            취소
          </Link>
          <div>
            <span>저장 시 강사에게 requested 상태로 전달됩니다</span>
            <FigmaButton>변경 제안 저장</FigmaButton>
          </div>
        </footer>
      </section>
    )
  }

  return (
    <section className="student-workflow-page student-troubleshooting-form-page">
      <header className="student-workflow-head">
        <div>
          <h1>새 트러블슈팅 사례</h1>
          <p>학습·프로젝트 중 겪은 문제를 상황·해결·결과로 기록합니다. 작성 후 발표에서 강사 인증을 받습니다.</p>
        </div>
      </header>

      <FigmaNoticeBanner title="작성 후 발표에서 강사 인증을 받습니다">
        인증된 사례는 직접 수정할 수 없으며, 수정·삭제는 변경 제안으로만 가능합니다. 발표 연결은 사례 작성 이후 단계입니다.
      </FigmaNoticeBanner>

      <section className="student-troubleshooting-card">
        <h2>기본 정보</h2>
        <div className="student-troubleshooting-field">
          <RequiredLabel>제목</RequiredLabel>
          <FigmaInputField label="제목" defaultValue="Kafka 컨슈머 리밸런싱으로 메시지 중복 처리" />
        </div>
        <div className="student-troubleshooting-field">
          <RequiredLabel>카테고리</RequiredLabel>
          <div className="student-troubleshooting-chip-row" aria-label="카테고리">
            {categoryChips.map((chip) => (
              <FigmaChip key={chip} selected={chip === '인프라'}>
                {chip}
              </FigmaChip>
            ))}
          </div>
        </div>
      </section>

      <section className="student-troubleshooting-card">
        <div className="student-troubleshooting-card-head">
          <h2>문제 해결 기록</h2>
          <span>상황·해결·결과를 STAR 형식으로 작성하세요</span>
        </div>
        {recordSections.map((section) => (
          <div className="student-troubleshooting-field" key={section.label}>
            <RequiredLabel>{section.label}</RequiredLabel>
            <FigmaTextarea aria-label={section.label} defaultValue={section.value} />
          </div>
        ))}
      </section>

      <section className="student-troubleshooting-card">
        <h2>추가 정보</h2>
        <div className="student-troubleshooting-field">
          <span className="student-troubleshooting-subtitle">독립적으로 해결했나요?</span>
          <p>멘토·강사 도움 없이 스스로 해결한 경우 ‘예’를 선택하세요. 통계의 독립해결 비율에 반영됩니다.</p>
          <div className="student-troubleshooting-chip-row" aria-label="독립 해결 여부">
            <FigmaChip selected>예</FigmaChip>
            <FigmaChip>아니오</FigmaChip>
          </div>
        </div>
        <div className="student-troubleshooting-duration">
          <span className="student-troubleshooting-subtitle">소요 일수</span>
          <div>
            <FigmaInputField label="소요 일수" defaultValue="3" inputMode="numeric" />
            <span>일</span>
          </div>
        </div>
        <div className="student-troubleshooting-field">
          <span className="student-troubleshooting-subtitle">첨부파일 (선택)</span>
          <div className="student-troubleshooting-upload">
            <strong>파일을 드래그하거나 클릭해 업로드</strong>
            <span>로그·스크린샷·다이어그램 등 · 최대 10MB</span>
          </div>
          <div className="student-troubleshooting-file">
            <span className="student-troubleshooting-file-type">LOG</span>
            <div>
              <strong>kafka-consumer-rebalance.log</strong>
              <span>0.4 MB</span>
            </div>
            <button type="button" aria-label="첨부파일 삭제">
              ×
            </button>
          </div>
        </div>
      </section>

      <div className="student-troubleshooting-divider" />
      <footer className="student-troubleshooting-actions">
        <Link className="figma-button figma-button--secondary" to={ROUTES.studentTroubleshooting}>
          취소
        </Link>
        <div>
          <span>저장 후 발표에서 강사 인증을 요청할 수 있습니다</span>
          <FigmaButton>사례 저장</FigmaButton>
        </div>
      </footer>
    </section>
  )
}
