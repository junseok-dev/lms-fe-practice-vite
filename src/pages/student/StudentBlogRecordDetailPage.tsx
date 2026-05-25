import { Link, useLocation } from 'react-router-dom'
import { FigmaButton, FigmaNoticeBanner, FigmaStatusBadge } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { blogRecordDetail, blogRecordSubmissionWeeks } from '../../mocks/studentMissingPages'
import './student-missing-pages.css'

// Figma frames: 블로그 기록 상세, 블로그 기록 수정
// /edit 경로에서는 같은 기록을 수정 입력 상태로 보여줍니다.
export function StudentBlogRecordDetailPage() {
  const location = useLocation()
  const isEdit = location.pathname.endsWith('/edit')

  if (!isEdit) {
    return (
      <section className="student-workflow-page student-blog-detail-page">
        <nav className="student-workflow-breadcrumb" aria-label="현재 위치">
          <span>기록실</span>
          <span>›</span>
          <span>블로그</span>
          <span>›</span>
          <strong>상세</strong>
        </nav>

        <article className="blog-detail-summary-card" aria-label="블로그 기록 상세 요약">
          <div className="blog-detail-summary-card__main">
            <div className="blog-detail-summary-card__top">
              <span>{blogRecordDetail.week}</span>
              <FigmaStatusBadge tone="ok">{blogRecordDetail.status}</FigmaStatusBadge>
            </div>
            <h1>{blogRecordDetail.title}</h1>
            <p>
              {blogRecordDetail.date} · {blogRecordDetail.approvedAt} · {blogRecordDetail.reviewer}
            </p>
            <div className="blog-detail-url-row">
              <a href={blogRecordDetail.url} rel="noreferrer" target="_blank">
                {blogRecordDetail.url}
              </a>
              <a href={blogRecordDetail.url} rel="noreferrer" target="_blank">
                원문 보기
              </a>
            </div>
          </div>

          <div className="blog-detail-summary-card__side">
            <Link className="figma-button figma-button--secondary" to={ROUTES.studentRecords}>
              목록으로
            </Link>
            <span>승인 후 삭제 불가</span>
          </div>
        </article>
      </section>
    )
  }

  return (
    <section className="student-workflow-page student-blog-form-page student-blog-edit-page">
      <nav className="student-workflow-breadcrumb" aria-label="현재 위치">
        <span>기록실</span>
        <span>›</span>
        <span>블로그</span>
        <span>›</span>
        <strong>수정</strong>
      </nav>

      <FigmaNoticeBanner title="반려 사유" tone="warn">
        주요 핵심 주제 분석이 부족합니다. URL 또는 본문 보완 후 다시 제출하세요.
      </FigmaNoticeBanner>

      <section className="blog-week-selector blog-week-selector--edit" aria-label="블로그 제출 주차 선택">
        <header className="blog-week-selector__head">
          <div>
            <h2>
              <span />
              주차 선택
            </h2>
            <p>기수 기간 2026-03-04 ~ 2026-08-29 · 26주차</p>
          </div>
          <ul aria-label="주차 상태 범례">
            <li>
              <span className="is-current" />
              현재
            </li>
            <li>
              <span className="is-approved" />
              승인
            </li>
            <li>
              <span className="is-rejected" />
              반려
            </li>
          </ul>
        </header>

        <div className="blog-week-grid">
          {blogRecordSubmissionWeeks.map((week) => {
            const isRejectedWeek = week.week === '5주차'
            return (
              <button
                className={`blog-week-card ${week.tone ? `blog-week-card--${week.tone}` : ''} ${
                  isRejectedWeek ? 'is-edit-selected' : ''
                }`}
                key={`${week.week}-${week.range}`}
                type="button"
              >
                <strong>{week.week}</strong>
                <span>{week.range}</span>
                {isRejectedWeek ? <em>반려 재제출 필요</em> : 'status' in week ? <em>{week.status}</em> : null}
              </button>
            )
          })}
        </div>
      </section>

      <div className="blog-selected-week" aria-live="polite">
        <span />
        선택: 9주차 · 4/22 ~ 4/28 (반려 기록)
      </div>

      <section className="blog-url-section" aria-label="블로그 URL 입력">
        <label htmlFor="blog-edit-url">외부 블로그 글 URL</label>
        <p>공개 블로그 기능으로 https URL만 허용합니다 (인사팀 검사 증빙)</p>
        <div className="blog-url-input">
          <span aria-hidden="true">🔗</span>
          <input id="blog-edit-url" defaultValue={blogRecordDetail.url} type="url" />
        </div>
        <small>ⓘ 주소창에서 https://로 시작하는 외부 URL인지 확인해 주세요.</small>
      </section>

      <footer className="blog-form-actions">
        <Link className="figma-button figma-button--secondary" to={ROUTES.studentRecords}>
          기록실로 돌아가기
        </Link>
        <div>
          <FigmaButton kind="secondary">임시 저장</FigmaButton>
          <Link className="figma-button figma-button--primary" to={`${ROUTES.studentRecords}?toast=blog-updated`}>
            수정 제출
          </Link>
        </div>
        <p>수정 제출 후에는 운영 검토 상태로 전환되며, 승인 전까지 다시 수정할 수 있습니다.</p>
      </footer>
    </section>
  )
}
