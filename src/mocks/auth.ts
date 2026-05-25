import type { UserRole } from '../types/role'
import { ROUTES } from '../constants/routes'

export type DemoAccount = {
  id: string
  email: string
  password: string
  name: string
  role: UserRole
  label: string
  nextPath: string
  needsOnboarding?: boolean
  disabled?: boolean
}

// Figma의 로그인 변수 상황을 프론트 실습용으로 재현하기 위한 mock 계정입니다.
// 백엔드가 없으므로 입력값에 따라 성공/비활성/역할 라우팅 흐름을 나눕니다.
export const demoAccounts: DemoAccount[] = [
  {
    id: 'student-new',
    email: 'student@example.com',
    password: '1234',
    name: '김철수',
    role: 'student',
    label: '수강생 온보딩 필요',
    nextPath: ROUTES.studentOnboarding,
    needsOnboarding: true,
  },
  {
    id: 'student-ready',
    email: 'playdata',
    password: '1234',
    name: '김수강',
    role: 'student',
    label: '수강생 온보딩',
    nextPath: ROUTES.studentOnboarding,
    needsOnboarding: true,
  },
  {
    id: 'mentor-demo',
    email: 'mentor@example.com',
    password: '1234',
    name: '박멘토',
    role: 'mentor',
    label: '멘토 계정 권한 예시',
    nextPath: `${ROUTES.forbidden}?reason=forbidden_role`,
  },
  {
    id: 'instructor-demo',
    email: 'instructor@example.com',
    password: '1234',
    name: '이강사',
    role: 'instructor',
    label: '강사 계정 권한 예시',
    nextPath: `${ROUTES.forbidden}?reason=forbidden_role`,
  },
  {
    id: 'disabled',
    email: 'disabled@example.com',
    password: '1234',
    name: '중지 계정',
    role: 'student',
    label: '비활성 계정',
    nextPath: ROUTES.login,
    disabled: true,
  },
]

export function findDemoAccount(email: string, password: string) {
  return demoAccounts.find(
    (account) => account.email === email && account.password === password,
  )
}
