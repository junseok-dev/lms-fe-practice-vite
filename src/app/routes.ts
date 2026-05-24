import { ROUTES } from '../constants/routes'

export type StudentNavItem = {
  label: string
  path: string
}

// Figma의 수강생 Sidebar에 보이는 메뉴 순서입니다.
// 기수 게시판은 없어진 페이지로 합의했기 때문에 코드 라우터와 메뉴에서 제외합니다.
export const studentNavItems: StudentNavItem[] = [
  {
    label: '대시보드',
    path: ROUTES.studentDashboard,
  },
  {
    label: '나의 과정',
    path: ROUTES.studentCourse,
  },
  {
    label: '출결/태도',
    path: ROUTES.studentAttendance,
  },
  {
    label: '기록실',
    path: ROUTES.studentRecords,
  },
  {
    label: '수강 역량 증명서',
    path: ROUTES.studentCertificate,
  },
  {
    label: '프로젝트',
    path: ROUTES.studentProjects,
  },
  {
    label: '트러블슈팅',
    path: ROUTES.studentTroubleshooting,
  },
  {
    label: '동료 평가',
    path: ROUTES.studentPeerEvaluations,
  },
  {
    label: '마일리지',
    path: ROUTES.studentMileage,
  },
  {
    label: 'PLAY',
    path: ROUTES.studentPlay,
  },
]
