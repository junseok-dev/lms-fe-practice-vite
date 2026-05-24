import { Link, useLocation } from 'react-router-dom'
import { FigmaButton, FigmaInputField, FigmaStatusBadge, FigmaTextarea, FigmaToast } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { assignmentDetail } from '../../mocks/studentAssignments'
import './student-assignment-flow.css'
import './student-missing-pages.css'

// Figma frame: "수강생 — 과제 상세·제출 (/student/course/assignments/:assignmentId)"
// 과제 설명, 제출 입력값, 검토 완료 예시를 한 화면에서 확인하는 제출 상세 페이지입니다.
export function StudentAssignmentDetailPage() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const showToast = searchParams.get('toast') === 'submitted'
  const showConfirmModal = location.hash === '#confirm-resubmit'

  return (
    <section className="student-assignment-detail">
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
          <p className="student-review-card__empty">아직 제출된 이력이 없습니다.</p>
          <div className="student-review-card__line" />
          <h3>검토 완료 예시</h3>
          <FigmaStatusBadge tone="ok">{assignmentDetail.review.status}</FigmaStatusBadge>
          <strong>{assignmentDetail.review.score}</strong>
          <h3>강사 피드백</h3>
          <p>{assignmentDetail.review.feedback}</p>
          <FigmaButton kind="secondary">수정 제출 확인</FigmaButton>
        </aside>
      </div>

      {showConfirmModal ? (
        <div className="student-record-delete-modal" role="dialog">
          <section className="student-record-delete-modal__card">
            <h2>수정 제출을 진행할까요?</h2>
            <p>마감 전에는 마지막 제출본이 유효합니다. 기존 제출 내용은 새 제출본으로 대체됩니다.</p>
            <footer className="student-workflow-actions">
              <Link className="figma-button figma-button--secondary" to={location.pathname}>
                취소
              </Link>
              <Link className="figma-button figma-button--primary" to={`${location.pathname}?toast=submitted`}>
                수정 제출
              </Link>
            </footer>
          </section>
        </div>
      ) : null}

      {showToast ? <FigmaToast>과제가 제출되었습니다.</FigmaToast> : null}
    </section>
  )
}
