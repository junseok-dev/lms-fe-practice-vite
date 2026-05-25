import { FigmaQuizTableRow, FigmaTabsBar } from '../../components/figma/common'
import { courseHomeTabs } from '../../mocks/studentCourseHome'
import { studentQuizzesList } from '../../mocks/studentQuizzesList'
import './student-course-flow.css'

// Figma의 "수강생 - 퀴즈 목록 (/student/quizzes)" 프레임을 구현하는 페이지입니다.
// 실제 응시 상태 변경은 하지 않고, 목록에서 응시/결과 화면으로 이동하는 흐름만 연결합니다.
export function StudentQuizzesPage() {
  return (
    <section className="student-course-flow" aria-label="퀴즈 목록">
      <FigmaTabsBar activeValue="quizzes" items={courseHomeTabs} />

      <div className="quiz-tabs-wrap">
        <div className="quiz-status-tabs">
          {studentQuizzesList.statusFilters.map((filter, index) => (
            <button className={index === 0 ? 'is-active' : undefined} key={filter.label} type="button">
              {filter.label}
              <span>{filter.count}</span>
            </button>
          ))}
        </div>
        <label className="quiz-search">
          <span>퀴즈명 검색</span>
          <input placeholder="🔍 퀴즈명 검색" />
        </label>
      </div>

      <section className="quiz-table-card" aria-label="퀴즈 테이블">
        <div className="quiz-table-head">
          <span>퀴즈명</span>
          <span>응시 기간</span>
          <span>제한 시간</span>
          <span>문항 수</span>
          <span>채점 모드</span>
          <span>상태</span>
          <span />
        </div>

        {studentQuizzesList.rows.map((quiz, index) => (
          <FigmaQuizTableRow key={`${quiz.title}-${index}`} {...quiz} />
        ))}
      </section>

      <footer className="quiz-table-footer">
        <span>총 16건 · 응시 가능 4건</span>
        <div className="course-pager">
          {['‹', '1', '2', '›'].map((page) => (
            <button className={page === '1' ? 'is-active' : undefined} key={page} type="button">
              {page}
            </button>
          ))}
        </div>
      </footer>
    </section>
  )
}
