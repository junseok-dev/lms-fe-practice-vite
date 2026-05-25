import { NavLink } from 'react-router-dom'
import type { StudentNavItem } from '../../../app/routes'
import './figma-common.css'

type FigmaSidebarProps = {
  activeLabel?: string
  items: StudentNavItem[]
  roleLabel: string
}

// Figma component: "공통 - Sidebar / Base"
// 메뉴명과 역할 라벨만 바꾸면 수강생, 멘토, 강사, 운영자 화면에서 같은 사이드바 구조를 재사용합니다.
export function FigmaSidebar({ activeLabel, items, roleLabel }: FigmaSidebarProps) {
  return (
    <aside className="figma-sidebar" aria-label={`${roleLabel} 메뉴`}>
      <div className="figma-sidebar__brand">
        <strong>
          PLAY<span>DATA</span>
        </strong>
        <em>{roleLabel}</em>
      </div>

      <nav className="figma-sidebar__nav">
        {items.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive || item.label === activeLabel ? 'figma-sidebar__link is-active' : 'figma-sidebar__link'
            }
            key={item.label}
            to={item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
