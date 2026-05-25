import { FigmaButton } from './FigmaButton'
import { FigmaStatusBadge } from './FigmaStatusBadge'
import './figma-common.css'

export type FigmaDocumentFileCardProps = {
  title: string
  meta: string
  status: string
}

// Figma component: "공통 - Document File Card / Component"
// 프로젝트 문서·파일·위키 탭에서 문서명, 메타, 상태, 열기 액션을 동일한 카드로 표시합니다.
export function FigmaDocumentFileCard({ title, meta, status }: FigmaDocumentFileCardProps) {
  return (
    <article className="figma-document-file-card">
      <div>
        <h3>{title}</h3>
        <p>{meta}</p>
      </div>
      <span aria-hidden="true" />
      <footer>
        <FigmaStatusBadge tone="info">{status}</FigmaStatusBadge>
        <FigmaButton kind="secondary">열기</FigmaButton>
      </footer>
    </article>
  )
}
