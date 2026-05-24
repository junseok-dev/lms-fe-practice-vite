import type { InputHTMLAttributes } from 'react'
import './common.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

// 로그인, 검색, 필터 폼에서 공통으로 사용할 입력 필드입니다.
// label을 필수로 받아 접근성과 화면 구조를 같이 챙깁니다.
export function Input({ label, id, ...props }: InputProps) {
  const inputId = id ?? props.name ?? label

  return (
    <label className="ui-field" htmlFor={inputId}>
      <span>{label}</span>
      <input id={inputId} {...props} />
    </label>
  )
}
