import type { PropsWithChildren } from 'react'
import './layouts.css'

// 로그인, 비밀번호 찾기처럼 인증 전 화면에서 사용하는 레이아웃입니다.
// 사이드바 없이 가운데 정렬된 폼 화면이 필요할 때 이 컴포넌트로 감싸면 됩니다.
export function AuthLayout({ children }: PropsWithChildren) {
  return <section className="auth-layout">{children}</section>
}
