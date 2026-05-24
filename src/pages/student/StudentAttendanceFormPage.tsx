import { Link } from 'react-router-dom'
import { FigmaButton, FigmaChip, FigmaNoticeBanner, FigmaStatusBadge, FigmaTextarea } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { attendanceFormSummary, attendanceTypes, officialLeaveTypes } from '../../mocks/studentAttendanceForm'
import './student-attendance-form.css'

// Figma frame: "수강생 — 출결 폼 (/student/attendance/form)"
// 출결 유형, 공가 사용 여부, 비고를 입력하는 화면입니다. 현재는 제출 기능 없이 화면 흐름만 연습합니다.
export function StudentAttendanceFormPage() {
  return (
    <section className="student-attendance-form-page">
      <FigmaNoticeBanner
        title="기존 제출 내역이 있습니다"
        tone="warn"
      >
        새로 제출하면 같은 기수의 마지막 제출 내용으로 덮어씁니다. 이전 제출 내용은 보존되지 않습니다.
      </FigmaNoticeBanner>

      <section className="student-attendance-form-summary">
        <div className="student-attendance-form-summary__fields">
          {attendanceFormSummary.map((item) => (
            <div className="student-attendance-form-summary__field" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
        <p>모바일 링크로 진입해도 로그인한 본인 계정의 과정/기수 기준으로 제출됩니다.</p>
      </section>

      <section className="student-attendance-step">
        <header className="student-attendance-step__title">
          <strong>1</strong>
          <h2>출결 유형</h2>
          <FigmaStatusBadge tone="danger">필수</FigmaStatusBadge>
        </header>
        <div className="student-attendance-type-grid">
          {attendanceTypes.map((type, index) => (
            <div className={`student-attendance-type ${index === 0 ? 'is-selected' : ''}`} key={type}>
              <span>{type}</span>
            </div>
          ))}
        </div>
        <div className="student-attendance-timebox">
          <label>
            예상 입실 시간
            <input defaultValue="09:40" />
          </label>
          <p>지각 유형은 예상 입실 시간이 필요합니다. 유형을 바꾸면 입력 항목도 함께 바뀝니다.</p>
        </div>
      </section>

      <section className="student-attendance-step">
        <header className="student-attendance-step__title">
          <strong>2</strong>
          <h2>공가 사용</h2>
          <FigmaStatusBadge tone="neutral">선택</FigmaStatusBadge>
        </header>
        <div className="student-attendance-leavebox">
          <div className="student-attendance-leavebox__head">
            <label className="student-attendance-toggle">
              <span />
              공가로 처리 요청
            </label>
          </div>
          <div className="student-attendance-chip-row">
            {officialLeaveTypes.map((type) => (
              <FigmaChip key={type}>{type}</FigmaChip>
            ))}
          </div>
          <p>‘기타’ 선택 시 사유 직접 입력 항목이 추가로 표시됩니다.</p>
        </div>
      </section>

      <section className="student-attendance-step">
        <header className="student-attendance-step__title">
          <strong>3</strong>
          <h2>비고</h2>
          <FigmaStatusBadge tone="neutral">선택</FigmaStatusBadge>
        </header>
        <p>결석을 선택한 경우 1단계에서 사유를 입력하므로 이 항목은 표시되지 않습니다.</p>
        <FigmaTextarea placeholder="특이사항이 있으면 입력하세요 (선택)" />
      </section>

      <footer className="student-attendance-form-actions">
        <Link className="figma-button figma-button--text" to={ROUTES.studentAttendance}>
          ‹  취소
        </Link>
        <div className="student-attendance-form-actions__right">
          <p>제출 전 확인 후 같은 기수의 마지막 제출로 저장됩니다</p>
          <FigmaButton>제출</FigmaButton>
        </div>
      </footer>
    </section>
  )
}
