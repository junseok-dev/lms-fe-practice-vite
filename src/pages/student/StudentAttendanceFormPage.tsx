import { Link } from 'react-router-dom'
import { FigmaButton, FigmaChip, FigmaNoticeBanner, FigmaStatusBadge, FigmaTextarea } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { attendanceFormSummary, attendanceTypes, officialLeaveTypes } from '../../mocks/studentAttendanceForm'
import './student-attendance-form.css'

// Figma frame: "수강생 — 출결 폼 (/student/attendance/form)"
// 출결 유형, 공가 사용 여부, 증빙과 비고를 입력하는 화면입니다.
export function StudentAttendanceFormPage() {
  return (
    <section className="student-attendance-form-page">
      <header className="student-attendance-mobile-topbar">
        <Link aria-label="출결/태도로 돌아가기" to={ROUTES.studentAttendance}>
          ‹
        </Link>
        <div>
          <h1>출결 폼 작성</h1>
          <p>로그인 필요 · 사이드바/헤더 없음</p>
        </div>
      </header>

      <section className="student-attendance-student-chip" aria-label="로그인한 수강생">
        <span>김</span>
        <strong>김민준 · AI 엔지니어 양성 과정 5기</strong>
      </section>

      <section className="student-attendance-overwrite-notice">
        <strong>기존 제출 내역이 있습니다</strong>
        <p>새 제출 시 같은 기수의 마지막 제출로 덮어씁니다.</p>
      </section>

      <FigmaNoticeBanner title="기존 제출 내역이 있습니다" tone="warn">
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
        <p>모바일 링크로 진입해도 로그인한 본인 계정의 과정/기수 기준으로 제출합니다.</p>
      </section>

      <section className="student-attendance-step">
        <header className="student-attendance-step__title">
          <strong>1</strong>
          <h2>출결 유형</h2>
          <FigmaStatusBadge tone="danger">필수</FigmaStatusBadge>
        </header>
        <div className="student-attendance-type-grid">
          {attendanceTypes.map((type, index) => (
            <button className={`student-attendance-type ${index === 0 ? 'is-selected' : ''}`} key={type} type="button">
              <span className="student-attendance-type__label">{type}</span>
            </button>
          ))}
        </div>
        <div className="student-attendance-timebox">
          <label>
            예상 입실 시간
            <input defaultValue="10:30" />
          </label>
          <p>지각 유형은 예상 입실 시간이 필요합니다. 유형을 바꾸면 입력 항목이 함께 바뀝니다.</p>
        </div>
      </section>

      <section className="student-attendance-step">
        <header className="student-attendance-step__title">
          <strong>2</strong>
          <h2>공가 사용</h2>
          <FigmaStatusBadge tone="neutral">보조</FigmaStatusBadge>
        </header>
        <div className="student-attendance-leavebox">
          <div className="student-attendance-leavebox__choice" aria-label="공가 사용 여부">
            <button type="button">사용</button>
            <button type="button">미사용</button>
          </div>
          <div className="student-attendance-chip-row">
            {officialLeaveTypes.map((type, index) => (
              <FigmaChip key={type} selected={index === 2}>
                {type}
              </FigmaChip>
            ))}
          </div>
          <p>기타를 선택하면 사유 직접 입력 항목이 추가로 표시됩니다.</p>
        </div>
      </section>

      <section className="student-attendance-step student-attendance-step--evidence">
        <header className="student-attendance-step__title">
          <strong>3</strong>
          <h2>증빙 자료</h2>
          <FigmaStatusBadge tone="neutral">선택</FigmaStatusBadge>
        </header>
        <div className="student-attendance-evidence-box">
          <strong>증빙 파일을 첨부할 수 있습니다</strong>
          <p>면접 확인서, 진료 확인서 등 출결 사유를 확인할 수 있는 자료를 올려주세요.</p>
        </div>
      </section>

      <section className="student-attendance-step">
        <header className="student-attendance-step__title">
          <strong>4</strong>
          <h2>비고</h2>
          <FigmaStatusBadge tone="neutral">선택</FigmaStatusBadge>
        </header>
        <FigmaTextarea placeholder="특이사항이 있으면 입력하세요" />
      </section>

      <footer className="student-attendance-form-actions">
        <Link className="figma-button figma-button--text" to={ROUTES.studentAttendance}>
          취소
        </Link>
        <div className="student-attendance-form-actions__right">
          <p>제출 후 같은 기수의 마지막 제출로 저장됩니다</p>
          <FigmaButton>제출</FigmaButton>
        </div>
      </footer>
    </section>
  )
}
