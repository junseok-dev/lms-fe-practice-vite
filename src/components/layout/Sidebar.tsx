import { Link } from 'react-router-dom'
import { studentNavItems } from '../../app/routes'

// 범용 사이드바 컴포넌트입니다.
// 현재 실습에서는 StudentSidebar를 주로 쓰지만, 다른 역할 화면을 만들 때 재사용할 수 있습니다.
export function Sidebar() {
  return (
    <aside className="layout-sidebar" aria-label="주요 메뉴">
      <strong>Navigation</strong>
      <nav>
        {studentNavItems.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
