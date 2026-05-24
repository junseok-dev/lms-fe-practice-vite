// 인증 상태를 읽고 갱신하는 커스텀 훅 자리입니다.
// 실제 로그인 연동 후에는 현재 사용자, 토큰, 로그아웃 함수를 여기서 제공하면 됩니다.
export function useAuth() {
  return {
    isLoggedIn: false,
    user: null,
  }
}
