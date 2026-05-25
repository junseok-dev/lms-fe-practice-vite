import { Link, useLocation } from 'react-router-dom'
import { FigmaInputField, FigmaNoticeBanner, FigmaTabsBar, FigmaTextarea } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { courseHomeTabs } from '../../mocks/studentCourseHome'
import { studentCourseMaterials } from '../../mocks/studentCourseMaterials'
import './student-course-flow.css'
import './student-missing-pages.css'

// Figma frame: "수강생 - 강의 자료실 (/student/course/materials)"
// 자료 목록과 자료 공유 모달(#share)을 함께 처리합니다.
export function StudentCourseMaterialsPage() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const showShareModal = location.hash === '#share'
  const showSharedToast = searchParams.get('toast') === 'shared'

  return (
    <section className="student-course-flow" aria-label="강의 자료실">
      <FigmaTabsBar activeValue="materials" items={courseHomeTabs} />

      <div className="materials-toolbar">
        <div className="materials-filter" aria-label="자료 분류">
          {studentCourseMaterials.filters.map((filter, index) => (
            <button className={index === 0 ? 'is-active' : undefined} key={filter.label} type="button">
              <span>{filter.label}</span>
              <small>{filter.count}</small>
            </button>
          ))}
        </div>
        <label className="materials-search">
          <span>검색</span>
          <input placeholder="자료 제목·작성자 검색" />
        </label>
        <button className="materials-sort" type="button">
          최신순<span>⌄</span>
        </button>
        <Link className="figma-button figma-button--primary materials-share-button" to={`${ROUTES.studentCourseMaterials}#share`}>
          + 자료 공유
        </Link>
      </div>

      <div className="materials-list">
        {studentCourseMaterials.items.map((item) => (
          <article className="material-row" key={item.title}>
            <div className={`material-row__icon material-row__icon--${item.iconTone}`}>{item.fileType}</div>
            <div className="material-row__content">
              <div className="material-row__title">
                <h3>{item.title}</h3>
                <span className={`material-row__file material-row__file--${item.iconTone}`}>{item.fileType}</span>
                <span className="material-row__category">{item.category}</span>
              </div>
              <p>
                <span>{item.author}</span>
                <i aria-hidden="true" />
                <span>{item.date}</span>
                {item.downloads ? (
                  <>
                    <i aria-hidden="true" />
                    <span>{item.downloads}</span>
                  </>
                ) : null}
                {item.size ? (
                  <>
                    <i aria-hidden="true" />
                    <span>{item.size}</span>
                  </>
                ) : null}
              </p>
            </div>
            <div className="material-row__actions">
              {item.actions.map((action, index) => (
                <button className={index === item.actions.length - 1 ? 'is-primary' : undefined} key={action} type="button">
                  {action}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="course-pager" aria-label="자료 페이지">
        {[1, 2, 3].map((page) => (
          <button className={page === 1 ? 'is-active' : undefined} key={page} type="button">
            {page}
          </button>
        ))}
      </div>

      {showShareModal ? (
        <div className="materials-share-modal" role="dialog" aria-labelledby="materials-share-title" aria-modal="true">
          <section className="materials-share-modal__card">
            <header className="materials-share-modal__header">
              <div>
                <h2 id="materials-share-title">자료 공유</h2>
                <p>학습 정리 자료나 참고 링크를 같은 기수 수강생에게 공유합니다.</p>
              </div>
              <Link className="materials-share-modal__close" to={ROUTES.studentCourseMaterials} aria-label="자료 공유 닫기">
                ×
              </Link>
            </header>

            <FigmaNoticeBanner title="학생 공유 자료">
              학생 공유 자료로 표시됩니다. 공식 강의 자료와 구분되며, 본인이 올린 자료만 수정·삭제할 수 있습니다.
            </FigmaNoticeBanner>

            <div className="materials-share-modal__meta">
              <div className="materials-share-modal__segmented" aria-label="공유 방식">
                <button className="is-active" type="button">
                  파일 업로드
                </button>
                <button type="button">링크 공유</button>
              </div>
              <span>학생 공유</span>
            </div>

            <FigmaInputField label="제목" placeholder="예) JPA N+1 문제 정리 노트" />

            <div className="materials-share-modal__grid">
              <FigmaInputField label="관련 주차/과목" defaultValue="9주차 · Spring Boot" />
              <FigmaInputField label="카테고리" defaultValue="학생 공유" />
            </div>

            <FigmaTextarea label="설명" placeholder="자료를 보는 사람이 알면 좋은 맥락을 짧게 적어 주세요." />

            <div className="materials-share-modal__field">
              <span>첨부 파일</span>
              <button className="materials-share-modal__dropzone" type="button">
                <b>↑</b>
                <strong>파일을 드래그하거나 클릭하여 업로드</strong>
                <small>PDF, DOC, PPT, ZIP, 이미지, TXT/LOG/MD · 파일당 20MB</small>
              </button>
            </div>

            <div className="materials-share-modal__selected-file">
              <div>
                <span>PDF</span>
                <p>
                  <strong>jpa-n-plus-one-note.pdf</strong>
                  <small>1.1 MB · 업로드 준비 완료</small>
                </p>
              </div>
              <button type="button">삭제</button>
            </div>

            <footer className="materials-share-modal__footer">
              <Link className="figma-button figma-button--secondary" to={ROUTES.studentCourseMaterials}>
                취소
              </Link>
              <Link className="figma-button figma-button--primary" to={`${ROUTES.studentCourseMaterials}?toast=shared`}>
                공유하기
              </Link>
            </footer>
          </section>
        </div>
      ) : null}
      {showSharedToast ? (
        <div className="materials-share-modal materials-share-modal--toast-only" role="presentation">
          <aside className="materials-share-modal__toast" role="status">
            <span>자료가 공유되었습니다</span>
            <button aria-label="알림 닫기" type="button">
              ×
            </button>
          </aside>
        </div>
      ) : null}
    </section>
  )
}
