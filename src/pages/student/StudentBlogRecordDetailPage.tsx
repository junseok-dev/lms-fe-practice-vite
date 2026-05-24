import { Link, useLocation } from 'react-router-dom'
import { FigmaButton, FigmaStatusBadge, FigmaTextarea } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { blogRecordDetail } from '../../mocks/studentMissingPages'
import './student-missing-pages.css'

// Figma frames: 블로그 기록 상세, 블로그 기록 수정
// /edit 경로에서는 같은 기록을 수정 입력 상태로 보여줍니다.
export function StudentBlogRecordDetailPage() {
  const location = useLocation()
  const isEdit = location.pathname.endsWith('/edit')

  return (
    <section className="student-workflow-page">
      <header className="student-workflow-head">
        <div>
          <h1>{isEdit ? '블로그 기록 수정' : '블로그 기록 상세'}</h1>
          <p>기록실에 등록한 블로그의 URL, 요약, 검토 피드백을 확인합니다.</p>
        </div>
        <FigmaStatusBadge tone="ok">{blogRecordDetail.status}</FigmaStatusBadge>
      </header>

      <section className="student-workflow-panel">
        <div className="student-record-detail-meta">
          <FigmaStatusBadge tone="info">{blogRecordDetail.category}</FigmaStatusBadge>
          <FigmaStatusBadge tone="neutral">{blogRecordDetail.date}</FigmaStatusBadge>
        </div>
        <h2>{blogRecordDetail.title}</h2>
        <p>{blogRecordDetail.summary}</p>
        {isEdit ? (
          <>
            <FigmaTextarea defaultValue={blogRecordDetail.summary} label="요약" />
            <FigmaTextarea defaultValue={blogRecordDetail.url} label="블로그 URL" />
          </>
        ) : (
          <article className="student-workflow-card">
            <h3>블로그 URL</h3>
            <p>{blogRecordDetail.url}</p>
          </article>
        )}
      </section>

      <section className="student-workflow-panel">
        <h2>매니저 피드백</h2>
        <p>{blogRecordDetail.feedback}</p>
      </section>

      <footer className="student-workflow-actions">
        <Link className="figma-button figma-button--secondary" to={ROUTES.studentRecords}>
          목록으로
        </Link>
        {isEdit ? (
          <Link className="figma-button figma-button--primary" to={`${ROUTES.studentRecords}?toast=blog-updated`}>
            수정 저장
          </Link>
        ) : (
          <FigmaButton>수정하기</FigmaButton>
        )}
      </footer>
    </section>
  )
}
