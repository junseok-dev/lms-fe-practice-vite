import { Link, useLocation } from 'react-router-dom'
import { FigmaStatusBadge, FigmaToast } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { studentRecordsList } from '../../mocks/studentRecordsList'
import './student-learning-evidence.css'
import './student-missing-pages.css'

// Figma frame: "수강생 — 기록실 (/student/records)"
// 기록실의 기본 목록, 삭제 확인 모달, 삭제/수정 완료 toast 상태를 함께 처리합니다.
export function StudentRecordsPage() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const modal = searchParams.get('modal')
  const toast = searchParams.get('toast')

  return (
    <section className="student-evidence student-records" aria-label="기록실">
      <nav className="record-filters" aria-label="기록 분류">
        {studentRecordsList.filters.map((filter) => (
          <button className={filter.label === studentRecordsList.activeFilter ? 'is-active' : undefined} key={filter.label} type="button">
            {filter.label}
            <span>{filter.count}</span>
          </button>
        ))}
      </nav>

      <section className="record-highlight" aria-label="이번 주 블로그 제출">
        <div>
          <strong>+</strong>
          <p>
            <span>{studentRecordsList.highlight.title}</span>
            <small>{studentRecordsList.highlight.description}</small>
          </p>
        </div>
        <Link className="figma-button figma-button--primary" to={ROUTES.studentRecordNew.replace(':recordType', 'blog')}>
          {studentRecordsList.highlight.action}
        </Link>
      </section>

      <header className="record-section-title">
        <h2>{studentRecordsList.section.title}</h2>
        <span>{studentRecordsList.section.count}</span>
      </header>

      <div className="record-list">
        {studentRecordsList.rows.map((record) => (
          <article className="record-card" key={record.id}>
            <div className="record-card__top">
              <span>{record.category}</span>
              <time>{record.submittedAt}</time>
              <FigmaStatusBadge tone={record.statusTone}>{record.status}</FigmaStatusBadge>
            </div>
            <h3>{record.title}</h3>
            <p>{record.description}</p>
            <div className="record-card__tags" aria-label="기록 태그">
              {record.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="record-card__meta">
              <Link to={ROUTES.studentBlogRecordDetail.replace(':recordId', record.id)}>상세 보기</Link>
              <i />
              <Link to={ROUTES.studentBlogRecordEdit.replace(':recordId', record.id)}>수정</Link>
              <i />
              <Link to={`${ROUTES.studentRecords}?modal=delete-blog`}>삭제</Link>
            </div>
          </article>
        ))}
      </div>

      <footer className="student-workflow-actions">
        <Link className="figma-button figma-button--secondary" to={ROUTES.studentRecordNew.replace(':recordType', 'certificate')}>
          자격증 등록
        </Link>
        <Link className="figma-button figma-button--secondary" to={ROUTES.studentRecordNew.replace(':recordType', 'study')}>
          스터디 등록
        </Link>
      </footer>

      {modal === 'delete-blog' ? (
        <div className="record-delete-confirm-modal" role="dialog" aria-labelledby="record-delete-confirm-title" aria-modal="true">
          <section className="record-delete-confirm-modal__card">
            <h2 id="record-delete-confirm-title">블로그 기록을 삭제할까요?</h2>
            <p>
              삭제하면 이 기록은 기록실 목록과 검토 대기열에서 사라집니다. 승인된 기록은 삭제할 수 없고, 반려 또는 검토중
              기록만 삭제할 수 있습니다.
            </p>

            <article className="record-delete-confirm-modal__target" aria-label="삭제 대상 기록">
              <h3>JVM 메모리 구조 정리</h3>
              <div>
                <span>반려</span>
                <small>9주차 4/22 ~ 4/28 · 2026.04.28 반려</small>
              </div>
            </article>

            <footer>
              <Link className="record-delete-confirm-modal__cancel" to={ROUTES.studentRecords}>
                취소
              </Link>
              <Link className="record-delete-confirm-modal__delete" to={`${ROUTES.studentRecords}?toast=deleted`}>
                삭제
              </Link>
            </footer>
          </section>
        </div>
      ) : null}

      {toast === 'deleted' ? (
        <FigmaToast closable variant="dark">
          블로그 기록이 삭제되었습니다.
        </FigmaToast>
      ) : null}
      {toast === 'blog-updated' ? (
        <FigmaToast closable closeLabel="닫기" position="top" showIndicator variant="dark">
          블로그 기록 수정 요청이 제출되었습니다.
        </FigmaToast>
      ) : null}
    </section>
  )
}
