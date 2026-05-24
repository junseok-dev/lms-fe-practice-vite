import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import './figma-common.css'

type FigmaButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    kind?: 'primary' | 'secondary' | 'text'
  }
>

// Figma component: "공통 - Button / Variants"
// primary, secondary, text 성격의 버튼을 Figma 버튼 컴포넌트 기준으로 맞춥니다.
export function FigmaButton({ children, className = '', kind = 'primary', ...props }: FigmaButtonProps) {
  return (
    <button className={`figma-button figma-button--${kind} ${className}`.trim()} type="button" {...props}>
      {children}
    </button>
  )
}
