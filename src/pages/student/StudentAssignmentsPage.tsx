import { Link } from 'react-router-dom'
import { FigmaStatusBadge, FigmaTabsBar } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { studentAssignments } from '../../mocks/studentAssignments'
import './student-assignment-flow.css'

// Figma frame: "수강생 — 과제 / 실습 (/student/course/assignments)"
// 수강생이 과제 상태를 확인하고 상세 제출 화면으로 이동하는 목록 페이지입니다.
export function StudentAssignmentsPage() {
  return (
    <section className="student-assignments-page">
      <FigmaTabsBar
        activeValue="assignments"
        items={[
          { label: '강의 홈', to: ROUTES.studentCourse, value: 'home' },
          { badge: '2', label: '퀴즈', to: ROUTES.studentQuizzes, value: 'quizzes' },
          { badge: '24', label: '자료실', to: ROUTES.studentCourseMaterials, value: 'materials' },
          { badge: '1', label: '과제/실습', to: ROUTES.studentCourseAssignments, value: 'assignments' },
          { label: '역량 리포트', to: ROUTES.studentCourse, value: 'report' },
        ]}
      />

      <div className="student-assignments-page__filters">
        <span className="student-assignments-page__select">상태: 전체 ▾</span>
      </div>

      <div className="student-assignment-list">
        {studentAssignments.map((assignment) => (
          <article className="student-assignment-card" key={assignment.id}>
            <div className="student-assignment-card__body">
              <div className="student-assignment-card__title">
                <h2>{assignment.title}</h2>
                <FigmaStatusBadge tone={assignment.statusTone}>{assignment.statusLabel}</FigmaStatusBadge>
              </div>
              <p className="student-assignment-card__meta">
                <span>{assignment.category}</span>
                <i className="student-assignment-card__dot" />
                <strong>{assignment.dueLabel}</strong>
                <i className="student-assignment-card__dot" />
                <b>{assignment.scoreLabel}</b>
                {assignment.feedback ? (
                  <>
                    <i className="student-assignment-card__dot" />
                    <span>{assignment.feedback}</span>
                  </>
                ) : null}
              </p>
            </div>
            <Link
              className={`figma-button figma-button--${assignment.actionKind}`}
              to={ROUTES.studentCourseAssignmentDetail.replace(':assignmentId', assignment.id)}
            >
              {assignment.actionLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
