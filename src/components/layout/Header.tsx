// 대시보드 상단 헤더입니다.
// 현재 사용자 정보, 알림, 검색, 로그아웃 버튼 같은 전역 액션을 배치합니다.
export function Header() {
  return (
    <header className="layout-header">
      <div>
        <strong>LMS</strong>
        <span>Frontend Practice</span>
      </div>
      <button type="button">프로필</button>
    </header>
  )
}
