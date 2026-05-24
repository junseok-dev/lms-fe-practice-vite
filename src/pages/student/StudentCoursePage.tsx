import { FigmaTabsBar } from '../../components/figma/common'
import { studentCourse } from '../../mocks/studentCourse'
import { courseTabs } from '../../mocks/studentCourseFlow'
import './student-course.css'

// Figma의 "수강생 — 강의 홈 (/student/course)" 프레임을 구현하는 페이지입니다.
// 아직 기능 연결은 하지 않고, mock 데이터로 화면 구조와 시각 규칙을 먼저 맞춥니다.
export function StudentCoursePage() {
  return (
    <section className="student-course" aria-label="강의 홈">
      <FigmaTabsBar activeValue="home" items={courseTabs} />

      <section className="student-course__summary" aria-label="과정 요약">
        <div className="student-course__summary-top">
          <div>
            <h2>{studentCourse.title}</h2>
            <div className="student-course__meta">
              <span>교육 기간</span>
              <strong>{studentCourse.period}</strong>
              <i aria-hidden="true" />
              <span>주차</span>
              <strong>{studentCourse.weekSummary}</strong>
            </div>
          </div>
          <div className="student-course__progress-badge">
            <strong>{studentCourse.progress}%</strong>
            <span>진행률</span>
          </div>
        </div>
        <div className="student-course__progress-track" aria-label={`진행률 ${studentCourse.progress}%`}>
          <span style={{ width: `${studentCourse.progress}%` }} />
        </div>
      </section>

      <section className="student-course__metrics" aria-label="강의 알림 요약">
        {studentCourse.metrics.map((metric) => (
          <article className="student-course__metric-card" key={metric.label}>
            <p>
              <span className={`student-course__dot student-course__dot--${metric.tone}`} />
              {metric.label}
            </p>
            <strong>{metric.value}</strong>
            <small>{metric.description}</small>
          </article>
        ))}
      </section>

      <div className="student-course__body">
        <div className="student-course__main-column">
          <section className="student-course__panel student-course__weeks" aria-label="주차별 학습">
            <header className="student-course__panel-header">
              <div>
                <h2>주차별 학습</h2>
                <p>{studentCourse.currentWeekDescription}</p>
              </div>
              <button type="button">전체 주차 보기 →</button>
            </header>

            <div className="student-course__week-list">
              {studentCourse.weeks.map((week) => (
                <article
                  className={`student-course__week-card student-course__week-card--${week.state}`}
                  key={week.week}
                >
                  <strong className="student-course__week-number">{week.week}</strong>
                  <div>
                    <h3>{week.title}</h3>
                    <p>{week.period}</p>
                  </div>
                  <span>{week.status}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="student-course__panel student-course__notices" aria-label="공지">
            <header className="student-course__panel-header student-course__panel-header--compact">
              <h2>공지</h2>
              <button type="button">공지 전체 →</button>
            </header>

            <div className="student-course__notice-list">
              {studentCourse.notices.map((notice) => (
                <article className={`student-course__notice student-course__notice--${notice.tone}`} key={notice.title}>
                  <span>{notice.badge}</span>
                  <p>{notice.title}</p>
                  <time>{notice.time}</time>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="student-course__side-column" aria-label="강의 홈 사이드 정보">
          <section className="student-course__side-panel student-course__quiz-panel" aria-label="미응시 퀴즈">
            <header>
              <h2>미응시 퀴즈</h2>
              <strong>2건</strong>
            </header>
            <div className="student-course__quiz-list">
              {studentCourse.quizzes.map((quiz) => (
                <article className={quiz.highlight ? 'is-highlight' : undefined} key={quiz.title}>
                  <h3>{quiz.title}</h3>
                  <div>
                    <p>{quiz.description}</p>
                    {quiz.action ? <button type="button">{quiz.action}</button> : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="student-course__side-panel student-course__assignment-panel" aria-label="마감 임박 과제">
            <header>
              <h2>마감 임박 과제</h2>
              <button type="button">전체 →</button>
            </header>
            <article>
              <div>
                <h3>{studentCourse.assignment.title}</h3>
                <span>{studentCourse.assignment.due}</span>
              </div>
              <p>{studentCourse.assignment.description}</p>
            </article>
          </section>

          <section className="student-course__side-panel student-course__materials-panel" aria-label="새 자료">
            <header>
              <h2>새 자료</h2>
              <button type="button">자료실 →</button>
            </header>
            <div>
              {studentCourse.materials.map((material) => (
                <article key={material.title}>
                  <span aria-hidden="true" />
                  <div>
                    <h3>{material.title}</h3>
                    <p>{material.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </section>
  )
}
