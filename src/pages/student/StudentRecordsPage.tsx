import { Link, useLocation } from 'react-router-dom'
import { FigmaStatusBadge, FigmaToast } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import './student-learning-evidence.css'
import './student-missing-pages.css'

const recordRows = [
  {
    title: 'JPA 연관관계 매핑 회고',
    description: 'Member, Post, Comment 도메인의 연관관계와 fetch 전략을 정리했습니다.',
    category: '블로그',
    date: '2026-05-12',
    status: '검토 완료',
    tone: 'ok' as const,
  },
  {
    title: 'SQLD 자격증 취득',
    description: 'SQL 기본, 모델링, 성능 최적화 학습 결과를 등록했습니다.',
    category: '자격증',
    date: '2026-05-08',
    status: '반영 대기',
    tone: 'warning' as const,
  },
  {
    title: '토요일 알고리즘 스터디',
    description: '그리디와 DP 문제 풀이 스터디를 4주간 진행했습니다.',
    category: '스터디',
    date: '2026-05-03',
    status: '작성 중',
    tone: 'neutral' as const,
  },
]

// Figma frame: "수강생 — 기록실 (/student/records)"
// 기록실 목록과 삭제 확인 모달, 삭제/수정 완료 토스트 상태를 함께 처리합니다.
export function StudentRecordsPage() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const modal = searchParams.get('modal')
  const toast = searchParams.get('toast')

  return (
    <section className="student-evidence student-records" aria-label="기록실">
      <nav className="record-filters" aria-label="기록 분류">
        {[
          ['전체', 24],
          ['블로그', 12],
          ['자격증', 3],
          ['스터디', 5],
          ['이력서', 2],
        ].map(([label, count], index) => (
          <button className={index === 1 ? 'is-active' : undefined} key={label} type="button">
            {label}
            <span>{count}</span>
          </button>
        ))}
      </nav>

      <section className="record-highlight" aria-label="이번 주 대표 기록">
        <div>
          <strong>★</strong>
          <p>
            <span>이번 주 대표 기록을 등록해 보세요</span>
            <small>블로그·스터디·자격증 기록은 수강 역량 증명서에 함께 반영됩니다.</small>
          </p>
        </div>
        <Link className="figma-button figma-button--primary" to={ROUTES.studentRecordNew.replace(':recordType', 'blog')}>
          블로그 등록
        </Link>
      </section>

      <header className="record-section-title">
        <h2>블로그 기록</h2>
        <span>12건</span>
      </header>

      <div className="record-list">
        {recordRows.map((record) => (
          <article className="record-card" key={record.title}>
            <div className="record-card__top">
              <span>{record.category}</span>
              <time>{record.date}</time>
              <FigmaStatusBadge tone={record.tone}>{record.status}</FigmaStatusBadge>
            </div>
            <h3>{record.title}</h3>
            <p>{record.description}</p>
            <div className="record-card__meta">
              <Link to={ROUTES.studentBlogRecordDetail.replace(':recordId', 'jpa-mapping')}>상세 보기</Link>
              <i />
              <Link to={ROUTES.studentBlogRecordEdit.replace(':recordId', 'jpa-mapping')}>수정</Link>
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
        <div className="student-record-delete-modal" role="dialog">
          <section className="student-record-delete-modal__card">
            <h2>블로그 기록을 삭제할까요?</h2>
            <p>삭제하면 기록실 목록과 증명서 반영 후보에서 제외됩니다.</p>
            <footer className="student-workflow-actions">
              <Link className="figma-button figma-button--secondary" to={ROUTES.studentRecords}>
                취소
              </Link>
              <Link className="figma-button figma-button--primary" to={`${ROUTES.studentRecords}?toast=deleted`}>
                삭제
              </Link>
            </footer>
          </section>
        </div>
      ) : null}

      {toast === 'deleted' ? <FigmaToast>블로그 기록이 삭제되었습니다.</FigmaToast> : null}
      {toast === 'blog-updated' ? <FigmaToast>블로그 기록이 수정되었습니다.</FigmaToast> : null}
    </section>
  )
}
