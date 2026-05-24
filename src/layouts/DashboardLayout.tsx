import type { PropsWithChildren } from 'react'
import { Header } from '../components/layout/Header'
import { Sidebar } from '../components/layout/Sidebar'
import './layouts.css'
import '../components/layout/layout.css'

// 로그인 이후의 공통 화면 틀입니다.
// 수강생, 멘토, 강사, 운영자 화면이 모두 Header + Sidebar + Content 구조를 공유할 때 사용합니다.
export function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <section className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">{children}</div>
      </div>
    </section>
  )
}
