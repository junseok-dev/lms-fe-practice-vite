import type { PropsWithChildren } from 'react'
import type { UserRole } from '../types/role'

type RoleLayoutProps = PropsWithChildren<{
  role: UserRole
}>

// 특정 역할 화면에서만 필요한 공통 처리를 모아둘 자리입니다.
// 예: role별 메뉴, 접근 권한 체크, 페이지 제목 prefix 등을 이곳에서 처리할 수 있습니다.
export function RoleLayout({ role, children }: RoleLayoutProps) {
  return (
    <section data-role={role}>
      {children}
    </section>
  )
}
