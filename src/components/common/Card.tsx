import type { PropsWithChildren } from 'react'
import './common.css'

type CardProps = PropsWithChildren<{
  title?: string
}>

// KPI 카드, 파일 카드, 멘티 카드처럼 박스 형태 UI의 기본 껍데기입니다.
// Figma의 공통 Card류 컴포넌트를 코드로 옮길 때 이 파일을 확장하면 됩니다.
export function Card({ title, children }: CardProps) {
  return (
    <article className="ui-card">
      {title ? <h2>{title}</h2> : null}
      {children}
    </article>
  )
}
