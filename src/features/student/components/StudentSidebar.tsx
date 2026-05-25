import { useLocation } from 'react-router-dom'
import { studentNavItems } from '../../../app/routes'
import { FigmaSidebar } from '../../../components/figma/common'
import { ROUTES } from '../../../constants/routes'

// 수강생 메뉴 데이터를 Figma 공통 Sidebar에 전달하는 연결 컴포넌트입니다.
// Sidebar 스타일과 active 상태 표현은 src/components/figma/common/FigmaSidebar.tsx에서 관리합니다.
export function StudentSidebar() {
  const location = useLocation()

  const activeLabel = (() => {
    if (location.pathname === ROUTES.studentProfile) return '대시보드'
    if (location.pathname.startsWith('/student/course')) return '나의 과정'
    if (location.pathname.startsWith('/student/quizzes')) return '나의 과정'
    if (location.pathname.startsWith('/student/attendance')) return '출결/태도'
    if (location.pathname.startsWith('/student/records')) return '기록실'
    if (location.pathname.startsWith('/student/certificate')) return '수강 역량 증명서'
    if (location.pathname.startsWith('/student/projects')) return '프로젝트'
    if (location.pathname.startsWith('/student/troubleshooting')) return '트러블슈팅'
    if (location.pathname.startsWith('/student/peer')) return '동료 평가'
    if (location.pathname.startsWith('/student/mileage')) return '마일리지'
    if (location.pathname.startsWith('/student/play')) return 'PLAY'
    return undefined
  })()

  return <FigmaSidebar activeLabel={activeLabel} items={studentNavItems} roleLabel="수강생" />
}
