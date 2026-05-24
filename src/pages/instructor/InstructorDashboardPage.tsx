import { RoleLayout } from '../../layouts/RoleLayout'
import { InstructorSummary } from '../../features/instructor/components/InstructorSummary'

// 강사 대시보드 페이지입니다.
// 강의 운영, 출결, 과제 평가, 자료 관리로 이동하는 요약 화면입니다.
export function InstructorDashboardPage() {
  return (
    <RoleLayout role="instructor">
      <InstructorSummary />
    </RoleLayout>
  )
}
