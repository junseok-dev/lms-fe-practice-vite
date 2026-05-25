import { Link } from 'react-router-dom'
import { FigmaStatusBadge } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { studentProjects } from '../../mocks/studentProjects'
import './student-projects.css'

// Figma frame: "수강생 — 프로젝트 목록 (/student/projects)"
// 참여 중인 팀·개인 프로젝트와 인증 상태, 워크스페이스 진입 액션을 보여줍니다.
export function StudentProjectsPage() {
  return (
    <section className="student-projects" aria-label="프로젝트 목록">
      <header className="student-projects__toolbar">
        <div>
          <h2>{studentProjects.summary.title}</h2>
          <span>{studentProjects.summary.count}</span>
        </div>
        <Link className="figma-button figma-button--primary" to={ROUTES.studentProjectsNew}>
          {studentProjects.summary.action}
        </Link>
      </header>

      <div className="student-projects__list">
        {studentProjects.items.map((project) => (
          <article className="student-project-card" key={project.id}>
            <header>
              <div>
                <h3>{project.title}</h3>
                {project.badges.map((badge) => (
                  <FigmaStatusBadge key={badge.label} tone={badge.tone}>
                    {badge.label}
                  </FigmaStatusBadge>
                ))}
              </div>
              <Link className="figma-button figma-button--secondary" to={ROUTES.studentProjectWorkspace.replace(':projectId', project.id)}>
                {project.action}
              </Link>
            </header>

            <p className="student-project-card__meta">
              <span>{project.role}</span>
              <i />
              <span>{project.type}</span>
              <i />
              <span>{project.period}</span>
            </p>

            <div className="student-project-card__stacks">
              {project.stacks.map((stack) => (
                <span key={stack}>{stack}</span>
              ))}
            </div>

            <div className="student-project-card__contribution">
              <span>기여도</span>
              <div>
                <span style={{ width: `${project.contribution}%` }} />
              </div>
              <strong>{project.contribution}%</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
