import { RoleLayout } from '../../layouts/RoleLayout'
import { AdminSummary } from '../../features/admin/components/AdminSummary'

// 운영자 대시보드 페이지입니다.
// 회원, 과정, 정산, 마일리지, 운영 요청 같은 관리자 기능의 시작점입니다.
export function AdminDashboardPage() {
  return (
    <RoleLayout role="admin">
      <AdminSummary />
    </RoleLayout>
  )
}
