import { studentAttendance } from '../../mocks/studentLearningEvidence'
import './student-learning-evidence.css'

// Figma의 수강생 "출결/태도" 영역을 구현하는 페이지입니다.
// 출결 API가 없으므로 출석률, 월별 캘린더, 태도 지표, 최근 기록을 mock 데이터로 표시합니다.
export function StudentAttendancePage() {
  return (
    <section className="student-evidence" aria-label="출결/태도">
      <div className="evidence-kpis">
        {studentAttendance.summary.map((item) => (
          <article className="evidence-kpi" key={item.label}>
            <span>{item.label}</span>
            <strong>
              {item.value}
              <small>{item.unit}</small>
            </strong>
            <p>{item.note}</p>
            <i className={`tone-${item.tone}`} />
          </article>
        ))}
      </div>

      <div className="attendance-grid">
        <section className="evidence-panel attendance-calendar" aria-label="월별 출결 캘린더">
          <header>
            <h2>월별 출결 현황</h2>
            <p>현재 과정 기준 출석·지각·결석 기록</p>
          </header>

          <div className="attendance-months">
            {studentAttendance.months.map((month, index) => (
              <button className={index === 2 ? 'is-active' : undefined} key={month} type="button">
                {month}
              </button>
            ))}
          </div>

          <div className="attendance-days">
            {['월', '화', '수', '목', '금'].map((day) => (
              <span key={day}>{day}</span>
            ))}
            {studentAttendance.calendar.flatMap((week, weekIndex) =>
              week.map((status, dayIndex) => (
                <div className={`attendance-day attendance-day--${status}`} key={`${weekIndex}-${dayIndex}`}>
                  <strong>{weekIndex * 5 + dayIndex + 1}</strong>
                  <span>{status}</span>
                </div>
              )),
            )}
          </div>
        </section>

        <aside className="evidence-panel attitude-panel" aria-label="태도 지표">
          <header>
            <h2>태도 리포트</h2>
            <p>학습 참여와 협업 태도 지표</p>
          </header>

          {studentAttendance.attitudes.map((item) => (
            <div className="attitude-row" key={item.label}>
              <p>
                <span>{item.label}</span>
                <strong>{item.value}점</strong>
              </p>
              <div>
                <span style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </aside>
      </div>

      <section className="evidence-panel attendance-log" aria-label="최근 출결 기록">
        <header>
          <h2>최근 출결 기록</h2>
          <p>운영자가 확인하는 원천 출결 로그와 동일한 형식</p>
        </header>

        <div className="attendance-table">
          <div className="attendance-table__head">
            <span>일자</span>
            <span>상태</span>
            <span>시간</span>
            <span>비고</span>
          </div>
          {studentAttendance.logs.map((log) => (
            <article className="attendance-table__row" key={`${log.date}-${log.type}`}>
              <span>{log.date}</span>
              <strong className={`attendance-status attendance-status--${log.type}`}>{log.type}</strong>
              <span>{log.time}</span>
              <span>{log.note}</span>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
