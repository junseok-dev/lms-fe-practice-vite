import { FigmaStatusBadge } from './FigmaStatusBadge'
import './figma-common.css'

type WorkspaceDayCellTone = 'ok' | 'purple' | 'warning' | 'neutral' | 'info' | 'danger'

export type FigmaWorkspaceDayCellProps = {
  day?: number
  event?: {
    label: string
    tone?: WorkspaceDayCellTone
  }
}

// Figma component: "공통 - Workspace Day Cell / Variants"
// 프로젝트 워크스페이스 캘린더의 빈 셀과 일정 셀 상태를 재사용합니다.
export function FigmaWorkspaceDayCell({ day, event }: FigmaWorkspaceDayCellProps) {
  return (
    <div className="figma-workspace-day-cell">
      {day ? <span>{day}</span> : null}
      {event ? <FigmaStatusBadge tone={event.tone ?? 'info'}>{event.label}</FigmaStatusBadge> : null}
    </div>
  )
}
