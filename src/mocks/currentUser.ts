import type { User } from '../types/user'

// Figma 대시보드 헤더에 표시되는 수강생 정보를 기준으로 만든 mock 사용자입니다.
// 추후 백엔드가 생기면 이 구조를 실제 API 응답에 맞춰 교체합니다.
export const currentUser: User = {
  id: 'student-1',
  name: '김철수',
  email: 'student@example.com',
  role: 'student',
  initial: '김',
}
