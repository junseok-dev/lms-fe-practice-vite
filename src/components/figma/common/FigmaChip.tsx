import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import './figma-common.css'

type FigmaChipProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    selected?: boolean
  }
>

// Figma component: "공통 - Chip / Variants"
// 필터나 짧은 선택지를 표시할 때 쓰는 공통 칩입니다. 선택 상태만 variant로 관리합니다.
export function FigmaChip({ children, className = '', selected = false, ...props }: FigmaChipProps) {
  return (
    <button
      className={`figma-chip ${selected ? 'is-selected' : ''} ${className}`.trim()}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
