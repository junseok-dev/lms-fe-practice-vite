import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import { quizTake } from '../../mocks/studentCourseFlow'
import './student-quiz-take.css'

// Figma의 "수강생 — 퀴즈 응시 (/student/quizzes/:quizId/take)" 프레임을 구현하는 독립 화면입니다.
// 일반 수강생 Sidebar/Header 없이 시험 응시에 집중하는 전체 화면 레이아웃으로 둡니다.
export function StudentQuizTakePage() {
  const questionNumbers = Array.from({ length: quizTake.total }, (_, index) => index + 1)

  return (
    <div className="student-quiz-take">
      <header className="quiz-take-top">
        <div>
          <h1>{quizTake.title}</h1>
          <p>{quizTake.subtitle}</p>
        </div>
        <div className="quiz-take-timer">
          <p>
            <span />
            남은 시간
            <strong>{quizTake.remainTime}</strong>
          </p>
          <div>
            <span />
          </div>
        </div>
        <div className="quiz-take-submit">
          <p>
            진행률
            <strong>{quizTake.answered}</strong>
          </p>
          <Link to={ROUTES.studentQuizResult.replace(':quizId', 'jpa-persistence')}>제출하기</Link>
        </div>
      </header>

      <main className="quiz-take-body">
        <aside className="quiz-question-rail">
          <header>
            <h2>문제 목록</h2>
            <p>총 20문항</p>
          </header>
          <div className="quiz-number-grid">
            {questionNumbers.map((number) => (
              <button
                className={number === 12 ? 'is-current' : number <= 11 || number === 14 ? 'is-done' : undefined}
                key={number}
                type="button"
              >
                {number}
              </button>
            ))}
          </div>
          <div className="quiz-legend">
            <p>
              <i className="is-done" />
              답변 완료
            </p>
            <p>
              <i className="is-current" />
              현재 문제
            </p>
            <p>
              <i />
              미답변
            </p>
            <strong>
              미답변 <span>{quizTake.unanswered}</span>
            </strong>
          </div>
        </aside>

        <section className="quiz-question-main">
          <article className="quiz-question-card">
            <div className="quiz-question-chips">
              <span className="is-question">{quizTake.questionNo}</span>
              <span>{quizTake.score}</span>
              <span>{quizTake.type}</span>
              <span className="is-warning">{quizTake.difficulty}</span>
            </div>
            <h2>{quizTake.question}</h2>
            <div className="quiz-option-list">
              {quizTake.options.map((option) => (
                <button className={option.selected ? 'is-selected' : undefined} key={option.key} type="button">
                  <i />
                  <strong>{option.key}</strong>
                  {option.label}
                </button>
              ))}
            </div>
            <p className="quiz-key-hint">
              <kbd>A</kbd>
              ~
              <kbd>D</kbd>
              키로 빠르게 선택할 수 있어요
            </p>
          </article>
        </section>
      </main>

      <footer className="quiz-take-bottom">
        <Link to={ROUTES.studentQuizzes}>← 나가기</Link>
        <p>
          <span />
          임시 저장됨 · 12초 전
        </p>
        <button type="button">임시 저장</button>
      </footer>
    </div>
  )
}
