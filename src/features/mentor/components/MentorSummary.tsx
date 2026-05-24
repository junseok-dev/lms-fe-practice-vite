import { Card } from '../../../components/common/Card'

// 멘토 기능에서 사용하는 요약 컴포넌트입니다.
// 멘티 카드, 상담 일정, 피드백 상태 같은 멘토 전용 컴포넌트를 이곳에 둡니다.
export function MentorSummary() {
  return (
    <Card title="멘토 요약">
      <p>멘티 관리, 상담 일정, 피드백 요청 정보를 연결할 자리입니다.</p>
    </Card>
  )
}
