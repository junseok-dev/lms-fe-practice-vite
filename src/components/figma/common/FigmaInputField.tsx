import type { InputHTMLAttributes } from 'react'
import './figma-common.css'

type FigmaInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

// Figma component: "공통 - Input Field / Variants"
// label과 input을 항상 함께 두어 Figma 폼 필드의 구조와 접근성을 같이 유지합니다.
export function FigmaInputField({ id, label, ...props }: FigmaInputFieldProps) {
  const inputId = id ?? props.name ?? label

  return (
    <label className="figma-input-field" htmlFor={inputId}>
      <span>{label}</span>
      <input id={inputId} {...props} />
    </label>
  )
}
