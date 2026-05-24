import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import './common.css'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary'
  }
>

// 여러 화면에서 재사용할 버튼입니다.
// 색상, 크기, disabled 상태처럼 반복되는 버튼 규칙은 이 파일에서 먼저 맞춥니다.
export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={`ui-button ui-button--${variant}`} type="button" {...props}>
      {children}
    </button>
  )
}
