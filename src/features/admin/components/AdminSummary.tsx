import { Card } from '../../../components/common/Card'

// 운영자 기능에서 사용하는 요약 컴포넌트입니다.
// 회원 관리, 과정 관리, 마일리지, 정산 등 운영 전용 UI를 이곳에 둡니다.
export function AdminSummary() {
  return (
    <Card title="운영자 요약">
      <p>회원, 과정, 정산, 마일리지, 운영 요청 정보를 연결할 자리입니다.</p>
    </Card>
  )
}
