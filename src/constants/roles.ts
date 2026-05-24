import type { UserRole } from '../types/role'

// 역할별 표시 이름입니다.
// UI 라벨이 바뀌어도 코드 내부 role 값은 안정적으로 유지합니다.
export const ROLE_LABELS: Record<UserRole, string> = {
  student: '수강생',
  mentor: '멘토',
  instructor: '강사',
  admin: '운영자',
}
