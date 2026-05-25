import './figma-common.css'

export type FigmaAttendanceState = 'empty' | 'present' | 'late' | 'earlyLeave' | 'outing' | 'absent'

type FigmaAttendanceDayCellProps = {
  day: string
  state?: FigmaAttendanceState
}

const stateLabels: Record<Exclude<FigmaAttendanceState, 'empty'>, string> = {
  absent: '결석',
  earlyLeave: '조퇴',
  late: '지각',
  outing: '외출',
  present: '출석',
}

// Figma component: "공통 - Attendance Day Cell / Variants"
// HRD 출결 캘린더의 날짜와 출결 상태 배지를 Figma variants 기준으로 표시합니다.
export function FigmaAttendanceDayCell({ day, state = 'empty' }: FigmaAttendanceDayCellProps) {
  const label = state === 'empty' ? null : stateLabels[state]

  return (
    <div className={`figma-attendance-day figma-attendance-day--${state}`}>
      <span>{day}</span>
      {label ? <strong>{label}</strong> : null}
    </div>
  )
}
