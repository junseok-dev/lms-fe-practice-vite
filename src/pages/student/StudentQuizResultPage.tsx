import { quizResult } from '../../mocks/studentCourseFlow'
import './student-course-flow.css'

// Figma의 "수강생 — 퀴즈 결과 (/student/quizzes/:quizId/result)" 프레임을 구현하는 페이지입니다.
// 채점 결과는 mock 데이터이며, 수동 채점 대기 상태까지 시각적으로 확인하는 용도입니다.
export function StudentQuizResultPage() {
  return (
    <section className="student-quiz-result" aria-label="퀴즈 결과">
      <div className="quiz-result-meta">
        {quizResult.meta.map(([label, value]) => (
          <p key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </p>
        ))}
        <em>수동 채점 대기</em>
      </div>

      <section className="quiz-result-summary" aria-label="점수 요약">
        <div className="quiz-score-card">
          <p>현재 점수 (자동 채점)</p>
          <div>
            <strong>{quizResult.score}</strong>
            <span>{quizResult.maxScore}</span>
          </div>
          <small>{quizResult.note}</small>
        </div>

        <div className="quiz-accuracy-card">
          <span>정답률</span>
          <strong>{quizResult.accuracy}</strong>
          <em>{quizResult.accuracyRate}</em>
        </div>

        <div className="quiz-breakdown-card">
          <h2>문항 구성</h2>
          {quizResult.breakdown.map(([label, value, tone]) => (
            <p key={label}>
              <i className={`is-${tone}`} />
              <span>{label}</span>
              <strong>{value}</strong>
            </p>
          ))}
          <footer>
            <span>총 문항</span>
            <strong>20</strong>
          </footer>
        </div>

        <div className="quiz-grading-card">
          <h2>채점 상태</h2>
          <p>
            <span>자동 채점</span>
            <strong className="is-ok">완료 (19문항)</strong>
          </p>
          <p>
            <span>수동 채점</span>
            <strong className="is-warning">대기 1문항</strong>
          </p>
          <p>
            <span>재채점 이력</span>
            <strong>없음</strong>
          </p>
          <p>
            <span>재응시 가능</span>
            <strong className="is-info">1회 남음</strong>
          </p>
        </div>
      </section>

      <section className="quiz-category-card" aria-label="카테고리별 점수">
        <header>
          <h2>카테고리별 점수</h2>
          <p>문항별 카테고리는 역량 리포트의 세부 지표와 연결됩니다</p>
        </header>
        <div>
          {quizResult.categories.map(([label, score, tone]) => (
            <article key={label}>
              <p>
                <span>{label}</span>
                <strong className={`is-${tone}`}>{score}</strong>
              </p>
              <div>
                <span style={{ width: score.replace('점', '%') }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quiz-answer-section" aria-label="문제별 결과">
        <header>
          <div>
            <h2>문제별 결과</h2>
            <p>총 5문항 · 피드백이 있는 답안은 강조 표시됩니다</p>
          </div>
          <div>
            {['전체 (20)', '오답 (3)', '채점 대기 (1)', '피드백 (1)'].map((filter, index) => (
              <button className={index === 0 ? 'is-active' : undefined} key={filter} type="button">
                {filter}
              </button>
            ))}
          </div>
        </header>

        {quizResult.answers.map((answer) => (
          <article className={`quiz-answer-card quiz-answer-card--${answer.state}`} key={answer.no}>
            <strong>{answer.no}</strong>
            <div>
              <span>{answer.type}</span>
              <h3>{answer.title}</h3>
              <p>
                <b>내 답안</b>
                {answer.myAnswer}
              </p>
              <p>
                <b>정답</b>
                {answer.answer}
              </p>
            </div>
            <aside>
              <span>점수</span>
              <strong>{answer.score}</strong>
            </aside>
          </article>
        ))}
      </section>
    </section>
  )
}
