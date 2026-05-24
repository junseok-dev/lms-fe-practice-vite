import { FigmaButton } from './FigmaButton'
import { FigmaStatusBadge } from './FigmaStatusBadge'
import './figma-common.css'

type FigmaMarketplaceProductCardProps = {
  category: string
  name: string
  priceInfo: string
  remaining: string
}

// Figma component: "공통 - Marketplace Product Card / Component"
// 마일리지 상품 신청 화면에서 반복되는 상품 카드입니다. 텍스트만 바꿔 같은 구조를 재사용합니다.
export function FigmaMarketplaceProductCard({
  category,
  name,
  priceInfo,
  remaining,
}: FigmaMarketplaceProductCardProps) {
  return (
    <article className="figma-marketplace-product-card">
      <div className="figma-marketplace-product-card__top">
        <FigmaStatusBadge tone="info">{category}</FigmaStatusBadge>
        <h3>{name}</h3>
        <p>{priceInfo}</p>
      </div>
      <div className="figma-marketplace-product-card__bottom">
        <span>{remaining}</span>
        <FigmaButton>신청</FigmaButton>
      </div>
    </article>
  )
}
