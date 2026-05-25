import { Link, useLocation } from 'react-router-dom'
import {
  FigmaInputField,
  FigmaNoticeBanner,
  FigmaStatusBadge,
  FigmaTextarea,
  FigmaToast,
} from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { assignmentDetail } from '../../mocks/studentAssignments'
import './student-assignment-flow.css'
import './student-missing-pages.css'

// Figma frame: "수강생 - 과제 상세·제출 (/student/course/assignments/:assignmentId)"
// 과제 설명, 제출 입력값, 검토 완료 예시와 제출 완료 상태를 함께 처리합니다.
export function StudentAssignmentDetailPage() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const showToast = searchParams.get('toast') === 'submitted'
  const showConfirmModal = location.hash === '#confirm-resubmit'

  if (showToast) {
    return (
      <section className="student-assignment-submitted" aria-label="과제 제출 완료">
        <h1>과제 상세·제출</h1>
        <p>제출이 저장되었습니다. 마감 전까지 다시 수정할 수 있습니다.</p>

        <section className="student-assignment-submitted__summary" aria-label="제출 요약">
          <h2>{assignmentDetail.title}</h2>
          <div className="student-assignment-submitted__meta">
            <FigmaStatusBadge tone="ok">제출 완료</FigmaStatusBadge>
            <span>제출 시각 2026-05-22 14:18 · 마지막 제출본이 유효합니다.</span>
          </div>

          <dl>
            <dt>제출 URL</dt>
            <dd>
              <a href={assignmentDetail.url}>{assignmentDetail.url}</a>
            </dd>
            <dt>첨부</dt>
            <dd>{assignmentDetail.assets}</dd>
          </dl>

          <Link className="figma-button figma-button--primary" to={location.pathname}>
            제출 보기·수정
          </Link>
        </section>

        <FigmaToast closable position="content-top" variant="brand">
          과제 제출이 완료되었습니다.
        </FigmaToast>
      </section>
    )
  }

  return (
    <section className="student-assignment-detail" aria-label="과제 상세 제출">
      <header className="student-assignment-detail__head">
        <div>
          <h1>과제 상세·제출</h1>
          <p>마감 전에는 마지막 제출본이 유효합니다. 텍스트·URL·첨부 중 하나 이상을 입력하세요.</p>
        </div>
        <FigmaStatusBadge tone="warning">미제출</FigmaStatusBadge>
      </header>

      <section className="student-assignment-summary">
        <div>
          <h2>{assignmentDetail.title}</h2>
          <p>{assignmentDetail.description}</p>
          <div className="student-assignment-summary__badges">
            {assignmentDetail.badges.map((badge) => (
              <FigmaStatusBadge key={badge.label} tone={badge.tone}>
                {badge.label}
              </FigmaStatusBadge>
            ))}
          </div>
        </div>
        <div className="student-assignment-summary__side">
          <span>{assignmentDetail.due}</span>
          <span>{assignmentDetail.status}</span>
        </div>
      </section>

      <div className="student-assignment-detail__grid">
        <section className="student-submission-card">
          <h2>제출 내용</h2>
          <FigmaTextarea defaultValue={assignmentDetail.body} label="본문" />
          <FigmaInputField defaultValue={assignmentDetail.url} label="제출 URL" />
          <div className="student-submission-card__dropzone">
            <p>파일, GitHub PR, 배포 링크를 추가할 수 있습니다.</p>
            <strong>{assignmentDetail.assets}</strong>
          </div>
          <footer className="student-submission-card__actions">
            <Link className="figma-button figma-button--secondary" to={ROUTES.studentCourseAssignments}>
              목록으로
            </Link>
            <Link className="figma-button figma-button--primary" to={`${location.pathname}?toast=submitted`}>
              제출 저장
            </Link>
          </footer>
        </section>

        <aside className="student-review-card">
          <h2>제출 이력</h2>
          <p className="student-review-card__empty">아직 제출한 이력이 없습니다.</p>
          <div className="student-review-card__line" />
          <h3>검토 완료 예시</h3>
          <FigmaStatusBadge tone="ok">{assignmentDetail.review.status}</FigmaStatusBadge>
          <strong>{assignmentDetail.review.score}</strong>
          <h3>강사 피드백</h3>
          <p>{assignmentDetail.review.feedback}</p>
          <Link className="figma-button figma-button--secondary" to={`${location.pathname}#confirm-resubmit`}>
            수정 제출 확인
          </Link>
        </aside>
      </div>

      {showConfirmModal ? (
        <div className="student-assignment-resubmit-modal" role="presentation">
          <section
            aria-labelledby="assignment-resubmit-title"
            className="student-assignment-resubmit-modal__card"
            role="dialog"
          >
            <h2 id="assignment-resubmit-title">수정 제출할까요?</h2>
            <p>기존 제출본은 새 제출 내용으로 덮어쓰기됩니다. 마감 전에는 다시 수정할 수 있습니다.</p>
            <FigmaNoticeBanner title="재제출 주의" tone="warn">
              마감 후에는 제출·재제출이 차단됩니다.
            </FigmaNoticeBanner>
            <footer>
              <Link className="figma-button figma-button--secondary" to={location.pathname}>
                계속 편집
              </Link>
              <Link className="figma-button figma-button--primary" to={`${location.pathname}?toast=submitted`}>
                수정 제출
              </Link>
            </footer>
          </section>
        </div>
      ) : null}
    </section>
  )
}
