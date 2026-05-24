import type { ReactNode } from 'react'
import { FigmaKpiCard } from '../../../components/figma/common'
import {
  dashboardDueQuizzes,
  dashboardKpis,
  dashboardNotices,
  dashboardProjects,
  dashboardTodos,
  dashboardTroubleshooting,
} from '../../../mocks/studentDashboard'
import './student-dashboard.css'

// Figma의 "수강생 — 대시보드 (/student/dashboard)" 프레임을 기준으로 구현한 화면입니다.
// 카드형 대시보드가 아니라 Figma처럼 넓은 본문 안에 KPI, 리스트, 출결, 공지/프로젝트가 순서대로 배치됩니다.
export function StudentSummary() {
  return (
    <div className="student-dashboard">
      <section className="dashboard-kpi-strip" aria-label="학습 요약">
        <div className="dashboard-kpi-strip__items">
          {dashboardKpis.map((kpi) => (
            <FigmaKpiCard
              helper={kpi.helper}
              key={kpi.label}
              label={kpi.label}
              mark={kpi.mark}
              tone={kpi.tone}
              unit={kpi.unit}
              value={kpi.value}
            />
          ))}
        </div>
      </section>

      <section className="dashboard-learning-section" aria-label="학습 할 일과 퀴즈">
        <DashboardPanel count="4건" linkText="전체 →" title="오늘 · 이번 주 할 일">
          {dashboardTodos.map((todo) => (
            <TodoRow due={todo.due} key={todo.title} title={todo.title} tone={todo.tagTone} />
          ))}
        </DashboardPanel>

        <DashboardPanel count="Top 3" linkText="퀴즈 전체 →" title="마감 임박 퀴즈">
          {dashboardDueQuizzes.map((quiz) => (
            <QuizRow
              course={quiz.course}
              due={quiz.due}
              estimate={quiz.estimate}
              key={quiz.title}
              title={quiz.title}
            />
          ))}
        </DashboardPanel>
      </section>

      <section className="dashboard-attendance-section" aria-label="출결">
        <header className="dashboard-section-title">
          <div>
            <h2>출결</h2>
          </div>
          <button className="attendance-month-button" type="button">
            2026년 5월 <span>▾</span>
          </button>
        </header>

        <div className="dashboard-attendance-body">
          <div className="attendance-calendar" aria-label="2026년 5월 출결 달력">
            <div className="attendance-weekdays">
              {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            <div className="attendance-month-grid">
              {[
                null,
                null,
                null,
                null,
                { day: 1, status: '출석', tone: 'present' },
                { day: 2, status: '휴일', tone: 'holiday' },
                null,
                null,
                { day: 5, status: '출석', tone: 'present' },
                { day: 6, status: '출석', tone: 'present' },
                { day: 7, status: '출석', tone: 'present' },
                { day: 8, status: '출석', tone: 'present' },
                { day: 9, status: '출석', tone: 'present' },
                null,
                null,
                { day: 12, status: '출석', tone: 'present' },
                { day: 13, status: '오늘', tone: 'today' },
                { day: 14, status: '지각', tone: 'late' },
                { day: 15, status: '출석', tone: 'present' },
                { day: 16, status: '출석', tone: 'present' },
                null,
                null,
                { day: 19, status: '', tone: 'default' },
                { day: 20, status: '', tone: 'default' },
                { day: 21, status: '', tone: 'default' },
                { day: 22, status: '', tone: 'default' },
                { day: 23, status: '', tone: 'default' },
                null,
                null,
                { day: 26, status: '', tone: 'default' },
                { day: 27, status: '', tone: 'default' },
                { day: 28, status: '', tone: 'default' },
                { day: 29, status: '', tone: 'default' },
                { day: 30, status: '', tone: 'default' },
                null,
              ].map((cell, index) => (
                <div className={`attendance-day ${cell ? `is-${cell.tone}` : 'is-empty'}`} key={index}>
                  {cell ? (
                    <>
                      <strong>{cell.day}</strong>
                      {cell.status ? <span>{cell.status}</span> : null}
                    </>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="attendance-legend">
              <span>
                <i className="is-present" /> 출석
              </span>
              <span>
                <i className="is-late" /> 지각
              </span>
              <span>
                <i className="is-absent" /> 결석
              </span>
              <span>
                <i className="is-holiday" /> 휴일/공가
              </span>
            </div>
          </div>

          <div className="attendance-summary">
            <h3>누적 출결</h3>
            <div className="attendance-numbers">
              <div>
                <span>출석</span>
                <strong className="is-present">73</strong>
              </div>
              <div>
                <span>지각</span>
                <strong className="is-late">2</strong>
              </div>
              <div>
                <span>결석</span>
                <strong className="is-absent">1</strong>
              </div>
              <div>
                <span>조퇴</span>
                <strong>0</strong>
              </div>
              <div>
                <span>공가</span>
                <strong className="is-official">3</strong>
              </div>
            </div>
            <div className="attendance-trend-title">
              <h3>8주 출석률 추이</h3>
              <span>이번 주 92%</span>
            </div>
            <div className="attendance-chart" aria-label="학습 시간 막대 그래프">
              {[42, 52, 36, 56, 48, 24, 32].map((height, index) => (
                <div className="chart-column" key={`${height}-${index}`}>
                  <span style={{ height }} />
                  <em>{index + 1}</em>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-notifications-section" aria-label="공지와 알림">
        <DashboardPanel linkText="공지 전체 →" title="공지사항">
          {dashboardNotices.map((notice) => (
            <SimpleRow key={notice.title} meta={notice.meta} title={notice.title} />
          ))}
        </DashboardPanel>

        <DashboardPanel linkText="알림 전체 →" title="최근 알림">
          <SimpleRow meta="운영자 · 5/13" title="Spring Security 퀴즈가 오늘 18:00에 마감됩니다." />
          <SimpleRow meta="멘토 · 5/12" title="WeatherAPI 프로젝트에 피드백이 등록되었습니다." />
          <SimpleRow meta="운영자 · 5/12" title="블로그 보완 요청 코멘트가 도착했습니다." />
          <SimpleRow meta="시스템 · 5/11" title="마일리지 적립 내역이 갱신되었습니다." />
        </DashboardPanel>
      </section>

      <section className="dashboard-projects-section" aria-label="프로젝트와 트러블슈팅">
        <DashboardPanel linkText="프로젝트 전체 →" title="프로젝트">
          {dashboardProjects.map((project) => (
            <ProjectRow
              key={project.title}
              meta={project.meta}
              status={project.status}
              title={project.title}
              tone={project.tone}
            />
          ))}
        </DashboardPanel>

        <article className="dashboard-side-panel">
          <div className="trouble-list">
            <header>
              <h2>최근 트러블슈팅</h2>
              <span>본인 3건</span>
            </header>
            {dashboardTroubleshooting.map((item) => (
              <SimpleRow key={item.title} meta={item.date} title={item.title} />
            ))}
          </div>

          <div className="change-request-card">
            <div>
              <strong>변경 제안 진행</strong>
              <p>5/12 WeatherAPI 산출물 링크 수정</p>
            </div>
            <dl>
              <div>
                <dt>요청</dt>
                <dd className="is-warning">1</dd>
              </div>
              <div>
                <dt>승인</dt>
                <dd className="is-positive">2</dd>
              </div>
              <div>
                <dt>반려</dt>
                <dd>0</dd>
              </div>
            </dl>
          </div>
        </article>
      </section>
    </div>
  )
}

type DashboardPanelProps = {
  children: ReactNode
  count?: string
  linkText?: string
  title: string
}

function DashboardPanel({ children, count, linkText, title }: DashboardPanelProps) {
  return (
    <article className="dashboard-panel">
      <header className="dashboard-panel__header">
        <div>
          <h2>{title}</h2>
          {count ? <span>{count}</span> : null}
        </div>
        {linkText ? <a href="/student/dashboard">{linkText}</a> : null}
      </header>
      <div className="dashboard-panel__body">{children}</div>
    </article>
  )
}

type TodoRowProps = {
  due: string
  title: string
  tone: string
}

function TodoRow({ due, title, tone }: TodoRowProps) {
  return (
    <div className="dashboard-row dashboard-row--todo">
      <span className="todo-check" aria-hidden="true" />
      <div>
        <strong>{title}</strong>
        <p>
          <span className={`mini-tag is-${tone}`} />
          {due}
        </p>
      </div>
    </div>
  )
}

type QuizRowProps = {
  course: string
  due: string
  estimate: string
  title: string
}

function QuizRow({ course, due, estimate, title }: QuizRowProps) {
  return (
    <div className="dashboard-row dashboard-row--quiz">
      <div>
        <strong>{title}</strong>
        <p>
          {course}
          <span>•</span>
          {estimate}
        </p>
      </div>
      <div className="quiz-action">
        <em>{due}</em>
        <a href="/student/quizzes">응시 →</a>
      </div>
    </div>
  )
}

type SimpleRowProps = {
  meta: string
  title: string
}

function SimpleRow({ meta, title }: SimpleRowProps) {
  return (
    <div className="dashboard-row dashboard-row--simple">
      <strong>{title}</strong>
      <span>{meta}</span>
    </div>
  )
}

type ProjectRowProps = {
  meta: string
  status: string
  title: string
  tone: string
}

function ProjectRow({ meta, status, title, tone }: ProjectRowProps) {
  return (
    <div className="dashboard-row dashboard-row--project">
      <div>
        <strong>{title}</strong>
        <p>{meta}</p>
      </div>
      <span className={`status-badge is-${tone}`}>{status}</span>
    </div>
  )
}
