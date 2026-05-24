import { Link, useLocation } from 'react-router-dom'
import { FigmaButton, FigmaInputField, FigmaTabsBar } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { courseTabs } from '../../mocks/studentCourseFlow'
import './student-course-flow.css'
import './student-missing-pages.css'

const materials = [
  { title: '10주차 JPA 심화 강의자료.pdf', type: 'PDF', tone: 'red', meta: '강사 김민준 · 2026-05-13 · 2.4MB' },
  { title: '게시판 CRUD 실습 코드.zip', type: 'ZIP', tone: 'orange', meta: '강사 김민준 · 2026-05-12 · 12.8MB' },
  { title: '성능 개선 참고 링크', type: 'LINK', tone: 'teal', meta: '멘토 박준석 · 2026-05-11 · 외부 링크' },
]

// Figma frame: "수강생 — 강의 자료실 (/student/course/materials)"
// 자료 목록과 자료 공유 모달(#share)을 함께 처리합니다.
export function StudentCourseMaterialsPage() {
  const location = useLocation()
  const showShareModal = location.hash === '#share'

  return (
    <section className="student-course-flow" aria-label="강의 자료실">
      <FigmaTabsBar activeValue="materials" items={courseTabs} />

      <div className="materials-toolbar">
        <div className="materials-filter" aria-label="자료 분류">
          {['전체', 'PDF', '실습 코드', '링크'].map((filter, index) => (
            <button className={index === 0 ? 'is-active' : undefined} key={filter} type="button">
              <span>{filter}</span>
            </button>
          ))}
        </div>
        <label className="materials-search">
          <span>검색</span>
          <input placeholder="자료 제목·키워드 검색" />
        </label>
        <Link className="figma-button figma-button--primary" to={`${ROUTES.studentCourseMaterials}#share`}>
          자료 공유
        </Link>
      </div>

      <div className="materials-list">
        {materials.map((item) => (
          <article className="material-row" key={item.title}>
            <div className={`material-row__icon material-row__icon--${item.tone}`}>{item.type}</div>
            <div className="material-row__content">
              <div className="material-row__title">
                <h3>{item.title}</h3>
                <span className={`material-row__file material-row__file--${item.tone}`}>{item.type}</span>
                <span className="material-row__category">강의 자료</span>
              </div>
              <p>{item.meta}</p>
            </div>
            <div className="material-row__actions">
              <button type="button">미리보기</button>
              <button className="is-primary" type="button">
                다운로드
              </button>
            </div>
          </article>
        ))}
      </div>

      {showShareModal ? (
        <div className="student-record-delete-modal" role="dialog">
          <section className="student-record-delete-modal__card">
            <h2>자료 공유</h2>
            <p>학습에 도움이 되는 링크나 파일을 공유하면 매니저 확인 후 자료실에 노출됩니다.</p>
            <FigmaInputField label="자료 제목" placeholder="자료 제목을 입력하세요." />
            <FigmaInputField label="자료 URL" placeholder="https://..." />
            <footer className="student-workflow-actions">
              <Link className="figma-button figma-button--secondary" to={ROUTES.studentCourseMaterials}>
                취소
              </Link>
              <FigmaButton>공유 요청</FigmaButton>
            </footer>
          </section>
        </div>
      ) : null}
    </section>
  )
}
