import type { PropsWithChildren } from 'react'
import './figma-common.css'

type FigmaToastProps = PropsWithChildren<{
  closeLabel?: string
  closable?: boolean
  position?: 'bottom' | 'top' | 'content-top'
  showIndicator?: boolean
  type?: 'success' | 'warning' | 'info'
  variant?: 'light' | 'dark' | 'brand'
}>

// Figma component: "공통 - Toast / Variants"
// 저장·삭제·제출 완료처럼 화면 오른쪽에 짧게 노출되는 피드백 메시지입니다.
export function FigmaToast({
  children,
  closable = false,
  closeLabel = '×',
  position = 'bottom',
  showIndicator,
  type = 'success',
  variant = 'light',
}: FigmaToastProps) {
  const shouldShowIndicator = showIndicator ?? variant === 'light'

  return (
    <aside className={`figma-toast figma-toast--${type} figma-toast--${variant} figma-toast--${position}`} role="status">
      {shouldShowIndicator ? <span>{variant === 'light' ? (type === 'success' ? '✓' : '!') : ''}</span> : null}
      <p>{children}</p>
      {closable ? (
        <button aria-label="알림 닫기" type="button">
          {closeLabel}
        </button>
      ) : null}
    </aside>
  )
}
