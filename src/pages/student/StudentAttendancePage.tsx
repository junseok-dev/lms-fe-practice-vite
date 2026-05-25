import { Link } from 'react-router-dom'
import { FigmaAttendanceDayCell, FigmaKpiCard, FigmaStatusBadge } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { studentAttendanceOverview } from '../../mocks/studentAttendanceOverview'
import './student-learning-evidence.css'

// Figma frame: "수강생 — 출결 / 태도 (/student/attendance)"
// HRD-Net 원본 출결 캘린더와 수강생이 제출한 출결 폼 이력을 표시합니다.
export function StudentAttendancePage() {
  return (
    <section className="student-evidence student-attendance-page" aria-label="출결 / 태도">
      <div className="attendance-kpi-row">
        {studentAttendanceOverview.kpis.map((item) => (
          <FigmaKpiCard helper={item.helper} key={item.label} label={item.label} unit={item.unit} value={item.value} />
        ))}
      </div>

      <section className="attendance-calendar-panel" aria-label="HRD-Net 출결 캘린더">
        <header className="attendance-panel-header">
          <div className="attendance-panel-title">
            <h2>HRD-Net 출결 캘린더</h2>
            <div className="attendance-month-switcher" aria-label="월 선택">
              <button type="button">‹</button>
              <strong>{studentAttendanceOverview.month}</strong>
              <button type="button">›</button>
            </div>
          </div>
          <div className="attendance-legend-row">
            {studentAttendanceOverview.legend.map((item) => (
              <span className={`attendance-legend-dot attendance-legend-dot--${item.state}`} key={item.label}>
                {item.label}
              </span>
            ))}
          </div>
        </header>

        <p className="attendance-source-note">
          <i />
          HRD-Net 원본 출결 데이터입니다. 이 화면에서는 수정할 수 없습니다.
        </p>

        <div className="attendance-calendar-table">
          <div className="attendance-weekday-row">
            {studentAttendanceOverview.weekdays.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="attendance-calendar-cells">
            {studentAttendanceOverview.calendar.map((cell, index) => (
              <FigmaAttendanceDayCell day={cell.day} key={`${cell.day}-${index}`} state={cell.state} />
            ))}
          </div>
        </div>
      </section>

      <section className="attendance-submission-panel" aria-label="출결 폼 제출 이력">
        <header className="attendance-panel-header">
          <div className="attendance-history-title">
            <h2>출결 폼 제출 이력</h2>
            <span>{studentAttendanceOverview.submissions.length}건</span>
          </div>
          <Link className="figma-button figma-button--primary" to={ROUTES.studentAttendanceForm}>
            출결 폼 작성
          </Link>
        </header>

        <div className="attendance-submission-table">
          <div className="attendance-submission-row attendance-submission-row--head">
            <span>제출 일시</span>
            <span>출결 유형</span>
            <span>공가 사용</span>
            <span>공가 유형</span>
            <span>비고</span>
          </div>
          {studentAttendanceOverview.submissions.map((item) => (
            <article className="attendance-submission-row" key={`${item.submittedAt}-${item.type}`}>
              <span>{item.submittedAt}</span>
              <span>
                <FigmaStatusBadge tone={item.tone}>{item.type}</FigmaStatusBadge>
              </span>
              <span>{item.officialLeave}</span>
              <span>{item.leaveType}</span>
              <span>{item.note}</span>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
