import type { PropsWithChildren } from 'react'
import './figma-common.css'

type FigmaNoticeBannerProps = PropsWithChildren<{
  title: string
  tone?: 'info' | 'warn'
}>

// Figma component: "공통 - Notice Banner / Variants"
// 화면 상단에서 안내 메시지를 제목과 본문으로 보여주는 공통 배너입니다.
export function FigmaNoticeBanner({ children, title, tone = 'info' }: FigmaNoticeBannerProps) {
  return (
    <aside className={`figma-notice-banner figma-notice-banner--${tone}`} role="note">
      <span className="figma-notice-banner__icon">{tone === 'warn' ? '⚠' : 'i'}</span>
      <div>
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </aside>
  )
}
