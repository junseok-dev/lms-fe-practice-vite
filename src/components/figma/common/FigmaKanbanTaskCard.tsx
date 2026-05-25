import { FigmaStatusBadge } from './FigmaStatusBadge'
import './figma-common.css'

export type FigmaKanbanTaskCardProps = {
  title: string
  meta: string
  tag: string
  priority: string
}

// Figma component: "공통 - Kanban Task Card / Component"
// 프로젝트 보드 탭의 작업 카드를 Figma 공통 컴포넌트 구조와 동일하게 재사용합니다.
export function FigmaKanbanTaskCard({ title, meta, tag, priority }: FigmaKanbanTaskCardProps) {
  return (
    <article className="figma-kanban-task-card">
      <h3>{title}</h3>
      <p>{meta}</p>
      <div className="figma-kanban-task-card__badges">
        <FigmaStatusBadge tone="ok">{tag}</FigmaStatusBadge>
        <FigmaStatusBadge tone="warning">{priority}</FigmaStatusBadge>
      </div>
    </article>
  )
}
