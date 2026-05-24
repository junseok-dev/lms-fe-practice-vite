import type { UserRole } from './role'

// 로그인한 사용자 정보를 표현하는 공통 타입입니다.
// 여러 feature에서 함께 쓰기 때문에 src/types에 둡니다.
export type User = {
  id: string
  name: string
  email: string
  role: UserRole
  initial: string
}
