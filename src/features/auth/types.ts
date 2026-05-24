// 인증 기능에서만 사용하는 타입을 정의합니다.
// 여러 기능에서 같이 쓰이는 User 타입은 src/types/user.ts로 올려서 공유합니다.
export type LoginRequest = {
  email: string
  password: string
}
