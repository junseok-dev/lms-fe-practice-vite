import type { PropsWithChildren } from 'react'
import './figma-common.css'

type FigmaToastProps = PropsWithChildren<{
  type?: 'success' | 'warning' | 'info'
}>

// Figma component: "공통 - Toast / Variants"
// 저장/삭제/제출 완료처럼 화면 우측 하단에 잠깐 노출되는 피드백 메시지입니다.
export function FigmaToast({ children, type = 'success' }: FigmaToastProps) {
  return (
    <aside className={`figma-toast figma-toast--${type}`} role="status">
      <span>{type === 'success' ? '✓' : '!'}</span>
      <p>{children}</p>
    </aside>
  )
}
