import { RoleLayout } from '../../layouts/RoleLayout'
import { MentorSummary } from '../../features/mentor/components/MentorSummary'

// 멘토 대시보드 페이지입니다.
// 멘티 목록, 상담 일정, 피드백 요청처럼 멘토 업무의 출발점을 둡니다.
export function MentorDashboardPage() {
  return (
    <RoleLayout role="mentor">
      <MentorSummary />
    </RoleLayout>
  )
}
