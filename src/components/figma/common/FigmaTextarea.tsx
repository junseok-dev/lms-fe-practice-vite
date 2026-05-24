import type { TextareaHTMLAttributes } from 'react'
import './figma-common.css'

type FigmaTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
}

// Figma component: "공통 - Textarea / Variants"
// 긴 본문이나 메모를 입력하는 영역입니다. label이 있으면 접근성을 위해 연결합니다.
export function FigmaTextarea({ id, label, ...props }: FigmaTextareaProps) {
  const textareaId = id ?? props.name ?? label

  if (label) {
    return (
      <label className="figma-textarea-field" htmlFor={textareaId}>
        <span>{label}</span>
        <textarea id={textareaId} {...props} />
      </label>
    )
  }

  return <textarea className="figma-textarea" id={textareaId} {...props} />
}
