import type { PropsWithChildren } from 'react'
import './figma-common.css'

type FigmaStatusBadgeProps = PropsWithChildren<{
  tone?: 'ok' | 'purple' | 'warning' | 'neutral' | 'info' | 'danger'
}>

// Figma component: "공통 - Status Badge / Variants"
// 상태를 짧은 라벨로 보여주는 badge이며, Figma의 tone variants를 코드에서 재사용합니다.
export function FigmaStatusBadge({ children, tone = 'neutral' }: FigmaStatusBadgeProps) {
  return <span className={`figma-status-badge figma-status-badge--${tone}`}>{children}</span>
}
