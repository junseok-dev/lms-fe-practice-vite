import { Link } from 'react-router-dom'
import './figma-common.css'

type FigmaTabsBarProps = {
  activeValue: string
  items: {
    badge?: string
    label: string
    to?: string
    value: string
  }[]
}

// Figma component: "공통 - Tabs Bar / Base"
// 탭 UI는 Figma 공통 모양을 유지하고, to가 있는 항목만 라우팅 링크로 동작하게 합니다.
export function FigmaTabsBar({ activeValue, items }: FigmaTabsBarProps) {
  return (
    <div className="figma-tabs" role="tablist">
      {items.map((item) => {
        const className = item.value === activeValue ? 'is-active' : undefined

        return item.to ? (
          <Link aria-selected={item.value === activeValue} className={className} key={item.value} role="tab" to={item.to}>
            {item.label}
            {item.badge ? <span>{item.badge}</span> : null}
          </Link>
        ) : (
          <button aria-selected={item.value === activeValue} className={className} key={item.value} role="tab" type="button">
            {item.label}
            {item.badge ? <span>{item.badge}</span> : null}
          </button>
        )
      })}
    </div>
  )
}
